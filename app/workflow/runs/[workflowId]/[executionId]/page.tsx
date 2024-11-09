import { getWorkflowExecutionWithPhases } from "@/actions/workflows/getWorkflowExecutionWithPhases";
import TopBar from "@/app/workflow/_components/topbar/TopBar";
import { waitFor } from "@/lib/helper/waitFor";
import { auth } from "@clerk/nextjs/server";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import ExecutionViewer from "./_components/ExecutionViewer";

function ExecutionViewerPage({
  params,
}: {
  params: { workflowId: string; executionId: string };
}) {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      <TopBar
        workflowId={params.workflowId}
        title="Workflow Run details"
        subTitle={`Run ID: ${params.executionId}`}
        hideButtons={true}
      />
      <section className="h-full overflow-auto flex">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-full w-full">
              <Loader2 className="h-10 w-10 animate-spin stroke-primary" />
            </div>
          }
        >
          <ExecutionViewerWrapper executionId={params.executionId} />
        </Suspense>
      </section>
    </div>
  );
}

async function ExecutionViewerWrapper({
  executionId,
}: {
  executionId: string;
}) {
  const workflowExecution = await getWorkflowExecutionWithPhases(executionId);
  if (!workflowExecution) {
    return <div>Workflow execution not found</div>;
  }

  return <ExecutionViewer initialData={workflowExecution} />;
}

export default ExecutionViewerPage;
