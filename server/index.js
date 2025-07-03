import dotenv from 'dotenv'
dotenv.config();

import express from "express";
const app=express();
app.get("/",(req,res)=>{
    req.json({message:"server connected"});

});
const port =process.env.PORT ||5000;
app.listen(port,()=>{
    console.log("server started at",port);
});