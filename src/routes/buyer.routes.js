import { Router } from "express";
import { CreateBuyer } from "../controllers/buyer.controller.js";
const router = Router();
router.route("/createbuyer").post(CreateBuyer);

export default router;
