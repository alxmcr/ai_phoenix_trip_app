"use server";

import prisma from "@/lib/prisma";
import { formatRecommendationsForAnalysis } from "../prisma/helper-prisma";
import { RecommendationData } from "@/types/db/recommendation";

export async function getTopRecommendations(): Promise<RecommendationData[]> {
  const recommendations = await prisma.recommendation.findMany({
    orderBy: {
      impact: "desc",
    },
    take: 5,
    skip: 0,
  });

  // Format the recommendations
  const formattedRecommendations =
    formatRecommendationsForAnalysis(recommendations);

  return formattedRecommendations;
}
