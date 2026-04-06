'use client';

import { useState } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { formatDate } from '@/lib/types';
import { getMaxBookingDate } from '@/lib/booking-store';

interface DatePickerProps {
  date: Date | null;
  onDateChange: (date: Date) => void;
}

export function DatePicker({ date, onDateChange }: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const maxDate = getMaxBookingDate();

  const goToPreviousDay = () => {
    if (!date) return;
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    if (newDate >= today) {
      onDateChange(newDate);
    }
  };

  const goToNextDay = () => {
    if (!date) return;
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    if (newDate <= maxDate) {
      onDateChange(newDate);
    }
  };

  const canGoPrevious = date && date > today;
  const canGoNext = date && date < maxDate;

  return (
    <Card className="p-4 bg-background">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={goToPreviousDay}
          disabled={!canGoPrevious}
          className="shrink-0"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex-1 justify-start text-left font-normal">
              <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
              {date ? formatDate(date) : 'Pilih tanggal'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date || undefined}
              onSelect={newDate => {
                if (newDate) {
                  onDateChange(newDate);
                  setOpen(false);
                }
              }}
              disabled={date => date < today || date > maxDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <Button
          variant="ghost"
          size="icon"
          onClick={goToNextDay}
          disabled={!canGoNext}
          className="shrink-0"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
}
