const CategoryModel = require("../../schemas/foodCategory");

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    await CategoryModel.findByIdAndDelete(id);
    res.status(200).json("Category Deleted successfully");
  } catch (err) {
    res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = deleteCategory;
