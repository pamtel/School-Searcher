import express from "express";
import UserServices from "./service";

const router = express.Router();

router.post("/login", UserServices.loginSchool);
router.post("/register", UserServices.registerSchool);

export default router;