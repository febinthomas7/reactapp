import React from 'react'
import { useFilterContext } from '../context/FilterContext';
import {AiOutlineCheck } from "react-icons/ai";
import { styled } from 'styled-components';
import FormatPrice from '../helpers/FormatPrice';
import {Button} from './Button'

const FilterSection = () => {
const {updateFilterValue,filter:{text,colors,price,minPrice,maxPrice},all_products,clearFilters} = useFilterContext();


  const getUniqueData =(data,property)=>{
    let newVal = data.map((curelem)=>{
      return curelem[property];
    })
    if(property === "colors"){
      return newVal=  ["All", ...new Set([].concat(...newVal))];
      // return newVal = newVal.flat();
    }
   
    else{
      return newVal=["All",...new Set(newVal)]
    }
    
    
    
  }

  


  const categoryData = getUniqueData(all_products,"category");
  const companyData = getUniqueData(all_products,"company");
  const colorsData = getUniqueData(all_products,"colors");

 
 


  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e)=> e.preventDefault()}>
          <input type="text" name='text' value={text} onChange={updateFilterValue}
          placeholder='search' />
        </form>
      </div>

      <div className="filter-category">
        <h3>category</h3>
        <div>{categoryData.map((curelem ,index)=>{
          return <button key={index} type='button' name='category'
          onClick={updateFilterValue} value={curelem}>
            {curelem}

          </button>
        })}</div>
      </div>


      <div className="filter-category">
        <h3>company</h3>
        <form action="#">
            <label htmlFor="company"></label>
        <select name="company" id="company" onClick={updateFilterValue}>
      {
        companyData.map((curelem,index)=>{
          return (
            <option key={index} name="company" value={curelem}>{curelem}</option>
          )
 
          
        })
      }
      

       </select>
       </form>
      </div>


      <div className="filter-category">
        <h3>colors</h3>
        <p>
        {
          colorsData.map((curelem,index)=> {

            if(curelem ==="All"){
              return(
                <button key={index} value={curelem} className="all-style"  type='button'name='colors' onClick={updateFilterValue} >
             All
            </button>
            )
              
            }

            return(

             
            <button key={index} value={curelem} className={colors === curelem ? "btnStyle active":"btnStyle"} style={{backgroundColor:curelem}}  type='button' name='colors' onClick={updateFilterValue} >
             {colors === curelem ? <AiOutlineCheck className='check active'/>:null}
            </button>
            )
          })
        }
        </p>
        
       
      </div>
     


     <div>
      <h3>Price</h3>
      <p>
        <FormatPrice price={price}/>
      </p>
      <input type="range" name='price' min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} className='range'/>
     </div>
     <div>
      <Button onClick={clearFilters}>Clear Filters</Button>
     </div>


      
    </Wrapper>

  )
}
const Wrapper = styled.section`

.range{
  box-shadow: none;
  padding:10px 0;
}
.btnStyle{
  border-radius: 50%;
  width: 15px;
  height: 15px;
  color: transparent;
  margin-inline: 7px;
  opacity: 0.5;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover{
      opacity: 1; 
  }
  
}
p{
  display:flex;
  align-items: center;
}
.check{
  color:white;
}
.all-style{
  background-color: transparent;
  color: black;
  border: none;
  font-size: 16px;
}
.active{
  opacity: 1;
}
`

export default FilterSection
