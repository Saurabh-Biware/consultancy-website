'use client'

import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import LottiePlayer from './LottiePlayer'

export default function TabSection({ content }: any) {
  const [activeTab, setActiveTab] = useState(content.tabs[0].id)
  const active = content.tabs.find((tab: any) => tab.id === activeTab)

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4">{content.headline}</h2>
            <p className="text-xl text-gray-600 px-4">{content.subheadline}</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
            {content.tabs.map((tab: any) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-base rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 sm:gap-16 md:gap-12">
          <div key={`img-${activeTab}`} className="w-full flex justify-center md:order-last py-4 md:py-0">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg h-56 sm:h-64 md:h-96 flex-shrink-0">
              <LottiePlayer src={active.lottie} />
            </div>
          </div>

          <div key={activeTab} className="w-full mt-4 md:mt-0">
            <h3 className="text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{active.title}</h3>
            <p className="text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">{active.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {active.features.map((feature: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-medium text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
