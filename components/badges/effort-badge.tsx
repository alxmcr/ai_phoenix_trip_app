import { Badge } from "../ui/badge";

type Props = {
  effort: string;
};

export function EffortBadge({ effort = "" }: Props) {
  switch (effort) {
    case "high":
      return <Badge variant="destructive">{effort.toUpperCase()}</Badge>;
    case "medium":
      return <Badge variant="default">{effort.toUpperCase()}</Badge>;
    case "low":
      return <Badge className="bg-green-300">{effort.toUpperCase()}</Badge>;
    default:
      return <Badge variant="outline">{effort.toUpperCase()}</Badge>;
  }
}
