/* eslint-disable react/prop-types */
const Card = ({amount,img,checkoutHandler})=>{
    return (
        <div>
            <div>
      <img src={img}></img>
      <p>amount : {amount}</p>
      <button onClick={()=>checkoutHandler(amount)}>Pay Now</button>
            </div>
        </div>
    )
}
export default Card;