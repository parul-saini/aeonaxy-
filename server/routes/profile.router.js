import { Router } from "express";
import  {upload}  from "../middleware/multer.js";
import {profile} from "../controllers/profile.controller.js";

const router= Router();

router.route("/:userId").post(upload.single('profileImage'), profile);

export default router;