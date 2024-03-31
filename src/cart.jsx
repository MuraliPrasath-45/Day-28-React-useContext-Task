import React, { useEffect, useState } from "react";
import { Useusercontect } from "./usecontext";

function Cart(props) {
  const {img,title,description,price,id}=props
const [count,setcount]=useState(0)
const [totalprice,settotalprice]=useState(1)
  const{list,setlist}=Useusercontect()

  const Handle = () => {
    console.log(list);
    settotalprice(count * price);
    const updatelist = list.map((item) => {
      if (item.id === id) {
      
        return {
          ...item,
          count: count + 1 ,
        };
      } else {
        return item; 
      }
    });
  
    setlist(updatelist);
  }

  const Handle1 = () => {
    console.log(list);
    settotalprice(count * price);
    const updatelist = list.map((item) => {
      if (item.id === id) {
      
        return {
          ...item,
          count: count - 1 ,
        };
      } else {
        return item; 
      }
    });
  
    setlist(updatelist);
  }

const handleremove=(id)=>{
  const handledelete=list.filter((val,idx)=>val.id !==id)
  setlist(handledelete)}
 



    return (

      <>
      <div className="card">
      <img src={img} alt="" />
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="btn">
        <button onClick={()=> {setcount(count-1);Handle1()}} className="rbtn">-</button>
        <p id="p" >{count}</p>
        <button onClick={()=> {setcount(count+1 );Handle()}} className="abtn">+</button>
        </div>
        <div className="price">
        <p>Price :₹{price}</p>
        <p id="pp" >total price :₹{count*price}</p>
        </div>
       <button className="dbtn" onClick={()=>handleremove(id)}>remove</button>
      </div>
      </div>
      
      </>
      
    )
  }
  
  export default Cart
 