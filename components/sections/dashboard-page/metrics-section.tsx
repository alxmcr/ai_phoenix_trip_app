import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Star, TrendingUp, Users } from "lucide-react";

export interface DashboardMetrics {
  total_reviews: number;
  total_reviews_last_30_days: number;
  percentage_increase_total_reviews_last_30_days: number;
  avg_rating: number;
  avg_rating_last_30_days: number;
  percentage_increase_avg_rating_last_30_days: number;
  avg_sentiment_score: number;
  avg_sentiment_score_last_30_days: number;
  percentage_increase_avg_sentiment_score_last_30_days: number;
  total_actionables: number;
  total_actionables_last_30_days: number;
}

interface Props {
  metrics: DashboardMetrics;
}

export function MetricsSection({ metrics }: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 container px-4 md:px-0">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
          <Users className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.total_reviews}</div>
          {metrics.percentage_increase_total_reviews_last_30_days > 0 ? (
            <p className="text-xs text-muted-foreground">
              {metrics.percentage_increase_total_reviews_last_30_days > 0
                ? "+"
                : "-"}
              {metrics.percentage_increase_total_reviews_last_30_days.toFixed(
                1
              )}
              % from last month
            </p>
          ) : null}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {metrics.avg_rating.toFixed(1)} / 5.0
          </div>
          {metrics.percentage_increase_avg_rating_last_30_days > 0 ? (
            <p className="text-xs text-muted-foreground">
              {metrics.percentage_increase_avg_rating_last_30_days > 0
                ? "+"
                : "-"}
              {metrics.percentage_increase_avg_rating_last_30_days.toFixed(1)}{" "}
              from last month
            </p>
          ) : null}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Average Sentiment Score
          </CardTitle>
          <TrendingUp className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {metrics.avg_sentiment_score.toFixed(1)}%
          </div>

          {metrics.percentage_increase_avg_sentiment_score_last_30_days > 0 ? (
            <p className="text-xs text-muted-foreground">
              {metrics.percentage_increase_avg_sentiment_score_last_30_days > 0
                ? "+"
                : "-"}
              {metrics.percentage_increase_avg_sentiment_score_last_30_days.toFixed(
                1
              )}
              % from last month
            </p>
          ) : null}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Actionable Insights
          </CardTitle>
          <BarChart3 className="h-4 w-4 text-purple-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.total_actionables}</div>
          {metrics.total_actionables_last_30_days > 0 ? (
            <p className="text-xs text-muted-foreground">
              {metrics.total_actionables_last_30_days > 0 ? "+" : "-"}
              {`${metrics.total_actionables_last_30_days.toFixed(0)}
                from last month`}
            </p>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}
