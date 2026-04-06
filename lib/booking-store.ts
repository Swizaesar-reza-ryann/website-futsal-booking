import { Booking } from './types'

const STORAGE_KEY = 'goldenkick_bookings'

export function getBookings(): Booking[] {
  if (typeof window === 'undefined') return []
  const stored = localStorage.getItem(STORAGE_KEY)
  if (!stored) return []
  try {
    return JSON.parse(stored)
  } catch {
    return []
  }
}

export function saveBooking(booking: Omit<Booking, 'id' | 'createdAt'>): Booking {
  const bookings = getBookings()
  const newBooking: Booking = {
    ...booking,
    id: `booking-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
  }
  bookings.push(newBooking)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings))
  return newBooking
}

export function isSlotBooked(courtId: string, date: string, hour: number): boolean {
  const bookings = getBookings()
  return bookings.some(
    (b) => b.courtId === courtId && b.date === date && b.hour === hour
  )
}

export function getBookedSlots(courtId: string, date: string): number[] {
  const bookings = getBookings()
  return bookings
    .filter((b) => b.courtId === courtId && b.date === date)
    .map((b) => b.hour)
}

export function isSlotPast(date: Date, hour: number): boolean {
  const now = new Date()
  const slotDate = new Date(date)
  slotDate.setHours(hour, 0, 0, 0)
  return slotDate <= now
}

export function getMaxBookingDate(): Date {
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 3)
  return maxDate
}

export function isDateValid(date: Date): boolean {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const maxDate = getMaxBookingDate()
  return date >= today && date <= maxDate
}
