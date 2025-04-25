import { DBOperations } from "@/generics/db/db-generics";
import { ActionableData } from "@/types/db/actionable";
import { WhereFilterBuilder } from "@/utils/db/builder-where-filter";
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
    const setClause = Object.keys(item)
      .map((key) => `${key} = $${key}`)
      .join(", ");

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

  async delete(pk_id: string): Promise<boolean> {
    const query = `DELETE FROM actionable WHERE actionable_id = $1`;
    const result = await this.pool.query(query, [pk_id]);
    return (result.rowCount ?? 0) > 0;
  }

  async insert(item: Partial<ActionableData>): Promise<ActionableData> {
    const query = `INSERT INTO actionable (actionable_id, review_id, priority, department, category, source_aspect, title, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
    const result = await this.pool.query(query, [
      item.actionable_id,
      item.review_id,
      item.priority,
      item.department,
      item.category,
      item.source_aspect,
      item.title,
      item.description,
    ]);

    return result.rows[0];
  }

  async insertMany(
    items: Partial<ActionableData>[]
  ): Promise<ActionableData[]> {
    const query = `INSERT INTO actionable (actionable_id, review_id, priority, department, category, source_aspect, title, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
    const result = await this.pool.query(query, [
      items.map((item) => [
        item.actionable_id,
        item.review_id,
        item.priority,
        item.department,
        item.category,
        item.source_aspect,
        item.title,
        item.description,
      ]),
    ]);

    return result.rows;
  }

  async filter(filters: Partial<ActionableData>): Promise<ActionableData[]> {
    const whereBuilder = new WhereFilterBuilder();

    const whereClause = whereBuilder.where(filters);

    const query = `SELECT * FROM actionable WHERE ${whereClause}`;
    const result = await this.pool.query(query, [...Object.values(filters)]);

    return result.rows;
  }
}
