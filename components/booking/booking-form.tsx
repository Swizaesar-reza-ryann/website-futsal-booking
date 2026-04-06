'use client';

import { User, Phone, Mail, FileText } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface CustomerData {
  name: string;
  phone: string;
  email: string;
  notes: string;
}

interface BookingFormProps {
  data: CustomerData;
  onChange: (data: CustomerData) => void;
}

export function BookingForm({ data, onChange }: BookingFormProps) {
  const handleChange = (field: keyof CustomerData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <Card className="p-6 bg-background">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Nama Lengkap
          </Label>
          <Input
            id="name"
            placeholder="Contoh: Budi Santoso"
            value={data.name}
            onChange={e => handleChange('name', e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              No. HP / WhatsApp
            </Label>
            <Input
              id="phone"
              placeholder="08xxxxxxxxxx"
              value={data.phone}
              onChange={e => handleChange('phone', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="email@domain.com"
              value={data.email}
              onChange={e => handleChange('email', e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Catatan (Opsional)
          </Label>
          <Textarea
            id="notes"
            placeholder="Butuh rompi, bola tambahan, dll."
            value={data.notes}
            onChange={e => handleChange('notes', e.target.value)}
            rows={3}
          />
        </div>
      </div>
    </Card>
  );
}
