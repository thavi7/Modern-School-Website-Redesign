import { useState } from 'react'
import { Check } from 'lucide-react'
import { admissionSteps, dates, documents, eligibility } from '../data/content'
import PageHero from '../components/sections/PageHero'
import Timeline from '../components/sections/Timeline'
import Words from '../components/ui/Words'
import ValidatedForm from '../components/ui/ValidatedForm'

const fields = [
  { name: 'parent', label: 'Parent or guardian name', required: true, half: true, auto: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, half: true, auto: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', half: true, auto: 'tel' },
  { name: 'child', label: "Child's name", required: true, half: true },
  { name: 'grade', label: 'Grade applying for', type: 'select', required: true, half: true, options: ['Grade 1', 'Grades 2 to 5', 'Grades 6 to 8', 'Grades 9 to 10', 'Grades 11 to 12'] },
  { name: 'visit', label: 'Preferred visit', type: 'select', half: true, options: ['Open day, 22 Nov 2026', 'Private tour, weekday', 'Private tour, Saturday'] },
  { name: 'message', label: 'Anything we should know?', type: 'textarea', placeholder: 'Interests, questions, support needs' },
]

function Checklist() {
  const [done, setDone] = useState({})
  const count = Object.values(done).filter(Boolean).length
  return (
    <div>
      <ul className="border-t border-navy/20">
        {documents.map((d) => (
          <li key={d} className="border-b border-navy/20">
            <label className="flex cursor-pointer items-center gap-4 py-4">
              <input type="checkbox" checked={!!done[d]} onChange={() => setDone((s) => ({ ...s, [d]: !s[d] }))} className="peer sr-only" />
              <span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-md border border-navy/40 transition-colors peer-checked:border-sage peer-checked:bg-sage peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gold">{done[d] && <Check className="size-4 text-warm" />}</span>
              <span className={done[d] ? 'text-navy/50 line-through' : ''}>{d}</span>
            </label>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm font-medium text-navy/65" aria-live="polite">{count} of {documents.length} gathered</p>
    </div>
  )
}

export default function Admissions() {
  return (
    <>
      <PageHero title="Your place at AV1, step by step." text="A clear process, a real conversation with our team, and an answer by 20 February. No entrance exams for young children." img="study" alt="Students studying together" />

      <section className="section bg-warm">
        <div className="wrap">
          <Words text="How admission works." className="title max-w-2xl" />
          <div className="mt-16"><Timeline items={admissionSteps} /></div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="wrap grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <Words text="Eligibility." className="title" />
            <div className="mt-10 overflow-x-auto">
              <table className="w-full min-w-[32rem] border-collapse text-left">
                <caption className="sr-only">Eligibility by grade</caption>
                <thead><tr className="border-b border-navy/30 text-sm text-navy/65"><th scope="col" className="py-3 pr-4 font-semibold">Grade</th><th scope="col" className="py-3 pr-4 font-semibold">Age by 31 March</th><th scope="col" className="py-3 font-semibold">What we look at</th></tr></thead>
                <tbody>
                  {eligibility.map((r) => (
                    <tr key={r.stage} className="border-b border-navy/15 align-top"><th scope="row" className="py-5 pr-4 font-bold">{r.stage}</th><td className="py-5 pr-4">{r.age}</td><td className="py-5 text-navy/75">{r.note}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:col-span-5">
            <Words text="Documents to gather." className="title" />
            <p data-reveal className="mb-8 mt-4 text-navy/70">Tick them off as you collect them. Your progress is not saved.</p>
            <Checklist />
          </div>
        </div>
      </section>

      <section className="section bg-navy-deep text-warm">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <Words text="Important dates, 2027 intake." className="title md:col-span-5" />
          <dl data-stagger className="md:col-span-7">
            {dates.map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-6 border-b border-warm/20 py-5 first:border-t">
                <dt className="text-lg text-warm/80">{k}</dt>
                <dd className="text-right text-xl font-bold text-gold md:text-2xl">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="enquire" className="section bg-sand">
        <div className="wrap grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Words text="Start with an enquiry." className="title" />
            <p data-reveal className="mt-6 text-lg text-navy/75">Tell us a little about your child. A member of the admissions team will reply within two working days.</p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ValidatedForm fields={fields} submitLabel="Send enquiry" successTitle="Thank you. Your enquiry is ready." successText="In a real deployment, our admissions team would now reply within two working days with next steps and visit options." resetLabel="Start another enquiry" />
          </div>
        </div>
      </section>
    </>
  )
}
