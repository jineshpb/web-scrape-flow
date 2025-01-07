import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { Sparkles } from "lucide-react";

export const ExtractDataWithAITask = {
  type: TaskType.EXTRACT_DATA_WITH_AI,
  label: "Extract data with AI",
  icon: (props) => <Sparkles className=" stroke-rose-400 w-4 h-4" {...props} />,
  isEntryPoint: false,
  credits: 4,
  inputs: [
    {
      name: "Content",
      type: TaskParamType.STRING,
      required: true,
      variant: "textarea",
      helperText: "Content to extract data from",
    },
    {
      name: "Credentials",
      type: TaskParamType.CREDENTIAL,
      required: true,
    },
    {
      name: "Prompt",
      type: TaskParamType.STRING,
      required: true,
      variant: "textarea",
    },
    {
      name: "Output Format",
      type: TaskParamType.SELECT,
      required: true,
      options: [
        { label: "JSON Data", value: "json" },
        { label: "Plain Text Summary", value: "text" },
      ],
      defaultValue: "json",
      helperText: "Choose between structured JSON data or plain text summary",
    },
  ] as const,
  outputs: [
    {
      name: "Extracted data",
      type: TaskParamType.STRING,
    },
  ] as const,
} satisfies WorkflowTask;
