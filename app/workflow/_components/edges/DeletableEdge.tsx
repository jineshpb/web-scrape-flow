"use client";

import { Button } from "@/components/ui/button";
import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
  useReactFlow,
} from "@xyflow/react";
import { X } from "lucide-react";

export default function DeletableEdge(props: EdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    ...props,
    curvature: 0.5, // Adjust this value to control the curve (0.1 to 1.0)
  });
  const { setEdges } = useReactFlow();

  return (
    <>
      <BaseEdge
        path={edgePath}
        markerEnd={props.markerEnd}
        style={{
          ...props.style,
          strokeWidth: 2,
          strokeDasharray: "5,5",
          animation: "dashdraw 0.5s linear infinite",
        }}
      />

      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: "all",
          }}
        >
          <Button
            variant={"outline"}
            size="icon"
            className="w-5 h-5 border cursor-pointer rounded-full text-xs  leading-none hover:shadow-lg"
            onClick={() => {
              setEdges((eds) => eds.filter((e) => e.id !== props.id));
            }}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}
