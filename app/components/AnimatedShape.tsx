'use client'

type AnimatedShapeProps = {
  variant: 'hexagon' | 'circle' | 'network' | 'particles'
  className?: string
}

export default function AnimatedShape({ variant, className = '' }: AnimatedShapeProps) {
  if (variant === 'hexagon') {
    return (
      <div className={`relative ${className}`}>
        <div className="absolute inset-0 animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-signal-orange/30" />
            <polygon points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-signal-orange/20" />
          </svg>
        </div>
        <div className="absolute inset-0 animate-pulse">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,25 70,37.5 70,62.5 50,75 30,62.5 30,37.5" fill="currentColor" className="text-signal-orange/10" />
          </svg>
        </div>
      </div>
    )
  }

  if (variant === 'circle') {
    return (
      <div className={`relative ${className}`}>
        <div className="absolute inset-0 animate-spin-slow">
          <div className="w-full h-full rounded-full border-2 border-signal-orange/20 border-t-signal-orange/60"></div>
        </div>
        <div className="absolute inset-[20%] animate-pulse">
          <div className="w-full h-full rounded-full bg-signal-orange/10"></div>
        </div>
        <div className="absolute inset-[40%] animate-ping">
          <div className="w-full h-full rounded-full bg-signal-orange/20"></div>
        </div>
      </div>
    )
  }

  if (variant === 'network') {
    return (
      <div className={`relative ${className}`}>
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <g className="animate-pulse">
            <circle cx="50" cy="50" r="3" fill="currentColor" className="text-signal-orange" />
            <circle cx="150" cy="50" r="3" fill="currentColor" className="text-signal-orange" />
            <circle cx="100" cy="100" r="3" fill="currentColor" className="text-signal-orange" />
            <circle cx="50" cy="150" r="3" fill="currentColor" className="text-signal-orange" />
            <circle cx="150" cy="150" r="3" fill="currentColor" className="text-signal-orange" />
          </g>
          <g className="animate-pulse" style={{ animationDelay: '0.5s' }}>
            <line x1="50" y1="50" x2="150" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-signal-orange/30" />
            <line x1="50" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-signal-orange/30" />
            <line x1="150" y1="50" x2="100" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-signal-orange/30" />
            <line x1="100" y1="100" x2="50" y2="150" stroke="currentColor" strokeWidth="0.5" className="text-signal-orange/30" />
            <line x1="100" y1="100" x2="150" y2="150" stroke="currentColor" strokeWidth="0.5" className="text-signal-orange/30" />
          </g>
        </svg>
      </div>
    )
  }

  if (variant === 'particles') {
    return (
      <div className={`relative ${className}`}>
        <div className="absolute top-[10%] left-[20%] w-2 h-2 rounded-full bg-signal-orange/40 animate-float"></div>
        <div className="absolute top-[30%] right-[15%] w-3 h-3 rounded-full bg-signal-orange/30 animate-float-delayed"></div>
        <div className="absolute bottom-[25%] left-[30%] w-2.5 h-2.5 rounded-full bg-signal-orange/50 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[60%] right-[25%] w-2 h-2 rounded-full bg-signal-orange/35 animate-float-delayed" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-[40%] left-[50%] w-1.5 h-1.5 rounded-full bg-signal-orange/45 animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
    )
  }

  return null
}
