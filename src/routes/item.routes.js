import { Router } from "express";
import { createItem } from "../controllers/item.controller.js";

const router = Router();
router.route("/createitem").post(createItem);

export default router;
