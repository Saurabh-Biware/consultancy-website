'use client'
import { useState, useEffect } from 'react'

interface ScrollNavbarProps {
  content: any
}

export default function ScrollNavbar({ content }: ScrollNavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'clarity', label: 'Philosophy' },
    { id: 'verticals', label: 'Verticals' },
    { id: 'how-we-work', label: 'How We Work' },
    { id: 'intelligence', label: 'Intelligence' },
    { id: 'ai', label: 'AI' },
    { id: 'engage', label: 'Engage' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrolled / maxScroll) * 100
      
      setScrollProgress(progress)
      setIsScrolled(scrolled > 50)

      // Update active section based on scroll position
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean)

      const currentSection = sectionElements.find(element => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-neon-orange/20' : 'bg-transparent'}
      `}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            
            {/* Brand Identity */}
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 hover:opacity-90 transition-opacity duration-500"
            >
              <div className="text-2xl font-bold tracking-tight font-serif">
                <span className="text-white">Navi</span>
                <span className="text-neon-orange">Starq</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div className="flex items-center gap-6">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`
                      text-sm font-medium transition-colors duration-300 font-serif relative
                      ${activeSection === section.id 
                        ? 'text-neon-orange' 
                        : 'text-gray-400 hover:text-neon-orange'
                      }
                    `}
                  >
                    {section.label}
                    {activeSection === section.id && (
                      <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-orange" />
                    )}
                  </button>
                ))}
              </div>

              {/* Strategic Assessment CTA */}
              <button 
                onClick={() => scrollToSection('engage')}
                className="px-6 py-2 bg-neon-orange text-black font-semibold text-sm hover:bg-white transition-all duration-300 font-serif"
              >
                Strategic Assessment
              </button>
            </div>

            {/* Mobile Menu - Simplified */}
            <div className="lg:hidden">
              <button 
                onClick={() => scrollToSection('engage')}
                className="px-4 py-2 bg-neon-orange text-black font-semibold text-xs hover:bg-white transition-all duration-300 font-serif"
              >
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Full-width Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900">
          <div 
            className="h-full bg-gradient-to-r from-neon-orange to-yellow-400 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>

      {/* Back to Top Button */}
      {scrollProgress > 15 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-neon-orange text-black rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center font-bold shadow-lg"
        >
          ↑
        </button>
      )}
    </>
  )
}