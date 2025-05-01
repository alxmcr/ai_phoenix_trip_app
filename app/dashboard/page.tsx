import { CountDepartmentsActionablesBarChart } from "@/components/charts/bar-charts/count-departments-actionables-bar-chart";
import { CountPriorityActionablesLineChartMultiple } from "@/components/charts/line-charts/count-priority-actionables-line-chart-multiple";
import { CountEffortLevelRecommendationsPieChart } from "@/components/charts/pie-charts/count-effort-level-recommendations-pie-chart";
import { ActionablesSection } from "@/components/sections/dashboard-page/actionables-section";
import { ChartReviewsSection } from "@/components/sections/dashboard-page/chart-reviews-section";
import { MetricsSection } from "@/components/sections/dashboard-page/metrics-section";
import { RecentReviewsPaginationSection } from "@/components/sections/dashboard-page/recent-reviews-pagination-section";
import { TopRecommendationsSection } from "@/components/sections/dashboard-page/top-recommendations-section";
import { DashboardSkeleton } from "@/components/skeletons/dashboard-skeleton";
import prisma from "@/lib/prisma";
import { getCountPriorityActionablesByCreatedAt } from "@/utils/db/actionables/count-actionables";
import { getActionables } from "@/utils/db/actionables/utils-actionables";
import { getCountEffortRecommendations } from "@/utils/db/recommendations/count-effort-recommendations";
import { getTopRecommendations } from "@/utils/db/recommendations/utils-recomendations";
import { getMetrics } from "@/utils/db/reviews/get-reviews-metrics";
import { getRecentReviewsPaginated } from "@/utils/db/reviews/utils-reviews-paginated";
import { Suspense } from "react";

export default async function DashboardPage() {
  const page = 1;
  const pageSize = 6;
  const reviews = await getRecentReviewsPaginated(page, pageSize);
  const totalReviews = await prisma.review.count();
  const metrics = await getMetrics();
  const actionables = await getActionables();
  const recommendations = await getTopRecommendations();
  const priorityActionablesByDate = await getCountPriorityActionablesByCreatedAt();
  const countEffortRecommendations = await getCountEffortRecommendations();

  return (
    <main className="flex flex-col gap-4 min-h-screen items-center w-full">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Dashboard</h1>

      <Suspense fallback={<DashboardSkeleton />}>
        <MetricsSection metrics={metrics} />
      </Suspense>
      <Suspense fallback={<DashboardSkeleton />}>
        <ChartReviewsSection />
      </Suspense>
      <Suspense fallback={<DashboardSkeleton />}>
        <RecentReviewsPaginationSection
          initialReviews={reviews}
          totalReviews={totalReviews}
          pageSize={pageSize}
        />
      </Suspense>

      <Suspense fallback={<DashboardSkeleton />}>
        <section className="grid gap-4 lg:grid-cols-3 container px-4 py-4 md:px-0">
          <CountPriorityActionablesLineChartMultiple data={priorityActionablesByDate} />
          <CountEffortLevelRecommendationsPieChart data={countEffortRecommendations} />
          <CountDepartmentsActionablesBarChart />
        </section>
      </Suspense>
      <Suspense fallback={<DashboardSkeleton />}>
        <section className="grid gap-4 md:grid-cols-2 container px-4 py-4 md:px-0">
          <ActionablesSection actionables={actionables} />
          <TopRecommendationsSection recommendations={recommendations} />
        </section>
      </Suspense>
    </main>
  );
}
