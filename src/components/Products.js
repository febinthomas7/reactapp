import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../helpers/FormatPrice';

const Product = (curelem) => {
    const{id,name,image,price,category}= curelem;
    

    
  return (

    <NavLink to={`/singleproduct/${id}`}>

        <div className="card">
        <figure>
            <img src={image} alt="image" />
            <figcaption className='caption'>{category}</figcaption>

            <div className="card-data">
                <div className="card-data-flex">
                    <h3>{name}</h3>
                    <p className="card-data--price"> <FormatPrice price={price}/>  </p>
                </div>
            </div>
        </figure>

        </div>
        

    </NavLink>
    
  )
}

export default Product
