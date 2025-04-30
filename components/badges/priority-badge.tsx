import { Badge } from "../ui/badge";

type Props = {
  priority: string;
};

export function PriorityBadge({ priority = "" }: Props) {
  switch (priority) {
    case "high":
      return <Badge variant="destructive">{priority}</Badge>;
    case "medium":
      return <Badge variant="default">{priority}</Badge>;
    case "low":
      return <Badge variant="secondary">{priority}</Badge>;
    default:
      return <Badge variant="outline">{priority}</Badge>;
  }
}
