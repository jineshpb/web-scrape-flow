import { ExecutionEnvironment } from "@/types/executor";
import { ElementIteratorTask } from "../task/ElementIterator";

export async function ElementIteratorExecutor(
  environment: ExecutionEnvironment<typeof ElementIteratorTask>
): Promise<boolean> {
  try {
    const page = environment.getPage()!;
    const baseUrl = environment.getInput("URL");
    const selector = environment.getInput("Selector");
    const waitForSelector = environment.getInput("WaitForSelector");

    if (!selector || !page || !baseUrl) {
      environment.log.error("Selector, Page and URL are required");
      return false;
    }

    if (waitForSelector === "true") {
      await page.waitForSelector(selector);
    }

    // Get base URL domain
    const urlObj = new URL(baseUrl);
    const domain = `${urlObj.protocol}//${urlObj.hostname}`;

    // Get all hrefs and convert to full URLs
    const links = await page.$$eval(
      selector,
      (elements, domain) =>
        elements.map((el) => {
          const href = el.getAttribute("href");
          return href ? `${domain}${href}` : "";
        }),
      domain
    );

    console.log(`Found ${links.length} links for selector: ${selector}`);
    environment.setOutput("Links", links.filter((l) => l).join(","));
    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
