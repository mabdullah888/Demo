import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { rooms } from '@/lib/data';
import { Users, Maximize, BedDouble, Check, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rooms & Suites',
  description:
    'Explore our collection of luxury rooms and suites — Deluxe Room, Executive Room, Family Suite, and Presidential Suite — each designed for ultimate comfort.',
};

export default function RoomsPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Accommodations"
        title="Rooms & Suites"
        subtitle="Discover a collection of spaces designed for comfort, elegance, and tranquility."
        image="https://images.pexels.com/photos/2029698/pexels-photo-2029698.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {rooms.map((room, i) => (
              <Reveal key={room.id}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-luxury">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute -bottom-5 right-5 glass rounded-2xl px-6 py-4 shadow-luxury">
                      <p className="font-serif text-2xl font-bold text-foreground">
                        ${room.price}
                      </p>
                      <p className="text-xs text-muted-foreground">per night</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-gold-500 font-medium mb-3">
                      Category {String(i + 1).padStart(2, '0')}
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-4">
                      {room.name}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {room.longDescription}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="p-4 rounded-xl glass text-center">
                        <Users className="h-5 w-5 text-gold-500 mx-auto mb-2" />
                        <p className="text-sm font-medium text-foreground">{room.capacity}</p>
                      </div>
                      <div className="p-4 rounded-xl glass text-center">
                        <Maximize className="h-5 w-5 text-gold-500 mx-auto mb-2" />
                        <p className="text-sm font-medium text-foreground">{room.size}</p>
                      </div>
                      <div className="p-4 rounded-xl glass text-center">
                        <BedDouble className="h-5 w-5 text-gold-500 mx-auto mb-2" />
                        <p className="text-sm font-medium text-foreground">{room.bed}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-sm font-medium text-foreground mb-3">Amenities</h4>
                      <div className="flex flex-wrap gap-2">
                        {room.amenities.map((a) => (
                          <span
                            key={a}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted text-xs text-muted-foreground"
                          >
                            <Check className="h-3 w-3 text-emerald-500" /> {a}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href="/booking"
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy-900 text-white dark:bg-gold-400 dark:text-navy-900 font-medium hover:shadow-luxury transition-all"
                    >
                      Book This Room <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
