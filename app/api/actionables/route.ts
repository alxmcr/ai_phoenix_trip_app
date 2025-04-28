import { HttpResponseCode } from "@/enums/http-response-code";
import { DBPoolActionables } from "@/helpers/db/db-pool-actionables";
import pool from "@/lib/db/db-config";
import { PrismaClient } from "@/prisma/app/generated/prisma";
import { PrismaClientValidationError } from "@/prisma/app/generated/prisma/runtime/library";
import { buildActionableWhereFilter } from "@/utils/db/filters/actionable-prisma-where";
import { NextRequest, NextResponse } from "next/server";

// GET /api/actionables?page=1&pageSize=10&sortBy=created_at&sortOrder=desc
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

  try {
    // Prisma client
    const prisma = new PrismaClient();

    // Prisma where filter
    const where = buildActionableWhereFilter(rest);

    // Get the actionables
    const actionables = await prisma.actionable.findMany({
      where,
      skip: (parseInt(page) - 1) * parseInt(pageSize),
      take: parseInt(pageSize),
      orderBy: { [sortBy]: sortOrder },
    });

    // Build the pagination response
    const totalPages = Math.ceil(actionables.length / parseInt(pageSize));

    const responsePagination = {
      total: actionables.length,
      page: parseInt(page),
      pageSize: parseInt(pageSize),
      totalPages,
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
