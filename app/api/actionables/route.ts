import pool from "@/config/db/db-config";
import { HttpResponseCode } from "@/enums/http-response-code";
import { DBPoolActionables } from "@/helpers/db/db-pool-actionables";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("pageSize") || "10";

  const dbPoolActionables = new DBPoolActionables(pool);

  const actionables = await dbPoolActionables.paginate(
    parseInt(page),
    parseInt(pageSize)
  );

  return NextResponse.json(actionables, { status: HttpResponseCode.OK });
}

export async function POST(request: NextRequest) {
  const dbPoolActionables = new DBPoolActionables(pool);

  const body = await request.json();
  const actionable = await dbPoolActionables.insert(body);

  const responseMessage = {
    message: "Actionable created successfully",
    actionable,
  };

  return NextResponse.json(responseMessage, {
    status: HttpResponseCode.CREATED,
  });
}
