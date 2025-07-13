// index.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import authRouter from "./src/routes/authRouter.js";
import userRouter from "./src/routes/userRoutes.js"; // ✅ User routes

import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";

dotenv.config();

// Required to use __dirname with ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to DB
connectDB();

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data
app.use(cookieParser());
app.use(morgan("dev"));

// Static folder to serve uploaded temp images if needed
app.use("/temp_uploads", express.static(path.join(__dirname, "temp_uploads")));

// Routes
app.use("/auth", authRouter);
app.use("/user", userRouter); // ✅ Protected routes

// Test route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Server running ✅" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("❌ Error Handler:", err.message);
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Internal Server Error" });
});

// Server start
const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`🚀 Server is live at http://localhost:${PORT}`);
});
