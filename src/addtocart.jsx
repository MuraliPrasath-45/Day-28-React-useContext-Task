import React from "react";
import Cart from "./cart";
import { Useusercontect } from "./usecontext";


function Addtocart() {
document.title="Add To Cart"
const handlealart=()=>{
  if(total==0){alert("cart is empty")}
else{alert("Thanks for Order")}}


const {list,setlist}=Useusercontect()
const total = list.reduce((acc, item) => acc + item.price * item.count, 0);
console.log("Total Price:", total); 
    return (
      <>
      <div className="top">
        <h1>My Shopping</h1>
      </div>
      {list.map((val,i)=><Cart key={i}
      id={val.id}
      title={val.title}
      img={val.images[1]}
      description={val.description}
      price={val.price}
      setlist={setlist}
      />
      )}
      <div className="bottom">
      <div className="end">
      <p>Sub Total :₹{total}</p>
      <p>Shipping : Free</p>
      <h3>Grand Total :₹{total}</h3>
      <hr/>
      <button className="cbtn" onClick={()=>handlealart()}>Check Out</button>
      </div></div>
      
      </>
    )
  }
  
  export default Addtocart
 