const UserModel = require("../schemas/userSchema");

const isUserExist = async (req, res, next) => {
  const { email } = req.body;
  if (!email) return res.status(400).json("Email required");

  const user = await UserModel.findOne({ email });
  if (user) {
    return res.status(400).json("Email already exist");
  }

  next();
};

module.exports = isUserExist;
