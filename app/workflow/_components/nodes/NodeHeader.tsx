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
  MoreHorizontal,
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
import { DuplicateWorkflow } from "@/actions/workflows/duplicateWorkflow";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    try {
      // Update local state first
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

      // Ensure state is updated before getting flow definition
      await new Promise((resolve) => setTimeout(resolve, 100));

      const flowDefinition = JSON.stringify({
        nodes: getNodes(),
        edges: getEdges(),
      });

      // Save to database
      await updateWorkflow({
        id: workflowId,
        definition: flowDefinition,
      });
    } catch (error) {
      console.error("Failed to update notes:", error);
      toast.error("Failed to save note");
    }
  };

  const generateCaption = async () => {
    if (isGenerating) return;

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

      // Wait for generation to complete before updating
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

  // Extract the color base (e.g., "pink" from "pink-400")
  const colorBase = task.theme.color.split("-")[0];

  const handleDuplicateNode = () => {
    try {
      const sourceNode = getNode(nodeId);
      if (!sourceNode) return;

      // Create new node with same data but new ID
      const newNode = {
        ...sourceNode,
        id: `${sourceNode.type}-${Math.random().toString(36).substr(2, 9)}`,
        position: {
          x: sourceNode.position.x + 250,
          y: sourceNode.position.y + 50,
        },
      };

      setNodes((nodes) => [...nodes, newNode]);
      toast.success("Node duplicated");
    } catch (error) {
      console.error("Failed to duplicate node:", error);
      toast.error("Failed to duplicate node");
    }
  };

  return (
    <div
      className={`flex flex-col bg-gradient-to-b ${task.theme.gradient} rounded-t-xl border-b border-border`}
    >
      <div
        className={`flex items-center gap-2 py-2 px-3 cursor-grab drag-handle`}
      >
        <task.icon size={16} className={`stroke-${task.theme.color}`} />
        <div className="flex justify-between items-center w-full">
          <p className="text-xs font-bold uppercase text-muted-foreground">
            {task.label}
          </p>
          <div className="flex gap-2 items-center">
            {task.isEntryPoint && (
              <Badge
                className={`
                  bg-${task.theme.color}/10 
                  text-${task.theme.color}
                  border-${task.theme.color}/20
                  hover:bg-${task.theme.color}/20
                  transition-colors
                `}
              >
                Entry Point
              </Badge>
            )}
            <Badge
              className={`
                gap-2 flex items-center text-xs
                bg-${task.theme.color}/10
                text-${colorBase}
                border-${task.theme.color}/20
                hover:bg-${task.theme.color}/20
                transition-colors
              `}
            >
              <CoinsIcon size={12} />
              {task.credits}
            </Badge>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <MoreHorizontal size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleDuplicateNode}>
                  <Copy className="mr-2 h-4 w-4" />
                  Duplicate
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => deleteElements({ nodes: [{ id: nodeId }] })}
                  className="text-destructive"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      {task.description && (
        <div className="px-3 pb-2 text-xs text-muted-foreground">
          {task.description}
        </div>
      )}
      <div className="px-3 pb-2 bg-none">
        <div className="relative flex gap-2 items-start">
          <div className="relative w-full">
            <textarea
              placeholder="Add notes about this node..."
              className={`w-full text-xs p-2 pr-8 bg-background border rounded-lg resize-none focus:outline-none focus:ring-1 ${
                isGenerating ? "opacity-50" : ""
              }`}
              value={(getNode(nodeId)?.data?.notes as string) || ""}
              onChange={(e) => handleNotesChange(e.target.value)}
              rows={3}
              disabled={isGenerating}
            />
            <div
              className={`text-gray-500 absolute right-2 top-2 ${
                hasNotes ? "right-5" : ""
              }`}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={hasNotes ? clearNote : generateCaption}
                      disabled={isGenerating}
                      className={`h-6 w-6 ${
                        isGenerating ? "animate-spin" : ""
                      } `}
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
                      {hasNotes
                        ? "Clear note"
                        : "Generate custom note using AI"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NodeHeader;
