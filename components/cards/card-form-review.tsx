import React from "react";
import BoxFormReviewSubmitted from "../boxes/box-form-review-submitted";
import BoxFormReviewSubmitting from "../boxes/box-form-review-submitting";
import { Card, CardContent } from "../ui/card";

export default function CardFormReview() {
  const [review_id, setReviewId] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  return (
    <Card>
      <CardContent className="pt-6">
        {isSubmitting && (
          <BoxFormReviewSubmitting isSubmitting={isSubmitting} />
        )}
        {isSubmitted && <BoxFormReviewSubmitted review_id={review_id} />}
      </CardContent>
    </Card>
  );
}
