import { useState } from 'react'
import { spaces } from '../../data/content'
import Photo from '../ui/Photo'
import Words from '../ui/Words'
import Button from '../ui/Button'

/** Immersive spaces: pick a space and the large photograph changes; two smaller layers drift at different speeds. */
export default function CampusLife() {
  const [active, setActive] = useState(0)
  return (
    <section className="section overflow-hidden bg-navy-deep text-warm">
      <div className="wrap">
        <Words text="A campus built for curiosity." className="title max-w-3xl" />
        <div className="mt-16 grid gap-12 md:grid-cols-12">
          <div className="relative md:col-span-7">
            <div data-mask className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-navy-soft" aria-live="polite">
              <div data-parallax="7" className="absolute -inset-y-[10%] inset-x-0">
                <div data-zoom className="relative h-full w-full">
                  {spaces.map((s, i) => (
                    <div key={s.name} aria-hidden={i !== active} className={`absolute inset-0 transition-opacity duration-700 ${i === active ? 'opacity-100' : 'opacity-0'}`}>
                      <Photo id={s.img} alt={i === active ? s.name : ''} zoom={false} sizes="(min-width:768px) 58vw, 100vw" className="h-full w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Photo mask id="reading" alt="A child reading" parallax={14} sizes="25vw" className="absolute -bottom-8 -left-3 hidden aspect-[3/4] w-[26%] rounded-[1.4rem] border-[6px] border-navy-deep md:block lg:-left-10" />
            <Photo mask id="music" alt="Students performing music" parallax={4} sizes="20vw" className="absolute -right-3 -top-8 hidden aspect-square w-[22%] rounded-[1.4rem] border-[6px] border-navy-deep md:block lg:-right-8" />
          </div>
          <div className="md:col-span-5 md:pl-6">
            <ul className="divide-y divide-warm/15 border-y border-warm/15" data-stagger>
              {spaces.map((s, i) => (
                <li key={s.name}>
                  <button type="button" onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} aria-pressed={i === active} className="group block w-full py-5 text-left">
                    <span className={`block text-2xl font-bold transition-all duration-500 md:text-3xl ${i === active ? 'translate-x-3 text-gold' : 'text-warm/70 group-hover:text-warm'}`}>{s.name}</span>
                    <span className={`grid transition-[grid-template-rows] duration-500 ${i === active ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <span className="overflow-hidden"><span className="block pt-2 text-warm/70">{s.text}</span></span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <div data-reveal className="mt-10"><Button to="/campus-life" variant="outline">See life on campus</Button></div>
          </div>
        </div>
      </div>
    </section>
  )
}
