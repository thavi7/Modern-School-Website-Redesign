import { useRef } from 'react'
import { faculty, milestones, values } from '../data/content'
import PageHero from '../components/sections/PageHero'
import Timeline from '../components/sections/Timeline'
import AdmissionsCta from '../components/sections/AdmissionsCta'
import Photo from '../components/ui/Photo'
import Words from '../components/ui/Words'

export default function About() {
  return (
    <>
      <PageHero title="A school shaped by the people in it." text="Since 1998 AV1 has grown from sixty students in an orchard house to a community of nearly two thousand, without losing the habit of knowing every child by name." img="campus" alt="The AV1 main building" />

      <section className="section bg-warm">
        <div className="wrap grid gap-14 md:grid-cols-12">
          <Words text="Our history and philosophy." className="title md:col-span-5" />
          <div data-stagger className="space-y-6 text-lg text-navy/80 md:col-span-6 md:col-start-7">
            <p>AV1 began as a conversation between six teachers who believed that school could be warmer and more demanding at the same time. They rented an orchard house, planted a vegetable garden and opened the doors to sixty children.</p>
            <p>Our philosophy has not changed much since. We believe children are capable of more than we usually ask of them, provided they feel safe, known and trusted. So we keep classes small, we teach reading and arithmetic thoroughly, and we give students real responsibility early.</p>
            <p>We do not chase rankings. We measure ourselves by whether a graduate can think clearly, work with others and take care of the people around them.</p>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="wrap">
          <div className="grid gap-4 md:grid-cols-12">
            <div data-reveal className="rounded-[2rem] bg-navy-deep p-8 text-warm md:col-span-7 md:p-14">
              <h2 className="text-3xl font-bold md:text-4xl">Mission</h2>
              <p className="mt-5 max-w-xl text-xl text-warm/80">To give every child an education that builds knowledge, character and the confidence to use both well.</p>
            </div>
            <div data-reveal className="rounded-[2rem] border border-navy/20 p-8 md:col-span-5 md:p-14">
              <h2 className="text-3xl font-bold md:text-4xl">Vision</h2>
              <p className="mt-5 text-xl text-navy/80">Graduates who stay curious, act with integrity and leave every place a little better than they found it.</p>
            </div>
          </div>
          <h2 className="title mt-24">Core values</h2>
          <ul data-stagger className="mt-10 grid gap-x-10 border-t border-navy/20 md:grid-cols-5">
            {values.map((v) => (
              <li key={v.title} className="border-b border-navy/20 py-7 md:border-b-0 md:pt-8">
                <h3 className="text-2xl font-bold">{v.title}</h3>
                <p className="mt-2 text-navy/70">{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-warm">
        <div className="wrap grid items-center gap-14 md:grid-cols-12">
          <Photo mask id="woman1" alt="Dr. Helena Voss, Principal" parallax={6} sizes="(min-width:768px) 40vw, 100vw" className="aspect-[4/5] rounded-[2rem] md:col-span-5" />
          <div className="md:col-span-6 md:col-start-7">
            <Words text="A welcome from the Principal." className="title" />
            <div data-stagger className="mt-8 space-y-5 text-lg text-navy/80">
              <p>When families visit, I ask them to watch how the children talk to each other and to adults. That tells you more than any brochure.</p>
              <p>At AV1 we want students who can disagree kindly, try again after failing and take pride in careful work. Our teachers are the reason that happens, and I am grateful to them every day.</p>
              <p>I hope you will come and see for yourself.</p>
            </div>
            <p data-reveal className="mt-8 font-bold">Dr. Helena Voss</p>
            <p data-reveal className="text-navy/65">Principal since 2016</p>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="wrap">
          <Words text="Leadership and faculty." className="title" />
          <ul data-stagger className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3">
            {faculty.map((f, i) => (
              <li key={f.name} className={i % 2 ? 'md:mt-14' : ''}>
                <Photo id={f.img} alt={`${f.name}, ${f.role}`} sizes="(min-width:768px) 30vw, 50vw" className="aspect-[4/5] rounded-[1.6rem]" />
                <h3 className="mt-4 text-lg font-bold md:text-xl">{f.name}</h3>
                <p className="text-navy/65">{f.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-navy-deep text-warm">
        <div className="wrap">
          <Words text="Twenty-eight years, in seven moments." className="title max-w-2xl" />
          <div className="mt-16"><Timeline items={milestones} dark /></div>
        </div>
      </section>
      <AdmissionsCta img="study" />
    </>
  )
}
