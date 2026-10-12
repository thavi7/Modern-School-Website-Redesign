import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { gsap, useGSAP } from '../../lib/gsap'
import { testimonials } from '../../data/content'
import Photo from '../ui/Photo'
import Words from '../ui/Words'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const root = useRef(null)
  const first = useRef(true)
  const n = testimonials.length
  const t = testimonials[i]

  useGSAP(() => {
    if (first.current) { first.current = false; return }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.fromTo('[data-slide]', { x: 40, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.8, ease: 'power3.out', stagger: 0.08 })
  }, { dependencies: [i], scope: root })

  const key = (e) => {
    if (e.key === 'ArrowRight') setI((v) => (v + 1) % n)
    if (e.key === 'ArrowLeft') setI((v) => (v - 1 + n) % n)
  }

  return (
    <section ref={root} className="section bg-sand" aria-roledescription="carousel" aria-label="Testimonials" onKeyDown={key}>
      <div className="wrap">
        <Words text="What families say about us." className="title max-w-2xl" />
        <div className="mt-16 grid items-start gap-12 md:grid-cols-12">
          <div className="md:col-span-4 md:col-start-1" data-reveal>
            <div data-slide><Photo id={t.img} alt={`Portrait of ${t.name}`} sizes="(min-width:768px) 30vw, 80vw" className="aspect-[4/5] rounded-[2rem]" /></div>
          </div>
          <div className="md:col-span-7 md:col-start-6" aria-live="polite">
            <blockquote data-slide className="text-[clamp(1.4rem,2.6vw,2.4rem)] font-semibold leading-snug tracking-tight">
              <p>“{t.quote}”</p>
            </blockquote>
            <p data-slide className="mt-8 font-bold">{t.name}</p>
            <p data-slide className="text-navy/65">{t.role}</p>
            <div className="mt-12 flex items-center gap-4">
              <button type="button" onClick={() => setI((i - 1 + n) % n)} aria-label="Previous testimonial" className="grid size-12 place-items-center rounded-full border border-navy/30 transition-colors hover:bg-navy hover:text-warm"><ArrowLeft aria-hidden="true" className="size-5" /></button>
              <button type="button" onClick={() => setI((i + 1) % n)} aria-label="Next testimonial" className="grid size-12 place-items-center rounded-full border border-navy/30 transition-colors hover:bg-navy hover:text-warm"><ArrowRight aria-hidden="true" className="size-5" /></button>
              <p className="ml-2 text-sm font-medium text-navy/65" aria-label={`Testimonial ${i + 1} of ${n}`}>{i + 1} of {n}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
