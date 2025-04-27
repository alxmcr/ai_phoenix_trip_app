import { Prisma } from "@/prisma/app/generated/prisma";
import { RecommendationData } from "@/types/db/recommendation";

export const buildRecommendationWhereFilter = (
  query: Partial<RecommendationData>
) => {
  const where: Prisma.RecommendationWhereInput = {};

  if (query.recommendation_id) {
    where.recommendation_id = query.recommendation_id;
  }

  if (query.review_id) {
    where.review_id = query.review_id;
  }

  if (query.data_driven) {
    where.data_driven = query.data_driven;
  }

  if (query.target_area) {
    where.target_area = query.target_area;
  }

  if (query.effort_level) {
    where.effort_level = query.effort_level;
  }

  if (query.title) {
    where.title = query.title;
  }

  if (query.description) {
    where.description = query.description;
  }

  if (query.impact) {
    where.impact = query.impact;
  }

  if (query.created_at) {
    where.created_at = query.created_at;
  }

  if (query.updated_at) {
    where.updated_at = query.updated_at;
  }

  return where;
};
