import React, {  useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function ButtonMove() {
  const[name,setName]=useState("Full Stack Development ")
  useEffect(()=>{
  const interval=setInterval(()=>{
    const s1=name.slice(name.length-1,name.length);
  const s2=name.slice(0,name.length-1);
  setName(s1+s2);
  },500);
  return(()=>{
clearInterval(interval);
  })
  },[name]);
 return(
  <div style={{
    fontFamily: 'cursive',
    fontSize: '20px',
    transition: 'transform 0.1s ease-in-out', // Add a CSS transition
    transform: 'rotate(0deg)', // Initial rotation
  }}>
{name}
  </div>
 )
}




