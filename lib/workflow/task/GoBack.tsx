import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { ArrowLeftIcon } from "lucide-react";

export const GoBackTask = {
  type: TaskType.GO_BACK,
  label: "Go Back",
  icon: (props) => (
    <ArrowLeftIcon className="stroke-blue-400 w-4 h-4" {...props} />
  ),
  credits: 1,
  inputs: [
    {
      name: "Trigger",
      type: TaskParamType.BOOLEAN,
      required: true,
      description: "Signal to trigger the navigation back",
    },
    {
      name: "WaitForNavigation",
      type: TaskParamType.BOOLEAN,
      required: false,
      default: true,
      description: "Wait for page to finish loading after going back",
    },
  ] as const,
  outputs: [
    {
      name: "Completed",
      type: TaskParamType.STRING,
      description: "Navigation back was successful",
    },
  ] as const,
} satisfies WorkflowTask;
