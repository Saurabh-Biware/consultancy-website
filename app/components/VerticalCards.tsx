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
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            {content.headline}
          </h2>
        </div>

        {/* Vertical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.verticals.map((vertical, index) => (
            <div
              key={index}
              className="group bg-black border border-gray-800 p-8 transition-all duration-300 hover:border-neon-orange hover:shadow-lg hover:shadow-neon-orange/20 hover:-translate-y-1"
            >
              {/* Orange Indicator */}
              <div className="w-4 h-4 bg-neon-orange mb-6"></div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-4 font-serif leading-tight">
                {vertical.title}
              </h3>
              
              {/* Role */}
              <p className="text-sm text-neon-orange mb-2 font-serif">
                Role: {vertical.role}
              </p>
              
              {/* Outcome */}
              <p className="text-sm text-gray-400 mb-6 font-serif leading-relaxed">
                Outcome: {vertical.outcome}
              </p>
              
              {/* CTA Button */}
              <button className="text-sm font-semibold text-neon-orange border border-neon-orange px-4 py-2 bg-transparent hover:bg-neon-orange hover:text-black transition-all duration-300 font-serif">
                {vertical.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}