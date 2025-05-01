import { Badge } from "../ui/badge";

type Props = {
  priority: string;
};

export function PriorityBadge({ priority = "" }: Props) {
  switch (priority.toLowerCase()) {
    case "high":
      return <Badge className="bg-rose-100 text-rose-800">{priority}</Badge>;
    case "medium":
      return <Badge className="bg-amber-100 text-black">{priority}</Badge>;
    case "low":
      return <Badge className="bg-emerald-100 text-emerald-800">{priority}</Badge>;
    default:
      return <Badge className="bg-gray-100 text-gray-800">{priority}</Badge>;
  }
}
