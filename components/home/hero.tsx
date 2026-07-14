'use client';

import { motion } from 'framer-motion';
import { Reveal } from '@/components/reveal';
import { BookingBar } from '@/components/home/booking-bar';
import { Star } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Royal Palace Hotel"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/50 to-navy-900/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-1 mb-6"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm uppercase tracking-[0.4em] text-gold-300 mb-5 font-medium"
        >
          Welcome to Royal Palace
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] max-w-4xl mx-auto mb-6"
        >
          Where Luxury Meets
          <span className="block text-gradient-gold mt-2">Timeless Elegance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10"
        >
          Indulge in a world of refined comfort, exquisite dining, and impeccable
          service at our award-winning 5-star international hotel.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="/booking"
            className="px-8 py-4 rounded-full bg-gold-400 text-navy-900 font-medium hover:bg-gold-300 transition-all hover:shadow-gold"
          >
            Book Your Stay
          </a>
          <a
            href="/rooms"
            className="px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Explore Rooms
          </a>
        </motion.div>

        <BookingBar />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-1 h-1 rounded-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
