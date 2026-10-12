import { useLayoutEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import useScrollFx from '../../hooks/useScrollFx'
import { scrollToTop } from '../../lib/lenis'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()
  const ref = useRef(null)
  useLayoutEffect(() => { scrollToTop() }, [pathname]) // also covers browser back/forward
  useScrollFx(ref, [pathname])
  return (
    <div ref={ref}>
      <a href="#main" className="sr-only z-[200] rounded-full bg-gold px-5 py-3 font-semibold text-navy-deep focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none"><Outlet /></main>
      <Footer />
    </div>
  )
}
