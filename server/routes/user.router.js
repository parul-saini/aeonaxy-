import {Router} from "express";
import {Register, getUser } from "../controllers/user.controller.js";

const router= Router();

router.route("/create-account").post(Register);
router.route("/:userId").get(getUser);

export default router;