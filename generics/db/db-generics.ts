export interface DBOperations<T> {
  read(id: string): Promise<T | null>;
  filter(filters: Partial<T>): Promise<T[]>;
  paginate(page: number, pageSize: number): Promise<T[]>;
  update(id: string, item: Partial<T>): Promise<T | null>;
  delete(id: string): Promise<boolean>;
  insert(item: Partial<T>): Promise<T>;
  insertMany(items: Partial<T>[]): Promise<T[]>;
}
