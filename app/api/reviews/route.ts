import { HttpResponseCode } from "@/enums/http-response-code";
import { DBPoolReviews } from "@/helpers/db/db-pool-reviews";
import pool from "@/lib/db/db-config";
import { PrismaClient } from "@/prisma/app/generated/prisma";
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
  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("pageSize") || "10";
  const sortBy = searchParams.get("sortBy") || "created_at";
  const sortOrder = searchParams.get("sortOrder") || "desc";

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
    return NextResponse.json(
      { error: "Internal server error" },
      { status: HttpResponseCode.INTERNAL_SERVER_ERROR }
    );
  }
}
