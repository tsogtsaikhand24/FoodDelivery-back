const orderModel = require("../../schemas/orderSchema");

const getOrders = async (req, res) => {
  try {
    const orders = await orderModel
      .find()
      .populate("user", "email")
      .populate("FoodOrderItems.food", "name price");

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getOrders;
