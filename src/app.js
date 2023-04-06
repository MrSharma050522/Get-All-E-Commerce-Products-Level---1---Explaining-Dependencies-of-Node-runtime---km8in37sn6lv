const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// Middlewares
app.use(express.json());
const data = [
  {
    id: 1,
    name: "Nirma Powder",
    price: 2000,
    quantity: 50,
  },
  {
    id: 2,
    name: "Wheel",
    price: 2500,
    quantity: 50,
  },
  {
    id: 3,
    name: "Ariel",
    price: 3000,
    quantity: 50,
  },
  {
    id: 4,
    name: "Imapct ",
    price: 2800,
    quantity: 50,
  },
];

// fs.readFile("data/products.json", (err, data) => {
//   console.log(data);
// });
// Write GET endpoint for sending all the products to client here
// Endpoint - /api/v1/products
app.get("/api/v1/products", (req, res) => {
  res.statusCode = 200;
  res.send(
    JSON.stringify({
      status: "success",
      message: "Product fetched successfully",
      data: data,
    })
  );
});

module.exports = app;
