import React from 'react'
import { BsFillGrid3X3GapFill,BsList} from "react-icons/bs";
import { styled } from 'styled-components';
import { useFilterContext } from '../context/FilterContext';
const Sort = () => {

  const {filter_products ,grid_view,setGrid_view,setList_view,sorting} = useFilterContext();
  
  return (
    <Wrapper>
      <div className='sort-section'>
        <div className='sort-btn'>
          <button
          className={grid_view ? "active btnn" : "btnn"}
          onClick={()=>setGrid_view()}
          >
            <BsFillGrid3X3GapFill/>
          </button>
          <button className={grid_view ? " btnn" : "active  btnn"}
          onClick={()=>setList_view()}>
            <BsList/>
          </button>
        </div>
        <div>
          
          <h3>{filter_products.length} total products.</h3>
          </div>
        <div>
          <form action="#">
            <label htmlFor="sort"></label>
        <select name="sort" id="sort" onClick={sorting}>
        <option value="lowest">price(lowest)</option>
        <option value="#" disabled></option>
         <option value="highest">price(highest)</option>
        <option value="#" disabled></option>
        <option value="a-z">price(a-z)</option>
        <option value="#" disabled></option>
        <option value="z-a">price(z-a)</option>
      

       </select>
       </form>
        </div>
      </div>

    </Wrapper>

    
  )
}
const Wrapper = styled.section`

.active{
  background-color:black;
  color:white;
}
.btnn{
  padding: 2px;
  align-items: center;
  display: flex;
  margin: 6px;
  cursor: pointer;
}
.sort-section{
  display:flex;
  justify-content: space-between;


  .sort-btn{
    display:flex;

  }
}
`

export default Sort
