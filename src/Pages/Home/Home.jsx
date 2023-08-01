import React from 'react'
import FAQs from '../../Components/FAQs'
import MainHeader from '../../Components/MainHeader'
import Programs from '../../Components/Programs'
import Testimonials from '../../Components/Testimonials'
import Values from '../../Components/Values'

import "./Home.css"
import Slider from '../../Components/Slider'

const Home = () => {
  return (
    <>
    <MainHeader/>
    <Programs/>
    <Slider/>
    <Values/>
    <FAQs/>
    <Testimonials/>
    </>
    )
}

export default Home