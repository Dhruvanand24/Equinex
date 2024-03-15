import { Router } from "express";
import {
  getFullIventory,
  getMaterialInventoryById,
  getMaterialStatus,
  updateInventory,
} from "../controllers/inventory.controller.js";

const router = Router();
router.route("/getfullinventory").get(getFullIventory);
router.route("/getmaterialstatus").post(getMaterialStatus);
router.route("/updateinventory").post(updateInventory);
router.route("/getmaterialinventorybyid").post(getMaterialInventoryById);

export default router;
