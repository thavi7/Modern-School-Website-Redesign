# Ashgrove Academy — Premium Animated School Website (frontend only)

React + Vite, Tailwind CSS, GSAP (+ ScrollTrigger, @gsap/react), Lenis, React Router, Lucide.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build && npm run preview
```

## Structure
- `src/lib/gsap.js` – single plugin registration; `lib/lenis.js` – smooth scroll wired to the GSAP ticker, scroll lock helpers
- `src/context/AppContext.jsx` – loader state + GSAP route transition (`go(path)`), used by `TransitionLink`
- `src/hooks/useScrollFx.js` – data-attribute scroll animations (`data-words|reveal|stagger|mask|parallax|count`), run once per route inside `gsap.matchMedia`, so triggers never duplicate
- `src/hooks/useHeroIntro.js` – shared hero entrance, waits for the loader
- `src/components/{ui,layout,sections,home}` – reusable pieces; `src/pages` – six pages + 404
- `src/data/content.js` – all mock copy; `src/lib/images.js` – photo ids (Unsplash, with seeded fallback)

## Notes
- Forms are client-side only (validation + demo success state). No backend.
- `prefers-reduced-motion`: Lenis, the loader sequence, route panels, and scroll effects are disabled or replaced by simple fades; counters show final values.
- Photos load from Unsplash/picsum at runtime. Swap ids in `src/lib/images.js` for local assets in `public/` if you prefer.
