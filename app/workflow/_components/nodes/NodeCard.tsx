"use client";

import useFlowValidation from "@/hooks/useFlowValidation";
import { cn } from "@/lib/utils";
import { useReactFlow } from "@xyflow/react";
import { TaskRegistry } from "@/lib/workflow/task/registry";
import { TaskType } from "@/types/task";

function NodeCard({
  children,
  nodeId,
  isSelected,
}: {
  children: React.ReactNode;
  nodeId: string;
  isSelected: boolean;
}) {
  const { getNode, setCenter } = useReactFlow();
  const { invalidInputs } = useFlowValidation();
  const hasInvalidInputs = invalidInputs.some((node) => node.nodeId === nodeId);

  const node = getNode(nodeId);
  // Get the actual task type from node data
  const taskType = node?.data?.type as TaskType;
  const task = TaskRegistry[taskType];
  const colorBase = task?.theme?.color?.split("-")[0];

  // Debug logs with correct border color logic
  console.log({
    nodeId,
    isSelected,
    taskType,
    nodeType: node?.type,
    nodeData: node?.data,
    task,
    colorBase,
    borderColor: isSelected ? `var(--${colorBase}-400)` : `hsl(var(--border))`,
  });

  return (
    <div
      onDoubleClick={() => {
        const node = getNode(nodeId);
        if (!node) return;
        const { position, measured } = node;
        if (!measured || !position) return;
        const { width, height } = measured;
        const x = position.x + width! / 2;
        const y = position.y + height! / 2;
        if (x === undefined || y === undefined) return;
        setCenter(x, y, {
          zoom: 1,
          duration: 500,
        });
      }}
      style={{
        borderColor:
          isSelected && colorBase
            ? `var(--${colorBase}-400)`
            : `hsl(var(--border))`,
      }}
      className={cn(
        "rounded-2xl cursor-pointer bg-background border-2 gap-1 border-separate w-[420px] text-xs pb-2 flex flex-col transition-colors duration-200 shadow-sm",
        hasInvalidInputs && "border-destructive border-2"
      )}
    >
      {children}
    </div>
  );
}

export default NodeCard;
