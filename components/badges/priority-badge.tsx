import { Badge } from "../ui/badge";

type Props = {
  priority: string;
};

export function PriorityBadge({ priority = "" }: Props) {
  switch (priority) {
    case "high":
      return <Badge variant="destructive">{priority.toLocaleUpperCase()}</Badge>;
    case "medium":
      return <Badge variant="default">{priority.toLocaleUpperCase()}</Badge>;
    case "low":
      return <Badge variant="secondary">{priority.toLocaleUpperCase()}</Badge>;
    default:
      return <Badge variant="outline">{priority.toLocaleUpperCase()}</Badge>;
  }
}
