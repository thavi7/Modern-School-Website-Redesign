import * as Icons from 'lucide-react'
import { strengths } from '../../data/content'
import Words from '../ui/Words'

export default function WhyChoose() {
  return (
    <section className="section bg-warm">
      <div className="wrap grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <Words text="Why families choose Ashgrove." className="title" />
            <p data-reveal className="mt-6 max-w-sm text-lg text-navy/75">Five things we will not compromise on, however the school grows.</p>
          </div>
        </div>
        <ul className="md:col-span-7" data-stagger>
          {strengths.map((s) => {
            const Icon = Icons[s.icon]
            return (
              <li key={s.title} className="group grid grid-cols-[auto_1fr] gap-6 border-t border-navy/15 py-9 last:border-b md:gap-8">
                <span className="grid size-14 place-items-center rounded-full border border-navy/20 transition-colors duration-500 group-hover:border-gold group-hover:bg-gold"><Icon aria-hidden="true" className="size-6" /></span>
                <div className="transition-transform duration-500 group-hover:translate-x-2">
                  <h3 className="text-2xl font-bold md:text-3xl">{s.title}</h3>
                  <p className="mt-3 max-w-lg text-navy/75">{s.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
