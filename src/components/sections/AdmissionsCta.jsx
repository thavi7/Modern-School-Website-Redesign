import Photo from '../ui/Photo'
import Words from '../ui/Words'
import Button from '../ui/Button'

export default function AdmissionsCta({ img = 'hero' }) {
  return (
    <section className="relative isolate flex min-h-[85svh] items-center overflow-hidden text-warm">
      <Photo id={img} parallax={9} zoom={false} className="!absolute inset-0 -z-10" sizes="100vw" />
      <div className="absolute inset-0 -z-10 bg-navy-deep/75" aria-hidden="true" />
      <div className="wrap py-24">
        <Words text="Your Child's Journey Starts Here." className="display max-w-4xl" />
        <p data-reveal className="lead mt-8 max-w-xl text-warm/85">Applications for the 2027 intake open on 1 November. Visit us, meet the teachers, and see whether AV1 feels like home.</p>
        <div data-reveal className="mt-10 flex flex-wrap gap-4">
          <Button to="/admissions" variant="gold">Explore Admissions</Button>
          <Button to="/contact" variant="outline">Book a campus visit</Button>
        </div>
      </div>
    </section>
  )
}
