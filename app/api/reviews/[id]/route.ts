import pool from "@/lib/db/db-config";
import { HttpResponseCode } from "@/enums/http-response-code";
import { DBPoolReviews } from "@/helpers/db/db-pool-reviews";
import { NextRequest, NextResponse } from "next/server";

// GET /api/reviews/:id
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  if (!id) {
    return NextResponse.json(
      { error: "ID is required" },
      { status: HttpResponseCode.BAD_REQUEST }
    );
  }

  const dbPool = new DBPoolReviews(pool);

  const review = await dbPool.findUnique(id);

  return NextResponse.json(review, {
    status: HttpResponseCode.OK,
  });
}

// PATCH /api/recommendations/:id
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  if (!id) {
    return NextResponse.json(
      { error: "ID is required" },
      { status: HttpResponseCode.BAD_REQUEST }
    );
  }

  const dbPool = new DBPoolReviews(pool);

  const body = await request.json();
  const recommendation = await dbPool.update(id, body);

  const responseMessage = {
    message: "Recommendation updated successfully",
    recommendation,
  };

  return NextResponse.json(responseMessage, {
    status: HttpResponseCode.OK,
  });
}

// PUT /api/recommendations/:id
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  if (!id) {
    return NextResponse.json(
      { error: "ID is required" },
      { status: HttpResponseCode.BAD_REQUEST }
    );
  }

  const dbPool = new DBPoolReviews(pool);

  const body = await request.json();
  const recommendation = await dbPool.update(id, body);

  const responseMessage = {
    message: "Recommendation updated successfully",
    recommendation,
  };

  return NextResponse.json(responseMessage, {
    status: HttpResponseCode.OK,
  });
}

// DELETE /api/recommendations/:id
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const dbPool = new DBPoolReviews(pool);

  if (!id) {
    return NextResponse.json(
      { error: "ID is required" },
      { status: HttpResponseCode.BAD_REQUEST }
    );
  }

  const recommendation = await dbPool.delete(id);

  if (!recommendation) {
    return NextResponse.json(
      { error: "Recommendation not found" },
      { status: HttpResponseCode.NOT_FOUND }
    );
  }

  const responseMessage = {
    message: "Recommendation deleted successfully",
  };

  return NextResponse.json(responseMessage, {
    status: HttpResponseCode.OK,
  });
}
