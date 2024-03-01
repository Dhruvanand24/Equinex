import { Router } from "express";
import {
  CreateGRN,
  UpdateReceivedData,
} from "../controllers/grn.controller.js";
const router = Router();
router.route("/creategrn").post(CreateGRN);
router.route("/updatereceiveddata").post(UpdateReceivedData);

export default router;
