const orderModel = require("../../schemas/orderSchema");

function generateOrderNumber() {
  return Math.floor(10000 + Math.random() * 90000);
}

async function createUniqueOrderNumber() {
  let num;
  let exists = true;

  while (exists) {
    num = generateOrderNumber();
    exists = await orderModel.findOne({ orderNumber: num });
  }

  return num;
}

const createOrder = async (req, res) => {
  try {
    const { totalPrice, FoodOrderItems, status, deliveryLocation } = req.body;
    const user = req.userId;

    if (!user) {
      return res.status(401).json({ message: "newterj orno uu!" });
    }

    if (!totalPrice || !FoodOrderItems || FoodOrderItems.length === 0) {
      return res.status(400).json({ message: "buh talbariig boglono uu!!!" });
    }

    const orderNumber = await createUniqueOrderNumber();

    const newOrder = await orderModel.create({
      user,
      totalPrice,
      FoodOrderItems,
      deliveryLocation,
      status: status || "pending",
      orderNumber,
    });

    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = createOrder;
