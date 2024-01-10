import multer from "multer";

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "public/");
	},
	filename: (req, file, cb) => {
		const fileName = Date.now() + "." + file.originalname;

		cb(null, fileName);
	},
});

export const upload = multer({
	storage,
	limits: { fileSize: 1024 * 1024 * 10 },
	fileFilter: (req, file, cb) => {
		const allowedExts = ["image/png", "image/jpg", "image/jpeg"];
		console.log(file);
		if (allowedExts.includes(file.mimetype)) {
			cb(null, true);
		} else {
			return cb(new Error("Invalid mime type"));
		}
	},
});
