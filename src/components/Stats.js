import { useState, useEffect, useRef } from "react"

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const sectionRef = useRef(null)

  const stats = [
    { number: 20, suffix: "+", label: "Yrs Experience" },
    { number: 50, suffix: "+", label: "Countries Served" },
    { number: 1000, suffix: "+", label: "Clients Worldwide" },
    { number: 24, suffix: "h", label: "Quick Response" },
  ]

  // Intersection Observer to detect when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of component is visible
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  // Animate counting when component becomes visible
  useEffect(() => {
    if (!isVisible) return

    const animateCounts = () => {
      const duration = 2000 // 2 seconds
      const steps = 60 // 60 steps for smooth animation
      const stepDuration = duration / steps

      stats.forEach((stat, index) => {
        let currentCount = 0
        const increment = stat.number / steps

        const timer = setInterval(() => {
          currentCount += increment
          if (currentCount >= stat.number) {
            currentCount = stat.number
            clearInterval(timer)
          }

          setCounts(prev => {
            const newCounts = [...prev]
            newCounts[index] = Math.floor(currentCount)
            return newCounts
          })
        }, stepDuration)
      })
    }

    // Small delay to make the animation more noticeable
    const timeout = setTimeout(animateCounts, 200)
    
    return () => clearTimeout(timeout)
  }, [isVisible])

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center transform transition-all duration-1000 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms` // Stagger animation
              }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-black mb-2 relative overflow-hidden">
                <span className={`inline-block transition-all duration-700 ${
                  isVisible ? 'transform-none' : 'transform translate-y-full'
                }`}>
                  {counts[index]}{stat.suffix}
                </span>
              </div>
              <div className={`text-gray-600 font-medium transition-all duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 150 + 300}ms` 
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats