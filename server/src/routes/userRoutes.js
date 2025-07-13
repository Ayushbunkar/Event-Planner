// routes/userRoutes.js
import express from "express";
import multer from "multer";
import { GetProfile, UpdateProfile } from "../controllers/userController.js";
import { Protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// ⬇️ Temp file upload config (files go to temp_uploads folder)
const upload = multer({ dest: "temp_uploads/" });

// ✅ GET user profile
router.get("/profile", Protect, GetProfile);

// ✅ PUT update profile (multipart/form-data)
router.put("/profile", Protect, upload.single("photoFile"), UpdateProfile);

export default router;
