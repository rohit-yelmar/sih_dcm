import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import dcmRoutes from "./routes/dcm.js";
import { connectDB } from "./config/dbConnecttion.js";

// IMPORTANT!
const app = express();
const PORT = process.env.PORT || 8000;

// Mongoose connection 
connectDB();

// Configurations
dotenv.config();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/dcm", dcmRoutes);

// Server Listening
app.listen(PORT, () => {
  console.log(`Server is listening to ${PORT}`);
});
