import pool from "@/config/db/db-config";
import { HttpResponseCode } from "@/enums/http-response-code";
import { DBPoolActionables } from "@/helpers/db/db-pool-actionables";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID is required" },
      { status: HttpResponseCode.BAD_REQUEST }
    );
  }

  const dbPoolActionables = new DBPoolActionables(pool);

  const actionable = await dbPoolActionables.read(id);

  return NextResponse.json(actionable, {
    status: HttpResponseCode.OK,
  });
}

export async function PATCH(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID is required" },
      { status: HttpResponseCode.BAD_REQUEST }
    );
  }

  const dbPoolActionables = new DBPoolActionables(pool);

  const body = await request.json();
  const actionable = await dbPoolActionables.update(id, body);

  const responseMessage = {
    message: "Actionable updated successfully",
    actionable,
  };

  return NextResponse.json(responseMessage, {
    status: HttpResponseCode.OK,
  });
}

export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "ID is required" },
      { status: HttpResponseCode.BAD_REQUEST }
    );
  }

  const dbPoolActionables = new DBPoolActionables(pool);

  const body = await request.json();
  const actionable = await dbPoolActionables.update(id, body);

  const responseMessage = {
    message: "Actionable updated successfully",
    actionable,
  };

  return NextResponse.json(responseMessage, {
    status: HttpResponseCode.OK,
  });
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const dbPoolActionables = new DBPoolActionables(pool);

  if (!id) {
    return NextResponse.json(
      { error: "ID is required" },
      { status: HttpResponseCode.BAD_REQUEST }
    );
  }

  const actionable = await dbPoolActionables.delete(id);

  if (!actionable) {
    return NextResponse.json(
      { error: "Actionable not found" },
      { status: HttpResponseCode.NOT_FOUND }
    );
  }

  const responseMessage = {
    message: "Actionable deleted successfully",
  };

  return NextResponse.json(responseMessage, {
    status: HttpResponseCode.OK,
  });
}
