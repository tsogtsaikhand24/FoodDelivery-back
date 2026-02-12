const foodModel = require("../../schemas/food");

const deleteFood = async (req, res) => {
  const { id } = req.params;
  try {
    await foodModel.findByIdAndDelete(id);

    res.status(200).json("Food Deleted successfully");
  } catch (err) {
    res.status(500).json(`Something went wrong;  ${err}`);
  }
};

module.exports = deleteFood;
