

import Home from "./Home";
import About from "./about";
import Product from "./product";
import Contact from "./contact";
import Singleproduct from "./singleproduct";
import Cart from "./cart";
import Error from "./Error";
import { Style } from "./Style";  
import Header from "./components/Header";
import Footer from "./components/Footer";

import {BrowserRouter ,Route,Routes} from "react-router-dom"
import { ThemeProvider } from "styled-components";

function App() {

  const theme ={
    colors:{
      headings:"rgb(24,24,29)",
      bg:"#f6f8fa",
      text:"rgba(29,29,29,.8)",
      white:"#fff",
      black:"#212529",
      helper:"#8490ff",
      footer_bg:"black",
      btn:"rgb(98,84,243)",
      border:"rgba(98,84,243,0.5)",
      hr:"#ffffff",
      gradient:"linear-gradient(0deg,rgb(132 144 255) 0%, rgb(98 189 252) 100%",
      shadow:"rgba(0,0,0,0.02) 0px 1px 3px 0px , rgba(27,31,35,0.15) 0px 0px 0px 1px;",
      shadowSupport:"rgba(0,0,0,0.16) 0px 1px 4px",

    },
    media:{
      mobile:"768px",
      tab:"998px",
    },
  }

   return (

    <ThemeProvider theme={theme}>

    <BrowserRouter>
    <Style/>
    <Header/>
    <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/singleproduct/:id" element={<Singleproduct/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="*" element={<Error/>}/>
 
    </Routes>
    <Footer/>
    </BrowserRouter>
    </ThemeProvider>
    
   
   )
    
  
}

export default App;
