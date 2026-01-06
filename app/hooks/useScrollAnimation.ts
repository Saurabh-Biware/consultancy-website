'use client'

import { useEffect } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    // Wait for DOM to be ready
    const initializeAnimations = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
            }
          })
        },
        {
          threshold: 0.15,
          rootMargin: '0px 0px -100px 0px'
        }
      )

      // Observe all animation elements
      const elements = document.querySelectorAll('.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale-in')
      elements.forEach((el) => {
        observer.observe(el)
      })

      return () => {
        elements.forEach((el) => observer.unobserve(el))
      }
    }

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initializeAnimations, 100)
    
    return () => {
      clearTimeout(timer)
    }
  }, [])
}

export function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-fast')
      
      parallaxElements.forEach((element) => {
        const speed = element.classList.contains('parallax-slow') ? 0.5 : 0.3
        const yPos = -(scrolled * speed)
        ;(element as HTMLElement).style.setProperty('--scroll-y', `${yPos}px`)
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
}

export function useStaggeredAnimation(selector: string, delay: number = 100) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element, index) => {
      ;(element as HTMLElement).style.animationDelay = `${index * delay}ms`
    })
  }, [])
}