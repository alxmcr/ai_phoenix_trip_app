import prisma from "@/lib/prisma";
import { CountEffortRecommendations } from "@/types/dashboard/types-dashboard";

// Prisma: Count recommendations by effort
// Effort: Low, Medium, High
// Example:
/* [
  { effort: 'Low', count: 10 },
  { effort: 'Medium', count: 20 },
  { effort: 'High', count: 30 },
]

*/

export async function getCountEffortRecommendations() {
  const recommendations = await prisma.recommendation.findMany({
    select: {
      effort_level: true,
    },
  });

  const countEffortRecommendations = recommendations.reduce<
    Record<string, number>
  >((acc, recommendation) => {
    if (!recommendation.effort_level) return acc;

    const effort = recommendation.effort_level.toLowerCase();
    if (acc[effort]) {
      acc[effort]++;
    } else {
      acc[effort] = 1;
    }
    return acc;
  }, {});

  // Convert to array format
  const result: CountEffortRecommendations[] = Object.entries(
    countEffortRecommendations
  ).map(([effort, count]) => ({
    effort,
    count,
  }));

  return result;
}
