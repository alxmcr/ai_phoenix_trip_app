import { Badge } from "../ui/badge";

type Props = {
  impact: string;
};

export function ImpactBadge({ impact = "" }: Props) {
  switch (impact) {
    case "high":
      return <Badge className="bg-green-300">{impact.toUpperCase()}</Badge>;
    case "medium":
      return <Badge variant="default">{impact.toUpperCase()}</Badge>;
    case "low":
      return <Badge variant="secondary">{impact.toUpperCase()}</Badge>;
    default:
      return <Badge variant="outline">{impact.toUpperCase()}</Badge>;
  }
}
