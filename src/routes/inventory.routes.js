import { Router } from "express";
import {
  getFullIventory,
  getMaterialStatus,
} from "../controllers/inventory.controller.js";

const router = Router();
router.route("/getfullinventory").get(getFullIventory);
router.route("/getmaterialstatus").post(getMaterialStatus);

export default router;
