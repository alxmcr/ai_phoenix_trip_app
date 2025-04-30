import { ActionablesSection } from "@/components/sections/dashboard-page/actionables-section";
import { MetricsSection } from "@/components/sections/dashboard-page/metrics-section";
import { TopRecommendationsSection } from "@/components/sections/dashboard-page/top-recommendations-section";
import { DashboardSkeleton } from "@/components/skeletons/dashboard-skeleton";
import { getMetrics } from "@/utils/db/metrics/get-metrics";
import { getActionables } from "@/utils/db/utils-actionables";
import { Suspense } from "react";

export default async function DashboardPage() {
  const metrics = await getMetrics();
  const actionables = await getActionables();

  return (
    <main className="flex flex-col gap-4 min-h-screen items-center w-full">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Dashboard</h1>

      <Suspense fallback={<DashboardSkeleton />}>
        <MetricsSection metrics={metrics} />
      </Suspense>
      <Suspense fallback={<DashboardSkeleton />}>
        <ActionablesSection actionables={actionables} />
        <TopRecommendationsSection recommendations={recommendations} />
      </Suspense>
    </main>
  );
}
