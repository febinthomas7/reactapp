import {createContext, useEffect, useReducer,useContext} from'react'

import axios from 'axios';

import reducer from "../reducer/productReducer";
 const  AppContext = createContext();

const Api ="https://api.pujakaitem.com/api/products"
// const Api ="https://pokeapi.co/api/v2/pokemon/ditto"

const initialState={
    isloading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading:false,
    singleProduct:[],
}

const AppProvider =({children})=>{

    const [state, dispatch] = useReducer(reducer,initialState);

    const getProducts=async (url)=>{
        dispatch({type:"SET_LOADING"})

        try{
            const res =await axios.get(url);
            const products = await res.data;
            dispatch({type:"SET_API",payload:products});

        }
        catch(error){
            dispatch({type:"API_ERROR"});

        }

     
     
    }

    // 2ND API CALL

    const  getSingleProduct = async (url)=>{

        dispatch({type:"SET_SINGLE_LOADING"})

        try{
            const res =await axios.get(url);
            const singleProduct = await res.data;
            dispatch({type:"SET_SINGLE_PRODUCT",payload: singleProduct});

        }catch(error){
            dispatch({type:"ERROR_lOADING_PAGE"})
        }
    }

    useEffect(()=>{
        getProducts(Api);
        

    },[])

    return<AppContext.Provider value={{...state,getSingleProduct }}>{children}</AppContext.Provider>
};


// custom hook
const useProductContext =()=>{

    return  useContext(AppContext);
}

export { AppProvider,AppContext,useProductContext};
