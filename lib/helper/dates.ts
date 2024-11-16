import { Period } from "@/types/analytic";
import {
  endOfMonth,
  formatDistanceToNow,
  intervalToDuration,
  startOfMonth,
} from "date-fns";
import { DateRange } from "react-day-picker";

export function DateToDurationString(
  end: Date | null | undefined,
  start: Date | null | undefined
): string {
  if (!end || !start) return "-";

  const timeElapsed = end.getTime() - start.getTime();

  if (timeElapsed < 1000) {
    //less than a second
    return `${timeElapsed}ms`;
  }

  const duration = intervalToDuration({
    start: 0,
    end: timeElapsed,
  });

  return `${duration.minutes || 0}m ${duration.seconds || 0}s`;
}

export function PeriodToDateRange(period: Period) {
  const startDate = startOfMonth(new Date(period.year, period.month));
  const endDate = endOfMonth(new Date(period.year, period.month));
  return { startDate, endDate };
}
