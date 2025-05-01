import { PrismaClient } from "@/prisma/app/generated/prisma";
import { CountByDateMetric } from "@/types/dashboard/types-dashboard";

// Prisma: Summary of reviews
// Created at 'X': 100 reviews
// Created at 'Y': 50 reviews
// Created at 'W': 10 reviews
export async function getReviewsByDate() {
  const prisma = new PrismaClient();

  const createdAtDates = await prisma.review.findMany({
    select: {
      created_at: true,
    },
    orderBy: {
      created_at: 'asc'
    },
  });

  console.log('Fetched reviews:', createdAtDates);

  const reviewsByDate = createdAtDates.reduce((acc, review) => {
    const date = review.created_at?.toISOString().split("T")[0];
    if (!date) {
      return acc;
    }

    if (!acc[date]) {
      acc[date] = 0;
    }
    acc[date]++;
    return acc;
  }, {} as Record<string, number>);

  console.log('Reviews by date:', reviewsByDate);

  const reviewsByDateArray: CountByDateMetric[] = Object.entries(
    reviewsByDate
  ).map(([date, count]) => ({
    date,
    count,
  }));

  return reviewsByDateArray;
}
