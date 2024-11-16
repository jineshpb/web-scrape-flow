import { ExecutionEnvironment } from "@/types/executor";
import { waitFor } from "@/lib/helper/waitFor";
import { ScrollToElementTask } from "../task/ScrollToElement";

export async function ScrollToElementExecutor(
  environment: ExecutionEnvironment<typeof ScrollToElementTask>
): Promise<boolean> {
  try {
    const selector = environment.getInput("Selector");
    if (!selector) {
      environment.log.error("Input -> Selector is not defined");
      return false;
    }

    await environment.getPage()!.evaluate((selector: string) => {
      const element = document.querySelector(selector);
      if (!element) {
        throw new Error(`Element with selector ${selector} not found`);
      }
      const y = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, selector);
    // await waitFor(3000);
    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
