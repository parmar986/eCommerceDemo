const mongoose = require("mongoose");
const Product = require("../models/mongo/product");
const connectMongoDB = require("../config/mongo");

const seedProducts = async () => {
  await connectMongoDB();

  const products = [
    {
      name: "Wireless Earbuds",
      description: "High-quality wireless earbuds with noise cancellation.",
      price: 49.99,
      stock: 150,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1580894747097-bfc1c62bda77",
    },
    {
      name: "Gaming Laptop",
      description: "Powerful gaming laptop with NVIDIA graphics.",
      price: 1299.99,
      stock: 30,
      category: "Computers",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
    {
      name: "Smartphone",
      description:
        "Latest model with a stunning display and powerful processor.",
      price: 799.99,
      stock: 100,
      category: "Mobile Phones",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    },
    {
      name: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with excellent sound quality.",
      price: 29.99,
      stock: 200,
      category: "Audio",
      image: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    },
    {
      name: "Running Shoes",
      description: "Comfortable and durable running shoes for all terrains.",
      price: 69.99,
      stock: 50,
      category: "Footwear",
      image: "https://images.unsplash.com/photo-1599058917210-bb17f98bd402",
    },
    {
      name: "Digital Watch",
      description: "Stylish digital watch with fitness tracking features.",
      price: 99.99,
      stock: 75,
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1519741491400-eca842ed7000",
    },
    {
      name: "Backpack",
      description: "Durable and spacious backpack for travel and daily use.",
      price: 39.99,
      stock: 120,
      category: "Bags",
      image: "https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875",
    },
    {
      name: "Desk Lamp",
      description:
        "LED desk lamp with adjustable brightness and color temperature.",
      price: 19.99,
      stock: 180,
      category: "Lighting",
      image: "https://images.unsplash.com/photo-1596720421442-c2f9b0f1d9c4",
    },
    {
      name: "Yoga Mat",
      description: "Non-slip yoga mat for comfortable workouts.",
      price: 24.99,
      stock: 60,
      category: "Fitness",
      image: "https://images.unsplash.com/photo-1599058917765-59a5d7d9dd0e",
    },
    {
      name: "Noise Cancelling Headphones",
      description: "Premium headphones with active noise cancelling.",
      price: 199.99,
      stock: 40,
      category: "Audio",
      image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23",
    },
    {
      name: "Office Chair",
      description: "Ergonomic office chair with lumbar support.",
      price: 149.99,
      stock: 25,
      category: "Furniture",
      image: "https://images.unsplash.com/photo-1553440569-bcc63803effe",
    },
    {
      name: "Action Camera",
      description: "Waterproof action camera with 4K recording.",
      price: 299.99,
      stock: 20,
      category: "Cameras",
      image: "https://images.unsplash.com/photo-1584534903761-4fa3dc4f1d8b",
    },
    {
      name: "Wireless Mouse",
      description: "Compact and efficient wireless mouse for laptops.",
      price: 14.99,
      stock: 300,
      category: "Computers",
      image: "https://images.unsplash.com/photo-1555617984-b8e0b3f76063",
    },
    {
      name: "Electric Kettle",
      description: "Fast boiling electric kettle with auto shut-off.",
      price: 34.99,
      stock: 80,
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1584727141171-2af04bde3e15",
    },
    {
      name: "Treadmill",
      description: "Folding treadmill with multiple speed settings.",
      price: 499.99,
      stock: 10,
      category: "Fitness",
      image: "https://images.unsplash.com/photo-1616786020631-17b1d77642b5",
    },
    {
      name: "Smart TV",
      description: "50-inch 4K Smart TV with streaming apps.",
      price: 599.99,
      stock: 15,
      category: "Electronics",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
    {
      name: "Coffee Maker",
      description: "Programmable coffee maker with brew strength control.",
      price: 89.99,
      stock: 100,
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    },
    {
      name: "Fitness Tracker",
      description: "Waterproof fitness tracker with heart rate monitor.",
      price: 59.99,
      stock: 130,
      category: "Fitness",
      image: "https://images.unsplash.com/photo-1554606497-f8c405540107",
    },
    {
      name: "Microwave Oven",
      description: "Compact microwave oven with multiple cooking presets.",
      price: 129.99,
      stock: 20,
      category: "Kitchen",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    },
    {
      name: "Tablet",
      description: "10-inch tablet with WiFi and 64GB storage.",
      price: 299.99,
      stock: 50,
      category: "Computers",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
  ];

  try {
    await Product.insertMany(products);
    console.log("Products seeded successfully!");
  } catch (error) {
    console.error("Error seeding products:", error);
  } finally {
    process.exit();
  }
};

seedProducts();
