export type PrismaReview = {
  review_id: string;
  rating: number | null;
  start_date: Date | null;
  end_date: Date | null;
  destination: string | null;
  company_name: string | null;
  origin: string | null;
  trip_type: string | null;
  description: string | null;
  transport_mode: string | null;
  email: string | null;
  age_group: string | null;
  created_at: Date | null;
  updated_at: Date | null;
};
