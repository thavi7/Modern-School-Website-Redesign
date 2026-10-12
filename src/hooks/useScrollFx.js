import { gsap, useGSAP, ScrollTrigger } from '../lib/gsap'

/**
 * Declarative scroll animations driven by data attributes. Run once per route from Layout.
 *   data-words            heading built with <Words>: words rise out of a mask
 *   data-reveal           fade + small rise
 *   data-stagger          direct children rise in sequence
 *   data-mask             image container opens upward (clip-path), inner [data-zoom] settles
 *   data-parallax="8"     scrubbed vertical drift (percent)
 *   data-count="1850"     animated number (optional data-suffix, data-delay)
 * All triggers live inside one matchMedia context, so they are reverted on route change
 * and never duplicate. With reduced motion, only final counter values are written.
 */
export default function useScrollFx(scope, deps = []) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add({ ok: '(prefers-reduced-motion: no-preference)', reduce: '(prefers-reduced-motion: reduce)' }, (ctx) => {
        const reduce = ctx.conditions.reduce
        const q = gsap.utils.selector(scope)
        const fmt = (el, v) => Math.round(v).toLocaleString('en-IN') + (el.dataset.suffix || '')

        q('[data-count]').forEach((el) => {
          const end = parseFloat(el.dataset.count)
          if (reduce) { el.textContent = fmt(el, end); return }
          const o = { v: 0 }
          el.textContent = fmt(el, 0)
          gsap.to(o, {
            v: end, duration: 2.2, ease: 'power2.out', delay: parseFloat(el.dataset.delay || 0),
            scrollTrigger: { trigger: el, start: 'top 92%', once: true },
            onUpdate: () => (el.textContent = fmt(el, o.v)),
          })
        })
        if (reduce) return

        q('[data-words]').forEach((el) =>
          gsap.from(el.querySelectorAll('.wi'), {
            yPercent: 115, duration: 1.1, ease: 'power4.out', stagger: 0.06,
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          })
        )
        q('[data-reveal]').forEach((el) =>
          gsap.from(el, { y: 28, autoAlpha: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } })
        )
        q('[data-stagger]').forEach((el) =>
          gsap.from(el.children, {
            y: 36, autoAlpha: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1,
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          })
        )
        q('[data-mask]').forEach((el) => {
          const zoom = el.querySelector('[data-zoom]')
          const st = { trigger: el, start: 'top 88%', once: true }
          gsap.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.out', scrollTrigger: st })
          if (zoom) gsap.fromTo(zoom, { scale: 1.25 }, { scale: 1, duration: 1.8, ease: 'expo.out', scrollTrigger: st })
        })
        q('[data-parallax]').forEach((el) => {
          const amt = parseFloat(el.dataset.parallax) || 8
          gsap.fromTo(el, { yPercent: -amt }, {
            yPercent: amt, ease: 'none',
            scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
          })
        })
      })
      const raf = requestAnimationFrame(() => ScrollTrigger.refresh())
      return () => { cancelAnimationFrame(raf); mm.revert() }
    },
    { scope, dependencies: deps }
  )
}
