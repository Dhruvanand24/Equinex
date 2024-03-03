import { Router } from "express";
import {
  CreateGRN,
  UpdateReceivedData,
  UpdateQCData,
} from "../controllers/grn.controller.js";
const router = Router();
router.route("/creategrn").post(CreateGRN);
router.route("/updatereceiveddata").post(UpdateReceivedData);
router.route("/updateqcdata").post(UpdateQCData);

export default router;
