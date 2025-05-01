import prisma from "@/lib/prisma";
import { ReviewData } from "@/types/db/review";
import { formatReviewsForAnalysis } from "@/utils/prisma/helper-prisma";

export async function getRecentReviewsPaginated(
  page: number,
  pageSize: number
): Promise<ReviewData[]> {
  const reviews = await prisma.review.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    orderBy: {
      created_at: "desc",
    },
  });

  // Format the reviews
  const formattedReviews = formatReviewsForAnalysis(reviews);

  return formattedReviews;
}
