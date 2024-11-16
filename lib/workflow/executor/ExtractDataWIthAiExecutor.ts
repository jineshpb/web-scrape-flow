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

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a webscraper helper that extracts data from HTML or text. you will be given a piece of text or HTML content as input and also the prompt with the data you have to extract. The response should always be only teh extracted data as a JSON array or object, without any additional words or explanation. Analyze the input carefully and extract data percisely based on the prompt. if no data is found , return an empty JSOn array. Wokr only witht the provided content and ensure the output is always a valid JSON array wihtout any surrounding text",
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
      temperature: 1,
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
