import { ExecutionEnvironment } from "@/types/executor";
import { GetCurrentUrlTask } from "../task/GetCurrentUrl";
import { Page } from "puppeteer";

export async function GetCurrentUrlExecutor(
  environment: ExecutionEnvironment<typeof GetCurrentUrlTask>
): Promise<boolean> {
  try {
    const page = environment.getPage() as Page;
    if (!page) {
      environment.log.error("Page is required");
      return false;
    }

    const url = await page.url();
    environment.setOutput("URL", url);
    environment.setOutput("Page", page as unknown as string);
    return true;
  } catch (error: any) {
    environment.log.error("Failed to get current URL: " + error.message);
    return false;
  }
}
