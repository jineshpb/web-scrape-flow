"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function removeWorkflowSchedule(id: string) {
  const { userId } = await auth();

  if (!userId) {
    return { error: "Unauthorized" };
  }

  await prisma.workflow.update({
    where: { id, userId },
    data: { cron: null, nextRunAt: null },
  });

  revalidatePath(`/workflow`);
}
