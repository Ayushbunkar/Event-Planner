import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./src/config/db.js";
import authRouter from "./src/routes/authRouter.js";
import userRouter from "./src/routes/userRoutes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

const app = express();

// Enable CORS with credentials (for cookie-based auth)
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse cookies and log requests
app.use(cookieParser());
app.use(morgan("dev"));

// Routes
app.use("/auth", authRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server running ✅" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("❌ Error Handler:", err.message);
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error"
  });
});

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`🚀 Server is live at http://localhost:${PORT}`);
});
