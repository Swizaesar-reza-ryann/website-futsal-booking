'use client'

import Link from 'next/link'
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTA() {
  return (
    <section id="contact" className="py-20 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(34,197,94,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(234,179,8,0.1),transparent_40%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Siap Bermain?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-balance">
              Booking Lapangan Sekarang
            </h2>
            <p className="text-background/70 mb-8 leading-relaxed">
              Jangan tunggu lagi! Amankan slot bermain Anda sekarang. Booking online mudah, konfirmasi instan, pembayaran di tempat.
            </p>
            
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Link href="/booking">
                Book Sekarang
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-background/5 backdrop-blur-sm rounded-xl p-6 border border-background/10">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Hubungi Kami</h3>
              <p className="text-background/70 text-sm">+62 21 123 4567</p>
              <p className="text-background/70 text-sm">hello@goldenkick.com</p>
            </div>
            
            <div className="bg-background/5 backdrop-blur-sm rounded-xl p-6 border border-background/10">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Lokasi</h3>
              <p className="text-background/70 text-sm">123 Stadium Ave</p>
              <p className="text-background/70 text-sm">Jakarta, Indonesia</p>
            </div>
            
            <div className="sm:col-span-2 bg-background/5 backdrop-blur-sm rounded-xl p-6 border border-background/10">
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Jam Operasional</h3>
              <p className="text-background/70 text-sm">Setiap Hari: 10:00 - 23:00</p>
              <p className="text-background/70 text-sm">Booking hingga 3 bulan ke depan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
