// Prisma: Count actionables by department
// Departments: Sales, Marketing, Engineering, Customer Success, etc.
// Example:
/* [
  { department: 'Sales', count: 10 },
  { department: 'Marketing', count: 20 },
  { department: 'Engineering', count: 30 },
  { department: 'Customer Success', count: 40 }
]
*/

import prisma from "@/lib/prisma";
import { DepartmentCount } from "@/types/dashboard/types-dashboard";

export async function getCountActionablesByDepartment() {
  const actionables = await prisma.actionable.findMany({
    where: {
      created_at: {
        gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      },
    },
    select: {
      department: true,
    },
  });

  const departmentCounts = actionables.reduce((acc, actionable) => {
    const department = actionable.department;
    if (department) {
      acc[department] = (acc[department] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  // Convert to array format
  const result: DepartmentCount[] = Object.entries(departmentCounts).map(
    ([department, count]) => ({
      department,
      count,
    })
  );

  return result;
}
