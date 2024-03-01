import { Router } from "express";
import { materialRequest, challan } from "../controllers/materialRequest.controller.js";

const router = Router();

router.route("/update/:id").put(materialRequest);

router.route("/:id/challan").get(challan);

export default router;
