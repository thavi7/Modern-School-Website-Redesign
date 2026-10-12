import Hero from '../components/home/Hero'
import Intro from '../components/home/Intro'
import AcademicsGrid from '../components/home/AcademicsGrid'
import CampusLife from '../components/home/CampusLife'
import WhyChoose from '../components/home/WhyChoose'
import Achievements from '../components/home/Achievements'
import Testimonials from '../components/sections/Testimonials'
import AdmissionsCta from '../components/sections/AdmissionsCta'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <AcademicsGrid />
      <CampusLife />
      <WhyChoose />
      <Achievements />
      <Testimonials />
      <AdmissionsCta />
    </>
  )
}
