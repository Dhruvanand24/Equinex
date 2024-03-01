import { Router } from "express";
import { CreatePurchaseRequest } from "../controllers/purchase.controller.js";
const router = Router();
router.route("/createpurchaserequest").post(CreatePurchaseRequest);

export default router;
