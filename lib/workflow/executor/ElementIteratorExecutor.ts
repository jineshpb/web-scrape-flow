import { ExecutionEnvironment } from "@/types/executor";
import { ElementIteratorTask } from "../task/ElementIterator";
import { ElementHandle, Page } from "puppeteer";

export async function ElementIteratorExecutor(
  environment: ExecutionEnvironment<typeof ElementIteratorTask>
): Promise<boolean> {
  try {
    const selector = environment.getInput("Selector");
    const waitForSelector = environment.getInput("WaitForSelector");

    if (!selector) {
      environment.log.error("Selector is required");
      return false;
    }

    const page = environment.getPage()!;

    // Wait for elements if specified
    if (waitForSelector) {
      await page.waitForSelector(selector);
    }

    // Get all matching elements
    const elements = await page.$$(selector);

    // Iterate through each element
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];

      // Create a unique selector for this specific element
      const uniqueSelector = await createUniqueSelector(
        page,
        element,
        selector,
        i
      );

      // Set outputs for this iteration
      environment.setOutput("CurrentElement", uniqueSelector);
      environment.setOutput("Index", i.toString());

      // Signal that we have more iterations
      if (i < elements.length - 1) {
        await environment.next();
      }
    }

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
