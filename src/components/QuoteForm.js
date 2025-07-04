"use client"

import { useState } from "react"

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    industry: "",
    details: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-black text-white px-3 py-1 rounded text-sm font-medium mb-6">
              CONTACT US
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Get Your
              <br />
              Custom Quote
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Tell us what you need, and our sourcing experts will provide you with a detailed quote within 24 hours.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="border border-gray-300 text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-50">
                Get Estimate
              </button>
              <button className="border border-gray-300 text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-50">
                Quick Quote
              </button>
            </div>

            {/* Contact Info */}
         <div className="space-y-4">
  <div className="flex items-center">
    <svg className="h-5 w-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
    <a href="mailto:info@1worldsourcing.com" className="text-gray-600 hover:underline">
      info@1worldsourcing.com
    </a>
  </div>
  <div className="flex items-center">
    <svg className="h-5 w-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
    <a href="tel:+15551234567" className="text-gray-600 hover:underline">
      +1 (555) 123-4567
    </a>
  </div>
</div>

          </div>

          {/* Right Form */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Your company"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                >
                  <option value="">Select your industry</option>
                  <option value="textiles">Textiles</option>
                  <option value="apparel">Apparel</option>
                  <option value="electronics">Electronics</option>
                  <option value="automotive">Automotive</option>
                  <option value="furniture">Furniture</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
                  Quote Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Describe your sourcing requirements..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                REQUEST QUOTE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuoteForm
