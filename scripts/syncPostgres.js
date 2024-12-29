const sequelize = require("../config/postgres");
const User = require("../models/postgres/user");
const Order = require("../models/postgres/order");
const OrderItem = require("../models/postgres/orderItems");

(async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected!");
    await sequelize.sync({ force: true }); // WARNING: This drops and recreates tables
    console.log("PostgreSQL tables synced!");
  } catch (error) {
    console.error("Error syncing PostgreSQL:", error);
  } finally {
    process.exit();
  }
})();
