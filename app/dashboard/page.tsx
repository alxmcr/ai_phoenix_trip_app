import { CountDepartmentsActionablesBarChart } from "@/components/charts/bar-charts/count-departments-actionables-bar-chart";
import { AvgPriorityActionablesLineChart } from "@/components/charts/line-charts/avg-priority-actionables-line-chart";
import { CountEffortLevelRecommendationsPieChart } from "@/components/charts/pie-charts/count-effort-level-recommendations-pie-chart";
import { ActionablesSection } from "@/components/sections/dashboard-page/actionables-section";
import { ChartReviewsSection } from "@/components/sections/dashboard-page/chart-reviews-section";
import { MetricsSection } from "@/components/sections/dashboard-page/metrics-section";
import { RecentReviewsPaginationSection } from "@/components/sections/dashboard-page/recent-reviews-pagination-section";
import { TopRecommendationsSection } from "@/components/sections/dashboard-page/top-recommendations-section";
import { DashboardSkeleton } from "@/components/skeletons/dashboard-skeleton";
import prisma from "@/lib/prisma";
import { getActionables } from "@/utils/db/actionables/utils-actionables";
import { getMetrics } from "@/utils/db/reviews/get-reviews-metrics";
import { getTopRecommendations } from "@/utils/db/recommendations/utils-recomendations";
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
          <AvgPriorityActionablesLineChart />
          <CountEffortLevelRecommendationsPieChart />
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
