"use client";

import { UnpublishWorkflow } from "@/actions/workflows/unpublishWorkflow";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { DownloadIcon } from "lucide-react";
import React from "react";
import { toast } from "sonner";

function UnpublishBtn({ workflowId }: { workflowId: string }) {
  const mutation = useMutation({
    mutationFn: UnpublishWorkflow,
    onSuccess: () => {
      toast.success("Workflow unpublished", {
        id: workflowId,
      });
    },
    onError: () => {
      toast.error("Something went wrong", {
        id: workflowId,
      });
    },
  });
  return (
    <Button
      className="flex items-center gap-2"
      variant={"outline"}
      disabled={mutation.isPending}
      onClick={() => {
        toast.loading("Unpublishing workflow", {
          id: workflowId,
        });

        mutation.mutate(workflowId);
      }}
    >
      <DownloadIcon size={16} className="stroke-orange-400" />
      Unpublish
    </Button>
  );
}

export default UnpublishBtn;
