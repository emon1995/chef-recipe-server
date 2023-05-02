const express = require("express");
const cors = require("cors");

const comments = require("./data/comment.json");
const chefs = require("./data/chef.json");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Food Chef welcome");
});

app.get("/comments", (req, res) => {
  res.json(comments);
});

app.get("/chefs", (req, res) => {
  res.json(chefs);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
