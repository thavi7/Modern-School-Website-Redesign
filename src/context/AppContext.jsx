import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { gsap, ScrollTrigger, prefersReducedMotion } from '../lib/gsap'
import { scrollToTop } from '../lib/lenis'

const Ctx = createContext(null)
export const useApp = () => useContext(Ctx)

const NAMES = { '/': 'Home', '/about': 'About', '/academics': 'Academics', '/campus-life': 'Campus Life', '/admissions': 'Admissions', '/contact': 'Contact' }

/**
 * Holds loader state and the GSAP route transition.
 * go(path): panels rise -> router navigates + scroll resets -> panels lift away.
 */
export function AppProvider({ children }) {
  const [loaded, setLoaded] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const overlay = useRef(null)
  const busy = useRef(false)

  const go = useCallback(
    (to) => {
      if (busy.current) return
      if (to === pathname) { scrollToTop(); return }
      const el = overlay.current
      if (prefersReducedMotion() || !el) { navigate(to); return }

      busy.current = true
      const cols = el.querySelectorAll('[data-panel]')
      const label = el.querySelector('[data-panel-label]')
      label.textContent = NAMES[to] || ''
      el.style.pointerEvents = 'auto'

      gsap.timeline({ onComplete: () => { busy.current = false; el.style.pointerEvents = 'none' } })
        .to(cols, { yPercent: 0, duration: 0.7, ease: 'expo.inOut', stagger: 0.06 })
        .to(label, { autoAlpha: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '-=0.35')
        .add(() => { navigate(to); scrollToTop() })
        .to({}, { duration: 0.3 }) // let the next route mount
        .add(() => ScrollTrigger.refresh())
        .to(label, { autoAlpha: 0, y: -16, duration: 0.3 })
        .to(cols, { yPercent: -100, duration: 0.85, ease: 'expo.inOut', stagger: 0.06 }, '<0.1')
        .set(cols, { yPercent: 100 })
        .set(label, { y: 16 })
    },
    [navigate, pathname]
  )

  const value = useMemo(() => ({ loaded, setLoaded, go }), [loaded, go])

  return (
    <Ctx.Provider value={value}>
      {children}
      <div ref={overlay} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[90] flex overflow-hidden">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} data-panel className="h-full flex-1 translate-y-full bg-navy-deep" style={{ borderRight: i < 3 ? '1px solid rgba(184,154,78,.25)' : 'none' }} />
        ))}
        <p data-panel-label className="invisible absolute inset-0 flex translate-y-4 items-center justify-center text-4xl font-bold tracking-tight text-warm md:text-7xl" />
      </div>
    </Ctx.Provider>
  )
}
