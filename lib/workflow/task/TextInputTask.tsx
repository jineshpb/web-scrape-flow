import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { TypeIcon } from "lucide-react";

export const TextInputTask = {
  type: TaskType.TEXT_INPUT,
  label: "Text Input",
  icon: (props) => <TypeIcon className="stroke-blue-400 w-4 h-4" {...props} />,
  isEntryPoint: true, // This can be an entry point since it's an input node
  credits: 0, // Input nodes typically don't cost credits
  inputs: [
    {
      name: "Input",
      type: TaskParamType.STRING,
      required: true,
      variant: "textarea",
      placeholder: "Enter HTML selector or text",
      description: "Enter CSS selector (e.g., #id, .class) or plain text",
    },
  ] as const,
  theme: {
    color: "blue-400",
    gradient: "from-blue-400/10 to-transparent",
  },
  outputs: [
    {
      name: "Value",
      type: TaskParamType.STRING,
    },
  ] as const,
} satisfies WorkflowTask;
