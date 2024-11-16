import { ExecutionEnvironment } from "@/types/executor";
import { waitFor } from "@/lib/helper/waitFor";
import { ClickElementTask } from "../task/ClickElement";
import { ReadPropertyFromJsonTask } from "../task/ReadPropertyFromJson";

export async function ReadPropertyFromJsonExecutor(
  environment: ExecutionEnvironment<typeof ReadPropertyFromJsonTask>
): Promise<boolean> {
  try {
    const jsonData = environment.getInput("JSON");
    if (!jsonData) {
      environment.log.error("Input -> JSON is not defined");
      return false;
    }
    const propertyName = environment.getInput("Property name");
    if (!propertyName) {
      environment.log.error("Input -> Property name is not defined");
      return false;
    }

    const json = JSON.parse(jsonData);
    const propertyValue = json[propertyName];
    if (!propertyValue) {
      environment.log.error("Property not found");
      return false;
    }

    environment.setOutput("Property value", propertyValue);

    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
