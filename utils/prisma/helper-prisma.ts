import { ActionableData } from "@/types/db/actionable";
import { RecommendationData } from "@/types/db/recommendation";
import { ReviewData } from "@/types/db/review";
import { SentimentData } from "@/types/db/sentiment";
import {
  PrismaActionable,
  PrismaRecommendation,
  PrismaReview,
  PrismaSentiment,
} from "@/types/prisma/prisma-types";

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

export function formatActionablesForAnalysis(
  actionables: PrismaActionable[]
): ActionableData[] {
  return actionables.map((actionable) => ({
    actionable_id: actionable.actionable_id,
    review_id: actionable.review_id,
    department: actionable.department ?? "",
    category: actionable.category ?? "",
    source_aspect: actionable.source_aspect ?? "",
    title: actionable.title ?? "",
    description: actionable.description ?? "",
    priority: actionable.priority ?? "",
    created_at:
      actionable.created_at?.toISOString() ?? new Date().toISOString(),
    updated_at:
      actionable.updated_at?.toISOString() ?? new Date().toISOString(),
  }));
}

export function formatRecommendationsForAnalysis(
  recommendations: PrismaRecommendation[]
): RecommendationData[] {
  return recommendations.map((recommendation) => ({
    recommendation_id: recommendation.recommendation_id,
    review_id: recommendation.review_id,
    data_driven: recommendation.data_driven ?? false,
    target_area: recommendation.target_area ?? "",
    effort_level: recommendation.effort_level ?? "",
    title: recommendation.title ?? "",
    description: recommendation.description ?? "",
    impact: recommendation.impact ?? "",
    created_at:
      recommendation.created_at?.toISOString() ?? new Date().toISOString(),
    updated_at:
      recommendation.updated_at?.toISOString() ?? new Date().toISOString(),
  }));
}
