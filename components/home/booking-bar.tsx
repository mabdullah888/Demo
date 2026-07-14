'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, BedDouble, Search } from 'lucide-react';
import { rooms } from '@/lib/data';

export function BookingBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-3xl p-6 md:p-8 shadow-luxury max-w-5xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Check-in
          </label>
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/60 dark:bg-white/5 border border-border">
            <Calendar className="h-4 w-4 text-gold-500" />
            <input
              type="date"
              className="flex-1 bg-transparent text-sm focus:outline-none text-foreground"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Check-out
          </label>
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/60 dark:bg-white/5 border border-border">
            <Calendar className="h-4 w-4 text-gold-500" />
            <input
              type="date"
              className="flex-1 bg-transparent text-sm focus:outline-none text-foreground"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Guests
          </label>
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/60 dark:bg-white/5 border border-border">
            <Users className="h-4 w-4 text-gold-500" />
            <select className="flex-1 bg-transparent text-sm focus:outline-none text-foreground">
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Room Type
          </label>
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/60 dark:bg-white/5 border border-border">
            <BedDouble className="h-4 w-4 text-gold-500" />
            <select className="flex-1 bg-transparent text-sm focus:outline-none text-foreground">
              {rooms.map((r) => (
                <option key={r.id} value={r.name}>{r.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <a
        href="/booking"
        className="mt-5 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 text-white dark:bg-gold-400 dark:text-navy-900 font-medium hover:shadow-luxury transition-all"
      >
        <Search className="h-5 w-5" />
        Check Availability
      </a>
    </motion.div>
  );
}
