import { useRef } from 'react'
import useHeroIntro from '../../hooks/useHeroIntro'
import Words from '../ui/Words'
import Photo from '../ui/Photo'

/** Top section for inner pages: big title, short intro, one masked photograph. */
export default function PageHero({ title, text, img, alt }) {
  const root = useRef(null)
  useHeroIntro(root)
  return (
    <section ref={root} className="relative overflow-hidden bg-navy-deep text-warm">
      <div className="wrap grid gap-10 pb-16 pt-36 md:grid-cols-12 md:items-end md:pb-24 md:pt-44">
        <div className="md:col-span-7">
          <Words intro as="h1" text={title} className="display" />
          <p data-intro-fade className="lead mt-8 max-w-xl text-warm/75">{text}</p>
        </div>
        <Photo intro eager id={img} alt={alt} parallax={6} sizes="(min-width:768px) 40vw, 100vw" className="aspect-[4/3] rounded-[2rem] md:col-span-5 md:aspect-[4/5]" />
      </div>
    </section>
  )
}
