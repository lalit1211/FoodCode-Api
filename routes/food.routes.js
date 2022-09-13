const express = require("express");
const controller = require("../controllers/foodcontroller");

const foodRoute = express.Router();

// console.log(controller.getRecipe, "hello");

foodRoute.route("/food").get(controller.getRecipe);

module.exports = foodRoute;
