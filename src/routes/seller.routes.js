import { Router } from "express";
import { CreateSeller, GetAllSellers } from "../controllers/seller.controller.js";
const router = Router();
router.route("/createseller").post(CreateSeller);
router.route("/getallsellers").get(GetAllSellers);

export default router;
