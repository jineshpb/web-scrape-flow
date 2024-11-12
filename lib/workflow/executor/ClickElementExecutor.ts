import { ExecutionEnvironment } from "@/types/executor";
import { waitFor } from "@/lib/helper/waitFor";
import { ClickElementTask } from "../task/ClickElement";

export async function ClickElementExecutor(
  environment: ExecutionEnvironment<typeof ClickElementTask>
): Promise<boolean> {
  try {
    const selector = environment.getInput("Selector");
    if (!selector) {
      environment.log.error("Input -> Selector is not defined");
      return false;
    }

    await environment.getPage()!.click(selector);
    // await waitFor(3000);
    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
