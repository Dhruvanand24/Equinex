import {Router} from "express";
import { order } from "../controllers/order.controller.js";

const router = Router()

router.route("/update/:id").post(order)

export default router

