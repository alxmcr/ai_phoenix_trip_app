import pool from "@/config/db/db-config";
import { DBPoolReviews } from "@/helpers/db/db-pool-reviews";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const dbPoolReviews = new DBPoolReviews(pool);

  const review = await dbPoolReviews.findUnique(id);

  if (!id) {
    return <div>Review not found</div>;
  }

  if (!review) {
    return <div>Review not found</div>;
  }

  return <div>{JSON.stringify(review, null, 2)}</div>;
}
