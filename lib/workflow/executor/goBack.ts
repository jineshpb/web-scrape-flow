import { ExecutionEnvironment } from "@/types/executor";
import { WorkflowTask } from "@/types/workflow";
import { TaskType } from "@/types/task";

export async function executeGoBack({
  getPage,
  getInput,
  setOutput,
}: ExecutionEnvironment<
  WorkflowTask & { type: TaskType.GO_BACK }
>): Promise<boolean> {
  try {
    const page = getPage();
    if (!page) throw new Error("No page available");

    const trigger = getInput("Trigger");
    if (trigger !== "true") {
      setOutput("Completed", "false");
      return false;
    }

    await page.goBack({
      waitUntil:
        getInput("WaitForNavigation") === "true" ? "networkidle0" : undefined,
    });

    setOutput("Completed", "true");
    return true;
  } catch (error: unknown) {
    setOutput("Completed", "false");
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`Failed to go back: ${errorMessage}`);
  }
}
