"use client";

import { createReviewAction } from "@/app/actions/create-review-action";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { ReviewServerActionResponse } from "@/types/server-actions/review-server-action";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";
import BoxFormReviewSubmitted from "../boxes/box-form-review-submitted";
import BoxFormReviewSubmitting from "../boxes/box-form-review-submitting";
import {
  AGE_GROUPS,
  formSchema,
  TRANSPORT_MODES,
  TRIP_TYPES,
} from "./form-review.schema";

export function FormReview() {
  const [review_id, setReviewId] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

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
      const result = (await createReviewAction(
        null,
        formData
      )) as ReviewServerActionResponse;

      if (result?.errors?.root === "openai_quota_exceeded") {
        toast.error(
          "We're currently experiencing high demand with our AI analysis service. Your review has been saved, but the AI analysis will be processed later. Thank you for your patience!",
          {
            duration: 8000,
            position: "top-center",
            style: {
              background: "#ef4444",
              color: "#fff",
              padding: "16px",
              borderRadius: "8px",
              maxWidth: "500px",
            },
          }
        );
        // Redirect to the review page without AI analysis
        if (result.review_id) {
          window.location.href = `/reviews/${result.review_id}`;
        }
        return;
      }

      if (result?.errors) {
        throw new Error(result.errors.root || "An error occurred");
      }
    } catch (error) {
      console.error("Form submission error:", error);

      if (error instanceof Error) {
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
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return <BoxFormReviewSubmitted review_id={review_id} />;
  }

  if (isSubmitting) {
    return <BoxFormReviewSubmitting isSubmitting={isSubmitting} />;
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
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
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
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
                      <FormItem
                        key={value}
                        className="flex items-center space-x-3 space-y-0"
                      >
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
                  <Input
                    placeholder="Where did you start your trip?"
                    {...field}
                  />
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
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
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
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
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

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Trip Experience"
          )}
        </Button>
      </form>
    </Form>
  );
}
