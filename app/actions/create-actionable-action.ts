import pool from "@/lib/db/db-config";
import { DBPoolActionables } from "@/helpers/db/db-pool-actionables";
import { ActionableData } from "@/types/db/actionable";
import { z } from "zod";

const schema = z.object({
  review_id: z.string(),
  priority: z.string(),
  department: z.string(),
  category: z.string(),
  source_aspect: z.string(),
  title: z.string(),
  description: z.string(),
});

export async function createActionable(actionableData: Partial<ActionableData>) {
  const dbPoolActionables = new DBPoolActionables(pool);

  const validatedFields = schema.safeParse({
    review_id: actionableData.review_id,
    priority: actionableData.priority,
    department: actionableData.department,
    category: actionableData.category,
    source_aspect: actionableData.source_aspect,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const actionable = await dbPoolActionables.create(actionableData);

  return actionable;
}
