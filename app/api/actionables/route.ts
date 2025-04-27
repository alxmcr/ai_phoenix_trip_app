import pool from "@/lib/db/db-config";
import { HttpResponseCode } from "@/enums/http-response-code";
import { PaginationResponse } from "@/generics/api/api-generics";
import { DBPoolActionables } from "@/helpers/db/db-pool-actionables";
import { ActionableData } from "@/types/db/actionable";
import { NextRequest, NextResponse } from "next/server";

// GET /api/actionables?page=1&pageSize=10&sortBy=created_at&sortOrder=desc
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("pageSize") || "10";

  const dbPoolActionables = new DBPoolActionables(pool);

  const actionables = await dbPoolActionables.pagination({
    page: parseInt(page),
    pageSize: parseInt(pageSize),
    sortBy: "created_at",
    sortOrder: "desc",
  });

  // Count the total number of actionables
  const totalString = await dbPoolActionables.count();

  // Convert total to number
  const total = Number(totalString);

  const buildResponse: PaginationResponse<ActionableData> = {
    data: actionables,
    total,
    page: parseInt(page),
    pageSize: parseInt(pageSize),
  };

  return NextResponse.json(buildResponse, { status: HttpResponseCode.OK });
}

// POST /api/actionables
export async function POST(request: NextRequest) {
  const dbPoolActionables = new DBPoolActionables(pool);

  const body = await request.json();
  const actionable = await dbPoolActionables.create(body);

  const responseMessage = {
    message: "Actionable created successfully",
    actionable,
  };

  return NextResponse.json(responseMessage, {
    status: HttpResponseCode.CREATED,
  });
}
