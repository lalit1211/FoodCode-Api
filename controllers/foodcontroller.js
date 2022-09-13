const catchAsync = require("../utils/catchAsunc.js");
const fs = require("fs");

// ******************** Get all recipe......................
const getRecipe = catchAsync((req, res, next) => {
	console.log("Hrushi");
	const recipe = fs.readFile(
		"./food.json",
		(err, data) => {
			res.status(200).json({
				status: "success",
				data,
			});
			// console.log(recipe);
		},
	);
});

// const getRecipe = (req, res) => {
// 	const recipe = fs.readFile(
// 		"../food.json",
// 		(err, data) => {
// 			console.log(data);
// 		},
// 	);
// };

module.exports = { getRecipe };
