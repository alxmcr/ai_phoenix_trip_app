import { z } from "zod";

// Define constants for select options
export const AGE_GROUPS = ["18-24", "25-34", "35-44", "45-54", "55+"] as const;
export const TRIP_TYPES = ["Business", "Leisure", "Family", "Solo"] as const;
export const TRANSPORT_MODES = [
  "Airplane",
  "Train",
  "Bus",
  "Car",
  "Ship",
] as const;

export const formSchema = z
  .object({
    email: z.email("Invalid email address"),
    age_group: z.enum(AGE_GROUPS, {
      error: (issue) =>
        issue.input === undefined
          ? "Please select your age group"
          : "Invalid age group selected",
    }),
    trip_type: z.enum(TRIP_TYPES, {
      error: (issue) =>
        issue.input === undefined
          ? "Please select your trip type"
          : "Invalid trip type selected",
    }),
    description: z
      .string()
      .min(10, "Description must be at least 10 characters")
      .max(1000, "Description must not exceed 1000 characters"),
    transport_mode: z.enum(TRANSPORT_MODES, {
      error: (issue) =>
        issue.input === undefined
          ? "Please select your transport mode"
          : "Invalid transport mode selected",
    }),
    rating: z
      .number()
      .min(1, "Rating must be at least 1")
      .max(5, "Rating must not exceed 5"),
    company_name: z
      .string()
      .min(1, "Company name is required")
      .max(100, "Company name must not exceed 100 characters"),
    origin: z
      .string()
      .min(1, "Origin is required")
      .max(100, "Origin must not exceed 100 characters"),
    destination: z
      .string()
      .min(1, "Destination is required")
      .max(100, "Destination must not exceed 100 characters"),
    start_date: z.date({
      error: (issue) =>
        issue.input === undefined
          ? "Please select a start date"
          : "Invalid start date",
    }),
    end_date: z.date({
      error: (issue) =>
        issue.input === undefined
          ? "Please select an end date"
          : "Invalid end date",
    }),
  })
  .refine(
    (data) => {
      if (data.start_date && data.end_date) {
        return data.end_date >= data.start_date;
      }
      return true;
    },
    {
      message: "End date must be after start date",
      path: ["end_date"],
    }
  );
