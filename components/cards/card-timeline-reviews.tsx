import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { TimelineReviews } from "../charts/timelines/timeline-reviews";

export function CardTimelineReviews() {
  return (
    <Card>
      <CardTitle>Timeline Reviews</CardTitle>
      <CardDescription>
        This is a timeline of reviews for the last 30 days.
      </CardDescription>
      <CardContent>
        <TimelineReviews />
      </CardContent>
    </Card>
  );
}
