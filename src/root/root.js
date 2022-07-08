import React from 'react'
import Hero from '../Components/Hero/index'
import '../App.css'
import Programming from '../Components/Programs/index'
import Expirience from '../Components/Reasons/index'
import Planing from '../Components/Plans'
import Footer from '../Components/Footer/index'
import Testimonials from '../Components/Testimonials/index'
import Join from '../Components/Join/index'



export const Root = () => {
  return (
   <div className='App'>
    <Hero/>
    <Programming/>
    <Expirience/>
    <Planing/>
    <Testimonials/>
    <Join/>
    <Footer/>
   </div>
  )
}

export default Root