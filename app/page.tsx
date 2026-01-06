'use client'
import { useEffect } from 'react'
import contentData from '../data/content.json'
import AIPage from './components/AIPage'
import ClarityBlock from './components/ClarityBlock'
import EngageForm from './components/EngageForm'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import IntelligencePage from './components/IntelligencePage'
import PhilosophyPage from './components/PhilosophyPage'
import PositioningBlock from './components/PositioningBlock'
import ProcessVisualization from './components/ProcessVisualization'
import ScrollNavbar from './components/ScrollNavbar'
import VerticalCards from './components/VerticalCards'
import { useScrollAnimation, useParallax } from './hooks/useScrollAnimation'

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
  
  // Initialize scroll animations
  useScrollAnimation()
  useParallax()

  return (
    <>
      <ScrollNavbar content={content} />
      <main className="overflow-x-hidden w-screen max-w-none">
        <section id="hero">
          <HeroSection content={content.hero} />
        </section>
        <section id="clarity" className="scroll-fade-in">
          <ClarityBlock content={content.clarityBlock} />
        </section>
        <section id="verticals" className="scroll-slide-left">
          <VerticalCards content={content.verticals} />
        </section>
        <section id="philosophy" className="scroll-fade-in">
          <PhilosophyPage />
        </section>
        <section id="how-we-work" className="scroll-slide-right">
          <ProcessVisualization content={content.approachPage} />
        </section>
        <section id="intelligence" className="scroll-scale-in">
          <IntelligencePage />
        </section>
        <section id="ai" className="scroll-fade-in">
          <AIPage />
        </section>
        <section id="positioning" className="scroll-slide-left">
          <PositioningBlock content={content.positioning} />
        </section>
        <section id="engage" className="scroll-fade-in">
          <EngageForm />
        </section>
        <section id="closing" className="scroll-scale-in">
          <ClosingCTA content={content.closingCTA} />
        </section>
      </main>
      <Footer />
    </>
  )
}