import Card from "./Card";
import axios from 'axios';
const checkoutHandler = async (amount)=>{
    const {data : {key}} = await axios.get("http://localhost:4000/api/getkey")
     const {data:{order}} = await axios.post("http://localhost:4000/api/checkout",{
       amount
     })
   const options = {
    key,
    amount : order.amount,
    currency : "INR",
    name:"Alice",
    description:"test transaction",
    image:"example.logo",
    order_id:order.id,
    callback_url:"http://localhost:4000/api/paymentverification",
    "prefill":{
        "name":"alice",
        "email":"alice@alice.com",
        "contact":"1234355676",

    },
    notes :{
        "address":"address"
    },
    color : {
        color:"#333"
    }

   }

   const razor = new Razorpay(options)
   razor.open();


}


const Home  = ()=>{
    return <>
     <Card amount={5000} img="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg" checkoutHandler = {checkoutHandler}></Card>
     <Card amount={5000} img="https://www.akamai.com/site/im-demo/media-viewer/01.jpg?imwidth=5000" checkoutHandler = {checkoutHandler}></Card>
    </>
}

export default Home;