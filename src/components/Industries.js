
import Clothes from "../assets/images/factory.jpg"
import factory from "../assets/images/clothes.jpg"
import occupation from "../assets/images/industry-room.jpg"
import IndustryRoom from "../assets/images/occupation.jpg"

const Industries = () => {
  const industries = [
    "Textiles",
    "Apparel",
    "Furniture",
    "Automotive",
    "Electronics",
    "Home Goods",
    "Industrial Equipment",
    "Healthcare",
  ]

  return (
    <section id="industries" className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-black text-white px-3 py-1 rounded text-sm font-medium mb-6">
              INDUSTRIES
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Expertise Across
              <br />
              Multiple Industries
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              While we're pioneers in textiles and apparel, our sourcing expertise extends to many industries and
              product categories worldwide.
            </p>

            {/* Industry List */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                  <span className="text-gray-700 font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images Grid */}
         <div className="grid grid-cols-2 gap-4 industires-img">
            <img
              src={Clothes}
              alt="Global supplier network"
              className="w-full h-60 object-cover rounded-lg"
            />
            <img
              src={factory}
              alt="Factory inspection process"
              className="w-full h-60 object-cover rounded-lg"
            />
            <img
              src={occupation}
              alt="Shipping logistics"
              className="w-full h-60 object-cover rounded-lg"
            />
            <img
              src={IndustryRoom}
              alt="Raw material sourcing"
              className="w-full h-60 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industries
