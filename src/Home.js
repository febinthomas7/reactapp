import React from 'react'

import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Trusted from './components/Trusted'
import FeatureProduct from './components/FeatureProduct'


const Home = () => {


  const data={
    name:"my store",
    img:"images/hero.jpg",
    para:"Hedonist Roots. The placeholder text, beginning with the line“Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth,"
  }

  return (
    <>
    <HeroSection mydata={data}/>
    <FeatureProduct/>
    <Services/>
    <Trusted/>
  


    </>
    
  )
}



export default Home
