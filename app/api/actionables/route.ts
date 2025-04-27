import pool from "@/lib/db/db-config";
import { HttpResponseCode } from "@/enums/http-response-code";
import { PaginationResponse } from "@/generics/api/api-generics";
import { DBPoolActionables } from "@/helpers/db/db-pool-actionables";
import { ActionableData } from "@/types/db/actionable";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/prisma/app/generated/prisma";

// GET /api/actionables?page=1&pageSize=10&sortBy=created_at&sortOrder=desc
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const pageSize = searchParams.get("pageSize") || "10";

  // Prisma client
  const prisma = new PrismaClient();

  // Pagination
  const actionables = await prisma.actionable.findMany({
    skip: (parseInt(page) - 1) * parseInt(pageSize),
    take: parseInt(pageSize),
    orderBy: {
      created_at: "desc",
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
