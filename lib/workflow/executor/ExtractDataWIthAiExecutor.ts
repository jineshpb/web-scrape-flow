import { ExecutionEnvironment } from "@/types/executor";
import { waitFor } from "@/lib/helper/waitFor";
import { ExtractDataWithAITask } from "../task/ExtractDataWithAI";
import prisma from "@/lib/prisma";
import { symmetricDecrypt } from "@/lib/encryption";
import OpenAI from "openai";

export async function ExtractDataWithAiExecutor(
  environment: ExecutionEnvironment<typeof ExtractDataWithAITask>
): Promise<boolean> {
  try {
    const credentials = environment.getInput("Credentials");
    if (!credentials) {
      environment.log.error("Input -> Credentials is not defined");
      return false;
    }
    const prompt = environment.getInput("Prompt");
    if (!prompt) {
      environment.log.error("Input -> Prompt is not defined");
      return false;
    }

    const content = environment.getInput("Content");
    if (!content) {
      environment.log.error("Input -> Content is not defined");
      return false;
    }

    const outputFormat = environment.getInput("Output Format") || "json";

    //Get credentials from database
    const credential = await prisma.credential.findUnique({
      where: {
        id: credentials,
      },
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

    const openai = new OpenAI({
      apiKey: plainCredentialValue,
    });

    const systemPrompt =
      outputFormat === "json"
        ? "You are a webscraper helper that extracts data from HTML or text. You will be given a piece of text or HTML content as input and also the prompt with the data you have to extract. The response should always be only the extracted data as a JSON array or object, without any additional words or explanation. Analyze the input carefully and extract data precisely based on the prompt. If no data is found, return an empty JSON array. Work only with the provided content and ensure the output is always a valid JSON array without any surrounding text"
        : "You are a text summarization assistant. You will be given a piece of text and a prompt describing what to focus on. Provide a clear, concise summary in plain text format. Focus on the key points mentioned in the prompt. Keep the summary direct and informative, without any JSON formatting.";

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: content,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: outputFormat === "json" ? 0 : 0.7, // Lower temperature for JSON, higher for text
    });

    environment.log.info("Prompt tokens: " + response.usage?.prompt_tokens);
    environment.log.info(
      "Completion tokens: " + response.usage?.completion_tokens
    );

    const result = response.choices[0].message?.content;
    if (!result) {
      environment.log.error("No result from OpenAI");
      return false;
    }

    environment.setOutput("Extracted data", result);

    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
