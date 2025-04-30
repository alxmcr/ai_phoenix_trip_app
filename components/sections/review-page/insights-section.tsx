import { InsightsTabs } from "@/components/tabs/insight-tabs";
import { ActionableData } from "@/types/db/actionable";
import { RecommendationData } from "@/types/db/recommendation";

interface Props {
  actionables: ActionableData[];
  recommendations: RecommendationData[];
}

export function InsightsSection({
  actionables = [],
  recommendations = [],
}: Props) {
  return (
    <section className="mb-8 px-4 md:px-0 container">
      <h2 className="text-2xl font-bold tracking-tight mb-4">
        Insights & Actions
      </h2>
      <InsightsTabs
        actionables={actionables}
        recommendations={recommendations}
      />
    </section>
  );
}
