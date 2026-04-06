'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { COURTS, formatCurrency } from '@/lib/types'

export function Courts() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Pilihan Lapangan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground text-balance">
            Tiga Lapangan Premium
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Pilih lapangan sesuai kebutuhan tim Anda, dari futsal standar hingga mini soccer dengan ukuran lebih luas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {COURTS.map((court, index) => (
            <Card
              key={court.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2260%22%20height%3D%2260%22%3E%3Cpath%20d%3D%22M30%200v60M0%2030h60%22%20stroke%3D%22%2322c55e%22%20stroke-width%3D%221%22%20fill%3D%22none%22%20opacity%3D%220.1%22%2F%3E%3C%2Fsvg%3E')] opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors">
                    {String.fromCharCode(65 + index)}
                  </span>
                </div>
                <Badge
                  className={`absolute top-4 right-4 ${
                    court.type === 'FUTSAL'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-accent text-accent-foreground'
                  }`}
                >
                  {court.type}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {court.name}
                </h3>
                <p className="text-2xl font-bold text-primary mb-1">
                  {formatCurrency(court.pricePerHour)}
                  <span className="text-sm font-normal text-muted-foreground">/jam</span>
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {court.type === 'FUTSAL'
                    ? 'Ukuran 25x15m, kapasitas 10 pemain'
                    : 'Ukuran 30x20m, kapasitas 14 pemain'}
                </p>
                <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link href={`/booking?court=${court.id}`}>
                    Book Sekarang
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
