'use client';

import { FutsalFieldCard } from './FutsalFieldCard';
import { COURTS, formatCurrency } from '@/lib/types';

const courtDescriptions = {
  'LAPANGAN A':
    'Lapangan futsal premium dengan rumput sintetis grade FIFA, sistem pencahayaan LED stadium, dan tribun penonton kapasitas 50 orang.',
  'LAPANGAN B':
    'Lapangan futsal standar dengan permukaan sintetis berkualitas tinggi, pencahayaan profesional, dan fasilitas pendukung lengkap.',
  'LAPANGAN C':
    'Lapangan mini soccer dengan ukuran lebih luas, rumput sintetis premium, dan area penonton yang nyaman.',
};

const courtFeatures = {
  'LAPANGAN A': [
    'Rumput Sintetis Grade FIFA',
    'Lampu LED Stadium',
    'Tribun Penonton',
    'AC Split',
    'Shower Room',
    'Loker',
  ],
  'LAPANGAN B': [
    'Rumput Sintetis Premium',
    'Lampu Professional',
    'Area Penonton',
    'AC Split',
    'Shower Room',
    'Loker',
  ],
  'LAPANGAN C': [
    'Rumput Sintetis Grade FIFA',
    'Lampu LED Stadium',
    'Area Penonton',
    'AC Split',
    'Shower Room',
    'Loker',
  ],
};

export function FutsalFieldShowcase() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-black text-sm uppercase tracking-wider border-2 border-primary/20 px-4 py-2 rounded-full">
            ⚽ FUTSAL FIELD SHOWCASE
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 text-foreground text-balance">
            LAPANGAN
            <span className="text-primary block">PREMIUM</span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed text-lg font-medium">
            Rasakan pengalaman bermain futsal di lapangan premium kami dengan fasilitas lengkap dan
            kualitas terbaik.
          </p>
        </div>

        <div className="space-y-12">
          {COURTS.map(court => (
            <FutsalFieldCard
              key={court.id}
              title={`${court.name} - GOLDENKICK`}
              price={formatCurrency(court.pricePerHour)}
              image="/assets/download.png"
              features={courtFeatures[court.name as keyof typeof courtFeatures] || []}
              description={courtDescriptions[court.name as keyof typeof courtDescriptions] || ''}
              capacity={court.type === 'FUTSAL' ? 10 : 14}
              courtId={court.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
