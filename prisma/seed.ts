import { Prisma, PrismaClient } from "./app/generated/prisma";

const prisma = new PrismaClient();

// Review data
const reviewData: Prisma.ReviewCreateInput[] = [
  {
    review_id: "550e8400-e29b-41d4-a716-446655440000",
    email: "test@test.com",
    age_group: "20-29",
    trip_type: "business",
    description: "This is a test review",
    transport_mode: "car",
    rating: 5,
    company_name: "Test Company",
    origin: "New York",
    destination: "Los Angeles",
    start_date: new Date("2021-01-01"),
    end_date: new Date("2021-01-05"),
  },
  {
    review_id: "550e8400-e29b-41d4-a716-446655440001",
    email: "test2@test.com",
    age_group: "30-39",
    trip_type: "leisure",
    description: "This is another test review",
    transport_mode: "train",
    rating: 4,
    company_name: "Test Company 2",
    origin: "Chicago",
    destination: "San Francisco",
    start_date: new Date("2021-02-01"),
    end_date: new Date("2021-02-05"),
  },
  {
    review_id: "550e8400-e29b-41d4-a716-446655440002",
    email: "test3@test.com",
    age_group: "40-49",
    trip_type: "business",
    description: "This is another test review",
    transport_mode: "plane",
    rating: 3,
    company_name: "Test Company 3",
    origin: "New York",
    destination: "Los Angeles",
    start_date: new Date("2021-03-01"),
    end_date: new Date("2021-03-05"),
  },
  {
    review_id: "550e8400-e29b-41d4-a716-446655440003",
    email: "test4@test.com",
    age_group: "50-59",
    trip_type: "business",
    description: "This is another test review",
    transport_mode: "plane",
    rating: 3,
    company_name: "Test Company 4",
    origin: "New York",
    destination: "Los Angeles",
    start_date: new Date("2021-04-01"),
    end_date: new Date("2021-04-05"),
  },
];

// Sentiment data
const sentimentData: Prisma.SentimentCreateInput[] = [
  {
    score: 5,
    label: "positive",
    summary: "This is a test summary",
    emotion_tone: "happy",
    review: {
      connect: {
        review_id: "550e8400-e29b-41d4-a716-446655440000",
      },
    },
  },
  {
    score: 4,
    label: "positive",
    summary: "This is a test summary",
    emotion_tone: "happy",
    review: {
      connect: {
        review_id: "550e8400-e29b-41d4-a716-446655440001",
      },
    },
  },
  {
    score: 3,
    label: "neutral",
    summary: "This is a test summary",
    emotion_tone: "neutral",
    review: {
      connect: {
        review_id: "550e8400-e29b-41d4-a716-446655440002",
      },
    },
  },
];

// Actionable data
const actionableData: Prisma.ActionableCreateInput[] = [
  {
    title: "Test Actionable",
    description: "This is a test actionable",
    priority: "high",
    department: "marketing",
    category: "customer service",
    source_aspect: "customer feedback",
    review: {
      connect: {
        review_id: "550e8400-e29b-41d4-a716-446655440000",
      },
    },
  },
  {
    title: "Test Actionable 2",
    description: "This is another test actionable",
    priority: "medium",
    department: "sales",
    category: "sales",
    source_aspect: "customer feedback",
    review: {
      connect: {
        review_id: "550e8400-e29b-41d4-a716-446655440001",
      },
    },
  },
  {
    title: "Test Actionable 3",
    description: "This is another test actionable",
    priority: "low",
    department: "engineering",
    category: "engineering",
    source_aspect: "customer feedback",
    review: {
      connect: {
        review_id: "550e8400-e29b-41d4-a716-446655440002",
      },
    },
  },
];

// Recommendation data
const recommendationData: Prisma.RecommendationCreateInput[] = [
  {
    title: "Test Recommendation",
    description: "This is a test recommendation",
    impact: "high",
    target_area: "customer satisfaction",
    effort_level: "low",
    data_driven: true,
    review: {
      connect: {
        review_id: "550e8400-e29b-41d4-a716-446655440000",
      },
    },
  },
  {
    title: "Test Recommendation 2",
    description: "This is another test recommendation",
    impact: "medium",
    target_area: "customer satisfaction",
    effort_level: "medium",
    data_driven: false,
    review: {
      connect: {
        review_id: "550e8400-e29b-41d4-a716-446655440001",
      },
    },
  },
  {
    title: "Test Recommendation 3",
    description: "This is another test recommendation",
    impact: "low",
    target_area: "customer satisfaction",
    effort_level: "high",
    data_driven: true,
    review: {
      connect: {
        review_id: "550e8400-e29b-41d4-a716-446655440002",
      },
    },
  },
  {
    title: "Test Recommendation 4",
    description: "This is another test recommendation",
    impact: "low",
    target_area: "customer satisfaction",
    review: {
      connect: {
        review_id: "550e8400-e29b-41d4-a716-446655440003",
      },
    },
  },
];

export async function main() {
  // First create all reviews
  for (const review of reviewData) {
    await prisma.review.create({
      data: review,
    });
  }

  // Then create sentiments
  for (const sentiment of sentimentData) {
    await prisma.sentiment.create({
      data: sentiment,
    });
  }

  // Then create actionables
  for (const actionable of actionableData) {
    await prisma.actionable.create({
      data: actionable,
    });
  }

  // Finally create recommendations
  for (const recommendation of recommendationData) {
    await prisma.recommendation.create({
      data: recommendation,
    });
  }
}

main();
