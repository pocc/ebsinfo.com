# Content Gap: Legacy Site vs `/demo/` SPA

**Status: Content populated** — All SPA pages have been updated with legacy content as of the latest commit.

---

## HOME (`/` vs `/demo/`)

### SPA Content (populated)
- Hero: "Forensic Studies & Environmental Science" + "Innovative science-based solutions since 1989"
- Photo gallery (6 images): lab vial, microbe microscopy, lab flasks, field surveying, remediation site, Pseudomonas
- 9 detailed service sections with methodology descriptions:
  1. Forensic Subsurface and Ground Surface Contaminant Source Maps
  2. Forensic Flood Water Studies, Sewer Leak Evaluations, Sewer Air Testing and Vapor Intrusion
  3. Forensic Outdoor Air, Indoor Air, and Odor Studies
  4. Forensic Identification of Illicit Drug Labs and Haz-Waste Dumps
  5. Forensic Indoor Air Sampling / Mold and Moisture Studies
  6. Forensic Site Conceptual Models and Mitigation Plans / Fate of Chemicals
  7. Bench Tests and Feasibility Studies / Locating Historic Landfills
  8. Forensic Sampling Near Fracking Operations
  9. Forensic Microbial Analysis

### Remaining gaps
- Subscribe section (newsletter signup) — not ported (no backend)
- Chemical lists within some sections are summarized rather than fully enumerated

---

## ABOUT (`/about` vs `/demo/about`)

### SPA Content (populated)
- Company intro with headshot
- EBS Benefits (6 cards): Rapid Response, Forensic Hydrogeology, Innovative Approach, Decades of Experience, Independent Third-Party, Science-Based Solutions
- Principal Scientist bio (Jim Jacobs, Ph.D.) with credentials (CHG, RG, 5 books, 4 Fulbright awards, EPA TAG)
- Technical Presentations & Papers (3 entries): Remediation Management Zones, Free Product Removal, Environmental Sustainability
- Subsurface Remedial Processes (8 entries): Aerobic/Anaerobic Bioremediation, ISCO, ISCR, Metals Stabilization, Ozone, CMA, Free Product Removal
- Types of Projects Since 1989 (6 categories)

### Remaining gaps
- Full multi-paragraph presentation abstracts (legacy has ~4 paragraphs each; SPA has 1-sentence summaries)
- Detailed ISCO injection methodology (pressures, delivery systems)
- Ozone treatment package specifics
- Winery waste treatment section
- Remediation equipment partnerships section
- Laboratory bench scale services detail

---

## BOOKS (`/books` vs `/demo/books`)

### SPA Content (populated)
- Page title: "Books by EBS Principal in Environmental Science"
- Author intro paragraph with headshot
- All 5 books with full titles, authors, publisher, year, page count, and descriptions:
  1. Environmental Considerations Associated with Hydraulic Fracturing Operations (Wiley, 2019)
  2. Oil Spills and Gas Leaks (McGraw-Hill, 2014)
  3. Acid Mine Drainage, Rock Drainage, and Acid Sulfate Soils (Wiley, 2014)
  4. Chromium(VI) Handbook (CRC Press, 2004)
  5. MTBE: Effects on Soil and Groundwater Resources (CRC Press, 2001)

### Remaining gaps
- Acid Mine Drainage Part I-IV breakdown
- Chromium(VI) editorial reviews / Erin Brockovich reference
- MTBE second paragraph (historical document context)

---

## CONTACT (`/contact` vs `/demo/contact`)

### SPA Content (populated)
- Heading: "Need an Expert Environmental Science Forensic Study? Contact Us"
- Contact form: Name, Email, Message, Send button
- Address: EBS, 707 View Point Road, Mill Valley, CA 94941, US
- Phone: (510) 590-1098 (clickable tel: link)
- Business Hours: Mon-Fri 09:00 am - 05:00 pm, Sat-Sun Closed

### Remaining gaps
- reCAPTCHA integration
- Form backend (currently client-side only, TODO: Pages Function at /api/contact)
- Promo banner: "Please contact EBS experts for environmental science forensic studies"

---

## FOOTER (all pages)

### SPA Content (populated)
- "Innovative science-based solutions since 1989" tagline
- Copyright: Environmental Bio-Systems, Inc. (EBS)

---

## Summary

| Page | Legacy Content Sections | SPA Coverage | Notes |
|------|------------------------|-------------|-------|
| Home | ~9 service sections with methodology | 9 service sections | Chemical lists summarized |
| About | Bio, benefits, presentations, processes, projects | All sections present | Presentation abstracts condensed |
| Books | 5 books with full details | All 5 books with descriptions | Some extended details omitted |
| Contact | Form + address + phone + hours | All present | Form not wired to backend yet |
| Footer | Tagline + copyright | Both present | |
