import { Router } from "express";
import { createMaterial,createMaterialRequest } from "../controllers/material.controller.js";

const router = Router();
router.route("/createMaterial").post(createMaterial);
router.route("/createMaterialRequest").post(createMaterialRequest);

export default router;
