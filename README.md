# Ikram Ullah — Portfolio

A modern, dark-themed developer portfolio built with **React (Vite)**, **Tailwind CSS v4**, and **Framer Motion** — featuring an animated canvas constellation background, a floating pill navbar, and an AI chat assistant.

## Features

- **Animated constellation background** — custom `<canvas>` (no heavy library), pointer-reactive, pauses when the tab is hidden
- **Floating pill navbar** — rounded border + blur, circular profile photo with a gradient ring, active-link highlight, square theme toggle
- **Hero** — mono status badge with a glowing dot, giant split name (`Ikram` / gradient `Ullah`), 3 CTAs, right-side blue glow
- **AI chat widget** — floating button that opens a rule-based assistant powered by a local knowledge base (no API keys needed)
- Projects grid, Experience/Education timeline, About with stats, 5 grouped Skill cards, Contact form (EmailJS)
- Light/dark mode, scroll-reveal animations, back-to-top, responsive with a mobile menu
- SEO + Open Graph meta tags, downloadable CV

## Tech stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Framer Motion** for animations
- **lucide-react** for icons
- Custom canvas for the particle background
- **@emailjs/browser** for the contact form

## Folder structure

```
.
├── public/
│   ├── favicon.svg          # site favicon
│   ├── og-image.svg         # Open Graph / social image (export as 1200x630 PNG ideally)
│   ├── profile.svg          # placeholder profile photo (replace with profile.jpg)
│   └── resume.pdf           # placeholder CV (replace with your real CV)
├── src/
│   ├── components/
│   │   ├── About.jsx             # photo, story, stats
│   │   ├── Certifications.jsx    # certificates & licences cards
│   │   ├── ChatWidget.jsx        # floating AI chatbot (bottom-right)
│   │   ├── Contact.jsx           # contact form + socials
│   │   ├── Experience.jsx        # experience & education timeline
│   │   ├── Footer.jsx            # footer with quick links
│   │   ├── Hero.jsx              # badge, split name, CTAs, glow
│   │   ├── Icon.jsx              # icon registry (lucide + brand SVGs)
│   │   ├── Navbar.jsx            # floating pill nav + theme toggle
│   │   ├── ParticleBackground.jsx# canvas constellation background
│   │   ├── Projects.jsx          # project card grid
│   │   ├── ScrollToTop.jsx       # back-to-top (bottom-left)
│   │   ├── Section.jsx           # Reveal / Section / SectionHeading helpers
│   │   └── Skills.jsx            # 5 grouped skill cards
│   ├── data/
│   │   └── content.js       # 👈 ALL site content lives here (incl. chat knowledge base)
│   ├── hooks/
│   │   ├── useActiveSection.js  # highlights the current nav link
│   │   └── useTheme.js          # light/dark theme
│   ├── App.jsx              # page composition
│   ├── index.css            # Tailwind import, tokens, fonts, animations
│   └── main.jsx             # React entry point
├── .env.example             # EmailJS keys template
├── index.html               # fonts + SEO/Open Graph meta tags
├── vercel.json              # SPA rewrites for Vercel
└── vite.config.js           # Vite + Tailwind plugin
```

## Customize it

Almost everything is driven by **`src/data/content.js`**:

1. **Your details** → the `profile` object (name, title, badge, email, links, bio segments).
2. **Photo** → add `public/profile.jpg` and set `photo: '/profile.jpg'`.
3. **CV** → replace `public/resume.pdf`.
4. **Stats / story** → `stats` and `aboutStory`.
5. **Skills** → `skillGroups` (Frontend, Backend, Mobile, AI/Automation, Tools).
6. **Projects** → `projects` (leave `demo` or `repo` empty to hide that button).
7. **Experience/Education** → `timeline`.
8. **Certifications** → `certifications` (leave `url` empty to hide the "Verify" link).
9. **Chatbot** → `chatKnowledge` (add `keywords` + `answer` pairs); fallback text in `chatFallback`.
10. **Colors / fonts / glow** → tokens in `src/index.css` (`@theme` block).
11. **OG image** → export `public/og-image.svg` as `1200×630` `og-image.png` and update `index.html`.

## Run locally

Requires **Node.js 18+**.

```bash
# 1. install dependencies
npm install

# 2. (optional) configure the contact form
copy .env.example .env      # Windows
# cp .env.example .env      # macOS/Linux
# then fill in your EmailJS keys in .env

# 3. start the dev server
npm run dev
```

Open the printed URL (usually http://localhost:5173).

### Other scripts

```bash
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npm run lint      # run oxlint
```

## Contact form (EmailJS)

Works out of the box: with no keys set, it opens the visitor's mail app with the message pre-filled. For real emails:

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Add an **email service** and **template** using variables `{{from_name}}`, `{{reply_to}}`, `{{message}}`, `{{to_name}}`.
3. Copy `.env.example` to `.env` and fill in `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`.
4. Restart the dev server.

## AI chat widget

The widget is **key-free** by default: it matches the visitor's message against `chatKnowledge` in `content.js` and replies with a canned answer. Edit that array to teach it about you. To wire it to a real LLM later, replace `getAnswer()` in `src/components/ChatWidget.jsx` with a `fetch` to your API route.

## Deploy to Vercel

### Option A — Dashboard

1. Push the project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite. Confirm: **Build command** `npm run build`, **Output directory** `dist`.
4. Add your `VITE_EMAILJS_*` variables under **Settings → Environment Variables** (optional).
5. Click **Deploy**.

### Option B — CLI

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

`vercel.json` already rewrites all routes to `index.html`.

## Performance notes

- The canvas caps its particle count and stops rendering on hidden tabs.
- Images are lazy-loaded; animations respect `prefers-reduced-motion`.
- Tailwind v4 emits only the utilities used.
