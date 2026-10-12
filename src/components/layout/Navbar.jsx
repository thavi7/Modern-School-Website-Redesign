import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { gsap, useGSAP } from '../../lib/gsap'
import { setScrollLocked } from '../../lib/lenis'
import { nav, school } from '../../data/content'
import TransitionLink from '../ui/TransitionLink'
import Button from '../ui/Button'
import Logo from './Logo'

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menu = useRef(null)
  const toggle = useRef(null)
  const wasOpen = useRef(false)

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 60)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  // GSAP menu reveal. Not reverted on update, so the open state persists between runs.
  useGSAP(() => {
    const el = menu.current
    const items = el.querySelectorAll('[data-menu-item]')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (open) {
      setScrollLocked(true)
      gsap.killTweensOf([el, items])
      gsap.set(el, { visibility: 'visible' })
      if (reduce) { gsap.set(el, { clipPath: 'inset(0% 0% 0% 0%)' }); gsap.set(items, { yPercent: 0 }) }
      else {
        gsap.fromTo(el, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.8, ease: 'expo.inOut' })
        gsap.fromTo(items, { yPercent: 115 }, { yPercent: 0, duration: 0.9, ease: 'power4.out', stagger: 0.07, delay: 0.35 })
      }
      el.querySelector('a')?.focus({ preventScroll: true })
    } else if (wasOpen.current) {
      setScrollLocked(false)
      gsap.killTweensOf(el)
      if (reduce) gsap.set(el, { visibility: 'hidden' })
      else gsap.to(el, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.6, ease: 'expo.inOut', onComplete: () => gsap.set(el, { visibility: 'hidden' }) })
      toggle.current?.focus({ preventScroll: true })
    }
    wasOpen.current = open
  }, { dependencies: [open], scope: menu })

  // Escape closes; Tab stays inside the open menu.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') return setOpen(false)
      if (e.key !== 'Tab') return
      const f = [toggle.current, ...menu.current.querySelectorAll('a')]
      const first = f[0], last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled && !open
  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-[80] text-warm transition-[background-color,padding] duration-500 ${solid ? 'border-b border-warm/10 bg-navy-deep py-3' : 'bg-transparent py-5 md:py-7'}`}>
        <div className="wrap flex items-center justify-between gap-6">
          <TransitionLink to="/" aria-label={`${school.name}, home`}><Logo /></TransitionLink>
          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {nav.map((n) => (
              <TransitionLink key={n.to} to={n.to} aria-current={pathname === n.to ? 'page' : undefined} className="link-line text-[0.95rem] font-medium">{n.label}</TransitionLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block"><Button to="/admissions" variant="gold" className="!px-6 !py-3">Apply Now</Button></div>
            <button ref={toggle} type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} className="grid size-11 place-items-center rounded-full border border-warm/30 lg:hidden">
              {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <div ref={menu} id="mobile-menu" style={{ visibility: 'hidden', clipPath: 'inset(0% 0% 100% 0%)' }} className="fixed inset-0 z-[70] overflow-y-auto bg-navy-deep text-warm lg:hidden">
        <nav aria-label="Mobile" className="flex min-h-full flex-col justify-between px-5 pb-10 pt-28">
          <ul className="space-y-1">
            {nav.map((n) => (
              <li key={n.to} className="overflow-hidden">
                <div data-menu-item>
                  <TransitionLink to={n.to} aria-current={pathname === n.to ? 'page' : undefined} className="block py-1 text-[clamp(2.4rem,11vw,4rem)] font-bold leading-tight tracking-tight aria-[current=page]:text-gold">{n.label}</TransitionLink>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 overflow-hidden"><div data-menu-item className="space-y-5">
            <Button to="/admissions" variant="gold">Apply Now</Button>
            <p className="text-sm text-warm/60">{school.phone}<br />{school.email}</p>
          </div></div>
        </nav>
      </div>
    </>
  )
}
