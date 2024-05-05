import express from "express";
import morgan from "morgan";
import pkg from "pg";
import cors from "cors";
import dotenv from "dotenv";
import { shopItemRoutes } from "./routes/shopItemsRoutes.js";

dotenv.config();

const { Pool } = pkg;

const app = express();
const connectionString = process.env.DB_STRING;
const PORT = process.env.PORT;

if (!connectionString) {
  throw new Error("No connection string, check env variables");
}

export const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/shop", shopItemRoutes);

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});
