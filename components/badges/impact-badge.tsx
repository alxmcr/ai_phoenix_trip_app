import { Badge } from "../ui/badge";

type Props = {
  impact: string;
};

export function ImpactBadge({ impact = "" }: Props) {
  switch (impact.toLowerCase()) {
    case "high":
      return <Badge className="bg-red-300">{impact}</Badge>;
    case "medium":
      return <Badge className="bg-yellow-300">{impact}</Badge>;
    case "low":
      return <Badge className="bg-green-300">{impact}</Badge>;
    default:
      return <Badge variant="outline">{impact}</Badge>;
  }
}
