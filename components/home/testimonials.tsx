'use client';

import { Reveal } from '@/components/reveal';
import { testimonials } from '@/lib/data';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-navy-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 font-serif text-[20rem] text-gold-400">"</div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-400 font-medium mb-4">
            Guest Experiences
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight">
            What Our Guests Say
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.1}>
              <div className="h-full p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <Quote className="h-8 w-8 text-gold-400 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-sm text-white/80 leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-medium text-sm text-white">{t.name}</p>
                    <p className="text-xs text-white/60">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
