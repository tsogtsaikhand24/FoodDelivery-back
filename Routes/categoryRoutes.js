const express = require("express");
const authMiddleware = require("../middleWare/authMiddleware");
const adminMiddleware = require("../middleWare/adminMiddleware");
const createCategory = require("../controllers/category/createCategory");
const deleteCategory = require("../controllers/category/deleteCategory");
const getCategories = require("../controllers/category/getCategories");

const categoryRouter = express.Router();

categoryRouter.post("/", authMiddleware, adminMiddleware, createCategory);
categoryRouter.get("/", getCategories);
categoryRouter.delete("/:id", authMiddleware, adminMiddleware, deleteCategory);

module.exports = categoryRouter;
