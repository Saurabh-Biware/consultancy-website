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
    <section className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        {/* Orange accent line above headline */}
        <div className="w-16 h-px bg-neon-orange mx-auto mb-8"></div>
        
        {/* Large headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight font-serif">
          {content.headline}
        </h2>
        
        {/* Orange accent line below headline */}
        <div className="w-16 h-px bg-neon-orange mx-auto mb-12"></div>
        
        {/* Supporting copy - justified, max-width 700px */}
        <p className="text-xl leading-relaxed text-gray-300 mb-12 max-w-[700px] mx-auto text-justify font-serif">
          {content.description}
        </p>
        
        {/* CTA button */}
        <button className="px-8 py-3 bg-neon-orange text-black font-semibold hover:bg-white transition-colors font-serif">
          {content.cta}
        </button>
      </div>
    </section>
  )
}