# Tech Spec — Hotel Premium Luxury Hotel Website

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | ^15 | Framework (App Router) |
| react | ^19 | UI library |
| react-dom | ^19 | React DOM renderer |
| typescript | ^5 | Type safety |
| tailwindcss | ^4 | Utility-first CSS |
| @tailwindcss/postcss | ^4 | PostCSS integration for Tailwind |
| gsap | ^3.12 | Core animation engine, ScrollTrigger, SplitText |
| lenis | ^1 | Smooth scroll with inertia |
| lucide-react | ^0.460 | Icon library (menu, arrows, social, service icons) |
| @fontsource/playfair-display | ^5 | Serif headings font |
| @fontsource/lato | ^5 | Sans-serif body font |
| @fontsource/marcellus | ^5 | Accent/tagline font |

No shadcn/ui components — all UI is custom-built per design. No Three.js — the hero "3D" is handled by GSAP parallax and perspective transforms.

---

## Component Inventory

### Layout (shared across page)

| Component | Source | Notes |
|-----------|--------|-------|
| Navigation | Custom | Fixed header, scroll-aware background, mobile hamburger with full-screen overlay |
| Footer | Custom | 4-column grid, newsletter form |
| Preloader | Custom | Logo pulse + fade-out on ready |
| BackToTop | Custom | Fixed circle button, appears after 300px scroll |
| CustomCursor | Custom | 10px circle, scales on hover, hidden on touch/mobile |

### Sections (page-specific)

| Component | Key Feature |
|-----------|-------------|
| HeroSection | Full-viewport video background + dark overlay + staggered entrance |
| QuoteSection | Centered italic quote with decorative opening mark |
| AboutSection | 50/50 split: text left, clip-path image right |
| CounterSection | 4 animated count-up circles on dark background |
| PhotoGallery | Horizontal scroll via ScrollTrigger pin + parallax inner images |
| RoomsSection | Horizontal scroll room cards with price + "View Details" |
| ServicesSection | 3x2 icon card grid |
| RestaurantsSection | 2 alternating-layout restaurant cards |
| TestimonialsSection | Carousel with arrows + dot indicators |
| BookingCtaSection | Background image + dark overlay + centered CTA |
| BlogSection | 3-column blog post card grid |

### Reusable Components

| Component | Used By |
|-----------|---------|
| SectionLabel | Label above every section title ("About Us", "Gallery", etc.) |
| SectionHeader | Label + title + optional subtitle bundle — used in 8 sections |
| ClipPathImage | Image with scroll-triggered vertical unfold animation |
| RoomCard | RoomsSection horizontal gallery |
| ServiceCard | ServicesSection grid items |
| RestaurantCard | RestaurantsSection (image+content layout) |
| BlogCard | BlogSection grid items |
| TestimonialSlide | TestimonialsSection carousel slides |
| Button | 3 variants: outlined-dark, outlined-light, filled |

### Hooks

| Hook | Purpose |
|------|---------|
| useLenis | Initialize and manage Lenis smooth scroll instance, connect to GSAP ScrollTrigger |
| useScrollReveal | Standardized scroll-triggered entrance (fade+translate) with configurable params |
| useClipPathReveal | Clip-path polygon unfold animation tied to scroll |

---

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| **Smooth scrolling (global)** | Lenis + GSAP ScrollTrigger | Lenis instance drives scroll; ScrollTrigger.scrollerProxy connects GSAP to Lenis | Medium |
| **Preloader sequence** | GSAP timeline | Logo pulse (scale+opacity oscillation) → fade out → hero staggered reveal | Medium |
| **Hero content entrance** | GSAP timeline | 6-step staggered fade+translate after preloader completes | Low |
| **Scroll-triggered fade-up** | GSAP ScrollTrigger | Reusable: opacity 0→1, y 40→0, triggered at 15% viewport entry. Stagger 100ms | Low |
| **Section label + title stagger** | GSAP ScrollTrigger | Label fades first (200ms delay), then title, then body (cascade pattern) | Low |
| **Clip-path image reveal** | GSAP ScrollTrigger | clip-path polygon morphs from 10% horizontal slice to full rectangle, 1000ms ease-in-out | Medium |
| **Counter animation** | GSAP | gsap.to with snap on innerText, 1500ms linear, staggered start | Low |
| **Horizontal scroll gallery** | GSAP ScrollTrigger | Pin section, scrub vertical→horizontal translation of track. Inner images have parallax offset | High |
| **Testimonial carousel** | GSAP | Fade out current (opacity→0), fade in next (opacity 0→1 + translateX 20→0). No auto-play by default | Low |
| **Nav background on scroll** | GSAP ScrollTrigger | Toggle class or animate background when scroll > 50px | Low |
| **Mobile menu slide** | GSAP | translateX(100%) → 0 on open, reverse on close. Hamburger lines morph to X via rotation+translation | Medium |
| **Custom cursor** | React state + CSS transform | rAF loop or mousemove listener updates position. Scale transition on hover state change | Medium |
| **Back to top** | CSS + scroll listener | Opacity toggle after 300px scroll. Click triggers Lenis scrollTo(0) | Low |
| **Button hover fills** | CSS transitions | Background/color transition 300ms — pure CSS, no JS | Low |
| **Card hover effects** | CSS transitions | translateY(-4px) + image scale(1.05) — pure CSS | Low |
| **Quote mark scale-in** | GSAP ScrollTrigger | opacity 0→1 + scale 0.8→1 on viewport entry | Low |
| **Restaurant card split entrance** | GSAP ScrollTrigger | Image clip-path + content translateX from opposite directions with delay | Medium |

### Animation Architecture Decisions

- **Single GSAP + ScrollTrigger source** — all scroll-driven animations use GSAP ScrollTrigger via the Lenis scroller proxy. No Framer Motion — the design is entirely scroll/GSAP-driven with no gesture-based or React-state animations.
- **Lenis as the scroll authority** — Lenis owns the scroll position; ScrollTrigger is configured to read from Lenis via ScrollTrigger.scrollerProxy or the lenis.scroll event. This prevents conflicts between smooth scroll and scroll detection.
- **Reusable animation hooks** — useScrollReveal and useClipPathReveal consolidate the two dominant animation patterns (fade-up and clip-path unfold) so section components don't duplicate GSAP setup code.
- **Horizontal scroll galleries** (Photo Gallery + Rooms) share the same ScrollTrigger pin-and-scrub pattern but are separate components. The pin duration equals total track width minus viewport width.

---

## State & Logic Plan

### Language Switcher (EN/FR)

Two options; use **Option A** (simpler, no routing needed):

- **Option A (recommended):** Client-side state with a `LanguageContext` storing `lang: 'en' | 'fr'`. All text content is stored in a translation object. Switching lang updates context state, which re-renders all text. No URL changes, no SSR complexity.
- All section components read from the translation context. Static text is hardcoded per design; the French variant is the same structure with translated strings.

### Testimonials Carousel

- Track `activeIndex` (0–2) in component state.
- "Next" increments, "Prev" decrements with wrap-around.
- GSAP handles the transition animation (fade out → fade in).
- Dot indicators derive from `activeIndex`.

### Mobile Menu Toggle

- `isOpen` boolean in Navigation component state.
- Toggles hamburger→X morph and full-screen overlay visibility.
- GSAP handles the slide animation.
- Body scroll is locked when open (Lenis.stop()).

### Video Play/Pause

- `isPlaying` boolean in HeroSection state.
- Toggles native HTML video `play()` / `pause()`.
- Icon swaps between play and pause symbols.

### Custom Cursor

- Track mouse position via `mousemove` listener.
- Hover detection: attach data attributes (`data-cursor-hover`, `data-cursor-view`) to interactive elements; cursor component reads these to determine scale/text state.
- Hidden on touch devices via `matchMedia('(hover: hover)')` check.
- Uses `transform: translate3d()` for GPU-accelerated positioning.

### Scroll-Triggered Reveals (Non-Obvious Logic)

- All entrance animations use GSAP ScrollTrigger with `once: true` (fire on first entry only, no reverse on scroll-back).
- Counter numbers: ScrollTrigger `onEnter` fires the counting tween. Inner text is updated via `snap: 1` for integer stepping.
- The `useScrollReveal` hook creates a ScrollTrigger per target element and auto-cleans up on unmount.

---

## Other Key Decisions

### Single Page Architecture

All sections render on one page. Navigation links use Lenis `scrollTo()` to anchor to section IDs. No client-side routing needed — `next/font` or `@fontsource` for fonts, no layout route complexity.

### Font Loading

Use `@fontsource/playfair-display`, `@fontsource/lato`, `@fontsource/marcellus` with `import` in the root layout. This avoids Google Fonts CDN requests and ensures self-hosted fonts. Load weights: Playfair Display 400 + 400 italic, Lato 300 + 400, Marcellus 400.

### Image Strategy

All images are static assets in `/public/images/`. Use Next.js `<Image>` with priority for above-fold (hero video poster, about image). Lazy load all gallery and room images. No CMS or dynamic image sources.

### Video Strategy

Hero video is a static file in `/public/video/`. Use HTML `<video>` element with `muted`, `loop`, `playsInline`, `autoPlay` attributes. Provide a poster image for the preloader transition. No streaming or adaptive bitrate needed for a single 10s looped video.
