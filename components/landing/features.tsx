'use client';

import { Shield, Zap, Users, Award, Clock, Wifi } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: Shield,
    title: 'LAPANGAN FUTSAL PRO',
    description:
      'Rumput sintetis bersertifikat FIFA dengan pantulan bola optimal dan traksi pemain untuk keunggulan indoor.',
  },
  {
    icon: Zap,
    title: 'SISTEM PENCAHAYAAN ARENA',
    description:
      'Pencahayaan profesional 500 lux tanpa silau, sempurna untuk gameplay futsal teknis.',
  },
  {
    icon: Users,
    title: 'KOMPLEKS RUANG GANTI TIM',
    description:
      'Fasilitas level kejuaraan dengan area taktis, shower air panas, dan zona pemulihan performa.',
  },
  {
    icon: Award,
    title: 'REGULASI FUTSAL',
    description:
      'Dimensi resmi 40x20m dengan area gawang dan titik penalti yang tepat untuk pertandingan kompetitif.',
  },
  {
    icon: Clock,
    title: 'PEMESANAN HARI PERTANDINGAN',
    description:
      'Jadwalkan pertandingan futsal Anda 24/7 dengan konfirmasi lapangan instan dan slot waktu fleksibel.',
  },
  {
    icon: Wifi,
    title: 'FASILITAS PENONTON',
    description:
      'Area menonton, kemampuan streaming langsung, dan amenitas premium untuk pengalaman pertandingan lengkap.',
  },
];

export function Features() {
  return (
    <section id="facilities" className="py-20 bg-background relative overflow-hidden">
      {/* Futsal field background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(34,197,94,0.2) 40px, rgba(34,197,94,0.2) 41px),
                           repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(34,197,94,0.15) 40px, rgba(34,197,94,0.15) 41px)`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-black text-sm uppercase tracking-widest border-2 border-primary/20 px-4 py-2 rounded-full">
            ⚽ FASILITAS ARENA FUTSAL
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 text-foreground text-balance">
            DIRANCANG UNTUK
            <span className="text-primary block">JUARA INDOOR</span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed text-lg font-medium">
            Setiap elemen dirancang untuk keunggulan futsal. Dari dimensi lapangan regulasi hingga
            pencahayaan profesional, kami telah menciptakan lingkungan sepak bola indoor yang
            sempurna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 border-2 border-border/50 hover:border-primary/50 bg-card/70 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-primary/30">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-black text-xl mb-3 text-foreground uppercase tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed font-medium">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
