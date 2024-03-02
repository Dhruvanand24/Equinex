import { Router } from "express";
import {
  CreatePurchaseRequest,
  CreatePurchaseOrder,
  GetAllMaterialListOfPurchaseOrder,
} from "../controllers/purchase.controller.js";
const router = Router();
router.route("/createpurchaserequest").post(CreatePurchaseRequest);
router.route("/createpurchaseorder").post(CreatePurchaseOrder);
router
  .route("/getallmateriallistofpurchaseorder")
  .post(GetAllMaterialListOfPurchaseOrder);

export default router;
