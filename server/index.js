import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import helmet from "helmet";
import cors from 'cors';
import morgan from "morgan";
import dcmRoutes from './routes/dcm.js'

//Configurations

dotenv.config()
const app = express();
app.use(express.json())
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors());

//Routes

app.use("/dcm",dcmRoutes);

//Mongoose Setup

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT,()=>console.log(`Server Started on port:${PORT}`));
}).catch(err=>console.log(`Server Error: ${err}`));
