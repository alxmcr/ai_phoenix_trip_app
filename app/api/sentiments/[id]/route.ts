import pool from "@/lib/db/db-config";
import { HttpResponseCode } from "@/enums/api/http-response-code";
import { DBPoolSentiments } from "@/helpers/db/db-pool-sentiments";
import { NextRequest, NextResponse } from "next/server";

// GET /api/sentiments/:id
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

  const dbPool = new DBPoolSentiments(pool);

  const sentiment = await dbPool.findUnique(id);

  if (!sentiment) {
    return NextResponse.json(
      { error: "Sentiment not found" },
      { status: HttpResponseCode.NOT_FOUND }
    );
  }

  return NextResponse.json(sentiment, {
    status: HttpResponseCode.OK,
  });
}

// PATCH /api/sentiments/:id
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

  try {
    const dbPool = new DBPoolSentiments(pool);
    const body = await request.json();

    // If review_id is being updated, check if it exists in another record
    if (body.review_id) {
      const existingSentiment = await dbPool.findUniqueByReviewId(
        body.review_id
      );
      if (existingSentiment && existingSentiment.sentiment_id !== id) {
        return NextResponse.json(
          { error: "A sentiment with this review_id already exists" },
          { status: HttpResponseCode.CONFLICT }
        );
      }
    }

    const sentiment = await dbPool.update(id, body);

    const responseMessage = {
      message: "Sentiment updated successfully",
      sentiment,
    };

    return NextResponse.json(responseMessage, {
      status: HttpResponseCode.OK,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: HttpResponseCode.INTERNAL_SERVER_ERROR }
    );
  }
}

// DELETE /api/sentiments/:id
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

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
