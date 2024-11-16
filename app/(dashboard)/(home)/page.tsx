import { GetPeriods } from "@/actions/analytics/getPeriods";
import React, { Suspense } from "react";
import PeriodSelector from "./_components/PeriodSelector";
import { Period } from "@/types/analytic";
import { waitFor } from "@/lib/helper/waitFor";
import { Skeleton } from "@/components/ui/skeleton";
import { GetStatCardsValues } from "@/actions/analytics/getStatsCardValues";
import {
  CircleIcon,
  CirclePlayIcon,
  CoinsIcon,
  CreditCardIcon,
  WaypointsIcon,
} from "lucide-react";
import StatsCard from "./_components/StatsCard";
import { GetWorkflowExecutionStats } from "@/actions/analytics/GetWorkflowExecutionStatus";
import ExecutionStatusChart from "./_components/ExecutionStatusChart";
import { GetCreditUsageInPeriod } from "@/actions/analytics/GetCreditUsageInPeriod";
import CreditUsageChart from "../billing/_components/CreditUsageChart";

const HomePage = ({
  searchParams,
}: {
  searchParams: { month?: string; year?: string };
}) => {
  const currentDate = new Date();
  const { month, year } = searchParams;
  const period = {
    month: month ? parseInt(month) : currentDate.getMonth(),
    year: year ? parseInt(year) : currentDate.getFullYear(),
  };
  return (
    <div className="flex flex-1 h-full flex-col">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Home</h1>
        <Suspense fallback={<Skeleton className="w-[180px] h-[32px]" />}>
          <PeriodSelectorWrapper selectedPeriod={period} />
        </Suspense>
      </div>
      <div className="h-full py-6 flex flex-col gap-4">
        <Suspense fallback={<StatsCardSkeleton />}>
          <StatsCards selectedPeriod={period} />
        </Suspense>
        <Suspense fallback={<Skeleton className="w-full h-[300px]" />}>
          <StatsExecutionStatus selectedPeriod={period} />
        </Suspense>
        <Suspense fallback={<Skeleton className="w-full h-[300px]" />}>
          <CreditUsageInPeriod selectedPeriod={period} />
        </Suspense>
      </div>
    </div>
  );
};

async function PeriodSelectorWrapper({
  selectedPeriod,
}: {
  selectedPeriod: Period;
}) {
  // await waitFor(4500);
  const periods = await GetPeriods();
  return <PeriodSelector selectedPeriod={selectedPeriod} periods={periods} />;
}

async function StatsCards({ selectedPeriod }: { selectedPeriod: Period }) {
  // await waitFor(4500);
  const data = await GetStatCardsValues(selectedPeriod);
  return (
    <div className="grid gap-2 lg:gap-8 lg:grid-cols-3 min-h-[120px]">
      <StatsCard
        title="Workflow Executions"
        value={data.workflowExecutions}
        icon={CirclePlayIcon}
      />
      <StatsCard
        title="Phases Executions"
        value={data.phaseExecutions}
        icon={WaypointsIcon}
      />
      <StatsCard
        title="Credits Consumed"
        value={data.creditsConsumed}
        icon={CoinsIcon}
      />
    </div>
  );
}

function StatsCardSkeleton() {
  return (
    <div className="grid gap-3 lg:gap-8 lg:grid-cols-3">
      {[1, 2, 3].map((item) => (
        <Skeleton key={item} className="h-[120px] w-full min-h-[120px]" />
      ))}
    </div>
  );
}

async function StatsExecutionStatus({
  selectedPeriod,
}: {
  selectedPeriod: Period;
}) {
  // await waitFor(4500);
  const data = await GetWorkflowExecutionStats(selectedPeriod);
  return <ExecutionStatusChart data={data} />;
}
async function CreditUsageInPeriod({
  selectedPeriod,
}: {
  selectedPeriod: Period;
}) {
  // await waitFor(4500);
  const data = await GetCreditUsageInPeriod(selectedPeriod);
  return (
    <CreditUsageChart
      data={data}
      title="Daily Credits Usage"
      description="This chart shows the daily credits usage for the selected period."
    />
  );
}

export default HomePage;
