const express = require("express");
const cors = require("cors");

const comments = require("./data/comment.json");
const chefs = require("./data/chef.json");
const recipes = require("./data/recipe.json");

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

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefs.find((chef) => chef.id === parseInt(id));
  res.json(selectedChef);
});

app.get("/recipes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedRecipe = recipes.filter((recipe) => recipe.id === id);
  res.json(selectedRecipe);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
