import { useRef, useState } from 'react'
import { Plus } from 'lucide-react'
import { gsap, useGSAP } from '../lib/gsap'
import { pathways, pillars, stages, subjects } from '../data/content'
import PageHero from '../components/sections/PageHero'
import AdmissionsCta from '../components/sections/AdmissionsCta'
import Photo from '../components/ui/Photo'
import Words from '../components/ui/Words'

function Stages() {
  const [id, setId] = useState('primary')
  const root = useRef(null)
  const first = useRef(true)
  const s = stages.find((x) => x.id === id)

  useGSAP(() => {
    if (first.current) { first.current = false; return }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    gsap.fromTo('[data-panel-in]', { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, stagger: 0.07, ease: 'power3.out' })
  }, { dependencies: [id], scope: root })

  const onKey = (e) => {
    const i = stages.findIndex((x) => x.id === id)
    const next = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0
    if (!next) return
    e.preventDefault()
    const t = stages[(i + next + stages.length) % stages.length]
    setId(t.id)
    document.getElementById(`tab-${t.id}`)?.focus()
  }

  return (
    <section ref={root} className="section bg-warm">
      <div className="wrap">
        <Words text="Three stages, one steady path." className="title max-w-2xl" />
        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <div role="tablist" aria-label="School stages" aria-orientation="vertical" onKeyDown={onKey} className="flex gap-3 overflow-x-auto md:col-span-3 md:flex-col md:overflow-visible">
            {stages.map((x) => (
              <button key={x.id} id={`tab-${x.id}`} role="tab" type="button" aria-selected={x.id === id} aria-controls="stage-panel" tabIndex={x.id === id ? 0 : -1} onClick={() => setId(x.id)}
                className={`shrink-0 rounded-full border px-6 py-4 text-left transition-colors md:rounded-[1.4rem] md:px-7 ${x.id === id ? 'border-navy bg-navy text-warm' : 'border-navy/25 hover:border-navy'}`}>
                <span className="block text-xl font-bold">{x.label}</span>
                <span className={`hidden text-sm md:block ${x.id === id ? 'text-warm/70' : 'text-navy/60'}`}>{x.grades}</span>
              </button>
            ))}
          </div>
          <div id="stage-panel" role="tabpanel" aria-labelledby={`tab-${id}`} className="grid gap-10 md:col-span-9 md:grid-cols-9">
            <Photo id={s.img} alt={`${s.label} school students`} sizes="(min-width:768px) 30vw, 100vw" className="aspect-[4/5] rounded-[2rem] md:col-span-4" />
            <div className="md:col-span-5">
              <p data-panel-in className="font-semibold text-gold">{s.grades}, {s.age}</p>
              <p data-panel-in className="mt-3 text-xl leading-relaxed text-navy/85">{s.summary}</p>
              <ul data-panel-in className="mt-8 space-y-3 border-t border-navy/15 pt-6">
                {s.focus.map((f) => <li key={f} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-sage" />{f}</li>)}
              </ul>
              <ul data-panel-in className="mt-8 flex flex-wrap gap-2" aria-label="Subjects">
                {s.subjects.map((sub) => <li key={sub} className="rounded-full bg-sand px-4 py-2 text-sm font-medium">{sub}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SubjectList() {
  const [open, setOpen] = useState(0)
  return (
    <ul className="border-t border-navy/20">
      {subjects.map((s, i) => {
        const isOpen = open === i
        return (
          <li key={s.name} className="border-b border-navy/20">
            <h3>
              <button type="button" aria-expanded={isOpen} aria-controls={`sub-${i}`} onClick={() => setOpen(isOpen ? -1 : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left text-2xl font-bold md:text-3xl">
                {s.name}
                <Plus aria-hidden="true" className={`size-6 shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-[135deg] text-gold' : ''}`} />
              </button>
            </h3>
            <div id={`sub-${i}`} role="region" aria-label={s.name} className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden"><p className="max-w-2xl pb-7 text-lg text-navy/75">{s.text}</p></div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default function Academics() {
  return (
    <>
      <PageHero title="Learning that goes deep, not just wide." text="A clear curriculum, taught by specialists, and tested by building, performing and explaining what you know." img="classroom" alt="Students collaborating in a classroom" />
      <Stages />

      <section className="section bg-sand">
        <div className="wrap grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Words text="Curriculum overview." className="title" />
            <p data-reveal className="mt-6 max-w-sm text-lg text-navy/75">Four pillars run through every grade. They keep lessons connected and give parents a clear picture of what we are doing and why.</p>
          </div>
          <ul data-stagger className="grid gap-4 sm:grid-cols-2 md:col-span-7">
            {pillars.map((p, i) => (
              <li key={p.title} className={`rounded-[1.8rem] p-7 ${i === 0 ? 'bg-navy-deep text-warm' : i === 3 ? 'bg-sage text-warm' : 'border border-navy/20'}`}>
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 opacity-80">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-warm">
        <div className="wrap">
          <Words text="Programmes beyond the timetable." className="title max-w-3xl" />
          <div className="mt-20 space-y-24 md:space-y-32">
            {pathways.map((p, i) => (
              <article key={p.key} className="grid items-center gap-10 md:grid-cols-12">
                <Photo mask id={p.img} alt={p.title} parallax={6} sizes="(min-width:768px) 55vw, 100vw" className={`aspect-[4/3] rounded-[2rem] md:col-span-7 ${i % 2 ? 'md:order-2' : ''}`} />
                <div className={`md:col-span-5 ${i % 2 ? 'md:order-1 md:pr-10' : 'md:pl-6'}`}>
                  <h3 data-reveal className="text-4xl font-extrabold md:text-5xl">{p.title}</h3>
                  <p data-reveal className="mt-5 text-lg text-navy/80">{p.text}</p>
                  <ul data-stagger className="mt-6 space-y-2 border-t border-navy/15 pt-5">
                    {p.points.map((pt) => <li key={pt} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold" />{pt}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <Words text="Inside the subjects." className="title md:col-span-4" />
          <div className="md:col-span-8"><SubjectList /></div>
        </div>
      </section>
      <AdmissionsCta img="lab" />
    </>
  )
}
