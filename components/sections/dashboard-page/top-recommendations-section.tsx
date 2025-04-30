import { EffortBadge } from "@/components/badges/effort-badge";
import { ImpactBadge } from "@/components/badges/impact-badge";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RecommendationData } from "@/types/db/recommendation";

type Props = {
  recommendations: RecommendationData[];
};

export function TopRecommendationsSection({ recommendations = [] }: Props) {
  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 container px-4 md:px-0">
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Top Recommendations</CardTitle>
          <CardDescription>
            Suggested improvements based on customer feedback
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendations.map((recommendation) => (
              <div
                key={recommendation.recommendation_id}
                className="rounded-lg border p-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{recommendation.title}</h3>
                  <div className="flex gap-2">
                    <span className="text-xs text-muted-foreground">
                      Impact:
                    </span>
                    <ImpactBadge impact={recommendation.impact} />
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {recommendation.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <Badge variant="outline">{recommendation.target_area}</Badge>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      Effort:
                    </span>
                    <EffortBadge effort={recommendation.effort_level} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
