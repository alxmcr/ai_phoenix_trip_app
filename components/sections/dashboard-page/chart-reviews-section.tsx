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
      <Card>
        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
          <div className="grid flex-1 gap-1 text-center sm:text-left">
            <CardTitle>Reviews Timeline</CardTitle>
            <CardDescription>
              Showing total reviews over time
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <CountReviewsTimeline data={data} />
        </CardContent>
      </Card>
    </section>
  );
}
