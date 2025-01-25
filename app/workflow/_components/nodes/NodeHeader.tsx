"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createFlowNode } from "@/lib/workflow/createFlowNode";
import { TaskRegistry } from "@/lib/workflow/task/registry";
import { AppNode } from "@/types/appNode";
import { TaskType } from "@/types/task";
import { useReactFlow } from "@xyflow/react";
import { CoinsIcon, Copy, GripVertical, Trash, Trash2 } from "lucide-react";
import React from "react";

function NodeHeader({
  taskType,
  nodeId,
}: {
  taskType: TaskType;
  nodeId: string;
}) {
  const task = TaskRegistry[taskType];
  const { deleteElements, getNode, addNodes, setNodes } = useReactFlow();

  const handleNotesChange = (newNotes: string) => {
    setNodes((nodes) =>
      nodes.map((node) => {
        if (node.id === nodeId) {
          return {
            ...node,
            data: {
              ...node.data,
              notes: newNotes,
            },
          };
        }
        return node;
      })
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 p-2">
        <task.icon size={16} />
        <div className="flex justify-between items-center w-full">
          <p className="text-xs font-bold uppercase text-muted-foreground">
            {task.label}
          </p>
          <div className="flex gap-2 items-center">
            {task.isEntryPoint && <Badge>Entry Point</Badge>}
            <Badge className="gap-2 flex items-center text-xs">
              <CoinsIcon size={16} />
              {task.credits}
            </Badge>
            {!task.isEntryPoint && (
              <>
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  onClick={() =>
                    deleteElements({
                      nodes: [{ id: nodeId }],
                    })
                  }
                >
                  <Trash size={12} />
                </Button>
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  onClick={() => {
                    const node = getNode(nodeId) as AppNode;
                    const newX = node.position.x + 100;
                    const newY =
                      node.position.y + (node.measured?.height! ?? 0) + 20;
                    const newNode = createFlowNode(node.data.type, {
                      x: newX,
                      y: newY,
                    });
                    addNodes([newNode]);
                  }}
                >
                  <Copy size={12} />
                </Button>
              </>
            )}
            <Button
              variant={"ghost"}
              size={"icon"}
              className="drag-handle cursor-grab"
            >
              <GripVertical size={20} />
            </Button>
          </div>
        </div>
      </div>
      {task.description && (
        <div className="px-3 pb-2 text-xs text-gray-400">
          {task.description}
        </div>
      )}
      <div className="px-3 pb-2">
        <textarea
          placeholder="Add notes about this node..."
          className="w-full text-xs p-1 bg-muted border rounded resize-none focus:outline-none focus:ring-1"
          value={(getNode(nodeId)?.data?.notes as string) || ""}
          onChange={(e) => handleNotesChange(e.target.value)}
          rows={2}
        />
      </div>
    </div>
  );
}

export default NodeHeader;
