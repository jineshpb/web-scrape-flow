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
<<<<<<< HEAD
      name: "HTML",
      type: TaskParamType.STRING,
      required: true,
      description: "HTML content to search within",
    },
    {
=======
>>>>>>> 87ef017b4991c6448f5ea436abde663b69b51adb
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
<<<<<<< HEAD
    {
      name: "Continue",
      type: TaskParamType.STRING,
      required: false,
      default: "false",
      description: "Signal to continue to next iteration",
    },
    {
      name: "CurrentIndex",
      type: TaskParamType.STRING,
      required: false,
      default: "0",
      description: "Current iteration index",
    },
=======
>>>>>>> 87ef017b4991c6448f5ea436abde663b69b51adb
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
<<<<<<< HEAD
    {
      name: "CurrentIndex",
      type: TaskParamType.STRING,
      description: "Next iteration index",
    },
=======
>>>>>>> 87ef017b4991c6448f5ea436abde663b69b51adb
  ] as const,
} satisfies WorkflowTask;
