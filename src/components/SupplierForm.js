// "use client"

// import { useState } from "react"

// const SupplierForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     company: "",
//     phone: "",
//     industry: "",
//     details: "",
//     isSupplier: false,
//     supplierTier: ""
//   })

//   const [detailedFormData, setDetailedFormData] = useState({
//     productName: "",
//     productDescription: "",
//     quantity: "",
//     targetPrice: "",
//     materials: "",
//     dimensions: "",
//     colorPreferences: "",
//     certifications: "",
//     qualityExpectations: "",
//     sampleRequired: "",
//     shippingDestination: "",
//     deliveryTimeline: "",
//     paymentMethod: "",
//     openToNegotiation: "",
//     additionalComments: "",
//     serviceType: "",
//   })

//   const [showPopup, setShowPopup] = useState(false)
//   const [showSummary, setShowSummary] = useState(false)
//   const [showSupplierInfo, setShowSupplierInfo] = useState(false)
//   const [files, setFiles] = useState([])
//   const [submissionData, setSubmissionData] = useState({})
//   const [isLoading, setIsLoading] = useState(false)

//   const supplierTiers = [
//     {
//       id: "tier1",
//       name: "Tier 1: Registered Supplier",
//       emoji: "📋",
//       level: "Basic Level",
//       eligibility: "Just completed registration and initial verification",
//       benefits: [
//         "Eligible to receive general quote requests",
//         "Listed in our internal supplier directory",
//         "May be contacted for low-volume or trial orders",
//         "Initial credibility with potential buyers"
//       ]
//     },
//     {
//       id: "tier2",
//       name: "Tier 2: Verified Supplier",
//       emoji: "✅",
//       level: "Verified Level",
//       eligibility: "Successfully delivered at least one order with satisfactory performance",
//       benefits: [
//         "Priority access to medium-to-large quote requests",
//         "Verified badge on listings shown to buyers",
//         "Eligible for participation in sampling projects",
//         "Early access to repeat order opportunities",
//         "Periodic performance feedback from buyers"
//       ]
//     },
//     {
//       id: "tier3",
//       name: "Tier 3: Preferred Supplier",
//       emoji: "🥇",
//       level: "Preferred Level",
//       eligibility: "Minimum 3 successful orders + consistent quality, timelines, and communication",
//       benefits: [
//         "Top priority for bulk sourcing projects",
//         "Highlighted in buyer reports and recommendations",
//         "Access to premium buyers and corporate clients",
//         "Invitation to participate in exclusive sourcing programs",
//         "Feedback calls for growth & improvement"
//       ]
//     },
//     {
//       id: "tier4",
//       name: "Tier 4: Strategic Partner",
//       emoji: "👑",
//       level: "Strategic Level",
//       eligibility: "Long-term collaboration, trust, and exceptional performance record",
//       benefits: [
//         "Exclusive projects with high-value clients",
//         "Joint development opportunities (new products/categories)",
//         "Featured on our website (with profile/photos/video intro)",
//         "First choice for urgent or high-volume inquiries",
//         "Dedicated account manager from 1World Sourcing",
//         "Eligibility for marketing partnerships, trade shows, and international exposure"
//       ]
//     }
//   ]

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     })
//   }

//   const handleDetailedChange = (e) => {
//     setDetailedFormData({
//       ...detailedFormData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleFileUpload = (e) => {
//     const uploadedFiles = Array.from(e.target.files)
//     setFiles(prev => [...prev, ...uploadedFiles])
//   }

//   const removeFile = (index) => {
//     setFiles(prev => prev.filter((_, i) => i !== index))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("Basic form submitted:", formData)
//     setShowPopup(true)
//   }

//   const handleDetailedSubmit = async (e) => {
//     e.preventDefault()
    
//     // Validate required fields
//     const requiredFields = ['productName', 'productDescription', 'quantity', 'serviceType']
//     const missingFields = requiredFields.filter(field => !detailedFormData[field])
    
//     if (missingFields.length > 0) {
//       alert('Please fill in all required fields')
//       return
//     }
    
//     setIsLoading(true)
    
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 2000))
    
//     const finalData = { ...formData, ...detailedFormData, files }
//     console.log("Detailed form submitted:", finalData)
//     setSubmissionData(finalData)
//     setIsLoading(false)
//     setShowPopup(false)
//     setShowSummary(true)
//   }

//   const closePopup = () => {
//     setShowPopup(false)
//   }

//   const closeSummary = () => {
//     setShowSummary(false)
//     // Reset forms
//     setFormData({
//       fullName: "",
//       email: "",
//       company: "",
//       phone: "",
//       industry: "",
//       details: "",
//       isSupplier: false,
//       supplierTier: ""
//     })
//     setDetailedFormData({
//       productName: "",
//       productDescription: "",
//       quantity: "",
//       targetPrice: "",
//       materials: "",
//       dimensions: "",
//       colorPreferences: "",
//       certifications: "",
//       qualityExpectations: "",
//       sampleRequired: "",
//       shippingDestination: "",
//       deliveryTimeline: "",
//       paymentMethod: "",
//       openToNegotiation: "",
//       additionalComments: "",
//       serviceType: "",
//     })
//     setFiles([])
//   }

//   return (
//     <>
//       <section className="bg-white py-16 lg:py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
//             {/* Left Content */}
//             <div>
//               <div className="inline-block bg-black text-white px-3 py-1 rounded text-sm font-medium mb-6">
//                 CONTACT US
//               </div>
//               <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
//                 Get Your
//                 <br />
//                 Custom Quote
//               </h2>
//               <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//                 Tell us what you need, and our sourcing experts will provide you with a detailed quote within 24 hours.
//               </p>

//               {/* Service Options */}
//               <div className="bg-gray-50 p-6 rounded-lg mb-8">
//                 <h3 className="font-bold text-black mb-4">Choose Your Service:</h3>
//                 <div className="space-y-3">
//                   <div className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
//                     <div>
//                       <p className="font-medium text-black">Free Quote - Self Source</p>
//                       <p className="text-sm text-gray-600">Get supplier contacts and handle sourcing yourself</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
//                     <div>
//                       <p className="font-medium text-black">Full Service - We Handle Everything</p>
//                       <p className="text-sm text-gray-600">$100 setup fee + payment after shipment</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Supplier Tier Info Button */}
//               <div className="mb-8">
//                 <button
//                   onClick={() => setShowSupplierInfo(true)}
//                   className="bg-blue-50 text-blue-700 px-4 py-3 rounded-lg font-medium hover:bg-blue-100 transition-colors flex items-center space-x-2"
//                 >
//                   <span>🏆</span>
//                   <span>Learn About Our Supplier Tiers</span>
//                 </button>
//               </div>

//               {/* Contact Info */}
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <svg className="h-5 w-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                   <a href="mailto:info@1worldsourcing.com" className="text-gray-600 hover:underline">
//                     info@1worldsourcing.com
//                   </a>
//                 </div>
//                 <div className="flex items-center">
//                   <svg className="h-5 w-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                   <a href="tel:+15551234567" className="text-gray-600 hover:underline">
//                     +1 (555) 123-4567
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Right Form - Basic Contact Form */}
//             <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
//               <div className="space-y-6">
//                 <div>
//                   <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="fullName"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                     placeholder="Enter your full name"
//                     required
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                       placeholder="your@email.com"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                       placeholder="+1 (555) 123-4567"
//                     />
//                   </div>
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
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
//                     Industry
//                   </label>
//                   <select
//                     id="industry"
//                     name="industry"
//                     value={formData.industry}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                     required
//                   >
//                     <option value="">Select your industry</option>
//                     <option value="textiles">Textiles</option>
//                     <option value="apparel">Apparel</option>
//                     <option value="electronics">Electronics</option>
//                     <option value="automotive">Automotive</option>
//                     <option value="furniture">Furniture</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>

//                 {/* Supplier Checkbox */}
//                 <div className="flex items-center space-x-3">
//                   <input
//                     type="checkbox"
//                     id="isSupplier"
//                     name="isSupplier"
//                     checked={formData.isSupplier}
//                     onChange={handleChange}
//                     className="w-4 h-4 text-black focus:ring-black border-gray-300 rounded"
//                   />
//                   <label htmlFor="isSupplier" className="text-sm font-medium text-gray-700">
//                     I am a supplier looking to join 1World Sourcing
//                   </label>
//                 </div>

//                 {/* Supplier Tier Selection */}
//                 {formData.isSupplier && (
//                   <div>
//                     <label htmlFor="supplierTier" className="block text-sm font-medium text-gray-700 mb-2">
//                       Current Supplier Tier (if applicable)
//                     </label>
//                     <select
//                       id="supplierTier"
//                       name="supplierTier"
//                       value={formData.supplierTier}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                     >
//                       <option value="">Select your tier or "New Supplier"</option>
//                       <option value="new">New Supplier (Registration)</option>
//                       <option value="tier1">Tier 1: Registered Supplier</option>
//                       <option value="tier2">Tier 2: Verified Supplier</option>
//                       <option value="tier3">Tier 3: Preferred Supplier</option>
//                       <option value="tier4">Tier 4: Strategic Partner</option>
//                     </select>
//                   </div>
//                 )}

//                 <div>
//                   <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-2">
//                     Brief Description
//                   </label>
//                   <textarea
//                     id="details"
//                     name="details"
//                     value={formData.details}
//                     onChange={handleChange}
//                     rows={3}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                     placeholder={formData.isSupplier ? "Brief description of your company and capabilities..." : "Brief description of your needs..."}
//                     required
//                   ></textarea>
//                 </div>

//                 <button
//                   onClick={handleSubmit}
//                   className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
//                 >
//                   {formData.isSupplier ? "SUBMIT SUPPLIER APPLICATION" : "REQUEST QUOTE"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Supplier Tier Information Modal */}
//       {showSupplierInfo && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
//               <h3 className="text-2xl font-bold text-black">1World Sourcing Supplier Tier System</h3>
//               <button
//                 onClick={() => setShowSupplierInfo(false)}
//                 className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
//               >
//                 ×
//               </button>
//             </div>
            
//             <div className="p-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {supplierTiers.map((tier) => (
//                   <div key={tier.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
//                     <div className="flex items-center space-x-3 mb-4">
//                       <span className="text-2xl">{tier.emoji}</span>
//                       <div>
//                         <h4 className="font-bold text-lg text-black">{tier.name}</h4>
//                         <p className="text-sm text-gray-600">{tier.level}</p>
//                       </div>
//                     </div>
                    
//                     <div className="mb-4">
//                       <h5 className="font-semibold text-gray-700 mb-2">Eligibility:</h5>
//                       <p className="text-sm text-gray-600">{tier.eligibility}</p>
//                     </div>
                    
//                     <div>
//                       <h5 className="font-semibold text-gray-700 mb-2">Benefits:</h5>
//                       <ul className="space-y-1">
//                         {tier.benefits.map((benefit, index) => (
//                           <li key={index} className="text-sm text-gray-600 flex items-start space-x-2">
//                             <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
//                             <span>{benefit}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="mt-8 bg-blue-50 p-6 rounded-lg">
//                 <h4 className="font-bold text-black mb-2">Ready to Join Our Network?</h4>
//                 <p className="text-gray-600 mb-4">
//                   Start your journey as a Tier 1 Registered Supplier and work your way up to become a Strategic Partner.
//                 </p>
//                 <button
//                   onClick={() => {
//                     setShowSupplierInfo(false)
//                     setFormData(prev => ({ ...prev, isSupplier: true }))
//                   }}
//                   className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
//                 >
//                   Apply as Supplier
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Detailed Quote Popup */}
//       {showPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className={`bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${showPopup ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
//             <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
//               <h3 className="text-2xl font-bold text-black">
//                 {formData.isSupplier ? "Complete Your Supplier Application" : "Complete Your Quote Request"}
//               </h3>
//               <button
//                 onClick={closePopup}
//                 className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
//               >
//                 ×
//               </button>
//             </div>

//             <div className="p-6 space-y-8">
//               {!formData.isSupplier && (
//                 <>
//                   {/* Service Type Selection */}
//                   <div>
//                     <h4 className="text-lg font-bold text-black mb-4">Service Type</h4>
//                     <div className="space-y-3">
//                       <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
//                         <input
//                           type="radio"
//                           name="serviceType"
//                           value="self-source"
//                           onChange={handleDetailedChange}
//                           className="text-black focus:ring-black"
//                           required
//                         />
//                         <div>
//                           <p className="font-medium text-black">Free Quote - Self Source</p>
//                           <p className="text-sm text-gray-600">Get supplier contacts and source independently</p>
//                         </div>
//                       </label>
//                       <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
//                         <input
//                           type="radio"
//                           name="serviceType"
//                           value="full-service"
//                           onChange={handleDetailedChange}
//                           className="text-black focus:ring-black"
//                           required
//                         />
//                         <div>
//                           <p className="font-medium text-black">Full Service - We Handle Everything</p>
//                           <p className="text-sm text-gray-600">$100 setup fee + payment after shipment</p>
//                         </div>
//                       </label>
//                     </div>
//                   </div>

//                   {/* Product Details */}
//                   <div>
//                     <h4 className="text-lg font-bold text-black mb-4">Product Details</h4>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Product Name/Type <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           name="productName"
//                           value={detailedFormData.productName}
//                           onChange={handleDetailedChange}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                           placeholder="e.g., Cotton T-shirts, LED Lights"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Quantity Required <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           type="text"
//                           name="quantity"
//                           value={detailedFormData.quantity}
//                           onChange={handleDetailedChange}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                           placeholder="e.g., 1000 units, 500 pieces"
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div className="mt-4">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Product Description <span className="text-red-500">*</span>
//                       </label>
//                       <textarea
//                         name="productDescription"
//                         value={detailedFormData.productDescription}
//                         onChange={handleDetailedChange}
//                         rows={4}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                         placeholder="Detailed product specifications, features, requirements..."
//                         required
//                       ></textarea>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Target Price (Optional)</label>
//                         <input
//                           type="text"
//                           name="targetPrice"
//                           value={detailedFormData.targetPrice}
//                           onChange={handleDetailedChange}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                           placeholder="$10 per unit"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Materials/Components</label>
//                         <input
//                           type="text"
//                           name="materials"
//                           value={detailedFormData.materials}
//                           onChange={handleDetailedChange}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                           placeholder="Cotton, Plastic, Steel..."
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Dimensions/Size</label>
//                         <input
//                           type="text"
//                           name="dimensions"
//                           value={detailedFormData.dimensions}
//                           onChange={handleDetailedChange}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                           placeholder="Length x Width x Height"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </>
//               )}

//               {/* File Upload */}
//               <div>
//                 <h4 className="text-lg font-bold text-black mb-4">
//                   {formData.isSupplier ? "Company Documents & Certifications" : "Additional Files"}
//                 </h4>
//                 <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
//                   <input
//                     type="file"
//                     multiple
//                     onChange={handleFileUpload}
//                     className="hidden"
//                     id="fileUpload"
//                     accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
//                   />
//                   <label htmlFor="fileUpload" className="cursor-pointer block text-center">
//                     <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
//                       <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                     <p className="mt-2 text-sm text-gray-600">
//                       {formData.isSupplier 
//                         ? "Upload business license, certifications, product catalogs" 
//                         : "Upload images, drawings, technical specs, or PDFs"
//                       }
//                     </p>
//                     <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB each</p>
//                   </label>
//                 </div>
                
//                 {files.length > 0 && (
//                   <div className="mt-4 space-y-2">
//                     {files.map((file, index) => (
//                       <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
//                         <span className="text-sm text-gray-700">{file.name}</span>
//                         <button
//                           type="button"
//                           onClick={() => removeFile(index)}
//                           className="text-red-500 hover:text-red-700 text-sm font-medium"
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {!formData.isSupplier && (
//                 <>
//                   {/* Sample Request & Logistics */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <div>
//                       <h4 className="text-lg font-bold text-black mb-4">Sample Request</h4>
//                       <div className="space-y-3">
//                         <label className="flex items-center space-x-3">
//                           <input
//                             type="radio"
//                             name="sampleRequired"
//                             value="yes"
//                             onChange={handleDetailedChange}
//                             className="text-black focus:ring-black"
//                           />
//                           <span className="text-gray-700">Yes, I want a sample before bulk order</span>
//                         </label>
//                         <label className="flex items-center space-x-3">
//                           <input
//                             type="radio"
//                             name="sampleRequired"
//                             value="no"
//                             onChange={handleDetailedChange}
//                             className="text-black focus:ring-black"
//                           />
//                           <span className="text-gray-700">No, proceed with bulk order</span>
//                         </label>
//                       </div>
//                     </div>

//                     <div>
//                       <h4 className="text-lg font-bold text-black mb-4">Delivery & Logistics</h4>
//                       <div className="space-y-4">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-2">Shipping Destination</label>
//                           <input
//                             type="text"
//                             name="shippingDestination"
//                             value={detailedFormData.shippingDestination}
//                             onChange={handleDetailedChange}
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                             placeholder="City, Country or Port"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-700 mb-2">Delivery Timeline</label>
//                           <input
//                             type="text"
//                             name="deliveryTimeline"
//                             value={detailedFormData.deliveryTimeline}
//                             onChange={handleDetailedChange}
//                             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                             placeholder="e.g., 30 days, ASAP, before March 2024"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Payment & Negotiation */}
//                   <div>
//                     <h4 className="text-lg font-bold text-black mb-4">Payment & Negotiation</h4>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Payment Method</label>
//                         <select
//                           name="paymentMethod"
//                           value={detailedFormData.paymentMethod}
//                           onChange={handleDetailedChange}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                         >
//                           <option value="">Select payment method</option>
//                           <option value="LC">Letter of Credit (LC)</option>
//                           <option value="TT">Telegraphic Transfer (TT)</option>
//                           <option value="PayPal">PayPal</option>
//                           <option value="Wire Transfer">Wire Transfer</option>
//                           <option value="Other">Other</option>
//                         </select>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Open to Negotiation?</label>
//                         <select
//                           name="openToNegotiation"
//                           value={detailedFormData.openToNegotiation}
//                           onChange={handleDetailedChange}
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                         >
//                           <option value="">Select option</option>
//                           <option value="yes">Yes, open to negotiate</option>
//                           <option value="no">No, firm pricing only</option>
//                         </select>
//                       </div>
//                     </div>

//                     <div className="mt-4">
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Additional Comments or Special Instructions</label>
//                       <textarea
//                         name="additionalComments"
//                         value={detailedFormData.additionalComments}
//                         onChange={handleDetailedChange}
//                         rows={4}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                         placeholder="Any special requirements, preferences, or additional details..."
//                       ></textarea>
//                     </div>
//                   </div>
//                 </>
//               )}

//               {/* Supplier-specific fields */}
//               {formData.isSupplier && (
//                 <div>
//                   <h4 className="text-lg font-bold text-black mb-4">Company Information</h4>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Main Product Categories <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         name="productName"
//                         value={detailedFormData.productName}
//                         onChange={handleDetailedChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                         placeholder="e.g., Textiles, Electronics, Furniture"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Production Capacity <span className="text-red-500">*</span>
//                       </label>
//                       <input
//                         type="text"
//                         name="quantity"
//                         value={detailedFormData.quantity}
//                         onChange={handleDetailedChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                         placeholder="e.g., 10,000 units/month"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="mt-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Company Description & Capabilities <span className="text-red-500">*</span>
//                     </label>
//                     <textarea
//                       name="productDescription"
//                       value={detailedFormData.productDescription}
//                       onChange={handleDetailedChange}
//                       rows={4}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                       placeholder="Describe your company, manufacturing capabilities, quality standards, certifications..."
//                       required
//                     ></textarea>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Years in Business</label>
//                       <input
//                         type="text"
//                         name="targetPrice"
//                         value={detailedFormData.targetPrice}
//                         onChange={handleDetailedChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                         placeholder="e.g., 15 years"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Export Markets</label>
//                       <input
//                         type="text"
//                         name="materials"
//                         value={detailedFormData.materials}
//                         onChange={handleDetailedChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                         placeholder="USA, Europe, Asia..."
//                       />
//                     </div>
//                   </div>

//                   <div className="mt-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Certifications & Quality Standards</label>
//                     <input
//                       type="text"
//                       name="certifications"
//                       value={detailedFormData.certifications}
//                       onChange={handleDetailedChange}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                       placeholder="ISO 9001, CE, FDA, OEKO-TEX, etc."
//                     />
//                   </div>

//                   <div className="mt-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to join 1World Sourcing?</label>
//                     <textarea
//                       name="additionalComments"
//                       value={detailedFormData.additionalComments}
//                       onChange={handleDetailedChange}
//                       rows={3}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
//                       placeholder="Tell us about your goals and how we can work together..."
//                     ></textarea>
//                   </div>
//                 </div>
//               )}

//               {/* Submit Buttons */}
//               <div className="flex space-x-4 pt-6 border-t border-gray-200">
//                 <button
//                   onClick={closePopup}
//                   className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-400 transition-colors"
//                   disabled={isLoading}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleDetailedSubmit}
//                   disabled={isLoading}
//                   className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//                 >
//                   {isLoading ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Processing...
//                     </>
//                   ) : (
//                     formData.isSupplier ? "SUBMIT SUPPLIER APPLICATION" : "SUBMIT DETAILED QUOTE REQUEST"
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Success Summary Card */}
//       {showSummary && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
//           onClick={closeSummary}
//         >
//           <div 
//             className={`bg-white rounded-lg max-w-2xl w-full transform transition-all duration-300 ${showSummary ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Header with Close Button */}
//             <div className="flex items-center justify-between p-6 border-b border-gray-200">
//               <div className="flex items-center space-x-3">
//                 <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
//                   <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-black">
//                   {submissionData.isSupplier ? "Application Summary" : "Request Summary"}
//                 </h3>
//               </div>
//               <button
//                 onClick={closeSummary}
//                 className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>

//             {/* Summary Content */}
//             <div className="p-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
//                 {/* Left Column */}
//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-500 font-medium">Contact:</span>
//                     <span className="text-black font-semibold">{submissionData.fullName}</span>
//                   </div>
                  
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-500 font-medium">Company:</span>
//                     <span className="text-black font-semibold">{submissionData.company || 'Not specified'}</span>
//                   </div>
                  
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-500 font-medium">Email:</span>
//                     <span className="text-black font-semibold">{submissionData.email}</span>
//                   </div>
                  
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-500 font-medium">Industry:</span>
//                     <span className="text-black font-semibold capitalize">{submissionData.industry}</span>
//                   </div>
//                 </div>

//                 {/* Right Column */}
//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-500 font-medium">
//                       {submissionData.isSupplier ? "Product Categories:" : "Product:"}
//                     </span>
//                     <span className="text-black font-semibold">{submissionData.productName}</span>
//                   </div>
                  
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-500 font-medium">
//                       {submissionData.isSupplier ? "Capacity:" : "Quantity:"}
//                     </span>
//                     <span className="text-black font-semibold">{submissionData.quantity}</span>
//                   </div>
                  
//                   {submissionData.isSupplier ? (
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-500 font-medium">Current Tier:</span>
//                       <span className="text-black font-semibold">
//                         {submissionData.supplierTier === 'new' ? 'New Supplier' : 
//                          submissionData.supplierTier ? submissionData.supplierTier.replace('tier', 'Tier ') : 'Not specified'}
//                       </span>
//                     </div>
//                   ) : (
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-500 font-medium">Service Type:</span>
//                       <span className="text-black font-semibold">
//                         {submissionData.serviceType === 'self-source' ? 'Self Source' : 'Full Service'}
//                       </span>
//                     </div>
//                   )}
                  
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-500 font-medium">Files Uploaded:</span>
//                     <span className="text-black font-semibold">{files.length} files</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Success Message */}
//               <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
//                     <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-green-800 font-semibold">
//                       {submissionData.isSupplier ? "Supplier application submitted successfully!" : "Quote request submitted successfully!"}
//                     </p>
//                     <p className="text-green-600 text-sm">
//                       {submissionData.isSupplier 
//                         ? "We'll review your application and contact you within 48 hours." 
//                         : "We'll respond within 24 hours with your detailed quote."
//                       }
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Reference Number */}
//               <div className="mt-6 text-center">
//                 <p className="text-gray-500 text-sm">Reference Number</p>
//                 <p className="text-lg font-bold text-black tracking-wider">
//                   {submissionData.isSupplier ? 'SA-' : 'QR-'}{Date.now().toString().slice(-6)}
//                 </p>
//               </div>

//               {/* Next Steps for Suppliers */}
//               {submissionData.isSupplier && (
//                 <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
//                   <h4 className="font-semibold text-blue-800 mb-2">Next Steps:</h4>
//                   <ul className="text-blue-700 text-sm space-y-1">
//                     <li>• Application review and verification (1-2 business days)</li>
//                     <li>• Initial onboarding call with our team</li>
//                     <li>• Setup of your supplier profile in our system</li>
//                     <li>• Begin receiving quote requests as a Tier 1 supplier</li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default SupplierForm




"use client"

import { useState } from "react"

const SupplierRegistration = () => {
  const [selectedTier, setSelectedTier] = useState("")
  const [formData, setFormData] = useState({
    // Company Information
    companyName: "",
    country: "",
    city: "",
    establishedYear: "",
    website: "",

    // Primary Contact Details
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",

    // Product & Business Details
    productCategories: [],
    productDescription: "",
    monthlyCapacity: "",
    moq: "",
    currentlyExport: "",
    exportMarkets: "",
    portOfLoading: "",

    // Certifications
    certifications: [],
    customCertification: "",

    // Additional Info
    internationalExperience: "",
    additionalNotes: "",

    // Consent
    accuracyConfirm: false,
    termsAgree: false,
  })

  const [files, setFiles] = useState({
    registration: [],
    catalog: [],
    photos: [],
  })

  const [showSummary, setShowSummary] = useState(false)
  const [errors, setErrors] = useState({})
  const [activeTab, setActiveTab] = useState("registration")

  const supplierTiers = [
    {
      name: "Bronze",
      price: 100,
      features: [
        "Basic listing in supplier directory",
        "Contact details display",
        "Product showcase (up to 10 products)",
        "Standard email support",
        "Monthly performance reports",
      ],
    },
    {
      name: "Silver",
      price: 250,
      features: [
        "Enhanced visibility in search results",
        "Featured listing badge",
        "Priority in search rankings",
        "Email & phone support",
        "Analytics dashboard access",
        "Product showcase (up to 25 products)",
      ],
    },
    {
      name: "Gold",
      price: 500,
      features: [
        "Premium placement on homepage",
        "Verified supplier badge",
        "Direct buyer contact access",
        "Priority customer support",
        "Marketing assistance & promotion",
        "Unlimited product showcase",
        "Featured in newsletters",
      ],
    },
    {
      name: "Platinum",
      price: 799,
      features: [
        "Top tier visibility across platform",
        "Exclusive platinum badge",
        "Dedicated account manager",
        "24/7 priority support hotline",
        "Co-marketing opportunities",
        "Custom supplier page design",
        "First access to new buyers",
        "Quarterly business reviews",
      ],
    },
  ]

  const performanceTiers = [
    {
      name: "Registered Supplier",
      level: 1,
      icon: "📝",
      eligibility: "Just completed registration and initial verification",
      benefits: [
        "Eligible to receive general quote requests",
        "Listed in our internal supplier directory",
        "May be contacted for low-volume or trial orders",
        "Initial credibility with potential buyers",
      ],
    },
    {
      name: "Verified Supplier",
      level: 2,
      icon: "✅",
      eligibility: "Successfully delivered at least one order with satisfactory performance",
      benefits: [
        "Priority access to medium-to-large quote requests",
        "Verified badge on listings shown to buyers",
        "Eligible for participation in sampling projects",
        "Early access to repeat order opportunities",
        "Periodic performance feedback from buyers",
      ],
    },
    {
      name: "Preferred Supplier",
      level: 3,
      icon: "🥇",
      eligibility: "Minimum 3 successful orders + consistent quality, timelines, and communication",
      benefits: [
        "Top priority for bulk sourcing projects",
        "Highlighted in buyer reports and recommendations",
        "Access to premium buyers and corporate clients",
        "Invitation to participate in exclusive sourcing programs",
        "Feedback calls for growth & improvement",
      ],
    },
    {
      name: "Strategic Partner",
      level: 4,
      icon: "👑",
      eligibility: "Long-term collaboration, trust, and exceptional performance record",
      benefits: [
        "Exclusive projects with high-value clients",
        "Joint development opportunities (new products/categories)",
        "Featured on our website (with profile/photos/video intro)",
        "First choice for urgent or high-volume inquiries",
        "Dedicated account manager from 1World Sourcing",
        "Eligibility for marketing partnerships, trade shows, and international exposure",
      ],
    },
  ]

  const productCategories = [
    "Textiles & Apparel",
    "Steel & Metals",
    "Machinery & Equipment",
    "Electronics & Technology",
    "Furniture & Home Decor",
    "Automotive Parts",
    "Healthcare & Medical",
    "Food & Beverage",
    "Chemicals & Materials",
    "Construction & Building",
    "Sports & Recreation",
    "Beauty & Personal Care",
    "Packaging Materials",
    "Agricultural Products",
    "Other",
  ]

  const certificationOptions = [
    "ISO 9001 (Quality Management)",
    "ISO 14001 (Environmental)",
    "CE Marking",
    "GOTS (Global Organic Textile)",
    "BSCI (Business Social Compliance)",
    "WRAP (Worldwide Responsible Accredited Production)",
    "Oeko-Tex Standard 100",
    "FDA Approval",
    "GMP (Good Manufacturing Practice)",
    "HACCP (Food Safety)",
    "Other",
  ]

  const countries = [
    "China",
    "India",
    "Vietnam",
    "Bangladesh",
    "Turkey",
    "Pakistan",
    "Thailand",
    "Indonesia",
    "Mexico",
    "Brazil",
    "Egypt",
    "Morocco",
    "Poland",
    "Ukraine",
    "Romania",
    "Malaysia",
    "Philippines",
    "Sri Lanka",
    "Cambodia",
    "Myanmar",
    "Other",
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === "checkbox") {
      if (name === "productCategories") {
        setFormData((prev) => ({
          ...prev,
          productCategories: checked
            ? [...prev.productCategories, value]
            : prev.productCategories.filter((cat) => cat !== value),
        }))
      } else if (name === "certifications") {
        setFormData((prev) => ({
          ...prev,
          certifications: checked
            ? [...prev.certifications, value]
            : prev.certifications.filter((cert) => cert !== value),
        }))
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }))
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleFileUpload = (e, type) => {
    const uploadedFiles = Array.from(e.target.files)
    const maxSize = 10 * 1024 * 1024 // 10MB

    const validFiles = uploadedFiles.filter((file) => {
      if (file.size > maxSize) {
        alert(`File ${file.name} is too large. Maximum size is 10MB.`)
        return false
      }
      return true
    })

    setFiles((prev) => ({
      ...prev,
      [type]: [...prev[type], ...validFiles],
    }))
  }

  const removeFile = (type, index) => {
    setFiles((prev) => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index),
    }))
  }

  const validateForm = () => {
    const newErrors = {}

    // Required fields validation
    if (!selectedTier) newErrors.tier = "Please select a supplier tier"
    if (!formData.companyName) newErrors.companyName = "Company name is required"
    if (!formData.country) newErrors.country = "Country is required"
    if (!formData.city) newErrors.city = "City is required"
    if (!formData.establishedYear) newErrors.establishedYear = "Established year is required"
    if (!formData.fullName) newErrors.fullName = "Full name is required"
    if (!formData.jobTitle) newErrors.jobTitle = "Job title is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.phone) newErrors.phone = "Phone number is required"
    if (formData.productCategories.length === 0) newErrors.productCategories = "Select at least one product category"
    if (!formData.productDescription) newErrors.productDescription = "Product description is required"
    if (!formData.monthlyCapacity) newErrors.monthlyCapacity = "Monthly capacity is required"
    if (!formData.moq) newErrors.moq = "MOQ is required"
    if (!formData.currentlyExport) newErrors.currentlyExport = "Please specify if you currently export"
    if (!formData.internationalExperience) newErrors.internationalExperience = "Please specify international experience"
    if (!formData.accuracyConfirm) newErrors.accuracyConfirm = "Please confirm information accuracy"
    if (!formData.termsAgree) newErrors.termsAgree = "Please agree to terms and conditions"
    if (files.registration.length === 0) newErrors.registration = "Company registration document is required"

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Year validation
    const currentYear = new Date().getFullYear()
    if (formData.establishedYear && (formData.establishedYear < 1900 || formData.establishedYear > currentYear)) {
      newErrors.establishedYear = `Year must be between 1900 and ${currentYear}`
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0]
      const element = document.querySelector(`[name="${firstErrorField}"]`)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" })
      }
      return
    }

    console.log("Supplier registration submitted:", { selectedTier, formData, files })
    setShowSummary(true)
  }

  const closeSummary = () => {
    setShowSummary(false)
    // Reset form
    setSelectedTier("")
    setFormData({
      companyName: "",
      country: "",
      city: "",
      establishedYear: "",
      website: "",
      fullName: "",
      jobTitle: "",
      email: "",
      phone: "",
      productCategories: [],
      productDescription: "",
      monthlyCapacity: "",
      moq: "",
      currentlyExport: "",
      exportMarkets: "",
      portOfLoading: "",
      certifications: [],
      customCertification: "",
      internationalExperience: "",
      additionalNotes: "",
      accuracyConfirm: false,
      termsAgree: false,
    })
    setFiles({ registration: [], catalog: [], photos: [] })
    setErrors({})
  }

  return (
    <>
      <section className="bg-white min-h-screen py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-block bg-black text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              SUPPLIER REGISTRATION
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 leading-tight">
              Join Our Global
              <br />
              Supplier Network
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Connect with international buyers and grow your business with 1World Sourcing
            </p>
          </div>

          {/* Tier Information Tabs */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row bg-gray-100 rounded-lg p-1 mb-6 sm:mb-8">
              <button
                onClick={() => setActiveTab("registration")}
                className={`flex-1 py-4 px-4 rounded-md text-sm font-medium  transition-colors ${
                  activeTab === "registration" ? "bg-black text-white shadow-sm" : "text-gray-600 hover:text-black"
                }`}
              >
                Registration Tiers
              </button>
              <button
                onClick={() => setActiveTab("performance")}
                className={`flex-1 py-4 px-4 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "performance" ? "bg-black text-white shadow-sm" : "text-gray-600 hover:text-black"
                }`}
              >
                Performance Progression
              </button>
            </div>

            {activeTab === "registration" && (
              <div>
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-4">
                    Choose Your Registration Tier
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base px-4">
                    Select your initial registration level - you'll progress through performance tiers as you complete
                    successful orders
                  </p>
                </div>
                {errors.tier && <div className="text-red-500 text-center mb-4 font-medium text-sm">{errors.tier}</div>}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {supplierTiers.map((tier) => (
                    <div
                      key={tier.name}
                      onClick={() => setSelectedTier(tier.name.toLowerCase())}
                      className={`relative cursor-pointer rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                        selectedTier === tier.name.toLowerCase()
                          ? "border-black transform scale-105 shadow-2xl"
                          : "border-gray-200 hover:border-gray-400 hover:shadow-xl"
                      }`}
                    >
                      <div className="bg-white p-4 sm:p-6 h-full min-h-[350px] sm:min-h-[400px] flex flex-col">
                        <div className="text-center mb-4 sm:mb-6">
                          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-black">{tier.name}</h3>
                          <div className="text-2xl sm:text-3xl font-black text-black">${tier.price}</div>
                          <p className="text-xs sm:text-sm text-gray-600">one-time registration fee</p>
                        </div>

                        <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm flex-1">
                          {tier.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                              <svg
                                className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 text-black"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="leading-5 text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        {selectedTier === tier.name.toLowerCase() && (
                          <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center shadow-lg">
                              <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "performance" && (
              <div>
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-4">
                    Performance-Based Progression
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base px-4">
                    Advance through these tiers based on your performance and successful order completions
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {performanceTiers.map((tier, index) => (
                    <div
                      key={tier.level}
                      className="relative overflow-hidden bg-white border border-gray-200 rounded-lg"
                    >
                      <div className="p-4 sm:p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <span className="text-xl sm:text-2xl">{tier.icon}</span>
                            <div>
                              <h3 className="text-base sm:text-lg font-bold text-black">{tier.name}</h3>
                              <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mt-1">
                                Tier {tier.level}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-3 sm:space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm text-gray-700 mb-2">Eligibility:</h4>
                            <p className="text-xs sm:text-sm text-gray-600">{tier.eligibility}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-gray-700 mb-2">Benefits:</h4>
                            <ul className="space-y-1">
                              {tier.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-600">
                                  <span className="text-black mt-1 font-bold">•</span>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      {index < performanceTiers.length - 1 && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center border border-gray-200">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Registration Form */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 sm:p-6 lg:p-8">
            <div className="space-y-8 sm:space-y-10">
              {/* Company Information */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6 flex items-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  Company Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base ${
                        errors.companyName ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Your Company Name"
                    />
                    {errors.companyName && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.companyName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Established Year <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="establishedYear"
                      value={formData.establishedYear}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base ${
                        errors.establishedYear ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="2020"
                      min="1900"
                      max={new Date().getFullYear()}
                    />
                    {errors.establishedYear && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.establishedYear}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base ${
                        errors.country ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    {errors.country && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.country}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base ${
                        errors.city ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Your City"
                    />
                    {errors.city && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.city}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Website or Social Media Link</label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base"
                      placeholder="https://yourwebsite.com or https://linkedin.com/company/yourcompany"
                    />
                  </div>
                </div>
              </div>

              {/* Primary Contact Details */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6 flex items-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  Primary Contact Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base ${
                        errors.fullName ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Your Full Name"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title / Position <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base ${
                        errors.jobTitle ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Sales Manager, CEO, Export Director, etc."
                    />
                    {errors.jobTitle && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.jobTitle}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="+86 138 0013 8000 or +1 555 123 4567"
                    />
                    {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Product & Business Details */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6 flex items-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  Product & Business Details
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Main Product Categories <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                      {productCategories.map((category) => (
                        <label
                          key={category}
                          className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            name="productCategories"
                            value={category}
                            checked={formData.productCategories.includes(category)}
                            onChange={handleChange}
                            className="text-black focus:ring-black rounded"
                          />
                          <span className="text-xs sm:text-sm text-gray-700 leading-tight">{category}</span>
                        </label>
                      ))}
                    </div>
                    {errors.productCategories && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.productCategories}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Description & USPs <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="productDescription"
                      value={formData.productDescription}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base ${
                        errors.productDescription ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Describe your products in detail, including unique selling points, quality standards, customization capabilities, and what makes your company stand out..."
                    ></textarea>
                    {errors.productDescription && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.productDescription}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Monthly Production Capacity <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="monthlyCapacity"
                        value={formData.monthlyCapacity}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base ${
                          errors.monthlyCapacity ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="e.g., 50,000 pieces/month, 1000 tons/month"
                      />
                      {errors.monthlyCapacity && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.monthlyCapacity}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Minimum Order Quantity (MOQ) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="moq"
                        value={formData.moq}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 sm:px-4 sm:py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base ${
                          errors.moq ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="e.g., 500 units, 1 container, 10 tons"
                      />
                      {errors.moq && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.moq}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Do you currently export products? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="currentlyExport"
                          value="yes"
                          checked={formData.currentlyExport === "yes"}
                          onChange={handleChange}
                          className="text-black focus:ring-black"
                        />
                        <span className="text-sm sm:text-base text-gray-700">Yes, we currently export</span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="currentlyExport"
                          value="no"
                          checked={formData.currentlyExport === "no"}
                          onChange={handleChange}
                          className="text-black focus:ring-black"
                        />
                        <span className="text-sm sm:text-base text-gray-700">No, domestic only</span>
                      </label>
                    </div>
                    {errors.currentlyExport && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.currentlyExport}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Main Export Markets</label>
                      <input
                        type="text"
                        name="exportMarkets"
                        value={formData.exportMarkets}
                        onChange={handleChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base"
                        placeholder="USA, Europe, Middle East, Southeast Asia, etc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Port of Loading</label>
                      <input
                        type="text"
                        name="portOfLoading"
                        value={formData.portOfLoading}
                        onChange={handleChange}
                        className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base"
                        placeholder="Shanghai, Ningbo, Shenzhen, Hamburg, etc."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications & Documentation */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6 flex items-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  Certifications & Documentation
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Certifications Held (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {certificationOptions.map((cert) => (
                        <label
                          key={cert}
                          className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                        >
                          <input
                            type="checkbox"
                            name="certifications"
                            value={cert}
                            checked={formData.certifications.includes(cert)}
                            onChange={handleChange}
                            className="text-black focus:ring-black rounded"
                          />
                          <span className="text-xs sm:text-sm text-gray-700">{cert}</span>
                        </label>
                      ))}
                    </div>

                    {formData.certifications.includes("Other") && (
                      <div className="mt-4">
                        <input
                          type="text"
                          name="customCertification"
                          value={formData.customCertification}
                          onChange={handleChange}
                          className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base"
                          placeholder="Please specify other certifications..."
                        />
                      </div>
                    )}
                  </div>

                  {/* File Uploads */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Company Registration */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Registration Document <span className="text-red-500">*</span>
                      </label>
                      <div
                        className={`border-2 border-dashed rounded-lg p-4 sm:p-6 text-center transition-colors ${
                          errors.registration ? "border-red-300 bg-red-50" : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <input
                          type="file"
                          onChange={(e) => handleFileUpload(e, "registration")}
                          className="hidden"
                          id="registration"
                          accept=".pdf,.jpg,.jpeg,.png"
                        />
                        <label htmlFor="registration" className="cursor-pointer">
                          <svg
                            className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-400 mb-2 sm:mb-3"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="text-xs sm:text-sm text-gray-600 mb-1">Upload Business License</p>
                          <p className="text-xs text-gray-500">PDF, JPG, PNG (Max 10MB)</p>
                        </label>
                      </div>
                      {errors.registration && (
                        <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.registration}</p>
                      )}
                      {files.registration.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-gray-50 p-2 sm:p-3 rounded-lg mt-2"
                        >
                          <span className="text-xs sm:text-sm text-gray-700 truncate flex-1">{file.name}</span>
                          <button
                            onClick={() => removeFile("registration", index)}
                            className="text-red-500 hover:text-red-700 text-xs sm:text-sm font-medium ml-2"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Product Catalog */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Product Catalog / Brochure</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-gray-400 transition-colors">
                        <input
                          type="file"
                          onChange={(e) => handleFileUpload(e, "catalog")}
                          className="hidden"
                          id="catalog"
                          accept=".pdf,.jpg,.jpeg,.png"
                          multiple
                        />
                        <label htmlFor="catalog" className="cursor-pointer">
                          <svg
                            className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-400 mb-2 sm:mb-3"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="text-xs sm:text-sm text-gray-600 mb-1">Upload Product Catalog</p>
                          <p className="text-xs text-gray-500">PDF, JPG, PNG (Max 10MB each)</p>
                        </label>
                      </div>
                      {files.catalog.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-gray-50 p-2 sm:p-3 rounded-lg mt-2"
                        >
                          <span className="text-xs sm:text-sm text-gray-700 truncate flex-1">{file.name}</span>
                          <button
                            onClick={() => removeFile("catalog", index)}
                            className="text-red-500 hover:text-red-700 text-xs sm:text-sm font-medium ml-2"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Product Photos */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Sample Product Photos</label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-gray-400 transition-colors">
                        <input
                          type="file"
                          onChange={(e) => handleFileUpload(e, "photos")}
                          className="hidden"
                          id="photos"
                          accept=".jpg,.jpeg,.png"
                          multiple
                        />
                        <label htmlFor="photos" className="cursor-pointer">
                          <svg
                            className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-400 mb-2 sm:mb-3"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                          >
                            <path
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6 6h.01M6 20v-2a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2z"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="text-xs sm:text-sm text-gray-600 mb-1">Upload Product Photos</p>
                          <p className="text-xs text-gray-500">JPG, PNG (Max 10MB each)</p>
                        </label>
                      </div>
                      {files.photos.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-gray-50 p-2 sm:p-3 rounded-lg mt-2"
                        >
                          <span className="text-xs sm:text-sm text-gray-700 truncate flex-1">{file.name}</span>
                          <button
                            onClick={() => removeFile("photos", index)}
                            className="text-red-500 hover:text-red-700 text-xs sm:text-sm font-medium ml-2"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6 flex items-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Additional Information
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Have you worked with international buyers before? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="internationalExperience"
                          value="yes"
                          checked={formData.internationalExperience === "yes"}
                          onChange={handleChange}
                          className="text-black focus:ring-black"
                        />
                        <span className="text-sm sm:text-base text-gray-700">
                          Yes, we have international experience
                        </span>
                      </label>
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="internationalExperience"
                          value="no"
                          checked={formData.internationalExperience === "no"}
                          onChange={handleChange}
                          className="text-black focus:ring-black"
                        />
                        <span className="text-sm sm:text-base text-gray-700">No, this would be our first time</span>
                      </label>
                    </div>
                    {errors.internationalExperience && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.internationalExperience}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes or Message</label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm sm:text-base"
                      placeholder="Tell us about your company's strengths, special capabilities, awards, or any other information that would help international buyers understand your value proposition..."
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Consent */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-black mb-4 sm:mb-6 flex items-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Consent & Agreement
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  <label
                    className={`flex items-start space-x-3 p-3 sm:p-4 border rounded-lg cursor-pointer transition-colors ${
                      errors.accuracyConfirm ? "border-red-300 bg-red-50" : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="accuracyConfirm"
                      checked={formData.accuracyConfirm}
                      onChange={handleChange}
                      className="text-black focus:ring-black rounded mt-1 flex-shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      I confirm that all the information provided in this application is accurate, complete, and
                      up-to-date. I understand that providing false information may result in rejection or termination
                      of my supplier account. <span className="text-red-500 font-medium">*</span>
                    </span>
                  </label>
                  {errors.accuracyConfirm && (
                    <p className="text-red-500 text-xs sm:text-sm">{errors.accuracyConfirm}</p>
                  )}

                  <label
                    className={`flex items-start space-x-3 p-3 sm:p-4 border rounded-lg cursor-pointer transition-colors ${
                      errors.termsAgree ? "border-red-300 bg-red-50" : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="termsAgree"
                      checked={formData.termsAgree}
                      onChange={handleChange}
                      className="text-black focus:ring-black rounded mt-1 flex-shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                      I agree to 1World Sourcing's{" "}
                      <a href="#" className="text-black underline hover:no-underline">
                        supplier code of conduct
                      </a>
                      ,{" "}
                      <a href="#" className="text-black underline hover:no-underline">
                        terms of service
                      </a>
                      , and{" "}
                      <a href="#" className="text-black underline hover:no-underline">
                        privacy policy
                      </a>
                      . I understand the responsibilities and obligations of being a registered supplier.{" "}
                      <span className="text-red-500 font-medium">*</span>
                    </span>
                  </label>
                  {errors.termsAgree && <p className="text-red-500 text-xs sm:text-sm">{errors.termsAgree}</p>}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 sm:pt-8 border-t border-gray-200">
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                  <div className="flex items-center space-x-3 text-xs sm:text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-black flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p>
                      <strong>What happens next:</strong> After submitting your application, our team will review it
                      within 48 hours. You'll receive an email with payment instructions for your selected tier. Once
                      payment is confirmed, your supplier profile will be activated and you'll gain access to our buyer
                      network.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-black text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-lg shadow-lg hover:shadow-xl"
                >
                  SUBMIT APPLICATION
                  {selectedTier && (
                    <span className="ml-2 text-gray-300 text-xs sm:text-sm">
                      ({supplierTiers.find((t) => t.name.toLowerCase() === selectedTier)?.name} - $
                      {supplierTiers.find((t) => t.name.toLowerCase() === selectedTier)?.price})
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Summary Modal */}
      {showSummary && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeSummary}
        >
          <div
            className={`bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${showSummary ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 sm:w-7 sm:h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black">Application Submitted Successfully!</h3>
                  <p className="text-sm sm:text-base text-gray-600">Welcome to the 1World Sourcing supplier network</p>
                </div>
              </div>
              <button
                onClick={closeSummary}
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              {/* Thank you message */}
              <div className="text-center mb-6 sm:mb-8">
                <h4 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">
                  Thank you for your interest in becoming a supplier!
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Your application has been received and our supplier relations team will review it carefully. We
                  appreciate your time in providing detailed information about your company.
                </p>
              </div>

              {/* Application Summary */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                <h5 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4 flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Application Summary
                </h5>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-gray-500 font-medium">Company:</span>
                      <span className="text-black font-semibold text-right">{formData.companyName}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-gray-500 font-medium">Contact Person:</span>
                      <span className="text-black font-semibold text-right">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-gray-500 font-medium">Email:</span>
                      <span className="text-black font-semibold text-right">{formData.email}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-gray-500 font-medium">Location:</span>
                      <span className="text-black font-semibold text-right">
                        {formData.city}, {formData.country}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-start">
                      <span className="text-gray-500 font-medium">Tier Selected:</span>
                      <span className="text-black font-semibold text-right capitalize">
                        {selectedTier} (${supplierTiers.find((t) => t.name.toLowerCase() === selectedTier)?.price})
                      </span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-gray-500 font-medium">Established:</span>
                      <span className="text-black font-semibold text-right">{formData.establishedYear}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-gray-500 font-medium">Product Categories:</span>
                      <span className="text-black font-semibold text-right">
                        {formData.productCategories.length} selected
                      </span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-gray-500 font-medium">Files Uploaded:</span>
                      <span className="text-black font-semibold text-right">
                        {files.registration.length + files.catalog.length + files.photos.length} files
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps Timeline */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                <h5 className="font-bold text-black mb-3 sm:mb-4 flex items-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  What Happens Next?
                </h5>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-xs sm:text-sm">1</span>
                    </div>
                    <div>
                      <p className="font-medium text-black text-sm sm:text-base">Application Review (24-48 hours)</p>
                      <p className="text-gray-700 text-xs sm:text-sm">
                        Our supplier relations team will carefully review your application and verify submitted
                        documents.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-xs sm:text-sm">2</span>
                    </div>
                    <div>
                      <p className="font-medium text-black text-sm sm:text-base">Payment Instructions</p>
                      <p className="text-gray-700 text-xs sm:text-sm">
                        You'll receive an email with secure payment instructions for your selected {selectedTier} tier
                        (${supplierTiers.find((t) => t.name.toLowerCase() === selectedTier)?.price}).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-xs sm:text-sm">3</span>
                    </div>
                    <div>
                      <p className="font-medium text-black text-sm sm:text-base">Profile Activation</p>
                      <p className="text-gray-700 text-xs sm:text-sm">
                        Once payment is confirmed, your supplier profile will be activated and you'll gain access to our
                        buyer network.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-black text-sm sm:text-base">Start Receiving Inquiries</p>
                      <p className="text-gray-700 text-xs sm:text-sm">
                        Begin connecting with international buyers looking for your products and services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Tier Progression Info */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                <h5 className="font-bold text-black mb-3 sm:mb-4 flex items-center">
                  <span className="text-lg sm:text-xl mr-2">🚀</span>
                  Your Journey to Success
                </h5>
                <p className="text-gray-800 text-xs sm:text-sm mb-3 sm:mb-4">
                  You'll start as a <strong>Registered Supplier (Tier 1)</strong> and can progress through our
                  performance-based tiers:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-xs">
                  {performanceTiers.map((tier, index) => (
                    <div
                      key={tier.level}
                      className={`p-2 sm:p-3 rounded-lg ${index === 0 ? "bg-black text-white border-2 border-black" : "bg-white border border-gray-200"}`}
                    >
                      <div className="flex items-center space-x-1 sm:space-x-2 mb-1">
                        <span className="text-sm sm:text-base">{tier.icon}</span>
                        <span className={`font-medium text-xs ${index === 0 ? "text-white" : "text-black"}`}>
                          {tier.name}
                        </span>
                      </div>
                      {index === 0 && (
                        <span className="inline-block bg-white text-black text-xs px-1 py-0.5 rounded">
                          You start here
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Reference Number */}
              <div className="text-center p-4 sm:p-6 bg-black text-white rounded-lg mb-4 sm:mb-6">
                <p className="text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">Application Reference Number</p>
                <p className="text-xl sm:text-2xl font-bold tracking-wider">SUP-{Date.now().toString().slice(-6)}</p>
                <p className="text-gray-400 text-xs mt-1 sm:mt-2">Please save this reference number for your records</p>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                <h6 className="font-medium text-black mb-2">Questions or Need Help?</h6>
                <div className="text-xs sm:text-sm text-gray-600 space-y-1">
                  <p>
                    Email:{" "}
                    <a href="mailto:suppliers@1worldsourcing.com" className="text-black underline">
                      suppliers@1worldsourcing.com
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a href="tel:+15551234567" className="text-black underline">
                      +1 (555) 123-4567
                    </a>
                  </p>
                  <p>
                    WhatsApp:{" "}
                    <a href="https://wa.me/15551234567" className="text-black underline">
                      +1 (555) 123-4567
                    </a>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button
                  onClick={closeSummary}
                  className="flex-1 bg-black text-white hover:bg-gray-800 py-2 sm:py-3 px-4 rounded-lg font-medium text-sm sm:text-base transition-colors"
                >
                  Close & Start New Application
                </button>
                <button
                  className="flex-1 bg-white text-black border border-gray-300 hover:bg-gray-50 py-2 sm:py-3 px-4 rounded-lg font-medium text-sm sm:text-base transition-colors"
                  onClick={() => window.print()}
                >
                  Print Summary
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SupplierRegistration
