# Female Dentist Website
Next.js + Supabase clinic website using the requested plum, purple and rose palette.

## Setup
1. Create a Supabase project and run `supabase/schema.sql` in its SQL Editor.
2. Create an email/password user in Supabase Authentication for the admin.
3. Copy `.env.example` to `.env.local`, and fill in the Supabase project URL and anon key.
4. Run `npm install`, then `npm run dev`.
5. Import this repository into Vercel and add the same environment variables.

Admin dashboard: `/admin`. Includes content editing, service management, direct image upload, and appointment status management. Security note: replace the starter authenticated-user write policies with an explicit admin allowlist and add spam/rate limiting before collecting real patient information. Never expose a service-role key in client code.
