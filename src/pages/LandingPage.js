import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import AboutUs from "../components/AboutUs"
import Stats from "../components/Stats"
import Services from "../components/Services"
import Industries from "../components/Industries"
import QuoteForm from "../components/QuoteForm"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"
import SupplierRegistration from '../components/SupplierForm'

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs/>
      <Stats />
      <Services />
      <Industries />
      <QuoteForm />
      <Testimonials />
      <SupplierRegistration/>
      <Footer />

      </>
  )
}

export default LandingPage




