import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { services } from '@/lib/data';
import * as Icons from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Discover our luxury hotel services — fine dining, spa, infinity pool, fitness center, airport transfers, conference halls, rooftop dining, and 24/7 room service.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        breadcrumb="What We Offer"
        title="Luxury Services"
        subtitle="Every service is crafted to elevate your stay into an unforgettable experience."
        image="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = (Icons as any)[service.icon] || Icons.Sparkles;
              return (
                <Reveal key={service.id} delay={i * 0.08}>
                  <div className="group rounded-3xl overflow-hidden shadow-luxury bg-card hover:-translate-y-2 transition-all duration-500">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                      <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl glass">
                        <Icon className="h-6 w-6 text-gold-500" />
                      </div>
                    </div>
                    <div className="p-7">
                      <h3 className="font-serif text-xl text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Ready to Experience Royal Palace?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Book your stay today and discover a world of luxury, comfort, and impeccable service.
            </p>
            <a
              href="/booking"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gold-400 text-navy-900 font-medium hover:bg-gold-300 transition-colors"
            >
              Book Your Stay
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
