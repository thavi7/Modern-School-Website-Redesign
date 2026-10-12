import { programs } from '../../data/content'
import Photo from '../ui/Photo'
import Words from '../ui/Words'
import TransitionLink from '../ui/TransitionLink'

/** Image-led asymmetrical grid. Each tile is a link; the description opens on hover or keyboard focus. */
export default function AcademicsGrid() {
  return (
    <section className="section bg-sand">
      <div className="wrap">
        <div className="grid items-end gap-6 md:grid-cols-12">
          <Words text="Academic excellence, with room to explore." className="title md:col-span-7" />
          <p data-reveal className="text-lg text-navy/75 md:col-span-4 md:col-start-9">Five strands, one school. Every student takes part in all of them, and many find their path where they least expected.</p>
        </div>
        <ul data-stagger className="mt-16 grid gap-4 md:grid-cols-12">
          {programs.map((p) => (
            <li key={p.key} className={`group relative ${p.span}`}>
              <TransitionLink to="/academics" aria-label={`${p.title}: ${p.text}`} className="absolute inset-0 z-20 rounded-[2rem]"><span className="sr-only">{p.title}</span></TransitionLink>
              <Photo id={p.img} alt="" sizes="(min-width:768px) 50vw, 100vw" className="absolute inset-0 rounded-[2rem]" />
              <div className="absolute inset-x-3 bottom-3 z-10 rounded-[1.4rem] bg-navy-deep p-5 text-warm md:p-6">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr] max-md:grid-rows-[1fr]">
                  <p className="overflow-hidden text-warm/75"><span className="mt-2 block">{p.text}</span></p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
