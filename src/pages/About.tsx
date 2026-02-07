import headshot from '../assets/images/jim-jacobs-headshot.jpg'

const benefits = [
  {
    title: 'Rapid Response',
    desc: 'Quick mobilization for time-sensitive environmental investigations.',
  },
  {
    title: 'Forensic Hydrogeology',
    desc: 'Specialized expertise in groundwater contamination source identification and fate-and-transport analysis.',
  },
  {
    title: 'Innovative Approach',
    desc: 'Science-based, practical, and cost-effective solutions tailored to each site.',
  },
  {
    title: 'Decades of Experience',
    desc: 'Providing innovative science-based solutions since 1989.',
  },
  {
    title: 'Independent Third-Party',
    desc: 'Objective expert analysis and testimony for litigation and regulatory proceedings.',
  },
  {
    title: 'Science-Based Solutions',
    desc: 'Applying the latest peer-reviewed science to real-world environmental problems.',
  },
] as const

const presentations = [
  {
    title: 'Remediation Management Zones',
    desc: 'Applying risk-based approaches for managing contamination, including assessing the impacts of residual contamination following active remediation, long-term monitoring strategies, and institutional controls.',
  },
  {
    title: 'Free Product Removal',
    desc: 'Using biosolvents and co-solvents for enhanced free product recovery from subsurface environments, reducing the volume and time needed for conventional pump-and-treat approaches.',
  },
  {
    title: 'Environmental Sustainability',
    desc: 'Environmentally responsible approaches to contamination management that consider energy consumption, secondary waste generation, ecological impact, and community concerns.',
  },
] as const

const remediationProcesses = [
  {
    title: 'Aerobic Bioremediation',
    desc: 'Including co-metabolic approaches where microorganisms degrade contaminants while metabolizing a primary substrate, effective for chlorinated solvents and other recalcitrant compounds.',
  },
  {
    title: 'Enhanced Anaerobic Bioremediation',
    desc: 'Stimulating indigenous anaerobic microorganisms through electron donor addition to dechlorinate chlorinated ethenes, ethanes, and methanes.',
  },
  {
    title: 'In-Situ Chemical Oxidation (ISCO)',
    desc: 'Using hydrogen peroxide, potassium permanganate, sodium persulfate, or ozone to chemically destroy organic contaminants in the subsurface.',
  },
  {
    title: 'In-Situ Chemical Reduction (ISCR)',
    desc: 'Applying reducing agents to transform oxidized contaminants, including hexavalent chromium and chlorinated solvents, into less toxic or immobile forms.',
  },
  {
    title: 'Metals Stabilization',
    desc: 'Geochemical fixation of dissolved metals in groundwater through pH adjustment, redox manipulation, or addition of reactive substrates to reduce mobility.',
  },
  {
    title: 'Ozone Treatment',
    desc: 'Ozone sparging for treatment of petroleum hydrocarbons, MTBE, and chlorinated solvents in soil and groundwater.',
  },
  {
    title: 'Cold Mix Asphalt (CMA)',
    desc: 'Soil and sludge recycling using cold mix asphalt processes to encapsulate petroleum-contaminated soils into a reusable construction material.',
  },
  {
    title: 'Free Product Removal Technologies',
    desc: 'Advanced recovery systems including biosolvent flushing, co-solvent injection, and enhanced skimming for removal of non-aqueous phase liquids (NAPLs).',
  },
] as const

const projectTypes = [
  'Petroleum (gas stations, refineries, pipelines, tank farms, terminals)',
  'Dry Cleaners',
  'Transportation (railroad yards, bus and truck maintenance facilities)',
  'Industrial (manufacturing, metal plating, electronics)',
  'Public Sector (military bases, utilities, landfills)',
  'Mining and Agriculture',
] as const

export function About() {
  return (
    <>
      {/* Intro section with headshot */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h1>About EBSinfo</h1>
          <div className="mt-8 flex flex-col gap-8 sm:flex-row">
            <img
              src={headshot}
              alt="Jim Jacobs, PhD — Founder of EBSinfo"
              className="h-56 w-44 shrink-0 rounded-lg object-cover"
            />
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Environmental Bio-Systems, Inc. (EBS) specializes in
                environmental science forensic studies, helping clients identify
                and mitigate sources of chemical and biological contamination in
                soil, groundwater, soil vapor, indoor air, and outdoor air. Our
                work supports litigation, regulatory compliance, and
                remediation design.
              </p>
              <p>
                Founded in 1989, EBS has provided innovative, science-based
                solutions for over three decades. We combine forensic
                hydrogeology with cutting-edge analytical methods to deliver
                practical, cost-effective results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EBS Benefits */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2>EBS Benefits</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                <h3 className="font-semibold text-gray-900">{b.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Scientist Bio */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2>Principal Scientist &mdash; James A. Jacobs, Ph.D.</h2>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>
              James A. Jacobs has over 40 years of experience in environmental
              assessment and remediation. He is a California Certified
              Hydrogeologist (CHG), California Registered Geologist (RG), and
              Professional Geologist licensed in multiple states.
            </p>
            <p>
              Dr. Jacobs has co-authored five environmental textbooks published
              by McGraw-Hill, Wiley, and CRC Press. He has received four
              Fulbright Senior Specialists awards and serves as a member of the
              US-EPA Superfund Technical Advisory Group.
            </p>
            <p>
              Education: BA, University of California, Santa Barbara; MS, San
              Francisco State University; Ph.D.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Presentations */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2>Technical Presentations &amp; Papers</h2>
          <div className="mt-8 space-y-6">
            {presentations.map((p) => (
              <div key={p.title}>
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-gray-700 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsurface Remedial Processes */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2>Subsurface Remedial Processes</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {remediationProcesses.map((r) => (
              <div
                key={r.title}
                className="border-l-4 border-brand-green pl-4"
              >
                <h3 className="font-semibold text-gray-900">{r.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Projects */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2>Types of Projects (Since 1989)</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {projectTypes.map((type) => (
              <li
                key={type}
                className="flex items-start gap-2 text-gray-700"
              >
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
                {type}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
