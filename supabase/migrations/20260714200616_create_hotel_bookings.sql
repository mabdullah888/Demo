/*
# Create hotel_bookings table

1. New Tables
- `hotel_bookings`
  - `id` (uuid, primary key, auto-generated)
  - `full_name` (text, not null) — guest full name
  - `phone` (text, not null) — guest phone number
  - `email` (text, not null) — guest email
  - `check_in` (date, not null) — check-in date
  - `check_out` (date, not null) — check-out date
  - `guests` (integer, not null) — number of guests
  - `room_type` (text, not null) — selected room category
  - `special_requests` (text, nullable) — optional guest notes
  - `booking_status` (text, not null, default 'Pending') — one of:
      Pending, Confirmed, Checked In, Completed, Cancelled
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Indexes
- `idx_hotel_bookings_status` on `booking_status` for dashboard filtering
- `idx_hotel_bookings_created_at` on `created_at DESC` for recent-first listing

3. Security
- Enable RLS on `hotel_bookings`.
- This is a single-tenant public booking app with no sign-in screen, so
  anon + authenticated are granted full CRUD. The admin dashboard uses a
  client-side gate; row-level access is intentionally public.

4. Notes
- `booking_status` is free-text with a default of 'Pending'. The
  application constrains updates to the five documented statuses.
- Revenue is computed client-side in the dashboard from room price data;
  no revenue column is stored.
*/

-- CREATE TABLE IF NOT EXISTS hotel_bookings (
--   id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
--   full_name text NOT NULL,
--   phone text NOT NULL,
--   email text NOT NULL,
--   check_in date NOT NULL,
--   check_out date NOT NULL,
--   guests integer NOT NULL,
--   room_type text NOT NULL,
--   special_requests text,
--   booking_status text NOT NULL DEFAULT 'Pending',
--   created_at timestamptz DEFAULT now()
-- );

-- CREATE INDEX IF NOT EXISTS idx_hotel_bookings_status
--   ON hotel_bookings (booking_status);
-- CREATE INDEX IF NOT EXISTS idx_hotel_bookings_created_at
--   ON hotel_bookings (created_at DESC);

-- ALTER TABLE hotel_bookings ENABLE ROW LEVEL SECURITY;

-- DROP POLICY IF EXISTS "anon_select_bookings" ON hotel_bookings;
-- CREATE POLICY "anon_select_bookings" ON hotel_bookings FOR SELECT
--   TO anon, authenticated USING (true);

-- DROP POLICY IF EXISTS "anon_insert_bookings" ON hotel_bookings;
-- CREATE POLICY "anon_insert_bookings" ON hotel_bookings FOR INSERT
--   TO anon, authenticated WITH CHECK (true);

-- DROP POLICY IF EXISTS "anon_update_bookings" ON hotel_bookings;
-- CREATE POLICY "anon_update_bookings" ON hotel_bookings FOR UPDATE
--   TO anon, authenticated USING (true) WITH CHECK (true);

-- DROP POLICY IF EXISTS "anon_delete_bookings" ON hotel_bookings;
-- CREATE POLICY "anon_delete_bookings" ON hotel_bookings FOR DELETE
--   TO anon, authenticated USING (true);
