import { achievementStats, achievements } from '../../data/content'
import Photo from '../ui/Photo'
import Words from '../ui/Words'

export default function Achievements() {
  return (
    <section className="section bg-sand">
      <div className="wrap">
        <Words text="Proof that effort shows." className="title max-w-2xl" />
        <dl data-stagger className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-y border-navy/15 py-10 md:grid-cols-4">
          {achievementStats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end">
              <dt className="mt-2 max-w-[14rem] text-sm text-navy/70">{s.label}</dt>
              <dd className="text-5xl font-extrabold tracking-tight text-navy md:text-6xl"><span data-count={s.value} data-suffix={s.suffix}>{s.value}{s.suffix}</span></dd>
            </div>
          ))}
        </dl>
        <ul className="mt-20 grid gap-x-6 gap-y-16 md:grid-cols-12">
          {achievements.map((a) => (
            <li key={a.title} className={a.cls.split(' ').filter((c) => c.startsWith('md:')).join(' ')}>
              <Photo mask id={a.img} alt={a.title} parallax={5} sizes="(min-width:768px) 55vw, 100vw" className={`rounded-[2rem] ${a.cls.split(' ').filter((c) => !c.startsWith('md:')).join(' ')}`} />
              <div data-reveal className="mt-5 flex gap-5">
                <p className="text-xl font-bold text-gold">{a.year}</p>
                <div><h3 className="text-xl font-bold">{a.title}</h3><p className="mt-1 max-w-md text-navy/70">{a.text}</p></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
