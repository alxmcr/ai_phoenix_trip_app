export interface ActionableData {
  actionable_id: string;
  review_id: string; // Foreign key to Review
  priority: string;
  department: string;
  category: string;
  source_aspect: string;
  title: string;
  description: string;
  created_at: string; // ISO format timestamp
  updated_at: string; // ISO format timestamp
}
