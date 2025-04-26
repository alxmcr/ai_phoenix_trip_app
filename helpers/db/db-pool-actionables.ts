import {
  DBAggregateFunctions,
  DBOperations,
  PaginationParams,
} from "@/generics/db/db-generics";
import { ActionableData } from "@/types/db/actionable";
import { Pool } from "pg";

interface IDBPoolActionables
  extends DBOperations<ActionableData>,
    DBAggregateFunctions<ActionableData> {}

export class DBPoolActionables implements IDBPoolActionables {
  private pool: Pool;
  private readonly columns = [
    "review_id",
    "priority",
    "department",
    "category",
    "source_aspect",
    "title",
    "description",
  ] as const;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async findUnique(pk_id: string): Promise<ActionableData | null> {
    const query = `SELECT * FROM actionable WHERE actionable_id = $1`;
    const result = await this.pool.query(query, [pk_id]);
    return result.rows[0] || null;
  }

  async delete(pk_id: string): Promise<boolean> {
    const query = `DELETE FROM actionable WHERE actionable_id = $1`;
    const result = await this.pool.query(query, [pk_id]);
    return (result.rowCount ?? 0) > 0;
  }

  async update(
    pk_id: string,
    item: Partial<ActionableData>
  ): Promise<ActionableData | null> {
    const validColumns = this.columns.filter((key) => key in item);

    if (validColumns.length === 0) {
      throw new Error("No valid columns provided");
    }

    // Generate the SET clause for the UPDATE statement
    // For each column, create a parameterized assignment (e.g., "column_name = $2")
    // The first parameter ($1) is reserved for the WHERE clause (actionable_id)
    const setClause = validColumns
      .map((columnName, index) => `${columnName} = $${index + 2}`)
      .join(", ");

    const query = `
      UPDATE actionable
      SET ${setClause}
      WHERE actionable_id = $1
      RETURNING *
    `;

    const values = [
      pk_id,
      ...validColumns.map((key) => item[key as keyof ActionableData]),
    ];
    const result = await this.pool.query(query, values);

    return result.rows[0] || null;
  }

  async create(item: Partial<ActionableData>): Promise<ActionableData> {
    const validColumns = this.columns.filter((key) => key in item);
    if (validColumns.length === 0) {
      throw new Error("No valid columns provided");
    }

    const values = validColumns.map((key) => item[key as keyof ActionableData]);

    // Generate SQL parameter placeholders ($1, $2, etc.)
    const parameterPlaceholders = values
      .map((_, index) => `$${index + 1}`)
      .join(", ");

    const query = `
      INSERT INTO actionable (${validColumns.join(", ")})
      VALUES (${parameterPlaceholders})
      RETURNING *
    `;

    const result = await this.pool.query(query, values);
    if (!result.rows[0]) {
      throw new Error("Failed to create actionable");
    }

    return result.rows[0];
  }

  async createMany(
    items: Partial<ActionableData>[]
  ): Promise<ActionableData[]> {
    const results: ActionableData[] = [];
    for (const item of items) {
      const result = await this.create(item);
      results.push(result);
    }
    return results;
  }

  async count(): Promise<number> {
    const query = `SELECT COUNT(*) FROM actionable`;
    const result = await this.pool.query(query);
    return result.rows[0].count;
  }

  async pagination(params: PaginationParams): Promise<ActionableData[]> {
    const page = params.page ?? 1;
    const pageSize = params.pageSize ?? 10;

    const offset = (page - 1) * pageSize;

    // if sortBy is not provided, default to created_at
    if (!params.sortBy) {
      params.sortBy = "created_at";
    }

    // if sortOrder is not provided, default to desc
    if (!params.sortOrder) {
      params.sortOrder = "desc";
    }

    const query = `
      SELECT * FROM actionable
      ORDER BY ${params.sortBy} ${params.sortOrder}
      LIMIT ${params.pageSize} OFFSET ${offset}
    `;

    const result = await this.pool.query(query);

    return result.rows;
  }
}
