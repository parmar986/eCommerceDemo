const express = require("express");
const {
  placeOrder,
  getOrderHistory,
} = require("../controllers/orderController");
const authMiddleware = require("../MiddleWares/auth");
const router = express.Router();

router.post("/:userId", authMiddleware, placeOrder);

// Get order history for a user
router.get("/:userId", authMiddleware, getOrderHistory);

module.exports = router;
