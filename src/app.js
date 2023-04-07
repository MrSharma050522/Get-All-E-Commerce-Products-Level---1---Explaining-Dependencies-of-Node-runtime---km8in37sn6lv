const fs = require("fs");
const express = require("express");
const app = express();
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));
app.get("/api/v1/products", (req, res) => {
  if (products.length === 0) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json({
    status: "success",
    message: "Product fetched successfully",
    data: {
      products
    }
  });
});
module.exports = app;
