'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/rooms', label: 'Rooms' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass-nav py-3 shadow-luxury'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-gold group-hover:scale-110 transition-transform">
            <Crown className="h-5 w-5 text-navy-900" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-lg font-bold tracking-wide text-foreground">
              Royal Palace
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-500 font-medium">
              Hotel
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'relative px-4 py-2 text-sm font-medium transition-colors rounded-full',
                pathname === link.href
                  ? 'text-gold-500'
                  : 'text-foreground/70 hover:text-foreground'
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full bg-gold-400" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/booking"
            className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-navy-900 text-white text-sm font-medium hover:bg-navy-800 dark:bg-gold-400 dark:text-navy-900 dark:hover:bg-gold-300 transition-all hover:shadow-luxury"
          >
            Book Now
          </Link>
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden glass-nav mt-3 mx-4 rounded-2xl p-4 animate-fade-in">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-gold-500 bg-gold-50 dark:bg-gold-900/20'
                    : 'text-foreground/80 hover:bg-muted'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="mt-2 px-4 py-3 rounded-xl bg-navy-900 text-white text-sm font-medium text-center dark:bg-gold-400 dark:text-navy-900"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
