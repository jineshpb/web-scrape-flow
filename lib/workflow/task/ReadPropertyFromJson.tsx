import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import {
  CodeIcon,
  FileJson2,
  GlobeIcon,
  LucideProps,
  MousePointerClick,
  TextIcon,
} from "lucide-react";

export const ReadPropertyFromJsonTask = {
  type: TaskType.READ_PROPERTY_FROM_JSON,
  label: "Read property from JSON",
  icon: (props) => (
    <FileJson2 className=" stroke-orange-400 w-4 h-4" {...props} />
  ),
  isEntryPoint: false,
  credits: 1,
  inputs: [
    {
      name: "JSON",
      type: TaskParamType.STRING,
      required: true,
    },
    {
      name: "Property name",
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
      name: "Property value",
      type: TaskParamType.STRING,
    },
  ] as const,
} satisfies WorkflowTask;
