import { Router } from "express";
import { CreateOrder, GetAllOrder } from "../controllers/order.controller.js";

const router = Router();
router.route("/createorder").post(CreateOrder);
router.route("/allorder").get(GetAllOrder);

export default router;
