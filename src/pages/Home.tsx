import { Link } from 'react-router-dom'
import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.gif'
import gallery3 from '../assets/images/gallery-3.jpg'
import gallery4 from '../assets/images/gallery-4.jpg'
import gallery5 from '../assets/images/gallery-5.jpg'
import gallery6 from '../assets/images/gallery-6.gif'

const galleryImages = [
  { src: gallery1, alt: 'Sample collection in laboratory vial' },
  { src: gallery2, alt: 'Microbial degradation of oil under microscope' },
  { src: gallery3, alt: 'Laboratory flask analysis with EBS samples' },
  { src: gallery4, alt: 'Field assessment and environmental surveying' },
  { src: gallery5, alt: 'Environmental remediation site with treatment equipment' },
  { src: gallery6, alt: 'Pseudomonas microbe microscopy' },
] as const

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark py-20 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Forensic Studies &amp; Environmental Science
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            EBSinfo provides expert environmental science forensic studies to
            identify and mitigate sources of chemical and biological
            contamination in the environment.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              to="/contact"
              className="rounded-md bg-brand-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
            >
              Get in Touch
            </Link>
            <Link
              to="/about"
              className="rounded-md border border-gray-400 px-6 py-3 text-sm font-semibold text-gray-200 transition-colors hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6">
          <h2>Our Work</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img) => (
              <div
                key={img.alt}
                className="overflow-hidden rounded-lg"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-48 w-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2>Our Services</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Environmental Forensics',
                desc: 'Identifying sources and timing of chemical releases through scientific analysis.',
              },
              {
                title: 'Contamination Assessment',
                desc: 'Comprehensive evaluation of chemical and biological contamination in soil, water, and air.',
              },
              {
                title: 'Expert Consultation',
                desc: 'Litigation support and expert testimony for environmental cases.',
              },
            ].map((svc) => (
              <div
                key={svc.title}
                className="rounded-lg border border-gray-200 p-6"
              >
                <h3>{svc.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
