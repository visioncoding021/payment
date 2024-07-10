import express, { urlencoded } from 'express';
import payment from './routes/payment.js';
import { config } from 'dotenv';
import cors from 'cors'
config({path:"./config/config.env"})
export const  app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use("/api",payment); 
app.get("/api/getkey",(req,res)=>res.status(200).json({
     key:process.env.RAZORPAY_API_KEY
}))