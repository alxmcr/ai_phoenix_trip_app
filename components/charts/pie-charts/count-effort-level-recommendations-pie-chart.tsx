"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { CountEffortRecommendations } from "@/types/dashboard/types-dashboard";

type Props = {
  data: CountEffortRecommendations[];
};

const chartConfig = {
  low: {
    label: "Low",
    color: "hsl(var(--chart-1))",
  },
  medium: {
    label: "Medium",
    color: "hsl(var(--chart-2))",
  },
  high: {
    label: "High",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function CountEffortLevelRecommendationsPieChart({ data }: Props) {
  const chartData = data.map((item) => ({
    effort: item.effort,
    count: item.count,
    fill: chartConfig[item.effort as keyof typeof chartConfig].color,
  }));

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Recommendations by Effort Level</CardTitle>
        <CardDescription>Distribution of recommendations based on implementation effort</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="count" nameKey="effort" label />
            <ChartLegend verticalAlign="bottom" content={<ChartLegendContent />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Distribution of recommendations by implementation effort <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Shows the proportion of recommendations categorized by their required effort level
        </div>
      </CardFooter>
    </Card>
  );
}
