'use client'

interface ClarityBlockProps {
  content: {
    headline: string
    description: string
    cta: string
  }
}

export default function ClarityBlock({ content }: ClarityBlockProps) {
  return (
    <section className="relative py-20 px-6 bg-black overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-neon-orange rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated accent line */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-neon-orange to-transparent mx-auto mb-8 animate-pulse"></div>
        
        {/* Large headline with hover effect */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight font-serif group cursor-default">
          <span className="inline-block transition-all duration-300 hover:text-neon-orange hover:scale-105">
            {content.headline}
          </span>
        </h2>
        
        {/* Animated accent line */}
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-neon-orange to-transparent mx-auto mb-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Supporting copy with subtle reveal */}
        <p className="text-xl leading-relaxed text-gray-300 mb-12 max-w-[700px] mx-auto text-justify font-serif opacity-90 hover:opacity-100 transition-opacity duration-300">
          {content.description}
        </p>
        
        {/* CTA button with creative hover */}
        <button 
          onClick={() => {
            const element = document.getElementById('engage');
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
          className="group relative px-8 py-3 bg-neon-orange text-black font-semibold hover:bg-white transition-all duration-500 font-serif overflow-hidden hover-lift"
        >
          <span className="relative z-10">{content.cta}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-neon-orange to-orange-500 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </button>
      </div>
    </section>
  )
}