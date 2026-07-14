'use client';

import { Reveal } from '@/components/reveal';
import { hotelInfo } from '@/lib/data';
import { MapPin } from 'lucide-react';

export function MapSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-500 font-medium mb-4">
            Find Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
            Our Location
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5 text-gold-500" />
            <span>{hotelInfo.address}</span>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-3xl overflow-hidden shadow-luxury h-[450px]">
            <iframe
              src={hotelInfo.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Location"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
