import { BarChart, Circle, Target, Zap } from "lucide-react";

type Props = {
  impact: string;
};

export function ImpactIcon({ impact = "" }: Props) {
  switch (impact.toLowerCase()) {
    case "high":
      return <Zap className="h-5 w-5 text-rose-500" />;
    case "medium":
      return <Target className="h-5 w-5 text-amber-500" />;
    case "low":
      return <BarChart className="h-5 w-5 text-emerald-500" />;
    default:
      return <Circle className="h-5 w-5 text-gray-500" />;
  }
}
