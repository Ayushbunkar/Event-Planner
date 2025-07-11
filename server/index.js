// index.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import connectDB from './src/config/db.js';
import authRouter from './src/routes/authRouter.js';
import userRouter from './src/routes/userRoutes.js'; // ✅ IMPORT HERE

dotenv.config();

const app = express();

// Middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// Routes
app.use("/auth", authRouter);
app.use("/user", userRouter); // ✅ USE ROUTE HERE

// Default route
app.get("/", (req, res) => {
  res.json({ message: "Server running ✅" });
});

// Error handler
app.use((error, req, res, next) => {
  const errorMessage = error.message || "Internal Server Error";
  const errorCode = error.statusCode || 500;
  res.status(errorCode).json({ message: errorMessage });
});

// Start server
const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
  connectDB();
});
