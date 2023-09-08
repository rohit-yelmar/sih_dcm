import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import helmet from "helmet";
import cors from 'cors';
import morgan from "morgan";
import dcmRoutes from './routes/dcm.js'
import clientRoutes from './routes/client.js'
import authRoutes from './routes/auth.js'
import caseRoutes from './routes/case.js';
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url"; 
import {createCase} from "./controllers/case.js"

//data imports
import User from "./models/User.js"
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import {dataUser,dataProduct,dataProductStat} from "./data/index.js"

//Configurations

dotenv.config()
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());
app.use("/assets",express.static(path.join(__dirname,'public/assets')))

//File Storage 

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public/assets")
    },
    filename: function(req,file,cb){
        cb(null, file.originalname);
    }
})
const upload = multer({storage})
//Routes with File
app.post("/case",upload.single("picture"),createCase)

//Routes

app.use("/dcm",dcmRoutes);
app.use("/client",clientRoutes);
app.use("/auth",authRoutes);
app.use("/case",caseRoutes)

//Mongoose Setup

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT,()=>console.log(`Server Started on port:${PORT}`));
    //User.insertMany(dataUser)
    //Product.insertMany(dataProduct);
    //ProductStat.insertMany(dataProductStat);
}).catch(err=>console.log(`Server Error: ${err}`));
