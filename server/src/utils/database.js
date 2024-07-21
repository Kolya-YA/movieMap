import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";
import logger from "./logger.js";

const clientOptions = {
	serverApi: { version: '1', strict: true, deprecationErrors: true },
};

const connectDB = async () => {
	try {
		if (MONGODB_URI === undefined) {
			throw new Error("MONGODB_URI is not	defined");
		}
		const conn = await mongoose.connect(MONGODB_URI, clientOptions);
		await mongoose.connection.db.admin().command({ ping: 1 });
		logger.info(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		logger.error(error);
		await mongoose.disconnect();
	}
};

export default connectDB;