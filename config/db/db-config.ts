import pg, { PoolConfig } from "pg";
const { Pool } = pg;

// Pool config
// - Use environment variables to connect to the database
const poolConfig: PoolConfig = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  database: process.env.PGDATABASE,
};

// Create a pool of connections to the database
const pool = new Pool(poolConfig);

export default pool;
