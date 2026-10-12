import { useRef, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { gsap, useGSAP } from '../../lib/gsap'
import Button from './Button'

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE = /^[+()\d\s-]{7,18}$/

/** Frontend-only form: validates on blur and submit, then shows a demo success state. Nothing is sent anywhere. */
export default function ValidatedForm({ fields, submitLabel, successTitle, successText, resetLabel }) {
  const blank = Object.fromEntries(fields.map((f) => [f.name, '']))
  const [vals, setVals] = useState(blank)
  const [errs, setErrs] = useState({})
  const [done, setDone] = useState(false)
  const form = useRef(null)
  const success = useRef(null)

  const check = (f, raw) => {
    const v = raw.trim()
    if (f.required && !v) return `${f.label} is required.`
    if (f.type === 'email' && v && !EMAIL.test(v)) return 'Enter an email address like name@example.com.'
    if (f.type === 'tel' && v && !PHONE.test(v)) return 'Enter a phone number using digits, spaces, + or -.'
    if (f.minLength && v && v.length < f.minLength) return `Write at least ${f.minLength} characters.`
    return ''
  }
  const onChange = (e) => {
    const { name, value } = e.target
    setVals((s) => ({ ...s, [name]: value }))
    if (errs[name]) setErrs((s) => ({ ...s, [name]: check(fields.find((f) => f.name === name), value) }))
  }
  const onBlur = (e) => {
    const f = fields.find((x) => x.name === e.target.name)
    setErrs((s) => ({ ...s, [f.name]: check(f, e.target.value) }))
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const next = {}
    fields.forEach((f) => { const m = check(f, vals[f.name]); if (m) next[f.name] = m })
    setErrs(next)
    const first = Object.keys(next)[0]
    if (first) { form.current.querySelector(`[name="${first}"]`)?.focus(); return }
    setDone(true)
  }
  const reset = () => { setVals(blank); setErrs({}); setDone(false) }

  useGSAP(() => {
    if (done && success.current) {
      success.current.focus()
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches)
        gsap.from(success.current.children, { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' })
    }
  }, { dependencies: [done] })

  if (done)
    return (
      <div ref={success} tabIndex={-1} role="status" className="rounded-[2rem] border border-navy/15 bg-warm p-8 outline-none md:p-12">
        <CheckCircle2 aria-hidden="true" className="size-10 text-sage" />
        <h3 className="mt-6 text-3xl font-bold">{successTitle}</h3>
        <p className="mt-3 max-w-md text-navy/75">{successText}</p>
        <p className="mt-2 text-sm text-navy/55">This is a demo. Nothing was sent.</p>
        <button type="button" onClick={reset} className="link-line mt-8 font-semibold">{resetLabel}</button>
      </div>
    )

  return (
    <form ref={form} onSubmit={onSubmit} noValidate data-stagger className="grid gap-x-8 gap-y-6 md:grid-cols-2">
      {fields.map((f) => {
        const err = errs[f.name]
        const common = {
          id: `f-${f.name}`, name: f.name, value: vals[f.name], onChange, onBlur,
          'aria-invalid': err ? 'true' : 'false', 'aria-describedby': err ? `e-${f.name}` : undefined,
          required: f.required, autoComplete: f.auto, className: 'field',
        }
        return (
          <div key={f.name} className={f.half ? '' : 'md:col-span-2'}>
            <label htmlFor={common.id} className="text-sm font-semibold">
              {f.label}{f.required && <span className="text-navy/50"> (required)</span>}
            </label>
            {f.type === 'textarea' ? (
              <textarea rows={4} placeholder={f.placeholder} {...common} />
            ) : f.type === 'select' ? (
              <select {...common}>
                <option value="">Choose one</option>
                {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            ) : (
              <input type={f.type || 'text'} placeholder={f.placeholder} {...common} />
            )}
            {err && <p id={`e-${f.name}`} className="mt-1 text-sm font-medium text-red-800">{err}</p>}
          </div>
        )
      })}
      <div className="md:col-span-2"><Button type="submit" variant="dark">{submitLabel}</Button></div>
    </form>
  )
}
