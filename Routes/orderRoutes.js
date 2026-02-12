const express = require("express");
const createOrder = require("../controllers/orders/createOrder");
const getOrders = require("../controllers/orders/getOrders");
const authMiddleware = require("../middleWare/authMiddleware");
const adminMiddleware = require("../middleWare/adminMiddleware");
const updateOrderStatus = require("../controllers/orders/updateOrderStatus");
const getUserOrders = require("../controllers/orders/getUserOrders");

const orderRouter = express.Router();

orderRouter.post("/", authMiddleware, createOrder);
orderRouter.get("/", authMiddleware, adminMiddleware, getOrders);
orderRouter.get("/user", authMiddleware, getUserOrders);
orderRouter.put("/:id/status", authMiddleware, adminMiddleware, updateOrderStatus);

module.exports = orderRouter;
