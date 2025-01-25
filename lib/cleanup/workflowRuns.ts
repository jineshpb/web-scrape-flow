import prisma from "@/lib/prisma";

export async function cleanupOldWorkflowRuns() {
  try {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const deleted = await prisma.$transaction(
      async (tx) => {
        return await tx.workflowExecution.deleteMany({
          where: {
            createdAt: {
              lt: oneMonthAgo,
            },
          },
        });
      },
      {
        timeout: 30000, // 30 seconds timeout
        maxWait: 35000, // maximum time to wait for transaction
      }
    );

    console.log(`Cleaned up ${deleted.count} workflow runs older than 1 month`);
  } catch (error) {
    console.error("Failed to cleanup workflow runs:", error);
    // Don't throw the error to prevent app startup failure
  }
}
