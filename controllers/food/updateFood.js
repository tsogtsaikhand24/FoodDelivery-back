const foodModel = require("../../schemas/food");

const updateFood = async (req, res) => {
  try {
    const { id, category, foodName, foodPrice, foodIngredients, foodImage } =
      req.body;

    if (!id) {
      return res.status(400).json({ message: "Food ID is required" });
    }

    let updateData = {
      category,
      foodName,
      foodPrice,
      foodIngredients,
    };

    // Frontend-ээс Cloudinary URL ирсэн бол
    if (foodImage) {
      updateData.foodImage = foodImage; // --> URL шууд хадгална
    }

    const updatedFood = await foodModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedFood) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json({
      message: "Food updated successfully",
      data: updatedFood,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error updating food",
      error: err.message,
    });
  }
};

module.exports = updateFood;
