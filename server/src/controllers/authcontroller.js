import user from "../models/userModels.js";
import bcrypt from "bcrypt";
import genToken from "../utils/auth.js";

export const RegisterUser = async (req, res, next) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      const error = new Error("All fields are required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await user.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already registered");
      error.statusCode = 409;
      return next(error);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const profilePic = `https://placehold.co/600x400?text=${name.charAt(0).toUpperCase()}`;

    const newUser = await user.create({
      name,
      email,
      phone,
      password: hashedPassword,
      photo: profilePic,
    });

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    next(error);
  }
};

export const LoginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("Email and password are required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      const error = new Error("Invalid email or password");
      error.statusCode = 401;
      return next(error);
    }

    const isVerified = await bcrypt.compare(password, existingUser.password);
    if (!isVerified) {
      const error = new Error("Invalid email or password");
      error.statusCode = 401;
      return next(error);
    }

    genToken(existingUser._id, res);

    res.status(200).json({
      message: `Welcome Back ${existingUser.name}`,
      data: existingUser,
    });
  } catch (error) {
    next(error);
  }
};

export const LogoutUser = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logged out successfully" });
};

export const UpdateUser = (req, res) => {
  res.status(200).json({ message: "Update user endpoint - not implemented yet" });
};
