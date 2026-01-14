'use client'
import contentData from '../data/content.json'
import AIPage from './components/AIPage'
import ClarityBlock from './components/ClarityBlock'
import EngageForm from './components/EngageForm'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import IntelligencePage from './components/IntelligencePage'
import NoSSR from './components/NoSSR'
import PhilosophyPage from './components/PhilosophyPage'
import PositioningBlock from './components/PositioningBlock'
import ProcessVisualization from './components/ProcessVisualization'
import ScrollNavbar from './components/ScrollNavbar'
import VerticalCards from './components/VerticalCards'

function ClosingCTA({ content }: any) {
  return (
    <section className="relative py-32 px-6 bg-black border-t border-neon-orange/30">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block mb-8">
          <div className="flex items-center gap-3 px-6 py-2 border border-neon-orange/30 rounded-full bg-neon-orange/5">
            <div className="w-2 h-2 bg-neon-orange rounded-full animate-pulse" />
            <span className="text-neon-orange text-sm font-mono">READY_TO_ENGAGE</span>
          </div>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-serif">
          {content.headline}
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 font-serif max-w-2xl mx-auto">
          Let's build something extraordinary together.
        </p>
        
        <button 
          onClick={() => {
            const element = document.getElementById('engage');
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="group relative px-12 py-4 text-lg bg-neon-orange-bright text-black font-semibold hover:bg-white transition-all duration-500 font-serif"
        >
          <span className="relative z-10">{content.cta}</span>
        </button>
      </div>
    </section>
  )
}

export default function Page() {
  const content = contentData as any
  
  return (
    <>
      <NoSSR>
        <ScrollNavbar content={content} />
      </NoSSR>
      <main className="w-full overflow-x-hidden max-w-full">
        <section id="hero">
          <NoSSR>
            <HeroSection content={content.hero} />
          </NoSSR>
        </section>
        <section id="clarity">
          <ClarityBlock content={content.clarityBlock} />
        </section>
        <section id="verticals">
          <VerticalCards content={content.verticals} />
        </section>
        <section id="philosophy">
          <PhilosophyPage />
        </section>
        <section id="how-we-work">
          <ProcessVisualization content={content.approachPage} />
        </section>
        <section id="intelligence">
          <IntelligencePage />
        </section>
        <section id="ai">
          <AIPage />
        </section>
        <section id="positioning">
          <PositioningBlock content={content.positioning} />
        </section>
        <section id="engage">
          <NoSSR>
            <EngageForm />
          </NoSSR>
        </section>
        <section id="closing">
          <ClosingCTA content={content.closingCTA} />
        </section>
      </main>
      <Footer />
    </>
  )
}