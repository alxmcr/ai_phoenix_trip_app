import pool from "@/config/db/db-config";
import { HttpResponseCode } from "@/enums/http-response-code";
import { PaginationResponse } from "@/generics/api/api-generics";
import { DBPoolReviews } from "@/helpers/db/db-pool-reviews";
import { ReviewData } from "@/types/db/review";
import { NextRequest, NextResponse } from "next/server";

// GET /api/reviews?page=1&pageSize=10&sortBy=created_at&sortOrder=desc
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("pageSize") || "10";

  const dbPool = new DBPoolReviews(pool);

  const reviews = await dbPool.pagination({
    page: parseInt(page),
    pageSize: parseInt(pageSize),
    sortBy: "created_at",
    sortOrder: "desc",
  });

  const buildResponse: PaginationResponse<ReviewData> = {
    data: reviews,
    total: await dbPool.count(),
    page: parseInt(page),
    pageSize: parseInt(pageSize),
  };

  return NextResponse.json(buildResponse, { status: HttpResponseCode.OK });
}

// POST /api/reviews
export async function POST(request: NextRequest) {
  const dbPool = new DBPoolReviews(pool);

  const body = await request.json();
  const review = await dbPool.create(body);

  const responseMessage = {
    message: "Review created successfully",
    review,
  };

  return NextResponse.json(responseMessage, {
    status: HttpResponseCode.CREATED,
  });
}
