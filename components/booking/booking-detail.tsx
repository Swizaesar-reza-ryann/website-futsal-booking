'use client'

import { useState } from 'react'
import {
  MapPin,
  CalendarDays,
  Clock,
  User,
  Phone,
  Mail,
  ArrowLeft,
  CreditCard,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog'
import { Court, formatCurrency, formatShortDate } from '@/lib/types'

interface BookingDetailProps {
  court: Court
  date: Date
  selectedSlots: number[]
  customerData: {
    name: string
    phone: string
    email: string
    notes: string
  }
  totalPrice: number
  onBack: () => void
  onPaymentSuccess: () => void
}

export function BookingDetail({
  court,
  date,
  selectedSlots,
  customerData,
  totalPrice,
  onBack,
  onPaymentSuccess,
}: BookingDetailProps) {
  const [showPaymentConfirm, setShowPaymentConfirm] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)

  const handlePayment = () => {
    setShowPaymentConfirm(false)
    setShowSuccessDialog(true)
  }

  const handleSuccessClose = () => {
    setShowSuccessDialog(false)
    onPaymentSuccess()
  }

  const formattedSlots = selectedSlots
    .sort((a, b) => a - b)
    .map((h) => `${h.toString().padStart(2, '0')}:00 - ${(h + 1).toString().padStart(2, '0')}:00`)
    .join(', ')

  return (
    <>
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="pb-4 border-b">
          <CardTitle className="text-xl font-bold text-center">
            Detail Booking
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          {/* Booking Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-muted-foreground uppercase text-sm tracking-wide">
              Informasi Booking
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Lapangan</p>
                  <p className="font-semibold">{court.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <CalendarDays className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Tanggal</p>
                  <p className="font-semibold">{formatShortDate(date)}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg sm:col-span-2">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Jam</p>
                  <p className="font-semibold">{formattedSlots}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-muted-foreground uppercase text-sm tracking-wide">
              Data Pemesan
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <User className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Nama Lengkap</p>
                  <p className="font-semibold">{customerData.name}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">No. HP / WhatsApp</p>
                  <p className="font-semibold">{customerData.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg sm:col-span-2">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold">{customerData.email}</p>
                </div>
              </div>

              {customerData.notes && (
                <div className="p-3 bg-muted/50 rounded-lg sm:col-span-2">
                  <p className="text-sm text-muted-foreground mb-1">Catatan</p>
                  <p className="text-sm">{customerData.notes}</p>
                </div>
              )}
            </div>
          </div>

          {/* Price Summary */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-muted-foreground">
                Harga sewa ({selectedSlots.length} jam x {formatCurrency(court.pricePerHour)})
              </span>
              <span className="font-medium">{formatCurrency(totalPrice)}</span>
            </div>
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total Pembayaran</span>
              <span className="text-primary">{formatCurrency(totalPrice)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              variant="outline"
              onClick={onBack}
              className="flex-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Ubah Booking
            </Button>
            <Button
              onClick={() => setShowPaymentConfirm(true)}
              className="flex-1 bg-primary hover:bg-primary/90"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Bayar Sekarang
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Payment Confirmation Alert */}
      <AlertDialog open={showPaymentConfirm} onOpenChange={setShowPaymentConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center">
                <AlertTriangle className="w-7 h-7 text-amber-600" />
              </div>
            </div>
            <AlertDialogTitle className="text-center">
              Konfirmasi Pembayaran
            </AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="text-center text-muted-foreground text-sm">
                <span>
                  Anda akan melakukan pembayaran sebesar{' '}
                  <span className="font-bold text-foreground">{formatCurrency(totalPrice)}</span>.
                </span>
                <span className="block mt-3">
                  Mohon diperhatikan bahwa setelah pembayaran berhasil dilakukan, 
                  <span className="font-medium text-foreground"> pesanan tidak dapat dibatalkan atau dikembalikan</span>.
                  Pastikan semua data yang Anda masukkan sudah benar.
                </span>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:justify-center gap-3 mt-2">
            <AlertDialogCancel className="sm:w-32">Batal</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handlePayment}
              className="bg-primary hover:bg-primary/90 sm:w-32"
            >
              OK, Bayar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center animate-in zoom-in-50 duration-300">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
            </div>
            <DialogTitle className="text-center text-xl">
              Pembayaran Berhasil!
            </DialogTitle>
            <DialogDescription asChild>
              <div className="text-center text-muted-foreground text-sm space-y-2">
                <p>
                  Terima kasih! Pembayaran Anda telah berhasil dikonfirmasi.
                </p>
                <p className="text-sm">
                  Detail booking telah dikirim ke email <span className="font-medium">{customerData.email}</span>.
                  Silakan datang tepat waktu sesuai jadwal yang telah Anda pilih.
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Button 
              onClick={handleSuccessClose} 
              className="bg-primary hover:bg-primary/90 px-8"
            >
              Selesai
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
