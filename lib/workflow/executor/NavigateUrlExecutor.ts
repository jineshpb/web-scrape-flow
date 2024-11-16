import { ExecutionEnvironment } from "@/types/executor";
import { waitFor } from "@/lib/helper/waitFor";
import { ClickElementTask } from "../task/ClickElement";
import { NavigateUrlTask } from "../task/NavigateUrlTask";

export async function NavigateUrlExecutor(
  environment: ExecutionEnvironment<typeof NavigateUrlTask>
): Promise<boolean> {
  try {
    const url = environment.getInput("URL");
    if (!url) {
      environment.log.error("Input -> URL is not defined");
      return false;
    }

    await environment.getPage()!.goto(url);
    environment.log.info(`Navigated to ${url}`);
    // await waitFor(3000);
    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
