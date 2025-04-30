import { Hero } from "@/components/sections/review-page/hero-section";
import { InsightsSection } from "@/components/sections/review-page/insights-section";
import { SentimentSection } from "@/components/sections/review-page/sentiment-section";
import HeroSkeleton from "@/components/skeletons/hero-skeleton";
import InsightsSkeleton from "@/components/skeletons/insights-skeleton";
import { SentimentSkeleton } from "@/components/skeletons/sentiment-skeleton";
import { PrismaClient } from "@/prisma/app/generated/prisma";
import { PrismaReviewWithRelations } from "@/types/prisma/prisma-types";
import {
  formatActionablesForAnalysis,
  formatRecommendationsForAnalysis,
  formatReviewForAnalysis,
  formatSentimentForAnalysis,
} from "@/utils/prisma/helper-prisma";
import { Suspense } from "react";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Prisma client
  const prisma = new PrismaClient();

  // Find review by id
  const reviewAnalysis: PrismaReviewWithRelations | null =
    await prisma.review.findUnique({
      where: { review_id: id },
      include: {
        sentiment: true,
        actionables: true,
        recommendations: true,
      },
    });

  // Format review for analysis
  const formattedReview = formatReviewForAnalysis(reviewAnalysis);
  const formattedSentiment = formatSentimentForAnalysis(
    reviewAnalysis?.sentiment ?? null
  );
  const formattedActionables = formatActionablesForAnalysis(
    reviewAnalysis?.actionables ?? []
  );
  const formattedRecommendations = formatRecommendationsForAnalysis(
    reviewAnalysis?.recommendations ?? []
  );

  if (!id) {
    return <div>Review not found</div>;
  }

  if (!reviewAnalysis) {
    return <div>Review not found</div>;
  }

  return (
    <main className="flex flex-col min-h-screen items-center">
      <Suspense fallback={<HeroSkeleton />}>
        <Hero review={formattedReview} />
      </Suspense>

      <Suspense fallback={<SentimentSkeleton />}>
        <SentimentSection sentiment={formattedSentiment} />
      </Suspense>

      <Suspense fallback={<InsightsSkeleton />}>
        <InsightsSection
          actionables={formattedActionables}
          recommendations={formattedRecommendations}
        />
      </Suspense>
    </main>
  );
}
