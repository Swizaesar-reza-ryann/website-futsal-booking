'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { CourtCard } from './court-card'
import { BookingForm } from './booking-form'
import { DatePicker } from './date-picker'
import { TimeSlotGrid, generateTimeSlots } from './time-slot-grid'
import { BookingSummary } from './booking-summary'
import { SectionHeader } from './section-header'
import { BookingDetail } from './booking-detail'
import { COURTS, Court, TimeSlot, OPERATING_HOURS } from '@/lib/types'
import { getBookedSlots, saveBooking } from '@/lib/booking-store'

type BookingStep = 'form' | 'detail'

export function BookingContent() {
  const searchParams = useSearchParams()
  const courtIdFromUrl = searchParams.get('court')

  const [step, setStep] = useState<BookingStep>('form')
  const [selectedCourt, setSelectedCourt] = useState<Court | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  const [selectedSlots, setSelectedSlots] = useState<number[]>([])
  const [customerData, setCustomerData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: '',
  })
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])

  useEffect(() => {
    if (courtIdFromUrl) {
      const court = COURTS.find((c) => c.id === courtIdFromUrl)
      if (court) {
        setSelectedCourt(court)
      }
    }
  }, [courtIdFromUrl])

  useEffect(() => {
    if (selectedCourt && selectedDate) {
      const dateStr = selectedDate.toISOString().split('T')[0]
      const bookedHours = getBookedSlots(selectedCourt.id, dateStr)
      const slots = generateTimeSlots(selectedDate, bookedHours)
      setTimeSlots(slots)
      setSelectedSlots([])
    }
  }, [selectedCourt, selectedDate])

  const handleCourtSelect = useCallback((court: Court) => {
    setSelectedCourt(court)
    setSelectedSlots([])
  }, [])

  const handleDateChange = useCallback((date: Date) => {
    setSelectedDate(date)
    setSelectedSlots([])
  }, [])

  const handleSlotToggle = useCallback((hour: number) => {
    setSelectedSlots((prev) =>
      prev.includes(hour)
        ? prev.filter((h) => h !== hour)
        : [...prev, hour].sort((a, b) => a - b)
    )
  }, [])

  const getValidationMessage = (): string => {
    if (!selectedCourt) return 'Pilih lapangan untuk melanjutkan'
    if (!selectedDate) return 'Pilih tanggal untuk melanjutkan'
    if (selectedSlots.length === 0) return 'Pilih jam untuk melanjutkan'
    if (!customerData.name.trim()) return 'Masukkan nama lengkap'
    if (!customerData.phone.trim()) return 'Masukkan nomor HP'
    if (!customerData.email.trim()) return 'Masukkan email'
    return ''
  }

  const isValid =
    selectedCourt !== null &&
    selectedDate !== null &&
    selectedSlots.length > 0 &&
    customerData.name.trim() !== '' &&
    customerData.phone.trim() !== '' &&
    customerData.email.trim() !== ''

  const handleConfirm = () => {
    if (!isValid) return
    setStep('detail')
    // Scroll to top when showing detail
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToForm = () => {
    setStep('form')
  }

  const handlePaymentSuccess = () => {
    if (!selectedCourt || !selectedDate) return

    const dateStr = selectedDate.toISOString().split('T')[0]

    // Save booking to store
    selectedSlots.forEach((hour) => {
      saveBooking({
        courtId: selectedCourt.id,
        date: dateStr,
        hour,
        customerName: customerData.name,
        phone: customerData.phone,
        email: customerData.email,
        notes: customerData.notes || undefined,
      })
    })

    // Reset form
    setStep('form')
    setSelectedSlots([])
    setCustomerData({ name: '', phone: '', email: '', notes: '' })

    // Refresh time slots to show newly booked slots
    const bookedHours = getBookedSlots(selectedCourt.id, dateStr)
    const slots = generateTimeSlots(selectedDate, bookedHours)
    setTimeSlots(slots)
  }

  const totalPrice = selectedCourt
    ? selectedCourt.pricePerHour * selectedSlots.length
    : 0

  // Show booking detail view
  if (step === 'detail' && selectedCourt && selectedDate) {
    return (
      <BookingDetail
        court={selectedCourt}
        date={selectedDate}
        selectedSlots={selectedSlots}
        customerData={customerData}
        totalPrice={totalPrice}
        onBack={handleBackToForm}
        onPaymentSuccess={handlePaymentSuccess}
      />
    )
  }

  // Show booking form
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <section>
          <SectionHeader step={1} title="Pilih Lapangan" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COURTS.map((court) => (
              <CourtCard
                key={court.id}
                court={court}
                isSelected={selectedCourt?.id === court.id}
                onSelect={handleCourtSelect}
              />
            ))}
          </div>
        </section>

        <section>
          <SectionHeader step={2} title="Data Pemesan" />
          <BookingForm data={customerData} onChange={setCustomerData} />
        </section>

        <section>
          <SectionHeader step={3} title="Pilih Tanggal" />
          <DatePicker date={selectedDate} onDateChange={handleDateChange} />
        </section>

        <section>
          <SectionHeader
            step={4}
            title="Pilih Jam"
            subtitle={`(${OPERATING_HOURS.start}:00 - ${OPERATING_HOURS.end}:00)`}
          />
          <TimeSlotGrid
            slots={timeSlots}
            selectedSlots={selectedSlots}
            onSlotToggle={handleSlotToggle}
            courtSelected={selectedCourt !== null}
          />
        </section>
      </div>

      <div className="lg:col-span-1">
        <BookingSummary
          court={selectedCourt}
          date={selectedDate}
          selectedSlots={selectedSlots}
          customerName={customerData.name}
          onConfirm={handleConfirm}
          isValid={isValid}
          validationMessage={getValidationMessage()}
        />
      </div>
    </div>
  )
}
