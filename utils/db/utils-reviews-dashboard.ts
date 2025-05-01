// Prisma: Summary of reviews
// Created at 'X': 100 reviews
// Created at 'Y': 50 reviews

import { PrismaClient } from "@/prisma/app/generated/prisma";
import { CountByDateMetric } from "@/types/dashboard/types-dashboard";

// Created at 'W': 10 reviews
export async function getReviewsByDate() {
  // Array of created_at dates
  const prisma = new PrismaClient();

  const createdAtDates = await prisma.review.findMany({
    select: {
      created_at: true,
    },
  });

  const reviewsByDate = createdAtDates.reduce((acc, review) => {
    // Extract the date from the created_at field
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

  // Convert the reviewsByDate object to an array of objects
  const reviewsByDateArray: CountByDateMetric[] = Object.entries(
    reviewsByDate
  ).map(([date, count]) => ({
    date,
    count,
  }));

  return reviewsByDateArray;
}
