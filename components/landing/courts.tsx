'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { COURTS, formatCurrency } from '@/lib/types';
import Image from 'next/image';

// High-quality futsal court images from local assets
const courtImages = ['/assets/download.png', '/assets/download.png', '/assets/download.png'];

export function Courts() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-black text-sm uppercase tracking-wider border-2 border-primary/20 px-4 py-2 rounded-full">
            ⚽ PILIHAN LAPANGAN
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 text-foreground text-balance">
            TIGA LAPANGAN
            <span className="text-primary block">PREMIUM</span>
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed text-lg font-medium">
            Pilih lapangan sesuai kebutuhan tim Anda, dari futsal standar hingga mini soccer dengan
            ukuran lebih luas dan permukaan berkualitas profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {COURTS.map((court, index) => (
            <Card
              key={court.id}
              className="overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-56 relative overflow-hidden">
                <Image
                  src={courtImages[index]}
                  alt={`${court.name} - ${court.type}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Type badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      court.type === 'FUTSAL' ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
                    }`}
                  >
                    {court.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{court.name}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {court.type === 'FUTSAL' ? '25x15m' : '30x20m'}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    {court.type === 'FUTSAL' ? '10 Players' : '14 Players'}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      {formatCurrency(court.pricePerHour)}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">/hour</span>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  <Link href={`/booking?court=${court.id}`}>Book Now</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
