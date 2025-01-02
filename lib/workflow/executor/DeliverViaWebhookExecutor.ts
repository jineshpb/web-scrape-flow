import { ExecutionEnvironment } from "@/types/executor";
import { waitFor } from "@/lib/helper/waitFor";
import { ClickElementTask } from "../task/ClickElement";
import { DeliverViaWebhookTask } from "../task/DeliverViaWebhook";

export async function DeliverViaWebhookExecutor(
  environment: ExecutionEnvironment<typeof DeliverViaWebhookTask>
): Promise<boolean> {
  try {
    const targetUrl = environment.getInput("Target URL");
    if (!targetUrl) {
      environment.log.error("Input -> Target URL is not defined");
      return false;
    }
    const body = environment.getInput("Body");
    if (!body) {
      environment.log.error("Input -> Body is not defined");
      return false;
    }

    const bodyData = typeof body === "string" ? JSON.parse(body) : body;

    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    const statusCode = response.status;
    if (statusCode !== 200) {
      const errorText = await response.text();
      environment.log.error(`HTTP Error ${statusCode}: ${errorText}`);
      return false;
    }

    const responseBody = await response.json();
    environment.log.info(JSON.stringify(responseBody, null, 4));

    return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}
