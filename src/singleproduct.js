import React, { useEffect } from 'react'
import { useProductContext } from './context/ProductContext'
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import PageNavigation from './components/PageNavigation';
import Container from './components/Container';
import MyImage from './components/MyImage';
import FormatPrice from './helpers/FormatPrice';
import {TbTruckDelivery,TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from './components/Star';
import AddToCart from './components/AddToCart';
import LinearIndeterminate from './components/LinearIndeterminate';

const Api = "https://api.pujakaitem.com/api/products";
const Singleproduct = () => {

  const {singleProduct,isSingleLoading,getSingleProduct}= useProductContext();
  
  const {id} = useParams();


  
  const {id:alias, name ,company,price,description,stars,stock,reviews,image,} = singleProduct;

  useEffect(()=>{
  
      getSingleProduct(`${Api}?id=${id}`);
     
  //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  if(isSingleLoading){
    return <LinearIndeterminate/>
  }
  
  return (
    <Wrapper>
      
      <PageNavigation name={name}/>
      <Container className="container" >
        <div className="grid grid-two-column">
          <div className="product-images">

          <MyImage img={image}/>
          </div>

          <div className="product-data">
            <Star stars={stars} reviews={reviews}/>

            <h2>{name}</h2>
            
            <p className="product-data-price">MRP:
              <del>
               <FormatPrice price={price + 25000}/>
              </del>
            </p>
            <p className="product-data-price product-data-real-price">Deal of the day
              
               <FormatPrice price={price}/>
              
            </p>
            <img src={image} alt="" />
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon"/>
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon"/>
                <p>parcel Delivery</p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon"/>
                <p>2 year warranty</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon"/>
                <p>30 Days Replacement</p>
              </div>

              

              
            </div>
            
            <div className="product-data-info">
                <p>Available:
                  <span>{stock >0 ? "In Stock" : "Not Available"}</span>
                  </p>
                  <p>ID:
                  <span>{id}</span>
                  </p>
                  <p>Brand:
                  <span>{company}</span>
                  </p>
              </div>
              <hr />

              {stock > 0 && <AddToCart product={singleProduct}/>}
          </div>
          
        </div>
      </Container>

    </Wrapper>
  )
}

const Wrapper= styled.section`


.container{
  padding:9rem;
}
.product-images{
  display:flex;
  align-items:center;
  padding: 20px;
    background-color: #f3f3f3;
}

.product-data{
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
  gap:2rem;

  .product-data-warranty{
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid #ccc;
    margin-bottom:1rem;

    .product-warranty-data{
      text-align:center;

      .warranty-icon{
        background-color:rgba(220,220,220,0.5);
        border-radius:50%;
        width:4rem;
        height:4rem;
        padding:0.6rem;
      }
      p{
        font-size:1.4rem;
        padding-top:bold;
      }
    }
  }

  .product-data-price{
    font-weight:bold;
  }
  .product-data-real-price{
    color:${({theme})=> theme.colors.btn};
  }
  .product-data-info{
    display:flex;
    flex-direction:column;
    gap:1rem;
    font-size:1.8rem;

    span{
      font-weight:bold;
    }
  }

  hr{
    max-width:100%;
    width:90%;
  }
}

`

export default Singleproduct
