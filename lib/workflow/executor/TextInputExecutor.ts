import { ExecutionEnvironment } from "@/types/executor";
import { TextInputTask } from "../task/TextInputTask";

export async function TextInputExecutor(
  environment: ExecutionEnvironment<typeof TextInputTask>
): Promise<boolean> {
  try {
    const input = environment.getInput("Input");
    if (!input) {
      environment.log.error("Input value is not defined");
      return false;
    }

    // Simply pass the input value to the output
    environment.setOutput("Value", input);
    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
