import pool from "@/config/db/db-config";
import { HttpResponseCode } from "@/enums/http-response-code";
import { DBPoolRecommendations } from "@/helpers/db/db-pool-recommendations";
import { NextRequest, NextResponse } from "next/server";

// GET /api/recommendations/:id
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

  const dbPoolRecommendations = new DBPoolRecommendations(pool);

  const recommendation = await dbPoolRecommendations.findUnique(id);

  return NextResponse.json(recommendation, {
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

  const dbPoolRecommendations = new DBPoolRecommendations(pool);

  const body = await request.json();
  const recommendation = await dbPoolRecommendations.update(id, body);

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

  const dbPoolRecommendations = new DBPoolRecommendations(pool);

  const body = await request.json();
  const recommendation = await dbPoolRecommendations.update(id, body);

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

  const dbPoolRecommendations = new DBPoolRecommendations(pool);

  if (!id) {
    return NextResponse.json(
      { error: "ID is required" },
      { status: HttpResponseCode.BAD_REQUEST }
    );
  }

  const recommendation = await dbPoolRecommendations.delete(id);

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
