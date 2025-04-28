import { PrismaClient } from "@/prisma/app/generated/prisma";

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

  return <div>{JSON.stringify(review, null, 2)}</div>;
}
