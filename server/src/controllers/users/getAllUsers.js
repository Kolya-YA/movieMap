import User from "../../models/User.js";

const getAllUsers = async (_req, res, next) => {
	// const users = [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Doe" }, { id: 3, name: "John Smith" }];

	try {
		const users = await User.find({});
		res.status(200).json(users);
	} catch (error) {
		next(error);
	}
};

export default getAllUsers;
