import { loadingMessages } from "@/mocks/data/mock-loading-messages";
import { Loader2 } from "lucide-react";
import React from "react";

type Props = {
  isSubmitting: boolean;
};

export default function BoxFormReviewSubmitting({ isSubmitting }: Props) {
  const [loadingText, setLoadingText] = React.useState(
    "Analyzing your trip experience"
  );
  const [loadingStep, setLoadingStep] = React.useState(0);

  // Effect to cycle through loading messages
  React.useEffect(() => {
    if (isSubmitting) {
      const interval = setInterval(() => {
        setLoadingStep((prev) => (prev + 1) % loadingMessages.length);
        setLoadingText(loadingMessages[loadingStep]);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isSubmitting, loadingStep]);

  return (
    <div className="flex flex-col items-center text-center py-12">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-primary/30"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{loadingText}</h3>
      <p className="text-muted-foreground max-w-md">
        Our AI is working on your submission. This will just take a moment...
      </p>
    </div>
  );
}
