import { gsap, useGSAP } from '../lib/gsap'
import { useApp } from '../context/AppContext'

let firstRun = true

/**
 * Orchestrated entrance for a page's top section. Waits for the loader, then plays:
 *   [data-intro-mask] clip-path open -> [data-intro-words] .wi rise -> [data-intro-fade] stagger
 */
export default function useHeroIntro(root) {
  const { loaded } = useApp()
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const q = gsap.utils.selector(root)
        const words = q('[data-intro-words] .wi')
        const fades = q('[data-intro-fade]')
        const masks = q('[data-intro-mask]')
        const zooms = q('[data-intro-mask] [data-zoom]')
        if (!loaded) {
          gsap.set(words, { yPercent: 115 })
          gsap.set(fades, { autoAlpha: 0, y: 24 })
          gsap.set(masks, { clipPath: 'inset(100% 0% 0% 0%)' })
          return
        }
        const delay = firstRun ? 0.1 : 0.55 // after a route change, wait for the panels to lift
        firstRun = false
        gsap.timeline({ delay, defaults: { ease: 'power4.out' } })
          .fromTo(masks, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'expo.inOut' }, 0)
          .fromTo(zooms, { scale: 1.3 }, { scale: 1, duration: 2, ease: 'expo.out' }, 0)
          .fromTo(words, { yPercent: 115 }, { yPercent: 0, duration: 1.1, stagger: 0.07 }, 0.3)
          .fromTo(fades, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1 }, 0.85)
      })
      return () => mm.revert()
    },
    { scope: root, dependencies: [loaded] }
  )
}
