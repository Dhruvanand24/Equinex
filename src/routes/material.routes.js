import { Router } from "express";
import { createMaterial } from "../controllers/material.controller.js";

const router = Router();
router.route("/createMaterial").post(createMaterial);

export default router;
