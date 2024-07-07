import express from "express";
 import protectroute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

 router.get("/", protectroute, getUsersForSidebar);

export default router;