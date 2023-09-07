import express from "express";
import { getUser } from "../controllers/dcm.js";

const router = express.Router();

//Routes
router.routes("/user/:id").get(getUser);

export default router;
