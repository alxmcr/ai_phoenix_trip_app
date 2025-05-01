import { Badge } from "../ui/badge";

type Props = {
  effort: string;
};

export function EffortBadge({ effort = "" }: Props) {
  switch (effort.toLowerCase()) {
    case "high":
      return <Badge className="bg-rose-100 text-rose-800">{effort}</Badge>;
    case "medium":
      return <Badge className="bg-amber-100 text-black">{effort}</Badge>;
    case "low":
      return <Badge className="bg-emerald-100 text-emerald-800">{effort}</Badge>;
    default:
      return <Badge className="bg-gray-100 text-gray-800">{effort}</Badge>;
  }
}
