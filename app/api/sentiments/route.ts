import pool from "@/config/db/db-config";
import { HttpResponseCode } from "@/enums/http-response-code";
import { PaginationResponse } from "@/generics/api/api-generics";
import { DBPoolSentiments } from "@/helpers/db/db-pool-sentiments";
import { SentimentData } from "@/types/db/sentiment";
import { NextRequest, NextResponse } from "next/server";

// GET /api/sentiments?page=1&pageSize=10&sortBy=created_at&sortOrder=desc
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("pageSize") || "10";

  const dbPool = new DBPoolSentiments(pool);

  const sentiment = await dbPool.pagination({
    page: parseInt(page),
    pageSize: parseInt(pageSize),
    sortBy: "created_at",
    sortOrder: "desc",
  });

  const buildResponse: PaginationResponse<SentimentData> = {
    data: sentiment,
    total: await dbPool.count(),
    page: parseInt(page),
    pageSize: parseInt(pageSize),
  };

  return NextResponse.json(buildResponse, { status: HttpResponseCode.OK });
}

// POST /api/sentiments
export async function POST(request: NextRequest) {
  const dbPool = new DBPoolSentiments(pool);

  const body = await request.json();
  const sentiment = await dbPool.create(body);

  const responseMessage = {
    message: "Sentiment created successfully",
    review: sentiment,
  };

  return NextResponse.json(responseMessage, {
    status: HttpResponseCode.CREATED,
  });
}
