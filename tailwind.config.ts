import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'matte-black': '#0A0A0A',
        'signal-orange': '#FF6A1A',
        'deep-charcoal': '#1A1A1A',
        'soft-grey': '#B6B6B6',
      },
      fontFamily: {
        'serif': ['EB Garamond', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
