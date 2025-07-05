import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import ContactPage from "./pages/ContactUs" 

import "./App.css"
import AboutUs from "./components/AboutUs"
import Services from "./components/Services"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
