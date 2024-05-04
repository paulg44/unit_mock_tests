import express from "express";

import * as shopItemController from "../controllers/shopItemsController.js";

export const shopItemRoutes = express.Router();

shopItemRoutes.get("/", shopItemController.getAllShopItemsController);
