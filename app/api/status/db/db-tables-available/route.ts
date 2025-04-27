import { HttpResponseCode } from "@/enums/http-response-code";
import { PrismaClient, Prisma } from "@/prisma/app/generated/prisma";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const query = Prisma.sql`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
      AND table_name != '_prisma_migrations'
    `;

    const result = (await prisma.$queryRaw<{ table_name: string }[]>(
      query
    )) as Array<{
      table_name: string;
    }>;

    // Extract table names from the result and return them as an array
    const tables = result.map((row) => row.table_name);

    return NextResponse.json({ tables }, { status: HttpResponseCode.OK });
  } catch (error) {
    return NextResponse.json(
      { error: error },
      { status: HttpResponseCode.INTERNAL_SERVER_ERROR }
    );
  } finally {
    await prisma.$disconnect();
  }
}
