import { Badge } from "../ui/badge";

type Props = {
  impact: string;
};

export function ImpactBadge({ impact = "" }: Props) {
  switch (impact) {
    case "high":
      return <Badge className="bg-green-600">{impact}</Badge>;
    case "medium":
      return <Badge variant="default">{impact}</Badge>;
    case "low":
      return <Badge variant="secondary">{impact}</Badge>;
    default:
      return <Badge variant="outline">{impact}</Badge>;
  }
}
