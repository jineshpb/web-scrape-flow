import { Environment, ExecutionEnvironment } from "@/types/executor";
import { LaunchBrowserTask } from "../task/LaunchBrowser";
import { PageToHtmlTask } from "../task/PageToHtml";
import { ExtractTextFromElementsTask } from "../task/ExtractTextFromElements";
import * as cheerio from "cheerio";

export async function ExtractTextFromElementExecutor(
  environment: ExecutionEnvironment<typeof ExtractTextFromElementsTask>
): Promise<boolean> {
  try {
    const selector = environment.getInput("Selector");
    if (!selector) {
      environment.log.error("Selector is not provided");
      return false;
    }
    const html = environment.getInput("Html");
    if (!html) {
      environment.log.error("Html is not provided");
      return false;
    }

    const $ = cheerio.load(html);
    // Split selectors by comma and trim whitespace
    const selectors = selector.split(',').map(s => s.trim());
    const extractedTexts: string[] = [];

    for (const singleSelector of selectors) {
      const element = $(singleSelector);
      
      if (element.length === 0) {
        environment.log.error(`Element not found: ${singleSelector}`);
        continue;
      }

      const text = element.text().trim();
      if (!text) {
        environment.log.error(`Element has no text: ${singleSelector}`);
        continue;
      }
      extractedTexts.push(text);
    }

    if (extractedTexts.length === 0) {
      environment.log.error("No text could be extracted from any selector");
      return false;
    }

    environment.setOutput("Extracted text", extractedTexts.join('\n'));
    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
