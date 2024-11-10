import { Log, LogCollector, LogLevel, LogFunction } from "@/types/Log";
import { timeStamp } from "console";

export function createLogCollector(): LogCollector {
  const logs: Log[] = [];
  const getAll = () => logs;

  const logFunctions = {} as Record<LogLevel, LogFunction>;
  LogLevel.forEach(
    (level) =>
      (logFunctions[level] = (message: string) => {
        logs.push({ message, level, timestamp: new Date() });
      })
  );
  return {
    getAll,
    ...logFunctions,
  };
}
