import { ExecutionEnvironment } from "@/types/executor";
import { ElementIteratorTask } from "../task/ElementIterator";
import { ElementHandle, Page } from "puppeteer";

export async function ElementIteratorExecutor(
  environment: ExecutionEnvironment<typeof ElementIteratorTask>
): Promise<boolean> {
  try {
    const selector = environment.getInput("Selector");
    const waitForSelector = environment.getInput("WaitForSelector");
    const shouldContinue = environment.getInput("Continue") === "true";
    const currentIndex = parseInt(environment.getInput("CurrentIndex") || "0");

    if (!selector) {
      environment.log.error("Selector is required");
      return false;
    }

    const page = environment.getPage()!;
    const elements = await page.$$(selector);

    // End iteration if we've processed all elements
    if (currentIndex >= elements.length) {
      environment.log.info("Iteration completed");
      return false;
    }

    // On first element OR when continue signal received
    if (currentIndex === 0 || shouldContinue) {
      const element = elements[currentIndex];
      const uniqueSelector = await createUniqueSelector(
        page,
        element,
        selector,
        currentIndex
      );

      environment.setOutput("CurrentElement", uniqueSelector);
      environment.setOutput("Index", currentIndex.toString());
      environment.setOutput("CurrentIndex", (currentIndex + 1).toString());
      return true;
    }

    // Wait for continue signal
    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}

async function createUniqueSelector(
  page: Page,
  element: ElementHandle,
  baseSelector: string,
  index: number
): Promise<string> {
  return `${baseSelector}:nth-child(${index + 1})`;
}
