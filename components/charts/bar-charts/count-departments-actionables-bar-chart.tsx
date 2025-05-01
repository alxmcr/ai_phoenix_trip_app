"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DepartmentCount } from "@/types/dashboard/types-dashboard";

const chartConfig = {
  department: {
    label: "Department",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

type Props = {
  data: DepartmentCount[];
};

export function CountDepartmentsActionablesBarChart({ data }: Props) {
  const chartData = data.map((item) => ({
    name: item.department,
    value: item.count,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Department Actionables</CardTitle>
        <CardDescription>Number of actionables per department</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <XAxis dataKey="value" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" layout="vertical" radius={5} fill="hsl(var(--primary))" />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Total departments: {data.length} <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing actionable items across all departments
        </div>
      </CardFooter>
    </Card>
  );
}
