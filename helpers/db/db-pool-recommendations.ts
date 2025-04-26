import {
  DBAggregateFunctions,
  DBOperations,
  PaginationParams,
} from "@/generics/db/db-generics";
import { RecommendationData } from "@/types/db/recommendation";
import { Pool } from "pg";

interface IDBPoolRecommendations
  extends DBOperations<RecommendationData>,
    DBAggregateFunctions<RecommendationData> {}

export class DBPoolRecommendations implements IDBPoolRecommendations {
  private pool: Pool;
  private readonly columns = [
    "recommendation_id",
    "review_id",
    "data_driven",
    "target_area",
    "effort_level",
    "title",
    "description",
    "impact",
    "created_at",
    "updated_at",
  ] as const;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async findUnique(pk_id: string): Promise<RecommendationData | null> {
    const query = `SELECT * FROM recommendations WHERE recommendation_id = $1`;
    const result = await this.pool.query(query, [pk_id]);
    return result.rows[0] || null;
  }

  async delete(pk_id: string): Promise<boolean> {
    const query = `DELETE FROM recommendations WHERE recommendation_id = $1`;
    const result = await this.pool.query(query, [pk_id]);
    return (result.rowCount ?? 0) > 0;
  }

  async update(
    pk_id: string,
    item: Partial<RecommendationData>
  ): Promise<RecommendationData | null> {
    const validColumns = this.columns.filter((key) => key in item);

    if (validColumns.length === 0) {
      throw new Error("No valid columns provided");
    }

    const setClause = validColumns
      .map((columnName, index) => `${columnName} = $${index + 2}`)
      .join(", ");

    const query = `
      UPDATE recommendations
      SET ${setClause}
      WHERE recommendation_id = $1
      RETURNING *
    `;

    const values = [
      pk_id,
      ...validColumns.map((key) => item[key as keyof RecommendationData]),
    ];
    const result = await this.pool.query(query, values);

    return result.rows[0] || null;
  }

  async create(item: Partial<RecommendationData>): Promise<RecommendationData> {
    const validColumns = this.columns.filter((key) => key in item);
    if (validColumns.length === 0) {
      throw new Error("No valid columns provided");
    }

    const values = validColumns.map(
      (key) => item[key as keyof RecommendationData]
    );

    const parameterPlaceholders = values
      .map((_, index) => `$${index + 1}`)
      .join(", ");

    const query = `
      INSERT INTO recommendations (${validColumns.join(", ")})
      VALUES (${parameterPlaceholders})
      RETURNING *
    `;

    const result = await this.pool.query(query, values);
    if (!result.rows[0]) {
      throw new Error("Failed to create recommendation");
    }

    return result.rows[0];
  }

  async createMany(
    items: Partial<RecommendationData>[]
  ): Promise<RecommendationData[]> {
    const results: RecommendationData[] = [];
    for (const item of items) {
      const result = await this.create(item);
      results.push(result);
    }
    return results;
  }

  async count(): Promise<number> {
    const query = `SELECT COUNT(*) FROM recommendations`;
    const result = await this.pool.query(query);
    return result.rows[0].count;
  }

  async pagination(params: PaginationParams): Promise<RecommendationData[]> {
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
      SELECT * FROM recommendations
      ORDER BY ${params.sortBy} ${params.sortOrder}
      LIMIT ${params.pageSize} OFFSET ${offset}
    `;

    const result = await this.pool.query(query);
    return result.rows;
  }
}
