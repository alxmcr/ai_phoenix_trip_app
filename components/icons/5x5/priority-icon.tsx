import { AlertTriangle, CheckCircle, Circle, Clock } from "lucide-react";

type Props = {
  priority: string;
};

export function PriorityIcon({ priority = "" }: Props) {
  switch (priority) {
    case "high":
      return <AlertTriangle className="h-5 w-5 text-rose-500" />;
    case "medium":
      return <Clock className="h-5 w-5 text-amber-500" />;
    case "low":
      return <CheckCircle className="h-5 w-5 text-emerald-500" />;
    default:
      return <Circle className="h-5 w-5 text-gray-500" />;
  }
}
