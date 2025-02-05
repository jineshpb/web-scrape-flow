import { NextResponse } from "next/server";
import { StopWorkflow } from "@/lib/workflow/executeWorkflow";

export async function POST(request: Request) {
  try {
    const { executionId } = await request.json();

    if (!executionId) {
      return new NextResponse("Execution ID required", { status: 400 });
    }

    const success = await StopWorkflow(executionId);

    if (success) {
      return new NextResponse("Workflow stopped successfully", { status: 200 });
    } else {
      return new NextResponse("Failed to stop workflow", { status: 400 });
    }
  } catch (error) {
    console.error("Error stopping workflow:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
