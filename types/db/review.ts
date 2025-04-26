export interface ReviewData {
  review_id: string;
  rating: number;
  start_date: string; // ISO format date
  end_date: string; // ISO format date
  origin: string;
  destination: string;
  company_name: string;
  email: string;
  age_group: string;
  trip_type: string;
  description: string;
  transport_mode: string;
  created_at: string; // ISO format timestamp
  updated_at: string; // ISO format timestamp
}
