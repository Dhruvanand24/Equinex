import { Router } from "express";
import { CreateDepartment } from "../controllers/department.controller.js";
const router = Router();
router.route("/createdepartment").post(CreateDepartment);

export default router;
