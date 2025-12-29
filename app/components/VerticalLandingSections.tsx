'use client'

import { useState } from 'react'

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

  const verticalData = [
    {
      title: "BRAND CREATIVE",
      code: "BC_001",
      status: "ACTIVE",
      headline: "Narrative is not content. It is power.",
      metrics: ["Brand clarity", "Perception control", "Consistency"],
      capabilities: ["Identity Systems", "Social Ownership", "Content Architecture", "ORM Logic", "Web Communication"],
      engagement: "3 Models Available",
      color: "#FF4500"
    },
    {
      title: "GROWTH MARKETING",
      code: "GM_002", 
      status: "ACTIVE",
      headline: "Performance without narrative erosion.",
      metrics: ["Lead generation", "Visibility", "Conversion efficiency"],
      capabilities: ["Paid Media", "Funnel Architecture", "Conversion Intelligence", "SEO Analytics", "Performance Gov"],
      engagement: "Direct Engagement",
      color: "#FF6B35"
    },
    {
      title: "PRODUCTION EVENTS",
      code: "PE_003",
      status: "ACTIVE", 
      headline: "When visibility is non-negotiable.",
      metrics: ["Authority building", "Documentation", "Scale visibility"],
      capabilities: ["Films & Docs", "Event Coverage", "Broadcast Systems", "Podcast Production", "Institutional Assets"],
      engagement: "Project-Based",
      color: "#FF8C69"
    },
    {
      title: "AI TECHNOLOGY",
      code: "AI_004",
      status: "ACTIVE",
      headline: "Intelligence that sits at the decision table.",
      metrics: ["Faster decisions", "Lower effort", "Protected margins"],
      capabilities: ["AI Strategy", "Workflow Automation", "Intelligence Dashboards", "Sentiment Analysis", "Predictive Models"],
      engagement: "Consultation + Models",
      color: "#FFA500"
    }
  ]

  return (
    <main className="overflow-x-hidden w-full pt-20 bg-black">
      {/* Command Center Header */}
      <section className="py-16 px-6 border-b border-neon-orange/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-sm text-neon-orange font-mono mb-2">SYSTEM_STATUS: OPERATIONAL</div>
              <h1 className="text-4xl md:text-6xl font-bold text-white font-serif">
                Strategic Matrix
              </h1>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400 font-mono">VERTICALS: 04</div>
              <div className="text-sm text-neon-orange font-mono">STATUS: ALL_ACTIVE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Matrix Dashboard */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Vertical Selector */}
          <div className="grid grid-cols-4 gap-2 mb-12">
            {verticalData.map((vertical, index) => (
              <button
                key={index}
                onClick={() => setActiveVertical(index)}
                className={`p-4 border transition-all duration-500 font-mono text-left ${
                  activeVertical === index 
                    ? 'border-neon-orange bg-neon-orange/5 text-white' 
                    : 'border-gray-700 text-gray-400 hover:border-gray-600'
                }`}
              >
                <div className="text-xs mb-1">{vertical.code}</div>
                <div className="text-sm font-bold">{vertical.title}</div>
                <div className="text-xs mt-1 text-neon-orange">{vertical.status}</div>
              </button>
            ))}
          </div>

          {/* Active Vertical Display */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Header */}
              <div className="border border-gray-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-neon-orange font-mono">
                    {verticalData[activeVertical].code} // ACTIVE
                  </div>
                  <div className="w-2 h-2 bg-neon-orange animate-pulse"></div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4 font-serif">
                  {verticalData[activeVertical].headline}
                </h2>
                <div className="text-gray-300 font-serif">
                  {verticalData[activeVertical].title}
                </div>
              </div>

              {/* Capabilities Matrix */}
              <div className="border border-gray-700 p-6">
                <div className="text-sm text-neon-orange font-mono mb-4">CAPABILITIES_MATRIX</div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {verticalData[activeVertical].capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-gray-900/50">
                      <div className="w-1 h-1 bg-neon-orange"></div>
                      <span className="text-sm text-gray-300 font-mono">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="border border-gray-700 p-6">
                <div className="text-sm text-neon-orange font-mono mb-4">OUTPUT_METRICS</div>
                <div className="space-y-2">
                  {verticalData[activeVertical].metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-16 h-1 bg-gray-700">
                        <div className="w-3/4 h-full bg-neon-orange"></div>
                      </div>
                      <span className="text-gray-300 font-mono text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Side Panel */}
            <div className="space-y-6">
              {/* Engagement Info */}
              <div className="border border-gray-700 p-6">
                <div className="text-sm text-neon-orange font-mono mb-4">ENGAGEMENT_TYPE</div>
                <div className="text-white font-mono">{verticalData[activeVertical].engagement}</div>
              </div>

              {/* System Actions */}
              <div className="border border-gray-700 p-6">
                <div className="text-sm text-neon-orange font-mono mb-4">SYSTEM_ACTIONS</div>
                <div className="space-y-3">
                  <button className="w-full btn-primary font-mono text-sm">
                    INITIATE_ENGAGEMENT
                  </button>
                  <button className="w-full btn-secondary font-mono text-sm">
                    REQUEST_DIAGNOSTIC
                  </button>
                </div>
              </div>

              {/* Status Monitor */}
              <div className="border border-gray-700 p-6">
                <div className="text-sm text-neon-orange font-mono mb-4">STATUS_MONITOR</div>
                <div className="space-y-2 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">AVAILABILITY:</span>
                    <span className="text-green-400">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">RESPONSE_TIME:</span>
                    <span className="text-green-400">&lt;24H</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">QUEUE_STATUS:</span>
                    <span className="text-neon-orange">ACCEPTING</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Footer */}
      <section className="py-12 px-6 border-t border-neon-orange/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-sm text-gray-400 font-mono mb-4">SYSTEM_READY // AWAITING_INPUT</div>
          <button className="btn-primary font-mono">
            ACCESS_FULL_SYSTEM
          </button>
        </div>
      </section>
    </main>
  )
}