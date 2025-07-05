// "use client"

// import { useState } from "react"

// const QuoteForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     company: "",
//     industry: "",
//     details: "",
//   })

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//     // Handle form submission here
//   }

//   return (
//     <section className="bg-white py-16 lg:py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//           {/* Left Content */}
//           <div>
//             <div className="inline-block bg-black text-white px-3 py-1 rounded text-sm font-medium mb-6">
//               CONTACT US
//             </div>
//             <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
//               Get Your
//               <br />
//               Custom Quote
//             </h2>
//             <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//               Tell us what you need, and our sourcing experts will provide you with a detailed quote within 24 hours.
//             </p>

//             {/* Quick Action Buttons */}
//             <div className="flex flex-wrap gap-4 mb-8">
//               <button className="border border-gray-300 text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-50">
//                 Get Estimate
//               </button>
//               <button className="border border-gray-300 text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-50">
//                 Quick Quote
//               </button>
//             </div>

//             {/* Contact Info */}
//          <div className="space-y-4">
//   <div className="flex items-center">
//     <svg className="h-5 w-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//       />
//     </svg>
//     <a href="mailto:info@1worldsourcing.com" className="text-gray-600 hover:underline">
//       info@1worldsourcing.com
//     </a>
//   </div>
//   <div className="flex items-center">
//     <svg className="h-5 w-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//       />
//     </svg>
//     <a href="tel:+15551234567" className="text-gray-600 hover:underline">
//       +1 (555) 123-4567
//     </a>
//   </div>
// </div>

//           </div>

//           {/* Right Form */}
//           <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                   placeholder="Enter your full name"
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                     placeholder="your@email.com"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
//                     Company Name
//                   </label>
//                   <input
//                     type="text"
//                     id="company"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                     placeholder="Your company"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
//                   Industry
//                 </label>
//                 <select
//                   id="industry"
//                   name="industry"
//                   value={formData.industry}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                   required
//                 >
//                   <option value="">Select your industry</option>
//                   <option value="textiles">Textiles</option>
//                   <option value="apparel">Apparel</option>
//                   <option value="electronics">Electronics</option>
//                   <option value="automotive">Automotive</option>
//                   <option value="furniture">Furniture</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
//                   Quote Details
//                 </label>
//                 <textarea
//                   id="details"
//                   name="details"
//                   value={formData.details}
//                   onChange={handleChange}
//                   rows={4}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                   placeholder="Describe your sourcing requirements..."
//                   required
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
//               >
//                 REQUEST QUOTE
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default QuoteForm



"use client"

import { useState } from "react"

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    details: "",
  })

  const [detailedFormData, setDetailedFormData] = useState({
    productName: "",
    productDescription: "",
    quantity: "",
    targetPrice: "",
    materials: "",
    dimensions: "",
    colorPreferences: "",
    certifications: "",
    qualityExpectations: "",
    sampleRequired: "",
    shippingDestination: "",
    deliveryTimeline: "",
    paymentMethod: "",
    openToNegotiation: "",
    additionalComments: "",
    serviceType: "",
  })

  const [showPopup, setShowPopup] = useState(false)
  const [showSummary, setShowSummary] = useState(false)
  const [files, setFiles] = useState([])
  const [submissionData, setSubmissionData] = useState({})

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleDetailedChange = (e) => {
    setDetailedFormData({
      ...detailedFormData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files)
    setFiles(prev => [...prev, ...uploadedFiles])
  }

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Basic form submitted:", formData)
    setShowPopup(true)
  }

  const handleDetailedSubmit = (e) => {
    e.preventDefault()
    
    // Validate required fields
    const requiredFields = ['productName', 'productDescription', 'quantity', 'serviceType']
    const missingFields = requiredFields.filter(field => !detailedFormData[field])
    
    if (missingFields.length > 0) {
      alert('Please fill in all required fields')
      return
    }
    
    const finalData = { ...formData, ...detailedFormData, files }
    console.log("Detailed form submitted:", finalData)
    setSubmissionData(finalData)
    setShowPopup(false)
    setShowSummary(true)
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  const closeSummary = () => {
    setShowSummary(false)
    // Reset forms
    setFormData({
      fullName: "",
      email: "",
      company: "",
      phone: "",
      industry: "",
      details: "",
    })
    setDetailedFormData({
      productName: "",
      productDescription: "",
      quantity: "",
      targetPrice: "",
      materials: "",
      dimensions: "",
      colorPreferences: "",
      certifications: "",
      qualityExpectations: "",
      sampleRequired: "",
      shippingDestination: "",
      deliveryTimeline: "",
      paymentMethod: "",
      openToNegotiation: "",
      additionalComments: "",
      serviceType: "",
    })
    setFiles([])
  }

  return (
    <>
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

              {/* Service Options */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-black mb-4">Choose Your Service:</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-black">Free Quote - Self Source</p>
                      <p className="text-sm text-gray-600">Get supplier contacts and handle sourcing yourself</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium text-black">Full Service - We Handle Everything</p>
                      <p className="text-sm text-gray-600">$100 setup fee + payment after shipment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:info@1worldsourcing.com" className="text-gray-600 hover:underline">
                    info@1worldsourcing.com
                  </a>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+15551234567" className="text-gray-600 hover:underline">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form - Basic Contact Form */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="space-y-6">
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
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
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
                  />
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
                    Brief Description
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Brief description of your needs..."
                    required
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  REQUEST QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Quote Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${showPopup ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-black">Complete Your Quote Request</h3>
              <button
                onClick={closePopup}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-8">
              {/* Service Type Selection */}
              <div>
                <h4 className="text-lg font-bold text-black mb-4">Service Type</h4>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="serviceType"
                      value="self-source"
                      onChange={handleDetailedChange}
                      className="text-black focus:ring-black"
                      required
                    />
                    <div>
                      <p className="font-medium text-black">Free Quote - Self Source</p>
                      <p className="text-sm text-gray-600">Get supplier contacts and source independently</p>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="serviceType"
                      value="full-service"
                      onChange={handleDetailedChange}
                      className="text-black focus:ring-black"
                      required
                    />
                    <div>
                      <p className="font-medium text-black">Full Service - We Handle Everything</p>
                      <p className="text-sm text-gray-600">$100 setup fee + payment after shipment</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Product Details */}
              <div>
                <h4 className="text-lg font-bold text-black mb-4">Product Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Name/Type <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="productName"
                      value={detailedFormData.productName}
                      onChange={handleDetailedChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="e.g., Cotton T-shirts, LED Lights"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Quantity Required <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={detailedFormData.quantity}
                      onChange={handleDetailedChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="e.g., 1000 units, 500 pieces"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="productDescription"
                    value={detailedFormData.productDescription}
                    onChange={handleDetailedChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Detailed product specifications, features, requirements..."
                    required
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Price (Optional)</label>
                    <input
                      type="text"
                      name="targetPrice"
                      value={detailedFormData.targetPrice}
                      onChange={handleDetailedChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="$10 per unit"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Materials/Components</label>
                    <input
                      type="text"
                      name="materials"
                      value={detailedFormData.materials}
                      onChange={handleDetailedChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Cotton, Plastic, Steel..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dimensions/Size</label>
                    <input
                      type="text"
                      name="dimensions"
                      value={detailedFormData.dimensions}
                      onChange={handleDetailedChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Length x Width x Height"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Color Preferences</label>
                  <input
                    type="text"
                    name="colorPreferences"
                    value={detailedFormData.colorPreferences}
                    onChange={handleDetailedChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Red, Blue, Custom Pantone colors..."
                  />
                </div>
              </div>

              {/* Quality & Standards */}
              <div>
                <h4 className="text-lg font-bold text-black mb-4">Quality & Standards</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Required Certifications</label>
                    <input
                      type="text"
                      name="certifications"
                      value={detailedFormData.certifications}
                      onChange={handleDetailedChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="ISO, CE, FDA, OEKO-TEX..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quality Expectations</label>
                    <input
                      type="text"
                      name="qualityExpectations"
                      value={detailedFormData.qualityExpectations}
                      onChange={handleDetailedChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Premium grade, Commercial grade..."
                    />
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div>
                <h4 className="text-lg font-bold text-black mb-4">Additional Files</h4>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    id="fileUpload"
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  />
                  <label htmlFor="fileUpload" className="cursor-pointer block text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600">Upload images, drawings, technical specs, or PDFs</p>
                    <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB each</p>
                  </label>
                </div>
                
                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <span className="text-sm text-gray-700">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 text-sm font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Sample Request & Logistics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-black mb-4">Sample Request</h4>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="sampleRequired"
                        value="yes"
                        onChange={handleDetailedChange}
                        className="text-black focus:ring-black"
                      />
                      <span className="text-gray-700">Yes, I want a sample before bulk order</span>
                    </label>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="sampleRequired"
                        value="no"
                        onChange={handleDetailedChange}
                        className="text-black focus:ring-black"
                      />
                      <span className="text-gray-700">No, proceed with bulk order</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-black mb-4">Delivery & Logistics</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Destination</label>
                      <input
                        type="text"
                        name="shippingDestination"
                        value={detailedFormData.shippingDestination}
                        onChange={handleDetailedChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="City, Country or Port"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Timeline</label>
                      <input
                        type="text"
                        name="deliveryTimeline"
                        value={detailedFormData.deliveryTimeline}
                        onChange={handleDetailedChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="e.g., 30 days, ASAP, before March 2024"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment & Negotiation */}
              <div>
                <h4 className="text-lg font-bold text-black mb-4">Payment & Negotiation</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Payment Method</label>
                    <select
                      name="paymentMethod"
                      value={detailedFormData.paymentMethod}
                      onChange={handleDetailedChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    >
                      <option value="">Select payment method</option>
                      <option value="LC">Letter of Credit (LC)</option>
                      <option value="TT">Telegraphic Transfer (TT)</option>
                      <option value="PayPal">PayPal</option>
                      <option value="Wire Transfer">Wire Transfer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Open to Negotiation?</label>
                    <select
                      name="openToNegotiation"
                      value={detailedFormData.openToNegotiation}
                      onChange={handleDetailedChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    >
                      <option value="">Select option</option>
                      <option value="yes">Yes, open to negotiate</option>
                      <option value="no">No, firm pricing only</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Additional Comments or Special Instructions</label>
                  <textarea
                    name="additionalComments"
                    value={detailedFormData.additionalComments}
                    onChange={handleDetailedChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="Any special requirements, preferences, or additional details..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex space-x-4 pt-6 border-t border-gray-200">
                <button
                  onClick={closePopup}
                  className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDetailedSubmit}
                  className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                >
                  SUBMIT DETAILED QUOTE REQUEST
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Summary Card */}
      {showSummary && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeSummary}
        >
          <div 
            className={`bg-white rounded-lg max-w-2xl w-full transform transition-all duration-300 ${showSummary ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black">Request Summary</h3>
              </div>
              <button
                onClick={closeSummary}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Summary Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                {/* Left Column */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Contact:</span>
                    <span className="text-black font-semibold">{submissionData.fullName}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Company:</span>
                    <span className="text-black font-semibold">{submissionData.company || 'Not specified'}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Email:</span>
                    <span className="text-black font-semibold">{submissionData.email}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Industry:</span>
                    <span className="text-black font-semibold capitalize">{submissionData.industry}</span>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Product:</span>
                    <span className="text-black font-semibold">{submissionData.productName}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Quantity:</span>
                    <span className="text-black font-semibold">{submissionData.quantity}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Service Type:</span>
                    <span className="text-black font-semibold">
                      {submissionData.serviceType === 'self-source' ? 'Self Source' : 'Full Service'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Files Uploaded:</span>
                    <span className="text-black font-semibold">{files.length} files</span>
                  </div>
                </div>
              </div>

              {/* Success Message */}
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-800 font-semibold">Quote request submitted successfully!</p>
                    <p className="text-green-600 text-sm">We'll respond within 24 hours with your detailed quote.</p>
                  </div>
                </div>
              </div>

              {/* Reference Number */}
              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm">Reference Number</p>
                <p className="text-lg font-bold text-black tracking-wider">QR-{Date.now().toString().slice(-6)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default QuoteForm