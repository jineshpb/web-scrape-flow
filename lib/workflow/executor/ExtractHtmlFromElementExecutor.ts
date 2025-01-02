import { Environment, ExecutionEnvironment } from "@/types/executor";
import { ExtractHtmlFromElementsTask } from "../task/ExtractHtmlFromElements";
import * as cheerio from "cheerio";

export async function ExtractHtmlFromElementExecutor(
  environment: ExecutionEnvironment<typeof ExtractHtmlFromElementsTask>
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
    const element = $(selector);

    if (!element) {
      environment.log.error(`Element not found: ${selector}`);
      return false;
    }

    const extractedHtml = element.html();
    if (!extractedHtml) {
      environment.log.error(`Element has no content: ${selector}`);
      return false;
    }

    environment.setOutput("Extracted HTML", extractedHtml);
    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
