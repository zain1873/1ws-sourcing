const Services = () => {
  const services = [
    {
      icon: "1",
      title: "Global Sourcing",
      description:
        "Access our network of verified manufacturers and suppliers across multiple industries and regions worldwide.",
    },
    {
      icon: "2",
      title: "Textile & Apparel",
      description:
        "Industry pioneers with decades of experience in textile manufacturing, apparel production, and fashion sourcing.",
    },
    {
      icon: "3",
      title: "Custom Quotes",
      description:
        "Tailored quotes for your specific requirements with competitive pricing and comprehensive quality assurance.",
    },
  ]

  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-black text-white px-3 py-1 rounded text-sm font-medium mb-6">SERVICES</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">Global Sourcing Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We connect you with the best manufacturers and suppliers worldwide, providing end-to-end sourcing solutions
            for your business needs.
          </p>
        </div>

        {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <div key={index} className="service-card p-8 rounded-lg border border-gray-200 transition-shadow hover:shadow-lg relative overflow-hidden">
      <div className="service-icon w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
        {service.icon}
      </div>
      <h3 className="service-title text-2xl font-bold text-black mb-4 transition-colors duration-300">{service.title}</h3>
      <p className="service-description text-gray-600 mb-6 leading-relaxed transition-colors duration-300">{service.description}</p>
      <a href="#" className="service-link text-black font-medium hover:underline flex items-center transition-colors duration-300">
        Learn more
        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  ))}
</div>

      </div>
    </section>
  )
}

export default Services
