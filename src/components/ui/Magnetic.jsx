import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'

/** Wrapper that nudges its child toward the pointer. Disabled on touch and for reduced motion. */
export default function Magnetic({ children, strength = 0.28, className = 'inline-block' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return
    const x = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3' })
    const y = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3' })
    const move = (e) => {
      const r = el.getBoundingClientRect()
      x((e.clientX - (r.left + r.width / 2)) * strength)
      y((e.clientY - (r.top + r.height / 2)) * strength)
    }
    const leave = () => { x(0); y(0) }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
      gsap.set(el, { clearProps: 'transform' })
    }
  }, [strength])
  return <span ref={ref} className={className}>{children}</span>
}
