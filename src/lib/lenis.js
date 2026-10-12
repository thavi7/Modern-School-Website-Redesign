import Lenis from 'lenis'
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap'

let lenis = null
let locked = false

export const getLenis = () => lenis

/** Lock/unlock page scroll (loader, mobile menu, lightbox). */
export function setScrollLocked(value) {
  locked = value
  if (lenis) value ? lenis.stop() : lenis.start()
  document.documentElement.style.overflow = value ? 'hidden' : ''
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
  window.scrollTo(0, 0)
}

/** Creates Lenis and wires it into the GSAP ticker so ScrollTrigger stays in sync. Returns a cleanup. */
export function initLenis() {
  if (prefersReducedMotion()) return () => {}
  lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })
  lenis.on('scroll', ScrollTrigger.update)
  const tick = (time) => lenis && lenis.raf(time * 1000)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)
  if (locked) lenis.stop()
  return () => {
    gsap.ticker.remove(tick)
    lenis && lenis.destroy()
    lenis = null
  }
}
