import { DBAggregateFunctions, DBOperations } from "@/generics/db/db-generics";
import { ReviewData } from "@/types/db/review";
import { WhereFilterBuilder } from "@/utils/db/builder-where-filter";
import { Pool } from "pg";

interface IDBPoolReviews
  extends DBOperations<ReviewData>,
    DBAggregateFunctions<ReviewData> {}

export class DBPoolReviews implements IDBPoolReviews {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async read(pk_id: string): Promise<ReviewData | null> {
    const query = `SELECT * FROM reviews WHERE review_id = $1`;
    const result = await this.pool.query(query, [pk_id]);
    return result.rows[0] || null;
  }

  async paginate(page: number, pageSize: number): Promise<ReviewData[]> {
    const query = `SELECT * FROM reviews LIMIT $1 OFFSET $2`;
    const result = await this.pool.query(query, [
      pageSize,
      (page - 1) * pageSize,
    ]);
    return result.rows;
  }

  async update(
    pk_id: string,
    item: Partial<ReviewData>
  ): Promise<ReviewData | null> {
    const query = `UPDATE reviews SET ${Object.keys(item)
      .map((key) => `${key} = $${key}`)
      .join(", ")} WHERE review_id = $1 RETURNING *`;
    const result = await this.pool.query(query, [
      pk_id,
      ...Object.values(item),
    ]);
    return result.rows[0] || null;
  }

  async delete(pk_id: string): Promise<boolean> {
    const query = `DELETE FROM reviews WHERE review_id = $1`;
    const result = await this.pool.query(query, [pk_id]);
    return (result.rowCount ?? 0) > 0;
  }

  async insert(item: Partial<ReviewData>): Promise<ReviewData> {
    const query = `INSERT INTO reviews (${Object.keys(item)
      .map((key) => `${key}`)
      .join(", ")}) VALUES (${Object.keys(item)
      .map((key) => `$${key}`)
      .join(", ")}) RETURNING *`;
    const result = await this.pool.query(query, [...Object.values(item)]);
    return result.rows[0];
  }

  async insertMany(items: Partial<ReviewData>[]): Promise<ReviewData[]> {
    const query = `INSERT INTO reviews (${Object.keys(items[0])
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

  async filter(filters: Partial<ReviewData>): Promise<ReviewData[]> {
    const whereBuilder = new WhereFilterBuilder<ReviewData>();
    const whereClause = whereBuilder.where(filters);

    const query = `SELECT * FROM reviews WHERE ${whereClause}`;
    const result = await this.pool.query(query, [...Object.values(filters)]);
    return result.rows;
  }

  async count(): Promise<number> {
    const query = `SELECT COUNT(*) FROM reviews`;
    const result = await this.pool.query(query);
    return result.rows[0].count;
  }

  async sum(): Promise<number> {
    const query = `SELECT SUM(rating) FROM reviews`;
    const result = await this.pool.query(query);
    return result.rows[0].sum;
  }

  async avg(): Promise<number> {
    const query = `SELECT AVG(rating) FROM reviews`;
    const result = await this.pool.query(query);
    return result.rows[0].avg;
  }

  async min(): Promise<number> {
    const query = `SELECT MIN(rating) FROM reviews`;
    const result = await this.pool.query(query);
    return result.rows[0].min;
  }

  async max(): Promise<number> {
    const query = `SELECT MAX(rating) FROM reviews`;
    const result = await this.pool.query(query);
    return result.rows[0].max;
  }
}
