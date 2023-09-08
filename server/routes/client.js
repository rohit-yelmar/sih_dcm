import express from 'express'
import {getProducts} from '../controllers/client.js'

const router = express.Router();

//Routes 
router.get('/products',getProducts);

export default router;