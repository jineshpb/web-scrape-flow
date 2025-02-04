import { AppNode } from "@/types/appNode";
import { TaskType } from "@/types/task";

//this is the last member of the chain to create a node. It is the function that creates the node. backtrack from here to see the definition and the types

export function createFlowNode(
  nodeType: TaskType,
  position?: { x: number; y: number }
): AppNode {
  return {
    id: crypto.randomUUID(),
    type: "app-node",
    dragHandle: ".drag-handle",

    data: {
      type: nodeType,
      inputs: {},
      notes: "",
    },
    position: position ?? { x: 0, y: 0 },
  };
}
