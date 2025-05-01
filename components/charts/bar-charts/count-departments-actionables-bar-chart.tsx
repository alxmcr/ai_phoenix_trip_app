"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis, Cell } from "recharts";

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

// Define a color palette with good contrast
const colorPalette = [
  "hsl(210, 70%, 70%)", // Light Blue
  "hsl(120, 70%, 70%)", // Light Green
  "hsl(30, 70%, 70%)",  // Light Orange
  "hsl(270, 70%, 70%)", // Light Purple
  "hsl(0, 70%, 70%)",   // Light Red
  "hsl(60, 70%, 70%)",  // Light Yellow
  "hsl(180, 70%, 70%)", // Light Cyan
  "hsl(300, 70%, 70%)", // Light Magenta
];

type Props = {
  data: DepartmentCount[];
};

export function CountDepartmentsActionablesBarChart({ data }: Props) {
  const chartData = data.map((item, index) => ({
    name: item.department,
    value: item.count,
    color: colorPalette[index % colorPalette.length], // Assign colors cyclically
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
              left: 100, // Increased left margin for y-axis labels
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
              tickMargin={20} // Increased tick margin
              axisLine={false}
              width={80} // Fixed width for y-axis
              tick={{ fontSize: 12 }} // Adjust font size
            />
            <XAxis dataKey="value" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="value"
              layout="vertical"
              radius={5}
            >
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colorPalette[index % colorPalette.length]} />
              ))}
            </Bar>
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
