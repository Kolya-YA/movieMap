import User from "../../models/user.js";

const getAllUsers = async (_req, res, next) => {

	try {
		const users = await User.find({});
		res.status(200).json(users);
	} catch (error) {
		next(error);
	}
};

export default getAllUsers;
