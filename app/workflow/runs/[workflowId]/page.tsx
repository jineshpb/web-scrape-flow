import { GetWorkflowExecutions } from "@/actions/workflows/getWorkflowExecutions";
import TopBar from "../../_components/topbar/TopBar";
import { Suspense } from "react";
import { InboxIcon, Loader2Icon } from "lucide-react";
import { waitFor } from "@/lib/helper/waitFor";
import ExecutionsTableComponent from "./_components/ExecutionsTableComponent";

export default function ExecutionsPage({
  params,
}: {
  params: { workflowId: string };
}) {
  return (
    <div className="h-full w-full overflow-auto">
      <TopBar
        workflowId={params.workflowId}
        hideButtons
        title="All runs"
        subTitle="List of alll your workflow runs"
      />
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center">
            <Loader2Icon size={32} className="animate-spin stroke-primary" />
          </div>
        }
      >
        <ExecutionsTableWrapper workflowId={params.workflowId} />
      </Suspense>
    </div>
  );
}

async function ExecutionsTableWrapper({ workflowId }: { workflowId: string }) {
  // await waitFor(5000);
  const executions = await GetWorkflowExecutions(workflowId);
  if (!executions) {
    return <div>No executions found</div>;
  }
  if (executions.length === 0) {
    return (
      <div className="container w-full py-6 ">
        <div className="flex items-center flex-col gap-2 justify-center h-full w-full">
          <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
            <InboxIcon size={40} className="stroke-primary" />
          </div>
          <div className="flex flex-col gap-1 text-center">
            <p className="font-bold ">
              No runs has been created yet for this workflow
            </p>
            <p className="text-sm text-muted-foreground">
              You can trigger a new run in editor page
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-6 w-full">
      <ExecutionsTableComponent
        workflowId={workflowId}
        initialData={executions}
      />
    </div>
  );
}
