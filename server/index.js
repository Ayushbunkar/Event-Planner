import connectDB from './src/config/db.js';
import express from 'express';
import dotenv from 'dotenv';
import authRouter from "./src/routes/authRouter.js";
import morgan from 'morgan';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(cors({origin:"http://localhost:5173",credentials : true}));

app.use(express.json()); // readable data convert
app.use(morgan("dev"));


app.use("/auth",authRouter);


app.get("/",(request,response)=>{
    response.json({message:"main server hoon"})
});

app.use((error,request,response,next)=>{

    const errorMessage= error.message||"Internal Server error"
    const errorCode=error.statusCode||500
    response.status(errorCode).json({message:errorMessage})
})

const port =process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("server start ho gya ",port)
    connectDB();
});
