const Stats = () => {
  const stats = [
    { number: "20+", label: "Yrs Experience" },
    { number: "50+", label: "Countries Served" },
    { number: "1000+", label: "Clients Worldwide" },
    { number: "24h", label: "Quick Response" },
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-black mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
