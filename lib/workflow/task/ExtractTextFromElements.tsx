import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { CodeIcon, GlobeIcon, LucideProps, TextIcon } from "lucide-react";

export const ExtractTextFromElementsTask = {
  type: TaskType.EXTRACT_TEXT_FROM_ELEMENT,
  label: "Extract text from elements",
  icon: (props: LucideProps) => (
    <TextIcon className=" stroke-pink-400 w-4 h-4" {...props} />
  ),
  isEntryPoint: false,
  credits: 2,
  inputs: [
    {
      name: "Html",
      type: TaskParamType.STRING,
      required: true,
      variant: "textarea",
    },
    {
      name: "Selector",
      type: TaskParamType.STRING,
      required: true,
      variant: "textarea",
      helperText: "CSS selector for the element to scroll to",
    },
  ] as const,
  outputs: [
    {
      name: "Extracted text",
      type: TaskParamType.STRING,
    },
  ] as const,
} satisfies WorkflowTask;
