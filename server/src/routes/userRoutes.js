// routes/userRoutes.js

import express from "express";
import { GetProfile, UpdateProfile } from "../controllers/userController.js";
import { Protect } from "../middlewares/authMiddleware.js";
import multer from "multer";

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const router = express.Router();

// GET user profile (protected)
router.get("/profile", Protect, GetProfile);

// PUT update user profile (protected)
router.put("/update", Protect, upload.single("picture"), UpdateProfile);

export default router;
