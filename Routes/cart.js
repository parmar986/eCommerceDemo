const express = require("express");
const {
  addToCart,
  removeFromCart,
  getCart,
} = require("../Controllers/cartController");
const authMiddleware = require("../MiddleWares/auth");

const router = express.Router();

// Add product to cart
router.post("/:userId", authMiddleware, addToCart);

// Remove product from cart
router.delete("/:userId/:productId", authMiddleware, removeFromCart);

// Get user's cart
router.get("/:userId", authMiddleware, getCart);

module.exports = router;
