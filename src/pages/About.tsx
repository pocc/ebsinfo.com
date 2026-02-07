import headshot from '../assets/images/jim-jacobs-headshot.jpg'

export function About() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1>About EBSinfo</h1>
        <div className="mt-8 flex flex-col gap-8 sm:flex-row">
          <img
            src={headshot}
            alt="Jim Jacobs, PhD — Founder of EBSinfo"
            className="h-56 w-44 shrink-0 rounded-lg object-cover"
          />
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              EBSinfo specializes in environmental science forensic studies,
              helping clients identify and mitigate sources of chemical and
              biological contamination in the environment.
            </p>
            <p>
              Our team brings decades of experience in environmental forensics,
              contamination assessment, and litigation support.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
