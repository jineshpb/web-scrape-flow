import { ExecutionEnvironment } from "@/types/executor";
import { waitFor } from "@/lib/helper/waitFor";
import { AddPropertyToJsonTask } from "../task/AddProprtyToJson";

interface AddPropertyConfig {
  addToParent?: string; // if true, adds to parent level for arrays. if false, adds to each item
}

export async function AddPropertyToJsonExecutor(
  environment: ExecutionEnvironment<typeof AddPropertyToJsonTask>
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
    const propertyValue = environment.getInput("Property value");
    if (!propertyValue) {
      environment.log.error("Input -> Property value is not defined");
      return false;
    }

    const json = typeof jsonData === "string" ? JSON.parse(jsonData) : jsonData;
    console.log("Parsed JSON", json);

    const config: AddPropertyConfig = {
      addToParent: environment.getInput("Add to parent") || "parent",
    };

    let resultJson: any;

    if (Array.isArray(json)) {
      if (config.addToParent === "parent") {
        // Add property at parent level
        resultJson = {
          data: json,
          [propertyName]: propertyValue,
        };
      } else {
        // Add property to each item in array
        resultJson = json.map((item) => ({
          ...item,
          [propertyName]: propertyValue,
        }));
      }
    } else {
      // Simple key-value pair addition for non-arrays
      resultJson = {
        ...json,
        [propertyName]: propertyValue,
      };
    }

    const stringifiedJson = JSON.stringify(resultJson);
    console.log("Stringified JSON", stringifiedJson);

    environment.setOutput("Updated JSON", stringifiedJson);

    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
