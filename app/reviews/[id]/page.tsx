import { Hero } from "@/components/sections/review-page/hero-section";
import { PrismaClient } from "@/prisma/app/generated/prisma";
import { PrismaReviewWithRelations } from "@/types/prisma/prisma-types";
import { Suspense } from "react";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Prisma client
  const prisma = new PrismaClient();

  // Find review by id
  const review = await prisma.review.findUnique({
    where: { review_id: id },
    include: {
      sentiment: true,
      actionables: true,
      recommendations: true,
    },
  });

  if (!id) {
    return <div>Review not found</div>;
  }

  if (!review) {
    return <div>Review not found</div>;
  }

  return (
    <main className="flex flex-col min-h-screen items-center">
      {JSON.stringify(review, null, 2)}
    </main>
  );
}
