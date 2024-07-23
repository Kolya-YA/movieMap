import User from "../../models/user.js";

const createNewUser = async (req, res, next) => {
	try {
		const newUser = new User(req.body);
		const savedUser = await newUser.save();

		return res.status(201).json({
			message: "New user created",
			savedUser: {
				email: savedUser.email,
				id: savedUser.id,
			},
		});
	} catch (error) {
		next(error);
	}
};

export default createNewUser;
