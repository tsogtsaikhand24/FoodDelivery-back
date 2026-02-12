const foodModel = require("../../schemas/food");

const createFood = async (req, res) => {
  try {
    const { foodName, foodPrice, foodIngredients, foodImage, category } =
      req.body;

    if (!foodName || !foodPrice || !foodIngredients || !foodImage) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newFood = await foodModel.create({
      foodName,
      foodPrice,
      foodIngredients,
      foodImage,
      category,
    });

    res.status(201).json({
      message: "Food created successfully",
      food: newFood,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = createFood;
