const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      text: "1World Sourcing has been our trusted partner for over 3 years. Their expertise in electronics component sourcing is unmatched.",
      name: "Sarah Johnson",
      company: "CEO, TechCorp",
    },
    {
      rating: 5,
      text: "Outstanding service and reliability. Our apparel line wouldn't be possible without their textile sourcing expertise.",
      name: "Michael Chen",
      company: "Founder, Fashion Forward",
    },
    {
      rating: 5,
      text: "Professional, efficient, and always delivers on time. Their global network has been invaluable for our business growth.",
      name: "Emma Rodriguez",
      company: "Operations Director",
    },
  ]

  const StarRating = ({ rating }) => {
    return (
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-black text-white px-3 py-1 rounded text-sm font-medium mb-6">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to have worked with companies of all sizes, from startups to Fortune 500 giants.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <StarRating rating={testimonial.rating} />
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-black">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
