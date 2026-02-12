const foodModel = require("../../schemas/food");

const getFoods = async (req, res) => {
  try {
    const data = await foodModel.find().populate("category");

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(`something went wrong to getFoods: ${err}`);
  }
};

module.exports = getFoods;
