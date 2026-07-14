'use client';

import { Reveal } from '@/components/reveal';
import { Crown } from 'lucide-react';

export function Welcome() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-luxury">
                <img
                  src="https://images.pexels.com/photos/261185/pexels-photo-261185.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Hotel lobby"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 shadow-luxury hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-400">
                    <Crown className="h-7 w-7 text-navy-900" />
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-bold text-foreground">25+</p>
                    <p className="text-sm text-muted-foreground">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-sm uppercase tracking-[0.3em] text-gold-500 font-medium mb-4">
              About Royal Palace
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              A Legacy of Luxury & Hospitality
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              For over two decades, Royal Palace Hotel has redefined the art of
              hospitality. Nestled in the heart of the city, our hotel is a sanctuary
              of elegance where every detail is meticulously crafted to create
              unforgettable experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From our award-winning restaurants to our serene spa and breathtaking
              suites, we offer a world where comfort meets sophistication, and where
              every guest is treated as royalty.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '250+', label: 'Luxury Rooms' },
                { value: '12', label: 'Dining Venues' },
                { value: '98%', label: 'Guest Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl font-bold text-gradient-gold">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <a
              href="/about"
              className="mt-8 inline-flex items-center px-7 py-3.5 rounded-full bg-navy-900 text-white dark:bg-gold-400 dark:text-navy-900 font-medium hover:shadow-luxury transition-all"
            >
              Discover Our Story
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
