// controllers/orderController.js
const Order = require("../models/postgres/order");
const OrderItem = require("../models/postgres/orderItems");
const Product = require("../models/mongo/product");
const Cart = require("../models/mongo/cart");

// Place an order
const placeOrder = async (req, res) => {
  const { userId } = req.params;
  const { shippingAddress, paymentStatus } = req.body;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart || cart.items.length === 0)
      return res.status(400).json({ message: "Cart is empty" });

    const totalAmount = await calculateTotalAmount(cart.items);
    const order = await Order.create({
      userId,
      shippingAddress,
      paymentStatus,
      totalAmount,
    });

    const orderItems = cart.items.map((item) => ({
      orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
      price: item.productId.price,
    }));

    await OrderItem.bulkCreate(orderItems);
    await Cart.findOneAndUpdate({ userId }, { $set: { items: [] } });

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Get order history
const getOrderHistory = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.findAll({
      where: { userId },
      include: [
        {
          model: OrderItem,
          include: [Product],
        },
      ],
    });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Calculate total amount for an order
async function calculateTotalAmount(items) {
  let total = 0;
  for (const item of items) {
    const product = await Product.findById(item.productId);
    total += product.price * item.quantity;
  }
  return total;
}

module.exports = { placeOrder, getOrderHistory };
