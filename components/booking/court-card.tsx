'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Court, formatCurrency } from '@/lib/types';
import { cn } from '@/lib/utils';

interface CourtCardProps {
  court: Court;
  isSelected: boolean;
  onSelect: (court: Court) => void;
}

export function CourtCard({ court, isSelected, onSelect }: CourtCardProps) {
  return (
    <Card
      className={cn(
        'p-4 cursor-pointer transition-all duration-200 hover:shadow-md bg-background',
        isSelected ? 'ring-2 ring-primary bg-primary/5 border-primary' : 'hover:border-primary/50'
      )}
      onClick={() => onSelect(court)}
    >
      <Badge
        variant={court.type === 'FUTSAL' ? 'default' : 'secondary'}
        className={cn(
          'mb-3',
          court.type === 'FUTSAL'
            ? 'bg-primary/10 text-primary hover:bg-primary/20'
            : 'bg-accent/20 text-accent-foreground hover:bg-accent/30'
        )}
      >
        {court.type}
      </Badge>
      <h3 className="font-semibold text-foreground mb-1">{court.name}</h3>
      <p className="text-primary font-bold">
        {formatCurrency(court.pricePerHour)}
        <span className="text-muted-foreground font-normal text-sm">/jam</span>
      </p>
    </Card>
  );
}
