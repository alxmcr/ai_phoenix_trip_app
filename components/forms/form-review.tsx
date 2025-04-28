"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { createReviewAction } from "@/app/actions/create-review-action";
import toast from "react-hot-toast";
import { useState } from "react";

// Define constants for select options
const AGE_GROUPS = ["18-24", "25-34", "35-44", "45-54", "55+"] as const;
const TRIP_TYPES = ["business", "leisure", "family", "solo"] as const;
const TRANSPORT_MODES = ["air", "train", "bus", "car"] as const;

// Create type from constants
type AgeGroup = typeof AGE_GROUPS[number];
type TripType = typeof TRIP_TYPES[number];
type TransportMode = typeof TRANSPORT_MODES[number];

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  age_group: z.enum(AGE_GROUPS, {
    required_error: "Please select your age group",
    invalid_type_error: "Invalid age group selected",
  }),
  trip_type: z.enum(TRIP_TYPES, {
    required_error: "Please select a trip type",
    invalid_type_error: "Invalid trip type selected",
  }),
  description: z.string()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description must not exceed 1000 characters"),
  transport_mode: z.enum(TRANSPORT_MODES, {
    required_error: "Please select a transport mode",
    invalid_type_error: "Invalid transport mode selected",
  }),
  rating: z.number()
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must not exceed 5"),
  company_name: z.string()
    .min(1, "Company name is required")
    .max(100, "Company name must not exceed 100 characters"),
  origin: z.string()
    .min(1, "Origin is required")
    .max(100, "Origin must not exceed 100 characters"),
  destination: z.string()
    .min(1, "Destination is required")
    .max(100, "Destination must not exceed 100 characters"),
  start_date: z.date({
    required_error: "Please select a start date",
    invalid_type_error: "Invalid start date",
  }),
  end_date: z.date({
    required_error: "Please select an end date",
    invalid_type_error: "Invalid end date",
  }),
}).refine((data) => {
  if (data.start_date && data.end_date) {
    return data.end_date >= data.start_date;
  }
  return true;
}, {
  message: "End date must be after start date",
  path: ["end_date"],
});

export function FormReview() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      age_group: undefined,
      trip_type: undefined,
      description: "",
      transport_mode: undefined,
      rating: 1,
      company_name: "",
      origin: "",
      destination: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value instanceof Date) {
          formData.append(key, value.toISOString());
        } else {
          formData.append(key, value.toString());
        }
      });
      await createReviewAction(null, formData);
    } catch (error) {
      console.error("Form submission error:", error);

      if (error instanceof Error) {
        if (error.message.includes("429") || error.message.includes("quota")) {
          toast.error(
            "We're currently experiencing high demand. Please try again later or contact support.",
            {
              duration: 5000,
              position: "top-center",
              style: {
                background: "#ef4444",
                color: "#fff",
                padding: "16px",
                borderRadius: "8px",
              },
            }
          );
        } else {
          toast.error(
            "An error occurred while submitting your review. Please try again.",
            {
              duration: 5000,
              position: "top-center",
              style: {
                background: "#ef4444",
                color: "#fff",
                padding: "16px",
                borderRadius: "8px",
              },
            }
          );
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="age_group"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age Group</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your age group" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {AGE_GROUPS.map((ageGroup) => (
                      <SelectItem key={ageGroup} value={ageGroup}>
                        {ageGroup}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="trip_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Trip Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select trip type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {TRIP_TYPES.map((tripType) => (
                      <SelectItem key={tripType} value={tripType}>
                        {tripType.charAt(0).toUpperCase() + tripType.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="transport_mode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transport Mode</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select transport mode" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {TRANSPORT_MODES.map((mode) => (
                      <SelectItem key={mode} value={mode}>
                        {mode.charAt(0).toUpperCase() + mode.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Company name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={(value) => field.onChange(Number(value))}
                    defaultValue={field.value.toString()}
                    className="flex flex-row space-x-2"
                  >
                    {[1, 2, 3, 4, 5].map((value) => (
                      <FormItem key={value} className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={value.toString()} />
                        </FormControl>
                        <FormLabel className="font-normal">{value}</FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="origin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Origin</FormLabel>
                <FormControl>
                  <Input placeholder="Where did you start your trip?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Destination</FormLabel>
                <FormControl>
                  <Input placeholder="Where did you go?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="start_date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Start Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                          "h-10"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="end_date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>End Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                          "h-10"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your trip experience..."
                  className="min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Please provide detailed information about your trip experience.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Review"
          )}
        </Button>
      </form>
    </Form>
  );
}

