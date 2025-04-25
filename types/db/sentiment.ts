export interface SentimentData {
  sentiment_id: string;
  review_id: string; // Foreign key to Review
  score: number;
  emotion_tone: string;
  label: string;
  summary: string;
  created_at: string; // ISO format timestamp
  updated_at: string; // ISO format timestamp
}
