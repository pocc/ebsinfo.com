import headshot from '../assets/images/jim-jacobs-headshot.jpg'

const books = [
  {
    title:
      'Environmental Considerations Associated with Hydraulic Fracturing Operations: Adjusting to the Shale Revolution in a Green World',
    authors: 'James A. Jacobs and Stephen M. Testa',
    publisher: 'Wiley',
    year: 2019,
    pages: 576,
    description:
      'The authors include an overview of the historical development of hydraulic fracturing and the technology currently employed. The book also explores the risk, prevention, and mitigation factors that are associated with fracturing. The authors also include legal cases, regulatory issues, and data on the cost of recovery. The volume presents audit checklists for gathering critical information and documentation to support the reliability of the current environmental conditions related to fracking operations and the impact fracking can have on a community.',
  },
  {
    title:
      'Oil Spills and Gas Leaks: Environmental Response, Prevention and Cost Recovery',
    authors: 'Stephen M. Testa and James A. Jacobs',
    publisher: 'McGraw-Hill',
    year: 2014,
    pages: 578,
    description:
      'Oil Spills and Gas Leaks highlights the complex nature of assessment, exposure pathway analysis, sensitive receptor evaluation related to oil spills and gas leaks. The sampling methods and remediation of petroleum hydrocarbons are described, as well as the oil spill and gas leak behavior, and environmental impact mitigation. The book discusses engineering techniques; long-term biological and environmental effects; litigation and cost recovery, and legislation in overlapping jurisdictions.',
  },
  {
    title:
      'Acid Mine Drainage, Rock Drainage, and Acid Sulfate Soils: Causes, Assessment, Prediction, Prevention, and Remediation',
    authors: 'James A. Jacobs, Jay H. Lehr, and Stephen M. Testa',
    publisher: 'Wiley',
    year: 2014,
    pages: 520,
    description:
      'Featuring contributions from a variety of authors, this book explores the biogeochemistry of acid mine drainage, rock drainage, and acid sulfate soils. It describes how to predict, prevent, and remediate the environmental impact of acid drainage and the oxidation of sulfides, offering sampling and analytical methods. Jacobs co-authored 18 of the 36 chapters. Readers will discover new approaches for recovering valuable resources from acid mine drainage, including bioleaching.',
  },
  {
    title: 'Chromium(VI) Handbook',
    authors: 'Jacques Guertin, James A. Jacobs, and Cynthia P. Avakian',
    publisher: 'CRC Press',
    year: 2004,
    pages: 800,
    description:
      'Put together by a team of scientists, engineers, regulators, and lawyers, Chromium(VI) Handbook consolidates the latest literature on this topic. The broad scope of this book fills the need for a comprehensive resource on hexavalent chromium, improving understanding of this contaminant at a time when the extent and degree of the problem is still being assessed. It addresses naturally occurring and anthropogenic sources, geology and geochemistry, toxicity, treatment, regulatory issues and legal cases, and recommendations.',
  },
  {
    title: 'MTBE: Effects on Soil and Groundwater Resources',
    authors: 'James A. Jacobs, Jacques Guertin, and Christy Herron',
    publisher: 'CRC Press',
    year: 2001,
    pages: 264,
    description:
      'As one of the first books written about MTBE, the volume was written by a team of scientists, engineers, and toxicologists. The book examines MTBE as a technical solution designed to reduce air emissions from vehicles and focuses on the health effects of MTBE caused by drinking contaminated surface or groundwater. The book addresses the areas of mapping, selected concepts for remediation of soil and groundwater, and environmental risk assessment, including coverage of dermal sorption by bathing or washing in MTBE-contaminated water.',
  },
] as const

export function Books() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1>Books by EBS Principal in Environmental Science</h1>

        {/* Author intro */}
        <div className="mt-8 flex items-center gap-4">
          <img
            src={headshot}
            alt="Jim Jacobs, PhD"
            className="h-20 w-20 shrink-0 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-900">
              James A. Jacobs, Ph.D.
            </p>
            <p className="text-sm text-gray-500">
              Certified Hydrogeologist &bull; Registered Geologist
            </p>
          </div>
        </div>
        <p className="mt-6 text-gray-700 leading-relaxed">
          EBS Principal Scientist James A. Jacobs served as project manager,
          designer, co-editor and co-author of the following technical books.
          Books and articles reflect a focus on exposure pathway analysis,
          sensitive receptors, contaminants in the environment, and the
          assessment and remediation of volatile toxins.
        </p>

        {/* Book list */}
        <div className="mt-12 space-y-10">
          {books.map((book) => (
            <article
              key={book.title}
              className="border-l-4 border-brand-green pl-6"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {book.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {book.authors} &mdash; {book.publisher}, {book.year},{' '}
                {book.pages} pages
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                {book.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
