const isOwner = (req, res, next) => {
	if (req.userId !== req.body?.id) {
		return res.status(403).json({ error: "Owner access required" });
	}
	next();
};

export default isOwner;
