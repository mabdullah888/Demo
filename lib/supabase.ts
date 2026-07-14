import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type BookingStatus =
  | 'Pending'
  | 'Confirmed'
  | 'Checked In'
  | 'Completed'
  | 'Cancelled';

export interface Booking {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  check_in: string;
  check_out: string;
  guests: number;
  room_type: string;
  special_requests: string | null;
  booking_status: BookingStatus;
  created_at: string;
}

export interface BookingInput {
  full_name: string;
  phone: string;
  email: string;
  check_in: string;
  check_out: string;
  guests: number;
  room_type: string;
  special_requests?: string | null;
}
