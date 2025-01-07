"use client";

import { Button } from "@/components/ui/button";
import TooltipWrapper from "@/components/TooltipWrapper";
import { ArrowLeftIcon, PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import SaveBtn from "./SaveBtn";
import ExecuteBtn from "./ExecuteBtn";
import NavigationTabs from "./NavigationTabs";
import PublishBtn from "./PublishBtn";
import UnpublishBtn from "./UnpublishBtn";

interface Props {
  title: string;
  subTitle?: string;
  workflowId: string;
  hideButtons?: boolean;
  isPublished?: boolean;
}

function TopBar({
  title,
  subTitle,
  workflowId,
  hideButtons,
  isPublished,
}: Props) {
  const router = useRouter();
  return (
    <header className="flex p-2 border-b border-separate justify-between w-full h-[60px] sticky top-0 bg-background z-10 ">
      <div className="flex gap-1 flex-1">
        <TooltipWrapper content="Back">
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => {
              router.push("/workflows");
            }}
          >
            <ArrowLeftIcon size={20} />
          </Button>
        </TooltipWrapper>
        <div>
          <p className="font-bold text-ellipsis truncate">{title}</p>
          {subTitle && (
            <p className="text-xs text-muted-foreground truncate text-ellipsis">
              {subTitle}
            </p>
          )}
        </div>
      </div>
      <NavigationTabs workflowId={workflowId} />
      <div className="flex gap-1 flex-1 justify-end">
        {!hideButtons && (
          <>
            <ExecuteBtn workflowId={workflowId} />
            {isPublished && <UnpublishBtn workflowId={workflowId} />}
            {!isPublished && (
              <>
                <SaveBtn workflowId={workflowId} />
                <PublishBtn workflowId={workflowId} />
              </>
            )}
          </>
        )}
      </div>
    </header>
  );
}

export default TopBar;
