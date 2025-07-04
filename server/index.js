import connectDB from './src/config/db.js';
import express from 'express';
import dotenv from 'dotenv';
import authRouter from "./src/routes/authRouter.js";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/auth",authRouter);
app.get("/",(request,response)=>{
    response.json({message:"main server hoon"})
});


const port =process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("server start ho gya ",port)
    connectDB();
});
