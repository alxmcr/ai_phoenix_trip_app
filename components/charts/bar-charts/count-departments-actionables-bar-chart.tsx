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
              left: 100,
              right: 20,
              top: 20,
              bottom: 20,
            }}
            width={500}
            height={300}
          >
            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              tickMargin={20}
              axisLine={false}
              width={80}
              tick={{ fontSize: 12 }}
            />
            <XAxis dataKey="value" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <ChartTooltipContent>
                      <div className="flex flex-col gap-1">
                        <p className="font-medium">{data.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Actionables: {data.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {((data.value / chartData.reduce((acc: number, curr: { value: number }) => acc + curr.value, 0)) * 100).toFixed(1)}% of total
                        </p>
                      </div>
                    </ChartTooltipContent>
                  );
                }
                return null;
              }}
            />
            <Bar
              dataKey="value"
              layout="vertical"
              radius={5}
              fill="hsl(var(--chart-bar))"
              label={{
                position: 'right',
                fill: 'hsl(var(--chart-bar-label))',
                fontSize: 12,
                fontWeight: 'bold',
                formatter: (value: number) => value.toString(),
                style: {
                  textShadow: '0 0 2px hsl(var(--chart-bar-label-bg))',
                  padding: '0 2px',
                },
              }}
            />
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
