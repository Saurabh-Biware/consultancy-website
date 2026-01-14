'use client'

import { useState } from 'react'

export default function PhilosophyPage() {
  const [activeSection, setActiveSection] = useState(0)

  const philosophyPillars = [
    {
      id: 'logic-first',
      title: 'Logic First',
      subtitle: 'Strategy Precedes Creativity',
      description: 'Every decision, every creative output, every strategic move begins with logic. We don\'t guess. We don\'t hope. We calculate, analyze, and then act.',
      principles: [
        'Data-driven decision architecture',
        'Strategic frameworks before execution',
        'Logic validates creativity, not vice versa',
        'Systematic thinking over intuitive guessing'
      ],
      icon: '🧠',
      color: '#FF4500'
    },
    {
      id: 'systems-thinking',
      title: 'Systems Thinking',
      subtitle: 'We Design Infrastructure, Not Deliverables',
      description: 'Organizations don\'t need more tasks completed. They need systems that work independently, scale intelligently, and govern consistently.',
      principles: [
        'Repeatable processes over one-time solutions',
        'Scalable architecture over quick fixes',
        'Governance systems over ad-hoc management',
        'Long-term infrastructure over short-term gains'
      ],
      icon: '⚙️',
      color: '#FF6B35'
    },
    {
      id: 'no-trial-error',
      title: 'No Trial & Error',
      subtitle: 'Precision Over Experimentation',
      description: 'Trial-and-error is expensive, risky, and unprofessional. We engineer solutions based on proven frameworks, strategic intelligence, and calculated outcomes.',
      principles: [
        'Proven methodologies over experimental approaches',
        'Risk mitigation through strategic planning',
        'Calculated outcomes over hopeful experiments',
        'Professional certainty over amateur guessing'
      ],
      icon: '🎯',
      color: '#FF8C69'
    },
    {
      id: 'ai-augmentation',
      title: 'AI Augmentation',
      subtitle: 'Intelligence Enhances Judgment',
      description: 'AI doesn\'t replace human strategic thinking—it amplifies it. We use artificial intelligence to accelerate decisions, reduce effort, and protect margins.',
      principles: [
        'AI enhances human judgment, never replaces it',
        'Automation reduces effort, not strategic thinking',
        'Intelligence systems accelerate decision-making',
        'Technology serves strategy, not the reverse'
      ],
      icon: '🤖',
      color: '#FFA500'
    }
  ]

  const brandEtymology = {
    navi: {
      meaning: 'Navigation',
      description: 'Direction before motion. Strategic clarity before execution.',
      color: 'text-white'
    },
    star: {
      meaning: 'Stellar Performance',
      description: 'Excellence as standard. Growth as responsibility.',
      color: 'text-gray-300'
    },
    q: {
      meaning: 'Intelligence Quotient',
      description: 'Logic as discipline. Intelligence as foundation.',
      color: 'text-neon-orange'
    }
  }

  return (
    <div className="bg-black w-full min-h-screen">
      {/* Hero Section - Manifesto */}
      <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="absolute inset-0 command-grid opacity-20" />
        <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
          <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-neon-orange/10 border border-neon-orange/30 rounded-full">
            <div className="w-2 h-2 bg-neon-orange rounded-full animate-pulse" />
            <span className="text-neon-orange text-xs sm:text-sm font-mono">STRATEGIC_PHILOSOPHY_ACTIVE</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight font-serif">
            We don't compete with
            <span className="block text-neon-orange">agencies.</span>
            <span className="block text-gray-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 sm:mt-4">
              We solve what they can't.
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12 font-serif px-4">
            Most organizations don't fail due to lack of effort. They fail due to lack of direction, coherence, and intelligence. NaviStarq exists to solve that.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <button 
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-neon-orange text-black font-bold text-base sm:text-lg hover:bg-white transition-all duration-500 font-serif"
            >
              Explore Our Logic
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 border border-neon-orange/40 text-neon-orange font-semibold text-base sm:text-lg hover:bg-neon-orange/10 transition-all duration-500 font-serif">
              Strategic Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Brand Etymology - Mobile Responsive */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-neon-orange/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 font-serif">
              Name Logic
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-serif">
              Every element of our identity reflects strategic intention.
            </p>
          </div>

          <div className="relative">
            {/* Central Brand Display */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-serif mb-6 sm:mb-8">
                <span className="text-white">NAVI</span>
                <span className="text-gray-300">STAR</span>
                <span className="text-neon-orange">Q</span>
              </div>
            </div>

            {/* Etymology Cards - Mobile Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {Object.entries(brandEtymology).map(([key, data], index) => (
                <div key={key} className="text-center p-4 sm:p-6 border border-gray-700 hover:border-neon-orange/50 transition-all duration-500">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-neon-orange/20 to-transparent rounded-full flex items-center justify-center">
                    <span className={`text-lg sm:text-2xl font-bold ${data.color}`}>{key.toUpperCase()}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-serif">
                    {data.meaning}
                  </h3>
                  <p className="text-gray-400 font-serif text-sm">
                    {data.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Pillars - Mobile Responsive */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-neon-orange/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 font-serif">
              Strategic Pillars
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 font-serif">
              Four foundational principles that govern every engagement.
            </p>
          </div>

          {/* Mobile-First Timeline Layout */}
          <div className="space-y-12 sm:space-y-16">
            {philosophyPillars.map((pillar, index) => (
              <div key={pillar.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12`}>
                {/* Content Side */}
                <div className="flex-1 w-full">
                  <div className="max-w-2xl mx-auto lg:mx-0">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="text-3xl sm:text-4xl">{pillar.icon}</div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                          {pillar.title}
                        </h3>
                        <p className="text-neon-orange font-serif text-sm sm:text-base">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6 font-serif">
                      {pillar.description}
                    </p>
                    
                    {/* Principles List */}
                    <div className="space-y-2">
                      {pillar.principles.map((principle, pIndex) => (
                        <div key={pIndex} className="flex items-start gap-3">
                          <div className="w-1 h-4 sm:h-6 mt-1" style={{ backgroundColor: pillar.color }} />
                          <span className="text-gray-300 font-serif text-sm sm:text-base">{principle}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual Side - Modern Realistic Design */}
                <div className="flex-1 w-full">
                  {index === 0 && (
                    // Logic First - Neural Network Visualization
                    <div className="relative h-48 sm:h-64 bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-gray-700 overflow-hidden rounded-lg">
                      <div className="absolute inset-0">
                        {/* Neural Network Nodes */}
                        <div className="absolute top-6 left-8 w-3 h-3 bg-neon-orange rounded-full animate-pulse" />
                        <div className="absolute top-12 right-12 w-2 h-2 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                        <div className="absolute bottom-16 left-16 w-4 h-4 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                        <div className="absolute bottom-8 right-8 w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-neon-orange rounded-full animate-pulse" />
                        
                        {/* Connection Lines */}
                        <svg className="absolute inset-0 w-full h-full">
                          <line x1="32" y1="24" x2="50%" y2="50%" stroke="#FF4500" strokeWidth="1" opacity="0.6" className="animate-pulse" />
                          <line x1="80%" y1="48" x2="50%" y2="50%" stroke="#FF6B35" strokeWidth="1" opacity="0.4" />
                          <line x1="64" y1="80%" x2="50%" y2="50%" stroke="#FFA500" strokeWidth="1" opacity="0.5" />
                        </svg>
                        
                        {/* Data Flow Animation */}
                        <div className="absolute top-1/2 left-4 w-2 h-0.5 bg-neon-orange animate-ping" />
                        <div className="absolute bottom-1/4 right-4 w-1 h-1 bg-orange-400 animate-bounce" />
                      </div>
                      
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                        <div className="text-xs sm:text-sm text-neon-orange font-mono mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          NEURAL_PROCESSING_ACTIVE
                        </div>
                        <div className="w-full h-1.5 sm:h-2 bg-gray-800 rounded">
                          <div className="h-full bg-gradient-to-r from-neon-orange to-yellow-400 rounded transition-all duration-2000" style={{ width: '92%' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 1 && (
                    // Systems Thinking - Infrastructure Dashboard
                    <div className="relative h-48 sm:h-64 bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-gray-700 overflow-hidden rounded-lg">
                      <div className="absolute inset-0 p-4">
                        {/* System Architecture */}
                        <div className="grid grid-cols-3 gap-2 h-full">
                          <div className="space-y-2">
                            <div className="h-4 bg-gradient-to-r from-neon-orange/30 to-transparent rounded" />
                            <div className="h-3 bg-gradient-to-r from-orange-400/20 to-transparent rounded" />
                            <div className="h-2 bg-gradient-to-r from-yellow-500/15 to-transparent rounded" />
                          </div>
                          <div className="space-y-2">
                            <div className="h-6 bg-gradient-to-r from-neon-orange/40 to-orange-400/20 rounded" />
                            <div className="h-4 bg-gradient-to-r from-orange-400/30 to-yellow-500/15 rounded" />
                            <div className="h-3 bg-gradient-to-r from-yellow-500/20 to-transparent rounded" />
                          </div>
                          <div className="space-y-2">
                            <div className="h-5 bg-gradient-to-r from-orange-400/25 to-transparent rounded" />
                            <div className="h-3 bg-gradient-to-r from-yellow-500/20 to-transparent rounded" />
                            <div className="h-4 bg-gradient-to-r from-neon-orange/35 to-transparent rounded" />
                          </div>
                        </div>
                        
                        {/* System Nodes */}
                        <div className="absolute top-4 right-4 flex space-x-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          <div className="w-2 h-2 bg-neon-orange rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                        </div>
                      </div>
                      
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                        <div className="text-xs sm:text-sm text-neon-orange font-mono mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          SYSTEM_ARCHITECTURE_ONLINE
                        </div>
                        <div className="w-full h-1.5 sm:h-2 bg-gray-800 rounded">
                          <div className="h-full bg-gradient-to-r from-neon-orange to-orange-400 rounded transition-all duration-2000" style={{ width: '88%' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 2 && (
                    // No Trial & Error - Precision Targeting
                    <div className="relative h-48 sm:h-64 bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-gray-700 overflow-hidden rounded-lg">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Targeting Circles */}
                        <div className="relative">
                          <div className="w-32 h-32 border-2 border-neon-orange/30 rounded-full animate-ping" />
                          <div className="absolute inset-4 border-2 border-neon-orange/50 rounded-full animate-pulse" />
                          <div className="absolute inset-8 border-2 border-neon-orange/70 rounded-full" />
                          <div className="absolute inset-12 w-8 h-8 bg-neon-orange rounded-full animate-pulse" />
                          
                          {/* Crosshairs */}
                          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-neon-orange/50" />
                          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-neon-orange/50" />
                        </div>
                        
                        {/* Precision Indicators */}
                        <div className="absolute top-4 left-4 text-xs text-green-400 font-mono">
                          PRECISION: 99.7%
                        </div>
                        <div className="absolute top-4 right-4 text-xs text-neon-orange font-mono">
                          ACCURACY: OPTIMAL
                        </div>
                      </div>
                      
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                        <div className="text-xs sm:text-sm text-neon-orange font-mono mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          TARGET_LOCK_ACQUIRED
                        </div>
                        <div className="w-full h-1.5 sm:h-2 bg-gray-800 rounded">
                          <div className="h-full bg-gradient-to-r from-green-400 to-neon-orange rounded transition-all duration-2000" style={{ width: '96%' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {index === 3 && (
                    // AI Augmentation - AI Interface
                    <div className="relative h-48 sm:h-64 bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-gray-700 overflow-hidden rounded-lg">
                      <div className="absolute inset-0 p-4">
                        {/* AI Processing Visualization */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                            <div className="h-1 bg-gradient-to-r from-blue-400/50 to-transparent rounded flex-1" />
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-neon-orange rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                            <div className="h-1 bg-gradient-to-r from-neon-orange/50 to-transparent rounded flex-1" />
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                            <div className="h-1 bg-gradient-to-r from-green-400/50 to-transparent rounded flex-1" />
                          </div>
                        </div>
                        
                        {/* AI Brain Visualization */}
                        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                          <div className="relative w-16 h-16">
                            <div className="absolute inset-0 border-2 border-neon-orange/30 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
                            <div className="absolute inset-2 border-2 border-blue-400/40 rounded-full animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
                            <div className="absolute inset-4 w-8 h-8 bg-gradient-to-br from-neon-orange to-blue-400 rounded-full animate-pulse" />
                          </div>
                        </div>
                        
                        {/* Data Streams */}
                        <div className="absolute bottom-8 left-4 right-4">
                          <div className="flex justify-between text-xs text-gray-400 font-mono">
                            <span>ML_PROCESSING</span>
                            <span>DECISION_TREE</span>
                            <span>OPTIMIZATION</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                        {/* <div className="text-xs sm:text-sm text-neon-orange font-mono mb-2 flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                          AI_INTELLIGENCE_ACTIVE
                        </div> */}
                        <div className="w-full h-1.5 sm:h-2 bg-gray-800 rounded">
                          <div className="h-full bg-gradient-to-r from-blue-400 to-neon-orange rounded transition-all duration-2000" style={{ width: '94%' }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission - Mobile Responsive */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-neon-orange/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-serif">Strategic Direction</h2>
          </div>
          
          <div className="space-y-6 sm:space-y-8">
            {/* Vision */}
            <div className="relative p-6 sm:p-8 bg-gradient-to-r from-gray-900 to-black border-l-4 border-neon-orange">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="text-3xl sm:text-4xl">🎯</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-serif">Vision</h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-serif">
                    To be the definitive strategic partner for organizations that demand clarity, performance, and sustainable growth without trial-and-error.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="relative p-6 sm:p-8 bg-gradient-to-l from-gray-900 to-black border-r-4 border-neon-orange">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="text-3xl sm:text-4xl">🚀</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-serif">Mission</h3>
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-serif">
                    We engineer systematic solutions that eliminate trial-and-error from business growth, reputation management, and strategic decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Mobile Responsive */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-neon-orange/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 font-serif">
            Ready for strategic
            <span className="block text-neon-orange">certainty?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-12 font-serif">
            No trial-and-error. No guesswork. Just systematic growth.
          </p>
          <button className="px-8 sm:px-12 py-3 sm:py-4 bg-neon-orange text-black font-bold text-base sm:text-lg hover:bg-white transition-all duration-500 font-serif">
            Request Strategic Assessment
          </button>
        </div>
      </section>
    </div>
  )
}