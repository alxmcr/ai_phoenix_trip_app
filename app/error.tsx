"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  // Function to get a user-friendly error message
  const getUserFriendlyMessage = (error: Error) => {
    if (error.message.includes("database")) {
      return "We are experiencing some technical difficulties. Our team has been notified and is working to resolve the issue.";
    }
    return "Something unexpected happened. Please try again later or contact support if the problem persists.";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-4 text-center">
      <AlertCircle className="w-16 h-16 text-destructive mb-4" />
      <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong</h2>
      <p className="text-muted-foreground mb-6 max-w-md">
        {getUserFriendlyMessage(error)}
      </p>
      <Link href="/">
        <Button variant="default">
          <Home className="w-4 h-4 mr-2" />
          Return to Home
        </Button>
      </Link>
    </div>
  );
}
