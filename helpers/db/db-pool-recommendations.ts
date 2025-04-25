import { DBOperations } from "@/generics/db/db-generics";
import { RecommendationData } from "@/types/db/recommendation";
import { WhereFilterBuilder } from "@/utils/db/builder-where-filter";
import { Pool } from "pg";

export class DBPoolRecommendations implements DBOperations<RecommendationData> {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async read(pk_id: string): Promise<RecommendationData | null> {
    const query = `SELECT * FROM recommendations WHERE recommendation_id = $1`;
    const result = await this.pool.query(query, [pk_id]);
    return result.rows[0] || null;
  }

  async paginate(
    page: number,
    pageSize: number
  ): Promise<RecommendationData[]> {
    const query = `SELECT * FROM recommendations LIMIT $1 OFFSET $2`;
    const result = await this.pool.query(query, [
      pageSize,
      (page - 1) * pageSize,
    ]);
    return result.rows;
  }

  async update(
    pk_id: string,
    item: Partial<RecommendationData>
  ): Promise<RecommendationData | null> {
    const query = `UPDATE recommendations SET ${Object.keys(item)
      .map((key) => `${key} = $${key}`)
      .join(", ")} WHERE recommendation_id = $1 RETURNING *`;
    const result = await this.pool.query(query, [
      pk_id,
      ...Object.values(item),
    ]);
    return result.rows[0] || null;
  }

  async delete(pk_id: string): Promise<boolean> {
    const query = `DELETE FROM recommendations WHERE recommendation_id = $1`;
    const result = await this.pool.query(query, [pk_id]);
    return (result.rowCount ?? 0) > 0;
  }

  async insert(item: Partial<RecommendationData>): Promise<RecommendationData> {
    const query = `INSERT INTO recommendations (${Object.keys(item)
      .map((key) => `${key}`)
      .join(", ")}) VALUES (${Object.keys(item)
      .map((key) => `$${key}`)
      .join(", ")}) RETURNING *`;
    const result = await this.pool.query(query, [...Object.values(item)]);
    return result.rows[0];
  }

  async insertMany(
    items: Partial<RecommendationData>[]
  ): Promise<RecommendationData[]> {
    const query = `INSERT INTO recommendations (${Object.keys(items[0])
      .map((key) => `${key}`)
      .join(", ")}) VALUES ${items
      .map(
        (_, index) =>
          `(${Object.keys(items[0])
            .map((key) => `$${index + key}`)
            .join(", ")})`
      )
      .join(", ")} RETURNING *`;
    const result = await this.pool.query(query, [
      ...items.map((item) => Object.values(item)),
    ]);
    return result.rows;
  }

  async filter(
    filters: Partial<RecommendationData>
  ): Promise<RecommendationData[]> {
    const whereBuilder = new WhereFilterBuilder<RecommendationData>();
    const whereClause = whereBuilder.where(filters);

    const query = `SELECT * FROM recommendations WHERE ${whereClause}`;
    const result = await this.pool.query(query, [...Object.values(filters)]);
    return result.rows;
  }
}
