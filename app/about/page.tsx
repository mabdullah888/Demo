import type { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { team, awards } from '@/lib/data';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Discover the story of Royal Palace Hotel — a legacy of luxury hospitality spanning over two decades, with a mission to create unforgettable guest experiences.',
};

const whyChooseUs = [
  'Award-winning 5-star luxury hotel',
  'World-class dining with Michelin-trained chefs',
  '24/7 personalized butler service',
  'Rooftop infinity pool with city views',
  'Luxury spa with holistic treatments',
  'Prime city-center location',
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        breadcrumb="About Royal Palace"
        title="A Story of Timeless Luxury"
        subtitle="For over 25 years, we have crafted extraordinary experiences for guests from around the world."
        image="https://images.pexels.com/photos/261185/pexels-photo-261185.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Story */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <p className="text-sm uppercase tracking-[0.3em] text-gold-500 font-medium mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-6">
                From a Vision to an Icon
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1998, Royal Palace Hotel began as a vision to redefine luxury
                  hospitality in the heart of the city. What started as a boutique hotel
                  has grown into an internationally acclaimed 5-star destination.
                </p>
                <p>
                  Every corner of our hotel tells a story — from the hand-selected
                  artworks to the bespoke furnishings, from the curated menus to the
                  meticulously trained staff. We believe true luxury lies in the details.
                </p>
                <p>
                  Today, Royal Palace Hotel stands as a testament to the enduring power
                  of elegance, warmth, and genuine hospitality.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-luxury">
                  <img
                    src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Hotel exterior"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-luxury mt-8">
                  <img
                    src="https://images.pexels.com/photos/261046/pexels-photo-261046.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Rooftop dining"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="p-10 rounded-3xl glass h-full">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 mb-6">
                  <Target className="h-8 w-8 text-navy-900" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create extraordinary experiences for every guest by combining timeless
                  elegance with genuine warmth. We are committed to setting the highest
                  standards in luxury hospitality while creating a positive impact on our
                  community and environment.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="p-10 rounded-3xl glass h-full">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the world's most beloved luxury hotel brand — a destination where
                  every guest feels valued, every stay is memorable, and every moment is
                  infused with a sense of wonder and belonging.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-luxury">
                <img
                  src="https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Luxury spa"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-sm uppercase tracking-[0.3em] text-gold-500 font-medium mb-4">
                Why Choose Us
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight mb-8">
                The Royal Palace Difference
              </h2>
              <ul className="space-y-4">
                {whyChooseUs.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-500 font-medium mb-4">
              Meet the Team
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              Our Leadership
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Reveal key={member.id} delay={i * 0.1}>
                <div className="group">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-luxury mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-foreground">{member.name}</h3>
                  <p className="text-sm text-gold-500 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-500 font-medium mb-4">
              Recognition
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              Awards & Accolades
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, i) => (
              <Reveal key={award.id} delay={i * 0.08}>
                <div className="flex items-center gap-4 p-6 rounded-2xl glass hover:shadow-luxury transition-all">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-400/10 shrink-0">
                    <Award className="h-7 w-7 text-gold-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{award.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {award.organization} • {award.year}
                    </p>
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
