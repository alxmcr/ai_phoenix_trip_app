import pool from "@/config/db/db-config";
import { HttpResponseCode } from "@/enums/http-response-code";
import { DBPoolHealth } from "@/helpers/db-health/db-pool-health";
import { NextResponse } from "next/server";

export async function GET() {
  const dbPoolHealth = new DBPoolHealth(pool);
  const isConnected = await dbPoolHealth.checkConnection();

  return NextResponse.json({ isConnected }, { status: HttpResponseCode.OK });
}
