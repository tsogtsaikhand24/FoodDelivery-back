const CategoryModel = require("../../schemas/foodCategory");

const getCategories = async (req, res) => {
  try {
    const data = await CategoryModel.find().populate("foods");

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      message: "something went wrong to getCategories",
      error: err.message,
    });
  }
};

module.exports = getCategories;
