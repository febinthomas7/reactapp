import React from 'react'
import { AiOutlineMinus,AiOutlinePlus} from "react-icons/ai";
const CartAmountToggle = ({amount , increment , decrement}) => {
  return (
    <div className='cart-button'>

       <button onClick={()=> {decrement()}}><AiOutlineMinus/></button>
        <p className='amount-style'>{amount}</p>
        
        <button onClick={()=> {increment()}}><AiOutlinePlus/></button>
      
    </div>
  )
}

export default CartAmountToggle
