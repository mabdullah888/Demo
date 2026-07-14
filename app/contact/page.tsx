'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { hotelInfo } from '@/lib/data';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    (e.target as HTMLFormElement).reset();
    toast.success('Message sent! We will get back to you shortly.');
  };

  return (
    <>
      <PageHeader
        breadcrumb="Get in Touch"
        title="Contact Us"
        subtitle="We are here to assist you with any inquiries or special requests."
        image="https://images.pexels.com/photos/261185/pexels-photo-261185.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: MapPin, title: 'Address', value: hotelInfo.address },
              { icon: Phone, title: 'Phone', value: hotelInfo.phone },
              { icon: Mail, title: 'Email', value: hotelInfo.email },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl glass text-center h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-navy-900" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.value}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal>
              <div className="rounded-3xl overflow-hidden shadow-luxury h-full min-h-[400px]">
                <iframe
                  src={hotelInfo.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hotel Location"
                />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:border-gold-400 text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:border-gold-400 text-sm"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:border-gold-400 text-sm"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:border-gold-400 text-sm resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 text-white dark:bg-gold-400 dark:text-navy-900 font-medium hover:shadow-luxury transition-all disabled:opacity-60"
                >
                  {loading ? (
                    <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <section className="py-12 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Clock className="h-6 w-6 text-gold-400" />
              <p className="text-sm text-white/80">Open 24/7, 365 days a year</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MessageCircle className="h-6 w-6 text-gold-400" />
              <a
                href={`https://wa.me/${hotelInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/80 hover:text-gold-400 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="h-6 w-6 text-gold-400" />
              <a href={`tel:${hotelInfo.phone}`} className="text-sm text-white/80 hover:text-gold-400 transition-colors">
                {hotelInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
