// routes/userRoutes.js
import express from "express";
import { GetProfile, UpdateProfile } from "../controllers/userController.js";
import { Protect } from "../middlewares/authMiddleware.js";
import multer from "multer";

// Temp file storage (used before uploading to Cloudinary)
const upload = multer({ dest: "temp_uploads/" });

const router = express.Router();

// GET user profile (requires login)
router.get("/profile", Protect, GetProfile);

// PUT update profile with optional photo (multipart/form-data)
router.put("/profile", Protect, upload.single("photo"), UpdateProfile);


export default router;
