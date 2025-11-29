import { readFile } from 'fs/promises'
import { join } from 'path'
import ActiveNav from './components/ActiveNav'
import AnimatedShape from './components/AnimatedShape'
import ScrollReveal from './components/ScrollReveal'

async function getContent() {
  const filePath = join(process.cwd(), 'data', 'content.json')
  const fileContent = await readFile(filePath, 'utf-8')
  return JSON.parse(fileContent)
}

function Navbar({ content }: any) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-matte-black/90 backdrop-blur-md border-b border-signal-orange/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-2 hover:opacity-90 transition-opacity">
          <div className="text-2xl sm:text-3xl font-bold tracking-tight">
            <span className="text-white">Navi</span>
            <span className="text-signal-orange">Starq</span>
          </div>
        </a>
        <div className="flex items-center gap-3 sm:gap-4 md:gap-8">
          <ActiveNav content={content} />
          <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-signal-orange text-matte-black text-base font-semibold rounded-lg hover:bg-signal-orange/90 hover:shadow-xl hover:shadow-signal-orange/50 hover:scale-105 transition-all duration-300 whitespace-nowrap">
            {content.nav.ctaButton}
          </button>
        </div>
      </div>
    </nav>
  )
}

function Hero({ content }: any) {
  return (
    <section className="relative pt-32 sm:pt-40 pb-24 sm:pb-32 px-4 sm:px-6 bg-gradient-to-br from-matte-black via-deep-charcoal to-matte-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-signal-orange/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] bg-signal-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-signal-orange/5 rounded-full"></div>
      </div>
      
      {/* Floating Animated Shapes */}
      <div className="absolute top-32 right-[8%] w-64 h-64 opacity-30 hidden xl:block">
        <AnimatedShape variant="hexagon" className="w-full h-full" />
      </div>
      <div className="absolute bottom-32 left-[8%] w-56 h-56 opacity-25 hidden xl:block">
        <AnimatedShape variant="network" className="w-full h-full" />
      </div>
      <div className="absolute top-1/2 right-[5%] w-32 h-32 opacity-20 hidden lg:block">
        <AnimatedShape variant="circle" className="w-full h-full" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              {/* Micro Credo Badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-gradient-to-r from-signal-orange/10 to-signal-orange/5 border border-signal-orange/40 rounded-full backdrop-blur-sm shadow-lg shadow-signal-orange/10">
                <svg className="w-4 h-4 text-signal-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <p className="text-sm font-semibold text-signal-orange tracking-wide">{content.microCredo}</p>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                {content.headline.split('.').map((part: string, i: number) => {
                  const words = part.trim().split(' ')
                  const lastWord = words.pop()
                  return (
                    <span key={i} className="block mb-2">
                      {words.join(' ')}{' '}
                      <span className="gradient-text">{lastWord}</span>
                      {i < content.headline.split('.').length - 1 ? '.' : ''}
                    </span>
                  )
                })}
              </h1>
              
              {/* Subheadline */}
              <p className="text-xl text-soft-grey mb-10 leading-relaxed max-w-2xl">
                {content.subheadline}
              </p>
              
              {/* CTA Button */}
              <div className="flex flex-wrap items-center gap-4">
                <button className="group px-8 py-4 bg-signal-orange text-matte-black font-bold text-lg rounded-full hover:bg-white hover:shadow-2xl hover:shadow-signal-orange/40 transition-all duration-300 inline-flex items-center gap-3">
                  {content.ctaButton}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
                <button className="px-8 py-4 border-2 border-signal-orange/30 text-white font-semibold text-lg rounded-full hover:border-signal-orange hover:bg-signal-orange/5 transition-all duration-300">
                  View Work
                </button>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Right Visual Element */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.2}>
              {/* Mobile Animated Shape */}
              <div className="lg:hidden mb-12 flex justify-center">
                <div className="w-64 h-64">
                  <AnimatedShape variant="particles" className="w-full h-full" />
                </div>
              </div>
              <div className="relative">
                {/* Decorative Cards Stack */}
                <div className="relative w-full h-[500px]">
                  {/* Card 3 - Back */}
                  <div className="absolute top-12 right-0 w-[280px] h-[360px] bg-deep-charcoal/40 border border-signal-orange/10 rounded-2xl backdrop-blur-sm transform rotate-6"></div>
                  
                  {/* Card 2 - Middle */}
                  <div className="absolute top-6 right-8 w-[280px] h-[360px] bg-deep-charcoal/60 border border-signal-orange/20 rounded-2xl backdrop-blur-sm transform rotate-3 p-6">
                    <div className="w-12 h-12 rounded-full bg-signal-orange/20 mb-4"></div>
                    <div className="space-y-3">
                      <div className="h-3 bg-signal-orange/10 rounded w-3/4"></div>
                      <div className="h-3 bg-signal-orange/10 rounded w-full"></div>
                      <div className="h-3 bg-signal-orange/10 rounded w-2/3"></div>
                    </div>
                  </div>
                  
                  {/* Card 1 - Front */}
                  <div className="absolute top-0 right-16 w-[280px] h-[360px] bg-deep-charcoal border-2 border-signal-orange/40 rounded-2xl backdrop-blur-sm shadow-2xl shadow-signal-orange/20 p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-full bg-signal-orange flex items-center justify-center">
                        <svg className="w-7 h-7 text-matte-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <div>
                        <p className="text-xs text-signal-orange font-bold uppercase tracking-wide">Strategy</p>
                        <p className="text-sm text-white font-semibold">Growth Focused</p>
                      </div>
                    </div>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-signal-orange"></div>
                        <p className="text-sm text-soft-grey">Brand Strategy</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-signal-orange"></div>
                        <p className="text-sm text-soft-grey">Digital Marketing</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-signal-orange"></div>
                        <p className="text-sm text-soft-grey">Tech Solutions</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-signal-orange/20">
                      <p className="text-xs text-soft-grey/70">Measurable Impact</p>
                      <p className="text-2xl font-bold text-white mt-1">360° Growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}



function Services({ content }: any) {
  const categoryIcons: Record<string, any> = {
    'Branding & Strategy': <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    'Marketing Strategy & Execution': <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>,
    'Business Advisory & Growth': <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    'AI, Gen AI & Technology': <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
  }
  
  return (
    <section id="services" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-matte-black border-t border-signal-orange/20 overflow-hidden">
      {/* Background Animations */}
      <div className="absolute top-10 right-10 w-40 h-40 opacity-10">
        <AnimatedShape variant="circle" className="w-full h-full" />
      </div>
      <div className="absolute bottom-10 left-10 w-48 h-48 opacity-10">
        <AnimatedShape variant="hexagon" className="w-full h-full" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="flex flex-col items-center mb-20">
            <div className="w-24 h-24 mb-6">
              <AnimatedShape variant="network" className="w-full h-full" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center">{content.headline}</h1>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {content.categories.map((category: any, catIndex: number) => (
            <div key={catIndex} className="group relative p-8 bg-deep-charcoal border border-signal-orange/20 rounded-2xl hover:border-signal-orange/40 transition-all duration-300 flex flex-col h-full">
              <ScrollReveal delay={catIndex * 0.1}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full bg-signal-orange/10 flex items-center justify-center text-signal-orange group-hover:bg-signal-orange/20 transition-colors flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-signal-orange/5 animate-ping group-hover:animate-none"></div>
                    {categoryIcons[category.title]}
                  </div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-signal-orange transition-colors">{category.title}</h2>
                </div>
                
                {/* Services Grid */}
                <div className="space-y-4">
                  {category.services.map((service: any, serviceIndex: number) => (
                    <div key={serviceIndex} className="group/item p-4 bg-matte-black/50 rounded-lg hover:bg-matte-black transition-colors cursor-pointer">
                      <h3 className="text-base font-bold text-white mb-2 group-hover/item:text-signal-orange transition-colors">{service.name}</h3>
                      <p className="text-sm text-soft-grey leading-relaxed">{service.description}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhatWeDo({ content }: any) {
  return (
    <section className="relative py-20 px-4 sm:px-6 bg-deep-charcoal border-t border-signal-orange/20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-16">{content.headline}</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {content.pillars.map((pillar: any, index: number) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="group relative p-8 bg-matte-black border border-signal-orange/20 rounded-2xl hover:border-signal-orange/40 transition-all">
                <div className="w-12 h-12 rounded-full bg-signal-orange/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-signal-orange">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-signal-orange transition-colors">{pillar.title}</h3>
                <p className="text-base text-soft-grey leading-relaxed">{pillar.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyNaviStarq({ content }: any) {
  return (
    <section className="py-20 px-4 sm:px-6 bg-matte-black border-t border-signal-orange/20">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-12">{content.headline}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="grid md:grid-cols-2 gap-4">
            {content.values.map((value: string, index: number) => (
              <div key={index} className="flex items-start gap-3 p-6 bg-deep-charcoal border border-signal-orange/10 rounded-xl hover:border-signal-orange/30 transition-all">
                <svg className="w-5 h-5 text-signal-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <p className="text-base text-soft-grey">{value}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function Capabilities({ content }: any) {
  return (
    <section className="py-20 px-4 sm:px-6 bg-deep-charcoal border-t border-signal-orange/20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-16">{content.headline}</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-4 gap-6">
          {content.categories.map((category: any, index: number) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="p-6 bg-matte-black border border-signal-orange/20 rounded-xl hover:border-signal-orange/40 transition-all">
                <h3 className="text-lg font-bold text-signal-orange mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item: string, idx: number) => (
                    <li key={idx} className="text-sm text-soft-grey flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-signal-orange"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Work({ content }: any) {
  const industryIcons: Record<string, any> = {
    'Technology': <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    'Retail': <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    'Financial Services': <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  }
  
  return (
    <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 bg-matte-black border-t border-signal-orange/20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-4">{content.headline}</h1>
          <p className="text-xl text-soft-grey text-center mb-20">{content.subline}</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {content.caseStudies.map((study: any, index: number) => (
            <div key={study.id} className="group relative bg-deep-charcoal border border-signal-orange/20 rounded-2xl hover:border-signal-orange/40 transition-all duration-300 overflow-hidden flex flex-col h-full">
              <ScrollReveal delay={index * 0.1}>
                {/* Header */}
                <div className="p-6 border-b border-signal-orange/10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-signal-orange/10 flex items-center justify-center text-signal-orange flex-shrink-0">
                      {industryIcons[study.industry] || industryIcons['Technology']}
                    </div>
                    <div>
                      <span className="text-xs text-signal-orange font-semibold uppercase tracking-wide">{study.industry}</span>
                      <h2 className="text-xl font-bold text-white mt-1">{study.title}</h2>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-grow">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-signal-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                      <h3 className="text-sm font-bold text-white">Challenge</h3>
                    </div>
                    <p className="text-sm text-soft-grey leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-signal-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      <h3 className="text-sm font-bold text-white">Solution</h3>
                    </div>
                    <p className="text-sm text-soft-grey leading-relaxed">{study.approach}</p>
                  </div>
                </div>

                {/* Impact Footer */}
                <div className="p-6 bg-matte-black/50 border-t border-signal-orange/10">
                  <h3 className="text-xs font-bold text-signal-orange mb-3 uppercase tracking-wide">Impact</h3>
                  <div className="space-y-2">
                    {study.impact.map((result: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-signal-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <p className="text-xs text-white font-medium">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Approach({ content }: any) {
  const stepIcons = [
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ]
  
  return (
    <section id="approach" className="py-16 sm:py-24 px-4 sm:px-6 bg-deep-charcoal border-t border-signal-orange/20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-6">{content.headline}</h1>
          <p className="text-xl text-soft-grey text-center mb-20">{content.intro}</p>
        </ScrollReveal>

        {/* Visual Process Flow */}
        <div className="relative mb-20">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-signal-orange via-signal-orange to-signal-orange opacity-30"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {content.steps.map((step: any, index: number) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Circle with Icon */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-signal-orange flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-signal-orange/30 text-matte-black">
                    {stepIcons[index]}
                  </div>
                  
                  {/* Arrow (hidden on last item) */}
                  {index < content.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] text-signal-orange/50">
                      <svg className="w-full h-4" viewBox="0 0 100 20" fill="none">
                        <path d="M0 10 L90 10 M85 5 L95 10 L85 15" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="px-2">
                    <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-soft-grey leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.6}>
          <div className="text-center pt-8 border-t border-signal-orange/20">
            <p className="text-2xl font-bold text-white mb-2">{content.closing.line1}</p>
            <p className="text-xl text-signal-orange font-semibold">{content.closing.line2}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function About({ content }: any) {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-matte-black border-t border-signal-orange/20">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <ScrollReveal>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 text-center leading-tight max-w-4xl mx-auto">{content.headline}</h1>
        </ScrollReveal>
        
        {/* Intro Split Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {content.intro.map((para: string, index: number) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="p-8 bg-deep-charcoal border border-signal-orange/20 rounded-2xl hover:border-signal-orange/40 transition-all h-full flex items-center">
                <p className="text-lg text-soft-grey leading-relaxed">{para}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Name Story - Visual Breakdown */}
        <ScrollReveal delay={0.2}>
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-xl text-signal-orange font-semibold mb-4">{content.nameStory.title}</p>
            </div>
            
            {/* Visual Name Components */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {content.nameStory.parts.map((part: string, index: number) => {
                const [name, meaning] = part.split(' (')
                const cleanMeaning = meaning?.replace(')', '')
                return (
                  <div key={index} className="group relative p-6 bg-deep-charcoal border border-signal-orange/20 rounded-xl hover:border-signal-orange hover:scale-105 transition-all duration-300 text-center">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-signal-orange flex items-center justify-center text-matte-black font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-2xl font-bold text-white mb-2">{name}</p>
                    <p className="text-sm text-soft-grey">{cleanMeaning}</p>
                  </div>
                )
              })}
            </div>
            
            {/* Meaning */}
            <div className="p-6 bg-gradient-to-r from-signal-orange/10 to-transparent border-l-4 border-signal-orange rounded-lg">
              <p className="text-xl text-white font-medium italic text-center">{content.nameStory.meaning}</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Identity & Philosophy - Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {/* Identity */}
          <ScrollReveal delay={0.3}>
            <div className="p-8 bg-deep-charcoal border border-signal-orange/20 rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-signal-orange/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-signal-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Who We Are</h3>
              </div>
              <div className="space-y-4">
                {content.identity.map((para: string, index: number) => (
                  <p key={index} className="text-base text-soft-grey leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Philosophy */}
          <ScrollReveal delay={0.4}>
            <div className="p-8 bg-deep-charcoal border border-signal-orange/20 rounded-2xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-signal-orange/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-signal-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Our Philosophy</h3>
              </div>
              <div className="space-y-3">
                {content.philosophy.map((point: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-signal-orange flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    <p className="text-base text-soft-grey leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* How We Work - Process Cards */}
        <ScrollReveal delay={0.5}>
          <div className="mb-16 max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-white mb-2">{content.howWeWork.title}</h3>
              <div className="w-20 h-1 bg-signal-orange mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {content.howWeWork.steps.map((step: string, index: number) => (
                <div key={index} className="group relative p-6 bg-deep-charcoal border border-signal-orange/20 rounded-xl hover:border-signal-orange/40 hover:scale-105 transition-all duration-300 h-full flex flex-col">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-signal-orange flex items-center justify-center text-matte-black font-bold shadow-lg shadow-signal-orange/30">
                    {index + 1}
                  </div>
                  <p className="text-sm text-soft-grey leading-relaxed text-center mt-4">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* What Defines Us - Trait Pills */}
        <ScrollReveal delay={0.6}>
          <div className="mb-16 max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-white mb-2">{content.whatDefinesUs.title}</h3>
              <div className="w-20 h-1 bg-signal-orange mx-auto"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {content.whatDefinesUs.traits.map((trait: string, index: number) => (
                <div key={index} className="group px-6 py-3 bg-deep-charcoal border border-signal-orange/20 rounded-full hover:bg-signal-orange hover:border-signal-orange transition-all duration-300 cursor-pointer">
                  <p className="text-sm font-semibold text-white group-hover:text-matte-black transition-colors">{trait}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Closing Statement */}
        <ScrollReveal delay={0.7}>
          <div className="text-center pt-12 border-t border-signal-orange/20 max-w-4xl mx-auto">
            <p className="text-2xl font-bold text-white mb-3 leading-relaxed">{content.closing.line1}</p>
            <p className="text-xl text-signal-orange font-semibold">{content.closing.line2}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function Proof({ content }: any) {
  return (
    <section className="py-20 px-4 sm:px-6 bg-matte-black border-t border-signal-orange/20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-16">{content.headline}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {content.metrics.map((metric: any, index: number) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="text-center p-8 bg-deep-charcoal border border-signal-orange/20 rounded-xl hover:border-signal-orange/40 transition-all">
                <p className="text-4xl font-bold gradient-text mb-2">{metric.value}</p>
                <p className="text-sm text-soft-grey uppercase tracking-wide">{metric.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Insights({ content }: any) {
  const categoryIcons: Record<string, any> = {
    'Branding & Communication': <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
    'Marketing & Consumer Behaviour': <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    'AI & Automation': <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    'Business Strategy': <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    'Cultural & Category Insights': <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
    'Trend Shifts': <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
  }
  
  return (
    <section id="insights" className="py-16 sm:py-24 px-4 sm:px-6 bg-deep-charcoal border-t border-signal-orange/20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-signal-orange/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-signal-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight max-w-4xl mx-auto">{content.headline}</h1>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {content.categories.map((category: string, index: number) => (
              <div key={index} className="group px-5 py-2.5 bg-matte-black border border-signal-orange/20 rounded-full hover:border-signal-orange hover:bg-signal-orange/5 transition-all cursor-pointer flex items-center gap-2">
                <div className="text-signal-orange group-hover:scale-110 transition-transform">
                  {categoryIcons[category]}
                </div>
                <span className="text-sm font-medium text-soft-grey group-hover:text-white transition-colors">{category}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.articles.map((article: any, index: number) => (
            <ScrollReveal key={article.id} delay={index * 0.1}>
              <article className="group relative bg-matte-black border border-signal-orange/20 rounded-2xl hover:border-signal-orange/40 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-signal-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="p-6 border-b border-signal-orange/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-signal-orange/10 flex items-center justify-center text-signal-orange">
                        {categoryIcons[article.category]}
                      </div>
                      <span className="text-xs text-signal-orange font-bold uppercase tracking-wide">{article.category}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-soft-grey/70">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      <span>{article.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-signal-orange transition-colors leading-tight">{article.title}</h2>
                  <p className="text-sm text-soft-grey leading-relaxed flex-grow">{article.excerpt}</p>
                  
                  <div className="flex items-center gap-2 mt-4 text-signal-orange opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold">Read More</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact({ content }: any) {
  return (
    <section id="contact" className="relative py-32 sm:py-40 px-4 sm:px-6 bg-matte-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-[15%] w-[400px] h-[400px] bg-signal-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-[15%] w-[350px] h-[350px] bg-signal-orange/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-signal-orange/10 flex items-center justify-center animate-pulse">
                <svg className="w-8 h-8 text-signal-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight">{content.headline}</h1>
            <p className="text-2xl text-soft-grey max-w-3xl mx-auto leading-relaxed mb-12">{content.subheadline}</p>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group relative p-10 bg-deep-charcoal border-2 border-signal-orange/30 rounded-3xl hover:border-signal-orange hover:shadow-2xl hover:shadow-signal-orange/20 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-signal-orange to-transparent"></div>
              <a href={`mailto:${content.email}`} className="flex flex-col items-center gap-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-signal-orange/10 flex items-center justify-center group-hover:bg-signal-orange/20 transition-colors">
                    <svg className="w-10 h-10 text-signal-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-signal-orange animate-ping opacity-75"></div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-soft-grey mb-2 uppercase tracking-wide font-semibold">Email Us</p>
                  <span className="text-2xl font-bold gradient-text">{content.email}</span>
                </div>
              </a>
            </div>
            
            <div className="relative p-10 bg-deep-charcoal border-2 border-signal-orange/30 rounded-3xl flex flex-col items-center justify-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-signal-orange to-transparent"></div>
              <div className="w-20 h-20 rounded-full bg-signal-orange/10 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-signal-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div className="text-center">
                <p className="text-sm text-soft-grey mb-2 uppercase tracking-wide font-semibold">Response Time</p>
                <p className="text-2xl font-bold text-white mb-2">Within 24 Hours</p>
                <p className="text-sm text-soft-grey italic">{content.reassurance}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.3}>
          <div className="flex items-center justify-center gap-4 my-16">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-signal-orange/30"></div>
            <div className="w-2 h-2 rounded-full bg-signal-orange"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-signal-orange/30"></div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>, label: 'Live Chat' },
              { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>, label: 'Phone Call' },
              { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, label: 'Schedule Meet' },
              { icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>, label: 'Send Brief' }
            ].map((method, idx) => (
              <div key={idx} className="group p-6 bg-deep-charcoal/50 border border-signal-orange/10 rounded-xl hover:border-signal-orange/40 hover:bg-deep-charcoal transition-all cursor-pointer text-center">
                <div className="w-12 h-12 rounded-full bg-signal-orange/10 flex items-center justify-center mx-auto mb-3 text-signal-orange group-hover:bg-signal-orange/20 transition-colors">
                  {method.icon}
                </div>
                <p className="text-sm font-semibold text-white">{method.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function Footer({ content }: any) {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 bg-matte-black border-t border-signal-orange/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold tracking-tight mb-3">
              <span className="text-white">Navi</span>
              <span className="text-signal-orange">Starq</span>
            </div>
            <p className="text-soft-grey mb-6 max-w-sm leading-relaxed text-base">{content.companyInfo.description}</p>
            <div className="space-y-3">
              <a href={`mailto:${content.contact.email}`} className="text-soft-grey hover:text-signal-orange transition-colors block flex items-center gap-2 text-base">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {content.contact.email}
              </a>
              <a href={`tel:${content.contact.phone}`} className="text-soft-grey hover:text-signal-orange transition-colors block flex items-center gap-2 text-base">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {content.contact.phone}
              </a>
            </div>
          </div>
          {content.columns.map((column: any, idx: number) => (
            <div key={idx}>
              <h4 className="text-white font-semibold mb-4 text-base">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link: any, linkIdx: number) => (
                  <li key={linkIdx}>
                    <a href={link.href} className="text-soft-grey hover:text-signal-orange transition text-base">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-deep-charcoal pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-soft-grey text-base">{content.copyright}</p>
          <div className="flex gap-4">
            {content.socialLinks.map((social: any, idx: number) => (
              <a key={idx} href={social.url} className="text-soft-grey hover:text-signal-orange transition-all hover:scale-110" aria-label={social.platform}>
                {social.platform === 'LinkedIn' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
                {social.platform === 'Twitter' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>}
                {social.platform === 'Instagram' && <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default async function Page() {
  const content = await getContent()

  return (
    <main className="overflow-x-hidden w-full">
      <Navbar content={content} />
      <Hero content={content.hero} />
      <About content={content.about} />
      <WhatWeDo content={content.whatWeDo} />
      <Services content={content.servicesPage} />
      <Approach content={content.approachPage} />
      <Work content={content.workPage} />
      <WhyNaviStarq content={content.whyNaviStarq} />
      <Capabilities content={content.capabilities} />
      <Proof content={content.proof} />
      <Insights content={content.insightsPage} />
      <Contact content={content.contactPage} />
      <Footer content={content.footer} />
    </main>
  )
}
