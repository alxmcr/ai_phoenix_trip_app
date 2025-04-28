import { ReviewData } from "@/types/db/review";
import { PrismaReview } from "@/types/prisma/prisma-types";

export function formatReviewForAnalysis(review: PrismaReview): ReviewData {
  return {
    review_id: review.review_id,
    rating: review.rating ?? 0,
    start_date: review.start_date?.toISOString() ?? new Date().toISOString(),
    end_date: review.end_date?.toISOString() ?? new Date().toISOString(),
    destination: review.destination ?? "",
    company_name: review.company_name ?? "",
    origin: review.origin ?? "",
    trip_type: review.trip_type ?? "",
    description: review.description ?? "",
    transport_mode: review.transport_mode ?? "",
    email: review.email ?? "",
    age_group: review.age_group ?? "",
    created_at: review.created_at?.toISOString() ?? new Date().toISOString(),
    updated_at: review.updated_at?.toISOString() ?? new Date().toISOString(),
  };
}
