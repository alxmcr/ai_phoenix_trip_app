"use server";

import { parseAnalyzerResponse } from "@/helpers/openai/parse-analyzer-response";
import { ReviewAnalyzer } from "@/helpers/openai/review-analyzer";
import { PrismaClient } from "@/prisma/app/generated/prisma";
import { ActionableData } from "@/types/db/actionable";
import { RecommendationData } from "@/types/db/recommendation";
import { ReviewData } from "@/types/db/review";
import { PrismaReview } from "@/types/prisma/prisma-types";
import { formatReviewForAnalysis } from "@/utils/prisma/helper-prisma";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  rating: z.number({
    invalid_type_error: "Invalid Rating",
  }),
  start_date: z.date({
    invalid_type_error: "Invalid Start Date",
  }),
  end_date: z.date({
    invalid_type_error: "Invalid End Date",
  }),
  destination: z.string({
    invalid_type_error: "Invalid Destination",
  }),
  company_name: z.string({
    invalid_type_error: "Invalid Company Name",
  }),
  origin: z.string({
    invalid_type_error: "Invalid Origin",
  }),
  trip_type: z.string({
    invalid_type_error: "Invalid Trip Type",
  }),
  description: z.string({
    invalid_type_error: "Invalid Description",
  }),
  transport_mode: z.string({
    invalid_type_error: "Invalid Transport Mode",
  }),
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
  age_group: z.string({
    invalid_type_error: "Invalid Age Group",
  }),
});

function mockActionablesData(review_id: string) {
  const actionableData001: Partial<ActionableData> = {
    review_id,
    title: "[test] Organize Ski Sessions",
    description: "Offer off-peak ski sessions to reduce crowding.",
    priority: "High",
    department: "Event Planning",
    category: "Winter Sports",
    source_aspect: "Crowd control",
  };

  const actionableData002: Partial<ActionableData> = {
    review_id,
    title: "[test] Enhance Eco-Tourist Engagement",
    description:
      "Provide more interactive sessions on sustainability during eco-tours.",
    priority: "Medium",
    department: "Marketing",
    category: "Eco-Tourism",
    source_aspect: "Guest engagement",
  };

  return [actionableData001, actionableData002];
}

function mockRecommendationsData(review_id: string) {
  const recommendationData001: Partial<RecommendationData> = {
    review_id,
    title: "[test] Road Trip Enhancements",
    description:
      "Offer more scenic stops and personalized experiences during the trip.",
    impact: "Medium",
    target_area: "Route Planning",
    effort_level: "Low",
    data_driven: false,
  };

  const recommendationData002: Partial<RecommendationData> = {
    review_id,
    title: "[test] Romantic Getaway Packages",
    description:
      "Create exclusive honeymoon packages tailored to individual needs.",
    impact: "High",
    target_area: "Sales",
    effort_level: "Medium",
    data_driven: true,
  };

  const recommendationData003: Partial<RecommendationData> = {
    review_id,
    title: "[test] Exclusive Luxury Services",
    description:
      "Develop bespoke luxury experiences, including personalized itineraries.",
    impact: "High",
    target_area: "Luxury Travel",
    effort_level: "High",
    data_driven: true,
  };

  return [recommendationData001, recommendationData002, recommendationData003];
}

export async function createReview(formData: FormData) {
  const validatedFields = schema.safeParse({
    rating: formData.get("rating") || "0",
    start_date: new Date(formData.get("start_date") as string),
    end_date: new Date(formData.get("end_date") as string),
    destination: formData.get("destination"),
    company_name: formData.get("company_name"),
    origin: formData.get("origin"),
    trip_type: formData.get("trip_type"),
    description: formData.get("description"),
    transport_mode: formData.get("transport_mode"),
    email: formData.get("email"),
    age_group: formData.get("age_group"),
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Prepare the data for the database
  const {
    rating,
    start_date,
    end_date,
    destination,
    company_name,
    origin,
    trip_type,
    description,
    transport_mode,
    email,
    age_group,
  } = validatedFields.data;

  // Prepare the data for the database
  const reviewData = {
    rating: Number(rating),
    start_date: start_date.toISOString(),
    end_date: end_date.toISOString(),
    destination: destination || "",
    company_name: company_name || "",
    origin: origin || "",
    trip_type: trip_type || "",
    description: description || "",
    transport_mode: transport_mode || "",
    email: email || "",
    age_group: age_group || "",
  };

  // Prisma Client
  const prisma = new PrismaClient();

  // Create the review
  const newReview = await prisma.review.create({
    data: reviewData,
  });

  // Extract the review_id from the newReview object
  const review_id = newReview.review_id;

  // OpenAI: Analyze the review
  const reviewAnalyzer = new ReviewAnalyzer();
  const formattedReview = formatReviewForAnalysis(newReview);
  const response = await reviewAnalyzer.analyzeReview(formattedReview);

  // Parse the response
  const parsedResponse = parseAnalyzerResponse(response);

  // Extract the sentiment, actionables, and recommendations from the response
  const { sentiment, actionables, recommendations } = parsedResponse;

  // Sentiment: create
  const newSentiment = await prisma.sentiment.create({
    data: {
      ...sentiment,
      review: {
        connect: {
          review_id,
        },
      },
    },
  });

  // Actionables: create many
  const newActionables = await prisma.actionable.createMany({
    data: actionables.map((actionable) => ({
      ...actionable,
      review: {
        connect: {
          review_id,
        },
      },
    })),
  });

  // Recommendations: create many
  const newRecommendations = await prisma.recommendation.createMany({
    data: recommendations.map((recommendation) => ({
      ...recommendation,
      review: {
        connect: {
          review_id,
        },
      },
    })),
  });

  // Redirect to the review page
  redirect(`/reviews/${newReview.review_id}`);
}
