# Giovanni Di Fratta — Academic website (complete bibliography update, October 2026)

A bilingual, responsive and fully static academic website. The layout and whale-blue palette are retained from the previous revision; the artwork was replaced in October 2026 (`assets/research-magnetic-textures.webp` on Overview and Research, `assets/teaching-blackboard.webp` on Teaching, `assets/publications-papers.webp` on Publications).

## Files

- `index.html` — finished website with a complete bibliography rendered into the HTML.
- `styles.css` — visual design, desktop/tablet/mobile layout and bibliography filters.
- `app.js` — client-side navigation, bilingual UI, combined publication filtering (year + category + keyword), and click-to-reveal email.
- `data/publications.json` — structured master list of all 48 bibliographic records, with a `cv_number` identifying each record from `GDF_PublicationsList.pdf`, or `null` for the three newer 2026 works.
- `assets/` — locally hosted photographs, research graphics and icons. No third-party scripts, fonts or analytics.

The website is **ready to publish as-is**. No CMS, database or server is needed. Place `index.html`, `styles.css`, `app.js`, `data/`, and `assets/` together under the hosting root.

