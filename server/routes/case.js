import express from "express";
import {getUserCases} from '../controllers/case.js'
import {verifyToken} from "../middleware/auth.js"

const router = express.Router()

//Read
router.get("/:userId/cases",verifyToken,getUserCases)

export default router;