import { Prisma } from "@/prisma/app/generated/prisma";
import { SentimentData } from "@/types/db/sentiment";

export function buildSentimentWhereFilter(query: Partial<SentimentData>) {
  const where: Prisma.SentimentWhereInput = {};

  if (query.sentiment_id) {
    where.sentiment_id = query.sentiment_id;
  }

  if (query.review_id) {
    where.review_id = query.review_id;
  }

  if (query.score) {
    where.score = query.score;
  }

  if (query.emotion_tone) {
    where.emotion_tone = query.emotion_tone;
  }

  if (query.label) {
    where.label = query.label;
  }

  if (query.summary) {
    where.summary = query.summary;
  }

  if (query.created_at) {
    where.created_at = query.created_at;
  }

  if (query.updated_at) {
    where.updated_at = query.updated_at;
  }

  return where;
}
