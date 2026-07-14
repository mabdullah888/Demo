'use client';

import Link from 'next/link';
import { Crown, Instagram, Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { hotelInfo } from '@/lib/data';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100 pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600">
                <Crown className="h-5 w-5 text-navy-900" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold tracking-wide text-white">
                  Royal Palace
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-medium">
                  Hotel
                </span>
              </div>
            </Link>
            <p className="text-sm text-navy-300 leading-relaxed mb-5">
              A 5-star international hotel offering unparalleled luxury, world-class
              dining, and impeccable service in the heart of the city.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-10 w-10 rounded-full bg-navy-800 hover:bg-gold-400 hover:text-navy-900 flex items-center justify-center transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/rooms', label: 'Rooms & Suites' },
                { href: '/services', label: 'Services' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/booking', label: 'Book a Stay' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold-400 mt-0.5 shrink-0" />
                <span className="text-navy-300">{hotelInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold-400 shrink-0" />
                <a href={`tel:${hotelInfo.phone}`} className="text-navy-300 hover:text-gold-400 transition-colors">
                  {hotelInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold-400 shrink-0" />
                <a href={`mailto:${hotelInfo.email}`} className="text-navy-300 hover:text-gold-400 transition-colors break-all">
                  {hotelInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-5">Newsletter</h4>
            <p className="text-sm text-navy-300 mb-4">
              Subscribe for exclusive offers and updates.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 rounded-full bg-navy-800 border border-navy-700 text-sm text-white placeholder:text-navy-400 focus:outline-none focus:border-gold-400"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-full bg-gold-400 text-navy-900 text-sm font-medium hover:bg-gold-300 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-navy-400">
            © {new Date().getFullYear()} Royal Palace Hotel. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-navy-400">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            <Link href="/admin" className="hover:text-gold-400 transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
