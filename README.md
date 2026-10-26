# Scooter's Car Valeting - Next.js one-page site

Next.js (App Router), React, Framer Motion, plain CSS. No other UI libraries.

## Run it
    npm install
    npm run dev        # http://localhost:3000
    npm run build && npm start

## Where to edit things
| What | File |
|---|---|
| Phone, email, Instagram, nav links, **services + prices**, principles, **testimonials** | `lib/data.js` |
| Every image path, before/after pairs, gallery slots, videos | `lib/images.js` |
| Photos / logo / videos | `public/images`, `public/logo.png`, `public/videos` |
| Colours, fonts, spacing | `app/globals.css` (variables at the top) |

Replace a photo by overwriting the file in `public/images` (same name) - no code changes needed.
Add another before/after pair by adding an object to `images.beforeAfter` in `lib/images.js`.

## Enquiry form
No backend is connected. "SEND ENQUIRY" opens the visitor's email app with the enquiry pre-filled
to scooterscleaning@outlook.com (nothing is sent until they press send). The Call / Email buttons work separately.
To receive enquiries directly, point `handleSubmit` in `components/BookingContact.jsx` at a form service
(e.g. Formspree) or a Next.js route handler.

## Notes
- Current photos are frames taken from the supplied videos; swap in full-resolution originals when you have them.
- Testimonials are clearly marked DEMO PLACEHOLDER until real reviews are added.
- Reduced-motion users skip the loader and get minimal animation.
