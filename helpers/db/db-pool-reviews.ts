import {
  DBAggregateFunctions,
  DBOperations,
  PaginationParams,
} from "@/generics/db/db-generics";
import { ReviewData } from "@/types/db/review";
import { Pool } from "pg";

interface IDBPoolReviews
  extends DBOperations<ReviewData>,
    DBAggregateFunctions<ReviewData> {}

export class DBPoolReviews implements IDBPoolReviews {
  private pool: Pool;
  private readonly columns = [
    "review_id",
    "rating",
    "start_date",
    "end_date",
    "destination",
    "company_name",
    "origin",
    "email",
    "age_group",
    "trip_type",
    "description",
    "transport_mode",
    "created_at",
    "updated_at",
  ] as const;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async findUnique(pk_id: string): Promise<ReviewData | null> {
    const query = `SELECT * FROM review WHERE review_id = $1`;
    const result = await this.pool.query(query, [pk_id]);
    return result.rows[0] || null;
  }

  async delete(pk_id: string): Promise<boolean> {
    const query = `DELETE FROM review WHERE review_id = $1`;
    const result = await this.pool.query(query, [pk_id]);
    return (result.rowCount ?? 0) > 0;
  }

  async update(
    pk_id: string,
    item: Partial<ReviewData>
  ): Promise<ReviewData | null> {
    const validColumns = this.columns.filter((key) => key in item);

    if (validColumns.length === 0) {
      throw new Error("No valid columns provided");
    }

    const setClause = validColumns
      .map((columnName, index) => `${columnName} = $${index + 2}`)
      .join(", ");

    const query = `
      UPDATE review
      SET ${setClause}
      WHERE review_id = $1
      RETURNING *
    `;

    const values = [
      pk_id,
      ...validColumns.map((key) => item[key as keyof ReviewData]),
    ];
    const result = await this.pool.query(query, values);

    return result.rows[0] || null;
  }

  async create(item: Partial<ReviewData>): Promise<ReviewData> {
    const validColumns = this.columns.filter((key) => key in item);
    if (validColumns.length === 0) {
      throw new Error("No valid columns provided");
    }

    const values = validColumns.map((key) => item[key as keyof ReviewData]);

    const parameterPlaceholders = values
      .map((_, index) => `$${index + 1}`)
      .join(", ");

    const query = `
      INSERT INTO review (${validColumns.join(", ")})
      VALUES (${parameterPlaceholders})
      RETURNING *
    `;

    const result = await this.pool.query(query, values);
    if (!result.rows[0]) {
      throw new Error("Failed to create review");
    }

    return result.rows[0];
  }

  async createMany(items: Partial<ReviewData>[]): Promise<ReviewData[]> {
    const results: ReviewData[] = [];
    for (const item of items) {
      const result = await this.create(item);
      results.push(result);
    }
    return results;
  }

  async count(): Promise<number> {
    const query = `SELECT COUNT(*) FROM review`;
    const result = await this.pool.query(query);
    return result.rows[0].count;
  }

  async getAverageRating(): Promise<number> {
    const query = `SELECT AVG(rating) as average_rating FROM review`;
    const result = await this.pool.query(query);
    return parseFloat(result.rows[0].average_rating) || 0;
  }

  async pagination(params: PaginationParams): Promise<ReviewData[]> {
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
      SELECT * FROM review
      ORDER BY ${params.sortBy} ${params.sortOrder}
      LIMIT ${params.pageSize} OFFSET ${offset}
    `;

    const result = await this.pool.query(query);
    return result.rows;
  }
}
