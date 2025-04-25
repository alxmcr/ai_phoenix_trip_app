export interface DBOperations<T> {
  findUnique(pk_id: string): Promise<T | null>;
  delete(pk_id: string): Promise<boolean>;
  create(item: Partial<T>): Promise<T>;
  update(pk_id: string, item: Partial<T>): Promise<T | null>;
}

export interface DBAggregateFunctions<T> {
  count(): Promise<number>;
}
