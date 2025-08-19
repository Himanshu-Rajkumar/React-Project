import React, { useEffect } from 'react'
import HeroSection from '../Components/HeroSection'
import { useGlobalContext } from '../Components/ContextAPI'
import Service from './Service';
import Contect from './Contact';

const Home = () => {
  
  const {UpdateHome}=useGlobalContext();
  useEffect(()=>{
    UpdateHome();
  },[])

  return (
    
      <>
      <HeroSection />
      <Service/>
      <Contect/>
     
     
     </>
      

   
  )
}

export default Home
