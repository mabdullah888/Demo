'use client';

import { useState, useEffect, useCallback } from 'react';
import { supabase, type Booking, type BookingStatus } from '@/lib/supabase';
import { rooms } from '@/lib/data';
import { toast } from 'sonner';
import {
  Search,
  Trash2,
  Download,
  LayoutDashboard,
  CalendarClock,
  CheckCircle2,
  DollarSign,
  Lock,
  LogOut,
} from 'lucide-react';

const STATUSES: BookingStatus[] = [
  'Pending',
  'Confirmed',
  'Checked In',
  'Completed',
  'Cancelled',
];

const statusColors: Record<BookingStatus, string> = {
  Pending: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  Confirmed: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  'Checked In': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  Completed: 'bg-navy-100 text-navy-700 dark:bg-white/10 dark:text-white',
  Cancelled: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
};

const ADMIN_PASSWORD = 'royalpalace2024';

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(false);

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const fetchBookings = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('hotel_bookings')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) {
      toast.error('Failed to load bookings');
    } else {
      setBookings((data as Booking[]) || []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (authed) fetchBookings();
  }, [authed, fetchBookings]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setAuthError(false);
      toast.success('Welcome to the Admin Dashboard');
    } else {
      setAuthError(true);
    }
  };

  const updateStatus = async (id: string, status: BookingStatus) => {
    const { error } = await supabase
      .from('hotel_bookings')
      .update({ booking_status: status })
      .eq('id', id);
    if (error) {
      toast.error('Failed to update status');
    } else {
      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, booking_status: status } : b))
      );
      toast.success('Status updated');
    }
  };

  const deleteBooking = async (id: string) => {
    const { error } = await supabase.from('hotel_bookings').delete().eq('id', id);
    if (error) {
      toast.error('Failed to delete booking');
    } else {
      setBookings((prev) => prev.filter((b) => b.id !== id));
      toast.success('Booking deleted');
    }
  };

  const exportCSV = () => {
    const headers = [
      'ID',
      'Full Name',
      'Phone',
      'Email',
      'Check-in',
      'Check-out',
      'Guests',
      'Room Type',
      'Special Requests',
      'Status',
      'Created At',
    ];
    const rows = filtered.map((b) => [
      b.id,
      b.full_name,
      b.phone,
      b.email,
      b.check_in,
      b.check_out,
      b.guests,
      b.room_type,
      b.special_requests || '',
      b.booking_status,
      new Date(b.created_at).toLocaleString(),
    ]);
    const csv = [headers, ...rows]
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
      .join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bookings-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('CSV exported');
  };

  const filtered = bookings.filter((b) => {
    const matchesSearch =
      !search ||
      b.full_name.toLowerCase().includes(search.toLowerCase()) ||
      b.email.toLowerCase().includes(search.toLowerCase()) ||
      b.phone.includes(search) ||
      b.room_type.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || b.booking_status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: bookings.length,
    pending: bookings.filter((b) => b.booking_status === 'Pending').length,
    confirmed: bookings.filter((b) => b.booking_status === 'Confirmed').length,
    revenue: bookings
      .filter((b) => b.booking_status === 'Confirmed' || b.booking_status === 'Completed')
      .reduce((sum, b) => {
        const room = rooms.find((r) => r.name === b.room_type);
        const nights =
          b.check_in && b.check_out
            ? Math.max(
                1,
                Math.ceil(
                  (new Date(b.check_out).getTime() - new Date(b.check_in).getTime()) /
                    (1000 * 60 * 60 * 24)
                )
              )
            : 1;
        return sum + (room ? room.price * nights : 0);
      }, 0),
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 pt-20 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 mx-auto mb-4">
              <Lock className="h-8 w-8 text-navy-900" />
            </div>
            <h1 className="font-serif text-2xl text-foreground mb-2">Admin Access</h1>
            <p className="text-sm text-muted-foreground">
              Enter your password to access the dashboard.
            </p>
          </div>
          <form
            onSubmit={handleLogin}
            className="glass rounded-3xl p-8 shadow-luxury space-y-4"
          >
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setAuthError(false);
              }}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:outline-none focus:border-gold-400 text-sm"
            />
            {authError && (
              <p className="text-sm text-red-500">Incorrect password. Try again.</p>
            )}
            <button
              type="submit"
              className="w-full px-6 py-3.5 rounded-xl bg-navy-900 text-white dark:bg-gold-400 dark:text-navy-900 font-medium hover:shadow-luxury transition-all"
            >
              Login
            </button>
            <p className="text-xs text-muted-foreground text-center">
              Demo password: royalpalace2024
            </p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-3xl text-foreground">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage all hotel bookings</p>
          </div>
          <button
            onClick={() => setAuthed(false)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium hover:bg-muted transition-colors"
          >
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: LayoutDashboard, label: 'Total Bookings', value: stats.total, color: 'from-navy-700 to-navy-900' },
            { icon: CalendarClock, label: 'Pending', value: stats.pending, color: 'from-amber-400 to-amber-600' },
            { icon: CheckCircle2, label: 'Confirmed', value: stats.confirmed, color: 'from-emerald-400 to-emerald-600' },
            { icon: DollarSign, label: 'Revenue', value: `$${stats.revenue.toLocaleString()}`, color: 'from-gold-400 to-gold-600' },
          ].map((stat) => (
            <div key={stat.label} className="p-6 rounded-2xl glass">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <p className="font-serif text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, phone, or room..."
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:border-gold-400 text-sm"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:border-gold-400 text-sm"
          >
            <option value="all">All Statuses</option>
            {STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <button
            onClick={exportCSV}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-navy-900 text-white dark:bg-gold-400 dark:text-navy-900 text-sm font-medium hover:shadow-luxury transition-all whitespace-nowrap"
          >
            <Download className="h-4 w-4" /> Export CSV
          </button>
        </div>

        {/* Table */}
        <div className="rounded-2xl glass overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left p-4 font-medium">Guest</th>
                  <th className="text-left p-4 font-medium hidden md:table-cell">Contact</th>
                  <th className="text-left p-4 font-medium hidden lg:table-cell">Dates</th>
                  <th className="text-left p-4 font-medium hidden sm:table-cell">Room</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-right p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="text-center p-12 text-muted-foreground">
                      <span className="h-6 w-6 border-2 border-gold-400/30 border-t-gold-400 rounded-full animate-spin inline-block" />
                    </td>
                  </tr>
                ) : filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center p-12 text-muted-foreground">
                      No bookings found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((b) => (
                    <tr key={b.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                      <td className="p-4">
                        <p className="font-medium text-foreground">{b.full_name}</p>
                        <p className="text-xs text-muted-foreground">{b.guests} guests</p>
                      </td>
                      <td className="p-4 hidden md:table-cell">
                        <p className="text-foreground">{b.email}</p>
                        <p className="text-xs text-muted-foreground">{b.phone}</p>
                      </td>
                      <td className="p-4 hidden lg:table-cell">
                        <p className="text-foreground">{b.check_in}</p>
                        <p className="text-xs text-muted-foreground">to {b.check_out}</p>
                      </td>
                      <td className="p-4 hidden sm:table-cell text-foreground">{b.room_type}</td>
                      <td className="p-4">
                        <select
                          value={b.booking_status}
                          onChange={(e) => updateStatus(b.id, e.target.value as BookingStatus)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border-0 cursor-pointer ${statusColors[b.booking_status]}`}
                        >
                          {STATUSES.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() => deleteBooking(b.id)}
                          className="inline-flex items-center justify-center h-9 w-9 rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
