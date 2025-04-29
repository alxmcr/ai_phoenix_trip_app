import { ReviewData } from "@/types/db/review";
import { SentimentData } from "@/types/db/sentiment";
import { PrismaReview, PrismaSentiment } from "@/types/prisma/prisma-types";

export function formatReviewForAnalysis(
  review: PrismaReview | null
): ReviewData {
  if (!review) {
    throw new Error("Review is null or undefined");
  }

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

export function formatSentimentForAnalysis(
  sentiment: PrismaSentiment | null
): SentimentData {
  if (!sentiment) {
    throw new Error("Sentiment is null or undefined");
  }

  return {
    sentiment_id: sentiment.sentiment_id,
    review_id: sentiment.review_id,
    score: sentiment.score?.toNumber() ?? 0,
    emotion_tone: sentiment.emotion_tone ?? "",
    label: sentiment.label ?? "",
    summary: sentiment.summary ?? "",
    created_at: sentiment.created_at?.toISOString() ?? new Date().toISOString(),
    updated_at: sentiment.updated_at?.toISOString() ?? new Date().toISOString(),
  };
}
