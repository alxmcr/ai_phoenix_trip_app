import pool from "@/lib/db/db-config";
import { HttpResponseCode } from "@/enums/http-response-code";
import { PaginationResponse } from "@/generics/api/api-generics";
import { DBPoolRecommendations } from "@/helpers/db/db-pool-recommendations";
import { RecommendationData } from "@/types/db/recommendation";
import { NextRequest, NextResponse } from "next/server";

// GET /api/recommendations?page=1&pageSize=10&sortBy=created_at&sortOrder=desc
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("pageSize") || "10";

  const dbPoolRecommendations = new DBPoolRecommendations(pool);

  const recommendations = await dbPoolRecommendations.pagination({
    page: parseInt(page),
    pageSize: parseInt(pageSize),
    sortBy: "created_at",
    sortOrder: "desc",
  });

  const buildResponse: PaginationResponse<RecommendationData> = {
    data: recommendations,
    total: await dbPoolRecommendations.count(),
    page: parseInt(page),
    pageSize: parseInt(pageSize),
  };

  return NextResponse.json(buildResponse, { status: HttpResponseCode.OK });
}

// POST /api/recommendations
export async function POST(request: NextRequest) {
  const dbPoolRecommendations = new DBPoolRecommendations(pool);

  const body = await request.json();
  const recommendation = await dbPoolRecommendations.create(body);

  const responseMessage = {
    message: "Recommendation created successfully",
    recommendation,
  };

  return NextResponse.json(responseMessage, {
    status: HttpResponseCode.CREATED,
  });
}
