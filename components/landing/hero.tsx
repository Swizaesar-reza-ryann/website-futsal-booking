'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Futsal field background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10" />

      {/* Field line markings */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {/* Center line */}
        <div className="absolute top-0 left-1/2 w-1 h-full bg-primary/40" />

        {/* Center circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-primary/50 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full" />

        {/* Penalty areas */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-16 border-4 border-primary/30 rounded-t-lg" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-48 h-16 border-4 border-primary/30 rounded-b-lg" />

        {/* Goal areas */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-16 h-24 border-4 border-primary/40 border-l-0 rounded-r-lg" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-16 h-24 border-4 border-primary/40 border-r-0 rounded-l-lg" />

        {/* Corner arcs */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary/30 rounded-tl-full" />
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-primary/30 rounded-tr-full" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-primary/30 rounded-bl-full" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary/30 rounded-br-full" />

        {/* Side lines */}
        <div className="absolute top-0 left-0 w-full h-2 bg-primary/20" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-primary/20" />
        <div className="absolute top-0 left-0 w-2 h-full bg-primary/20" />
        <div className="absolute top-0 right-0 w-2 h-full bg-primary/20" />
      </div>

      <div className="container mx-auto px-4 py-20 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-foreground z-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 border-2 border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm font-medium text-primary">
                ⚽ Lapangan Futsal Profesional
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-balance">
              KUASAI
              <span className="text-primary block">PERMAINAN INDOOR</span>
            </h1>

            <p className="text-lg text-foreground/80 mb-8 max-w-lg leading-relaxed font-medium">
              Rasakan pengalaman bermain futsal di lapangan berstandar internasional. Permukaan
              premium, pencahayaan stadion, dan arena sempurna untuk keahlian sepak bola indoor
              Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-black px-8 shadow-lg border-2 border-primary/50"
              >
                <Link href="/booking">
                  PESAN LAPANGAN
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-foreground/30 text-foreground hover:bg-foreground/10 font-black border-2 shadow-lg"
              >
                <Link href="#facilities">LIHAT FASILITAS</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-foreground/20">
              {[
                { value: '3', label: 'LAPANGAN FUTSAL' },
                { value: '40x20', label: 'UKURAN STANDAR' },
                { value: '5000+', label: 'GOL TERCETAK' },
              ].map(stat => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-primary">{stat.value}</p>
                  <p className="text-sm text-foreground/60 font-bold uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
