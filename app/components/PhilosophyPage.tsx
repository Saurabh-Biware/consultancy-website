export default function PhilosophyPage() {
  return (
    <main className="overflow-x-hidden w-full pt-20">
      <section className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-12 leading-tight font-serif">
            Navistarq was not built to compete with agencies.
          </h1>
          <p className="text-2xl leading-relaxed text-gray-400 font-serif">
            Most organisations don't fail due to lack of effort. They fail due to lack of direction, coherence, and intelligence. Navistarq exists to solve that.
          </p>
        </div>
      </section>
      
      <section className="py-24 px-6 bg-black border-t border-neon-orange/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-serif">Name Logic</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-6xl font-bold mb-6 font-serif">
                <span className="text-white">NAVI</span>
              </div>
              <div className="w-8 h-px bg-neon-orange mx-auto mb-4"></div>
              <p className="text-xl text-white font-serif">Direction before motion</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-6 font-serif">
                <span className="text-white">VISTAR</span>
              </div>
              <div className="w-8 h-px bg-neon-orange mx-auto mb-4"></div>
              <p className="text-xl text-white font-serif">Growth as responsibility</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-6 font-serif">
                <span className="text-neon-orange">TARQ</span>
              </div>
              <div className="w-8 h-px bg-neon-orange mx-auto mb-4"></div>
              <p className="text-xl text-white font-serif">Logic as discipline</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-6 bg-black border-t border-neon-orange/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="w-4 h-4 bg-neon-orange mb-6"></div>
              <h3 className="text-2xl font-bold text-white mb-6 font-serif">Vision</h3>
              <p className="text-xl leading-relaxed text-gray-400 font-serif">
                To be the definitive strategic partner for organizations that demand clarity, performance, and sustainable growth.
              </p>
            </div>
            <div>
              <div className="w-4 h-4 bg-neon-orange mb-6"></div>
              <h3 className="text-2xl font-bold text-white mb-6 font-serif">Mission</h3>
              <p className="text-xl leading-relaxed text-gray-400 font-serif">
                We engineer systematic solutions that eliminate trial-and-error from business growth, reputation management, and strategic decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}