"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DatePriorityCount } from "@/types/dashboard/types-dashboard";

type Props = {
  data: DatePriorityCount[];
};

const chartConfig = {
  high: {
    label: "High Priority",
    color: "#ef4444",
  },
  medium: {
    label: "Medium Priority",
    color: "#f59e0b",
  },
  low: {
    label: "Low Priority",
    color: "#10b981",
  },
} satisfies ChartConfig;

export function CountPriorityActionablesLineChartMultiple({ data }: Props) {
  // Convert data to chartData format
  const chartData = data.map((item) => ({
    date: item.date,
    high: item.high,
    medium: item.medium,
    low: item.low,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actionables by Priority Over Time</CardTitle>
        <CardDescription>Tracking the number of actionables by priority level</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
              bottom: 12,
            }}
            width={500}
            height={300}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.toString()}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="high"
              type="natural"
              stroke="#ef4444"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="medium"
              type="natural"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="low"
              type="natural"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
            />
            <ChartLegend
              verticalAlign="bottom"
              content={<ChartLegendContent />}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Actionables by Priority Level
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Shows the distribution of high, medium, and low priority actionables over time
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
