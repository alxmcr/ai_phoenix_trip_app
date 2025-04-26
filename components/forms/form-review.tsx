"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Review form schema
// - rating: number between 1 and 5
// - start_date: date
// - end_date: date
// - destination: string
// - company_name: string
// - origin: string
// - email: email
// - age_group: string
// - trip_type: string
// - description: string
// - transport_mode: string

const formSchema = z.object({
  rating: z.number().min(1).max(5),
  start_date: z.string().min(1),
  end_date: z.string().min(1),
  destination: z.string().min(1),
  company_name: z.string().min(1),
  origin: z.string().min(1),
  email: z.string().email(),
  age_group: z.string().min(1),
  trip_type: z.string().min(1),
  description: z.string().min(1),
  transport_mode: z.string().min(1),
});

export function FormReview() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 1,
      start_date: "",
      end_date: "",
      destination: "",
      company_name: "",
      origin: "",
      email: "",
      age_group: "",
      trip_type: "",
      description: "",
      transport_mode: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
