import React from 'react'

import { ServicesSection } from '../components/ServicesSection/ServicesSection'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'

export const LandingPage = () => {
  return (
    <>

    <Navbar />
       <Hero />
       <ServicesSection/>
    </>
  )
}
