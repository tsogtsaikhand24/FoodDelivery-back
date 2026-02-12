const orderModel = require("../../schemas/orderSchema");

const getUserOrders = async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) return res.status(401).json({ message: "newtej orno uu!!!" });

    const orders = await orderModel
      .find({ user: userId })
      .populate("FoodOrderItems.food");

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = getUserOrders;
