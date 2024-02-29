import { Router } from "express";
import { CreateProcess } from "../controllers/process.controller.js";
const router = Router();
router.route("/createprocess").post(CreateProcess);

export default router;
