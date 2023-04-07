const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// Middlewares
app.use(express.json());

// Write GET endpoint for sending all the products to client here
// Endpoint - /api/v1/products
app.get("/api/v1/products/:name", (req, res) => {
  const { name } = req.params;
  if (products === null) {
    res.status(404).json({ message: "Product not found" });
  }
  let obj = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].name == name) {
      obj = products[i];
    }
    // console.log(products[i], name);
  }
  if (obj == null) {
    res.status(404).json({ status: "failed", message: "Product not found" });
  }
  res.status(200).json({
    status: "success",
    message: "Product fetched successfully",
    data: { product: products },
  });
});

module.exports = app;
