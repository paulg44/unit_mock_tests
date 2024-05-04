import express from "express";
import morgan from "morgan";
import pkg from "pg";
import cors from "cors";
import dotenv from "dotenv";
import { shopItemRoutes } from "./routes/shopItemsRoutes.js";

dotenv.config();

const { Pool } = pkg;

const app = express();
const connectionString = process.env.DB_CONNECTION_STRING;
const PORT = process.env.PORT;

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
