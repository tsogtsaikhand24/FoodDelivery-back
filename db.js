const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.NEW_MONGODB_URL);
    console.log("DATABASE connection success");
  } catch (err) {
    console.error("DATABASE connection failed:", err.message);
  }
};

module.exports = connectToDB;
