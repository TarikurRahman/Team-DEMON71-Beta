# Team DEMON71 Beta Website 🚀

## Project Overview

DEMON71 Website is a responsive portfolio and team showcase site for Team DEMON71, a student robotics initiative focused on defense-grade rover systems, automation, and advanced engineering. The site is built using Next.js with modern UI components, polished brand styling, multilingual support, and a mobile-first layout.

---

## 🔥 Features

### UI / UX
- Clean landing page with strong visual hierarchy
- Team showcase with mission, vision, and project highlights
- Multi-page navigation across `About`, `Achievements`, `Support`, `Project`, and `Team`
- Consistent brand styling with a red-gradient theme

### Animations
- Smooth hero transitions and content reveals
- Interactive Swiper carousel for project highlights
- Animated hover and card effects for polished presentation

### Technical Capabilities
- Next.js App Router architecture
- Dark mode support via CSS class toggling
- Global state context for theme and language management
- Google font integration for Bengali typography

### Responsiveness
- Fully responsive layout for mobile, tablet, and desktop
- Adaptive grid system and spacing
- Touch-friendly navigation and project slider

---

## 🛠 Tech Stack

- **Next.js** `16.2.6`
- **React** `19.2.4`
- **TypeScript** `^5`
- **Tailwind CSS** `^4`
- **ESLint** `^9`
- **Swiper** `^12.2.0`
- **Framer Motion** `^12.40.0`
- **Lucide React** `^1.17.0`
- **React Icons** `^5.6.0`

---

## 📦 Installation & Setup

```bash
git clone https://github.com/TarikurRahman/Team-DEMON71-Beta.git
cd Team-DEMON71-Beta
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## 📁 Project Structure

```text
.
├── app
│   ├── about/page.tsx
│   ├── achievements/page.tsx
│   ├── Acknowledgements/page.tsx
│   ├── contact/page.tsx
│   ├── project/page.tsx
│   ├── support/page.tsx
│   ├── team/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── Preloader.tsx
├── constants
│   └── content.ts
├── context
│   └── AppContext.tsx
├── public
│   └── images
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

### Key Files
- `page.tsx` — main homepage content and project showcase
- `layout.tsx` — root layout, metadata, and font setup
- `Navbar.tsx` — navigation and header controls
- `Footer.tsx` — site footer and credits
- `Preloader.tsx` — loading screen component
- `AppContext.tsx` — theme and language state provider
- `content.ts` — translation and text content definitions

---

## 🎨 Design System

- **Primary Colors**
  - `#a81e16` — deep red
  - `#de4030` — bright accent red
  - `#1e293b` — dark text
  - `#ffffff` / `#000000` — light and dark backgrounds

- **Typography**
  - System sans-serif font stack for clean readability
  - `Noto Sans Bengali` for Bengali language support
  - Bold headings with clear visual hierarchy

- **Visual Effects**
  - Gradient text accents
  - Soft shadow cards and glass-like panels
  - Hover scale and subtle motion effects
  - Dark mode friendly backgrounds and text contrast

---

## 👤 About the Developer

**Tarikur Rahman** is a software developer building modern web experiences with strong design, responsive layouts, and polished interactions.

- GitHub: https://github.com/tarikurrahman
- Portfolio: https://yourtarikur.vercel.app/
- Social Handle: `tarikurrahman08`
- Email: tarikurrahman2008@gmail.com

---

## 📄 License

This project is licensed under the **MIT License**.

© 2026 Tarikur Rahman.

