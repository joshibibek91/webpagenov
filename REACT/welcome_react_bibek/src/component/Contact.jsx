import React, { useEffect } from "react";
import { useState } from "react";

function Contact(){
let[pro_count, updatepro_Count]=useState(50)
let[item_count, updateitem_Count]=useState(100)

let[data, updateData]=useState([])

useEffect(()=>{
    console.log(data)
    fetch("https://fakestoreapi.com/products/categories").then(r=>r.json()).then(d=>updateData(d))
},[])

function countInc(){
    updatepro_Count(pro_count+1)
}
let countDec=()=>{
    updatepro_Count(pro_count-1)
}
    return(
        <>
        
        <div>Product Count: {pro_count}</div>
        <button onClick={()=>countInc()}>+</button>
        <button onClick={()=>countDec()}>-</button>
        <ul>
            {data.map((product)=>
            <li>{product}</li>
            )}
        </ul>


        <br /><br />

        <div>Item Count: {item_count}</div>
        <button onClick={()=>updateitem_Count(item_count+1)}>+</button>
        <button onClick={()=>updateitem_Count(item_count-1)}>-</button>
        
        </>

    )
}

export default Contact