const catchAsync = require("../utils/catchAsunc.js");
const fs = require("fs");

let lastId;
// let index;
const idfinder = () => {
	var data = fs.readFileSync("./food.json");
	var myObject = JSON.parse(data);
	lastId = myObject[myObject.length - 1].id + 1;
	// console.log(myObject[myObject.length - 1].id);
	console.log(lastId);
};
// idfinder();

// function objectIndex(_, index) {
// 	var data = fs.readFileSync("./food.json");
// 	var myObject = JSON.parse(data);

// 	index = myObject.findIndex((obj) => {
// 		return obj.id === _;
// 	});
// }

// objectIndex();
// ******************** Get all recipe......................
const getRecipe = (req, res, next) => {
	const recipe = fs.readFile(
		"./food.json",
		"utf-8",
		(err, data) => {
			res.status(200).json({
				status: "success",
				data: JSON.parse(data),
			});
			// console.log(JSON.parse(data));
		},
	);
};
// ******************** End Get all recipe......................

// ******************** Add a recipe......................
const addRecipe = (req, res) => {
	idfinder();

	const {
		fname,
		ingradients,
		directions,
		descriptions,
		calories,
		image,
	} = req.body;
	const newF = {
		id: lastId,
		fname,
		ingradients,
		directions,
		descriptions,
		calories,
		image,
	};

	// Storing the JSON format data in myObject
	var data = fs.readFileSync("./food.json");
	var myObject = JSON.parse(data);

	myObject.push(newF);

	var newData2 = JSON.stringify(myObject);
	fs.writeFile("./food.json", newData2, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			res.status(200).json({
				status: "success",
				data: myObject,
			});
		}
	});
};

// ******************** End Add a recipe......................
// ******************** Delete a recipe......................
const deleteRecipe = (req, res) => {
	const { id } = req.params;

	var data = fs.readFileSync("./food.json");
	var myObject = JSON.parse(data);
	console.log(myObject);
	const index = myObject.findIndex((obj) => {
		return obj.id == id;
	});

	if (index == -1) {
		console.log("negative");
		res.status(400).json({
			message: "Please provide correct information",
			status: "error",
		});
	} else {
		const sliced = myObject.splice(index, 1);
		var newData2 = JSON.stringify(myObject);
		fs.writeFile(
			"./food.json",
			newData2,
			(err, data) => {
				console.log(err);
			},
		);

		res.status(200).json({
			status: "Item deleted successfully!",
			data: myObject,
		});
	}
};
// ******************** End Delete a recipe......................
// ******************** Update a recipe......................
const updateRecipe = (req, res) => {};
// ******************** End Update a recipe......................

// ******************** Modules exported .....................
module.exports = {
	getRecipe,
	addRecipe,
	deleteRecipe,
};
