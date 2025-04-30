"use server";

import prisma from "@/lib/prisma";
import { formatActionablesForAnalysis } from "../prisma/helper-prisma";

// Pagination actionables
export async function getActionables() {
  const actionables = await prisma.actionable.findMany({
    take: 5,
    skip: 0,
    orderBy: {
      created_at: "desc",
    },
  });

  // Format the actionables
  const formattedActionables = formatActionablesForAnalysis(actionables);

  return formattedActionables;
}
