'use client'

import { useEffect, useRef, useState } from 'react'

export default function IntelligencePage() {
  const [metrics, setMetrics] = useState({
    processing: 0,
    accuracy: 0,
    decisions: 0,
    insights: 0
  })
  const [activeDemo, setActiveDemo] = useState(0)
  const [neuralActivity, setNeuralActivity] = useState<number[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Animate metrics
    const metricsInterval = setInterval(() => {
      setMetrics({
        processing: 85 + Math.random() * 15,
        accuracy: 96 + Math.random() * 4,
        decisions: Math.floor(1200 + Math.random() * 300),
        insights: Math.floor(450 + Math.random() * 100)
      })
    }, 2000)

    // Neural activity simulation
    const activityInterval = setInterval(() => {
      setNeuralActivity(Array.from({length: 20}, () => Math.random() * 100))
    }, 150)

    // Demo rotation
    const demoInterval = setInterval(() => {
      setActiveDemo(prev => (prev + 1) % 3)
    }, 4000)

    // Neural network canvas
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        const animate = () => {
          canvas.width = canvas.offsetWidth
          canvas.height = canvas.offsetHeight
          
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          
          // Draw neural network
          const nodes = 12
          const centerX = canvas.width / 2
          const centerY = canvas.height / 2
          const radius = Math.min(canvas.width, canvas.height) * 0.3
          
          for (let i = 0; i < nodes; i++) {
            const angle = (i / nodes) * Math.PI * 2
            const x = centerX + Math.cos(angle) * radius
            const y = centerY + Math.sin(angle) * radius
            
            // Node
            ctx.fillStyle = '#FF4500'
            ctx.globalAlpha = 0.6 + Math.sin(Date.now() * 0.003 + i) * 0.4
            ctx.beginPath()
            ctx.arc(x, y, 4, 0, Math.PI * 2)
            ctx.fill()
            
            // Connections
            for (let j = i + 1; j < nodes; j++) {
              const angle2 = (j / nodes) * Math.PI * 2
              const x2 = centerX + Math.cos(angle2) * radius
              const y2 = centerY + Math.sin(angle2) * radius
              
              ctx.strokeStyle = '#FF4500'
              ctx.globalAlpha = 0.1 + Math.sin(Date.now() * 0.002 + i + j) * 0.1
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(x, y)
              ctx.lineTo(x2, y2)
              ctx.stroke()
            }
          }
          
          requestAnimationFrame(animate)
        }
        animate()
      }
    }

    return () => {
      clearInterval(metricsInterval)
      clearInterval(activityInterval)
      clearInterval(demoInterval)
    }
  }, [])

  const capabilities = [
    {
      icon: '🧠',
      title: 'Cognitive Reasoning',
      description: 'Multi-layered decision trees that mirror C-suite thinking patterns',
      status: 'ACTIVE',
      confidence: 97
    },
    {
      icon: '🔮',
      title: 'Predictive Intelligence',
      description: 'Market scenario modeling with probabilistic outcome analysis',
      status: 'LEARNING',
      confidence: 94
    },
    {
      icon: '⚡',
      title: 'Real-time Synthesis',
      description: 'Cross-domain pattern recognition for strategic insight generation',
      status: 'OPTIMIZING',
      confidence: 99
    }
  ]

  const demos = [
    {
      title: 'Market Analysis',
      subtitle: 'Processing 847 data points',
      progress: 89,
      color: 'from-blue-500 to-cyan-400'
    },
    {
      title: 'Risk Assessment',
      subtitle: 'Evaluating 23 scenarios',
      progress: 76,
      color: 'from-purple-500 to-pink-400'
    },
    {
      title: 'Strategic Planning',
      subtitle: 'Optimizing 156 variables',
      progress: 94,
      color: 'from-green-500 to-emerald-400'
    }
  ]

  return (
    <main className="overflow-x-hidden w-full bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-orange/5 via-transparent to-blue-500/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-orange/10 border border-neon-orange/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-neon-orange rounded-full animate-pulse" />
                <span className="text-xs text-neon-orange font-mono">
                  AI_INTELLIGENCE_ONLINE
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Intelligence That
                <span className="block bg-gradient-to-r from-neon-orange to-yellow-400 bg-clip-text text-transparent">
                  Thinks Strategically
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Not automation. Not pattern matching. Artificial intelligence that reasons through complexity like seasoned executives.
              </p>

              <button className="px-8 py-4 bg-neon-orange text-black font-bold hover:bg-white transition-all duration-300">
                Request AI Demonstration
              </button>
            </div>

            <div className="relative">
              {/* Neural Network Visualization */}
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
                <canvas ref={canvasRef} className="w-full h-80" />

                {/* Floating Metrics */}
                <div className="absolute top-4 right-4 space-y-2">
                  <div className="bg-black/60 px-3 py-1 rounded text-xs text-neon-orange font-mono">
                    PROCESSING: {Math.round(metrics.processing)}%
                  </div>
                  <div className="bg-black/60 px-3 py-1 rounded text-xs text-green-400 font-mono">
                    ACCURACY: {Math.round(metrics.accuracy)}%
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs text-gray-400 font-mono mb-2">
                    NEURAL_ACTIVITY
                  </div>
                  <div className="flex items-center justify-between h-8">
                    {neuralActivity.slice(0, 8).map((activity, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 rounded-full border-2 border-neon-orange transition-all duration-300"
                        style={{
                          backgroundColor: activity > 50 ? "#FF4500" : "transparent",
                          boxShadow: activity > 70 ? "0 0 8px #FF4500" : "none"
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Intelligence Dashboard */}
      <section className="py-20 px-4 md:px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Live Intelligence Dashboard
            </h2>
            <p className="text-lg text-gray-400">Real-time AI processing across strategic domains</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-2xl font-bold text-white mb-1">{Math.round(metrics.processing)}%</div>
              <div className="text-sm text-gray-400">Processing Speed</div>
              <div className="w-full h-1 bg-gray-800 rounded mt-3">
                <div className="h-full bg-neon-orange rounded transition-all duration-1000" style={{width: `${metrics.processing}%`}} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-2xl font-bold text-white mb-1">{Math.round(metrics.accuracy)}%</div>
              <div className="text-sm text-gray-400">Decision Accuracy</div>
              <div className="w-full h-1 bg-gray-800 rounded mt-3">
                <div className="h-full bg-green-400 rounded transition-all duration-1000" style={{width: `${metrics.accuracy}%`}} />
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl">
              <div className="text-2xl mb-2">🧠</div>
              <div className="text-2xl font-bold text-white mb-1">{metrics.decisions.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Decisions/Hour</div>
              <div className="flex items-center mt-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse mr-2" />
                <span className="text-xs text-blue-400 font-mono">ACTIVE</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-xl">
              <div className="text-2xl mb-2">💡</div>
              <div className="text-2xl font-bold text-white mb-1">{metrics.insights.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Insights Generated</div>
              <div className="flex items-center mt-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse mr-2" />
                <span className="text-xs text-purple-400 font-mono">LEARNING</span>
              </div>
            </div>
          </div>

          {/* Live Demo */}
          <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Live AI Processing</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-green-400 font-mono">REAL_TIME</span>
              </div>
            </div>

            <div className="space-y-4">
              {demos.map((demo, index) => (
                <div key={index} className={`p-4 rounded-lg border transition-all duration-500 ${
                  activeDemo === index ? 'border-neon-orange bg-neon-orange/5' : 'border-gray-700 bg-gray-900/30'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="font-semibold text-white">{demo.title}</div>
                      <div className="text-sm text-gray-400">{demo.subtitle}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">{demo.progress}%</div>
                      <div className="text-xs text-gray-400">COMPLETE</div>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${demo.color} transition-all duration-2000`}
                      style={{width: activeDemo === index ? `${demo.progress}%` : '0%'}}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 px-4 md:px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Cognitive Architecture
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Advanced AI systems designed to replicate strategic thinking patterns of successful executives
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 h-full hover:border-neon-orange/40 transition-all duration-500">
                  <div className="text-4xl mb-4">{capability.icon}</div>

                  <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                  <p className="text-base text-gray-400 mb-6 leading-relaxed">{capability.description}</p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Status</span>
                      <span className={`text-xs font-mono px-2 py-1 rounded ${
                        capability.status === 'ACTIVE' ? 'bg-green-900/30 text-green-400' :
                        capability.status === 'LEARNING' ? 'bg-blue-900/30 text-blue-400' :
                        'bg-purple-900/30 text-purple-400'
                      }`}>
                        {capability.status}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Confidence</span>
                      <span className="text-sm font-bold text-white">{capability.confidence}%</span>
                    </div>

                    <div className="w-full h-1 bg-gray-800 rounded">
                      <div
                        className="h-full bg-neon-orange rounded transition-all duration-1000"
                        style={{width: `${capability.confidence}%`}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}