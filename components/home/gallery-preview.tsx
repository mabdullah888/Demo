'use client';

import { Reveal } from '@/components/reveal';
import { galleryImages } from '@/lib/data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function GalleryPreview() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-500 font-medium mb-4">
            Visual Journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4">
            A Glimpse of Royal Palace
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the beauty of our hotel through a curated collection of moments.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {galleryImages.slice(0, 6).map((img, i) => (
            <Reveal
              key={img.id}
              delay={i * 0.08}
              className={img.span || ''}
            >
              <div className="relative h-full w-full rounded-2xl overflow-hidden group cursor-pointer">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/30 transition-colors" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold-400 text-gold-500 font-medium hover:bg-gold-400 hover:text-navy-900 transition-all"
          >
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
