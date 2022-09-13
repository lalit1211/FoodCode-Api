// const catchAsync = (fn) => {
// 	return (req, res, next) => {
// 		fn(req, res, next).catch((e) => {
// 			next(e);
// 		});
// 	};
// };

// module.exports = catchAsync;

module.exports = (fun) => {
	const to_return = async (req, res, next) => {
		fun(req, res, next).catch(async (error) => {
			console.log(error);
			next(error);
		});
	};
	return to_return;
};
