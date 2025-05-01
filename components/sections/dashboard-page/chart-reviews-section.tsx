import { CountReviewsTimeline } from "@/components/charts/timelines/count-reviews-timeline";
import { getReviewsByDate } from "@/utils/db/utils-reviews-dashboard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export async function ChartReviewsSection() {
  const data = await getReviewsByDate();

  return (
    <section className="container px-4 md:px-0">
      <CountReviewsTimeline data={data} />
    </section>
  );
}
