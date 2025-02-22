import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { Link2Icon } from "lucide-react";

export const NavigateUrlTask = {
  type: TaskType.NAVIGATE_URL,
  label: "Navigate URL",
  icon: (props) => (
    <Link2Icon className=" stroke-orange-400 w-4 h-4" {...props} />
  ),
  isEntryPoint: false,
  credits: 2,
  inputs: [
    {
      name: "Web page",
      type: TaskParamType.BROWSER_INSTANCE,
      required: true,
    },
    {
      name: "URL",
      type: TaskParamType.STRING,
      required: true,
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
