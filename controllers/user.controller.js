import { update, findById, getByPage } from "../services/user.service.js";

export const updateUser = async (req, res) => {
	try {
		const { name, lastName, email, sex } = req.body;
		const { id } = req.params;

		const user = {
			name,
			lastName,
			email,
			sex,
			photo: req.file.filename,
		};
		const updatedUser = await update(user, id);

		if (updatedUser) {
			return res.json({ success: true, file: req.file.filename });
		}
	} catch (e) {
		throw Error(e.message);
	}
};

export const getList = async (req, res) => {
	try {
		const { page } = req.query;

		const userList = await getByPage(page);
		res.json(userList);
	} catch (e) {
		throw Error(e.message);
	}
};

export const getOne = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await findById(id);
		return res.status(201).json(user);
	} catch (e) {
		throw Error(e.message);
	}
};
