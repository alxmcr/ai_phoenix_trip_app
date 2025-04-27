import {
  DBAggregateFunctions,
  DBOperations,
  PaginationParams,
} from "@/generics/db/db-generics";
import { SentimentData } from "@/types/db/sentiment";
import { Pool } from "pg";

interface IDBPoolSentiments
  extends DBOperations<SentimentData>,
    DBAggregateFunctions<SentimentData> {}

export class DBPoolSentiments implements IDBPoolSentiments {
  private pool: Pool;
  private readonly columns = [
    "sentiment_id",
    "review_id",
    "score",
    "emotion_tone",
    "label",
    "summary",
    "created_at",
    "updated_at",
  ] as const;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async findUnique(pk_id: string): Promise<SentimentData | null> {
    const query = `SELECT * FROM sentiment WHERE sentiment_id = $1`;
    const result = await this.pool.query(query, [pk_id]);
    return result.rows[0] || null;
  }

  async findUniqueByReviewId(review_id: string): Promise<SentimentData | null> {
    const query = `SELECT * FROM sentiment WHERE review_id = $1`;
    const result = await this.pool.query(query, [review_id]);
    return result.rows[0] || null;
  }

  async delete(pk_id: string): Promise<boolean> {
    const query = `DELETE FROM sentiment WHERE sentiment_id = $1`;
    const result = await this.pool.query(query, [pk_id]);
    return (result.rowCount ?? 0) > 0;
  }

  async update(
    pk_id: string,
    item: Partial<SentimentData>
  ): Promise<SentimentData | null> {
    const validColumns = this.columns.filter((key) => key in item);

    if (validColumns.length === 0) {
      throw new Error("No valid columns provided");
    }

    try {
      const setClause = validColumns
        .map((columnName, index) => `${columnName} = $${index + 2}`)
        .join(", ");

      const query = `
      UPDATE sentiment
      SET ${setClause}
      WHERE sentiment_id = $1
      RETURNING *
    `;

      const values = [
        pk_id,
        ...validColumns.map((key) => item[key as keyof SentimentData]),
      ];
      const result = await this.pool.query(query, values);

      return result.rows[0] || null;
    } catch (error) {
      console.log("🚀 ~ update ~ error:", error);
      throw error;
    }
  }

  async create(item: Partial<SentimentData>): Promise<SentimentData> {
    const validColumns = this.columns.filter((key) => key in item);
    if (validColumns.length === 0) {
      throw new Error("No valid columns provided");
    }

    const values = validColumns.map((key) => item[key as keyof SentimentData]);

    const parameterPlaceholders = values
      .map((_, index) => `$${index + 1}`)
      .join(", ");

    const query = `
      INSERT INTO sentiment (${validColumns.join(", ")})
      VALUES (${parameterPlaceholders})
      RETURNING *
    `;

    const result = await this.pool.query(query, values);
    if (!result.rows[0]) {
      throw new Error("Failed to create sentiment");
    }

    return result.rows[0];
  }

  async createMany(items: Partial<SentimentData>[]): Promise<SentimentData[]> {
    const results: SentimentData[] = [];

    // Slice the items array into chunks of 10
    const chunks = items.reduce((acc, item, index) => {
      const chunkIndex = Math.floor(index / 10);
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }

      acc[chunkIndex].push(item);
      return acc;
    }, [] as Partial<SentimentData>[][]);

    // Process each chunk of 10 items
    for (const chunk of chunks) {
      // Process each sentiment item within the chunk
      for (const sentiment of chunk) {
        // Create individual sentiment in the database
        const result = await this.create(sentiment);
        results.push(result);
      }
    }

    return results;
  }

  async count(): Promise<number> {
    const query = `SELECT COUNT(*) FROM sentiment`;
    const result = await this.pool.query(query);
    return result.rows[0].count;
  }

  async pagination(params: PaginationParams): Promise<SentimentData[]> {
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
      SELECT * FROM sentiment
      ORDER BY ${params.sortBy} ${params.sortOrder}
      LIMIT ${params.pageSize} OFFSET ${offset}
    `;

    const result = await this.pool.query(query);
    return result.rows;
  }
}
