import { Router } from "express";
import {
  createMaterial,
  createMaterialIssue,
  createMaterialRequest,
  getAllMaterial,
  getAllMaterialIssue,
  getAllMaterialRequest,
  getMaterialById,
  getMaterialRequestById,
  updateMaterialRequest,
} from "../controllers/material.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
router.route("/createMaterial").post(createMaterial);
router.route("/getallmaterial").get(getAllMaterial);
router.route("/createMaterialRequest").post(createMaterialRequest);
router.route("/getallmaterialrequest").get(getAllMaterialRequest);
router.route("/updatematerialrequest").post(verifyJWT, updateMaterialRequest);
router.route("/getmaterialbyid").post(getMaterialById);
router.route("/getmaterialrequestbyid").post(verifyJWT,getMaterialRequestById);
router.route("/creatematerialissue").post(verifyJWT,createMaterialIssue);
router.route("/getallmaterialissue").post(getAllMaterialIssue);

export default router;