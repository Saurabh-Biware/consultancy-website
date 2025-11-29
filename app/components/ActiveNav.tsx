'use client'

import { useEffect, useState } from 'react'

export default function ActiveNav({ content }: any) {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 150

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute('id') || ''

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="hidden md:flex items-center gap-6 lg:gap-8">
      {content.nav.links.map((link: string) => {
        const isActive = activeSection === link.toLowerCase()
        return (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`text-base font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-signal-orange after:transition-all ${
              isActive
                ? 'text-signal-orange after:w-full'
                : 'text-soft-grey hover:text-signal-orange after:w-0 hover:after:w-full'
            }`}
          >
            {link}
          </a>
        )
      })}
    </div>
  )
}
