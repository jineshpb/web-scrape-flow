"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { createFlowNode } from "@/lib/workflow/createFlowNode";
import { TaskRegistry } from "@/lib/workflow/task/registry";
import { AppNode } from "@/types/appNode";
import { TaskType } from "@/types/task";
import { useReactFlow } from "@xyflow/react";
import {
  CoinsIcon,
  Copy,
  GripVertical,
  Loader2,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";
import { toast } from "sonner";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { updateWorkflow } from "@/actions/workflows/updateWorkflow";

function NodeHeader({
  taskType,
  nodeId,
  workflowId,
}: {
  taskType: TaskType;
  nodeId: string;
  workflowId: string;
}) {
  const [isGenerating, setIsGenerating] = useState(false);
  const task = TaskRegistry[taskType];
  const { deleteElements, getNode, setNodes, getNodes, getEdges } =
    useReactFlow();

  // console.log("@@Workflow ID", workflowId);
  // console.log("@@Node ID", nodeId);

  const handleNotesChange = async (newNotes: string) => {
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

    await new Promise((resolve) => setTimeout(resolve, 0));

    const flowDefinition = JSON.stringify({
      nodes: getNodes(),
      edges: getEdges(),
    });

    try {
      await updateWorkflow({
        id: workflowId,
        definition: flowDefinition,
      });
    } catch (error) {
      toast.error("Failed to save note");
      console.error("Failed to update workflow:", error);
    }
  };

  const generateCaption = async () => {
    try {
      setIsGenerating(true);

      const response = await fetch("/api/workflows/nodes/generate-caption", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workflowId, nodeId }),
      });

      if (!response.ok) throw new Error("Failed to generate caption");

      const { caption } = await response.json();
      console.log("Generated caption:", caption);

      await handleNotesChange(caption);

      toast.success("Generated caption for node");
    } catch (error) {
      console.error("Generation error:", error);
      toast.error("Failed to generate caption");
    } finally {
      setIsGenerating(false);
    }
  };

  const clearNote = () => {
    handleNotesChange("");
  };

  const hasNotes = (getNode(nodeId)?.data?.notes as string)?.length > 0;

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
              <CoinsIcon size={12} />
              {task.credits}
            </Badge>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => deleteElements({ nodes: [{ id: nodeId }] })}
            >
              <Trash2 size={12} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="drag-handle cursor-grab"
            >
              <GripVertical size={20} />
            </Button>
          </div>
        </div>
      </div>
      {task.description && (
        <div className="px-3 pb-2 text-xs text-muted-foreground">
          {task.description}
        </div>
      )}
      <div className="px-3 pb-2">
        <div className="flex gap-2 items-start">
          <textarea
            placeholder="Add notes about this node..."
            className={`w-full text-xs p-1 bg-muted border rounded resize-none focus:outline-none focus:ring-1 ${
              isGenerating ? "opacity-50" : ""
            }`}
            value={(getNode(nodeId)?.data?.notes as string) || ""}
            onChange={(e) => handleNotesChange(e.target.value)}
            rows={3}
            disabled={isGenerating}
          />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={hasNotes ? clearNote : generateCaption}
                  disabled={isGenerating}
                  className="shrink-0"
                >
                  {isGenerating ? (
                    <Loader2 size={12} className="animate-spin" />
                  ) : hasNotes ? (
                    <X size={12} />
                  ) : (
                    <Sparkles size={12} />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {hasNotes ? "Clear note" : "Generate custom note using AI"}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}

export default NodeHeader;
