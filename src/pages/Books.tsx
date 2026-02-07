import headshot from '../assets/images/jim-jacobs-headshot.jpg'

export function Books() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1>Books &amp; Publications</h1>
        <div className="mt-8 space-y-8">
          <article className="flex flex-col gap-6 sm:flex-row">
            <img
              src={headshot}
              alt="Jim Jacobs, PhD"
              className="h-48 w-36 shrink-0 rounded-md object-cover"
            />
            <div>
              <h3>Publication Title</h3>
              <p className="mt-1 text-sm text-gray-500">By Jim Jacobs, PhD</p>
              <p className="mt-3 text-gray-700">
                Description of the publication and its relevance to
                environmental forensic science.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
