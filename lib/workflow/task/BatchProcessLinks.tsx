import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { NetworkIcon } from "lucide-react";

export const BatchProcessLinksTask = {
  type: TaskType.BATCH_PROCESS_LINKS,
  label: "Batch Process Links",
  icon: (props) => (
    <NetworkIcon className="stroke-purple-400 w-4 h-4" {...props} />
  ),
  credits: 5,
  inputs: [
    {
      name: "Links",
      type: TaskParamType.STRING_ARRAY,
      required: true,
      description: "Array of URLs to process",
    },
    {
      name: "Selectors",
      type: TaskParamType.STRING,
      required: true,
      description: "CSS selectors to extract (comma-separated)",
      variant: "textarea",
    },
    {
      name: "Concurrency",
      type: TaskParamType.NUMBER,
      required: false,
      default: "2",
    },
  ] as const,
  outputs: [
    {
      name: "Results",
      type: TaskParamType.STRING_ARRAY,
      description: "Array of extracted HTML from each page",
    },
    {
      name: "ProcessedCount",
      type: TaskParamType.NUMBER,
      description: "Number of successfully processed links",
    },
    {
      name: "FailedCount",
      type: TaskParamType.NUMBER,
      description: "Number of failed attempts",
    },
    {
      name: "Html",
      type: TaskParamType.STRING,
      description: "Combined HTML from all successful extractions",
    },
  ] as const,
} satisfies WorkflowTask;
