"use server";

import pool from "@/config/db/db-config";
import { DBPoolReviews } from "@/helpers/db/db-pool-reviews";
import { ReviewData } from "@/types/db/review";
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

  // Redirect to the review page
  redirect(`/reviews/${newReview.review_id}`);
}
