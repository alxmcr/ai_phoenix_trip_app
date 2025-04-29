import { Hero } from "@/components/sections/review-page/hero-section";
import HeroSkeleton from "@/components/skeletons/hero-skeleton";
import { PrismaClient } from "@/prisma/app/generated/prisma";
import { PrismaReviewWithRelations } from "@/types/prisma/prisma-types";
import { formatReviewForAnalysis } from "@/utils/prisma/helper-prisma";
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

      <div className="flex flex-col gap-4">
        <h2>Sentiment</h2>
        <p>{reviewAnalysis.sentiment?.summary}</p>
      </div>

      <div className="flex flex-col gap-4">
        <h2>Actionables</h2>
        {reviewAnalysis.actionables?.map((actionable) => (
          <p key={actionable.actionable_id}>{actionable.title}</p>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <h2>Recommendations</h2>
        {reviewAnalysis.recommendations?.map((recommendation) => (
          <p key={recommendation.recommendation_id}>{recommendation.title}</p>
        ))}
      </div>
    </main>
  );
}
