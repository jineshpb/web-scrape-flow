import { cleanupOldWorkflowRuns } from "@/lib/cleanup/workflowRuns";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Verify cron secret to ensure only authorized calls
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET_KEY}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  await cleanupOldWorkflowRuns();
  return NextResponse.json({ success: true });
}
