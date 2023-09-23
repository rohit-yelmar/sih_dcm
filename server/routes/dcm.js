import express from 'express'
import {getUser,getDashboard} from '../controllers/dcm.js'
import {verifyToken} from "../middleware/auth.js"

const router = express.Router();

//Routes 
router.get('/user/:id',getUser);
router.get('/dashboard',getDashboard);

export default router;