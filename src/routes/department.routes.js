import { Router } from "express";
import { CreateDepartment, GetAllDepartment } from "../controllers/department.controller.js";
const router = Router();
router.route("/createdepartment").post(CreateDepartment);
router.route("/getalldepartment").get(GetAllDepartment);

export default router;
