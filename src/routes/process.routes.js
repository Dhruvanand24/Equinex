import { Router } from "express";
import { CreateProcess, GetAllProcesses } from "../controllers/process.controller.js";
const router = Router();
router.route("/createprocess").post(CreateProcess);
router.route("/getallprocesses").get(GetAllProcesses);

export default router;
