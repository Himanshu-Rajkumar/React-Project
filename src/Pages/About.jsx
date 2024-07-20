import React, { useEffect } from 'react'
import HeroSection from '../Components/HeroSection'
import { useGlobalContext } from '../Components/ContextAPI'

const About = () => {
  
 const {UpdateAbout} =useGlobalContext();

 useEffect(()=>{
  UpdateAbout()
 },[])

  return (
    <div>
      <HeroSection   />
    </div>
  )
}

export default About
