import { updateWorkflow } from "@/actions/workflows/updateWorkflow";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { createWorkflowSchema } from "@/schema/workflow";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  workflowName: string;
  workflowDescription?: string;
  workflowId: string;
}

export default function RenameWorkflowDialog({
  open,
  setOpen,
  workflowName,
  workflowDescription = "",
  workflowId,
}: Props) {
  const [newName, setNewName] = useState(workflowName);
  const [newDescription, setNewDescription] = useState(workflowDescription);

  const renameMutation = useMutation({
    mutationFn: updateWorkflow,
    onSuccess: () => {
      toast.success("Workflow updated successfully");
      setOpen(false);
      // Reset form
      setNewName(workflowName);
      setNewDescription(workflowDescription);
    },
    onError: () => {
      toast.error("Failed to update workflow");
    },
  });

  const handleUpdate = () => {
    const result = createWorkflowSchema.safeParse({
      name: newName.trim(),
      description: newDescription.trim() || undefined,
    });

    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    renameMutation.mutate({
      id: workflowId,
      name: newName.trim(),
      description: newDescription.trim() || null,
    });
  };

  const hasChanges =
    newName.trim() !== workflowName ||
    newDescription.trim() !== workflowDescription;

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Update Workflow</AlertDialogTitle>
          <AlertDialogDescription>
            Update the workflow details
            <div className="flex flex-col py-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Enter workflow name"
                  maxLength={50}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Description (optional)
                </label>
                <Textarea
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Enter workflow description"
                  maxLength={80}
                  rows={3}
                />
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              setNewName(workflowName);
              setNewDescription(workflowDescription);
              setOpen(false);
            }}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={
              !hasChanges || newName.trim() === "" || renameMutation.isPending
            }
            onClick={handleUpdate}
          >
            Update
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
