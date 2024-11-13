import { GetCredentialsForUser } from "@/actions/credentials/getCredentialsForUser";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { LockKeyholeIcon, ShieldIcon, ShieldOffIcon } from "lucide-react";
import React, { Suspense } from "react";
import CreateCredentialDialog from "./_components/CreateCredentialDialog";
import { formatDistanceToNow } from "date-fns";
import DeleteCredentialDialog from "./_components/DeleteCredentialDialog";

export default function CredentialsPage() {
  return (
    <div className="flex flex-1 flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">Credentials</h1>
          <p className="text-sm text-muted-foreground">
            Manage your credentials
          </p>
        </div>
        <CreateCredentialDialog triggerText="Create your first credential" />
      </div>
      <div className="h-full py-6 space-y-8">
        <Alert>
          <ShieldIcon className="w-4 h-4 stroke-primary" />
          <AlertTitle className="text-primary">Encryption</AlertTitle>
          <AlertDescription>
            All information is securely encrypted and stored in the database.
          </AlertDescription>
        </Alert>
        <Suspense fallback={<Skeleton className="w-full  h-10" />}>
          <UserCredentials />
        </Suspense>
      </div>
    </div>
  );
}

async function UserCredentials() {
  const credentials = await GetCredentialsForUser();

  if (!credentials) {
    return <div>Something went wrong</div>;
  }

  if (credentials.length === 0) {
    return (
      <Card className="p-8 w-full">
        <div className="flex flex-col gap-4 justify-center items-center text-center">
          <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center mx-auto">
            <ShieldOffIcon size={40} className="stroke-primary" />
          </div>
          <div className="flex flex-col gap-1 text-center">
            <p className="text-bold">No credentials created yet</p>
            <p className="text-sm text-muted-foreground">
              Click the button below to create your first credential
            </p>
          </div>
          <CreateCredentialDialog triggerText="Create your first credential" />
        </div>
      </Card>
    );
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {credentials.map((credential) => {
        const createdAt = formatDistanceToNow(credential.createdAt, {
          addSuffix: true,
        });
        return (
          <Card key={credential.id} className="w-full p-4 flex justify-between">
            <div className="flex gap-2 items-center">
              <div className="rounded-full bg-primary/10 h-8 w-8 flex items-center justify-center">
                <LockKeyholeIcon size={18} className="stroke-primary" />
              </div>
              <div>
                <p className="font-bold">{credential.name}</p>
                <p className="text-xs text-muted-foreground">{createdAt}</p>
              </div>
            </div>
            <DeleteCredentialDialog name={credential.name} />
          </Card>
        );
      })}
    </div>
  );
}
