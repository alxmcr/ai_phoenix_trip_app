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

export interface PrismaSentiment {
  sentiment_id: string;
  score: number | null;
  label: string | null;
  summary: string | null;
  emotion_tone: string | null;
  created_at: Date | null;
  updated_at: Date | null;
  review_id: string;
}

export interface PrismaActionable {
  actionable_id: string;
  title: string | null;
  description: string | null;
  priority: string | null;
  department: string | null;
  category: string | null;
  source_aspect: string | null;
  created_at: Date | null;
  updated_at: Date | null;
  review_id: string;
}

export interface PrismaRecommendation {
  recommendation_id: string;
  title: string | null;
  description: string | null;
  impact: string | null;
  target_area: string | null;
  effort_level: string | null;
  data_driven: boolean | null;
  created_at: Date | null;
  updated_at: Date | null;
  review_id: string;
}

export interface PrismaReviewWithRelations {
  review: PrismaReview;
  sentiment: PrismaSentiment;
  actionables: PrismaActionable[];
  recommendations: PrismaRecommendation[];
}
