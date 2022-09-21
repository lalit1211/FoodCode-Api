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
	// console.log(newF);

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

module.exports = {
	getRecipe,
	addRecipe,
};
