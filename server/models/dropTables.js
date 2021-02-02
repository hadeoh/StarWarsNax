  
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

let dbUri = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: dbUri,
});

pool.on('connect', () => {
  console.log('connected to the database');
});

/**
 * Drop Tables
 */
const dropTable = async (queryText) => {
  await pool.query(queryText);
  pool.end();
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

const QueryText = 'DROP TABLE IF EXISTS comments';
dropTable(QueryText);