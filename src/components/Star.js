import React from 'react'
import {AiFillStar, AiOutlineStar,} from "react-icons/ai";
import {BsStarHalf} from "react-icons/bs";
import { styled } from 'styled-components';


const Star = ({stars,reviews}) => {


    const ratingStar = Array.from({length:5},(elem,index)=>{
  const number = stars +0.5;
       return (
        <span key={index}>
            {
                stars >= index + 1 ?(<AiFillStar className='icon'/>):stars >= number +0.5 ?(<BsStarHalf className='icon'/>)
                :(<AiOutlineStar className='icon'/>)
            }

        </span>

       )

        
    })
  return (
   <Wrapper>
    <p> {ratingStar} ({reviews} customer reviews)</p>
   </Wrapper>
  )
}
const Wrapper = styled.section`


.icon{
    
    color:gold;

}
p{
    align-items:center;
    font-size: 24px;
}

`

export default Star
