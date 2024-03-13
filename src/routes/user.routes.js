import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  loginUser,
  logoutUser,
  registerUser,
  refreshAccessToken,
  getCurrentUser,
  getAllUsers,
  getUserById,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);
router.route("/getoneuser").post(getUserById);
router.route("/getallusers").get(getAllUsers);
//secured routes

router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refreshToken").post(refreshAccessToken);
router.route("/current-user").get(verifyJWT, getCurrentUser);


export default router;
