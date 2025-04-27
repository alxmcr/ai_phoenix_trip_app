import { ReviewData } from "@/types/db/review";

export interface PaginationParams {
  page: number;
  pageSize: number;
  sortOrder: string;
  sortBy?: string;
  filterReviewData?: Partial<ReviewData>;
}

export interface DBOperations<T> {
  findUnique(pk_id: string): Promise<T | null>;
  delete(pk_id: string): Promise<boolean>;
  create(item: Partial<T>): Promise<T>;
  createMany(items: Partial<T>[]): Promise<T[]>;
  update(pk_id: string, item: Partial<T>): Promise<T | null>;
  pagination(params: PaginationParams): Promise<T[]>;
}

export interface DBAggregateFunctions<T> {
  count(): Promise<number>;
}
