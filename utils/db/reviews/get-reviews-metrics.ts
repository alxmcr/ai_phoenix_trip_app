"use server";

import { DashboardMetrics } from "@/components/sections/dashboard-page/metrics-section";
import prisma from "@/lib/prisma";

export async function getMetrics(): Promise<DashboardMetrics> {
  const total_reviews = await prisma.review.count();
  const total_reviews_last_30_days = await prisma.review.count({
    where: {
      created_at: {
        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      },
    },
  });
  const percentage_increase_total_reviews_last_30_days =
    ((total_reviews - total_reviews_last_30_days) /
      total_reviews_last_30_days) *
    100;

  const avg_rating_review = await prisma.review.aggregate({
    _avg: {
      rating: true,
    },
  });

  const avg_rating_review_last_30_days = await prisma.review.aggregate({
    _avg: {
      rating: true,
    },
    where: {
      created_at: {
        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      },
    },
  });

  const percentage_increase_avg_rating_review_last_30_days =
    ((total_reviews - total_reviews_last_30_days) /
      total_reviews_last_30_days) *
    100;

  const avg_sentiment_score = await prisma.sentiment.aggregate({
    _avg: {
      score: true,
    },
  });

  const avg_sentiment_score_last_30_days = await prisma.sentiment.aggregate({
    _avg: {
      score: true,
    },
    where: {
      created_at: {
        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      },
    },
  });

  const percentage_increase_avg_sentiment_score_last_30_days =
    ((Number(avg_sentiment_score._avg.score) -
      Number(avg_sentiment_score_last_30_days._avg.score)) /
      Number(avg_sentiment_score_last_30_days._avg.score)) *
    100;

  const total_actionables = await prisma.actionable.count();
  const total_actionables_last_30_days = await prisma.actionable.count({
    where: {
      created_at: {
        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      },
    },
  });

  const metrics: DashboardMetrics = {
    total_reviews,
    total_reviews_last_30_days,
    percentage_increase_total_reviews_last_30_days,
    avg_rating_review: avg_rating_review._avg.rating ?? 0,
    avg_rating_review_last_30_days: avg_rating_review_last_30_days._avg.rating ?? 0,
    percentage_increase_avg_rating_review_last_30_days,
    avg_sentiment_score: Number(avg_sentiment_score._avg.score),
    avg_sentiment_score_last_30_days: Number(
      avg_sentiment_score_last_30_days._avg.score
    ),
    percentage_increase_avg_sentiment_score_last_30_days,
    total_actionables,
    total_actionables_last_30_days,
  };

  return metrics;
}
