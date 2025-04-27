import pool from "@/config/db/db-config";
import { DBPoolRecommendations } from "@/helpers/db/db-pool-recommendations";
import { RecommendationData } from "@/types/db/recommendation";
import { z } from "zod";

const schema = z.object({
  review_id: z.string(),
  data_driven: z.boolean(),
  target_area: z.string(),
  effort_level: z.string(),
  title: z.string(),
  description: z.string(),
  impact: z.string(),
});

export async function createRecommendation(
  recommendationData: Partial<RecommendationData>
) {
  const dbPoolRecommendations = new DBPoolRecommendations(pool);

  const validatedFields = schema.safeParse({
    review_id: recommendationData.review_id,
    data_driven: recommendationData.data_driven,
    target_area: recommendationData.target_area,
    effort_level: recommendationData.effort_level,
    title: recommendationData.title,
    description: recommendationData.description,
    impact: recommendationData.impact,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const recommendation = await dbPoolRecommendations.create(recommendationData);

  return recommendation;
}
