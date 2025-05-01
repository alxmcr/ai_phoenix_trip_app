import { Badge } from "../ui/badge";

type Props = {
  impact: string;
};

export function ImpactBadge({ impact = "" }: Props) {
  switch (impact.toLowerCase()) {
    case "high":
      return <Badge className="bg-rose-100 text-rose-800">{impact}</Badge>;
    case "medium":
      return <Badge className="bg-amber-100 text-black">{impact}</Badge>;
    case "low":
      return <Badge className="bg-emerald-100 text-emerald-800">{impact}</Badge>;
    default:
      return <Badge className="bg-gray-100 text-gray-800">{impact}</Badge>;
  }
}
