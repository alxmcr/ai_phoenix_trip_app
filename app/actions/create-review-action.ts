"use server";

import { ReviewAnalyzer } from "@/helpers/openai/review-analyzer";
import { PrismaClient } from "@/prisma/app/generated/prisma";
import { AnalyzerResponse } from "@/types/openai/analyzer";
import { ReviewServerActionResponse } from "@/types/server-actions/review-server-action";
import { parseFormData } from "@/utils/form/helpers-form";
import { formatReviewForAnalysis } from "@/utils/prisma/helper-prisma";
import { z } from "zod";

const schema = z.object({
  rating: z.number().min(1).max(5),
  start_date: z.date(),
  end_date: z.date(),
  destination: z.string().min(1, "Destination is required"),
  company_name: z.string().min(1, "Company name is required"),
  origin: z.string().min(1, "Origin is required"),
  trip_type: z.string().min(1, "Trip type is required"),
  description: z.string().min(1, "Description is required"),
  transport_mode: z.string().min(1, "Transport mode is required"),
  email: z.string().email("Invalid email format"),
  age_group: z.string().min(1, "Age group is required"),
});

export async function createReviewAction(
  prevState: ReviewServerActionResponse | null,
  formData: FormData
) {
  try {
    const parsedFormData = parseFormData(formData);

    const validatedFields = schema.safeParse(parsedFormData);

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
    const parsedResponse: AnalyzerResponse = JSON.parse(response.output_text);

    // Extract the sentiment, actionables, and recommendations from the response
    const { sentiment, actionables, recommendations } = parsedResponse;

    // Sentiment: create one
    await prisma.sentiment.create({
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
    await prisma.actionable.createMany({
      data: actionables.map((actionable) => ({
        ...actionable,
        review_id,
      })),
    });

    // Recommendations: create many
    await prisma.recommendation.createMany({
      data: recommendations.map((recommendation) => ({
        ...recommendation,
        review_id,
      })),
    });

    // Return the review ID instead of redirecting
    return {
      review_id,
    };
  } catch (error) {
    console.error(error);

    // Check if it's an OpenAI quota error
    if (
      error instanceof Error &&
      (error.message.includes("429") ||
        error.message.includes("quota") ||
        error.message.includes("exceeded"))
    ) {
      return {
        errors: {
          root: "openai_quota_exceeded",
        },
      };
    }

    return {
      errors: {
        root: "Failed to create review",
      },
    };
  }
}
