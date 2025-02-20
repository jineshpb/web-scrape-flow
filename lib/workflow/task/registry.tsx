import { TaskType } from "@/types/task";
import { ExtractTextFromElementsTask } from "./ExtractTextFromElements";
import { LaunchBrowserTask } from "./LaunchBrowser";
import { PageToHtmlTask } from "./PageToHtml";
import { WorkflowTask } from "@/types/workflow";
import { FillInputTask } from "./FillInput";
import { ClickElementTask } from "./ClickElement";
import { WaitForElementTask } from "./WaitForElement";
import { DeliverViaWebhookTask } from "./DeliverViaWebhook";
import { ExtractDataWithAITask } from "./ExtractDataWithAI";
import { ReadPropertyFromJsonTask } from "./ReadPropertyFromJson";
import { AddPropertyToJsonTask } from "./AddProprtyToJson";
import { NavigateUrlTask } from "./NavigateUrlTask";
import { ScrollToElementTask } from "./ScrollToElement";
import { ExtractHtmlFromElementsTask } from "./ExtractHtmlFromElements";
import { TextInputTask } from "./TextInputTask";
import { ElementIteratorTask } from "./ElementIterator";
import { GoBackTask } from "./GoBack";
import { BatchProcessLinksTask } from "./BatchProcessLinks";
import { GetCurrentUrlTask } from "./GetCurrentUrl";

type Registry = {
  [K in TaskType]: WorkflowTask & {
    type: K;
  };
};

export const TaskRegistry: Registry = {
  LAUNCH_BROWSER: LaunchBrowserTask,
  PAGE_TO_HTML: PageToHtmlTask,
  EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementsTask,
  FILL_INPUT: FillInputTask,
  CLICK_ELEMENT: ClickElementTask,
  WAIT_FOR_ELEMENT: WaitForElementTask,
  DELIVER_VIA_WEBHOOK: DeliverViaWebhookTask,
  EXTRACT_DATA_WITH_AI: ExtractDataWithAITask,
  READ_PROPERTY_FROM_JSON: ReadPropertyFromJsonTask,
  ADD_PROPERTY_TO_JSON: AddPropertyToJsonTask,
  NAVIGATE_URL: NavigateUrlTask,
  SCROLL_TO_ELEMENT: ScrollToElementTask,
  EXTRACT_HTML_FROM_ELEMENT: ExtractHtmlFromElementsTask,
  TEXT_INPUT: TextInputTask,
  ELEMENT_ITERATOR: ElementIteratorTask,
  GO_BACK: GoBackTask,
  BATCH_PROCESS_LINKS: BatchProcessLinksTask,
  GET_CURRENT_URL: GetCurrentUrlTask,
};
