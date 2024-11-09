"use server";

import prisma from "@/lib/prisma";
import { createFlowNode } from "@/lib/workflow/createFlowNode";
import {
  createWorkflowSchema,
  CreateWorkflowSchemaType,
} from "@/schema/workflow";
import { AppNode } from "@/types/appNode";
import { TaskType } from "@/types/task";
import { WorkflowStatus } from "@/types/workflow";
import { auth, getAuth } from "@clerk/nextjs/server";
import { Edge } from "@xyflow/react";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createWorkflow(form: CreateWorkflowSchemaType) {
  const { success, data } = createWorkflowSchema.safeParse(form);
  const { userId } = await auth();
  if (!success) {
    throw new Error("Invalid form data");
  }

  if (!userId) {
    throw new Error("User not authenticated");
  }

  const initialWorlkflow: { nodes: AppNode[]; edges: Edge[] } = {
    edges: [],
    nodes: [],
  };

  //Lets add the flow entry point
  initialWorlkflow.nodes.push(
    createFlowNode(TaskType.LAUNCH_BROWSER, {
      x: 0,
      y: 0,
    })
  );

  const result = await prisma.workflow.create({
    data: {
      userId,
      status: WorkflowStatus.DRAFT,
      definition: JSON.stringify(initialWorlkflow),
      ...data,
    },
  });

  if (!result) {
    throw new Error("Failed to create workflow");
  }

  redirect(`/workflow/editor/${result.id}`);
}
