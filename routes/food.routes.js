const express = require("express");
const controller = require("../controllers/foodcontroller");

const foodRoute = express.Router();

// console.log(controller.getRecipe, "hello");

foodRoute.route("/food").get(controller.getRecipe);
foodRoute.route("/add").post(controller.addRecipe);
foodRoute
	.route("/delete/:id")
	.delete(controller.deleteRecipe);

module.exports = foodRoute;
