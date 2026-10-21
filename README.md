# Giovanni Di Fratta — Academic website (complete bibliography update, October 2026)

A bilingual, responsive and fully static academic website. The layout and whale-blue palette are retained from the previous revision; the artwork was replaced in October 2026 (`assets/research-magnetic-textures.webp` on Overview and Research, `assets/teaching-blackboard.webp` on Teaching, `assets/publications-papers.webp` on Publications).

## Files

- `index.html` — finished website with a complete bibliography rendered into the HTML.
- `styles.css` — visual design, desktop/tablet/mobile layout and bibliography filters.
- `app.js` — client-side navigation, bilingual UI, combined publication filtering (year + category + keyword), and click-to-reveal email.
- `data/publications.json` — structured master list of all 48 bibliographic records, with a `cv_number` identifying each record from `GDF_PublicationsList.pdf`, or `null` for the three newer 2026 works.
- `assets/` — locally hosted photographs, research graphics and icons. No third-party scripts, fonts or analytics.

The website is **ready to publish as-is**. No CMS, database or server is needed. Place `index.html`, `styles.css`, `app.js`, `data/`, and `assets/` together under the hosting root.

## Bibliography coverage

**48 unique records**, comprising:

- 39 peer-reviewed journal articles: PDF bibliography entries **4–42**.
- 6 preprints: PDF bibliography entries **1–3**, plus three newer 2026 preprints carried over from the previous website.
- 3 other academic works: PDF bibliography entries **43–45** (PhD thesis, BCAM report and book contribution).

Every numbered PDF entry from 1 through 45 is present **exactly once**, without duplicating the newer records. Articles are displayed by publication year (newest first); `data/publications.json` preserves their source numbering.

**Links:** 47 of 48 entries have direct title links to their individually identified ResearchGate records. The 2008 book contribution is displayed with its bibliographic details and ISBN but without a fabricated ResearchGate publication URL. Where recorded, a DOI link also appears beside the ResearchGate link. Some ResearchGate records may require a login or change in the future.

**Verified differences between the PDF and current publication metadata:**

- *Magnetoelastic actuated motion of fine ferromagnetic particles* (PDF #4): corrected DOI to **10.1098/rspa.2025.0584**, as published in *Proceedings of the Royal Society A* in 2026. The uploaded list gives an unrelated DOI, `10.1098/rspa.2017.1234`.
- *Cell averaging two-scale convergence: Applications in periodic homogenization* (PDF #33): corrected DOI to **10.1137/16M1085309**, as confirmed by SIAM and IRIS Federico II. The uploaded list accidentally repeats the DOI of *Parking 3-sphere swimmer I*.
- *Reduced theory of symmetric and antisymmetric exchange interactions in nanowires* (PDF #7): listed as accepted in 2024 in the PDF; the web page uses its **2025 publication year** in *ESAIM: COCV* (DOI **10.1051/cocv/2024089**).
- *Parking 3-sphere swimmer II* (PDF #25): the published title says “long-arm asymptotic regime” instead of the PDF's “very long arms asymptotic regime”.
- *Dimension reduction for the micromagnetic energy functional on curved thin films* (PDF #44): the PDF gives no year; **2016** is taken from the dated public record.

All other wording and bibliography categories follow the supplied PDF, with consistent typographical formatting.

## Editing publications

`data/publications.json` is an **audit-friendly source copy**; the deployed site renders its current bibliography from the `index.html` markup (rather than fetching JSON over a network). Thus **editing the JSON alone will not change the displayed page**. For a manual addition, update the JSON record and add a corresponding `<article class="pub-item">` to `#publication-list` in `index.html`, using the required `data-year`, `data-kind`, `data-topic` fields. Alternatively, provide the modified JSON and the site to ChatGPT to regenerate the HTML and update the displayed counts.

The script used to compile the original full list is not required to deploy or view the website. The website works without any external services.

## Deployment

- **Cloudflare Pages:** publish the folder contents, with `index.html` at the site root. HTTPS is included by the provider.
- **GitHub Pages:** upload the folder contents into the repository root and activate Pages under repository settings.
- **Custom domain:** configure through the hosting provider if desired.

## Other notes

The 2026/27 courses are from the user's supplied institutional teaching screenshot; the same CV-based Naples and TU Wien history is preserved. Email is constructed only when requested by clicking “Show email address”, which reduces elementary scraping but is not a complete anti-spam measure.


## October 2026 additions

- **Activities page** (`#activities`, bilingual EN/IT): doctoral supervision (Rossella Giorgio and Leon Happ, co-supervised with Elisa Davoli, with personal-page links and one-click filters of the joint papers), the Falter / Heureka 4/2020 feature, organised events, selected invited talks (plus a collapsible list of earlier seminars), grants, honours and research visits, and editorial / refereeing service. Content comes from `GDF_CV_elenco_attivita_procedure_TENURE_TRACK.pdf` and `GDF_CV_TUWien.pdf`.
- Sidebar navigation gained an *Activities* entry and the home page a matching highlight row.
- Interface refinements (sliding navigation marker, scroll progress line, reveal-on-scroll, back-to-top button) live in the last block of `styles.css` and the final section of `app.js`; the width of the magnetic figure is `--figure-max` in `styles.css`.
- Supervision status was checked against public pages: TU Wien news (29 June 2026) for R. Giorgio and the authors' own pages for both students.
