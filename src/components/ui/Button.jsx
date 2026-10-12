import { ArrowUpRight } from 'lucide-react'
import Magnetic from './Magnetic'
import TransitionLink from './TransitionLink'

const V = {
  gold: { base: 'bg-gold text-navy-deep', fill: 'bg-warm', label: '' },
  dark: { base: 'bg-navy text-warm', fill: 'bg-gold', label: 'group-hover:text-navy-deep group-focus-visible:text-navy-deep' },
  outline: { base: 'border border-warm/40 text-warm', fill: 'bg-warm', label: 'group-hover:text-navy group-focus-visible:text-navy' },
  outlineDark: { base: 'border border-navy/30 text-navy', fill: 'bg-navy', label: 'group-hover:text-warm group-focus-visible:text-warm' },
}

export default function Button({ to, href, variant = 'gold', children, icon = true, magnetic = true, className = '', ...rest }) {
  const v = V[variant]
  const cls = `group relative inline-flex items-center overflow-hidden rounded-full px-7 py-4 text-[0.95rem] font-semibold ${v.base} ${className}`
  const inner = (
    <>
      <span aria-hidden="true" className={`absolute inset-0 -translate-x-full rounded-full transition-transform duration-500 ease-out group-hover:translate-x-0 group-focus-visible:translate-x-0 ${v.fill}`} />
      <span className={`relative z-10 flex items-center gap-3 transition-colors duration-500 ${v.label}`}>
        {children}
        {icon && <ArrowUpRight aria-hidden="true" className="size-4 transition-transform duration-500 group-hover:rotate-45" />}
      </span>
    </>
  )
  const el = to ? (
    <TransitionLink to={to} className={cls} {...rest}>{inner}</TransitionLink>
  ) : href ? (
    <a href={href} className={cls} {...rest}>{inner}</a>
  ) : (
    <button className={cls} {...rest}>{inner}</button>
  )
  return magnetic ? <Magnetic>{el}</Magnetic> : el
}
