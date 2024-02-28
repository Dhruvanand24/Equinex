import {Router} from "express";
import { home } from "../controllers/home.controller";

const router = Router()
router.route("/home").get((req, res), home)

export default router