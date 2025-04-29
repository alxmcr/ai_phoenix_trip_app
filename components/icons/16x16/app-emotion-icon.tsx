import { Frown, Meh, Smile } from "lucide-react";

type Props = {
  labelEmotion: string;
};

export function AppEmotionIcon({ labelEmotion = "" }: Props) {
  switch (labelEmotion.toLowerCase()) {
    case "positive":
      return <Smile className="h-16 w-16 text-emerald-500" />;
    case "neutral":
      return <Meh className="h-16 w-16 text-blue-500" />;
    case "negative":
      return <Frown className="h-16 w-16 text-rose-500" />;
    default:
      return <div>No sentiment data available</div>;
  }
}
