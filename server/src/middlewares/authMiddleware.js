import jwt from "jsonwebtoken";
import User from "../models/userModels.js";

export const Protect = async (req, res, next) => {
  try {
    const token = req.cookies.token; // ✅ getting token from cookie

    if (!token) {
      return res.status(401).json({ message: "Not authorized, token missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Not authorized, user not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, invalid token" });
  }
};
