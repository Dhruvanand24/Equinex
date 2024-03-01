import { Router } from "express";
import { CreateSeller } from "../controllers/seller.controller.js";
const router = Router();
router.route("/createseller").post(CreateSeller);

export default router;
