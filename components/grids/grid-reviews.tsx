import { ReviewData } from "@/types/db/review";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TransportIcon } from "../icons/4x4/transport-icon";
import { ArrowRight, Calendar, MapPin, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  reviews: ReviewData[];
};

export function GridReviews({ reviews = [] }: Props) {
  if (reviews.length === 0) {
    return <div>No reviews found</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review) => (
        <Card key={review.review_id} className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="rounded-full bg-primary/10 p-1">
                  <TransportIcon mode={review.transport_mode} />
                </div>
                <CardTitle className="text-base">
                  {review.company_name}
                </CardTitle>
              </div>
              <div className="flex items-center space-x-1">
                <span className="font-bold">{review.rating}</span>
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <CardDescription>{review.email.split("@")[0]}</CardDescription>
              <Badge variant="outline">{review.trip_type}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="line-clamp-2 text-sm text-muted-foreground">
              {review.description}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="mr-1 h-3 w-3 text-red-500" />
                {review.origin} to {review.destination}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-1 h-3 w-3 text-blue-500" />
                {new Date(review.created_at).toLocaleDateString()}
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="ghost" size="sm" className="ml-auto" asChild>
              <Link href={`/reviews/${review.review_id}`}>
                See more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
