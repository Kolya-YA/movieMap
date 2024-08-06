const errorHandler = (err, req, res, next) => {
	console.error(err.stack);

	// Mongoose validation error
	if (err.name === "ValidationError") {
		return res.status(400).json({
			error: "Validation Error",
			details: err.errors,
		});
	}

	// Mongoose cast error (invalid ObjectId)
	if (err.name === "CastError") {
		return res.status(400).json({
			error: "Invalid ID",
			details: err.message,
		});
	}

	// Axios error
	if (err.isAxiosError) {
		return res.status(err.response?.status || 500).json({
			error: "External API Error",
			details: err.message,
		});
	}
	
	// Default error
	if (err) {
		res.status(500).json({
			error: "Internal Server Error",
			details:
				process.env.NODE_ENV === "production"
					? "Something went wrong"
					: err.message,
		});
	}

	next(err);
};

export default errorHandler;
