import pg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pg;
dotenv.config();

let dbURI = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: dbURI,
});

pool.on('connect', () => {
  console.log('connected to the database');
});

pool.on('error', (err) => {
  console.log(err);
});

const createTableSchema = async () => {
    const sqlText = `
      CREATE TABLE comments (
              id SERIAL PRIMARY KEY NOT NULL,
              episodeId INT NOT NULL,
              body VARCHAR(500) NOT NULL,
              ipAddress VARCHAR(128) NOT NULL,
              createdAt TIMESTAMP DEFAULT now()
            );`;
    await pool.query(sqlText);
    pool.end();
};
  
createTableSchema();