import express from "express";
import { upload } from "../services/file-upload.service.js";
import { register, login } from "../controllers/auth.controller.js";
import { updateUser, getOne, getList } from "../controllers/user.controller.js";
import { registerValidator } from "../helpers/auth/register-validator.helper.js";
import { authorizationValidator } from "../helpers/auth/authorization-validator.helper.js";
import { guard } from "../helpers/guard.helper.js";


export const router = express.Router();


router.post("/user/register", registerValidator, register);

router.post("/user/login", authorizationValidator, login);

router.put("/profile/:id", guard, upload.single("photo"), updateUser);

router.get("/profile/:id", guard, getOne);

router.get("/profiles", guard, getList);
