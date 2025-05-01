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
  private columns = [
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
  ];

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

    // Slice the items array into chunks of 10
    const chunks = items.reduce((acc, item, index) => {
      const chunkIndex = Math.floor(index / 10);
      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }
      acc[chunkIndex].push(item);
      return acc;
    }, [] as Partial<ReviewData>[][]);

    // Process each chunk of 10 items
    for (const chunk of chunks) {
      // Process each review item within the chunk
      for (const review of chunk) {
        // Create individual review in the database
        const result = await this.create(review);
        results.push(result);
      }
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
    const sortBy = params.sortBy ?? "created_at";
    const sortOrder = params.sortOrder ?? "desc";
    const filterReviewData = params.filterReviewData ?? {};

    // Check if sortOrder is asc or desc
    if (sortOrder !== "asc" && sortOrder !== "desc") {
      throw new Error("Invalid sort order");
    }

    // Check if sortBy is a valid value
    if (!this.columns.includes(sortBy)) {
      throw new Error("Invalid sort by");
    }

    // Conditions: array of conditions
    const conditions: string[] = [];

    if (filterReviewData.review_id) {
      conditions.push(
        `review_id::TEXT ILIKE '%${filterReviewData.review_id}%'`
      );
    }

    if (filterReviewData.rating) {
      conditions.push(`rating ILIKE '%${filterReviewData.rating}%'`);
    }

    if (filterReviewData.start_date) {
      conditions.push(`start_date ILIKE '%${filterReviewData.start_date}%'`);
    }

    if (filterReviewData.end_date) {
      conditions.push(`end_date ILIKE '%${filterReviewData.end_date}%'`);
    }

    if (filterReviewData.destination) {
      conditions.push(`destination ILIKE '%${filterReviewData.destination}%'`);
    }

    if (filterReviewData.origin) {
      conditions.push(`origin ILIKE '%${filterReviewData.origin}%'`);
    }

    if (filterReviewData.transport_mode) {
      conditions.push(
        `transport_mode ILIKE '%${filterReviewData.transport_mode}%'`
      );
    }

    if (filterReviewData.trip_type) {
      conditions.push(`trip_type ILIKE '%${filterReviewData.trip_type}%'`);
    }

    if (filterReviewData.age_group) {
      conditions.push(`age_group ILIKE '%${filterReviewData.age_group}%'`);
    }

    if (filterReviewData.company_name) {
      conditions.push(
        `company_name ILIKE '%${filterReviewData.company_name}%'`
      );
    }

    if (filterReviewData.email) {
      conditions.push(`email ILIKE '%${filterReviewData.email}%'`);
    }

    if (filterReviewData.description) {
      conditions.push(`description ILIKE '%${filterReviewData.description}%'`);
    }

    const whereConditions = conditions.join(" AND ");

    const whereClause =
      whereConditions.length > 0 ? `WHERE ${whereConditions}` : "";

    // Build the query
    const query = `
      SELECT * FROM review
      ${whereClause}
      ORDER BY ${sortBy} ${sortOrder}
      LIMIT ${pageSize} OFFSET ${offset}
    `;

    const result = await this.pool.query(query);
    return result.rows;
  }
}
