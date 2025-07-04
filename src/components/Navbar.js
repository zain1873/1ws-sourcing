"use client"

import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-black">1WS.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200">
                Services
              </a>
              <a href="#industries" className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200">
                Industries
              </a>
              <a href="#about" className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200">
                About
              </a>
              <a href="#blog" className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium transition-colors duration-200">
                Blog and Guide
              </a>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products or services..."
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent w-64 transition-all duration-200"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-black px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg transition-all duration-200 hover:border-gray-400">
              Sign In
            </button>
            <button className="bg-black text-white px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 transform hover:scale-105">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-black focus:outline-none focus:text-black p-2 rounded-lg hover:bg-gray-100 transition-all duration-200"
            >
              <svg 
                className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
                      </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="max-h-96 overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {/* Mobile Search Bar */}
            <div className="px-3 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Mobile Menu Items */}
            <a href="#services" className="text-gray-700 hover:text-black hover:bg-gray-50 block px-3 py-3 text-base font-medium rounded-lg transition-all duration-200 transform hover:translate-x-1">
              Services
            </a>
            <a href="#industries" className="text-gray-700 hover:text-black hover:bg-gray-50 block px-3 py-3 text-base font-medium rounded-lg transition-all duration-200 transform hover:translate-x-1">
              Industries
            </a>
            <a href="#about" className="text-gray-700 hover:text-black hover:bg-gray-50 block px-3 py-3 text-base font-medium rounded-lg transition-all duration-200 transform hover:translate-x-1">
              About
            </a>
            <a href="#blog" className="text-gray-700 hover:text-black hover:bg-gray-50 block px-3 py-3 text-base font-medium rounded-lg transition-all duration-200 transform hover:translate-x-1">
              Blog and Guide
            </a>
            
            {/* Mobile Buttons */}
            <div className="pt-4 pb-3 border-t border-gray-200 space-y-3">
              <button className="w-full text-left text-gray-700 hover:text-black hover:bg-gray-50 block px-3 py-3 text-base font-medium rounded-lg transition-all duration-200 border border-gray-300 hover:border-gray-400">
                Sign In
              </button>
              <button className="w-full bg-black text-white px-3 py-3 text-base font-medium rounded-lg hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 active:scale-95">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar