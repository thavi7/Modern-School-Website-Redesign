import { useRef } from 'react'
import { Award, Users } from 'lucide-react'
import { gsap, useGSAP } from '../../lib/gsap'
import useHeroIntro from '../../hooks/useHeroIntro'
import Words from '../ui/Words'
import Photo from '../ui/Photo'
import Button from '../ui/Button'

export default function Hero() {
  const root = useRef(null)
  useHeroIntro(root)

  // Gentle float on the info chips and scroll drift on the copy.
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.utils.toArray('[data-float]').forEach((el, i) =>
        gsap.to(el, { y: i % 2 ? 10 : -10, duration: 3 + i * 0.6, ease: 'sine.inOut', yoyo: true, repeat: -1 })
      )
      gsap.to('[data-hero-copy]', { yPercent: -12, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } })
    })
    return () => mm.revert()
  }, { scope: root })

  return (
    <section ref={root} className="relative min-h-[100svh] overflow-hidden bg-navy-deep text-warm">
      <div className="wrap relative flex min-h-[100svh] flex-col justify-end gap-10 pb-10 pt-32 lg:block lg:pb-0 lg:pt-0">
        <div data-hero-copy className="relative z-10 lg:absolute lg:bottom-16 lg:left-10 lg:w-[52%]">
          <Words intro as="h1" text="Where Young Minds Become Extraordinary." className="display !text-[clamp(2.6rem,5.3vw,5rem)]" />
          <p data-intro-fade className="lead mt-7 max-w-lg text-warm/75">We teach children to ask better questions, finish what they start and be kind while doing it, from first grade to graduation.</p>
          <div data-intro-fade className="mt-9 flex flex-wrap gap-4">
            <Button to="/about" variant="gold">Explore Our School</Button>
            <Button to="/admissions" variant="outline">Discover Admissions</Button>
          </div>
        </div>

        <div className="relative lg:absolute lg:bottom-8 lg:right-10 lg:top-28 lg:w-[50%]">
          <Photo intro eager id="hero" alt="Graduating students throwing their caps into the air" parallax={8} sizes="(min-width:1024px) 50vw, 100vw" className="h-[50svh] rounded-[2rem] lg:h-full lg:rounded-[3rem]" />
          <div data-intro-fade className="absolute -left-2 bottom-8 z-10 lg:-left-20 lg:bottom-20">
            <div data-float className="flex items-center gap-3 rounded-2xl bg-warm p-4 text-navy">
              <span className="grid size-11 place-items-center rounded-full bg-gold"><Award aria-hidden="true" className="size-5 text-navy-deep" /></span>
              <p><span className="block text-2xl font-extrabold leading-none"><span data-count="28" data-delay="1.8">28</span></span><span className="text-sm text-navy/70">years of excellence</span></p>
            </div>
          </div>
          <div data-intro-fade className="absolute right-3 top-5 z-10 lg:-right-2 lg:top-10">
            <div data-float className="flex items-center gap-3 rounded-2xl bg-navy-deep p-4 text-warm ring-1 ring-warm/15">
              <span className="grid size-11 place-items-center rounded-full bg-sage"><Users aria-hidden="true" className="size-5 text-warm" /></span>
              <p><span className="block text-2xl font-extrabold leading-none"><span data-count="1850" data-delay="1.8">1,850</span></span><span className="text-sm text-warm/70">students on campus</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
