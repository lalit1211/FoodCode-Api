const chalk = require("chalk");
global._ = console.log;
global.__ = (_) => {
	console.log(chalk.blue(_));
};

require("./app");
app.listen(8000, () => {
	__("Server is running on Port 8000");
});
