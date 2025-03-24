// Import necessary modules
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from 'cookie-parser';


const app = express();

import { UserRouter } from "./Routes/userRoute.js";

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", // Frontend URL
  credentials: true, // Allow cookies (access token) to be sent with the request
}));
app.use(cookieParser());

app.use('/auth',UserRouter);



mongoose.connect('mongodb+srv://admin2621:Admin2621@cluster0.zwh3s.mongodb.net/')
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((e) => {
    console.log("MongoDB connection error:", e);
  });


const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));