import React from 'react'
import { styled } from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from './Button'
const HeroSection = ({mydata}) => {

    const {name,img,para}= mydata;
  return (
    <Wrapper>
        <div className='container'>
            <div className=' grid grid-two-column'>
                <div className='hero-section-data'>
                    <p className='intro-data'>welcome to</p>
                    <h1>{name}</h1>
                    <p>{para}</p>

                          <NavLink>
                            <Button>show now</Button>
                          </NavLink>

                          
                </div>
                <div className='hero-section-image'>
                            <figure>
                                <img src={img} alt="" className='img-style'/>
                            </figure>
                </div>
            </div>
        </div>
      
    </Wrapper>
  )
}
const Wrapper = styled.section`

padding :12rem 0;
img{
    min-width:10rem;
    height:10rem;

}
.grid{
    display:flex
}

.hero-section-data{
    p{
        margin:2rem 0;
    }
    h1{
        text-transform:capitalize;
        font-weight:bold;

    }
    .intro-data{
        margin-bottom:0;
    }
}
.hero-section-image{
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
}
figure{
position:relative;

&::after{
    content:"";
    width:60%;
    height:80%;
    left:50%;
    top:-5rem;
    background-color:rgba(81,56,238,0.4);
    z-index:-1;
    position:absolute;

}
}

.img-style{

    width:100%;
    height:auto;
}

@media(max-width:${({theme})=> theme.media.mobile}){
    .grid{

     gap:10rem;   
    }
    figure::after{
        content:"";
        width:50%;
        height:100%;
        left:0;
        top:10%;
        background-color:rgba(81,56,238,0.4);
    }
}
`;

export default HeroSection
