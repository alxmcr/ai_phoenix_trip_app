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
  if (recommendations.length === 0) {
    return (
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Top Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No recommendations found</p>
        </CardContent>
      </Card>
    );
  }

  return (
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
                  <span className="text-xs text-muted-foreground">Impact:</span>
                  <ImpactBadge impact={recommendation.impact.toLowerCase()} />
                </div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {recommendation.description}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <Badge variant="outline">{recommendation.target_area.toLowerCase()}</Badge>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Effort:</span>
                  <EffortBadge effort={recommendation.effort_level.toLowerCase()} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
