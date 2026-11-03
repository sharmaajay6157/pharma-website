const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },

    therapeuticArea: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 200,
      max: 1000,
    },
  },
  {
    timestamps: true,
    collection: "ProductDetails",
  },
);

module.exports = mongoose.model("Product", productSchema);
