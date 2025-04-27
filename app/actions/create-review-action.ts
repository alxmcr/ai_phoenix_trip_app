"use server";

import pool from "@/config/db/db-config";
import { DBPoolReviews } from "@/helpers/db/db-pool-reviews";
import { ActionableData } from "@/types/db/actionable";
import { RecommendationData } from "@/types/db/recommendation";
import { ReviewData } from "@/types/db/review";
import { SentimentData } from "@/types/db/sentiment";
import { redirect } from "next/navigation";
import { z } from "zod";
import { createSentiment } from "./create-sentiment-action";
import { createActionable } from "./create-actionable-action";
import { createRecommendation } from "./create-recommendation-action";

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
    title: "Organize Ski Sessions",
    description: "Offer off-peak ski sessions to reduce crowding.",
    priority: "High",
    department: "Event Planning",
    category: "Winter Sports",
    source_aspect: "Crowd control",
  };

  const actionableData002: Partial<ActionableData> = {
    review_id,
    title: "Enhance Eco-Tourist Engagement",
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
    title: "Road Trip Enhancements",
    description:
      "Offer more scenic stops and personalized experiences during the trip.",
    impact: "Medium",
    target_area: "Route Planning",
    effort_level: "Low",
    data_driven: false,
  };

  const recommendationData002: Partial<RecommendationData> = {
    review_id,
    title: "Romantic Getaway Packages",
    description:
      "Create exclusive honeymoon packages tailored to individual needs.",
    impact: "High",
    target_area: "Sales",
    effort_level: "Medium",
    data_driven: true,
  };

  const recommendationData003: Partial<RecommendationData> = {
    review_id,
    title: "Exclusive Luxury Services",
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
  console.log(formData);

  const validatedFields = schema.safeParse({
    rating: Number(formData.get("rating")),
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

  // Create DBPoolReviews
  const dbPoolReviews = new DBPoolReviews(pool);

  // Prepare the data for the database
  const reviewData: Partial<ReviewData> = {
    rating: Number(rating),
    start_date: start_date.toISOString(),
    end_date: end_date.toISOString(),
    destination,
    company_name,
    origin,
    trip_type,
    description,
    transport_mode,
    email,
    age_group,
  };

  // Create Review in DB
  const newReview = await dbPoolReviews.create(reviewData);

  // Extract the review_id from the newReview object
  const review_id = newReview.review_id;

  // Check if the review_id is not null
  if (!review_id) {
    return {
      errors: {
        review_id: "Review ID is required",
      },
    };
  }

  // Create insights data
  // a. Create Sentiment
  const sentimentData: Partial<SentimentData> = {
    review_id,
    score: 2,
    emotion_tone: "Bad",
    label: "Bad experience",
    summary: "I do not like this trip",
  };
  await createSentiment(sentimentData);

  // b. Create many actionables
  const actionableData = mockActionablesData(review_id);

  // b.1. Slice the actionableData array for batching
  // This reduces the array into chunks of 10 items each to prevent overwhelming the database
  // Example: If actionableData has 25 items, it will be split into:
  // Chunk 0: [item0, item1, ..., item9]
  // Chunk 1: [item10, item11, ..., item19]
  // Chunk 2: [item20, item21, item22, item23, item24]
  const actionableDataChunks = actionableData.reduce((acc, curr, index) => {
    const chunkIndex = Math.floor(index / 10);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(curr);
    return acc;
  }, [] as Partial<ActionableData>[][]);

  // b.2. Create the actionables in chunks
  // Process each chunk of 10 items
  for (const chunk of actionableDataChunks) {
    // Process each actionable item within the chunk
    for (const actionable of chunk) {
      // Create individual actionable in the database
      await createActionable(actionable);
    }
  }

  // c. Create many recommendations
  const recommendationData = mockRecommendationsData(review_id);

  // Redirect to the review page
  redirect(`/reviews/${review_id}`);
}
