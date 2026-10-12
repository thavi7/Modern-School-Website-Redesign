import { useRef } from 'react'
import { gsap, useGSAP } from '../../lib/gsap'

/** Vertical timeline. The gold line fills as you scroll; each entry settles in from the side. */
export default function Timeline({ items, dark = false }) {
  const root = useRef(null)
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo('[data-fill]', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top 65%', end: 'bottom 65%', scrub: true } })
      gsap.utils.toArray('[data-tl-item]').forEach((el) => {
        gsap.from(el, { x: 40, autoAlpha: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } })
        gsap.from(el.querySelector('[data-dot]'), { scale: 0, duration: 0.5, ease: 'back.out(3)', scrollTrigger: { trigger: el, start: 'top 80%', once: true } })
      })
    })
    return () => mm.revert()
  }, { scope: root })

  const track = dark ? 'bg-warm/15' : 'bg-navy/15'
  return (
    <ol ref={root} className="relative">
      <div aria-hidden="true" className={`absolute bottom-2 top-2 left-[7px] w-px md:left-[12.25rem] ${track}`}>
        <div data-fill className="h-full origin-top bg-gold" />
      </div>
      {items.map((m, k) => (
        <li key={k} data-tl-item className="relative grid gap-1 pb-14 pl-9 last:pb-0 md:grid-cols-[11rem_2.5rem_1fr] md:gap-0 md:pl-0">
          <span data-dot aria-hidden="true" className="absolute left-[2px] top-[0.7rem] size-[11px] rounded-full bg-gold md:left-[calc(12.25rem-5.5px)]" />
          <p className="text-2xl font-bold text-gold md:text-right md:text-3xl md:leading-tight">{m.year || m.meta}</p>
          <div className="md:col-start-3">
            <h3 className="text-xl font-bold md:text-2xl">{m.title}</h3>
            <p className={`mt-2 max-w-xl ${dark ? 'text-warm/75' : 'text-navy/75'}`}>{m.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
