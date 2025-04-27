import { HttpResponseCode } from "@/enums/http-response-code";
import { DBPoolSentiments } from "@/helpers/db/db-pool-sentiments";
import pool from "@/lib/db/db-config";
import { PrismaClient } from "@/prisma/app/generated/prisma";
import { PrismaClientValidationError } from "@/prisma/app/generated/prisma/runtime/library";
import { NextRequest, NextResponse } from "next/server";

// GET /api/sentiments?page=1&pageSize=10&sortBy=created_at&sortOrder=desc
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("pageSize") || "10";
  const sortBy = searchParams.get("sortBy") || "created_at";
  const sortOrder = searchParams.get("sortOrder") || "desc";

  // Prisma client
  const prisma = new PrismaClient();

  try {
    // Pagination
    const actionables = await prisma.sentiment.findMany({
      skip: (parseInt(page) - 1) * parseInt(pageSize),
      take: parseInt(pageSize),
      orderBy: {
        [sortBy]: sortOrder,
      },
    });

    // Build the pagination response
    const responsePagination = {
      total: actionables.length,
      page: parseInt(page),
      pageSize: parseInt(pageSize),
      totalPages: Math.ceil(actionables.length / parseInt(pageSize)),
      data: actionables,
    };

    return NextResponse.json(responsePagination, {
      status: HttpResponseCode.OK,
    });
  } catch (error) {
    if (error instanceof PrismaClientValidationError) {
      return NextResponse.json(
        { error: "Invalid input data" },
        { status: HttpResponseCode.BAD_REQUEST }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: HttpResponseCode.INTERNAL_SERVER_ERROR }
    );
  }
}

// POST /api/sentiments
export async function POST(request: NextRequest) {
  const dbPool = new DBPoolSentiments(pool);

  const body = await request.json();

  // Check if the sentiment with review_id already exists
  const existingSentimentWithReviewId = await dbPool.findUniqueByReviewId(
    body.review_id
  );

  if (existingSentimentWithReviewId) {
    return NextResponse.json(
      { error: "A sentiment with this review_id already exists" },
      { status: HttpResponseCode.CONFLICT }
    );
  }

  const sentiment = await dbPool.create(body);

  const responseMessage = {
    message: "Sentiment created successfully",
    sentiment,
  };

  return NextResponse.json(responseMessage, {
    status: HttpResponseCode.CREATED,
  });
}
