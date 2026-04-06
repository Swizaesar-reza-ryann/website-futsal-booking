'use client'

import { MapPin, CalendarDays, Clock, User, ChevronRight, CreditCard } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Court, formatCurrency, formatShortDate } from '@/lib/types'

interface BookingSummaryProps {
  court: Court | null
  date: Date | null
  selectedSlots: number[]
  customerName: string
  onConfirm: () => void
  isValid: boolean
  validationMessage: string
}

export function BookingSummary({
  court,
  date,
  selectedSlots,
  customerName,
  onConfirm,
  isValid,
  validationMessage,
}: BookingSummaryProps) {
  const totalPrice = court ? court.pricePerHour * selectedSlots.length : 0
  const pricePerHour = court?.pricePerHour || 0

  return (
    <Card className="sticky top-24">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-bold">RINGKASAN BOOKING</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Lapangan</p>
              <p className="font-medium">{court?.name || '—'}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CalendarDays className="w-4 h-4 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Tanggal</p>
              <p className="font-medium">
                {date ? formatShortDate(date) : '—'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Jam</p>
              <p className="font-medium">
                {selectedSlots.length > 0
                  ? selectedSlots
                      .sort((a, b) => a - b)
                      .map((h) => `${h.toString().padStart(2, '0')}:00`)
                      .join(', ')
                  : '—'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <User className="w-4 h-4 text-muted-foreground mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground">Nama</p>
              <p className="font-medium">{customerName || '—'}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              Harga sewa ({selectedSlots.length} jam)
            </span>
            <span>
              {selectedSlots.length > 0
                ? formatCurrency(pricePerHour * selectedSlots.length)
                : '—'}
            </span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span className="text-primary">
              {totalPrice > 0 ? formatCurrency(totalPrice) : '—'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CreditCard className="w-4 h-4" />
          <span>Pembayaran di tempat</span>
        </div>

        <Button
          onClick={onConfirm}
          disabled={!isValid}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          KONFIRMASI BOOKING
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>

        {!isValid && (
          <p className="text-center text-sm text-muted-foreground">
            {validationMessage}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
