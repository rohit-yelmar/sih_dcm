import express from 'express'
import {getUser} from '../controllers/dcm.js'

const router = express.Router();

//Routes 
router.get('/user/:id',getUser);

export default router;