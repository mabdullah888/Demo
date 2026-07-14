'use client';

import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { rooms } from '@/lib/data';
import { Users, Maximize, ArrowRight } from 'lucide-react';

export function FeaturedRooms() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-500 font-medium mb-4">
            Accommodations
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
            Featured Rooms & Suites
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each room is a private sanctuary, thoughtfully designed with premium
            materials and modern amenities.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room, i) => (
            <Reveal key={room.id} delay={i * 0.1}>
              <Link href={`/rooms`} className="group block">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-luxury mb-4">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full glass text-xs font-medium text-foreground">
                    ${room.price}/night
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-serif text-xl text-white mb-1">{room.name}</h3>
                    <div className="flex items-center gap-3 text-xs text-white/80">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" /> {room.capacity}
                      </span>
                      <span className="flex items-center gap-1">
                        <Maximize className="h-3 w-3" /> {room.size}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {room.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-gold-500 group-hover:gap-2 transition-all">
                  View Details <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
