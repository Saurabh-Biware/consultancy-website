'use client'

import { useEffect, useRef, useState } from 'react'

interface ProcessVisualizationProps {
  content: {
    headline: string
    intro: string
    steps: Array<{
      number: string
      title: string
      description: string
    }>
    closing: {
      line1: string
      line2: string
    }
  }
}

export default function ProcessVisualization({ content }: ProcessVisualizationProps) {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps(prev => [...new Set([...prev, index])])
          }
        },
        { threshold: 0.3 }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  return (
    <main className="overflow-x-hidden w-full pt-20">
      <section className="py-32 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight font-serif">
              {content.headline}
            </h1>
            <p className="text-xl text-gray-400 font-serif">{content.intro}</p>
          </div>
          
          {/* Desktop Timeline - Horizontal */}
          <div className="hidden lg:block mb-20">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-16 left-0 right-0 h-px bg-neon-orange/30">
                <div 
                  className="h-full bg-neon-orange transition-all duration-2000 ease-out"
                  style={{ 
                    width: `${(visibleSteps.length / content.steps.length) * 100}%`
                  }}
                />
              </div>
              
              {/* Steps */}
              <div className="grid grid-cols-5 gap-8">
                {content.steps.map((step, index) => (
                  <div
                    key={index}
                    ref={el => { stepRefs.current[index] = el }}
                    className={`text-center transition-all duration-700 ${
                      visibleSteps.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Step Circle */}
                    <div className="relative mb-8">
                      <div className="w-16 h-16 rounded-full border-2 border-neon-orange bg-black flex items-center justify-center mx-auto">
                        <span className="text-neon-orange font-bold text-lg font-serif">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <h3 className="text-xl font-bold text-white mb-4 font-serif">{step.title}</h3>
                    <p className="text-sm text-gray-400 font-serif leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="lg:hidden mb-20">
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-neon-orange/30">
                <div 
                  className="w-full bg-neon-orange transition-all duration-2000 ease-out"
                  style={{ 
                    height: `${(visibleSteps.length / content.steps.length) * 100}%`
                  }}
                />
              </div>
              
              {/* Steps */}
              <div className="space-y-16">
                {content.steps.map((step, index) => (
                  <div
                    key={index}
                    ref={el => { stepRefs.current[index] = el }}
                    className={`flex items-start gap-8 transition-all duration-700 ${
                      visibleSteps.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Step Circle */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full border-2 border-neon-orange bg-black flex items-center justify-center">
                        <span className="text-neon-orange font-bold text-lg font-serif">
                          {step.number}
                        </span>
                      </div>
                    </div>
                    
                    {/* Step Content */}
                    <div className="flex-1 pt-4">
                      <h3 className="text-2xl font-bold text-white mb-4 font-serif">{step.title}</h3>
                      <p className="text-lg text-gray-400 font-serif leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Closing Message */}
          <div className="text-center mb-12">
            <p className="text-2xl text-white font-serif mb-2">{content.closing.line1}</p>
            <p className="text-2xl text-neon-orange font-serif">{content.closing.line2}</p>
          </div>
          
          {/* CTA */}
          <div className="text-center">
            <button className="px-12 py-4 text-lg bg-neon-orange text-black font-semibold hover:bg-white transition-colors font-serif">
              Start with Step One
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}