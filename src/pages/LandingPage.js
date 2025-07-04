import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import Services from "../components/Services"
import Industries from "../components/Industries"
import QuoteForm from "../components/QuoteForm"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <QuoteForm />
      <Testimonials />
      <Footer />

      </>
  )
}

export default LandingPage