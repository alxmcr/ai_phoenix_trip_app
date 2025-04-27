import pool from "@/lib/db/db-config";
import { HttpResponseCode } from "@/enums/http-response-code";
import { DBPoolActionables } from "@/helpers/db/db-pool-actionables";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const dbPool = new DBPoolActionables(pool);
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
