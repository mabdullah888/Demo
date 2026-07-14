'use client';

import { Reveal } from '@/components/reveal';
import { offers } from '@/lib/data';
import { Tag } from 'lucide-react';

export function Offers() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-500 font-medium mb-4">
            Exclusive Deals
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            Special Offers
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <Reveal key={offer.id} delay={i * 0.1}>
              <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-luxury">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
                <div className="absolute top-5 right-5 px-4 py-2 rounded-full bg-gold-400 text-navy-900 text-sm font-bold">
                  {offer.discount}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs text-white mb-3">
                    <Tag className="h-3 w-3" /> {offer.tag}
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-2">{offer.title}</h3>
                  <p className="text-sm text-white/80 mb-4">{offer.description}</p>
                  <a
                    href="/booking"
                    className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-navy-900 text-sm font-medium hover:bg-gold-400 transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
