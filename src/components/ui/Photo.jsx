import { useState } from 'react'
import { IMG, u, srcSet, fallback } from '../../lib/images'

/**
 * Image container used everywhere. Layers (outer to inner):
 *   container (rounded, overflow hidden; clip-path masks act here)
 *   [data-parallax] drifting layer      -> scrubbed by useScrollFx when parallax > 0
 *   [data-zoom]     settle-in scale     -> mask reveals
 *   img             hover zoom (CSS)
 * Falls back to a seeded placeholder, then to a flat navy block, if the photo fails to load.
 */
export default function Photo({ id, alt = '', className = '', parallax = 0, mask = false, intro = false, eager = false, zoom = true, sizes = '100vw', position = 'center' }) {
  const [stage, setStage] = useState(0)
  const key = IMG[id] || id
  const attrs = mask ? { 'data-mask': '' } : intro ? { 'data-intro-mask': '' } : {}
  const onError = () => setStage((s) => s + 1)

  return (
    <div {...attrs} className={`group/photo isolate overflow-hidden bg-navy-soft ${/(^|\s)!?(absolute|fixed)(\s|$)/.test(className) ? '' : 'relative'} ${className}`}>
      <div data-parallax={parallax || undefined} className={`absolute inset-x-0 ${parallax ? '-inset-y-[12%]' : 'inset-y-0'}`}>
        <div data-zoom className="h-full w-full">
          {stage < 2 && (
            <img
              src={stage === 0 ? u(key, 1400) : fallback(key)}
              srcSet={stage === 0 ? srcSet(key) : undefined}
              sizes={sizes}
              alt={alt}
              loading={eager ? 'eager' : 'lazy'}
              decoding="async"
              onError={onError}
              style={{ objectPosition: position }}
              className={`h-full w-full object-cover transition-transform duration-[1400ms] ease-out ${zoom ? 'group-hover/photo:scale-[1.06]' : ''}`}
            />
          )}
        </div>
      </div>
    </div>
  )
}
