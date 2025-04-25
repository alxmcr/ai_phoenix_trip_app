import { DBOperations } from "@/generics/db/db-generics";
import { ActionableData } from "@/types/db/actionable";
import { Pool } from "pg";

export class DBPoolActionables implements DBOperations<ActionableData> {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  read(id: string): Promise<ActionableData | null> {
    throw new Error("Method not implemented.");
  }

  paginate(page: number, pageSize: number): Promise<ActionableData[]> {
    throw new Error("Method not implemented.");
  }

  update(
    id: string,
    item: Partial<ActionableData>
  ): Promise<ActionableData | null> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  insert(item: Partial<ActionableData>): Promise<ActionableData> {
    throw new Error("Method not implemented.");
  }

  insertMany(items: Partial<ActionableData>[]): Promise<ActionableData[]> {
    throw new Error("Method not implemented.");
  }

  filter(filters: Partial<ActionableData>): Promise<ActionableData[]> {
    throw new Error("Method not implemented.");
  }
}
