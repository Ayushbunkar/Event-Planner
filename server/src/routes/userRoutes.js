// routes/userRoutes.js
import express from "express";
import multer from "multer";
import { GetProfile, UpdateProfile } from "../controllers/userController.js";
import { Protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// ✅ Use multer memory storage (for cloudinary upload)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ✅ GET /user/profile
router.get("/profile", Protect, GetProfile);

// ✅ PUT /user/profile
router.put("/profile", Protect, upload.single("photoFile"), UpdateProfile);

export default router;
