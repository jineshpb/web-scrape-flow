import prisma from "@/lib/prisma";

export async function cleanupOldWorkflowRuns() {
  try {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    // Use a simple delete without transaction
    const deleted = await prisma.workflowExecution.deleteMany({
      where: {
        createdAt: {
          lt: oneMonthAgo,
        },
        status: {
          in: ["COMPLETED", "FAILED"], // Only delete completed or failed runs
        },
      },
    });

    console.log(`Cleaned up ${deleted.count} workflow runs older than 1 month`);
  } catch (error) {
    console.error("Failed to cleanup workflow runs:", error);
    // Don't throw the error to prevent app startup failure
  } finally {
    // Ensure connection is properly handled
    await prisma.$disconnect();
  }
}
