require("dotenv").config();
const express = require("express");
const cors = require("cors"); // Import cors package
const bodyParser = require("body-parser"); // Import body-parser package
const authRoutes = require("./Routes/auth");
const productRoutes = require("./Routes/product");
const cartRoutes = require("./Routes/cart");
const orderRoutes = require("./Routes/order");
const path = require("path");
const connectMongoDB = require("./config/mongo");
const app = express();
const PORT = process.env.PORT;

connectMongoDB();
// Set view engine and views path
app.set("view engine", "ejs");
app.set("views", path.resolve("./Views"));

// Enable CORS for all routes (You can configure it further if needed)
app.use(cors());

// Use body-parser middleware for JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listens at PORT:${PORT}`);
});
