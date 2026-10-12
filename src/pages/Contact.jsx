import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { school } from '../data/content'
import PageHero from '../components/sections/PageHero'
import Words from '../components/ui/Words'
import ValidatedForm from '../components/ui/ValidatedForm'

const fields = [
  { name: 'name', label: 'Your name', required: true, half: true, auto: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, half: true, auto: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', half: true, auto: 'tel' },
  { name: 'topic', label: 'Topic', type: 'select', required: true, half: true, options: ['Admissions', 'Campus visit', 'Fees and scholarships', 'Something else'] },
  { name: 'message', label: 'Message', type: 'textarea', required: true, minLength: 10, placeholder: 'How can we help?' },
]

function MapPlaceholder() {
  return (
    <figure data-reveal className="overflow-hidden rounded-[2rem] border border-navy/15 bg-sand">
      <svg viewBox="0 0 800 420" role="img" aria-label="Static map placeholder showing the school marked at the centre of a street grid" className="block w-full">
        <rect width="800" height="420" fill="#EFE8D8" />
        <g stroke="#FAF7F0" strokeWidth="14" strokeLinecap="round" fill="none">
          <path d="M0 120H800M0 300H800M160 0V420M420 0V420M660 0V420" />
          <path d="M0 380 C 200 300, 500 400, 800 220" strokeWidth="22" />
        </g>
        <rect x="470" y="150" width="150" height="100" rx="14" fill="#3F7D63" opacity=".35" />
        <rect x="190" y="150" width="190" height="110" rx="14" fill="#1B3157" opacity=".12" />
        <g transform="translate(420 195)">
          <circle r="34" fill="#B89A4E" opacity=".3" />
          <path d="M0 22 C-22 -2 -22 -26 0 -26 C22 -26 22 -2 0 22Z" fill="#0E1F3D" transform="translate(0 -4)" />
          <circle cy="-18" r="6" fill="#FAF7F0" />
        </g>
      </svg>
      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-navy/15 bg-warm px-6 py-4 text-sm">
        <span className="text-navy/70">Static map placeholder, not to scale.</span>
        <a className="link-line font-semibold" target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(school.address.join(', '))}`}>Open in Google Maps (new tab)</a>
      </figcaption>
    </figure>
  )
}

export default function Contact() {
  const details = [
    { Icon: MapPin, label: 'Address', body: <>{school.address[0]}<br />{school.address[1]}</> },
    { Icon: Phone, label: 'Phone', body: <a className="link-line" href={`tel:${school.phone.replace(/[^+\d]/g, '')}`}>{school.phone}</a> },
    { Icon: Mail, label: 'Email', body: <a className="link-line" href={`mailto:${school.email}`}>{school.email}</a> },
  ]
  return (
    <>
      <PageHero title="Come and say hello." text="Questions about a place, a visit or a particular child's needs? Write to us or drop in. A real person will answer." img="teacher" alt="A teacher talking with a student" />

      <section className="section bg-warm">
        <div className="wrap grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Words text="Find us, call us, write to us." className="title" />
            <ul data-stagger className="mt-12 space-y-8">
              {details.map(({ Icon, label, body }) => (
                <li key={label} className="flex gap-5">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-sand"><Icon aria-hidden="true" className="size-5" /></span>
                  <div><h3 className="text-sm font-semibold text-navy/60">{label}</h3><p className="mt-1 text-lg font-semibold">{body}</p></div>
                </li>
              ))}
              <li className="flex gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-sand"><Clock aria-hidden="true" className="size-5" /></span>
                <div className="w-full">
                  <h3 className="text-sm font-semibold text-navy/60">Opening hours</h3>
                  <dl className="mt-2 divide-y divide-navy/10">
                    {school.hours.map(([d, t]) => <div key={d} className="flex justify-between gap-4 py-2"><dt>{d}</dt><dd className="font-semibold">{t}</dd></div>)}
                  </dl>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <h2 className="mb-8 text-3xl font-bold">Send a message</h2>
            <ValidatedForm fields={fields} submitLabel="Send message" successTitle="Message ready to send." successText="In a real deployment, the office would reply within one working day." resetLabel="Write another message" />
          </div>
        </div>
      </section>

      <section className="bg-warm pb-24 md:pb-36"><div className="wrap"><MapPlaceholder /></div></section>
    </>
  )
}
