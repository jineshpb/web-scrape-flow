"use client";

import { deleteCredential } from "@/actions/credentials/deleteCredential";
import { deleteWorkflow } from "@/actions/workflows/deleteWorkflow";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { workflow } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { TrashIcon } from "lucide-react";

import React, { useState } from "react";
import { toast } from "sonner";

interface Props {
  name: string;
}

function DeleteCredentialDialog({ name }: Props) {
  const [confirmText, setConfirmText] = useState("");
  const [open, setOpen] = useState(false);

  const deleteMutation = useMutation({
    mutationFn: deleteCredential,
    onSuccess: () => {
      toast.success("Credential deleted successfully", { id: name });
      setConfirmText("");
    },
    onError: () => {
      toast.error("Something went wrong", { id: name });
    },
  });
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size={"icon"}>
          <TrashIcon size={18} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Workflow</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this credential?
            <div className="flex flex-col py-4 gap-2">
              <p>
                If you are sure, enter the <b>{name}</b> to confirm.
              </p>
              <Input
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
              />
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setConfirmText(" ")}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={confirmText !== name || deleteMutation.isPending}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            onClick={(e) => {
              toast.loading("Deleting credential...", { id: name });
              deleteMutation.mutate(name);
            }}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteCredentialDialog;
