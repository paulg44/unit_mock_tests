import { pool } from "../server.js";

// Get all items
export async function getAllShopItems() {
  try {
    const client = await pool.connect();
    const getAllShopItemsQuery = await client.query("SELECT * FROM shopitems");
    client.release();
    return getAllShopItemsQuery.rows;
  } catch (error) {
    console.error("Error loading items:", error);
    throw error;
  }
}
