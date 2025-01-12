import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { ListIcon } from "lucide-react";

export const ElementIteratorTask = {
  type: TaskType.ELEMENT_ITERATOR,
  label: "Collect Links",
  icon: (props) => <ListIcon className="stroke-blue-400 w-4 h-4" {...props} />,
  credits: 1,
  inputs: [
    {
      name: "Page",
      type: TaskParamType.BROWSER_INSTANCE,
      required: true,
      description: "Page to search in",
    },
    {
      name: "URL",
      type: TaskParamType.STRING,
      required: true,
      description: "Base URL for constructing full links",
    },
    {
      name: "Selector",
      type: TaskParamType.STRING,
      required: true,
      description: "CSS selector for the elements",
    },
    {
      name: "WaitForSelector",
      type: TaskParamType.BOOLEAN,
      required: false,
      default: false,
      description: "Wait for the element to be present",
    },
  ] as const,
  outputs: [
    {
      name: "Links",
      type: TaskParamType.STRING_ARRAY,
      description: "Array of collected links",
    },
  ] as const,
} satisfies WorkflowTask;
