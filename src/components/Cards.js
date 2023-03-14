import React from 'react'
import "../styles/Cards.css"
import { useState} from 'react-router-dom';
const Cards = ({item,handleClick}) => {
    const {name,price,image}=item;
    const [buttonText,setButtonText]=useState("Add to cart");
   
    const remove=()=>
    {
      
        setButtonText("Remove cart");
        
    }
    
  return (
    
    <div className='cards'>
      <div className='image-box'>
        <img src={image} alt="not show"/>
      </div>
      <div className='details'>
        <h3>{name}</h3>
        <p>Price=Rs {price}</p>
        <button onClick={()=>{handleClick(item);remove()}}>{buttonText}</button>
      </div>
    </div>
   
  )
}

export default Cards
