export type CountByDateMetric = {
  date: string;
  count: number;
};

export type PriorityCount = {
  high: number;
  medium: number;
  low: number;
};

export type GroupedActionables = {
  [date: string]: PriorityCount;
};

export type DatePriorityCount = {
  date: string;
} & PriorityCount;

export interface CountEffortRecommendations {
  effort: string;
  count: number;
}
