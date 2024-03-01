import { Router } from "express";
import {
  CreatePurchaseRequest,
  CreatePurchaseOrder,
} from "../controllers/purchase.controller.js";
const router = Router();
router.route("/createpurchaserequest").post(CreatePurchaseRequest);
router.route("/createpurchaseorder").post(CreatePurchaseOrder);

export default router;
