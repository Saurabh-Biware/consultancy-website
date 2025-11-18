import { readFile } from 'fs/promises'
import { join } from 'path'
import ScrollReveal from './components/ScrollReveal'
import TabSection from './components/TabSection'
import LottiePlayer from './components/LottiePlayer'

async function getContent() {
  const filePath = join(process.cwd(), 'data', 'content.json')
  const fileContent = await readFile(filePath, 'utf-8')
  return JSON.parse(fileContent)
}

function Navbar({ content }: any) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="text-xl sm:text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
          {content.companyName}
        </a>
        <div className="flex items-center gap-3 sm:gap-4 md:gap-8">
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {content.nav.links.map((link: string) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-base text-gray-600 hover:text-gray-900 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all"
              >
                {link}
              </a>
            ))}
          </div>
          <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-blue-500 to-teal-400 text-white text-base font-semibold rounded-lg hover:shadow-xl hover:scale-105 hover:brightness-110 transition-all duration-300 whitespace-nowrap">
            {content.nav.ctaButton}
          </button>
        </div>
      </div>
    </nav>
  )
}

function Hero({ content }: any) {
  return (
    <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-[1.1] tracking-tight">
              {content.headline}
            </h1>
            <p className="text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto">
              {content.subheadline}
            </p>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2">
              {content.ctaButton}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </ScrollReveal>
        <ScrollReveal className="mt-12 sm:mt-16 flex justify-center" delay={0.2}>
          <div className="w-full max-w-2xl h-64 sm:h-80 md:h-96">
            <LottiePlayer src={content.lottie} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}



function Services({ content }: any) {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12 sm:mb-16">{content.headline}</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.items.map((service: any, index: number) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <article className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group cursor-pointer h-full flex flex-col">
                <div className="mb-6 h-40 sm:h-48 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <img src={service.illustration} alt={`${service.title} illustration`} className="w-full h-full object-contain" loading="lazy" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base flex-grow">{service.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function About({ content }: any) {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6">{content.headline}</h2>
              <p className="text-xl text-gray-600 leading-relaxed">{content.paragraph}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="flex justify-center w-full" delay={0.2}>
            <div className="w-full max-w-md h-64 sm:h-80 md:h-96">
              <LottiePlayer src={content.lottie} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function CTA({ content }: any) {
  return (
    <section id="contact" className="pt-24 sm:pt-32 pb-20 sm:pb-28 px-4 sm:px-6 bg-gradient-to-r from-blue-500 via-blue-600 to-teal-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]"></div>
      <ScrollReveal className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">{content.headline}</h2>
        <p className="text-xl text-white/95 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">{content.subheadline}</p>
        <button className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-blue-600 font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-white/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300 inline-flex items-center gap-2">
          {content.ctaButton}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </button>
      </ScrollReveal>
    </section>
  )
}

function Footer({ content }: any) {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{content.companyInfo.logoText}</h3>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed text-base">{content.companyInfo.description}</p>
            <div className="space-y-3">
              <a href={`mailto:${content.contact.email}`} className="text-gray-400 hover:text-blue-400 transition-colors block flex items-center gap-2 text-base">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {content.contact.email}
              </a>
              <a href={`tel:${content.contact.phone}`} className="text-gray-400 hover:text-blue-400 transition-colors block flex items-center gap-2 text-base">
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
                    <a href={link.href} className="text-gray-400 hover:text-white transition text-base">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-base">{content.copyright}</p>
          <div className="flex gap-4">
            {content.socialLinks.map((social: any, idx: number) => (
              <a key={idx} href={social.url} className="text-gray-400 hover:text-blue-400 transition-all hover:scale-110" aria-label={social.platform}>
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
      <TabSection content={content.solutions} />
      <Services content={content.services} />
      <About content={content.about} />
      <CTA content={content.cta} />
      <Footer content={content.footer} />
    </main>
  )
}
