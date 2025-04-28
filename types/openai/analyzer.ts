export interface OpenAISentiment {
  score: number;
  label: string;
  summary: string;
  emotion_tone: string;
}

export interface OpenAIActionable {
  title: string;
  description: string;
  priority: string;
  department: string;
  category: string;
  source_aspect: string;
}

export interface OpenAIRecommendation {
  title: string;
  description: string;
  impact: string;
  target_area: string;
  effort_level: string;
  data_driven: boolean;
}

export interface AnalyzerResponse {
  sentiment: OpenAISentiment;
  actionables: OpenAIActionable[];
  recommendations: OpenAIRecommendation[];
}