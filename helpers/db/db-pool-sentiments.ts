import { DBAggregateFunctions, DBOperations } from "@/generics/db/db-generics";
import { SentimentData } from "@/types/db/sentiment";
import { WhereFilterBuilder } from "@/utils/db/builder-where-filter";
import { Pool } from "pg";

interface IDBPoolSentiments
  extends DBOperations<SentimentData>,
    DBAggregateFunctions<SentimentData> {}

export class DBPoolSentiments implements IDBPoolSentiments {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }
  async read(pk_id: string): Promise<SentimentData | null> {
    const query = `SELECT * FROM sentiments WHERE sentiment_id = $1`;
    const result = await this.pool.query(query, [pk_id]);
    return result.rows[0] || null;
  }
  async paginate(page: number, pageSize: number): Promise<SentimentData[]> {
    const query = `SELECT * FROM sentiments LIMIT $1 OFFSET $2`;
    const result = await this.pool.query(query, [
      pageSize,
      (page - 1) * pageSize,
    ]);
    return result.rows;
  }
  async update(
    pk_id: string,
    item: Partial<SentimentData>
  ): Promise<SentimentData | null> {
    const query = `UPDATE sentiments SET ${Object.keys(item)
      .map((key) => `${key} = $${key}`)
      .join(", ")} WHERE sentiment_id = $1 RETURNING *`;

    const result = await this.pool.query(query, [
      pk_id,
      ...Object.values(item),
    ]);

    return result.rows[0] || null;
  }
  async delete(pk_id: string): Promise<boolean> {
    const query = `DELETE FROM sentiments WHERE sentiment_id = $1`;
    const result = await this.pool.query(query, [pk_id]);
    return (result.rowCount ?? 0) > 0;
  }
  async insert(item: Partial<SentimentData>): Promise<SentimentData> {
    const query = `INSERT INTO sentiments (${Object.keys(item)
      .map((key) => `${key}`)
      .join(", ")}) VALUES (${Object.keys(item)
      .map((key) => `$${key}`)
      .join(", ")}) RETURNING *`;
    const result = await this.pool.query(query, [...Object.values(item)]);
    return result.rows[0];
  }
  async insertMany(items: Partial<SentimentData>[]): Promise<SentimentData[]> {
    const query = `INSERT INTO sentiments (${Object.keys(items[0])
      .map((key) => `${key}`)
      .join(", ")}) VALUES ${items
      .map(
        (_, index) =>
          `(${Object.keys(items[0])
            .map((key, idx) => `$${index + idx + 1}`)
            .join(", ")})`
      )
      .join(", ")} RETURNING *`;

    const result = await this.pool.query(query, [
      ...items.map((item) => Object.values(item)),
    ]);

    return result.rows;
  }
  async filter(filters: Partial<SentimentData>): Promise<SentimentData[]> {
    const whereBuilder = new WhereFilterBuilder<SentimentData>();
    const whereClause = whereBuilder.where(filters);

    const query = `SELECT * FROM sentiments WHERE ${whereClause}`;
    const result = await this.pool.query(query, [...Object.values(filters)]);

    return result.rows;
  }

  async count(): Promise<number> {
    const query = `SELECT COUNT(*) FROM sentiments`;
    const result = await this.pool.query(query);
    return result.rows[0].count;
  }
}
