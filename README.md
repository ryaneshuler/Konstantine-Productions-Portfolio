# Konstantine Productions — Official Website

Portfolio and company website for [Konstantine Productions](https://www.konstantineproductions.com), a Brooklyn-based film and video production company focused on sustainable filmmaking.

## Tech Stack

- **React** (Vite)
- **React Router** — client-side routing
- **EmailJS** — contact form email delivery
- **CSS** — custom animations (parallax, wipe reveals, fade-ins), no CSS framework

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/sustainability` | Sustainable Practices |
| `/gallery` | Photo Gallery |
| `/contact` | Contact |
| `/commercials` | Commercials |
| `/music-videos` | Music Videos |
| `/documentaries` | Branded Documentaries |
| `/narratives` | Narratives |
| `/narratives/:film` | Individual narrative film pages |

## Getting Started

```bash
npm install
npm run dev
```

## Contact Form Setup

The contact form uses [EmailJS](https://www.emailjs.com). Credentials are stored directly in `src/components/ContactPage.jsx`. To re-enable or update:

1. Log into emailjs.com
2. Confirm your Service ID, Template ID, and Public Key
3. Update the constants at the top of `ContactPage.jsx`

## Notes

- All video content is hosted on Vimeo and embedded via iframe — no video files are stored in this repository.
- Media assets (images) live in `public/Media/`.
- Custom font (Komu B) is loaded from `public/fonts/`.
