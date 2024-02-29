import {Router} from "express";
import {upload} from "../middlewares/multer.middleware.js"
import { registerUser } from "../controllers/user.controller.js";
import { User } from "../models/user.model.js";
const router = Router()

router.route("/register").post(
    registerUser)

router.route("/create-order").post(async (req,res)=>{
console.log(req.body);
})


export default router