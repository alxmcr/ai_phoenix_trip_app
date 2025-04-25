import { DBOperations } from "@/generics/db/db-generics";
import { ActionableData } from "@/types/db/actionable";
import { Pool } from "pg";

export class DBPoolActionables implements DBOperations<ActionableData> {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async read(pk_id: string): Promise<ActionableData | null> {
    const query = `SELECT * FROM actionable WHERE actionable_id = $1`;
    const result = await this.pool.query(query, [pk_id]);
    return result.rows[0] || null;
  }

  async paginate(page: number, pageSize: number): Promise<ActionableData[]> {
    const query = `SELECT * FROM actionable LIMIT $1 OFFSET $2`;
    const result = await this.pool.query(query, [
      pageSize,
      (page - 1) * pageSize,
    ]);
    return result.rows;
  }

  async update(
    pk_id: string,
    item: Partial<ActionableData>
  ): Promise<ActionableData | null> {
    // Build the SET clause
    const setClause = Object.keys(item)
      .map((key) => `${key} = $${key}`)
      .join(", ");

    // Update the actionable
    const query = `
      UPDATE actionable
      SET ${setClause}
      WHERE actionable_id = $1 RETURNING *
    `;

    const result = await this.pool.query(query, [
      pk_id,
      ...Object.values(item),
    ]);

    return result.rows[0] || null;
  }

  delete(pk_id: string): Promise<boolean> {
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
