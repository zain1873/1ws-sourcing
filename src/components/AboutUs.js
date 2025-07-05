// const AboutUs = () => {
//   return (
//     <section id="about" className="bg-gray-50 py-16 lg:py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="inline-block bg-black text-white px-4 py-2 rounded text-sm font-medium mb-8">
//             ABOUT US
//           </div>
          
//         </div>

//         {/* Content Section */}
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white rounded-lg shadow-sm p-8 lg:p-12 mb-8">
//             <p className="text-lg text-gray-700 leading-relaxed mb-6">
//               Since 1992, <strong className="text-black font-semibold">1World Sourcing</strong> has been a trusted leader in global sourcing, specializing in the 
//               textile, steel, and many other industries. With over 30 years of hands-on experience, we 
//               understand the complexities of international procurement and supply chain management 
//               better than anyone.
//             </p>
//           </div>

//           <div className="bg-white rounded-lg shadow-sm p-8 lg:p-12 mb-8">
//             <p className="text-lg text-gray-700 leading-relaxed mb-6">
//               Our extensive network of carefully vetted and reliable suppliers worldwide ensures that every 
//               product meets the highest quality and compliance standards. We don't just connect you with 
//               suppliers — we partner with you throughout the entire sourcing journey, providing 
//               transparent communication, expert negotiation, and rigorous quality assurance at every step.
//             </p>
//           </div>

//           <div className="bg-white rounded-lg shadow-sm p-8 lg:p-12 mb-8">
//             <p className="text-lg text-gray-700 leading-relaxed mb-6">
//               Our commitment is to your peace of mind and business success. We prioritize long-term 
//               relationships built on trust, integrity, and consistent delivery. Whether you are a small 
//               business or a large enterprise, you can rely on <strong className="text-black font-semibold">1World Sourcing</strong> to source competitively 
//               priced, superior products tailored exactly to your specifications — backed by unparalleled 
//               industry knowledge and personalized support.
//             </p>
//           </div>

//           <div className="bg-white rounded-lg shadow-sm p-8 lg:p-12">
//             <p className="text-lg text-gray-700 leading-relaxed">
//               With <strong className="text-black font-semibold">1World Sourcing</strong>, you're not just sourcing a product, you're gaining a dependable 
//               partner dedicated to your growth and success.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// const AboutUs = () => {
//   return (
//     <section id="about" className="relative min-h-screen bg-white">
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 via-white to-gray-50"></div>
//         <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
//         <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
//         <div className="absolute bottom-20 left-40 w-72 h-72 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//       </div>

//       <div className="relative">
//         {/* Header Section */}
//         <div className="container mx-auto px-6 py-20">
//           <div className="text-center max-w-4xl mx-auto">
//             <div className="inline-flex items-center bg-gradient-to-r from-gray-900 to-black text-white px-8 py-4 rounded-full text-sm font-bold tracking-widest mb-12 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
//               <div className="w-3 h-3 bg-white rounded-full mr-4 animate-pulse"></div>
//               ABOUT US
//             </div>
            
//             <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8">
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-black to-gray-700 leading-tight">
//                 Dedicated to
//               </span>
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 leading-tight">
//                 Excellence
//               </span>
//             </h1>
            
//             <p className="text-2xl md:text-3xl text-gray-600 font-light leading-relaxed mb-16">
//               30+ years of global sourcing expertise, connecting businesses worldwide with trusted manufacturing partners
//             </p>
//           </div>
//         </div>

//         {/* Main Content with Sticky Layout */}
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col lg:flex-row gap-12">
            
//             {/* Left Content - Scrollable */}
//             <div className="lg:w-1/2 space-y-12 pb-20" style={{ minHeight: '200vh' }}>
              
//               {/* Card 1 - Our Heritage */}
//               <div className="group relative">
//                 <div className="relative bg-white group-hover:bg-black p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-black hover:translate-x-2 hover:-translate-y-1">
//                   <div className="flex items-start space-x-6">
//                     <div className="flex-shrink-0">
//                       <div className="w-16 h-16 bg-black group-hover:bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
//                         <svg className="w-8 h-8 text-white group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                         </svg>
//                       </div>
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
//                         Our Heritage
//                       </h3>
//                       <p className="text-gray-600 group-hover:text-gray-300 text-lg leading-relaxed transition-colors duration-300">
//                         Since 1992, <span className="font-semibold text-black group-hover:text-white bg-yellow-100 group-hover:bg-yellow-400 px-2 py-1 rounded-lg transition-colors duration-300">1World Sourcing</span> has been a trusted leader in global sourcing, specializing in the textile, steel, and many other industries. With over 30 years of hands-on experience, we understand the complexities of international procurement and supply chain management better than anyone.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Card 2 - Our Network */}
//               <div className="group relative">
//                 <div className="relative bg-white group-hover:bg-black p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-black hover:translate-x-2 hover:-translate-y-1">
//                   <div className="flex items-start space-x-6">
//                     <div className="flex-shrink-0">
//                       <div className="w-16 h-16 bg-black group-hover:bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
//                         <svg className="w-8 h-8 text-white group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                       </div>
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
//                         Our Network
//                       </h3>
//                       <p className="text-gray-600 group-hover:text-gray-300 text-lg leading-relaxed transition-colors duration-300">
//                         Our extensive network of carefully vetted and reliable suppliers worldwide ensures that every product meets the highest quality and compliance standards. We don't just connect you with suppliers — we partner with you throughout the entire sourcing journey.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Card 3 - Our Commitment */}
//               <div className="group relative">
//                 <div className="relative bg-white group-hover:bg-black p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-black hover:translate-x-2 hover:-translate-y-1">
//                   <div className="flex items-start space-x-6">
//                     <div className="flex-shrink-0">
//                       <div className="w-16 h-16 bg-black group-hover:bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
//                         <svg className="w-8 h-8 text-white group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                         </svg>
//                       </div>
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
//                         Our Commitment
//                       </h3>
//                       <p className="text-gray-600 group-hover:text-gray-300 text-lg leading-relaxed transition-colors duration-300">
//                         Our commitment is to your peace of mind and business success. We prioritize long-term relationships built on trust, integrity, and consistent delivery. Whether you are a small business or a large enterprise, you can rely on <span className="font-semibold text-black group-hover:text-white bg-yellow-100 group-hover:bg-yellow-400 px-2 py-1 rounded-lg transition-colors duration-300">1World Sourcing</span> to source competitively priced, superior products.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Card 4 - Our Promise */}
//               <div className="group relative">
//                 <div className="relative bg-white group-hover:bg-black p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-black hover:translate-x-2 hover:-translate-y-1">
//                   <div className="flex items-start space-x-6">
//                     <div className="flex-shrink-0">
//                       <div className="w-16 h-16 bg-black group-hover:bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
//                         <svg className="w-8 h-8 text-white group-hover:text-black transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                       </div>
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
//                         Our Promise
//                       </h3>
//                       <p className="text-gray-600 group-hover:text-gray-300 text-lg leading-relaxed transition-colors duration-300">
//                         With <span className="font-semibold text-black group-hover:text-white bg-yellow-100 group-hover:bg-yellow-400 px-2 py-1 rounded-lg transition-colors duration-300">1World Sourcing</span>, you're not just sourcing a product, you're gaining a dependable partner dedicated to your growth and success. We provide unparalleled industry knowledge and personalized support.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Sticky Image Section */}
//             <div className="lg:w-1/2 lg:sticky lg:top-8 lg:self-start lg:h-screen lg:flex lg:items-center">
//               <div className="w-full h-[85vh]">
//                 <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl group">
//                   {/* Background Image Placeholder */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
                  
//                   {/* Replace this div with your actual image */}
//                   {/* <img src="your-image-url" alt="About Us" className="absolute inset-0 w-full h-full object-cover" /> */}
                  
//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
//                   {/* Content Overlay */}
//                   <div className="absolute inset-0 flex flex-col justify-end p-12">
//                     <div className="text-white">
//                       <div className="mb-8">
//                         <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-6 py-3 mb-6">
//                           <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
//                           <span className="text-white font-semibold">Global Presence</span>
//                         </div>
                        
//                         <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
//                           Trusted Worldwide
//                         </h2>
                        
//                         <p className="text-xl text-white/80 mb-8 leading-relaxed">
//                           Connecting businesses across continents with reliable manufacturing partnerships
//                         </p>
//                       </div>
                      
//                       {/* Stats */}
//                       <div className="grid grid-cols-3 gap-6 mb-8">
//                         <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
//                           <div className="text-3xl font-black text-white mb-2">30+</div>
//                           <div className="text-white/70 text-sm font-medium">Years Experience</div>
//                         </div>
//                         <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
//                           <div className="text-3xl font-black text-white mb-2">1000+</div>
//                           <div className="text-white/70 text-sm font-medium">Suppliers</div>
//                         </div>
//                         <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
//                           <div className="text-3xl font-black text-white mb-2">50+</div>
//                           <div className="text-white/70 text-sm font-medium">Countries</div>
//                         </div>
//                       </div>
                      
//                       {/* CTA */}
//                       <div className="flex items-center space-x-4">
//                         <div className="h-px bg-gradient-to-r from-white/50 to-transparent flex-1"></div>
//                         <span className="text-white/60 text-sm font-medium tracking-widest">EXCELLENCE SINCE 1992</span>
//                         <div className="h-px bg-gradient-to-l from-white/50 to-transparent flex-1"></div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Floating Elements */}
//                   <div className="absolute top-8 right-8 w-4 h-4 bg-white/40 rounded-full animate-ping"></div>
//                   <div className="absolute top-20 right-20 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
//                   <div className="absolute bottom-32 left-8 w-3 h-3 bg-white/30 rounded-full animate-bounce"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(0px, 0px) scale(1); }
//           33% { transform: translate(30px, -50px) scale(1.1); }
//           66% { transform: translate(-20px, 20px) scale(0.9); }
//           100% { transform: translate(0px, 0px) scale(1); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//       `}</style>
//     </section>
//   )
// }

// export default AboutUs



const AboutUs = () => {
  return (
    <section id="about" className="relative min-h-screen bg-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 via-white to-gray-50"></div>
        <div className="hidden lg:block absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="hidden lg:block absolute top-40 left-20 w-72 h-72 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="hidden lg:block absolute bottom-20 left-40 w-72 h-72 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative">
        {/* Header Section */}
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-gradient-to-r from-gray-900 to-black text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full text-xs sm:text-sm font-bold tracking-widest mb-8 sm:mb-10 lg:mb-12 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full mr-2 sm:mr-4 animate-pulse"></div>
              ABOUT US
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-black to-gray-700 leading-tight">
                Dedicated to
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 leading-tight">
                Excellence
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-light leading-relaxed mb-12 sm:mb-16 px-4">
              30+ years of global sourcing expertise, connecting businesses worldwide with trusted manufacturing partners
            </p>
          </div>
        </div>

        {/* Main Content with Sticky Layout */}
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left Content - Scrollable */}
            <div className="w-full lg:w-1/2 space-y-8 sm:space-y-12 lg:space-y-16 pb-12 sm:pb-16 lg:pb-20">
              
              {/* Section Header */}
              <div className="mb-8 sm:mb-10 lg:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4 sm:mb-6 leading-tight">
                  Why Choose
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    1World Sourcing
                  </span>
                </h2>
                <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-black to-gray-400"></div>
              </div>

              {/* Timeline Style Cards - Mobile: Simple Cards, Desktop: Timeline */}
              <div className="relative">
                {/* Vertical Line - Hidden on mobile */}
                <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-black via-gray-300 to-transparent"></div>
                
                {/* Card 1 - Our Heritage */}
                <div className="relative mb-8 sm:mb-12 lg:mb-16 lg:ml-20">
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden lg:block absolute -left-[3.25rem] top-8 w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>
                  
                  <div className="group">
                    <div className="bg-white hover:bg-black p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-2 sm:border-l-4 border-black hover:translate-x-0 lg:hover:translate-x-4 hover:-translate-y-0 lg:hover:-translate-y-2">
                      <div className="mb-4 sm:mb-6">
                        <span className="inline-block bg-black group-hover:bg-white text-white group-hover:text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider transition-colors duration-300">
                          SINCE 1992
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-black text-black group-hover:text-white mb-4 sm:mb-6 transition-colors duration-300">
                        Our Heritage
                      </h3>
                      
                      <p className="text-gray-600 group-hover:text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 transition-colors duration-300">
                        <span className="font-semibold text-black group-hover:text-white bg-yellow-100 group-hover:bg-yellow-400 px-2 py-1 rounded transition-colors duration-300">1World Sourcing</span> has been a trusted leader in global sourcing, specializing in textile, steel, and many other industries. With over 30 years of hands-on experience, we understand international procurement complexities better than anyone.
                      </p>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-black group-hover:text-white transition-colors duration-300">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="font-medium text-sm sm:text-base">30+ Years Experience</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Our Network */}
                <div className="relative mb-8 sm:mb-12 lg:mb-16 lg:ml-20">
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden lg:block absolute -left-[3.25rem] top-8 w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>
                  
                  <div className="group">
                    <div className="bg-white hover:bg-black p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-2 sm:border-l-4 border-black hover:translate-x-0 lg:hover:translate-x-4 hover:-translate-y-0 lg:hover:-translate-y-2">
                      <div className="mb-4 sm:mb-6">
                        <span className="inline-block bg-black group-hover:bg-white text-white group-hover:text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider transition-colors duration-300">
                          GLOBAL REACH
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-black text-black group-hover:text-white mb-4 sm:mb-6 transition-colors duration-300">
                        Our Network
                      </h3>
                      
                      <p className="text-gray-600 group-hover:text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 transition-colors duration-300">
                        Our extensive network of carefully vetted and reliable suppliers worldwide ensures every product meets the highest quality standards. We partner with you throughout the entire sourcing journey.
                      </p>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-black group-hover:text-white transition-colors duration-300">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="font-medium text-sm sm:text-base">1000+ Verified Suppliers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Our Commitment */}
                <div className="relative mb-8 sm:mb-12 lg:mb-16 lg:ml-20">
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden lg:block absolute -left-[3.25rem] top-8 w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>
                  
                  <div className="group">
                    <div className="bg-white hover:bg-black p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-2 sm:border-l-4 border-black hover:translate-x-0 lg:hover:translate-x-4 hover:-translate-y-0 lg:hover:-translate-y-2">
                      <div className="mb-4 sm:mb-6">
                        <span className="inline-block bg-black group-hover:bg-white text-white group-hover:text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider transition-colors duration-300">
                          TRUST & INTEGRITY
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-black text-black group-hover:text-white mb-4 sm:mb-6 transition-colors duration-300">
                        Our Commitment
                      </h3>
                      
                      <p className="text-gray-600 group-hover:text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 transition-colors duration-300">
                        Our commitment is to your peace of mind and business success. We prioritize long-term relationships built on trust, integrity, and consistent delivery. Whether small business or large enterprise, rely on <span className="font-semibold text-black group-hover:text-white bg-yellow-100 group-hover:bg-yellow-400 px-2 py-1 rounded transition-colors duration-300">1World Sourcing</span>.
                      </p>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-black group-hover:text-white transition-colors duration-300">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="font-medium text-sm sm:text-base">Quality Guaranteed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 4 - Our Promise */}
                <div className="relative lg:ml-20">
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden lg:block absolute -left-[3.25rem] top-8 w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300"></div>
                  
                  <div className="group">
                    <div className="bg-white hover:bg-black p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-2 sm:border-l-4 border-black hover:translate-x-0 lg:hover:translate-x-4 hover:-translate-y-0 lg:hover:-translate-y-2">
                      <div className="mb-4 sm:mb-6">
                        <span className="inline-block bg-black group-hover:bg-white text-white group-hover:text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider transition-colors duration-300">
                          YOUR SUCCESS
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-black text-black group-hover:text-white mb-4 sm:mb-6 transition-colors duration-300">
                        Our Promise
                      </h3>
                      
                      <p className="text-gray-600 group-hover:text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 transition-colors duration-300">
                        With <span className="font-semibold text-black group-hover:text-white bg-yellow-100 group-hover:bg-yellow-400 px-2 py-1 rounded transition-colors duration-300">1World Sourcing</span>, you're not just sourcing a product, you're gaining a dependable partner dedicated to your growth and success with unparalleled industry knowledge and personalized support.
                      </p>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-black group-hover:text-white transition-colors duration-300">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="font-medium text-sm sm:text-base">Dedicated Partnership</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sticky Image Section */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:sticky lg:top-8 lg:self-start lg:h-screen lg:flex lg:items-center">
              <div className="w-full h-80 sm:h-96 md:h-[500px] lg:h-[85vh]">
                <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl group">
                  {/* Background Image Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
                  
                  {/* Replace this div with your actual image */}
                  {/* <img src="your-image-url" alt="About Us" className="absolute inset-0 w-full h-full object-cover" /> */}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-12">
                    <div className="text-white">
                      <div className="mb-6 sm:mb-8">
                        <div className="inline-flex items-center bg-white/20 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
                          <span className="text-white font-semibold text-sm sm:text-base">Global Presence</span>
                        </div>
                        
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-3 sm:mb-4 lg:mb-6 leading-tight">
                          Trusted Worldwide
                        </h2>
                        
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                          Connecting businesses across continents with reliable manufacturing partnerships
                        </p>
                      </div>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-6 sm:mb-8">
                        <div className="text-center bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 hover:bg-white/20 transition-all duration-300">
                          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-1">30+</div>
                          <div className="text-white/70 text-xs sm:text-sm font-medium">Years Experience</div>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 hover:bg-white/20 transition-all duration-300">
                          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-1">1000+</div>
                          <div className="text-white/70 text-xs sm:text-sm font-medium">Suppliers</div>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-3 md:p-4 lg:p-6 hover:bg-white/20 transition-all duration-300">
                          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white mb-1">50+</div>
                          <div className="text-white/70 text-xs sm:text-sm font-medium">Countries</div>
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <div className="flex items-center space-x-2 sm:space-x-4">
                        <div className="h-px bg-gradient-to-r from-white/50 to-transparent flex-1"></div>
                        <span className="text-white/60 text-xs sm:text-sm font-medium tracking-widest">EXCELLENCE SINCE 1992</span>
                        <div className="h-px bg-gradient-to-l from-white/50 to-transparent flex-1"></div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements - Hidden on mobile for better performance */}
                  <div className="hidden sm:block absolute top-8 right-8 w-4 h-4 bg-white/40 rounded-full animate-ping"></div>
                  <div className="hidden sm:block absolute top-20 right-20 w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                  <div className="hidden sm:block absolute bottom-32 left-8 w-3 h-3 bg-white/30 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Remove hover effects on mobile */
        @media (max-width: 1023px) {
          .group:hover .bg-white {
            background-color: white !important;
          }
          .group:hover .text-black {
            color: rgb(0 0 0) !important;
          }
          .group:hover .text-gray-600 {
            color: rgb(75 85 99) !important;
          }
          .group:hover .bg-black {
            background-color: rgb(0 0 0) !important;
          }
          .group:hover .text-white {
            color: white !important;
          }
          .group:hover .bg-yellow-100 {
            background-color: rgb(254 249 195) !important;
          }
        }
      `}</style>
    </section>
  )
}

export default AboutUs