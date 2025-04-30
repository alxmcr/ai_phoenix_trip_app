import { Badge } from "../ui/badge";

type Props = {
  effort: string;
};

export function EffortBadge({ effort = "" }: Props) {
  switch (effort) {
    case "high":
      return <Badge variant="destructive">{effort}</Badge>;
    case "medium":
      return <Badge variant="default">{effort}</Badge>;
    case "low":
      return <Badge className="bg-green-600">{effort}</Badge>;
    default:
      return <Badge variant="outline">{effort}</Badge>;
  }
}
