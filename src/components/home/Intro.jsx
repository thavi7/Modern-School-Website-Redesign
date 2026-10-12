import { stats } from '../../data/content'
import Photo from '../ui/Photo'
import Words from '../ui/Words'
import Button from '../ui/Button'

export default function Intro() {
  return (
    <section className="section bg-warm">
      <div className="wrap grid items-center gap-16 md:grid-cols-12">
        <div className="relative md:col-span-6">
          <Photo mask id="classroom" alt="Children working together at a classroom table" parallax={7} sizes="(min-width:768px) 50vw, 100vw" className="aspect-[4/5] rounded-[2rem]" />
          <Photo mask id="teacher" alt="A teacher helping a student" parallax={5} sizes="40vw" className="absolute -bottom-10 -right-2 hidden aspect-square w-[44%] rounded-[1.5rem] border-[6px] border-warm md:block lg:-right-12" />
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <Words text="More Than Education. A Foundation for Life." className="title" />
          <div data-stagger className="mt-8 space-y-5 text-lg text-navy/80">
            <p>Ashgrove was founded on a simple belief: children learn best when they feel known. Our classes are small, our teachers stay, and every student has an adult who can say what they are good at and what they are working on.</p>
            <p>We pair rigorous teaching with room to wander. Students read widely, build things, perform on stage and run for council, so they leave with knowledge, confidence and a sense of what matters to them.</p>
          </div>
          <dl data-stagger className="mt-12 grid grid-cols-3 gap-6 border-t border-navy/15 pt-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-2 text-sm text-navy/65">{s.label}</dt>
                <dd className="text-4xl font-extrabold tracking-tight md:text-5xl"><span data-count={s.value}>{s.value.toLocaleString('en-IN')}</span></dd>
              </div>
            ))}
          </dl>
          <div data-reveal className="mt-10"><Button to="/about" variant="dark">Our story</Button></div>
        </div>
      </div>
    </section>
  )
}
