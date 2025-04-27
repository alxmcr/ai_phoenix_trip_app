import { HttpResponseCode } from "@/enums/http-response-code";
import { DBPoolActionables } from "@/helpers/db/db-pool-actionables";
import pool from "@/lib/db/db-config";
import { PrismaClient } from "@/prisma/app/generated/prisma";
import { PrismaClientValidationError } from "@/prisma/app/generated/prisma/runtime/library";
import { NextRequest, NextResponse } from "next/server";

// GET /api/actionables?page=1&pageSize=10&sortBy=created_at&sortOrder=desc
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("pageSize") || "10";
  const sortBy = searchParams.get("sortBy") || "created_at";
  const sortOrder = searchParams.get("sortOrder") || "desc";
  const search = searchParams.get("search") || "";

  // Prisma client
  const prisma = new PrismaClient();

  try {
    // Pagination
    const actionables = await prisma.actionable.findMany({
      skip: (parseInt(page) - 1) * parseInt(pageSize),
      take: parseInt(pageSize),
      orderBy: {
        [sortBy]: sortOrder,
      },
      where: {
        OR: [
          ...(search.length === 36
            ? [{ actionable_id: { equals: search } }]
            : []),
          { title: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
          { source_aspect: { contains: search, mode: "insensitive" } },
          { department: { contains: search, mode: "insensitive" } },
          { category: { contains: search, mode: "insensitive" } },
          { priority: { contains: search, mode: "insensitive" } },
          ...(search.length === 36 ? [{ review_id: { equals: search } }] : []),
        ],
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
    console.log("🚀 ~ GET ~ error:", error);

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
