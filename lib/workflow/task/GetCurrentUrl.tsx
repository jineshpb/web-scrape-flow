import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { GlobeIcon } from "lucide-react";

export const GetCurrentUrlTask = {
  type: TaskType.GET_CURRENT_URL,
  label: "Get Current URL",
  description: "Captures the current page URL from the browser",
  icon: (props) => <GlobeIcon className="stroke-blue-400 w-4 h-4" {...props} />,
  isEntryPoint: false,
  credits: 1,
  inputs: [
    {
      name: "Page",
      type: TaskParamType.BROWSER_INSTANCE,
      required: true,
      description: "Browser page to get URL from",
    },
  ] as const,
  outputs: [
    {
      name: "URL",
      type: TaskParamType.STRING,
      description: "The current page URL",
    },
    {
      name: "Page",
      type: TaskParamType.BROWSER_INSTANCE,
      description: "The browser page instance",
    },
  ] as const,
} satisfies WorkflowTask;
