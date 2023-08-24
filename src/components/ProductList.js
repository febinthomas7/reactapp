import React from 'react'


import { useFilterContext } from '../context/FilterContext';
import GridView from './Gridview';
import ListView from './ListView';


const ProductList = () => {

  
  const {grid_view,all_products} = useFilterContext();
  
 

if(grid_view === true){
    return <GridView product ={all_products}/>
}
if(grid_view === false){
    return <ListView product ={all_products}/>
}
}



export default ProductList
