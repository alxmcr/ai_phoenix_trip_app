import pool from "@/lib/db/db-config";
import { HttpResponseCode } from "@/enums/http-response-code";
import { DBPoolReviews } from "@/helpers/db/db-pool-reviews";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const dbPool = new DBPoolReviews(pool);
    const averageRating = await dbPool.getAverageRating();

    return NextResponse.json(
      {
        average_rating: averageRating,
        formatted_average: averageRating.toFixed(2)
      },
      { status: HttpResponseCode.OK }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get average rating" },
      { status: HttpResponseCode.INTERNAL_SERVER_ERROR }
    );
  }
}