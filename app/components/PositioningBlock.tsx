'use client'

interface PositioningBlockProps {
  content: {
    headline: string
    pillars: string[]
    cta: string
  }
}

export default function PositioningBlock({ content }: PositioningBlockProps) {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black border-t border-neon-orange/30">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 font-serif px-2">
            {content.headline}
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {content.pillars.map((pillar, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 border border-neon-orange/20 sm:border-r sm:border-l-0 sm:border-t-0 sm:border-b-0 sm:last:border-r-0 lg:last:border-r lg:xl:last:border-r-0"
            >
              {/* Number/Icon */}
              <div className="w-8 h-8 bg-neon-orange mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <span className="text-black font-bold text-sm font-serif">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
              </div>
              
              {/* Pillar Text */}
              <p className="text-sm sm:text-base text-white leading-relaxed font-serif">
                <span className="text-neon-orange font-semibold">
                  {pillar.split('→')[0]?.trim() || pillar.split(',')[0]?.trim() || pillar}
                </span>
                {pillar.includes('→') && (
                  <>
                    <br />
                    <span className="text-gray-300">
                      → {pillar.split('→')[1]?.trim()}
                    </span>
                  </>
                )}
                {!pillar.includes('→') && pillar.includes(',') && (
                  <br />
                )}
                {!pillar.includes('→') && !pillar.includes(',') && pillar.length > pillar.split(' ').slice(0, 3).join(' ').length && (
                  <br />
                )}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center px-4">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-neon-orange text-black font-semibold hover:bg-white transition-colors font-serif text-sm sm:text-base">
            {content.cta}
          </button>
        </div>
      </div>
    </section>
  )
}