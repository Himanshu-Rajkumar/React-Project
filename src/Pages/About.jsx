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
      <h1>Hero of World</h1>
    </div>
  )
}

export default About
