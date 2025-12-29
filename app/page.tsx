'use client'
import { useState } from 'react'
import contentData from '../data/content.json'
import ClarityBlock from './components/ClarityBlock'
import EngageForm from './components/EngageForm'
import HeroSection from './components/HeroSection'
import IntelligencePage from './components/IntelligencePage'
import AIPage from './components/AIPage'
import PositioningBlock from './components/PositioningBlock'
import ProcessVisualization from './components/ProcessVisualization'
import VerticalCards from './components/VerticalCards'
import VerticalLandingSections from './components/VerticalLandingSections'
import PhilosophyPage from './components/PhilosophyPage'

function Navbar({ content, currentPage, setCurrentPage }: any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-neon-orange/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="group flex items-center gap-2 hover:opacity-90 transition-opacity duration-500">
          <div className="text-2xl font-bold tracking-tight font-serif">
            <span className="text-white">Navi</span>
            <span className="text-neon-orange">Starq</span>
          </div>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {content.nav.links.map((link: string) => (
              <button
                key={link}
                onClick={(e) => { e.preventDefault(); setCurrentPage(link.toLowerCase().replace(' ', '-')); }}
                className={`text-base font-medium transition-colors duration-500 font-serif ${
                  currentPage === link.toLowerCase().replace(' ', '-') ? 'text-neon-orange' : 'text-gray-400 hover:text-neon-orange'
                }`}
              >
                {link}
              </button>
            ))}
          </div>
          <button className="px-6 py-2 bg-neon-orange-bright text-black font-semibold hover:bg-white transition-colors duration-500 font-serif">
            {content.nav.ctaButton}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-neon-orange/30">
          <div className="px-6 py-4 space-y-4">
            {content.nav.links.map((link: string) => (
              <button
                key={link}
                onClick={(e) => { 
                  e.preventDefault(); 
                  setCurrentPage(link.toLowerCase().replace(' ', '-')); 
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 font-medium transition-colors duration-500 font-serif ${
                  currentPage === link.toLowerCase().replace(' ', '-') ? 'text-neon-orange' : 'text-gray-400'
                }`}
              >
                {link}
              </button>
            ))}
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="w-full mt-4 px-6 py-3 bg-neon-orange-bright text-black font-semibold transition-colors duration-500 font-serif"
            >
              {content.nav.ctaButton}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

function ClosingCTA({ content }: any) {
  return (
    <section className="py-32 px-6 bg-black border-t border-neon-orange/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-tight font-serif">
          {content.headline}
        </h2>
        <button className="px-12 py-4 text-lg bg-neon-orange-bright text-black font-semibold hover:bg-white transition-colors duration-500 font-serif">
          {content.cta}
        </button>
      </div>
    </section>
  )
}

export default function Page() {
  const content = contentData as any
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'philosophy':
        return <PhilosophyPage />
      case 'verticals':
        return (
          <main className="overflow-x-hidden w-full pt-20">
            <VerticalLandingSections content={content.verticals} />
          </main>
        )
      case 'how-we-work':
        return <ProcessVisualization content={content.approachPage} />
      case 'intelligence':
        return <IntelligencePage />
      case 'ai':
        return <AIPage />
      case 'engage':
        return <EngageForm />
      default:
        return (
          <main className="overflow-x-hidden w-full">
            <HeroSection content={content.hero} />
            <ClarityBlock content={content.clarityBlock} />
            <VerticalCards content={content.verticals} />
            <PositioningBlock content={content.positioning} />
            <ClosingCTA content={content.closingCTA} />
          </main>
        )
    }
  }

  return (
    <>
      <Navbar content={content} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </>
  )
}