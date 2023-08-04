const express = require("express");
const cors = require("cors");
const data = require("./data.json");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get("/products", (req, res) => {
  res.send(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
