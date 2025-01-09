import { ExecutionEnvironment } from "@/types/executor";
import { ElementIteratorTask } from "../task/ElementIterator";
import { ElementHandle, Page } from "puppeteer";

export async function ElementIteratorExecutor(
  environment: ExecutionEnvironment<typeof ElementIteratorTask>
): Promise<boolean> {
  try {
    const selector = environment.getInput("Selector");
    const waitForSelector = environment.getInput("WaitForSelector");
<<<<<<< HEAD
    const shouldContinue = environment.getInput("Continue") === "true";
    const currentIndex = parseInt(environment.getInput("CurrentIndex") || "0");
=======
>>>>>>> 87ef017b4991c6448f5ea436abde663b69b51adb

    if (!selector) {
      environment.log.error("Selector is required");
      return false;
    }

    const page = environment.getPage()!;
<<<<<<< HEAD
    const elements = await page.$$(selector);

    // End iteration if we've processed all elements
    if (currentIndex >= elements.length) {
      environment.log.info("Iteration completed");
      return false;
    }

    // On first element OR when continue signal received
    if (currentIndex === 0 || shouldContinue) {
      const element = elements[currentIndex];
=======

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
>>>>>>> 87ef017b4991c6448f5ea436abde663b69b51adb
      const uniqueSelector = await createUniqueSelector(
        page,
        element,
        selector,
<<<<<<< HEAD
        currentIndex
      );

      environment.setOutput("CurrentElement", uniqueSelector);
      environment.setOutput("Index", currentIndex.toString());
      environment.setOutput("CurrentIndex", (currentIndex + 1).toString());
      return true;
    }

    // Wait for continue signal
=======
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

>>>>>>> 87ef017b4991c6448f5ea436abde663b69b51adb
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
