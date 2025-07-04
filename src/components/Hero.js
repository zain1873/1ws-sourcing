import globeImg from '../assets/images/1ws-new.jpg';

const Hero = () => {
  return (
    <section className="bg-white py-[3rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-black text-white px-3 py-1 rounded text-sm font-medium mb-6">
              SOURCING PARTNER
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              1WORLD
              <br />
              SOURCING
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Your global sourcing partner. Pioneers in textiles and apparel with expertise across multiple industries
              and comprehensive solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                Get A Quote
              </button>
              <button className="border border-gray-300 text-black px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center">
                Explore Services
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={globeImg}
              alt="Industrial machinery and equipment"
              className="w-full h-96 lg:h-[600px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
