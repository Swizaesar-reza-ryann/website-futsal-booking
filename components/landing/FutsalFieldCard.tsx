'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FutsalFieldCardProps {
  title: string
  price: string
  image: string
  features: string[]
  description: string
  capacity: number
  courtId: string
}

export function FutsalFieldCard({
  title,
  price,
  image,
  features,
  description,
  capacity,
  courtId
}: FutsalFieldCardProps) {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <div className="overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300">
        {/* IMAGE SECTION */}
        <div className="relative h-[220px] md:h-[180px] overflow-hidden rounded-t-2xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* TOP LEFT BADGE */}
          <div className="absolute top-4 left-4 bg-white text-black px-4 py-1.5 rounded-lg font-semibold text-sm">
            FUTSAL
          </div>
          
          {/* PRICE BADGE */}
          <div className="absolute bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-xl font-bold text-lg shadow-md">
            {price}
          </div>
        </div>
        
        {/* CONTENT SECTION */}
        <div className="p-6 md:p-4 space-y-4">
          {/* TITLE ROW */}
          <div className="flex justify-between items-start">
            <h3 className="text-2xl md:text-xl font-bold tracking-wide">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Users className="w-4 h-4" />
              <span>Max {capacity}</span>
            </div>
          </div>
          
          {/* DESCRIPTION */}
          <p className="text-gray-500 text-base leading-relaxed">
            {description}
          </p>
          
          {/* FEATURES TAG LIST */}
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md text-sm font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
          
          {/* CTA BUTTON */}
          <Button
            asChild
            className="w-full h-14 bg-green-500 hover:bg-green-600 hover:scale-[1.01] text-white font-bold text-base rounded-xl mt-4 transition-all duration-200"
          >
            <Link href={`/booking?court=${courtId}`}>
              BOOK {title.toUpperCase()}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
