'use client';

import { Reveal } from '@/components/reveal';
import { facilities } from '@/lib/data';
import * as Icons from 'lucide-react';

export function Facilities() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-500 font-medium mb-4">
            Hotel Facilities
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            World-Class Amenities
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, i) => {
            const Icon = (Icons as any)[facility.icon] || Icons.Sparkles;
            return (
              <Reveal key={facility.id} delay={i * 0.08}>
                <div className="group p-8 rounded-2xl glass hover:shadow-luxury transition-all hover:-translate-y-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-navy-900" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-2">{facility.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
