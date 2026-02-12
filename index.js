const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const UserModel = require("./schemas/userSchema");
require("dotenv").config();

const userRouter = require("./Routes/userRoutes");
const AuthenticationRouter = require("./Routes/authentication");
const categoryRouter = require("./Routes/categoryRoutes");
const foodRouter = require("./Routes/foodRoutes");
const orderRouter = require("./Routes/orderRoutes");

const app = express();
const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());

connectToDB();

app.use("/user", userRouter);
app.use("/authentication", AuthenticationRouter);

app.use("/category", categoryRouter);
app.use("/food", foodRouter);
app.use("/orders", orderRouter);

app.get("/", (req, res) => {
  res.send("hello world running");
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT} `);
});
