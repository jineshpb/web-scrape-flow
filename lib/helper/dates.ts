import { formatDistanceToNow, intervalToDuration } from "date-fns";

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
