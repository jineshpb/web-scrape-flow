"use server";

import { PeriodToDateRange } from "@/lib/helper/dates";
import prisma from "@/lib/prisma";
import { Period } from "@/types/analytic";
import {
  ExecutionPhaseStatus,
  WorkflowExecutionStatus,
} from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";
import { eachDayOfInterval, format } from "date-fns";

import { date } from "zod";

type Stats = Record<string, { success: number; failed: number }>;

const { COMPLETED, FAILED } = ExecutionPhaseStatus;

export async function GetCreditUsageInPeriod(period: Period) {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }

  const dateRange = PeriodToDateRange(period);
  const executionPhases = await prisma.executionPhase.findMany({
    where: {
      userId,
      startedAt: {
        gte: dateRange.startDate,
        lte: dateRange.endDate,
      },
      status: {
        in: [COMPLETED, FAILED],
      },
    },
  });

  const dateFormat = "yyyy-MM-dd";

  const stats: Stats = eachDayOfInterval({
    start: dateRange.startDate,
    end: dateRange.endDate,
  })
    .map((date) => format(date, dateFormat))
    .reduce((acc, data) => {
      acc[data] = {
        success: 0,
        failed: 0,
      };
      return acc;
    }, {} as Stats);

  executionPhases.forEach((executionPhase) => {
    const date = format(executionPhase.startedAt!, dateFormat);
    if (executionPhase.status === COMPLETED) {
      stats[date].success += executionPhase.creditsConsumed || 0;
    }
    if (executionPhase.status === FAILED) {
      stats[date].failed += executionPhase.creditsConsumed || 0;
    }
  });

  const result = Object.entries(stats).map(([date, infos]) => ({
    date,
    ...infos,
  }));

  return result;
}
