import pool from "@/lib/db/db-config";
import { HttpResponseCode } from "@/enums/http-response-code";
import { DBPoolReviews } from "@/helpers/db/db-pool-reviews";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const dbPool = new DBPoolReviews(pool);
    const count = await dbPool.count();

    // Convert count to number
    const countNumber = Number(count);

    return NextResponse.json(
      { count: countNumber },
      { status: HttpResponseCode.OK }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get reviews count" },
      { status: HttpResponseCode.INTERNAL_SERVER_ERROR }
    );
  }
}
