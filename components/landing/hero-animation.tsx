'use client'

import { useEffect, useRef } from 'react'
import { animate, stagger, createScope } from 'animejs'

export function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    scopeRef.current = createScope({ root: containerRef }).add(() => {
      // Soccer ball main animation - floating + rotation
      animate('.soccer-ball', {
        translateY: [-15, 15],
        rotate: [0, 360],
        duration: 4000,
        ease: 'inOutSine',
        loop: true,
        alternate: true,
      })

      // Ball shadow animation
      animate('.ball-shadow', {
        scale: [1, 0.75, 1],
        opacity: [0.3, 0.15, 0.3],
        duration: 4000,
        ease: 'inOutSine',
        loop: true,
      })

      // Orbital rings animation
      animate('.orbit-ring-1', {
        rotate: [0, 360],
        duration: 12000,
        ease: 'linear',
        loop: true,
      })

      animate('.orbit-ring-2', {
        rotate: [360, 0],
        duration: 16000,
        ease: 'linear',
        loop: true,
      })

      animate('.orbit-ring-3', {
        rotate: [0, 360],
        duration: 20000,
        ease: 'linear',
        loop: true,
      })

      // Glow pulse effect
      animate('.ball-glow', {
        scale: [1, 1.4, 1],
        opacity: [0.3, 0.6, 0.3],
        duration: 3000,
        ease: 'inOutSine',
        loop: true,
      })

      // Particles floating animation
      animate('.particle', {
        translateY: [-25, 25],
        translateX: [-10, 10],
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.3, 1],
        duration: 3500,
        delay: stagger(250),
        ease: 'inOutQuad',
        loop: true,
        alternate: true,
      })

      // Gold particles
      animate('.gold-particle', {
        translateY: [-20, 20],
        opacity: [0.3, 0.9, 0.3],
        duration: 3000,
        delay: stagger(350),
        ease: 'inOutSine',
        loop: true,
        alternate: true,
      })

      // Energy pulse effect
      animate('.energy-pulse', {
        scale: [1, 2.8],
        opacity: [0.5, 0],
        duration: 2500,
        delay: stagger(800),
        ease: 'outExpo',
        loop: true,
      })

      // Field lines animation
      animate('.field-line', {
        scaleX: [0, 1],
        opacity: [0, 0.6, 0],
        duration: 4000,
        delay: stagger(500),
        ease: 'inOutQuad',
        loop: true,
      })

      // Corner decorations pulse
      animate('.corner-deco', {
        opacity: [0.2, 0.5, 0.2],
        duration: 3000,
        delay: stagger(300),
        ease: 'inOutSine',
        loop: true,
      })

      // Inner ring glow
      animate('.inner-ring', {
        opacity: [0.3, 0.7, 0.3],
        duration: 2000,
        ease: 'inOutSine',
        loop: true,
      })

      // Orbiting dots
      animate('.orbit-dot', {
        scale: [1, 1.5, 1],
        duration: 1500,
        delay: stagger(200),
        ease: 'inOutQuad',
        loop: true,
      })
    })

    return () => {
      scopeRef.current?.revert()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[450px] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber-500/5" />
      
      {/* Field lines at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-28 overflow-hidden">
        <div className="field-line absolute bottom-10 left-[15%] w-28 h-0.5 bg-gradient-to-r from-primary/60 to-transparent origin-left" />
        <div className="field-line absolute bottom-16 left-[25%] w-20 h-0.5 bg-gradient-to-r from-primary/40 to-transparent origin-left" />
        <div className="field-line absolute bottom-6 right-[15%] w-24 h-0.5 bg-gradient-to-l from-primary/60 to-transparent origin-right" />
        <div className="field-line absolute bottom-20 right-[25%] w-16 h-0.5 bg-gradient-to-l from-primary/40 to-transparent origin-right" />
        {/* Center circle hint */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-44 h-22 border-t-2 border-primary/20 rounded-t-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-12 bg-primary/20" />
      </div>

      {/* Corner decorations */}
      <div className="corner-deco absolute top-6 left-6 w-14 h-14 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
      <div className="corner-deco absolute top-6 right-6 w-14 h-14 border-r-2 border-t-2 border-primary/40 rounded-tr-lg" />
      <div className="corner-deco absolute bottom-6 left-6 w-14 h-14 border-l-2 border-b-2 border-amber-500/40 rounded-bl-lg" />
      <div className="corner-deco absolute bottom-6 right-6 w-14 h-14 border-r-2 border-b-2 border-amber-500/40 rounded-br-lg" />

      {/* Energy pulses - centered behind ball */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="energy-pulse absolute w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/50" />
        <div className="energy-pulse absolute w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-amber-400/40" />
        <div className="energy-pulse absolute w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/30" />
      </div>

      {/* Floating particles */}
      <div className="particle absolute w-2.5 h-2.5 bg-primary/70 rounded-full shadow-sm shadow-primary/50" style={{ left: '18%', top: '22%' }} />
      <div className="particle absolute w-2 h-2 bg-primary/60 rounded-full shadow-sm shadow-primary/50" style={{ left: '78%', top: '18%' }} />
      <div className="particle absolute w-3 h-3 bg-primary/65 rounded-full shadow-sm shadow-primary/50" style={{ left: '12%', top: '58%' }} />
      <div className="particle absolute w-2.5 h-2.5 bg-primary/55 rounded-full shadow-sm shadow-primary/50" style={{ left: '82%', top: '62%' }} />
      <div className="particle absolute w-2 h-2 bg-primary/70 rounded-full shadow-sm shadow-primary/50" style={{ left: '28%', top: '72%' }} />
      <div className="particle absolute w-2.5 h-2.5 bg-primary/50 rounded-full shadow-sm shadow-primary/50" style={{ left: '68%', top: '78%' }} />
      <div className="particle absolute w-3 h-3 bg-primary/60 rounded-full shadow-sm shadow-primary/50" style={{ left: '42%', top: '12%' }} />
      <div className="particle absolute w-2 h-2 bg-primary/65 rounded-full shadow-sm shadow-primary/50" style={{ left: '58%', top: '82%' }} />

      {/* Gold accent particles */}
      <div className="gold-particle absolute w-2 h-2 bg-amber-400/80 rounded-full shadow-sm shadow-amber-400/50" style={{ left: '22%', top: '38%' }} />
      <div className="gold-particle absolute w-1.5 h-1.5 bg-amber-400/70 rounded-full shadow-sm shadow-amber-400/50" style={{ left: '72%', top: '35%' }} />
      <div className="gold-particle absolute w-2 h-2 bg-amber-400/75 rounded-full shadow-sm shadow-amber-400/50" style={{ left: '32%', top: '68%' }} />
      <div className="gold-particle absolute w-1.5 h-1.5 bg-amber-400/80 rounded-full shadow-sm shadow-amber-400/50" style={{ left: '88%', top: '48%' }} />
      <div className="gold-particle absolute w-2 h-2 bg-amber-400/65 rounded-full shadow-sm shadow-amber-400/50" style={{ left: '8%', top: '42%' }} />

      {/* Main soccer ball container */}
      <div className="relative flex items-center justify-center">
        {/* Ball glow */}
        <div className="ball-glow absolute w-52 h-52 md:w-72 md:h-72 bg-primary/25 rounded-full blur-3xl" />
        
        {/* Orbital rings */}
        <div className="orbit-ring-1 absolute w-60 h-60 md:w-80 md:h-80 border-2 border-dashed border-primary/35 rounded-full">
          <div className="orbit-dot absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-lg shadow-primary/60" />
        </div>
        
        <div className="orbit-ring-2 absolute w-72 h-72 md:w-96 md:h-96 border border-amber-500/25 rounded-full">
          <div className="orbit-dot absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 bg-amber-400 rounded-full shadow-lg shadow-amber-400/60" />
        </div>
        
        <div className="orbit-ring-3 absolute w-80 h-80 md:w-[26rem] md:h-[26rem] border border-dotted border-primary/20 rounded-full">
          <div className="orbit-dot absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary/70 rounded-full shadow-lg shadow-primary/40" />
        </div>

        {/* Inner glowing ring */}
        <div className="inner-ring absolute w-48 h-48 md:w-64 md:h-64 border-4 border-primary/30 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.3),inset_0_0_30px_rgba(34,197,94,0.1)]" />

        {/* Soccer ball */}
        <div className="soccer-ball relative w-36 h-36 md:w-44 md:h-44">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
            <defs>
              <radialGradient id="ballGradient" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="50%" stopColor="#f5f5f5" />
                <stop offset="100%" stopColor="#e0e0e0" />
              </radialGradient>
              <filter id="ballShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="2" dy="4" stdDeviation="4" floodOpacity="0.35" />
              </filter>
            </defs>
            
            {/* Main ball circle */}
            <circle cx="50" cy="50" r="48" fill="url(#ballGradient)" filter="url(#ballShadow)" stroke="#d0d0d0" strokeWidth="0.5" />
            
            {/* Pentagon patterns */}
            <g fill="#1a1a1a">
              <polygon points="50,22 63,33 58,48 42,48 37,33" />
              <polygon points="50,2 60,15 50,22 40,15" />
              <polygon points="78,33 85,50 75,60 63,48 68,35" />
              <polygon points="75,75 63,85 50,78 58,65 70,65" />
              <polygon points="25,75 30,65 42,65 50,78 37,85" />
              <polygon points="22,33 32,35 37,48 25,60 15,50" />
            </g>
            
            {/* Highlight */}
            <ellipse cx="35" cy="32" rx="14" ry="9" fill="rgba(255,255,255,0.7)" transform="rotate(-25 35 32)" />
            <ellipse cx="38" cy="35" rx="6" ry="4" fill="rgba(255,255,255,0.9)" transform="rotate(-25 38 35)" />
          </svg>
        </div>

        {/* Shadow under ball */}
        <div className="ball-shadow absolute -bottom-12 w-28 h-5 bg-black/25 rounded-full blur-lg" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60">
        <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-medium">Scroll</span>
        <div className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  )
}
