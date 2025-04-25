export interface DBOperations<T> {
  read(pk_id: string): Promise<T | null>;
  paginate(page: number, pageSize: number): Promise<T[]>;
  update(pk_id: string, item: Partial<T>): Promise<T | null>;
  delete(pk_id: string): Promise<boolean>;
  insert(item: Partial<T>): Promise<T>;
  insertMany(items: Partial<T>[]): Promise<T[]>;
  filter(filters: Partial<T>): Promise<T[]>;
}

export interface DBAggregateFunctions<T> {
  count(): Promise<number>;
  sum(): Promise<number>;
  avg(): Promise<number>;
  min(): Promise<number>;
  max(): Promise<number>;
}
