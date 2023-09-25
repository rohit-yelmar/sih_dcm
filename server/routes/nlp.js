import express from "express";
import { getNlp } from "../controllers/nlp.js";

const router = express.Router();

//Routes
router.get("/nlp", getNlp);

export default router;
