'use client'
import { useState } from 'react'

interface StrategicNavbarProps {
  content: any
  currentPage: string
  setCurrentPage: (page: string) => void
}

export default function StrategicNavbar({ content, currentPage, setCurrentPage }: StrategicNavbarProps) {
  const [activeNode, setActiveNode] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const strategicNodes = [
    {
      id: 'philosophy',
      label: 'PHILOSOPHY',
      description: 'Strategic Foundation',
      subsystems: ['Systems Thinking', 'Logic First', 'No Trial-Error'],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 'verticals',
      label: 'VERTICALS',
      description: 'Operating Systems',
      subsystems: ['Brand Creative', 'Growth Marketing', 'Production Events', 'AI Technology'],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 'intelligence',
      label: 'INTELLIGENCE',
      description: 'Decision Systems',
      subsystems: ['Data Analysis', 'Strategic Insights', 'Performance Metrics'],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      id: 'engage',
      label: 'ENGAGE',
      description: 'Strategic Contact',
      subsystems: ['Assessment', 'Partnership', 'Implementation'],
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-neon-orange/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Brand + Command Center Layout */}
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <button 
            onClick={() => setCurrentPage('home')} 
            className="group flex items-center gap-2 hover:opacity-90 transition-opacity duration-500"
          >
            <div className="text-2xl font-bold tracking-tight font-serif">
              <span className="text-white">Navi</span>
              <span className="text-neon-orange">Starq</span>
            </div>
          </button>

          {/* Desktop Strategic Command Interface */}
          <div className="hidden lg:flex items-center gap-1">
            <div className="flex items-center bg-black/40 border border-neon-orange/20 rounded-lg p-2">
              {strategicNodes.map((node) => (
                <div
                  key={node.id}
                  className="relative"
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <button
                    onClick={() => setCurrentPage(node.id)}
                    className={`
                      relative px-4 py-3 rounded-md transition-all duration-300 font-serif
                      flex items-center gap-2 text-sm font-medium
                      ${currentPage === node.id 
                        ? 'bg-neon-orange/20 text-neon-orange border border-neon-orange/40' 
                        : 'text-gray-400 hover:text-neon-orange hover:bg-neon-orange/10'
                      }
                    `}
                  >
                    {node.icon}
                    <span>{node.label}</span>
                    
                    {/* Active indicator */}
                    {currentPage === node.id && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-neon-orange rounded-full" />
                    )}
                  </button>

                  {/* Hover Subsystem Panel */}
                  {activeNode === node.id && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-black/95 border border-neon-orange/30 rounded-lg p-4 shadow-2xl">
                      <div className="text-center">
                        <h3 className="text-neon-orange font-semibold text-sm mb-1 font-serif">{node.label}</h3>
                        <p className="text-gray-400 text-xs mb-3 font-serif">{node.description}</p>
                        <div className="space-y-1">
                          {node.subsystems.map((system, index) => (
                            <div key={index} className="text-gray-300 text-xs font-serif opacity-80">
                              {system}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Connection line */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-neon-orange/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Strategic Assessment CTA */}
            <button className="ml-4 px-6 py-3 bg-neon-orange text-black font-semibold text-sm rounded-lg hover:bg-white transition-all duration-300 font-serif">
              Strategic Assessment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Strategic Interface */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-black/60 border border-neon-orange/20 rounded-lg p-4">
            <div className="space-y-3">
              {strategicNodes.map((node) => (
                <button
                  key={node.id}
                  onClick={() => {
                    setCurrentPage(node.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`
                    w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 font-serif
                    ${currentPage === node.id 
                      ? 'bg-neon-orange/20 text-neon-orange border border-neon-orange/40' 
                      : 'text-gray-400 hover:text-neon-orange hover:bg-neon-orange/10'
                    }
                  `}
                >
                  {node.icon}
                  <div className="text-left">
                    <div className="font-medium text-sm">{node.label}</div>
                    <div className="text-xs opacity-70">{node.description}</div>
                  </div>
                </button>
              ))}
              
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full mt-4 px-6 py-3 bg-neon-orange text-black font-semibold text-sm rounded-lg font-serif"
              >
                Strategic Assessment
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}