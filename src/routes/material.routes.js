import { Router } from "express";
import {
  createMaterial,
  createMaterialRequest,
  getAllMaterial,
  getAllMaterialRequest,
} from "../controllers/material.controller.js";

const router = Router();
router.route("/createMaterial").post(createMaterial);
router.route("/getallmaterial").get(getAllMaterial);
router.route("/createMaterialRequest").post(createMaterialRequest);
router.route("/getallmaterialrequest").get(getAllMaterialRequest);

export default router;
