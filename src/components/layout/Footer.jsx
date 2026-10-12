import { useRef, useState } from 'react'
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react'
import { gsap, useGSAP } from '../../lib/gsap'
import { nav, school } from '../../data/content'
import TransitionLink from '../ui/TransitionLink'
import Logo from './Logo'

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com', Icon: Instagram },
  { label: 'Facebook', href: 'https://www.facebook.com', Icon: Facebook },
  { label: 'YouTube', href: 'https://www.youtube.com', Icon: Youtube },
  { label: 'LinkedIn', href: 'https://www.linkedin.com', Icon: Linkedin },
]

export default function Footer() {
  const root = useRef(null)
  const [email, setEmail] = useState('')
  const [state, setState] = useState({ ok: false, err: '' })

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('[data-f]', { yPercent: 18, autoAlpha: 0, duration: 1.1, ease: 'power3.out', stagger: 0.12, scrollTrigger: { trigger: root.current, start: 'top 85%', once: true } })
      gsap.from('[data-wordmark]', { yPercent: 40, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: root.current, start: 'top 60%', once: true } })
    })
    return () => mm.revert()
  }, { scope: root })

  const submit = (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setState({ ok: false, err: 'Enter an email address like name@example.com.' })
    setState({ ok: true, err: '' })
  }

  return (
    <footer ref={root} className="overflow-hidden bg-navy-deep text-warm">
      <div className="wrap grid gap-14 pb-10 pt-24 md:grid-cols-12 md:pt-32">
        <div data-f className="md:col-span-5">
          <Logo />
          <p className="mt-6 max-w-sm text-warm/70">A school where curiosity, character and craft grow together. Open to families who want more than grades.</p>
          <form onSubmit={submit} noValidate className="mt-10 max-w-sm">
            {state.ok ? (
              <p role="status" className="rounded-2xl border border-sage/60 bg-sage/15 p-4 text-sm">You are on the list (demo only, nothing was sent).</p>
            ) : (
              <>
                <label htmlFor="news" className="text-sm font-semibold">Termly newsletter</label>
                <div className="mt-2 flex gap-2 border-b border-warm/30 focus-within:border-gold">
                  <input id="news" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" autoComplete="email" aria-invalid={state.err ? 'true' : 'false'} aria-describedby={state.err ? 'news-err' : undefined} className="min-w-0 flex-1 bg-transparent py-3 text-warm outline-none placeholder:text-warm/40" />
                  <button type="submit" className="px-2 text-sm font-semibold text-gold hover:text-gold-light">Subscribe</button>
                </div>
                {state.err && <p id="news-err" className="mt-2 text-sm text-red-300">{state.err}</p>}
              </>
            )}
          </form>
        </div>
        <nav data-f aria-label="Footer" className="md:col-span-3 md:col-start-7">
          <h2 className="text-sm font-semibold text-warm/50">Explore</h2>
          <ul className="mt-5 space-y-3">
            {nav.map((n) => <li key={n.to}><TransitionLink to={n.to} className="link-line">{n.label}</TransitionLink></li>)}
          </ul>
        </nav>
        <address data-f className="not-italic md:col-span-3">
          <h2 className="text-sm font-semibold text-warm/50">Visit and contact</h2>
          <ul className="mt-5 space-y-4 text-warm/85">
            <li className="flex gap-3"><MapPin aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" /><span>{school.address[0]}<br />{school.address[1]}</span></li>
            <li className="flex gap-3"><Phone aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" /><a className="link-line" href={`tel:${school.phone.replace(/[^+\d]/g, '')}`}>{school.phone}</a></li>
            <li className="flex gap-3"><Mail aria-hidden="true" className="mt-1 size-4 shrink-0 text-gold" /><a className="link-line" href={`mailto:${school.email}`}>{school.email}</a></li>
          </ul>
          <ul className="mt-8 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}><a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`} className="grid size-11 place-items-center rounded-full border border-warm/25 transition-colors hover:bg-warm hover:text-navy"><Icon aria-hidden="true" className="size-4" /></a></li>
            ))}
          </ul>
        </address>
      </div>
      <p data-wordmark aria-hidden="true" className="wrap select-none whitespace-nowrap text-center text-[clamp(4rem,19vw,19rem)] font-extrabold leading-[0.8] tracking-tighter text-warm/[0.07]">AV1</p>
      <div className="wrap flex flex-col justify-between gap-2 border-t border-warm/10 py-6 text-sm text-warm/55 md:flex-row">
        <p>© {new Date().getFullYear()} {school.name}. Demo website with mock content.</p>
        <p>Photography via Unsplash placeholders.</p>
      </div>
    </footer>
  )
}
