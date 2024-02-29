import {Router} from "express";
import { materialRequest } from "../controllers/materialRequest.controller.js";

const router = Router()

router.route("/update/:id").post(materialRequest)

export default router

