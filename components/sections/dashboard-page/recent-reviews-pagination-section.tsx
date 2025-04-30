"use client";

import { GridReviews } from "@/components/grids/grid-reviews";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReviewData } from "@/types/db/review";
import { Users } from "lucide-react";

interface Props {
  reviews: ReviewData[];
}

export function RecentReviewsPaginationSection({ reviews = [] }: Props) {
  return (
    <section className="container px-4 md:px-0">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Reviews</CardTitle>
          <Users className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <GridReviews reviews={reviews} />
        </CardContent>
      </Card>
    </section>
  );
}
