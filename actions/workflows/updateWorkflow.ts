"use server";

import prisma from "@/lib/prisma";
import { WorkflowStatus } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const updateWorkflowSchema = z
  .object({
    id: z.string(),
    definition: z.string().optional(),
    name: z.string().min(1).max(50).optional(),
    description: z.string().max(80).nullable().optional(),
  })
  .refine(
    (data) =>
      data.definition !== undefined ||
      data.name !== undefined ||
      data.description !== undefined,
    {
      message: "At least one field must be provided to update",
    }
  );

type UpdateWorkflowInput = z.infer<typeof updateWorkflowSchema>;

export async function updateWorkflow(input: UpdateWorkflowInput) {
  const { success, data } = updateWorkflowSchema.safeParse(input);
  if (!success) {
    throw new Error("Invalid input data");
  }

  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  const workflow = await prisma.workflow.findUnique({
    where: {
      id: data.id,
      userId,
    },
  });

  if (!workflow) {
    throw new Error("Workflow not found");
  }

  if (workflow.status !== WorkflowStatus.DRAFT) {
    throw new Error("Workflow is not in draft state");
  }

  // Only include fields that are provided in the update
  const updateData: {
    definition?: string;
    name?: string;
    description?: string | null;
  } = {};
  if (data.definition) updateData.definition = data.definition;
  if (data.name) updateData.name = data.name;
  if (data.description !== undefined) {
    // If description is an empty string or null, set it to null in the database
    updateData.description = data.description || null;
  }

  await prisma.workflow.update({
    data: updateData,
    where: {
      id: data.id,
      userId,
    },
  });

  revalidatePath("/workflows");
}
