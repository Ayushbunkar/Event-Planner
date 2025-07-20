// controllers/userController.js
import User from "../models/userModels.js";
import cloudinary from "cloudinary";

// GET PROFILE
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
    next(error);
  }
};

// UPDATE PROFILE
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

    if (req.file) {
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      const dataURI = `data:${req.file.mimetype};base64,${b64}`;

      const uploadResult = await cloudinary.v2.uploader.upload(dataURI, {
        folder: "eventPlannerPictures",
        width: 500,
        height: 500,
        crop: "fill",
      });

      photoUrl = uploadResult.secure_url;
    }

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
      { new: true } // returns updated doc
    );

    res.status(200).json({
      message: "Profile Updated Successfully",
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};
