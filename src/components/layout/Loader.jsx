import { useRef, useState } from 'react'
import { gsap, useGSAP } from '../../lib/gsap'
import { setScrollLocked } from '../../lib/lenis'
import { useApp } from '../../context/AppContext'

/** First-visit loader: wordmark, progress, three layered panels. Always finishes (failsafe at 4.5s). */
export default function Loader() {
  const root = useRef(null)
  const [done, setDone] = useState(false)
  const { setLoaded } = useApp()

  useGSAP(() => {
    setScrollLocked(true)
    let finished = false
    const finish = () => {
      if (finished) return
      finished = true
      setLoaded(true)
      setDone(true)
      setScrollLocked(false)
    }
    const failsafe = setTimeout(finish, 4500)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.to(root.current, { autoAlpha: 0, duration: 0.3, delay: 0.2, onComplete: finish })
      return () => clearTimeout(failsafe)
    }

    const q = gsap.utils.selector(root)
    const num = q('[data-num]')[0]
    const o = { v: 0 }
    gsap.timeline({ onComplete: finish })
      .from(q('[data-l]'), { yPercent: 115, duration: 0.9, ease: 'power4.out', stagger: 0.05 })
      .to(o, {
        v: 100, duration: 1.1, ease: 'power2.inOut',
        onUpdate: () => { num.textContent = String(Math.round(o.v)).padStart(3, '0') },
      }, 0.2)
      .to(q('[data-bar]'), { scaleX: 1, duration: 1.1, ease: 'power2.inOut' }, 0.2)
      .to(q('[data-content]'), { autoAlpha: 0, y: -30, duration: 0.5, ease: 'power3.in' }, '+=0.1')
      .add(() => setLoaded(true), '>-0.1') // hero starts as the panels lift
      .to(q('[data-lp]'), { yPercent: -100, duration: 1, ease: 'expo.inOut', stagger: { each: 0.1, from: 'end' } }, '<')
    return () => clearTimeout(failsafe)
  }, { scope: root })

  if (done) return null
  const word = 'AV1'.split('')
  return (
    <div ref={root} role="status" aria-label="Loading AV1 Academy" className="fixed inset-0 z-[100]">
      <div data-lp className="absolute inset-0 bg-gold" />
      <div data-lp className="absolute inset-0 bg-navy-soft" />
      <div data-lp className="absolute inset-0 bg-navy-deep">
        <div data-content className="flex h-full flex-col justify-between p-6 text-warm md:p-12">
          <p className="text-sm font-medium text-warm/60">Est. 1998</p>
          <p className="text-[clamp(3.5rem,14vw,12rem)] font-extrabold leading-[0.95]" aria-hidden="true">
            {word.map((c, i) => (
              <span key={i} className="inline-block overflow-hidden pb-[0.12em]"><span data-l className="inline-block">{c}</span></span>
            ))}
          </p>
          <div>
            <div className="flex items-end justify-between">
              <span className="text-sm font-medium text-warm/60">Academy</span>
              <span data-num className="text-5xl font-bold tabular-nums md:text-7xl">000</span>
            </div>
            <div className="mt-4 h-px w-full bg-warm/15"><div data-bar className="h-full origin-left scale-x-0 bg-gold" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
