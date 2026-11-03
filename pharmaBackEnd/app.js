require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contacts");
const productsRouter = require("./routes/products");
const paymentRoutes = require("./routes/payment");

const app = express();

// =====================================================
// CONNECT MONGODB
// =====================================================

connectDB();

// =====================================================
// MIDDLEWARE
// =====================================================

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// =====================================================
// TEST ROUTE
// =====================================================

app.get("/", function (req, res) {
  res.json({
    message: "Backend is working",
  });
});

// =====================================================
// API ROUTES
// =====================================================

app.use("/api/contacts", contactRoutes);

app.use("/api/products", productsRouter);

app.use("/api/payment", paymentRoutes);

// =====================================================
// PORT
// =====================================================

const PORT = process.env.PORT || 5000;

// =====================================================
// START SERVER
// =====================================================

app.listen(PORT, function () {
  console.log("Server running on port " + PORT);
});

module.exports = app;