# SIGEPAI-IEE Airstream-inspired website

## Goal
Create a polished, responsive landing page for SIGEPAI-IEE Soluciones Académicas using the supplied business content and the visual direction of Airstream's site: editorial typography, warm neutral palette, strong imagery/visual moments, and clear conversion paths.

## Tasks
- [x] Extract and structure source content from `info.docx`.
- [x] Define responsive information architecture and visual system.
- [x] Build the landing page with semantic HTML, CSS, and minimal interaction.
- [x] Verify layout, accessibility basics, and responsive behavior.

## Scope
- New standalone static page in this repository.
- Spanish interface copy based on `info.docx`.
- No backend, checkout, authentication, or real pricing flow.

## Acceptance criteria
- Hero communicates the central value proposition and includes a primary CTA.
- Sections cover benefits, audience, transformation, service contents, and company story/mission/vision.
- Visual system feels premium and editorial while remaining appropriate for an academic technology service.
- Responsive layout works on desktop and mobile widths.
- Navigation and CTA links are usable without JavaScript.

## Evidence
- Source: `/home/soky/projects/sigepai/info.docx`
- Reference direction: `https://www.airstream.com/`
- Implementation: `index.html`, `styles.css`, `script.js`, `README.md`
- Worker validation: HTML structural validation and `node --check script.js` passed.
- Follow-up: improved global keyboard focus visibility with paper outline and copper halo in `styles.css`.
- Verification: delegated structural recheck passed; browser rendering was not available.
