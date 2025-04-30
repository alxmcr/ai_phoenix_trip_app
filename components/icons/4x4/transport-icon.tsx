import { Bus, Leaf, Plane, Ship, Train, Truck } from "lucide-react";

type Props = {
  mode: string;
};

export function TransportIcon({ mode = "" }: Props) {
  switch (mode.toLowerCase()) {
    case "airplane":
      return <Plane className="h-4 w-4 text-blue-500" />;
    case "train":
      return <Train className="h-4 w-4 text-green-500" />;
    case "bus":
      return <Bus className="h-4 w-4 text-orange-500" />;
    case "ship":
      return <Ship className="h-4 w-4 text-purple-500" />;
    default:
      return <Leaf className="h-4 w-4 text-yellow-500" />;
  }
}
