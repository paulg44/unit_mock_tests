import * as shopItemModel from "../models/shopItemsModel.js";

export async function getAllShopItemsController(req, res) {
  try {
    const itemData = await shopItemModel.getAllShopItems();
    res.json(itemData).status(200);
    console.table(`Success, payload: ${itemData}`);
  } catch (error) {
    console.error("Error executing query:", error);
    req
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
}
