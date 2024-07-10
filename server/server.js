import { app } from "./app.js";
import Razorpay from "razorpay";

export const payment = new Razorpay({
    key_id : process.env.RAZORPAY_API_KEY,
    key_secret : process.env.RAZORPAY_API_SECRET_KEY
})
app.listen(process.env.PORT,()=>{
    console.log(`localhost:${process.env.PORT}`);
})