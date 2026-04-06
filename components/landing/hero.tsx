'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { animate, stagger, createScope } from 'animejs'
import { Button } from '@/components/ui/button'
import { HeroAnimation } from './hero-animation'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    scopeRef.current = createScope({ root: containerRef }).add(() => {
      // Badge animation
      animate('.hero-badge', {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        ease: 'outQuad',
      })

      // Title animation
      animate('.hero-title', {
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 700,
        delay: 150,
        ease: 'outQuad',
      })

      // Highlight text
      animate('.hero-highlight', {
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 600,
        delay: 400,
        ease: 'outQuad',
      })

      // Description
      animate('.hero-desc', {
        opacity: [0, 1],
        translateY: [25, 0],
        duration: 600,
        delay: 500,
        ease: 'outQuad',
      })

      // Buttons
      animate('.hero-buttons', {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: 650,
        ease: 'outQuad',
      })

      // Stats container
      animate('.hero-stats', {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: 800,
        ease: 'outQuad',
      })

      // Stats numbers with scale
      animate('.stat-value', {
        scale: [0.5, 1],
        opacity: [0, 1],
        duration: 500,
        delay: stagger(100, { start: 1000 }),
        ease: 'outBack',
      })

      // Animation container
      animate('.hero-animation-container', {
        opacity: [0, 1],
        scale: [0.85, 1],
        duration: 800,
        delay: 200,
        ease: 'outQuad',
      })

      // Grid pattern
      animate('.grid-pattern', {
        opacity: [0, 0.05],
        duration: 1000,
        ease: 'linear',
      })

      // Arrow animation loop
      animate('.arrow-icon', {
        translateX: [0, 5, 0],
        duration: 1500,
        loop: true,
        ease: 'inOutSine',
      })

      // Scroll indicator
      animate('.scroll-indicator', {
        opacity: [0, 1],
        duration: 600,
        delay: 1500,
        ease: 'outQuad',
      })

      // Scroll dot bounce
      animate('.scroll-dot', {
        translateY: [0, 12, 0],
        duration: 1500,
        loop: true,
        ease: 'inOutSine',
      })

      // Pulse dot
      animate('.pulse-dot', {
        scale: [1, 1.2, 1],
        opacity: [1, 0.7, 1],
        duration: 1500,
        loop: true,
        ease: 'inOutSine',
      })
    })

    return () => {
      scopeRef.current?.revert()
    }
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-foreground via-foreground to-primary/20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(234,179,8,0.05),transparent_40%)]" />
      
      {/* Animated grid pattern */}
      <div 
        className="grid-pattern absolute inset-0 opacity-0"
        style={{
          backgroundImage: `linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      <div className="container mx-auto px-4 py-20 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-background z-10">
            <div className="hero-badge inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6 opacity-0">
              <span className="pulse-dot w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm font-medium text-primary">Premium Indoor Arena</span>
            </div>
            
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance opacity-0">
              Main Futsal di
              <span className="hero-highlight text-primary block opacity-0">
                Level Profesional
              </span>
            </h1>
            
            <p className="hero-desc text-lg text-background/70 mb-8 max-w-lg leading-relaxed opacity-0">
              Rasakan pengalaman bermain futsal premium dengan lapangan berstandar internasional, pencahayaan stadium, dan fasilitas lengkap untuk atlet sejati.
            </p>
            
            <div className="hero-buttons flex flex-col sm:flex-row gap-4 opacity-0">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 group"
              >
                <Link href="/booking">
                  Book Now
                  <span className="arrow-icon inline-block ml-2">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-background/30 text-background hover:bg-background/10 font-semibold"
              >
                <Link href="#facilities">Lihat Fasilitas</Link>
              </Button>
            </div>
            
            <div className="hero-stats grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-background/10 opacity-0">
              {[
                { value: '3', label: 'Lapangan' },
                { value: '13', label: 'Jam Operasi' },
                { value: '1000+', label: 'Happy Players' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="stat-value text-3xl font-bold text-primary opacity-0">
                    {stat.value}
                  </p>
                  <p className="text-sm text-background/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hero-animation-container relative h-[400px] lg:h-[500px] opacity-0">
            <HeroAnimation />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0">
        <span className="text-xs text-background/50 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center">
          <div className="scroll-dot w-1.5 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
