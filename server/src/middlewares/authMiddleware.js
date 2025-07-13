import jwt from "jsonwebtoken";
import User from "../models/userModels.js";

export const Protect = async (req, res, next) => {
  try {
    // Extract token from cookie
    const token = req.cookies?.IDCard;

    if (!token) {
      const error = new Error("Unauthorized! Please log in again.");
      error.statusCode = 401;
      return next(error);
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Fetch user excluding password
    const user = await User.findById(decoded.ID).select("-password");

    if (!user) {
      const error = new Error("User not found. Unauthorized.");
      error.statusCode = 401;
      return next(error);
    }

    // Attach verified user to request
    req.user = user;
    next();
  } catch (err) {
    const error = new Error("Authentication failed.");
    error.statusCode = 401;
    return next(error);
  }
};
