import Button from '../components/ui/Button'
import Words from '../components/ui/Words'

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] items-center bg-navy-deep text-warm">
      <div className="wrap">
        <Words as="h1" text="This page has left the building." className="display max-w-3xl" />
        <p className="lead mt-6 max-w-lg text-warm/75">The address may be mistyped, or the page may have moved. Head back home and try again.</p>
        <div className="mt-10"><Button to="/" variant="gold">Back to home</Button></div>
      </div>
    </section>
  )
}
