import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { CodeIcon, LucideProps } from "lucide-react";

export const ExtractHtmlFromElementsTask = {
  type: TaskType.EXTRACT_HTML_FROM_ELEMENT,
  label: "Extract HTML from elements",
  icon: (props: LucideProps) => (
    <CodeIcon className="stroke-purple-400 w-4 h-4" {...props} />
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
      helperText: "Selector from which html extracted",
    },
  ] as const,
  outputs: [
    {
      name: "Extracted HTML",
      type: TaskParamType.STRING,
    },
  ] as const,
} satisfies WorkflowTask;
