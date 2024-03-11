import { Router } from "express";
import { CreateWarehouse, GetAllWarehouse } from "../controllers/warehouse.controller.js";
const router = Router();
router.route("/createwarehouse").post(CreateWarehouse);
router.route("/getallwarehouse").get(GetAllWarehouse);
export default router;
