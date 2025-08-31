const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

// Load environment variables
dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes (example)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${5000}`));