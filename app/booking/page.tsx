'use client';

import { useState } from 'react';
import { PageHeader } from '@/components/page-header';
import { Reveal } from '@/components/reveal';
import { rooms } from '@/lib/data';
import { supabase, type BookingInput } from '@/lib/supabase';
import { toast } from 'sonner';
import { Calendar, Users, BedDouble, User, Phone, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function BookingPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState<BookingInput>({
    full_name: '',
    phone: '',
    email: '',
    check_in: '',
    check_out: '',
    guests: 2,
    room_type: rooms[0].name,
    special_requests: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: name === 'guests' ? Number(value) : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('hotel_bookings').insert({
        full_name: form.full_name,
        phone: form.phone,
        email: form.email,
        check_in: form.check_in,
        check_out: form.check_out,
        guests: form.guests,
        room_type: form.room_type,
        special_requests: form.special_requests || null,
      });

      if (error) throw error;

      setSuccess(true);
      toast.success('Booking submitted! We will confirm your reservation shortly.');
      setForm({
        full_name: '',
        phone: '',
        email: '',
        check_in: '',
        check_out: '',
        guests: 2,
        room_type: rooms[0].name,
        special_requests: '',
      });
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full pl-11 pr-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:border-gold-400 text-sm text-foreground';

  return (
    <>
      <PageHeader
        breadcrumb="Reservations"
        title="Book Your Stay"
        subtitle="Begin your journey into luxury. Fill in the details below and we will take care of the rest."
        image="https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {success ? (
              <Reveal>
                <div className="text-center py-16">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h2 className="font-serif text-3xl text-foreground mb-3">Booking Received!</h2>
                  <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    Thank you for choosing Royal Palace Hotel. Our reservations team will
                    contact you within 24 hours to confirm your booking.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-7 py-3.5 rounded-full bg-navy-900 text-white dark:bg-gold-400 dark:text-navy-900 font-medium hover:shadow-luxury transition-all"
                  >
                    Make Another Booking
                  </button>
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          required
                          name="full_name"
                          value={form.full_name}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="+92 3430793896"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Check-in Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          required
                          type="date"
                          name="check_in"
                          value={form.check_in}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Check-out Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          required
                          type="date"
                          name="check_out"
                          value={form.check_out}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Number of Guests</label>
                      <div className="relative">
                        <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <select
                          name="guests"
                          value={form.guests}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value={1}>1 Guest</option>
                          <option value={2}>2 Guests</option>
                          <option value={3}>3 Guests</option>
                          <option value={4}>4 Guests</option>
                          <option value={5}>5+ Guests</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Room Type</label>
                      <div className="relative">
                        <BedDouble className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <select
                          name="room_type"
                          value={form.room_type}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          {rooms.map((r) => (
                            <option key={r.id} value={r.name}>
                              {r.name} — ${r.price}/night
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Special Requests</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3.5 top-4 h-4 w-4 text-muted-foreground" />
                      <textarea
                        name="special_requests"
                        value={form.special_requests ?? ''}
                        onChange={handleChange}
                        rows={4}
                        className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:border-gold-400 text-sm resize-none"
                        placeholder="Any special requirements or preferences..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-navy-900 text-white dark:bg-gold-400 dark:text-navy-900 font-medium hover:shadow-luxury transition-all disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Confirm Booking'
                    )}
                  </button>
                </form>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
