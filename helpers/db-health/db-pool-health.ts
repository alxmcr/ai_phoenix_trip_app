import { Pool } from "pg";

interface IDBPoolHealth {
  checkConnection(): Promise<boolean>;
  checkTablesAvailable(): Promise<string[]>;
}

export class DBPoolHealth implements IDBPoolHealth {
  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async checkConnection(): Promise<boolean> {
    try {
      // Basic query to check if the connection is working
      await this.pool.query("SELECT 1");
      return true;
    } catch (error) {
      console.error("Error checking connection:", error);
      return false;
    }
  }

  async checkTablesAvailable(): Promise<string[]> {
    const query = `
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema='public'
    `;

    const { rows } = await this.pool.query(query);
    return rows.map((row) => row.table_name);
  }
}
