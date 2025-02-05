import { NextResponse } from "next/server";
import { cleanupOldWorkflowRuns } from "@/lib/cleanup/workflowRuns";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const expectedToken = process.env.CRON_SECRET_KEY;

    if (authHeader !== `Bearer ${expectedToken}`) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await cleanupOldWorkflowRuns();
    return new NextResponse("Cleanup completed", { status: 200 });
  } catch (error) {
    console.error("Cleanup failed:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
