const express = require("express");
const fs = require("fs");

app = express();
// app.use(morgan("dev"));
// app.use(express.json());

// ***********************
// const food = fs.readFile("./food.json", (err, data) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// 	_(JSON.parse(data));
// });

const foodRoute = require("./routes/food.routes");
console.log("Jerry");
app.use("/api/vi/", foodRoute);

// require("./controllers/foodntroller");

// app.get("/", (req, res) => {
// 	const food = fs.readFile("./food.json", (err, data) => {
// 		if (err) {
// 			console.log(err);
// 			return;
// 		}
// 		// _(JSON.parse(data));
// 		res.status(200).json({
// 			data: JSON.parse(data),
// 		});
// 	});
// });

// **************** Global Error Handling .................
app.use((err, req, res, next) => {
	const errstatus = err.statusCode || 500;
	const message = err.message || "Something went wrong";
	const status = err.status || "Error";

	res.status(errstatus).json({
		message,
		status,
	});
});
// const foodRoute = require("./routes/get.food.routes");
// app.use("/api/v1", foodRoute);

app.all("*", (req, res) => {
	res.status(404).json({
		status: "fail",
		message: "Not found",
	});
});

module.exports = app;
// http://localhost:8000/api/v1/
