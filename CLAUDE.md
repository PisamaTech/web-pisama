# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official website for **Espacio Pisama**, a business offering consulting room rentals by the hour in Montevideo, Uruguay. The site serves as a marketing and booking platform for therapists, psychologists, and alternative therapy practitioners.

## Tech Stack

- **Framework**: Next.js 15 (App Router with Turbopack)
- **Language**: TypeScript (strict mode enabled)
- **UI Library**: HeroUI v2 (custom component library)
- **Styling**: Tailwind CSS v4 with custom theme (`styles/pisama-theme.ts`)
- **Backend**: Supabase (database and real-time features)
- **Email**: Nodemailer (contact form API route)
- **Calendar**: React Big Calendar (availability display)
- **Gallery**: PhotoSwipe & react-photoswipe-gallery
- **Analytics**: Google Analytics 4

## Essential Commands

### Development
```bash
npm run dev          # Start dev server with Turbopack at localhost:3000
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint with auto-fix
```

### Linting
- ESLint is configured with strict rules for React, TypeScript, imports, and accessibility
- Auto-fixes many issues with `npm run lint`
- No test framework is currently configured

## Architecture & Code Organization

### Directory Structure

```
app/                      # Next.js App Router pages
├── api/contact/         # Contact form API endpoint
├── blog/               # Educational blog articles
├── soluciones/         # Profession-specific landing pages (NEW)
│   ├── page.tsx        # Hub page listing all professions
│   ├── psicologos/     # Landing page for psychologists
│   └── terapeutas-alternativos/  # Landing page for alternative therapists
├── consultorios/       # Consulting rooms showcase
├── disponibilidad/     # Availability calendar
├── guia-de-uso/       # User guide pages
├── layout.tsx          # Root layout with metadata, JSON-LD, GA4
└── sitemap.ts          # Dynamic sitemap generation

components/              # React components organized by feature
├── homepage/           # Homepage sections (HeroSection, FeaturesSection)
├── consultorios/       # Room cards, galleries, modals
├── disponibilidad/     # Calendar components
├── app-de-reservas/   # Booking app marketing sections
├── seo/               # SEO components
├── Footer.jsx          # Site-wide footer
├── navbar.tsx          # Main navigation
└── primitives.ts       # Reusable styled components using tailwind-variants

src/                     # Application logic and data
├── consultoriosData.ts  # Static data for consulting rooms
├── otrasAreas.ts       # Data for other facility areas
├── pricingData.ts      # Pricing tier information
└── lib/
    ├── supabaseClient.ts   # Supabase client initialization
    └── getReservas.ts      # Fetches reservations from Supabase

config/
├── site.ts             # Site-wide configuration (navItems, contact, SEO keywords)
└── fonts.ts            # Font configuration

styles/
└── pisama-theme.ts     # Custom HeroUI theme with brand colors
```

### Key Configuration Files

- **config/site.ts**: Single source of truth for site metadata, navigation structure, contact info, and SEO keywords
- **tailwind.config.js**: References custom HeroUI theme and defines brand colors
- **styles/pisama-theme.ts**: Full light/dark theme definitions for HeroUI components
- **app/layout.tsx**: Contains JSON-LD structured data for local business SEO

### Path Aliases

TypeScript is configured with `@/*` alias pointing to the root directory:
```typescript
import { siteConfig } from "@/config/site";
import { consultoriosData } from "@/src/consultoriosData";
```

### Styling Approach

- Primary: Tailwind CSS utility classes
- Brand colors defined in `tailwind.config.js`:
  - `marron-cafe` (#5C4033) - Main text color
  - `terracotta-suave` (#E07A5F) - CTA accent
  - `crema-suave` (#FAF3E0) - Background
  - `gris-calido` (#D6D2D2) - Secondary
- Custom HeroUI theme provides semantic color tokens (primary, secondary, success, etc.)
- `components/primitives.ts` exports reusable components using `tailwind-variants`

### Data Management

Static data is stored in TypeScript files in `src/`:
- `consultoriosData.ts` - Consulting room details (name, description, pricing, media, type)
- `otrasAreas.ts` - Other facility areas
- `pricingData.ts` - Pricing tiers and discounts

Dynamic data (reservations) is fetched from Supabase using `src/lib/getReservas.ts`.

### API Routes

- **POST /api/contact**: Sends contact form emails via Nodemailer
  - Requires environment variables: `EMAIL_SERVER_HOST`, `EMAIL_SERVER_PORT`, `EMAIL_SERVER_USER`, `EMAIL_SERVER_PASSWORD`, `EMAIL_TO`

### Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=
EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
EMAIL_TO=
```

## Component Patterns

### Page Components
- Pages live in `app/[route]/page.tsx`
- Complex pages may include co-located client components in the same directory
- Server components by default; use `"use client"` directive when needed

### Feature Components
- Organized by feature in `components/[feature]/`
- Components are named descriptively: `HeroSection.tsx`, `ConsultorioCards.tsx`
- Shared/primitive components in `components/primitives.ts`

### Media Handling
- Images stored in `public/images/`
- Video tours embedded via YouTube URLs
- PhotoSwipe gallery for image lightboxes
- Media data stored as arrays with type unions: `{ type: "image" | "video"; src: string }[]`

## SEO Implementation

- Metadata exported from each page
- JSON-LD structured data for LocalBusiness in root layout
- Dynamic sitemap generation at `/sitemap.ts`
- OpenGraph images configured in `config/site.ts`
- Google Analytics 4 script in root layout

## Code Style

- ESLint enforces import ordering (type, builtin, external, internal)
- Enforces blank lines before returns and after variable declarations
- React hooks exhaustive-deps warnings enabled
- Self-closing components enforced
- Unused imports automatically warned
- `no-console` warnings enabled
- Accessibility rules (jsx-a11y) set to warn

## Common Workflows

### Adding a New Page
1. Create `app/[route]/page.tsx`
2. Add route to `config/site.ts` navItems or footerNav if needed
3. Export metadata from page component
4. Update sitemap if required

### Adding a New Consulting Room
1. Add room data to `src/consultoriosData.ts`
2. Follow the `Espacio` interface structure
3. Place media files in `public/images/`

### Modifying Theme
1. Edit `styles/pisama-theme.ts` for HeroUI semantic colors
2. Edit `tailwind.config.js` for custom utility colors
3. Both light and dark modes are defined

### Adding Environment Variables
1. Update `.env.local` (not committed)
2. Update this CLAUDE.md file's environment variables section
3. If client-side, prefix with `NEXT_PUBLIC_`

### Adding a New Profession Landing Page
1. Create `app/soluciones/[profession-slug]/page.tsx`
2. Copy structure from existing profession pages (psicologos or terapeutas-alternativos)
3. Include profession-specific components in the same directory (ImageGallery, FAQ, etc.)
4. Update `app/soluciones/page.tsx` to add the new profession to the hub page
5. Update `config/site.ts` navItems dropdown under "Soluciones"
6. Update `config/site.ts` footerNav soluciones section
7. Export metadata with profession-specific keywords

## Content Architecture: Blog vs Soluciones

**Important distinction:**

- **`/soluciones/`**: Profession-specific landing pages with commercial intent, designed for SEO and conversion
  - Heavy SEO optimization with targeted keywords
  - CTAs, testimonials, FAQs
  - Rarely updated, evergreen content
  - Examples: pages for psychologists, alternative therapists, nutritionists

- **`/blog/`**: Educational content, thought leadership, and industry insights
  - Regular updates with new articles
  - No direct sales pitch
  - Builds authority and trust
  - Examples: "How to manage your private practice", "Marketing tips for therapists"

When creating new content, ask: "Is this trying to convert a specific profession, or educate readers?" This determines whether it belongs in `/soluciones/` or `/blog/`.
