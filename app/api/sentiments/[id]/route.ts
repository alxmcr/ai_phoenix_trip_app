import pool from "@/config/db/db-config";
import { HttpResponseCode } from "@/enums/http-response-code";
import { DBPoolSentiments } from "@/helpers/db/db-pool-sentiments";
import { NextRequest, NextResponse } from "next/server";

// GET /api/sentiments/:id
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID is required" },
      { status: HttpResponseCode.BAD_REQUEST }
    );
  }

  const dbPool = new DBPoolSentiments(pool);

  const sentiment = await dbPool.findUnique(id);

  return NextResponse.json(sentiment, {
    status: HttpResponseCode.OK,
  });
}

// PATCH /api/sentiments/:id
export async function PATCH(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID is required" },
      { status: HttpResponseCode.BAD_REQUEST }
    );
  }

  const dbPool = new DBPoolSentiments(pool);

  const body = await request.json();
  const sentiment = await dbPool.update(id, body);

  const responseMessage = {
    message: "Sentiment updated successfully",
    sentiment,
  };

  return NextResponse.json(responseMessage, {
    status: HttpResponseCode.OK,
  });
}

// PUT /api/sentiments/:id
export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID is required" },
      { status: HttpResponseCode.BAD_REQUEST }
    );
  }

  const dbPool = new DBPoolSentiments(pool);

  const body = await request.json();
  const sentiment = await dbPool.update(id, body);

  const responseMessage = {
    message: "Sentiment updated successfully",
    sentiment,
  };

  return NextResponse.json(responseMessage, {
    status: HttpResponseCode.OK,
  });
}

// DELETE /api/sentiments/:id
export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const dbPool = new DBPoolSentiments(pool);

  if (!id) {
    return NextResponse.json(
      { error: "ID is required" },
      { status: HttpResponseCode.BAD_REQUEST }
    );
  }

  const sentiment = await dbPool.delete(id);

  if (!sentiment) {
    return NextResponse.json(
      { error: "Sentiment not found" },
      { status: HttpResponseCode.NOT_FOUND }
    );
  }

  const responseMessage = {
    message: "Sentiment deleted successfully",
  };

  return NextResponse.json(responseMessage, {
    status: HttpResponseCode.OK,
  });
}
