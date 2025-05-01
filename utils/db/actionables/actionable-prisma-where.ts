import { Prisma } from "@/prisma/app/generated/prisma";
import { ActionableData } from "@/types/db/actionable";

export function buildActionableWhereFilter(query: Partial<ActionableData>) {
  const where: Prisma.ActionableWhereInput = {};

  if (query.actionable_id) {
    where.actionable_id = query.actionable_id;
  }

  if (query.title) {
    where.title = { contains: query.title, mode: "insensitive" };
  }

  if (query.description) {
    where.description = { contains: query.description, mode: "insensitive" };
  }

  if (query.source_aspect) {
    where.source_aspect = {
      contains: query.source_aspect,
      mode: "insensitive",
    };
  }

  if (query.department) {
    where.department = { contains: query.department, mode: "insensitive" };
  }

  if (query.category) {
    where.category = { contains: query.category, mode: "insensitive" };
  }

  if (query.priority) {
    where.priority = { contains: query.priority, mode: "insensitive" };
  }

  if (query.review_id) {
    where.review_id = query.review_id;
  }

  return where;
}
