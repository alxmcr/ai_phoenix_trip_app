import { Prisma } from "@/prisma/app/generated/prisma";
import { ReviewData } from "@/types/db/review";

export function buildReviewWhereFilter(query: Partial<ReviewData>) {
  const where: Prisma.ReviewWhereInput = {};

  if (query.review_id) {
    where.review_id = query.review_id;
  }

  if (query.rating) {
    where.rating = query.rating;
  }

  if (query.start_date) {
    where.start_date = query.start_date;
  }

  if (query.end_date) {
    where.end_date = query.end_date;
  }

  if (query.origin) {
    where.origin = query.origin;
  }

  if (query.destination) {
    where.destination = query.destination;
  }

  if (query.company_name) {
    where.company_name = query.company_name;
  }

  if (query.email) {
    where.email = query.email;
  }

  if (query.age_group) {
    where.age_group = query.age_group;
  }

  if (query.trip_type) {
    where.trip_type = query.trip_type;
  }

  if (query.description) {
    where.description = query.description;
  }

  if (query.transport_mode) {
    where.transport_mode = query.transport_mode;
  }

  if (query.created_at) {
    where.created_at = query.created_at;
  }

  if (query.updated_at) {
    where.updated_at = query.updated_at;
  }

  return where;
}
