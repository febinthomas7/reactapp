import React from 'react'
import { styled } from 'styled-components'
import {TbTruckDelivery } from "react-icons/tb";
import {MdSecurity } from "react-icons/md";
import {GiReceiveMoney} from "react-icons/gi";
import {RiSecurePaymentLine} from "react-icons/ri";
const Services = () => {
  return  (
    <Wrapper>
        <div className='container'>
        <div className='grid grid-three-column'>
            <div className='services-1'>
                <div>
                <TbTruckDelivery className='icon'/>
                <h3>super Fast and Free Delivery</h3>
                </div>
            </div>
            <div className='services-2 '>
                <div className='services-column-2'>
                    <div>
                    <MdSecurity className="icon"/>
                        <h3>Non-contact shipping</h3>
                    </div>
                </div>
                <div className='services-column-2'>
                    <div>
                    <GiReceiveMoney className="icon"/>
                        <h3>Money-back Guaranteed</h3>
                    </div>
                </div>
            </div>
            <div className='services-3'>
                <div>
                <RiSecurePaymentLine className='icon'/>
                <h3>Super Secure Payment System</h3>
                </div>
            </div>

        </div>


        </div>
        
    </Wrapper>
  )
}
const Wrapper = styled.section`

padding:9rem 0;

.grid{
    gap:4.8rem;
    
}



.services-1,
.services-2,
.services-3{
    width:auto;
    height:30rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:${({theme})=>theme.colors.bg};
    text-align:center;
    justify-content: center;
    border-radius:2rem;
    box-shadow:rgba(0,0,0,0.5)0px 1px 2px 0px;
    cursor:pointer;
}

.services-1,
.services-2,
.services-3,
.services-column-2,
{
    &:hover{
        box-shadow:none;
    }
}


.icon{
    width:8rem;
    height:8rem;
    padding:2rem;
    border-radius:50%;
    background-color:#fff;
    color:#5138ee;
}
h3{
    margin-top:1.4rem;
    font-size:2rem;
}

.services-2{
    gap:4rem;
    background-color:transparent;
    box-shadow:none;
    display:grid;
    
    grid-template-rows: repeat(2, 1fr);
   

    .services-column-2{
        background-color:${({theme})=>theme.colors.bg};
        display:flex;
        flex-direction:row;
        
        justify-content:center;
        align-items:center;
        border-radius:2rem;
        
       

        div{
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
            gap:1rem;
            padding: 24px;
            
        }
    }
}



`

export default Services
