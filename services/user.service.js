import { User } from "../db/models/user.model.js";

export const findByEmail = async (email) => {
	try {
		const user = await User.findOne({ where: { email } });
		return user;
	} catch (error) {
		throw new Error(error.message);
	}
};

export const findById = async (id) => {
	try {
		const user = await User.findOne({ where: { id } });
		return user;
	} catch (error) {
		throw new Error(error.message);
	}
};

export const save = async (user) => {
	try {
		const savedUser = await User.create(user);
		return savedUser;
	} catch (error) {
		throw new Error(error.message);
	}
};

export const update = async (user, id) => {
	try {
		const foundUser = await User.findOne({ where: { id } });
		const updatedUser = await foundUser.update(user);
		return updatedUser;
	} catch (error) {
		throw new Error(error.message);
	}
};

export const getByPage = async (page = 0) => {
	try {
        const offset = page === 1 ? null : page * 10
		const res = await User.findAll({
			limit: 10,
			offset,
			order: [['createdAt', 'DESC']],
            where: {}
		});
		return res;
	} catch (error) {
		throw new Error(error.message);
	}
};
