import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

// Middleware to parse JSON (optional, but useful)
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "server connected" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("server started at", port);
});
