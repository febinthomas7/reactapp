import React from 'react'
import { styled } from 'styled-components';

import { useFilterContext } from '../context/FilterContext';
import FormatPrice from '../helpers/FormatPrice';
import { NavLink } from 'react-router-dom';
import { Button } from './Button';
const ListView = () => {
    const {filter_products}= useFilterContext();
    
  return (
    <Wrapper>
    <div className="container">
    
    <div className="grid ">
        {
        filter_products.map((curelem)=>{

            const{id,name,image,price,description}= curelem;
            return (
                <div className="card grid-two-column" key={id}>
        <figure >
            <img src={image} alt="image" />
            
        </figure>
        
        
        <div className="card-data">
                <div className="card-data-flex">
                    <h3>{name}</h3>
                    <p className="card-data--price"> <FormatPrice price={price}/>  </p>
                    <p>{description.slice(0,99)}...</p>

               <NavLink to={`/singleproduct/${id}`}>
                <Button className='readme'>Read More</Button>

               </NavLink>
                    
                </div>
            </div>

        </div>
            )
            
        })}
    </div>
    
</div>

</Wrapper>
  )
}

const Wrapper = styled.section`

padding: 3rem 0;

.readme{
    margin-top:30px;
}
.container{
max-width:120rem;
}

figure{
    width: 100%;
    justify-content: center;
    display: flex;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;


&::after{
    content:"";
    position:absolute;
    top:0;
    left:0;
    width:0%;
    height:100%;
    background-color:rgba(0,0,0,0.5);
    transition:all 0.2s linear;
    cursor:pointer;

}
&:hover::after{
    width:100%;

}
&:hover img{
    transform:scale(1.2);
}
img{
    max-width:100%;
    margin-top:1.5rem;
    height:20rem;
    transition:all 0.2s linear;
}
.caption{
    position:absolute;
    top:15%;
    right:10%;
    text-transform:uppercase;
    background-color:${({theme})=> theme.colors.bg};
    color:${({theme})=> theme.colors.helper};
    padding:0.8rem 2rem;
    font-size:1.2rem;
    border-radius: 2rem;

}
}

.card{
    border-radius: 1rem;
    padding: 35px;
    border: 1px solid grey;

.card-data{
    padding: 0px 2rem;
z-index: 1;
background-color: white;
}

.card-data-flex{
    margin:2rem 0;
    
    justify-content:space-between;
    align-items:center;
}
h3{
    color:${({theme})=> theme.colors.text};
    text-transform:capitalize;
    margin-bottom: 14px;

}
.card-data--price{
    color:${({theme})=> theme.colors.helper};

}

.btn{

    margin:2rem auto;
    background-color:rgba(0 0 0 / 0%);
    border:0.1rem solid  rgb(98 84 243);
    display:flex;
    justify-content:center;
    align-items:center;

    &:hover{
        background-color:rgb(98 84 243);
    }
    &:hover a{
        color:#fff;
    }
    a{
        color:rgb(98 84 243);
        font-size:1.4rem;
    }

}
}
`

export default ListView
