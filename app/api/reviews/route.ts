import pool from "@/config/db/db-config";
import { HttpResponseCode } from "@/enums/http-response-code";
import { PaginationResponse } from "@/generics/api/api-generics";
import { PaginationParams } from "@/generics/db/db-generics";
import { DBPoolReviews } from "@/helpers/db/db-pool-reviews";
import { ReviewData } from "@/types/db/review";
import { NextRequest, NextResponse } from "next/server";

// GET /api/reviews?page=1&pageSize=10&sortBy=created_at&sortOrder=desc&rating=5&transport_mode=car&trip_type=business&age_group=20-30&company_name=test&email=test@test.com&description=test&origin=test&destination=test
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("pageSize") || "10";
  const sortBy = searchParams.get("sortBy") || "created_at";
  let sortOrder = searchParams.get("sortOrder") || "desc";

  // Extract reviews params filters
  const rating = searchParams.get("rating");
  const transportMode = searchParams.get("transport_mode");
  const tripType = searchParams.get("trip_type");
  const ageGroup = searchParams.get("age_group");
  const companyName = searchParams.get("company_name");
  const email = searchParams.get("email");
  const description = searchParams.get("description");

  // if sortOrder is not asc or desc, default to desc
  if (sortOrder !== "asc" && sortOrder !== "desc") {
    sortOrder = "desc";
  }

  const dbPool = new DBPoolReviews(pool);

  const paginationParams: PaginationParams = {
    page: parseInt(page),
    pageSize: parseInt(pageSize),
    sortBy,
    sortOrder,
  };

  const reviews = await dbPool.pagination(paginationParams);

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
