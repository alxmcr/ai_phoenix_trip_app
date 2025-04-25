import { DBAggregateFunctions, DBOperations } from "@/generics/db/db-generics";
import { ActionableData } from "@/types/db/actionable";
import { WhereFilterBuilder } from "@/utils/db/builder-where-filter";
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
    const setClause = this.columns
      .filter((key) => key in item)
      .map((key, index) => `${key} = $${index + 1}`)
      .join(", ");

    const query = `
      UPDATE actionable
      SET ${setClause}
      WHERE actionable_id = $${
        this.columns.filter((key) => key in item).length + 1
      }
      RETURNING *
    `;

    const values = [
      ...this.columns
        .filter((key) => key in item)
        .map((key) => item[key as keyof ActionableData]),
      pk_id,
    ];

    const result = await this.pool.query(query, values);
    return result.rows[0] || null;
  }

  async create(item: Partial<ActionableData>): Promise<ActionableData> {
    const validColumns = this.columns.filter((key) => key in item);
    const values = validColumns.map((key) => item[key as keyof ActionableData]);

    const query = `
      INSERT INTO actionable (${validColumns.join(", ")})
      VALUES (${values.map((_, index) => `$${index + 1}`).join(", ")})
      RETURNING *
    `;

    const result = await this.pool.query(query, values);
    return result.rows[0];
  }

  async count(): Promise<number> {
    const query = `SELECT COUNT(*) FROM actionable`;
    const result = await this.pool.query(query);
    return result.rows[0].count;
  }
}
