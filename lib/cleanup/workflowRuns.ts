import prisma from "@/lib/prisma";

export async function cleanupOldWorkflowRuns() {
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  try {
    const deleted = await prisma.workflowExecution.deleteMany({
      where: {
        createdAt: {
          lt: oneMonthAgo,
        },
        status: {
          in: ["COMPLETED", "FAILED"],
        },
      },
    });

    console.log(`Cleaned up ${deleted.count} workflow runs older than 1 month`);
  } catch (error) {
    console.error("Failed to cleanup workflow runs:", error);
  }
}
