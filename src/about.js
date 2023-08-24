
import HeroSection from './components/HeroSection'

import { useProductContext } from './context/ProductContext';

const About = () => {

  const {myName}= useProductContext();
  


  const data={
    name:"ecommerce",
    img:"images/hero.jpg",
    para:"Hedonist Roots. The placeholder text, beginning with the line“Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth,"
  }
  return (
    <>
    
    <HeroSection mydata={data}/>
    {myName}
    </>
    
  )
}

export default About
