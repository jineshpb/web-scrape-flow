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

    // Handle JSON data input
    let json;
    try {
      // Clean up markdown and code blocks first
      let cleanJson = jsonData;
      if (typeof cleanJson === "string") {
        // Remove markdown code blocks and language identifiers
        cleanJson = cleanJson.replace(/```json\n?/g, "").replace(/```\n?/g, "");
        // Remove any leading/trailing whitespace
        cleanJson = cleanJson.trim();
      }

      // First try to parse as regular JSON
      json = typeof cleanJson === "string" ? JSON.parse(cleanJson) : cleanJson;

      // If we have a complete object, extract and parse the data property if it exists
      if (typeof json === "object" && json !== null && !Array.isArray(json)) {
        const dataValue = json.data;
        if (typeof dataValue === "string") {
          try {
            const parsedData = JSON.parse(
              dataValue.replace(/\\n/g, "\n").replace(/\\"/g, '"')
            );
            // Merge the parsed data with the original object, excluding the data property
            const { data, ...rest } = json;
            json = {
              ...rest,
              ...parsedData,
            };
          } catch (e) {
            // If parsing fails, keep the original json
          }
        }
      }
    } catch (e) {
      try {
        // If that fails, try to parse the escaped string
        const unescaped = jsonData
          .replace(/```json\n?/g, "")
          .replace(/```\n?/g, "")
          .replace(/\\n/g, "\n")
          .replace(/\\"/g, '"')
          .trim();
        json = JSON.parse(unescaped);
      } catch (e2) {
        environment.log.error("Failed to parse JSON input");
        return false;
      }
    }

    // Handle property value input with same approach
    let value;
    try {
      let cleanValue =
        typeof propertyValue === "string"
          ? propertyValue
              .replace(/```json\n?/g, "")
              .replace(/```\n?/g, "")
              .trim()
          : propertyValue;
      value =
        typeof cleanValue === "string" ? JSON.parse(cleanValue) : cleanValue;
    } catch (e) {
      value = propertyValue; // Use as-is if not valid JSON
    }

    const config: AddPropertyConfig = {
      addToParent: environment.getInput("Add to parent") || "parent",
    };

    let resultJson: any;
    if (Array.isArray(json)) {
      if (config.addToParent === "parent") {
        // Add property at parent level
        resultJson = {
          data: json,
          [propertyName]: value,
        };
      } else {
        // Add property to each item in array
        resultJson = json.map((item) => ({
          ...item,
          [propertyName]: value,
        }));
      }
    } else {
      // Simple key-value pair addition for non-arrays
      resultJson = {
        ...json,
        [propertyName]: value,
      };
    }

    environment.setOutput("Updated JSON", JSON.stringify(resultJson));
    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
