'use client'

interface VerticalCardsProps {
  content: {
    headline: string
    verticals: Array<{
      title: string
      role: string
      outcome: string
      cta: string
    }>
  }
}

export default function VerticalCards({ content }: VerticalCardsProps) {
  return (
    <section className="relative py-20 px-6 bg-black overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header with creative touch */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 border border-neon-orange/30 rounded-full bg-neon-orange/5">
              <div className="w-2 h-2 bg-neon-orange rounded-full animate-pulse" />
              <span className="text-neon-orange text-xs font-mono">OPERATING_VERTICALS</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif hover:text-neon-orange transition-colors duration-500 cursor-default">
            {content.headline}
          </h2>
        </div>

        {/* Vertical Cards Grid with stagger effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.verticals.map((vertical, index) => (
            <div
              key={index}
              className="group relative bg-black border border-gray-800 p-8 transition-all duration-500 hover:border-neon-orange hover:shadow-2xl hover:shadow-neon-orange/30 hover:-translate-y-2 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-neon-orange opacity-0 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-neon-orange opacity-0 group-hover:opacity-100 group-hover:w-8 group-hover:h-8 transition-all duration-500" />
              
              {/* Orange Indicator with pulse */}
              <div className="w-4 h-4 bg-neon-orange mb-6 group-hover:animate-pulse"></div>
              
              {/* Title with creative hover */}
              <h3 className="text-lg font-bold text-white mb-4 font-serif leading-tight group-hover:text-neon-orange transition-colors duration-300">
                {vertical.title}
              </h3>
              
              {/* Role with slide effect */}
              <p className="text-sm text-neon-orange mb-2 font-serif transform group-hover:translate-x-1 transition-transform duration-300">
                Role: {vertical.role}
              </p>
              
              {/* Outcome */}
              <p className="text-sm text-gray-400 mb-6 font-serif leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                Outcome: {vertical.outcome}
              </p>
              
              {/* CTA Button with creative interaction */}
              <button 
                onClick={() => {
                  const element = document.getElementById('engage');
                  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="relative text-sm font-semibold text-neon-orange border border-neon-orange px-4 py-2 bg-transparent hover:bg-neon-orange hover:text-black transition-all duration-300 font-serif overflow-hidden group/btn"
              >
                <span className="relative z-10">{vertical.cta}</span>
                <div className="absolute inset-0 bg-neon-orange translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}