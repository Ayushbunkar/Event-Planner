// controllers/userController.js

import User from "../models/userModels.js";
import path from "path";

// GET Profile
export const GetProfile = async (req, res, next) => {
  try {
    const currentUser = req.user;

    if (!currentUser) {
      return res.status(401).json({ message: "User not found. Please log in again." });
    }

    res.status(200).json({
      message: `Welcome back, ${currentUser.name}`,
      data: currentUser,
    });
  } catch (error) {
    next(error);
  }
};

// UPDATE Profile
export const UpdateProfile = async (req, res, next) => {
  try {
    const currentUser = req.user;

    if (!currentUser) {
      return res.status(401).json({ message: "Unauthorized user" });
    }

    const { name, email, phone } = req.body;

    // Update fields if they are present in the request body
    if (name !== undefined) currentUser.name = name;
    if (email !== undefined) currentUser.email = email;
    if (phone !== undefined) currentUser.phone = phone;

    // Handle profile image upload
    if (req.file) {
      const imagePath = `/uploads/${req.file.filename}`; // public URL path
      currentUser.profilePicture = imagePath; // assuming your schema supports this field
    }

    const updatedUser = await currentUser.save();

    res.status(200).json({
      message: "Profile updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};
