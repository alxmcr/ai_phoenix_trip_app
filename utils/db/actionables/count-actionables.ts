import prisma from "@/lib/prisma";
import {
  DatePriorityCount,
  PriorityCount,
} from "@/types/dashboard/types-dashboard";

// Prisma: Count actionables by created_at date, but grouped by priority
// Priority: High, Medium, Low
// Example:
/* [
  { date: '2024-01-01', high: 10, medium: 20, low: 30 },
  { date: '2024-01-02', high: 15, medium: 25, low: 35 },
  { date: '2024-01-03', high: 20, medium: 30, low: 40 }
]
*/

export async function getCountPriorityActionablesByCreatedAt() {
  const actionables = await prisma.actionable.findMany({
    where: {
      created_at: {
        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      },
    },
    select: {
      created_at: true,
      priority: true,
    },
  });

  // First group by date
  const groupedByDate = actionables.reduce<{ [date: string]: PriorityCount }>(
    (acc, actionable) => {
      if (!actionable.created_at || !actionable.priority) {
        return acc;
      }

      const date = actionable.created_at.toISOString().split("T")[0];
      if (!acc[date]) {
        acc[date] = { high: 0, medium: 0, low: 0 };
      }

      const priority = actionable.priority.toLowerCase() as keyof PriorityCount;
      if (priority in acc[date]) {
        acc[date][priority]++;
      }

      return acc;
    },
    {}
  );

  // Convert to array format
  const result: DatePriorityCount[] = Object.entries(groupedByDate).map(
    ([date, counts]) => ({
      date,
      ...counts,
    })
  );

  return result;
}
