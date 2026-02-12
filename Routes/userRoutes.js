const express = require("express");
const getUser = require("../controllers/user/getUserById");
const deleteUser = require("../controllers/user/deleteUser");
const createUser = require("../controllers/user/CreateUser");
const loginUser = require("../controllers/authentication/loginUser");
const { getMe } = require("../controllers/user/userController");
const authMiddleware = require("../middleWare/authMiddleware");
const adminMiddleware = require("../middleWare/adminMiddleware");

const userRouter = express.Router();

userRouter.get("/", authMiddleware, adminMiddleware, getUser);
userRouter.delete("/", authMiddleware, adminMiddleware, deleteUser);
userRouter.post("/", createUser);
userRouter.post("/login", loginUser);
userRouter.get("/me", authMiddleware, getMe);

module.exports = userRouter;
