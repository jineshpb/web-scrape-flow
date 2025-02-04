import { NodeProps } from "@xyflow/react";
import { memo, createContext, useContext } from "react";
import NodeCard from "./NodeCard";
import NodeHeader from "./NodeHeader";
import { AppNodeData } from "@/types/appNode";
import { TaskRegistry } from "@/lib/workflow/task/registry";
import { NodeInput, NodeInputs } from "./NodeInputs";
import { NodeOutputs } from "./NodeOutputs";
import { NodeOutput } from "./NodeOutputs";
import { Badge } from "@/components/ui/badge";

//we established the node in the FlowEditor.tsx file. Now we are just rendering it here. Styling is done in the NodeCard.tsx file

//the double bang is used to convert the value to a boolean

const isDevMode = process.env.NEXT_PUBLIC_DEV_MODE === "true";

// Create a context for workflowId
export const WorkflowContext = createContext<string>("");

const NodeComponent = memo(({ data, id, selected }: NodeProps) => {
  const workflowId = useContext(WorkflowContext);
  const nodeData = data as AppNodeData;
  const task = TaskRegistry[nodeData.type];

  return (
    <NodeCard nodeId={id} isSelected={!!selected}>
      {isDevMode && <Badge>DEV:{id}</Badge>}
      <NodeHeader
        taskType={nodeData.type}
        nodeId={id}
        workflowId={workflowId}
      />
      <NodeInputs>
        {task.inputs.map((input) => (
          <NodeInput key={input.name} input={input} nodeId={id} />
        ))}
      </NodeInputs>
      <NodeOutputs>
        {task.outputs.map((output) => (
          <NodeOutput key={output.name} output={output} />
        ))}
      </NodeOutputs>
    </NodeCard>
  );
});

NodeComponent.displayName = "NodeComponent";
export default NodeComponent;
