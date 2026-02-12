const express = require("express");
const getFoods = require("../controllers/food/getFood");
const deleteFood = require("../controllers/food/deleteFood");
const updateFood = require("../controllers/food/updateFood");
const createFood = require("../controllers/food/CreateFood");
const getFoodsByIds = require("../controllers/food/getFoodsByIds");
const authMiddleware = require("../middleWare/authMiddleware");
const adminMiddleware = require("../middleWare/adminMiddleware");

const foodRouter = express.Router();

foodRouter.post("/", authMiddleware, adminMiddleware, createFood);
foodRouter.put("/", authMiddleware, adminMiddleware, updateFood);
foodRouter.get("/", getFoods);
foodRouter.delete("/:id", authMiddleware, adminMiddleware, deleteFood);

foodRouter.post("/get-by-ids", getFoodsByIds);

module.exports = foodRouter;
