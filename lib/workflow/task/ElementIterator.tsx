import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { ListIcon } from "lucide-react";

export const ElementIteratorTask = {
  type: TaskType.ELEMENT_ITERATOR,
  label: "Element Iterator",
  icon: (props) => (
    <ListIcon className="stroke-purple-400 w-4 h-4" {...props} />
  ),
  credits: 1,
  inputs: [
    {
      name: "Selector",
      type: TaskParamType.STRING,
      required: true,
      placeholder: "CSS Selector (e.g., table tr, .item)",
      description: "CSS selector for the elements to iterate through",
    },
    {
      name: "WaitForSelector",
      type: TaskParamType.BOOLEAN,
      required: false,
      default: true,
      description: "Wait for elements to be present before iterating",
    },
  ] as const,
  outputs: [
    {
      name: "CurrentElement",
      type: TaskParamType.STRING,
      description: "Current element's selector",
    },
    {
      name: "Index",
      type: TaskParamType.NUMBER,
      description: "Current iteration index",
    },
  ] as const,
} satisfies WorkflowTask;
