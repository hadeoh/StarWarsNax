import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

let dbUri = process.env.DATABASE_URL;

const pool = new Pool({
    connectionString: dbUri,
  });
  export default {
    async query(text, params) {
        let res;
        try {
            res = await pool.query(text, params);
        } catch (error) {
            console.log(error);
        }
        return res;
    //   return new Promise((resolve, reject) => {
    //     pool.query(text, params)
    //       .then((res) => {
    //         resolve(res);
    //       })
    //       .catch((err) => {
    //         reject(err);
    //       });
    //   });
    },
  };