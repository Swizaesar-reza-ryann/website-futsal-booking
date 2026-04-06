'use client'

import { Clock, MapPin } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { TimeSlot, OPERATING_HOURS } from '@/lib/types'
import { cn } from '@/lib/utils'

interface TimeSlotGridProps {
  slots: TimeSlot[]
  selectedSlots: number[]
  onSlotToggle: (hour: number) => void
  courtSelected: boolean
}

export function TimeSlotGrid({
  slots,
  selectedSlots,
  onSlotToggle,
  courtSelected,
}: TimeSlotGridProps) {
  if (!courtSelected) {
    return (
      <Card className="p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
        <MapPin className="w-10 h-10 text-muted-foreground/50 mb-4" />
        <p className="text-muted-foreground">
          Pilih lapangan terlebih dahulu untuk melihat slot yang tersedia.
        </p>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
          {slots.map((slot) => {
            const isSelected = selectedSlots.includes(slot.hour)
            const isDisabled = slot.status === 'booked' || slot.status === 'past'

            return (
              <button
                key={slot.hour}
                disabled={isDisabled}
                onClick={() => onSlotToggle(slot.hour)}
                className={cn(
                  'p-3 rounded-lg border transition-all duration-200 flex flex-col items-center gap-1',
                  isDisabled
                    ? slot.status === 'booked'
                      ? 'bg-destructive/10 border-destructive/30 cursor-not-allowed opacity-60'
                      : 'bg-muted border-border cursor-not-allowed opacity-50'
                    : isSelected
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card border-border hover:border-primary/50 hover:bg-primary/5'
                )}
              >
                <Clock
                  className={cn(
                    'w-4 h-4',
                    isSelected ? 'text-primary-foreground' : 'text-muted-foreground'
                  )}
                />
                <span className="font-semibold text-sm">{slot.startTime}</span>
                <span
                  className={cn(
                    'text-xs',
                    isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  )}
                >
                  {slot.endTime}
                </span>
              </button>
            )
          })}
        </div>
      </Card>

      <div className="flex flex-wrap items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border border-border bg-card" />
          <span className="text-muted-foreground">Tersedia</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-primary" />
          <span className="text-muted-foreground">Dipilih</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-destructive/30" />
          <span className="text-muted-foreground">Sudah dipesan</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-muted opacity-50" />
          <span className="text-muted-foreground">Sudah lewat</span>
        </div>
      </div>
    </div>
  )
}

export function generateTimeSlots(
  date: Date,
  bookedHours: number[]
): TimeSlot[] {
  const slots: TimeSlot[] = []
  const now = new Date()
  const isToday = date.toDateString() === now.toDateString()

  for (let hour = OPERATING_HOURS.start; hour < OPERATING_HOURS.end; hour++) {
    let status: TimeSlot['status'] = 'available'

    if (bookedHours.includes(hour)) {
      status = 'booked'
    } else if (isToday && hour <= now.getHours()) {
      status = 'past'
    }

    slots.push({
      hour,
      startTime: `${hour.toString().padStart(2, '0')}:00`,
      endTime: `${(hour + 1).toString().padStart(2, '0')}:00`,
      status,
    })
  }

  return slots
}
