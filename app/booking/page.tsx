import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { BookingContent } from '@/components/booking/booking-content'
import { Spinner } from '@/components/ui/spinner'

export const metadata: Metadata = {
  title: 'Booking Lapangan - GoldenKick Arena',
  description: 'Book your futsal or mini soccer court at GoldenKick Arena. Easy online booking with instant confirmation.',
}

function BookingLoading() {
  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <Spinner className="w-8 h-8 text-primary" />
    </div>
  )
}

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              BOOKING LAPANGAN
            </h1>
            <p className="text-muted-foreground">
              Isi form di bawah untuk memesan lapangan pilihan Anda.
            </p>
          </div>

          <Suspense fallback={<BookingLoading />}>
            <BookingContent />
          </Suspense>
        </div>
      </div>
      <Footer />
    </main>
  )
}
