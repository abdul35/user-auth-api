import jwt from "jsonwebtoken";

export const guard = (req, res, next) => {
	try {
		const rawToken = req.headers.authorization;
		if (!rawToken) {
			return res
			.status(400)
			.json({ success: false, message: "not correct token" });
		}
		const token = rawToken.split(" ")[1];
		console.log(token);
		if (token) {
			const decode = jwt.verify(token, process.env.TOKEN_SECRET);
			if (!decode) {
                return res
                    .status(400)
                    .json({ success: false, message: "not correct token" });
                }
				next();
		}
	} catch (err) {
		throw new Error(err.message);
	}
};