const foodModel = require("../../schemas/food");

const getFoodsByIds = async (req, res) => {
  const { ids } = req.body;
  try {
    const foods = await foodModel.find({ _id: { $in: ids } });
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: "Error fetching foods", error: err });
  }
};

module.exports = getFoodsByIds;
