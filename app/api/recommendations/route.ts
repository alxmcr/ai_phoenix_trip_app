import { HttpResponseCode } from "@/enums/http-response-code";
import { DBPoolRecommendations } from "@/helpers/db/db-pool-recommendations";
import pool from "@/lib/db/db-config";
import { PrismaClient } from "@/prisma/app/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET /api/recommendations?page=1&pageSize=10&sortBy=created_at&sortOrder=desc
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("pageSize") || "10";
  const sortBy = searchParams.get("sortBy") || "created_at";
  const sortOrder = searchParams.get("sortOrder") || "desc";

  try {
    // Prisma client
    const prisma = new PrismaClient();

    // Pagination
    const actionables = await prisma.recommendation.findMany({
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
    return NextResponse.json(
      { error: "Internal server error" },
      { status: HttpResponseCode.INTERNAL_SERVER_ERROR }
    );
  }
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
