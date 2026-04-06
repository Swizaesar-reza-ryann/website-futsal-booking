'use client'

import { Shield, Zap, Users, Award, Clock, Wifi } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: Shield,
    title: 'Lapangan Premium',
    description: 'Rumput sintetis FIFA Quality Pro dengan bantalan shock absorber untuk perlindungan maksimal.',
  },
  {
    icon: Zap,
    title: 'Pencahayaan Stadium',
    description: 'LED lighting 500 lux yang merata, standar pertandingan profesional tanpa bayangan.',
  },
  {
    icon: Users,
    title: 'Ruang Ganti Luas',
    description: 'Locker room dengan shower air panas, area istirahat, dan perlengkapan lengkap.',
  },
  {
    icon: Award,
    title: 'Standar Internasional',
    description: 'Dimensi lapangan sesuai regulasi FIFA untuk futsal dan mini soccer.',
  },
  {
    icon: Clock,
    title: 'Booking Fleksibel',
    description: 'Reservasi online 24/7, bisa booking hingga 3 bulan ke depan dengan konfirmasi instan.',
  },
  {
    icon: Wifi,
    title: 'Free WiFi & Parkir',
    description: 'Koneksi internet cepat dan area parkir luas gratis untuk semua pengunjung.',
  },
]

export function Features() {
  return (
    <section id="facilities" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Fasilitas Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground text-balance">
            Arena Berstandar Internasional
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nikmati fasilitas kelas dunia yang dirancang khusus untuk memberikan pengalaman bermain futsal terbaik.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
