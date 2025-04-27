import { HttpResponseCode } from "@/enums/http-response-code";
import { PrismaClient } from "@/prisma/app/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Test connection to Prisma
    await prisma.$connect();

    return NextResponse.json(
      { isConnected: true },
      { status: HttpResponseCode.OK }
    );
  } catch (error) {
    return NextResponse.json(
      { isConnected: false, error: error },
      { status: HttpResponseCode.INTERNAL_SERVER_ERROR }
    );
  } finally {
    await prisma.$disconnect();
  }
}
