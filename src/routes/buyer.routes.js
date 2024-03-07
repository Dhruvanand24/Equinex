import { Router } from "express";
import { CreateBuyer, GetAllBuyers } from "../controllers/buyer.controller.js";
const router = Router();
router.route("/createbuyer").post(CreateBuyer);
router.route("/getallbuyers").get(GetAllBuyers);
export default router;
