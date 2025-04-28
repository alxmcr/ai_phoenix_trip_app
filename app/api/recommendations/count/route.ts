import pool from "@/lib/db/db-config";
import { HttpResponseCode } from "@/enums/api/http-response-code";
import { DBPoolRecommendations } from "@/helpers/db/db-pool-recommendations";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const dbPool = new DBPoolRecommendations(pool);
    const count = await dbPool.count();

    // Convert count to number
    const countNumber = Number(count);

    return NextResponse.json(
      { count: countNumber },
      { status: HttpResponseCode.OK }
    );
  } catch (error) {
    return NextResponse.json(
      { error },
      { status: HttpResponseCode.INTERNAL_SERVER_ERROR }
    );
  }
}
