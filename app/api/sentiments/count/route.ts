import pool from "@/lib/db/db-config";
import { HttpResponseCode } from "@/enums/http-response-code";
import { DBPoolSentiments } from "@/helpers/db/db-pool-sentiments";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const dbPool = new DBPoolSentiments(pool);
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
