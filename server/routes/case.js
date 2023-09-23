import express from "express";
import {getAllUserCases, getUserCases} from '../controllers/case.js'
import {verifyToken} from "../middleware/auth.js"

const router = express.Router()

//Read
router.get("/:caseId/cases",getUserCases)
router.get("/cases",getAllUserCases)

export default router;