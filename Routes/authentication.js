const express = require("express");
const createUser = require("../controllers/user/CreateUser");
const loginUser = require("../controllers/authentication/loginUser");
const isUserExist = require("../middleWare/isUserExist");
const EmailExist = require("../middleWare/emailExist");

const AuthenticationRouter = express.Router();

AuthenticationRouter.post("/login", EmailExist, loginUser);
AuthenticationRouter.post("/sign-up", isUserExist, createUser);

module.exports = AuthenticationRouter;
