import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { ArrowUpIcon } from "lucide-react";

export const ScrollToElementTask = {
  type: TaskType.SCROLL_TO_ELEMENT,
  label: "Scroll to element",
  icon: (props) => (
    <ArrowUpIcon className=" stroke-orange-400 w-4 h-4" {...props} />
  ),
  isEntryPoint: false,
  credits: 1,
  inputs: [
    {
      name: "Web page",
      type: TaskParamType.BROWSER_INSTANCE,
      required: true,
    },
    {
      name: "Selector",
      type: TaskParamType.STRING,
      required: true,
      variant: "textarea",
      helperText: "CSS selector for the element to scroll to",
    },
  ] as const,
  theme: {
    color: "orange-400",
    gradient: "from-orange-400/10 to-transparent",
  },
  outputs: [
    {
      name: "Web page",
      type: TaskParamType.BROWSER_INSTANCE,
    },
  ] as const,
} satisfies WorkflowTask;
