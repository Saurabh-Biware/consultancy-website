'use client'

import { useEffect, useRef, useState } from 'react'

export default function IntelligencePage() {
  const brainCanvasRef = useRef<HTMLCanvasElement>(null)
  const [activeThought, setActiveThought] = useState(0)
  const [brainActivity, setBrainActivity] = useState<Array<{id: number, intensity: number, type: string}>>([]) 
  const [decisionNodes, setDecisionNodes] = useState<Array<{id: number, active: boolean, decision: string}>>([])  

  useEffect(() => {
    // Simulate brain activity
    const activityInterval = setInterval(() => {
      setBrainActivity([
        {id: 1, intensity: Math.random() * 100, type: 'ANALYSIS'},
        {id: 2, intensity: Math.random() * 100, type: 'PREDICTION'},
        {id: 3, intensity: Math.random() * 100, type: 'SYNTHESIS'},
        {id: 4, intensity: Math.random() * 100, type: 'DECISION'},
      ])
    }, 1500)

    // Simulate decision tree activation
    const decisionInterval = setInterval(() => {
      setDecisionNodes(prev => prev.map(node => ({
        ...node,
        active: Math.random() > 0.7
      })))
    }, 2500)

    // Initialize decision nodes
    setDecisionNodes([
      {id: 1, active: false, decision: 'Market Entry'},
      {id: 2, active: false, decision: 'Resource Allocation'},
      {id: 3, active: false, decision: 'Risk Assessment'},
      {id: 4, active: false, decision: 'Strategic Pivot'},
    ])

    // Digital Brain Canvas Animation
    const canvas = brainCanvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Brain synapses
    const synapses = Array.from({length: 50}, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      intensity: Math.random(),
      connections: []
    }))

    let frame = 0

    const animateBrain = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Update synapses
      synapses.forEach(synapse => {
        synapse.x += synapse.vx
        synapse.y += synapse.vy
        synapse.intensity = 0.3 + Math.sin(frame * 0.01 + synapse.x * 0.01) * 0.4
        
        // Bounce off edges
        if (synapse.x <= 0 || synapse.x >= canvas.width) synapse.vx *= -1
        if (synapse.y <= 0 || synapse.y >= canvas.height) synapse.vy *= -1
      })

      // Draw connections
      ctx.strokeStyle = '#FF4500'
      ctx.lineWidth = 0.5
      synapses.forEach((synapse, i) => {
        synapses.slice(i + 1).forEach(other => {
          const distance = Math.sqrt((synapse.x - other.x) ** 2 + (synapse.y - other.y) ** 2)
          if (distance < 100) {
            ctx.globalAlpha = (1 - distance / 100) * synapse.intensity * 0.3
            ctx.beginPath()
            ctx.moveTo(synapse.x, synapse.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        })
      })

      // Draw synapses
      synapses.forEach(synapse => {
        ctx.globalAlpha = synapse.intensity
        ctx.fillStyle = '#FF4500'
        ctx.beginPath()
        ctx.arc(synapse.x, synapse.y, 2 + synapse.intensity * 2, 0, Math.PI * 2)
        ctx.fill()
        
        // Pulse effect
        if (synapse.intensity > 0.8) {
          ctx.globalAlpha = 0.2
          ctx.beginPath()
          ctx.arc(synapse.x, synapse.y, 8, 0, Math.PI * 2)
          ctx.stroke()
        }
      })

      frame++
      requestAnimationFrame(animateBrain)
    }

    animateBrain()

    // Cycle active thoughts
    const thoughtInterval = setInterval(() => {
      setActiveThought(prev => (prev + 1) % 4)
    }, 3000)

    return () => {
      clearInterval(activityInterval)
      clearInterval(decisionInterval)
      clearInterval(thoughtInterval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  const thoughtBubbles = [
    { text: "Analyzing market patterns...", position: "top-left" },
    { text: "Processing competitive data...", position: "top-right" },
    { text: "Synthesizing strategic options...", position: "bottom-left" },
    { text: "Calculating risk probabilities...", position: "bottom-right" }
  ]

  const aiCapabilities = [
    {
      title: "Cognitive Architecture",
      description: "Multi-layered reasoning systems that mirror executive thinking",
      neurons: 847,
      processing: "DEEP_ANALYSIS"
    },
    {
      title: "Predictive Modeling", 
      description: "Scenario planning with probabilistic outcome mapping",
      neurons: 1203,
      processing: "FORECASTING"
    },
    {
      title: "Strategic Synthesis",
      description: "Cross-domain pattern recognition for strategic insights",
      neurons: 956,
      processing: "INTEGRATION"
    },
    {
      title: "Decision Optimization",
      description: "Multi-criteria analysis with uncertainty quantification",
      neurons: 1456,
      processing: "OPTIMIZATION"
    }
  ]

  return (
    <main className="overflow-x-hidden w-full pt-20 bg-black min-h-screen">
      {/* Digital Brain Header */}
      <section className="relative py-12 md:py-20 px-4 md:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative z-10">
              <div className="text-xs md:text-sm text-neon-orange font-mono mb-4 animate-pulse">
                NEURAL_ARCHITECTURE // ONLINE
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight font-serif">
                AI That Thinks Like Leadership
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-serif leading-relaxed mb-6">
                Not pattern matching. Not automation. Artificial intelligence that reasons through complexity the way executives do.
              </p>
              
              {/* Floating Thought Bubbles */}
              {thoughtBubbles.map((bubble, index) => (
                <div 
                  key={index}
                  className={`absolute hidden lg:block text-xs text-neon-orange font-mono bg-black/80 border border-neon-orange/30 px-3 py-2 rounded transition-all duration-1000 ${
                    activeThought === index ? 'opacity-100 scale-100' : 'opacity-30 scale-95'
                  } ${
                    bubble.position === 'top-left' ? '-top-8 -left-4' :
                    bubble.position === 'top-right' ? '-top-8 -right-4' :
                    bubble.position === 'bottom-left' ? '-bottom-8 -left-4' :
                    '-bottom-8 -right-4'
                  }`}
                >
                  {bubble.text}
                  <div className={`absolute w-2 h-2 bg-neon-orange/50 ${
                    bubble.position.includes('top') ? 'bottom-0 translate-y-1' : 'top-0 -translate-y-1'
                  } ${
                    bubble.position.includes('left') ? 'left-4' : 'right-4'
                  } rotate-45`}></div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              {/* Digital Brain Canvas */}
              <canvas 
                ref={brainCanvasRef} 
                className="w-full h-64 md:h-80 border border-neon-orange/20 bg-gradient-radial from-neon-orange/5 to-transparent"
              />
              <div className="absolute top-2 md:top-4 right-2 md:right-4 text-xs text-neon-orange font-mono">
                SYNAPTIC_ACTIVITY // {brainActivity.length > 0 ? Math.round(brainActivity.reduce((sum, a) => sum + a.intensity, 0) / brainActivity.length) : 0}%
              </div>
              
              {/* Decision Nodes Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {decisionNodes.map((node, index) => (
                  <div 
                    key={node.id}
                    className={`absolute w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                      node.active ? 'bg-neon-orange border-neon-orange shadow-lg shadow-neon-orange/50' : 'bg-transparent border-gray-600'
                    }`}
                    style={{
                      top: `${20 + index * 20}%`,
                      left: `${15 + index * 20}%`
                    }}
                  >
                    {node.active && (
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-neon-orange font-mono whitespace-nowrap">
                        {node.decision}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brain Activity Monitor */}
      <section className="py-8 md:py-12 px-4 md:px-6 border-y border-neon-orange/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs md:text-sm text-neon-orange font-mono mb-4 md:mb-6">COGNITIVE_PROCESSES // REAL_TIME</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {brainActivity.map((activity) => (
              <div key={activity.id} className="bg-gray-900/50 border border-gray-700 p-3 md:p-4 relative overflow-hidden">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400 font-mono">{activity.type}</span>
                  <div className={`w-2 h-2 rounded-full animate-pulse ${
                    activity.intensity > 70 ? 'bg-green-400' :
                    activity.intensity > 40 ? 'bg-yellow-400' : 'bg-red-400'
                  }`}></div>
                </div>
                <div className="text-xl md:text-2xl font-bold text-white font-mono mb-2">
                  {Math.round(activity.intensity)}%
                </div>
                {/* Activity Wave */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
                  <div 
                    className="h-full bg-neon-orange transition-all duration-1000 animate-pulse"
                    style={{width: `${activity.intensity}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Matrix */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs md:text-sm text-neon-orange font-mono mb-6 md:mb-8">NEURAL_CAPABILITIES // ARCHITECTURE</div>
          <div className="grid md:grid-cols-2 gap-6">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="group border border-gray-700 hover:border-neon-orange/40 transition-all duration-500 p-6 relative overflow-hidden">
                {/* Neural Activity Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-neon-orange/20 to-transparent animate-pulse"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-white font-bold font-serif mb-2 text-lg">{capability.title}</h3>
                      <p className="text-gray-400 text-sm font-serif leading-relaxed">{capability.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400 font-mono mb-1">NEURONS</div>
                      <div className="text-neon-orange font-mono font-bold">{capability.neurons.toLocaleString()}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className={`px-3 py-1 text-xs font-mono border ${
                      capability.processing === 'DEEP_ANALYSIS' ? 'bg-blue-900/30 text-blue-400 border-blue-400/30' :
                      capability.processing === 'FORECASTING' ? 'bg-purple-900/30 text-purple-400 border-purple-400/30' :
                      capability.processing === 'INTEGRATION' ? 'bg-green-900/30 text-green-400 border-green-400/30' :
                      'bg-orange-900/30 text-orange-400 border-orange-400/30'
                    }`}>
                      {capability.processing}
                    </div>
                    
                    <button className="btn-secondary text-xs font-mono group-hover:bg-neon-orange group-hover:text-black transition-all duration-300">
                      INTERFACE_MODULE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consciousness Interface */}
      <section className="py-12 md:py-16 px-4 md:px-6 border-t border-neon-orange/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs md:text-sm text-neon-orange font-mono mb-4 md:mb-6">CONSCIOUSNESS_INTERFACE</div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-8 font-serif">
            Intelligence That Understands Context, Not Just Data
          </h2>
          <p className="text-gray-300 font-serif text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Our AI doesn't just process information—it develops understanding. It recognizes nuance, weighs competing priorities, and reasons through ambiguity the way experienced leaders do.
          </p>
          
          {/* Consciousness Visualization */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto border-2 border-neon-orange/30 rounded-full relative">
              <div className="absolute inset-4 border border-neon-orange/50 rounded-full animate-pulse"></div>
              <div className="absolute inset-8 bg-neon-orange/20 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-neon-orange rounded-full animate-pulse"></div>
            </div>
            <div className="text-xs text-neon-orange font-mono mt-4">CONSCIOUSNESS_CORE // ACTIVE</div>
          </div>
          
          <button className="btn-primary font-mono text-sm md:text-base">
            INITIATE_AI_CONSCIOUSNESS_CONSULTATION
          </button>
        </div>
      </section>
    </main>
  )
}