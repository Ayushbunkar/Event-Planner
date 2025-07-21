import express from "express";
import { SubmitContactForm } from "../controllers/contactController.js";

const router = express.Router();

router.post("/submit", SubmitContactForm);

export default router;
