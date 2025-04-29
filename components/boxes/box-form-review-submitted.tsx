import { Loader2 } from "lucide-react";

type Props = {
  review_id: string | null;
};

export default function BoxFormReviewSubmitted({ review_id }: Props) {
  // Check if the review_id is valid
  if (!review_id) {
    return <div>Invalid review ID</div>;
  }

  return (
    <div className="flex flex-col items-center text-center py-8">
      <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mb-6">
        <svg
          className="h-10 w-10 text-green-600 dark:text-green-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
      <p className="text-muted-foreground mb-6 max-w-md">
        {`We've received your trip experience. Your review ID is `}
        <span className="font-semibold">{review_id}</span>.
      </p>
      <div className="w-full max-w-md p-6 bg-muted rounded-lg mb-6">
        <p className="text-center mb-4">
          Redirecting you to your personalized insights page...
        </p>
        <div className="flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </div>
    </div>
  );
}
