"use server";

import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import parser from "cron-parser";
import { revalidatePath } from "next/cache";

export async function updateWorkflowCron({
  id,
  cron,
}: {
  id: string;
  cron: string;
}) {
  const { userId } = await auth();
  if (!userId) {
    return { error: "Unauthorized" };
  }

  try {
    const interval = parser.parseExpression(cron, { tz: "Asia/Kolkata" });
    await prisma.workflow.update({
      where: { id, userId },
      data: { cron, nextRunAt: interval.next().toDate() },
    });
  } catch (error: any) {
    console.log("Invalid cron expression", error.message);
    throw new Error("Invalid cron expression");
  }

  revalidatePath("/workflows");
}
