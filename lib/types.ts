export interface Court {
  id: string
  name: string
  type: 'FUTSAL' | 'MINI SOCCER'
  pricePerHour: number
}

export interface TimeSlot {
  hour: number
  startTime: string
  endTime: string
  status: 'available' | 'selected' | 'booked' | 'past'
}

export interface BookingData {
  courtId: string
  date: string
  timeSlots: number[]
  customerName: string
  phone: string
  email: string
  notes?: string
}

export interface Booking {
  id: string
  courtId: string
  date: string
  hour: number
  customerName: string
  phone: string
  email: string
  notes?: string
  createdAt: string
}

export const COURTS: Court[] = [
  {
    id: 'court-a',
    name: 'Lapangan A - GoldenKick',
    type: 'FUTSAL',
    pricePerHour: 150000,
  },
  {
    id: 'court-b',
    name: 'Lapangan B - Thunder',
    type: 'FUTSAL',
    pricePerHour: 120000,
  },
  {
    id: 'court-c',
    name: 'Lapangan C - Mini Soccer',
    type: 'MINI SOCCER',
    pricePerHour: 200000,
  },
]

export const OPERATING_HOURS = {
  start: 10,
  end: 23,
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

export function formatShortDate(date: Date): string {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date)
}
