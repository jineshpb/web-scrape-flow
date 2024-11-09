"use client";
import { workflow } from "@prisma/client";
import {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Edge,
  getOutgoers,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import React, { useCallback, useEffect } from "react";
import "@xyflow/react/dist/style.css";
import { createFlowNode } from "@/lib/workflow/createFlowNode";
import { TaskType } from "@/types/task";
import nodeComponent from "./nodes/NodeComponent";
import { AppNode } from "@/types/appNode";
import DeletableEdge from "./edges/DeletableEdge";
import { TaskRegistry } from "@/lib/workflow/task/registry";

//this is the actual editor component. It is the main component that renders the flow editor.
//this is the actual editor component. It is the main component that renders the flow editor.

//A sample node would look like this:
//{
//  id: "1",
//  position: { x: 0, y: 0 },
//  data: {
//    label: "Launch Browser",
//    inputs: {},
//  },
//}

const nodeTypes = {
  FlowScraperNode: nodeComponent,
};

const edgeTypes = {
  default: DeletableEdge,
};

//nodes and edges are coming from custom hooks useNodesState and useEdgesState. The custom type definitions are important here

const snapGrid: [number, number] = [50, 50];
const fitViewOptions = { padding: 1 };

function FlowEditor({ workflow }: { workflow: workflow }) {
  const [nodes, setNodes, onNodesChange] = useNodesState<AppNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const { setViewport, screenToFlowPosition, updateNodeData } = useReactFlow();

  //below we are restoring the state of the workflow from the database on relaod
  //also setting the position and zoom of the viewport

  useEffect(() => {
    try {
      const flow = JSON.parse(workflow.definition);
      if (!flow) return;
      setNodes(flow.nodes || []);
      setEdges(flow.edges || []);
      if (!flow.viewport) return;
      const { x = 0, y = 0, zoom = 1 } = flow.viewport;
      setViewport({ x, y, zoom });
    } catch (error) {}
  }, [workflow.definition, setEdges, setNodes, setViewport]);

  //Below is the drag and drop functionality

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const taskType = event.dataTransfer.getData("application/reactflow");
      if (typeof taskType === undefined || !taskType) return;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = createFlowNode(taskType as TaskType, position);

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes]
  );

  const onConnect = useCallback(
    (connection: Connection) => {
      console.log("@onConnect", connection);
      setEdges((eds) => addEdge({ ...connection, animated: true }, eds));
      if (!connection.targetHandle) return;
      //remove input value if is present on connection

      const node = nodes.find((nd) => nd.id === connection.target);
      if (!node) return;

      const nodeInputs = node.data.inputs;
      updateNodeData(node.id, {
        inputs: {
          ...nodeInputs,
          [connection.targetHandle]: "",
        },
      });
    },
    [nodes, setEdges, updateNodeData]
  );

  const isValidConnection = useCallback(
    (connection: Edge | Connection) => {
      //No self connection allowed
      if (connection.source === connection.target) return false;

      //Same taskParam connection is not allowed
      const source = nodes.find((nd) => nd.id === connection.source);
      const target = nodes.find((nd) => nd.id === connection.target);
      if (!source || !target) {
        console.error("source or target not found");
        return false;
      }

      const sourceTask = TaskRegistry[source.data.type];
      const targetTask = TaskRegistry[target.data.type];

      const output = sourceTask.outputs.find(
        (o) => o.name === connection.sourceHandle
      );

      const input = targetTask.inputs.find(
        (i) => i.name === connection.targetHandle
      );

      if (input?.type !== output?.type) {
        console.error("invalid type connection");
        return false;
      }
      //detect and prevent cycles

      const hasCycle = (node: AppNode, visited = new Set()) => {
        if (visited.has(node.id)) return false;
        visited.add(node.id);

        for (const outgoer of getOutgoers(node, nodes, edges)) {
          if (outgoer.id === connection.source) return true;
          if (hasCycle(outgoer, visited)) return true;
        }
      };
      const detectedCycle = hasCycle(target);
      return !detectedCycle;
    },
    [nodes, edges]
  );

  return (
    <main className="h-full w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        snapToGrid
        snapGrid={snapGrid}
        fitViewOptions={fitViewOptions}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onConnect={onConnect}
        isValidConnection={isValidConnection}
      >
        <Controls position="top-left" fitViewOptions={fitViewOptions} />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </main>
  );
}

export default FlowEditor;
