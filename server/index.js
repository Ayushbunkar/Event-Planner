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
import contactusRouter from "./src/routes/contactusRoutes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectDB();

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cookieParser());
app.use(morgan("dev"));


app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/contactus", contactusRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server running ✅" });
});


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
