import 'dotenv/config'
import postgres from 'postgres';

// const http = require("http");
// const { neon } = require("@neondatabase/serverless");

const URL = process.env.DATABASE_URL

export const sql = postgres(URL, { ssl: 'require '})
