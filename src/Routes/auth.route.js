import express from "express";
import { logout,signup,login,check } from "../Controllers/auth.controller.js";
import { protectRoute } from "../Middleware/auth.middleware.js";
import {isAdmin} from "../Middleware/admin.middleware.js"
const router = express.Router();

router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.get("/check",protectRoute,check)

export default router;