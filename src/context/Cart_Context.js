import { createContext, useReducer ,useContext, useEffect} from 'react'
import reducer from '../reducer/Cart_Reducer'
 const CartContext = createContext();

const getCartItem = ()=>{
    let localStorageCartitem = localStorage.getItem("febin");
    // if(localStorageCartitem === []){
    //     return [];
    // }
    // else{
    //     return JSON.parse(localStorageCartitem)
    // }

    const parsedData = JSON.parse(localStorageCartitem);
    if(!Array.isArray(parsedData)) return [];
    return parsedData;
}

const initialState ={
    // cart :[],
    cart:getCartItem(),
    total_item:"",
    total_amount:"",
    shipping_fee:"5000",

};

 const CartProvider = ({children}) =>{

 const [state,dispatch] = useReducer(reducer,initialState)


    const addToCart = (id,amount,product)=>{
        dispatch({type:"CART_ITEM", payload:{id,amount,product}})

    }

    const decrement = (id)=>{
        dispatch({type:"DECREMENT",payload:id})
    }
    const increment = (id)=>{
        dispatch({type:"INCREMENT",payload:id})
    }

    const removeItem = (id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id})
    }

    const clearChat =()=>{
        dispatch({type:"CLEAR_CART"})
    }

    // add data to localStorage 
    useEffect(()=>{
        
        dispatch({type:"CART_TOTAL_AMOUNT_ITEM"});
        localStorage.setItem("febin",JSON.stringify(state.cart))
    },[state.cart])

    

    return <CartContext.Provider value={{...state,addToCart,removeItem,clearChat,increment,decrement}}>{children}</CartContext.Provider>
 }

 export const useCartContext =()=>{
    return useContext(CartContext)
}
export {CartProvider,CartContext}
