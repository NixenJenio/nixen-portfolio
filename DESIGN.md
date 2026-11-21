# Nixen Jenio Portfolio V2 — Design Direction

## Source of truth

The supplied portfolio video is the single visual source of truth for Portfolio V2. Its page structure, section sequence, composition, hierarchy, component placement, and minimalist character take priority over previous visual references.

The LinkedIn banner is not a design input for this website. Do not carry over its blue organic shapes, large blue tagline treatment, illustration treatment, or tagline composition.

Nixen's identity comes from his name, professional positioning, verified projects, experience, education, research, and working links. Do not introduce a generic portfolio template or unsupported content.

## Reading and design dials

Reading this as a personal software engineering and applied AI portfolio for prospective employers and collaborators, in the white editorial style of the supplied video, with ENERGY 2 / RHYTHM 2 / MOTION 3.

- **ENERGY 2** — a bold professional headline and clear project previews carry the opening.
- **RHYTHM 2** — preserve the video's recognizable section compositions, with hierarchy shifting between project cards, editorial biography, credential gallery, contact form, and footer.
- **MOTION 3** — expressive motion gives the experience its character while leaving the reference's compositions and content easy to read.

## Visual system

- Canvas: white #FFFFFF.
- Primary text: near-black #111111.
- Secondary text: #555555.
- Terminal: near-black #111111 with terminal green #55D98B for prompt/status text and white terminal copy.
- Subtle borders: #EAEAEA.
- Optional warm accent: muted gold, used only when it belongs to a real credential or detail.
- Typography: use a rounded system display sans for bold black headings, Geist for readable body copy, Cajueira Display for the `nixen` wordmarks only, and restrained monospace only inside the terminal.
- Whitespace: generous and structural, with `clamp(24px, 5vw, 88px)` page gutters, a centered maximum width of about 1440px, and distinct gaps between sections.
- Surfaces: keep flat white section backgrounds. Use 20–24px project-card corners, compact pill technology badges, softly rounded controls, restrained borders, and subtle card shadows to match the reference's friendly finish.
- Header: a translucent white fixed bar with a restrained backdrop blur, no visible divider, and only a very light shadow. Keep this treatment limited to navigation.
- Illustration: monochrome, hand-drawn developer-at-laptop art in the reference's simple line style. A small warm lightbulb accent is acceptable because it appears in the reference.

Do not use large blue gradients, blue organic background shapes, glass surfaces outside the header, oversized decorative forms, repeated circular icon borders, or decorative motifs without a clear content purpose.

## Comparison with the current V2 screenshot

The current desktop preview was compared with the supplied video. These are visual differences from that comparison, separate from enhancement ideas:

- **Hero background and color:** the current hero places large pale-blue organic shapes behind the right column and uses blue for its headline, links, illustration details, and interface accents. The video uses a plain white background, black headline, black line art, and only a small warm lightbulb accent.
- **Hero copy hierarchy:** the current hero adds an availability status and uppercase role eyebrow before a four-line banner tagline. The reference opens directly with a bold, two-line professional headline. The approved replacement is “Software Engineer / Data & AI Enthusiast.”
- **Terminal:** the current terminal repeats the banner tagline, uses a colored command, and includes a window title. The reference terminal is a compact black panel with a green prompt and short white typing text. Its greeting should add personality without repeating the H1.
- **Social row:** the current links sit in circular outlined controls, and the GitHub mark is rendered as a command symbol. The reference uses small monochrome social marks without circular frames. Use recognizable LinkedIn, GitHub, and email marks.
- **Illustration:** the current custom drawing is navy with blue screen/code and a blue halo. It needs the simple black-and-white line treatment, raised hand, laptop, and small warm lightbulb shown in the video.
- **Hero ornaments:** remove the “Open to opportunities!” status, the extra eyebrow, the illustration caption, and “Scroll to explore.” The reference leaves that space open.
- **Navigation:** preserve the compact left wordmark, centered links, and right contact action. The active link is a black filled pill with white text; inactive links stay plain. Keep the translucent white blur subtle and omit a divider.
- **Works cards:** the horizontal text-left / preview-right arrangement is already present. However, the cards currently use generated interface mockups rather than project screenshots, contain no real Live Site URLs, link GitHub actions to the profile, and lack verified years for most projects. Replace previews and actions with real project material where available, and label or omit unavailable information honestly.
- **About:** the current section uses an off-white band, a sticky title in a separate column, and a structured experience strip. The reference uses a simpler text-led About Me block on white. Move real experience content into concise prose and remove the additional layout devices.
- **Certifications:** the previous heading and cards showed education, publication, research, and internship, rather than certificates. The reference shows real landscape certificate cards in a compact gallery. Nixen's public LinkedIn profile provides three certificate/credential records; certificate scans and direct credential URLs are not available in the workspace.
- **Contact:** the two-column arrangement is aligned with the reference, but the current blue-tinted section, oversized heading, white raised form panel, and large shadows diverge. Use a white canvas, more modest heading scale, and lightly bordered fields without a surrounding card.
- **Footer:** the footer stays compact with copyright at the left and the wordmark at the right. Remove the previous tagline and keep the background continuous white.
- **Motion:** current V2 has scroll reveals and mild preview tilt, but no kinetic H1 entrance. Keep expressive motion by adding a two-line headline sequence, purposeful terminal typing, line-art reveal, larger staggered card entrances, and responsive preview movement. Do not add the removed background shapes or captions as motion devices.

## Page structure

Keep the one-page order from the reference:

1. Fixed top navigation.
2. Two-column hero.
3. Works with vertically stacked horizontal project showcases.
4. Minimal text-led About Me.
5. Compact Licenses & Certifications gallery.
6. Two-column contact area.
7. Minimal footer.

The header has the lowercase `nixen` wordmark at left, centered Home / Works / Bio / Certs links, and a dark Contact me action at right. The local `public/fonts/cajueira/` folder contains nine static, upright Cajueira Display weights (100, 200, 300, 400, 500, 600, 700, 900, and 950). Register each original file with `@font-face`; apply the regular face to the navigation wordmark only. The page's other typography stays Geist. Keep the translucent white blur treatment subtle and confined to the header.

## Hero

- Two columns with text on the left and the monochrome hand-drawn illustration on the right.
- Main heading: **Software Engineer / Data & AI Enthusiast**. Keep it large, bold, black, and close to the reference's two-line scale and hierarchy.
- Put a black terminal panel beneath the heading. Use a short, playful greeting or personal introduction. It must not repeat the heading or the LinkedIn tagline.
- Put small monochrome LinkedIn, GitHub, email, and résumé links in a plain row beneath the terminal. Do not surround every icon with a circle.
- Leave open white space around the illustration.
- Exclude the availability status, extra uppercase eyebrow, blue organic backdrop, illustration caption, scroll prompt, and any repeated tagline.

## Works

Use the reference's repeated horizontal showcase layout. Each card places technology labels, title, description, actions, and verified year at left, with a laptop or website preview at right. Use a 20–24px corner radius, soft border, subtle shadow, generous internal padding, pill technology badges, and rounded primary/secondary actions.

Use Nixen's verified project data. The current project data has no demoUrl values, all githubUrl values point to Nixen's profile, and individual project years are absent. Do not present the profile as a project repository or invent years. The workspace inventory found no project sites, repository URLs, screenshots, or project dates beyond the 2025 publication. Keep unavailable actions and dates out of the cards. The current preview marker is provisional and must be replaced by authentic project screenshots before the portfolio is considered visually complete.

## About

Use one broad, left-aligned editorial text column with a simple About Me heading and concise paragraphs based on Nixen's verified biography. Avoid a sticky side heading, credential strip, multi-card layout, or decorative background.

## Licenses & Certifications

Use a compact landscape-card gallery with the reference's desktop four-column grid and its simple caption beneath each real card. Keep colors within the white, gray, black, and optional muted gold palette.

The current portfolio data and CV do not list individual licenses or certificates, but Nixen's public LinkedIn profile lists three records: Python 101 for Data Science (Cognitive Class, November 2024), Data Analysis with Python (Cognitive Class, May 2024), and Company Visit HIMSISFO 2022: SUPER to PT Freeport Indonesia (HIMSISFO, BINUS University, November 2022). Use a compact grid of text cards with the exact titles, issuers, and dates. No certificate scans or direct credential URLs were available, so do not invent image previews or download actions.

## Contact

Match the reference's simple two-column arrangement on white. Place the contact heading and monochrome social links on the left. Place visibly labelled name, email, and message fields and the dark submit button on the right. Keep inputs lightly bordered with modest corner rounding and a clear focus outline.

The current app has no message delivery backend. The mailto flow opens a visitor's email app, so the action and supporting note must describe that handoff and must not claim a message was sent. Keep the heading “Let’s Work Together”.

## Footer

Keep a compact horizontal footer with accurate copyright at left and Nixen's wordmark at right. Do not repeat the hero positioning line or add another tagline.

## Motion

Motion stays expressive, with these purposes:

- **Headline:** animate the two headline lines with kinetic type, revealing the light/strong hierarchy in a confident sequence. Keep the complete headline immediately available to assistive technology.
- **Terminal:** type a short greeting in a focused sequence beneath the heading. Under reduced motion, show the full greeting immediately.
- **Illustration:** reveal the line-art strokes in a compact entrance sequence. Do not add parallax backgrounds or new decorative layers.
- **Projects:** stagger card entrances on scroll. Let the laptop preview respond to pointer position and focus with perspective/depth changes that remain inside the preview frame. Provide an equivalent visible pressed/focus treatment on touch and keyboard.
- **Section transitions:** use clear, paced reveals between content sections without scroll hijacking, layout shifts, or extra visual ornaments.
- **Contact success:** animate only the actual form feedback state. Keep it truthful to the mailto handoff.

Respect prefers-reduced-motion, keyboard navigation, focus visibility, and touch input. Motion must not delay reading, navigation, or submission.

## Accessibility and resilience

- Keep semantic header, nav, main, section, form, and footer landmarks.
- Provide one page-level heading and a logical heading order.
- Label form fields visibly. Give icon-only social links accessible names.
- Preserve visible keyboard focus and sufficient text/control contrast.
- Reflow the two-column hero, project cards, gallery, and contact section for tablet and mobile widths. Keep touch targets usable and prevent horizontal overflow.
- Honor reduced-motion preferences and provide readable static content at all times.

## Implementation status

- [x] Replace the banner-led blue hero with the reference-led black-and-white hero and approved role headline.
- [x] Use a short terminal greeting, plain social icons, and monochrome developer illustration.
- [x] Remove the status line, extra eyebrow, blue shapes, illustration caption, scroll prompt, and circular icon outlines.
- [x] Rebuild every section's composition around the video rather than preserving the previous V2 UI.
- [x] Add three named credentials listed on Nixen's public LinkedIn profile as a compact typographic gallery.
- [x] Keep expressive motion inside the page's reference-led compositions and honor reduced motion.
- [ ] Replace the clearly labelled project preview placeholders when actual screenshots are supplied.
- [ ] Add project-specific live and repository links, and verified project years, when those records are available.

## Implementation summary and remaining inputs

The page follows the approved visual direction. It uses a fixed compact navigation, two-column desktop hero, black terminal, monochrome inline illustration, vertically stacked horizontal project rows, text-led About, credential gallery, two-column contact form, and compact footer. Sections share a white background and use a centered maximum width of 1440px with fluid gutters. Headings use a rounded system display face while the Cajueira Display font is reserved for the header and footer wordmarks. Motion includes kinetic headline entrances, terminal typing, line-art drawing, staggered project reveals, and card/preview hover responses; reduced-motion visitors get the complete static greeting and visible content.

The available project data has no real `demoUrl` values. The existing `githubUrl` values point to the profile, not individual repositories, so those are not presented as project repository buttons. The workspace contains no project screenshots or verified years for most entries. The cards keep the reference's laptop position with an explicit screenshot-needed notice until genuine images and destinations are provided. The GNN publication alone has a verified 2025 year and IEEE link.

To finish the preview gallery, provide one genuine image for each project: `loluna-homepage.png` (public website homepage), `diabetes-analysis.png` (actual notebook, dashboard, or model result), `enterprise-erp.png` (sanitized ERP interface with confidential data removed), `building-footprint-segmentation.png` (aerial image with a real segmentation result), and `gnn-policy-network.png` (a real graph visualization or figure from the paper). Place them in `public/images/projects/`.

The [public LinkedIn profile](https://id.linkedin.com/in/nixenjenio) lists three credential entries: Python 101 for Data Science (Cognitive Class, November 2024), Data Analysis with Python (Cognitive Class, May 2024), and Company Visit HIMSISFO 2022: SUPER to PT Freeport Indonesia (HIMSISFO, BINUS University, November 2022). No certificate scans or direct credential links were present in the workspace, so the page presents those records as text cards without inventing previews or download actions.

To finish the certificate gallery, provide genuine images for `python-101-data-science.png`, `data-analysis-with-python.png`, and `himsisfo-freeport-company-visit.png` in `public/images/certificates/`.

Remaining work is content-bound: replace preview placeholders and add exact project dates and repository/site URLs when those assets or records are available. The current form remains a truthful mailto handoff because this app has no message delivery backend. Certificate records remain text-only until genuine certificate images are supplied.
