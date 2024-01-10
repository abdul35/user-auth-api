import { validationResult } from "express-validator";
import { User } from "../db/models/user.model.js";
import { findByEmail, save } from "../services/user.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
	try {
		const errors = validationResult(req);

		if (errors.isEmpty()) {
			const { name, email, password } = req.body;
			const existUser = await findByEmail(email);

			if (existUser) {
				return res
					.status(400)
					.json({ success: false, message: "user already exists" });
			}

			const salt = await bcrypt.genSalt(10);
			const hashedPass = await bcrypt.hash(password, salt);
			console.log(hashedPass);
			const user = {
				name,
				email,
				password: hashedPass,
			};

			const savedUser = await save(user);
			if (savedUser) {
				return res
					.status(201)
					.json({
						success: true,
						message: "user created",
						user: { name, email },
					});
			}
		}

		res.status(400).json(errors.errors);
	} catch (e) {
		throw Error(e.message);
	}
};

export const login = async (req, res) => {
	try {
		const errors = validationResult(req);

		if (errors.isEmpty()) {
			const { email, password } = req.body;

			const foundUser = await findByEmail(email);

			if (!foundUser) {
				return res
					.status(404)
					.json({ success: false, message: "user not exists" });
			}

			const comparePass = await bcrypt.compare(
				password,
				foundUser.password
			);

			if (!comparePass) {
				return res
					.status(404)
					.json({
						success: false,
						message: "the password or email is not correct",
					});
			}

			const token = jwt.sign({ email }, process.env.TOKEN_SECRET, {
				expiresIn: '15m',
			});

			return res
				.status(201)
				.json({ success: true, message: "user authorized", token });
		}

		res.status(400).json(errors.errors);
	} catch (e) {
		throw Error(e);
	}
};
