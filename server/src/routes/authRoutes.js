import express from 'express';
import { Login, Logout, Register } from '../controllers/authcontroller.js';
import { sample2,sample3 } from '../middleweares/authMiddlewear.js';




const router =express.Router();

router.post("/register",Register);
router.post("/login",sample2,Login);
router.post("/logout",sample3, sample2,Logout);
export default router;