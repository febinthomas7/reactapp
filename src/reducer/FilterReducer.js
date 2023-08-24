

const FilterReducer = (state,action) => {
  switch(action.type){
    case "load":
      let priceArr =action.payload.map((e)=>e.price);
      
    let maxPrice = Math.max(...priceArr) ;
    let minPrice=Math.min(...priceArr);
        return{
            ...state,
            loading:false,
            filter_products:[...action.payload],
            all_products:[...action.payload],
            filter:{...state.filter , maxPrice ,minPrice,price:maxPrice}

        }


    case "SET_GRID":
      return{
        ...state,
        loading:false,
        grid_view:true,
        

      }

      case "SET_LIST":
      return{
        ...state,
        loading:false,
        grid_view:false,
       


      }

      case "IS_LOADING":
        return{
          ...state,
          loading:true,
        }

      case "SORTING":

        
        let user_select = action.payload;
      

        return{
          ...state,
          loading:false,
          product_sorting:user_select,
        }

      case "SORTING_PRODUCTS":

        let sortData;

        const {filter_products}= state;
        let temp = [...filter_products];

 

        const sortingproduct =(a,b)=>{
          if(state.product_sorting === "highest"){
            return b.price - a.price;}

          if(state.product_sorting === "lowest"){
            return a.price - b.price;}

          if(state.product_sorting === "a-z"){
            return   a.name.localeCompare(b.name) }     
            
          if(state.product_sorting === "z-a"){
            return b.name.localeCompare(a.name)}  
      }
         sortData = temp.sort(sortingproduct)

         
        return{
          ...state,
          loading:false,
          filter_products: sortData,
          
        }

      case "UPDATED_FILTER":
        const {name,value}=action.payload;
        
        
      return{
        ...state,
        filter:{
          ...state.filter,
          [name]:value,
        }

      };

      case "FILTER_PRODUCTS":
   
      let {all_products} =state;
      let tempProducts =[...all_products];

      const {text,category,company,colors,price}= state.filter;

      if(text){
        tempProducts =tempProducts.filter((curelem)=>{

          return curelem.name.toLowerCase().includes(text);
        });
      }
      
      if(colors !== "All"){
        tempProducts =tempProducts.filter((curelem)=>

           curelem.colors.includes(colors));
      }
      
      
      


      if(category!== "All"){
        tempProducts =tempProducts.filter((curelem)=>{

          return curelem.category === category;
        });
      }
      if(company!== "All"){
        tempProducts =tempProducts.filter((curelem)=>{

          return curelem.company === company;
        });
      }

      if(price=== 0){
        tempProducts =tempProducts.filter((curelem)=> curelem.price === price);
      }else{
        tempProducts =tempProducts.filter((curelem)=> curelem.price <= price);
      }
         return{
            ...state,
            loading:false,
            filter_products: tempProducts,
            
          }
      case "CLEAR_FILTER":
        return{
          ...state,
          filter:{
            ...state.filter,
            text:"",
           category:"all",
           company:"all",
           colors:"all",
           price:state.filter.minPrice,
           maxPrice:state.filter.maxPrice,
           minPrice:state.filter.minPrice,

          }
        }  


      default:
        return state
       
        
        
    

  }
  
}

export default FilterReducer
