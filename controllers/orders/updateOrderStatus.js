const orderModel = require("../../schemas/orderSchema");

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, foodIds } = req.body;
    const order = await orderModel.findById(id);
    if (!order) return res.status(404).json({ message: "Захиалга байхгүй!" });

    order.status = status;

    if (Array.isArray(foodIds) && foodIds.length > 0) {
      order.FoodOrderItems = order.FoodOrderItems.map((food) =>
        foodIds.includes(food._id.toString())
          ? { ...food.toObject(), status }
          : food
      );
    } else {
      order.FoodOrderItems = order.FoodOrderItems.map((food) => ({
        ...food.toObject(),
        status,
      }));
    }

    await order.save();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = updateOrderStatus;
