"use client";

import { GetCreditUsageInPeriod } from "@/actions/analytics/GetCreditUsageInPeriod";
import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ChartColumnStackedIcon, Layers2 } from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from "recharts";

type ChartData = Awaited<ReturnType<typeof GetCreditUsageInPeriod>>;

const chartConfig = {
  success: {
    label: "Successful Phases Credits",
    color: "hsl(var(--chart-2))",
  },
  failed: {
    label: "Failed Phases Credits",
    color: "hsl(var(--chart-1))",
  },
};

export default function CreditUsageChart({
  data,
  title,
  description,
}: {
  data: ChartData;
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          <ChartColumnStackedIcon className="w-4 h-4" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[200px] w-full">
          <BarChart
            data={data || []}
            height={200}
            accessibilityLayer
            margin={{ top: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-IN", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="success"
              radius={[0, 0, 4, 4]}
              stroke="var(--color-success)"
              fillOpacity={0.8}
              fill="var(--color-success)"
              stackId={"a"}
            />
            <Bar
              dataKey="failed"
              radius={[4, 4, 0, 0]}
              stroke="var(--color-failed)"
              fillOpacity={0.8}
              fill="var(--color-failed)"
              stackId={"a"}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
