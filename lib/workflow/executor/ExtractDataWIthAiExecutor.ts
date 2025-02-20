import { ExecutionEnvironment } from "@/types/executor";
import { waitFor } from "@/lib/helper/waitFor";
import { ExtractDataWithAITask } from "../task/ExtractDataWithAI";
import prisma from "@/lib/prisma";
import { symmetricDecrypt } from "@/lib/encryption";
import OpenAI from "openai";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function ExtractDataWithAiExecutor(
  environment: ExecutionEnvironment<typeof ExtractDataWithAITask>
): Promise<boolean> {
  try {
    const credentials = environment.getInput("Credentials");
    const aiProvider = environment.getInput("AI Provider") || "openai";
    const prompt = environment.getInput("Prompt");
    const content = environment.getInput("Content");
    const outputFormat = environment.getInput("Output Format") || "json";

    if (!credentials || !prompt || !content) {
      environment.log.error("Required inputs are missing");
      return false;
    }

    const credential = await prisma.credential.findUnique({
      where: { id: credentials },
    });

    if (!credential) {
      environment.log.error("Credential not found");
      return false;
    }

    const plainCredentialValue = symmetricDecrypt(credential.value);
    if (!plainCredentialValue) {
      environment.log.error("Failed to decrypt credential value");
      return false;
    }

    const systemPrompt =
      outputFormat === "json"
        ? "You are a webscraper helper that extracts data from HTML or text. You will be given a piece of text or HTML content as input and also the prompt with the data you have to extract. The response should always be only the extracted data as a JSON array or object, without any additional words or explanation. Analyze the input carefully and extract data precisely based on the prompt. If no data is found, return an empty JSON array. Work only with the provided content and ensure the output is always a valid JSON array without any surrounding text or markdown."
        : "You are a text summarization assistant. You will be given a piece of text and a prompt describing what to focus on. Provide a clear, concise summary in plain text format. Focus on the key points mentioned in the prompt. Keep the summary direct and informative, without any JSON formatting.";

    // Estimate tokens (rough approximation: 4 chars = 1 token)
    const estimatedTokens = Math.ceil(content.length / 4);
    // if (estimatedTokens > 60000) {
    //   environment.log.error(
    //     `Content too large: ~${estimatedTokens} tokens. Maximum is 60k tokens.`
    //   );
    //   return false;
    // }

    try {
      let result: string;

      if (aiProvider === "openai") {
        const openai = new OpenAI({
          apiKey: plainCredentialValue,
        });

        try {
          const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
              {
                role: "system",
                content: systemPrompt,
              },
              {
                role: "user",
                content: `${content}\n\nInstructions:\n${prompt}`,
              },
            ],
            temperature: 0,
            response_format: { type: "json_object" },
          });

          result = response.choices[0]?.message?.content || "";
          environment.log.info("Successfully generated content with OpenAI");
        } catch (error: any) {
          environment.log.error(`OpenAI API error: ${error.message}`);
          throw error;
        }
      } else if (aiProvider === "deepseek") {
        const deepseek = new OpenAI({
          apiKey: plainCredentialValue,
          baseURL: "https://api.deepseek.com",
        });
        const response = await deepseek.chat.completions.create({
          model: "deepseek-chat",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: content },
            { role: "user", content: prompt },
          ],
          temperature: outputFormat === "json" ? 0 : 0.7,
          max_tokens: 4000,
        });
        result = response.choices[0].message?.content || "";
      } else if (aiProvider === "gemini") {
        try {
          const genAI = new GoogleGenerativeAI(plainCredentialValue);
          const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash",
            generationConfig: {
              temperature: 0,
              topP: 1,
              topK: 1,
              maxOutputTokens: 8192,
              stopSequences: [],
              candidateCount: 1,
              responseMimeType: "application/json",
            },
          });

          // Split content into sections for processing
          const sections = content.split(/(?=BMW \d Series|BMW M\d)/g);
          let allResults: any[] = [];

          for (const section of sections) {
            if (!section.trim()) continue;

            const sectionPrompt = `${systemPrompt}\n\nContent to analyze:\n${section}\n\nInstructions:\n${prompt}\n\nRemember to output ONLY valid JSON without any markdown formatting or escape sequences.`;
            const response = await model.generateContent(sectionPrompt);
            let rawText = response.response.text();

            try {
              const parsed = JSON.parse(
                rawText.replace(/^```(?:json)?\s*|\s*```$/g, "")
              );
              if (Array.isArray(parsed)) {
                allResults = allResults.concat(parsed);
              } else {
                allResults.push(parsed);
              }
            } catch (e) {
              environment.log.info(
                `Failed to parse section: ${section.substring(0, 50)}...`
              );
              continue;
            }
          }

          if (allResults.length === 0) {
            environment.log.error("No valid results from any section");
            return false;
          }

          result = JSON.stringify(allResults);
          environment.log.info(
            `Successfully processed ${allResults.length} sections with Gemini`
          );
        } catch (error: any) {
          environment.log.error(`Gemini API error: ${error.message}`);
          throw error;
        }
      } else {
        environment.log.error("Unsupported AI provider");
        return false;
      }

      if (!result) {
        environment.log.error("No result from AI provider");
        return false;
      }

      environment.setOutput("Extracted data", result);
      return true;
    } catch (error: any) {
      if (error.status === 429) {
        environment.log.error(
          "Rate limit exceeded. Please try again in a few minutes."
        );
      } else {
        environment.log.error(error.message);
      }
      return false;
    }
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
