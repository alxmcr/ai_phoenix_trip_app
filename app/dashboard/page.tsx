import { CardTimelineReviews } from "@/components/cards/card-timeline-reviews";
import { ActionablesSection } from "@/components/sections/dashboard-page/actionables-section";
import { MetricsSection } from "@/components/sections/dashboard-page/metrics-section";
import { RecentReviewsPaginationSection } from "@/components/sections/dashboard-page/recent-reviews-pagination-section";
import { TopRecommendationsSection } from "@/components/sections/dashboard-page/top-recommendations-section";
import { DashboardSkeleton } from "@/components/skeletons/dashboard-skeleton";
import prisma from "@/lib/prisma";
import { getMetrics } from "@/utils/db/metrics/get-metrics";
import { getActionables } from "@/utils/db/utils-actionables";
import { getTopRecommendations } from "@/utils/db/utils-recomendations";
import { getRecentReviewsPaginated } from "@/utils/db/utils-reviews-paginated";
import { Suspense } from "react";

export default async function DashboardPage() {
  const page = 1;
  const pageSize = 6;
  const reviews = await getRecentReviewsPaginated(page, pageSize);
  const totalReviews = await prisma.review.count();
  const metrics = await getMetrics();
  const actionables = await getActionables();
  const recommendations = await getTopRecommendations();

  return (
    <main className="flex flex-col gap-4 min-h-screen items-center w-full">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Dashboard</h1>

      <Suspense fallback={<DashboardSkeleton />}></Suspense>
        <CardTimelineReviews />
      <Suspense fallback={<DashboardSkeleton />}>
        <MetricsSection metrics={metrics} />
      </Suspense>
      <Suspense fallback={<DashboardSkeleton />}>
        <section className="grid gap-4 md:grid-cols-2 container px-4 py-4 md:px-0">
          <ActionablesSection actionables={actionables} />
          <TopRecommendationsSection recommendations={recommendations} />
        </section>
      </Suspense>
      <Suspense fallback={<DashboardSkeleton />}>
        <RecentReviewsPaginationSection
          initialReviews={reviews}
          totalReviews={totalReviews}
          pageSize={pageSize}
        />
      </Suspense>
    </main>
  );
}
