import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";
config({ path: "./.env.local" });

console.log(
  "cred",
  process.env.DB_NAME,
  process.env.DB_HOST,
  process.env.DB_USER,
  process.env.DB_PASSWORD
);

export default defineConfig({
  dialect: "mysql",
  schema: "./src/db/schema.ts",
  out: "./src/db/drizzle",
  dbCredentials: {
    database: process.env.DB_NAME!,
    host: process.env.DB_HOST!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
  },
});
