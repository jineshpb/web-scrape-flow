import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { DatabaseIcon } from "lucide-react";

export const AddPropertyToJsonTask = {
  type: TaskType.ADD_PROPERTY_TO_JSON,
  label: "Add property to JSON",
  icon: (props) => (
    <DatabaseIcon className=" stroke-orange-400 w-4 h-4" {...props} />
  ),
  isEntryPoint: false,
  credits: 1,
  inputs: [
    {
      name: "JSON",
      type: TaskParamType.STRING,
      required: true,
      variant: "textarea",
    },
    {
      name: "Property name",
      type: TaskParamType.STRING,
      required: true,
    },
    {
      name: "Property value",
      type: TaskParamType.STRING,
      required: true,
    },
    {
      name: "Add to parent",
      type: TaskParamType.SELECT,
      required: false,
      options: [
        { label: "Parent", value: "parent" },
        { label: "Children", value: "children" },
      ],
      defaultValue: "parent",
    },
  ] as const,
  outputs: [
    {
      name: "Updated JSON",
      type: TaskParamType.STRING,
    },
  ] as const,
} satisfies WorkflowTask;
