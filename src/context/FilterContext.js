import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../reducer/FilterReducer";
const FilterContext = createContext();
const initialState={
    filter_products:[],
    all_products:[],
    grid_view:true,
    loading:false,
    product_sorting:"lowest",
  filter:{
    text:"",
    category:"all",
    company:"all",
    colors:"all",
    price:"0",
    maxPrice:"0",
    minPrice:"0",
    },

    
}




export  const FilterProvider =({children})=>{
    const {products}=useProductContext();
    
   
   
    const setGrid_view = ()=>{

        

        dispatch({type:"SET_GRID"});
    }
    
    const setList_view = ()=>{
    
       

        dispatch({type:"SET_LIST"});
    }
   const  updateFilterValue =(event)=>{

    const name = event.target.name;
    const value = event.target.value; 
    dispatch({type:"UPDATED_FILTER" , payload:{name,value}})

   }
    
    

    const [state,dispatch]= useReducer(reducer,initialState);

    useEffect(()=>{
        
        dispatch({type:"IS_LOADING"});
    },[])

    
    
    const sorting = (event)=>{
        let value = event.target.value;
        dispatch({type:"SORTING",payload:value})
       
    }
    useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS"})
        dispatch({type:"SORTING_PRODUCTS"})

    },[state.product_sorting,products,state.filter])


    const clearFilters = ()=>{

        dispatch({type:"CLEAR_FILTER"})
    }

   
    

    
    


    useEffect(()=>{
        
      dispatch({type:"load",payload: products})
    },[products])

    
   



    return <FilterContext.Provider value={{...state,setGrid_view,setList_view,sorting,updateFilterValue,clearFilters}}>{children}</FilterContext.Provider>
}

export const useFilterContext =()=>{
    return useContext(FilterContext)
}
