"use client";

import { getWorkflowExecutionWithPhases } from "@/actions/workflows/getWorkflowExecutionWithPhases";
import { GetWorkflowPhaseDetails } from "@/actions/workflows/getWorkflowPhaseDetails";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DateToDurationString } from "@/lib/helper/dates";
import { GetPhasesTotalCost } from "@/lib/helper/phases";
import {
  ExecutionPhaseStatus,
  WorkflowExecutionStatus,
} from "@/types/workflow";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import {
  CalendarIcon,
  CircleDashedIcon,
  ClockIcon,
  CoinsIcon,
  Icon,
  Loader2,
  LucideIcon,
  WorkflowIcon,
  StopCircle,
  StickyNote,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
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
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { ReactNode, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { ExecutionLog } from "@prisma/client";

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableHeader,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { LogLevel } from "@/types/Log";
import PhaseStatusBadge from "./PhaseStatusBadge";
import ReactCountUpWrapper from "@/components/ReactCountUpWrapper";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Textarea } from "@/components/ui/textarea";

type ExecutionData = Awaited<ReturnType<typeof getWorkflowExecutionWithPhases>>;

export default function ExecutionViewer({
  initialData,
}: {
  initialData: ExecutionData;
}) {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const router = useRouter();

  const query = useQuery<ExecutionData>({
    queryKey: ["execution", initialData?.id],
    initialData,
    queryFn: () => getWorkflowExecutionWithPhases(initialData!.id),
    refetchInterval: (q) =>
      q.state.data?.status === WorkflowExecutionStatus.RUNNING ? 1000 : false,
  });

  const phaseDetails = useQuery({
    queryKey: ["phaseDetails", selectedPhase, query.data?.status],
    enabled: selectedPhase !== null,
    queryFn: () => GetWorkflowPhaseDetails(selectedPhase!),
  });

  const isRunning = query.data?.status === WorkflowExecutionStatus.RUNNING;

  useEffect(() => {
    //While running we auto select the current runing phase
    const phases = query.data?.phases || [];
    if (isRunning) {
      //select the last executed phase
      const phaseToSelect = phases.toSorted((a, b) =>
        a.startedAt! > b.startedAt! ? -1 : 1
      )[0];
      setSelectedPhase(phaseToSelect?.id);
      return;
    }

    const phaseToSelect = phases.toSorted((a, b) =>
      a.completedAt! > b.completedAt! ? -1 : 1
    )[0];
    setSelectedPhase(phaseToSelect?.id);
  }, [query.data?.phases, isRunning, setSelectedPhase]);

  const duration = DateToDurationString(
    query.data?.completedAt,
    query.data?.startedAt
  );

  const creditsConsumed = GetPhasesTotalCost(query.data?.phases || []);

  const handleStopWorkflow = async () => {
    try {
      const response = await fetch("/api/workflow/stop", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ executionId: query.data?.id }),
      });

      if (response.ok) {
        toast.success("Workflow stopped successfully");
        router.refresh();
      } else {
        toast.error("Failed to stop workflow");
      }
    } catch (error) {
      toast.error("Something went wrong while stopping the workflow");
    }
  };

  const showStopButton = query.data?.status === WorkflowExecutionStatus.RUNNING;

  console.log("@@QERY", query.data?.phases[1].node);

  return (
    <div className="flex w-full h-full">
      <aside className="w-[440px] min-w-[440px] max-w-[440px] border-r-2 border-separate flex flex-grow flex-col overflow-hidden">
        <div className="py-4 px-2">
          {/* status label */}
          <ExecutionLabel
            icon={CircleDashedIcon}
            label="Status"
            value={
              <div className="font-semibold capitalize justify-center flex items-center gap-2">
                <PhaseStatusBadge
                  status={query.data?.status as ExecutionPhaseStatus}
                />
                <span>{query.data?.status}</span>
              </div>
            }
          />
          <ExecutionLabel
            icon={CalendarIcon}
            label="Started at"
            value={
              query.data?.startedAt
                ? formatDistanceToNow(new Date(query.data.startedAt), {
                    addSuffix: true,
                  })
                : "-"
            }
          />
          <ExecutionLabel
            icon={ClockIcon}
            label="Duration"
            value={
              duration ? (
                duration
              ) : (
                <Loader2 className="animate-spin" size={20} />
              )
            }
          />
          <ExecutionLabel
            icon={CoinsIcon}
            label="Credits consumed"
            value={creditsConsumed}
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <ExecutionLabel
                icon={CoinsIcon}
                label="Credits consumed"
                value={creditsConsumed}
              />
            </div>
            {showStopButton && (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" size="sm">
                    <StopCircle className="mr-2 h-4 w-4" />
                    Stop Workflow
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Stop Workflow Execution</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to stop this workflow? This action
                      cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleStopWorkflow}>
                      Stop Workflow
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
        </div>
        <Separator />
        <div className="flex justify-center items-center py-2 px-4">
          <div className="text-muted-foreground flex items-center gap-2">
            <WorkflowIcon size={20} className="stroke-muted-foreground/80" />
            <span className=" font-semibold">Phases</span>
          </div>
        </div>
        <Separator />
        <div className="overflow-auto h-full px-2 py-4">
          {query.data?.phases.map((phase, index) => {
            const nodeData = JSON.parse(phase.node);
            const notes = nodeData.data.notes;

            return (
              <div key={phase.id} className="space-y-2">
                <Button
                  className="w-full justify-between"
                  variant={selectedPhase === phase.id ? "secondary" : "ghost"}
                  onClick={() => {
                    if (isRunning) return;
                    setSelectedPhase(phase.id);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{index + 1}</Badge>
                    <p className="font-semibold">{phase.name}</p>
                  </div>
                  <PhaseStatusBadge
                    status={phase.status as ExecutionPhaseStatus}
                  />
                </Button>

                {notes && (
                  <Collapsible className="ml-9">
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors h-6 px-2 py-1"
                      >
                        <ChevronRight
                          size={14}
                          className="collapsible-chevron"
                        />
                        <StickyNote size={14} />
                        <span>Notes</span>
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mt-2 rounded-md bg-muted/50 p-3">
                        <ScrollArea className="max-h-[100px]">
                          <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                            {notes}
                          </p>
                        </ScrollArea>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                )}
              </div>
            );
          })}
        </div>
      </aside>
      <div className="flex w-full h-full">
        {isRunning && (
          <div className="flex items-center flex-col gap-2 justify-center h-full w-full">
            <p className="font-bold text-muted-foreground">
              Run is in progress please wait
            </p>
          </div>
        )}
        {!isRunning && !selectedPhase && (
          <div className="flex items-center flex-col gap-2 justify-center h-full w-full">
            <div className="flex flex-col gap-1 text-center">
              <p className="font-bold">Select a phase to view details</p>
              <p className="text-sm text-muted-foreground">No Phase selected</p>
            </div>
          </div>
        )}
        {!isRunning && selectedPhase && phaseDetails.data && (
          <div className="flex flex-col py-4 container gap-4 overflow-auto">
            <div className="flex gap-2 items-center">
              <Badge variant="outline" className="space-x-4">
                <div className="flex gap-1 items-center">
                  <CoinsIcon size={18} className="stroke-muted-foreground" />
                  <span>Credits</span>
                </div>
                <span>{phaseDetails.data.creditsConsumed}</span>
              </Badge>
              <Badge variant="outline" className="space-x-4">
                <div className="flex gap-1 items-center">
                  <ClockIcon size={18} className="stroke-muted-foreground" />
                  <span>Duration</span>
                </div>
                <span>
                  {DateToDurationString(
                    phaseDetails.data.completedAt,
                    phaseDetails.data.startedAt
                  ) || "-"}
                </span>
              </Badge>
            </div>
            <ParameterViewer
              title="Inputs"
              sbtitle="Inputs used for this phase"
              paramsJSON={phaseDetails.data.inputs}
            />

            <ParameterViewer
              title="Outputs"
              sbtitle="Outputs generated by this phase"
              paramsJSON={phaseDetails.data.outputs}
            />

            <LogsViewer logs={phaseDetails.data.logs} />
          </div>
        )}
      </div>
    </div>
  );
}

function ExecutionLabel({
  icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: ReactNode;
  value: ReactNode;
}) {
  const Icon = icon;
  return (
    <div className="flex justify-between items-center py-2 px-4">
      <div className="text-muted-foreground flex items-center gap-2">
        <Icon size={20} className="text-muted-foreground/80" />
        <span className="text-sm">{label}</span>
      </div>
      <div className="font-semibold capitalize flex gap-2 items-center">
        <div>{value}</div>
      </div>
    </div>
  );
}

function ParameterViewer({
  title,
  sbtitle,
  paramsJSON,
}: {
  title: string;
  sbtitle: string;
  paramsJSON: string | null;
}) {
  const params = paramsJSON ? JSON.parse(paramsJSON) : null;
  return (
    <Card>
      <CardHeader className="rounded-lg rounded-b-none border-b py-4 bg-gray-50 dar:bg-background">
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          {sbtitle}
        </CardDescription>
      </CardHeader>
      <CardContent className="py-4">
        <div className="flex flex-col gap-2">
          {!params ||
            (Object.keys(params).length === 0 && (
              <p className="text-sm">No Parameters generated by this phase</p>
            ))}
          {params &&
            Object.entries(params).map(([key, value]) => (
              <div className="flex justify-between items-center" key={key}>
                <p className="text-sm text-muted-foreground flex-1 basis-1/3">
                  {key}
                </p>
                <Textarea
                  readOnly
                  className="flex-1 basis-2/3"
                  value={value as string}
                />
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
}

function LogsViewer({ logs }: { logs: ExecutionLog[] | undefined }) {
  if (!logs || logs.length === 0) return null;

  return (
    <Card className="w-full">
      <CardHeader className="rounded-lg rounded-b-none border-b py-4 bg-gray-50 dark:bg-background">
        <CardTitle className="text-base">Logs</CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          Logs generated by this phase
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 w-full">
        <Table>
          <TableHeader className="text-muted-foreground text-sm">
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id} className="text-muted-foreground text-sm">
                <TableCell
                  width={190}
                  className="text-xs text-muted-foreground p-[2px] pl-4"
                >
                  {log.timestamp.toISOString()}
                </TableCell>
                <TableCell
                  width={80}
                  className={cn(
                    "uppercase text-xs font-bold pl-4",
                    (log.logLevel as LogLevel) === "error" &&
                      "text-destructive",
                    (log.logLevel as LogLevel) === "info" && "text-primary"
                  )}
                >
                  {log.logLevel}
                </TableCell>
                <TableCell className="text-sm flex-1 p-[3px] pl-4">
                  {log.message}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
