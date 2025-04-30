import { Badge } from "../ui/badge";

type Props = {
  priority: string;
};

export function PriorityBadge({ priority = "" }: Props) {
  switch (priority.toLowerCase()) {
    case "high":
      return <Badge className="bg-red-300">{priority}</Badge>;
    case "medium":
      return <Badge className="bg-yellow-300">{priority}</Badge>;
    case "low":
      return <Badge className="bg-green-300">{priority}</Badge>;
    default:
      return <Badge variant="outline">{priority}</Badge>;
  }
}
