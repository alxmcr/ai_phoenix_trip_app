import { HttpResponseCode } from "@/enums/http-response-code";
import { DBPoolReviews } from "@/helpers/db/db-pool-reviews";
import pool from "@/lib/db/db-config";
import { PrismaClient } from "@/prisma/app/generated/prisma";
import { PrismaClientValidationError } from "@/prisma/app/generated/prisma/runtime/library";
import { buildReviewWhereFilter } from "@/utils/db/filters/review-prisma-where";
import { NextRequest, NextResponse } from "next/server";

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

// GET /api/reviews?page=1&pageSize=10&sortBy=created_at&sortOrder=desc&rating=5&transport_mode=car&trip_type=business&age_group=20-30&company_name=test&email=test@test.com&description=test&origin=test&destination=test
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  // Extract the query parameters
  const {
    page = "1",
    pageSize = "10",
    sortBy = "created_at",
    sortOrder = "desc",
    ...rest
  } = Object.fromEntries(searchParams.entries());

  // Prisma where filter
  const where = buildReviewWhereFilter(rest);

  // Prisma client
  const prisma = new PrismaClient();

  try {
    // Pagination
    const reviews = await prisma.review.findMany({
      skip: (parseInt(page) - 1) * parseInt(pageSize),
      take: parseInt(pageSize),
      orderBy: {
        [sortBy]: sortOrder,
      },
      where,
    });

    // Build the pagination response
    const responsePagination = {
      total: reviews.length,
      page: parseInt(page),
      pageSize: parseInt(pageSize),
      totalPages: Math.ceil(reviews.length / parseInt(pageSize)),
      data: reviews,
    };

    return NextResponse.json(responsePagination, {
      status: HttpResponseCode.OK,
    });
  } catch (error) {
    console.error(error);

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
