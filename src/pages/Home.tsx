import { Link } from 'react-router-dom'
import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.gif'
import gallery3 from '../assets/images/gallery-3.jpg'
import gallery4 from '../assets/images/gallery-4.jpg'
import gallery5 from '../assets/images/gallery-5.jpg'
import gallery6 from '../assets/images/gallery-6.gif'
import heroMicroscope from '../assets/images/hero-microscope.jpg'
import sectionContaminantMap from '../assets/images/section-contaminant-map.jpg'
import sectionSmokestacks from '../assets/images/section-smokestacks.jpg'
import sectionSewerPipe from '../assets/images/section-sewer-pipe.jpg'
import sectionDrugLabs from '../assets/images/section-drug-labs.jpg'
import sectionHvacDust from '../assets/images/section-hvac-dust.jpg'
import sectionMoldInspection from '../assets/images/section-mold-inspection.jpg'

const galleryImages = [
  { src: gallery1, alt: 'Sample collection in laboratory vial' },
  { src: gallery2, alt: 'Microbial degradation of oil under microscope' },
  { src: gallery3, alt: 'Laboratory flask analysis with EBS samples' },
  { src: gallery4, alt: 'Field assessment and environmental surveying' },
  {
    src: gallery5,
    alt: 'Environmental remediation site with treatment equipment',
  },
  { src: gallery6, alt: 'Pseudomonas microbe microscopy' },
] as const

const services = [
  {
    title: 'Forensic Subsurface and Ground Surface Contaminant Source Maps',
    image: sectionContaminantMap,
    imageAlt: 'GORE environmental site assessment benzene contaminant map',
    content:
      'EBS provides forensic contaminant source maps for groundwater, soil, soil vapor, and indoor air sampling. Our work includes passive soil vapor surveys using EPA Method TO-17, forensic contaminant mapping, and reports compliant with Federal Rule 26(a)(2)(B) for expert testimony. We identify the timing, source, and extent of chemical releases through rigorous scientific analysis.',
  },
  {
    title:
      'Forensic Flood Water Studies, Sewer Leak Evaluations, Sewer Air Testing and Vapor Intrusion',
    image: sectionSewerPipe,
    imageAlt: 'Interior of concrete sewer drainage pipe',
    content:
      'Our flood water toxics analysis includes PCR (polymerase chain reaction) testing and gas chromatography to identify contaminants. We conduct sewer air testing for volatile organic compounds (VOCs) and evaluate fecal bacteria concentrations near sewer outfalls. Vapor intrusion assessments determine the migration of subsurface vapors into indoor air.',
  },
  {
    title: 'Forensic Outdoor Air, Indoor Air, and Odor Studies',
    image: sectionSmokestacks,
    imageAlt: 'Industrial smokestacks emitting pollution at sunset',
    content:
      'EBS performs source mapping for air quality investigations, including air permit compliance evaluations, particulate analysis, and qualitative odor measurements. We identify and characterize emission sources for both outdoor ambient air and indoor air quality concerns.',
  },
  {
    title: 'Forensic Identification of Illicit Drug Labs and Haz-Waste Dumps',
    image: sectionDrugLabs,
    imageAlt:
      'Handcuffs and pills representing illicit drug lab investigations',
    content:
      'We test for residues from P-2-P, Cocaine, Heroin, Methaqualone, Methamphetamine, PCP, and LSD manufacturing operations. At hazardous waste dump sites, we identify chemicals including benzene, toluene, vinyl chloride, and other volatile organic compounds that pose environmental and health risks.',
  },
  {
    title: 'Forensic Indoor Air Sampling / Mold and Moisture Studies',
    image: sectionMoldInspection,
    imageAlt: 'Moisture meter being used for mold inspection on wall',
    secondImage: sectionHvacDust,
    secondImageAlt: 'Dust buildup on HVAC coil requiring indoor air assessment',
    content:
      'Our indoor air quality services cover vapor intrusion assessment, dust analysis, virus and bacteria testing, and mold and mildew evaluation. We use active and passive air testing methods, wipe and tape sampling, and test for lead-based paint and formaldehyde. Common indoor toxin sources include paints, solvents, wood preservatives, aerosol sprays, and cleaning products. We follow EPA guidance for mold assessment and remediation.',
  },
  {
    title:
      'Forensic Site Conceptual Models and Mitigation Plans / Fate of Chemicals',
    content:
      'EBS develops forensic site conceptual models that reconstruct the timeline of contamination events. Our mitigation plans incorporate remediation design strategies including extraction systems, in-situ chemical oxidation, bioremediation, and geochemical fixation to address the fate and transport of chemicals in the subsurface.',
  },
  {
    title:
      'Bench Tests and Feasibility Studies / Locating Historic Landfills',
    content:
      'We conduct bench-scale testing and feasibility studies for remediation technologies including Enhanced Aerobic and Anaerobic Bioremediation, Co-Metabolic Remediation, In-Situ Chemical Oxidation (ISCO), In-Situ Chemical Reduction (ISCR), Geochemical Stabilization, and Free Product Biosolvent Flushing. Our services also include locating and characterizing historic landfill sites.',
  },
  {
    title: 'Forensic Sampling Near Fracking Operations',
    content:
      'EBS provides environmental sampling and monitoring methodology for areas near hydraulic fracturing operations, assessing potential impacts to groundwater, surface water, soil, and air quality.',
  },
  {
    title: 'Forensic Microbial Analysis',
    content:
      'We perform forensic microbial identification and analysis to characterize biological communities in soil, groundwater, and air samples, supporting bioremediation feasibility assessments and contamination source investigations.',
  },
] as const

export function Home() {
  return (
    <>
      {/* Hero with microscope background */}
      <section className="relative bg-brand-dark py-20 text-white">
        <img
          src={heroMicroscope}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-5xl px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Forensic Studies &amp; Environmental Science
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            EBSinfo provides expert environmental science forensic studies to
            identify and mitigate sources of chemical and biological
            contamination in the environment. Innovative science-based solutions
            since 1989.
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
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2>Our Work</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((img) => (
              <div key={img.alt} className="overflow-hidden rounded-lg">
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

      {/* Services — full content from legacy */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2>Our Services</h2>
          <div className="mt-10 space-y-12">
            {services.map((svc) => (
              <div key={svc.title}>
                {'image' in svc && svc.image && (
                  <div className="mb-4 grid gap-4 sm:grid-cols-2">
                    <img
                      src={svc.image}
                      alt={svc.imageAlt}
                      className="w-full rounded-lg object-cover"
                      loading="lazy"
                    />
                    {'secondImage' in svc && svc.secondImage && (
                      <img
                        src={svc.secondImage}
                        alt={svc.secondImageAlt}
                        className="w-full rounded-lg object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                )}
                <div className="border-l-4 border-brand-green pl-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    {svc.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
