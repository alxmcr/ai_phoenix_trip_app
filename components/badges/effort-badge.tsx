import { Badge } from "../ui/badge";

type Props = {
  effort: string;
};

export function EffortBadge({ effort = "" }: Props) {
  switch (effort.toLowerCase()) {
    case "high":
      return <Badge className="bg-red-300">{effort}</Badge>;
    case "medium":
      return <Badge className="bg-yellow-300">{effort}</Badge>;
    case "low":
      return <Badge className="bg-green-300">{effort}</Badge>;
    default:
      return <Badge variant="outline">{effort}</Badge>;
  }
}
