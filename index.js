// Import necessary modules
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

// Configure dotenv to load environment variables from .env file
dotenv.config();

const app = express();

// Import routes
import { UserRouter } from "./Routes/userRoute.js";

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000", // Frontend URL
  credentials: true, // Allow cookies (access token) to be sent with the request
}));
app.use(cookieParser());

// Use the user route
app.use('/auth', UserRouter);

// Connect to MongoDB
mongoose.connect(process.env.MongoDb_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((e) => {
    console.log("MongoDB connection error:", e);
  });

// Start the server
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
