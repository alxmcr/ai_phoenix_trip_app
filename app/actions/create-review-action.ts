"use server";

import { parseAnalyzerOpenAIChatCompletion } from "@/helpers/openai/parse-analyzer-response";
import { ReviewAnalyzer } from "@/helpers/openai/review-analyzer";
import { PrismaClient } from "@/prisma/app/generated/prisma";
import { ActionableData } from "@/types/db/actionable";
import { RecommendationData } from "@/types/db/recommendation";
import { parseFormData } from "@/utils/form/helpers-form";
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

export async function createReviewAction(prevState: any, formData: FormData) {
  console.log("🚀 ~ createReviewAction ~ prevState:", prevState);
  console.log("🚀 ~ createReviewAction ~ formData:", formData);
  try {
    const parsedFormData = parseFormData(formData);
    console.log("🚀 ~ createReviewAction ~ parsedFormData:", parsedFormData);

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
    const parsedResponse = parseAnalyzerOpenAIChatCompletion(
      response.choices[0].message.content || ""
    );

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

    // Redirect to the review page
    redirect(`/reviews/${review_id}`);
  } catch (error) {
    console.error(error);

    // Check if it's an OpenAI quota error
    if (error instanceof Error &&
        (error.message.includes("429") ||
         error.message.includes("quota") ||
         error.message.includes("exceeded"))) {
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
