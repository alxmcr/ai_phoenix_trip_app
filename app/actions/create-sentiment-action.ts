import pool from "@/lib/db/db-config";
import { DBPoolSentiments } from "@/helpers/db/db-pool-sentiments";
import { SentimentData } from "@/types/db/sentiment";
import { z } from "zod";

const schema = z.object({
  review_id: z.string(),
  score: z.number(),
  emotion_tone: z.string(),
  label: z.string(),
  summary: z.string(),
});

export async function createSentiment(sentimentData: Partial<SentimentData>) {
  const dbPoolSentiments = new DBPoolSentiments(pool);

  const validatedFields = schema.safeParse({
    review_id: sentimentData.review_id,
    score: sentimentData.score,
    emotion_tone: sentimentData.emotion_tone,
    label: sentimentData.label,
    summary: sentimentData.summary,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const sentiment = await dbPoolSentiments.create(sentimentData);

  return sentiment;
}
