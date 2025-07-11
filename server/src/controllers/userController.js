import User from "../models/userModels.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

// GET user profile
export const GetProfile = async (req, res, next) => {
  try {
    const currentUser = req.user;
    if (!currentUser) return res.status(401).json({ message: "User not found." });

    res.status(200).json({
      message: `Welcome back, ${currentUser.name}`,
      data: currentUser,
    });
  } catch (error) {
    next(error);
  }
};
export const UpdateProfile = async (req, res, next) => {
  try {
    console.log("REQ BODY:", req.body);
    console.log("REQ FILE:", req.file);
    const currentUser = req.user;
    if (!currentUser) return res.status(401).json({ message: "Unauthorized" });

    // ... update fields

    if (req.file) {
      console.log("Uploading to Cloudinary:", req.file.path);
      const result = await cloudinary.uploader.upload(req.file.path, { folder: "user-profiles" });
      currentUser.photo = result.secure_url;
      fs.unlinkSync(req.file.path);
    }

    const saved = await currentUser.save();
    return res.status(200).json({ message: "Profile updated", data: saved });
  } catch (error) {
    console.error("❌ UpdateProfile crashed:", error);
    return res.status(500).json({ message: "Server error while updating profile.", details: error.message });
  }
};
