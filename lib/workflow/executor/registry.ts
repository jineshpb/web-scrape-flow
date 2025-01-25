import { TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { LaunchBrowserExecutor } from "./LaunchBrowserExecutor";
import { PageToHtmlExecutor } from "./PageToHtmlExecutor";
import { ExecutionEnvironment } from "@/types/executor";
import { ExtractTextFromElementExecutor } from "./ExtractTextFromElementExecutor";
import { FillInputExecutor } from "./FillInputExecutor";
import { ClickElementExecutor } from "./ClickElementExecutor";
import { WaitForElementExecutor } from "./WaitForElementExecutor";
import { DeliverViaWebhookExecutor } from "./DeliverViaWebhookExecutor";
import { ExtractDataWithAiExecutor } from "./ExtractDataWIthAiExecutor";
import { ReadPropertyFromJsonExecutor } from "./ReadPropertyFromJsonExecutor";
import { AddPropertyToJsonExecutor } from "./AddPropertyToJsonExecutor";
import { NavigateUrlExecutor } from "./NavigateUrlExecutor";
import { ScrollToElementExecutor } from "./ScrollToElementExecutor";
import { ExtractHtmlFromElementExecutor } from "./ExtractHtmlFromElementExecutor";
import { TextInputExecutor } from "./TextInputExecutor";
import { ElementIteratorExecutor } from "./ElementIteratorExecutor";
import { executeGoBack } from "./goBack";
import { BatchProcessLinksExecutor } from "./BatchProcessLinksExecutor";
import { GetCurrentUrlExecutor } from "./GetCurrentUrlExecutor";

//this is the most fucked up type ever so far
//explanation: at 1:07:07 of the video,

type ExecutorFn<T extends WorkflowTask> = (
  environment: ExecutionEnvironment<T>
) => Promise<boolean>;

export const ExecutorRegistry: {
  [K in TaskType]: ExecutorFn<WorkflowTask & { type: K }>;
} = {
  LAUNCH_BROWSER: LaunchBrowserExecutor,
  PAGE_TO_HTML: PageToHtmlExecutor,
  EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementExecutor,
  FILL_INPUT: FillInputExecutor,
  CLICK_ELEMENT: ClickElementExecutor,
  WAIT_FOR_ELEMENT: WaitForElementExecutor,
  DELIVER_VIA_WEBHOOK: DeliverViaWebhookExecutor,
  EXTRACT_DATA_WITH_AI: ExtractDataWithAiExecutor,
  READ_PROPERTY_FROM_JSON: ReadPropertyFromJsonExecutor,
  ADD_PROPERTY_TO_JSON: AddPropertyToJsonExecutor,
  NAVIGATE_URL: NavigateUrlExecutor,
  SCROLL_TO_ELEMENT: ScrollToElementExecutor,
  EXTRACT_HTML_FROM_ELEMENT: ExtractHtmlFromElementExecutor,
  TEXT_INPUT: TextInputExecutor,
  ELEMENT_ITERATOR: ElementIteratorExecutor,
  GO_BACK: executeGoBack,
  BATCH_PROCESS_LINKS: BatchProcessLinksExecutor,
  GET_CURRENT_URL: GetCurrentUrlExecutor,
};
