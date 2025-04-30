import { ActionablesSection } from "@/components/sections/dashboard-page/actionables-section";
import { MetricsSection } from "@/components/sections/dashboard-page/metrics-section";
import { DashboardSkeleton } from "@/components/skeletons/dashboard-skeleton";
import { getMetrics } from "@/utils/db/metrics/get-metrics";
import { Suspense } from "react";

export default async function DashboardPage() {
  const metrics = await getMetrics();

  return (
    <main className="flex flex-col min-h-screen items-center w-full">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Dashboard</h1>

      <Suspense fallback={<DashboardSkeleton />}>
        <MetricsSection metrics={metrics} />
      </Suspense>
      <Suspense fallback={<DashboardSkeleton />}>
        <ActionablesSection actionables={[]} />
      </Suspense>
    </main>
  );
}
