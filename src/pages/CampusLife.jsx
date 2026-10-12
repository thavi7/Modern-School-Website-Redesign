import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { gsap, useGSAP } from '../lib/gsap'
import { setScrollLocked } from '../lib/lenis'
import { clubs, events, gallery } from '../data/content'
import PageHero from '../components/sections/PageHero'
import AdmissionsCta from '../components/sections/AdmissionsCta'
import Photo from '../components/ui/Photo'
import Words from '../components/ui/Words'
import { IMG, u } from '../lib/images'

const cats = ['All', 'Sports', 'Clubs', 'Events', 'Arts']

function Lightbox({ items, index, onClose, onMove }) {
  const closeBtn = useRef(null)
  const item = items[index]
  useEffect(() => {
    setScrollLocked(true)
    closeBtn.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onMove(1)
      if (e.key === 'ArrowLeft') onMove(-1)
      if (e.key === 'Tab') { e.preventDefault(); closeBtn.current?.focus() } // keep focus on the dialog controls
    }
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); setScrollLocked(false) }
  }, [onClose, onMove])
  return (
    <div role="dialog" aria-modal="true" aria-label={item.title} className="fixed inset-0 z-[95] grid place-items-center bg-navy-deep/95 p-4 text-warm" onClick={onClose}>
      <figure className="max-h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img src={u(IMG[item.img] || item.img, 1800)} alt={item.title} className="max-h-[78svh] w-full rounded-[1.5rem] object-cover" />
        <figcaption className="mt-4 flex items-center justify-between gap-4"><span className="font-semibold">{item.title}</span><span className="text-sm text-warm/60">{item.cat} · {index + 1} of {items.length}</span></figcaption>
      </figure>
      <button ref={closeBtn} type="button" onClick={onClose} aria-label="Close gallery" className="absolute right-4 top-4 grid size-12 place-items-center rounded-full border border-warm/30 hover:bg-warm hover:text-navy"><X aria-hidden="true" className="size-5" /></button>
      <button type="button" onClick={(e) => { e.stopPropagation(); onMove(-1) }} aria-label="Previous photo" className="absolute left-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-warm/30 hover:bg-warm hover:text-navy"><ChevronLeft aria-hidden="true" className="size-5" /></button>
      <button type="button" onClick={(e) => { e.stopPropagation(); onMove(1) }} aria-label="Next photo" className="absolute right-3 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-warm/30 hover:bg-warm hover:text-navy"><ChevronRight aria-hidden="true" className="size-5" /></button>
    </div>
  )
}

function Gallery() {
  const [cat, setCat] = useState('All')
  const [open, setOpen] = useState(-1)
  const root = useRef(null)
  const first = useRef(true)
  const items = cat === 'All' ? gallery : gallery.filter((g) => g.cat === cat)

  useGSAP(() => {
    if (first.current) { first.current = false; return }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.fromTo('[data-g]', { y: 40, autoAlpha: 0, scale: 0.97 }, { y: 0, autoAlpha: 1, scale: 1, duration: 0.8, ease: 'power3.out', stagger: 0.07 })
  }, { dependencies: [cat], scope: root })

  const move = useCallback((d) => setOpen((i) => (i + d + items.length) % items.length), [items.length])
  const close = useCallback(() => setOpen(-1), [])

  return (
    <section ref={root} className="section bg-warm">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Words text="The campus gallery." className="title" />
          <div role="group" aria-label="Filter photos" className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button key={c} type="button" aria-pressed={c === cat} onClick={() => setCat(c)} className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${c === cat ? 'border-navy bg-navy text-warm' : 'border-navy/25 hover:border-navy'}`}>{c}</button>
            ))}
          </div>
        </div>
        <ul className="mt-14 grid gap-4 md:grid-cols-12" aria-live="polite">
          {items.map((g, i) => (
            <li key={g.id} data-g className={g.span.split(' ').filter((c) => c.startsWith('md:')).join(' ')}>
              <button type="button" onClick={() => setOpen(i)} aria-label={`Open photo: ${g.title}`} className="group/c relative block w-full text-left">
                <Photo id={g.img} alt={g.title} sizes="(min-width:768px) 55vw, 100vw" className={`rounded-[1.8rem] ${g.span.split(' ').filter((c) => !c.startsWith('md:')).join(' ')}`} />
                <span className="absolute inset-x-3 bottom-3 translate-y-3 rounded-[1.2rem] bg-navy-deep px-5 py-3 text-warm opacity-0 transition-all duration-500 group-hover/c:translate-y-0 group-hover/c:opacity-100 group-focus-visible/c:translate-y-0 group-focus-visible/c:opacity-100 max-md:translate-y-0 max-md:opacity-100">
                  <span className="block font-semibold">{g.title}</span><span className="text-sm text-warm/65">{g.cat}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {open >= 0 && <Lightbox items={items} index={open} onClose={close} onMove={move} />}
    </section>
  )
}

export default function CampusLife() {
  return (
    <>
      <PageHero title="Life on campus never sits still." text="Training grounds at dawn, rehearsals at lunch, clubs after school. Here is what a week at AV1 looks like." img="football" alt="Students playing football on the school field" />
      <Gallery />

      <section className="section bg-sand">
        <div className="wrap grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Words text="Clubs for every kind of curiosity." className="title" />
            <p data-reveal className="mt-6 max-w-sm text-lg text-navy/75">More than sixty clubs run each year. Students can start a new one with a teacher sponsor and five members.</p>
          </div>
          <ul data-stagger className="flex flex-wrap content-start gap-3 md:col-span-7">
            {clubs.map((c) => <li key={c} className="rounded-full border border-navy/25 px-6 py-3 text-lg font-semibold transition-colors hover:bg-navy hover:text-warm">{c}</li>)}
          </ul>
        </div>
      </section>

      <section className="section bg-navy-deep text-warm">
        <div className="wrap">
          <Words text="Coming up this term." className="title" />
          <ul data-stagger className="mt-12 border-t border-warm/20">
            {events.map((e) => (
              <li key={e.title} className="grid gap-1 border-b border-warm/20 py-7 md:grid-cols-12 md:items-center md:gap-6">
                <p className="font-bold text-gold md:col-span-3 md:text-xl">{e.date}</p>
                <h3 className="text-2xl font-bold md:col-span-6 md:text-3xl">{e.title}</h3>
                <p className="text-warm/65 md:col-span-3 md:text-right">{e.place}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <AdmissionsCta img="campus" />
    </>
  )
}
