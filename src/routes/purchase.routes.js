import { Router } from "express";
import {
  CreatePurchaseRequest,
  CreatePurchaseOrder,
  GetAllMaterialListOfPurchaseOrder,
  GetAllPurchaseRequest,
  GetAllApprovedPurchaseRequest
} from "../controllers/purchase.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();
router.route("/createpurchaserequest").post(verifyJWT, CreatePurchaseRequest);
router.route("/createpurchaseorder").post(CreatePurchaseOrder);
router
  .route("/getallmateriallistofpurchaseorder")
  .post(GetAllMaterialListOfPurchaseOrder);
router.route("/getallpurchaserequest").get(GetAllPurchaseRequest);
router.route("/getallapprovedpurchaserequest").get(GetAllApprovedPurchaseRequest);

export default router;
