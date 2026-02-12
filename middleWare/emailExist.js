const UserModel = require("../schemas/userSchema");

const EmailExist = async (req, res, next) => {
  const { email } = req.body;
  if (!email) return res.status(400).json("Email required");

  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(404).json("Email not found");
  }

  req.user = user;
  next();
};

module.exports = EmailExist;
