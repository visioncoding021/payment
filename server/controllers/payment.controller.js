import { payment } from "../server.js";
import crypto from "crypto";
export const checkout = async (req,res)=>{
     const options = {
        amount:Number(req.body.amount)*100,
        currency : 'INR',
        // receipt :"order_rcptid_ll"
     }
    const order = await payment.orders.create(options);
    console.log(order);
    res.status(200).json({
        success:true,
        message:"payment is successfull",
        order,
    })
}
export const paymentVerification = async (req,res)=>{
    const {razorpay_order_id,razorpay_payment_id,razorpay_signature} = req.body;
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto.createHmac('sha256',process.env.RAZORPAY_API_SECRET_KEY)
                                    .update(body.toString())
                                    .digest('hex')
    if(expectedSignature === razorpay_signature){
       // save in database

       res.redirect(`http://localhost:3000/paymentsuccess?referencen=${razorpay_payment_id}`)
    }
    res.status(200).json({
        success:false,
        message:"payment is fail",
         
    })
}