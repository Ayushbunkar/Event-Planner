import User from "../models/userModels.js";
import cloudinary from "cloudinary";

// ✅ Cloudinary Configuration (make sure .env is loaded before this)
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ GET /user/profile
export const GetProfile = async (req, res, next) => {
  try {
    const currentUser = req.user;
    if (!currentUser) {
      return res.status(401).json({ message: "User not found. Please login again." });
    }

    res.status(200).json({
      message: `Welcome back ${currentUser.name}`,
      data: currentUser,
    });
  } catch (error) {
    console.error("❌ GetProfile Error:", error.message);
    next(error);
  }
};

// ✅ PUT /user/profile
export const UpdateProfile = async (req, res, next) => {
  try {
    const currentUser = req.user;
    if (!currentUser) {
      return res.status(401).json({ message: "User not found. Please login again." });
    }

    const {
      name,
      gender,
      occupation,
      address,
      city,
      district,
      state,
      representing,
      phone,
    } = req.body;

    let photoUrl = currentUser.photo;

    // ✅ If new photo uploaded, send to Cloudinary
    if (req.file) {
      const base64 = Buffer.from(req.file.buffer).toString("base64");
      const dataURI = `data:${req.file.mimetype};base64,${base64}`;

      const uploadResult = await cloudinary.v2.uploader.upload(dataURI, {
        folder: "eventPlannerPictures",
        width: 500,
        height: 500,
        crop: "fill",
      });

      photoUrl = uploadResult.secure_url;
    }

    // ✅ Update user data
    const updatedUser = await User.findByIdAndUpdate(
      currentUser._id,
      {
        name,
        gender,
        occupation,
        address,
        city,
        district,
        state,
        representing,
        phone,
        photo: photoUrl,
      },
      { new: true }
    );

    res.status(200).json({
      message: "Profile Updated Successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.error("❌ UpdateProfile Error:", error.message);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
};
