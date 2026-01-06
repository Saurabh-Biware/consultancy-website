'use client'

import { useState, useEffect } from 'react'

interface VerticalLandingSectionsProps {
  content: {
    verticals: Array<{
      title: string
      role: string
      outcome: string
      cta: string
    }>
  }
}

export default function VerticalLandingSections({ content }: VerticalLandingSectionsProps) {
  const [activeVertical, setActiveVertical] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const verticals = [
    {
      id: 'brand-creative',
      title: 'BRAND CREATIVE',
      tagline: 'Narrative Ownership',
      description: 'We don\'t create content. We architect perception systems that govern how your brand exists in the world.',
      outcomes: ['Brand Clarity', 'Perception Control', 'Narrative Consistency'],
      capabilities: ['Identity Architecture', 'Content Systems', 'Brand Governance', 'Reputation Intelligence'],
      gradient: 'from-orange-500 to-red-600',
      icon: '🎯',
      metrics: { efficiency: 94, impact: 87, consistency: 96 }
    },
    {
      id: 'growth-marketing',
      title: 'GROWTH MARKETING',
      tagline: 'Performance Demand Systems',
      description: 'Strategic growth infrastructure that scales without compromising brand integrity or burning budgets.',
      outcomes: ['Lead Generation', 'Visibility Amplification', 'Conversion Optimization'],
      capabilities: ['Demand Generation', 'Funnel Intelligence', 'Performance Analytics', 'Growth Architecture'],
      gradient: 'from-orange-400 to-yellow-500',
      icon: '📈',
      metrics: { efficiency: 91, impact: 93, consistency: 89 }
    },
    {
      id: 'production-events',
      title: 'PRODUCTION EVENTS',
      tagline: 'High-Stakes Asset Creation',
      description: 'When your reputation depends on flawless execution. Premium production for organizations that cannot afford mediocrity.',
      outcomes: ['Authority Building', 'Premium Documentation', 'Scale Visibility'],
      capabilities: ['Event Production', 'Content Creation', 'Broadcast Systems', 'Asset Development'],
      gradient: 'from-orange-300 to-amber-400',
      icon: '🎬',
      metrics: { efficiency: 88, impact: 95, consistency: 92 }
    },
    {
      id: 'ai-technology',
      title: 'AI TECHNOLOGY',
      tagline: 'Intelligence Automation Layer',
      description: 'AI that enhances human judgment, not replaces it. Strategic intelligence systems for faster, smarter decisions.',
      outcomes: ['Decision Acceleration', 'Effort Reduction', 'Margin Protection'],
      capabilities: ['AI Strategy', 'Automation Systems', 'Intelligence Dashboards', 'Predictive Analytics'],
      gradient: 'from-orange-600 to-red-500',
      icon: '🧠',
      metrics: { efficiency: 97, impact: 89, consistency: 94 }
    }
  ]

  const handleVerticalChange = (index: number) => {
    if (index === activeVertical) return
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveVertical(index)
      setIsTransitioning(false)
    }, 150)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const currentVertical = verticals[activeVertical]

  return (
    <main className="min-h-screen bg-black pt-20 overflow-hidden">
      {/* Strategic Header */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-neon-orange/10 border border-neon-orange/30 rounded-full">
              <div className="w-2 h-2 bg-neon-orange rounded-full animate-pulse" />
              <span className="text-neon-orange text-sm font-mono">STRATEGIC_VERTICALS_ONLINE</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">
              The Four-Vertical
              <span className="block text-neon-orange">System</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-serif">
              Independent operating systems. Unified strategic vision. Each vertical accountable for specific outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Vertical Explorer */}
      <section className="relative px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Vertical Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            {verticals.map((vertical, index) => (
              <button
                key={vertical.id}
                onClick={() => handleVerticalChange(index)}
                className={`
                  group relative p-6 border-2 transition-all duration-500 overflow-hidden
                  ${activeVertical === index 
                    ? 'border-neon-orange bg-neon-orange/5 scale-105' 
                    : 'border-gray-700 hover:border-neon-orange/50 hover:bg-neon-orange/5'
                  }
                `}
              >
                {/* Background Gradient */}
                <div className={`
                  absolute inset-0 bg-gradient-to-br ${vertical.gradient} opacity-0 transition-opacity duration-500
                  ${activeVertical === index ? 'opacity-10' : 'group-hover:opacity-5'}
                `} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-3xl mb-3">{vertical.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2 font-serif">
                    {vertical.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-serif">
                    {vertical.tagline}
                  </p>
                  
                  {/* Active Indicator */}
                  {activeVertical === index && (
                    <div className="absolute top-4 right-4 w-3 h-3 bg-neon-orange rounded-full animate-pulse" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Dynamic Content Display */}
          <div className={`
            transition-all duration-300 transform
            ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
          `}>
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Main Content Panel */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Hero Section */}
                <div className="relative p-8 border border-neon-orange/30 bg-gradient-to-br from-black to-gray-900/50 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentVertical.gradient} opacity-5`} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl">{currentVertical.icon}</span>
                      <div>
                        <h2 className="text-3xl font-bold text-white font-serif">
                          {currentVertical.title}
                        </h2>
                        <p className="text-neon-orange font-serif">
                          {currentVertical.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-300 leading-relaxed font-serif">
                      {currentVertical.description}
                    </p>
                  </div>
                </div>

                {/* Capabilities Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {currentVertical.capabilities.map((capability, index) => (
                    <div key={index} className="p-4 border border-gray-700 hover:border-neon-orange/50 transition-colors duration-300">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-neon-orange rounded-full" />
                        <span className="text-white font-serif">{capability}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Outcomes */}
                <div className="p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-4 font-serif">Strategic Outcomes</h3>
                  <div className="space-y-3">
                    {currentVertical.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-1 h-6 bg-neon-orange" />
                        <span className="text-gray-300 font-serif">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Performance Metrics Sidebar */}
              <div className="space-y-6">
                
                {/* Performance Dashboard */}
                <div className="p-6 border border-neon-orange/30 bg-black/50">
                  <h3 className="text-lg font-bold text-white mb-4 font-serif">Performance Metrics</h3>
                  <div className="space-y-4">
                    {Object.entries(currentVertical.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-400 capitalize font-serif">{key}</span>
                          <span className="text-neon-orange font-mono">{value}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded">
                          <div 
                            className="h-full bg-gradient-to-r from-neon-orange to-yellow-400 rounded transition-all duration-1000"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engagement Options */}
                <div className="p-6 border border-gray-700">
                  <h3 className="text-lg font-bold text-white mb-4 font-serif">Engagement Models</h3>
                  <div className="space-y-3">
                    <button className="w-full btn-primary text-sm font-serif">
                      Strategic Assessment
                    </button>
                    <button className="w-full btn-secondary text-sm font-serif">
                      Capability Review
                    </button>
                    <button className="w-full text-neon-orange hover:text-white transition-colors duration-300 text-sm font-serif">
                      Case Studies →
                    </button>
                  </div>
                </div>

                {/* System Status */}
                <div className="p-6 border border-gray-700 bg-gray-900/30">
                  <h3 className="text-lg font-bold text-white mb-4 font-serif">System Status</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400 font-mono">Availability:</span>
                      <span className="text-green-400 font-mono">ONLINE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 font-mono">Response:</span>
                      <span className="text-green-400 font-mono">&lt;24H</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 font-mono">Queue:</span>
                      <span className="text-neon-orange font-mono">ACCEPTING</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}