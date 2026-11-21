# Nixen Portfolio V3 — Master Design System

**Status:** Review draft; not applied to application code. This system translates the live [Euger Bonete portfolio reference](https://euger.vercel.app/) into Nixen's visual identity and documented content. The creative direction is locked: **full reference adaptation** with **expressive motion**.

## 1. Design principles

1. **Keep the reference's structure.** Narrow centered reading column, compact fixed header, Work/Explore menus, command palette, desktop information rails, mobile bottom navigation, text-led sections, detailed project routes, and compact footer.
2. **Replace identity and content only.** Use NIXEN, Nixen's professional positioning, real project and experience records, actual credentials, links, and résumé. Do not reuse the reference creator's content or assets.
3. **Stay typographically compact.** Match the reference's modest heading scale and paragraph measure. Cajueira Display Semibold 600 is a required Nixen identity override for major headings and the wordmark; Geist remains the body face.
4. **Make motion expressive within the same geometry.** Motion can give the words, rows, menus, and images character, but it cannot add decorative panels or change the reference's composition.
5. **Make every empty state truthful.** Keep the destination in navigation, show a concise text-only state when Nixen has no content, and do not fabricate activity, posts, guestbook entries, project actions, or product visuals.

## 2. Color and surface tokens

The live reference exposes dark and light themes. The initial browser capture was dark; a user-controlled toggle displayed the light theme. Values below are observed computed colors where noted. Supporting surface values should be sampled from the browser capture during implementation rather than invented.

| Token | Dark theme | Light theme | Use |
| --- | --- | --- | --- |
| `canvas` | `#111111` | `#FAFAFA` | Continuous page surface |
| `text-primary` | `#E5E5E5` | `#111111` | Headings and primary copy |
| `text-secondary` | `#949494` | `#555555`–`#666666` | Paragraphs, descriptions, and metadata |
| `rule` | `#222222` | `rgba(0, 0, 0, 0.07)` / `rgba(0, 0, 0, 0.1)` | Dividers, subtle control borders |
| `header-surface` | `rgba(17, 17, 17, 0.85)` | `rgba(250, 250, 250, 0.85)` | Fixed header backdrop |
| `control-primary` | `#E5E5E5` surface with `#111111` text | `#111111` surface with `#FAFAFA` text | Compact submit/action buttons; the contrast direction follows the selected theme |

Use neutral colors as the entire identity palette. Do not bring forward the old LinkedIn-banner blue, gradients, gold highlights, glass panels, or decorative background shapes. The reference uses a restrained translucent header with a thin lower rule; page content remains on one continuous canvas.

## 3. Typography

### Font assignment

- **Display and wordmark:** local `Cajueira Display`, actual Semibold 600 face at `public/fonts/cajueira/Cajueira-Display-SemiBold-Exfont3511.ttf`.
- **Body:** existing Next.js Geist sans variable, loaded through `next/font/google` and emitted as self-hosted build assets.
- **Small technical metadata:** existing Geist Mono variable, loaded the same way and used sparingly for compact dates, rail labels, or short system-like details.
- Cajueira is a static font family in the project, not a variable font. Use the Semibold file registered at weight 600; do not synthesize weight 600 from Regular or use the existing 900 Black file for these elements.

### Reference scale and Nixen application

The sizes are based on Playwright computed styles at 1518 × 900 and 390 × 844. Keep the same hierarchy while switching display headings to Cajueira 600.

| Role | Reference measurement | V3 rule |
| --- | --- | --- |
| Home name / project detail title | Desktop 34 px / 40.8 px line-height; mobile name 30 px / 36 px | Cajueira 600, same restrained scale; clamp only as needed to prevent wrapping or overflow. |
| Section heading | About 18.7 px / 28 px line-height | Cajueira 600, around 19 px. Keep this understated. |
| Detail subsection | About 17 px / 26 px line-height | Cajueira 600, around 17 px. |
| Role/location line | About 16 px | Geist regular, muted. |
| Body paragraphs | Desktop 17 px / 30.6 px line-height; smaller layouts may reduce toward 15–16 px while keeping a generous line-height | Geist regular; readable measure and comfortable leading. |
| Project list description | About 15 px / 26.8 px line-height | Geist regular, secondary color. |
| Skill/stack tags | Compact, small text with thin outline | Geist; low-radius rectangular tags, not large pill badges. |
| Wordmark | Compact home mark in source | NIXEN uppercase in Cajueira 600, sized to fit the original header slot without dominating the controls. |

Do not use the old V2 oversized display scale. Keep one H1 per page and a clear semantic heading order.

## 4. Layout system

### Central column

Observed at 1518 px: the text content is about 663 px wide inside a centered main wrapper around 714 px wide. At 768 px the content is about 585 px wide. At 390 px the content is about 345 px wide with roughly 23 px page insets.

Use a centered, narrow reading column close to those measurements. Do not reuse the old 1240 px site-wide content container; the reference's defining proportion is much narrower. At desktop, keep the central column visually centered while allowing the side rails to occupy the outer viewport. At tablet, hide both rails and preserve a centered text column. At mobile, keep approximately 20–24 px gutters and use the fixed bottom navigation.

### Spacing rhythm

- Keep a clear but compact gap between the fixed header and the profile heading.
- Use thin horizontal separators between major home sections.
- Keep paragraph spacing visibly larger than the gap between a heading and its supporting line.
- Project and experience entries remain vertically stacked and easy to scan; no enclosing card surfaces.
- Use the same content left edge for Bio, Projects, Experience, Contact, and footer.
- Preserve the reference's whitespace through measured section rhythm, not oversized empty bands or decorative elements.

### Page frame and responsive navigation

- **Desktop:** fixed top header; narrow central column; left information/navigation rail; right progress/stat rail. Side rails remain secondary and should not squeeze the text column.
- **Tablet:** fixed top header and centered column; hide side rails. The 768 px capture uses the desktop header arrangement.
- **Mobile:** compact top header with Work/Explore and icon actions; hide side rails; fixed 56 px bottom bar with Blog, Guestbook, Projects, Contact, and the centered Home action.
- The exact breakpoints were not proven by the three reference captures. Tune between the observed 390, 768, and 1518 px widths and verify intermediate sizes in browser screenshots.

## 5. Component specifications

### Header and menus

- Fixed, compact header with a centered inner wrapper.
- Replace the reference's small creator mark with the NIXEN wordmark while retaining the slot and overall scale.
- Keep Work and Explore as grouped menu buttons. Work links to Projects, Experience, and Contact. Explore links to Blog, Guestbook, Side Projects, and Uses.
- Keep Search as a command-palette button with the `⌘K` desktop hint; show an equivalent accessible label on mobile.
- Keep résumé, GitHub, LinkedIn, and theme actions. Use Nixen's destinations only.
- Provide keyboard activation, Escape dismissal, visible focus, and correct expanded/dialog state.
- Use a short opacity/position transition for menus and palette. Do not turn the header into a large menu panel that changes the underlying page layout.

### Desktop side rails

- Keep the reference's fixed, low-contrast side-rail placement and thin scroll-position indicator.
- Retain Blog and Guestbook quick links but omit creator-specific item counts unless Nixen has real, current counts.
- Replace creator's contribution history, location, and social counters only with Nixen facts that are genuinely available. The checked local records support West Jakarta, the professional role, and project metrics `20+` ERP modules, `93%` diabetes-model accuracy, and `83.3%` GNN test accuracy. Do not show fake follower, repository, star, or contribution counts.
- If the activity chart has no verifiable Nixen source, omit the chart rather than drawing fabricated bars. Keep the rail visually light.
- Do not reuse the anime quote or creator's `/sitemap.xml` copy. A Nixen sitemap link may be added only if a real sitemap route is part of the implementation.

### Bio / home profile

- H1: **Nixen Jenio**.
- Role/location line: **Software Engineer / Data & AI Enthusiast · West Jakarta, Indonesia**.
- Omit a current employment/availability badge unless Nixen supplies a current status.
- Add a concise `Skilled in` row using a small number of real skills from the existing records; avoid a large skills directory on the home page.
- Keep the main biography to short, text-led paragraphs. Adapt the CV's documented summary and work/research background without copying the old V2 tagline.
- Keep a thin divider followed by `Find me on`-style social links and email.
- Preserve the original's simple profile flow. No terminal, illustration, profile-card panel, or banner composition.
- To retain factual education and credential records without inventing a new gallery, place a compact education/credential sentence in the Bio copy: BINUS University, Bachelor of Computer Science (2022–2026; GPA 3.80/4.00), plus the two Cognitive Class credentials. Confirm degree status against the current CV record before shipping if it has changed.

### Projects list and project detail

- Home list is flat, one column, and text-first: linked title, concise description, compact technology tags.
- Keep the five real Nixen project entries. Omit unsupported project years. Use an external action only when there is a project-specific URL.
- Do not use the previous V2 horizontal card/laptop showcase.
- Each detail page follows the reference sequence: back link, project title, valid primary action if available, concise summary, genuine project image if supplied, divider, Stack, and a small Features list.
- The current `githubUrl` values are profile links; do not label them “GitHub repository.” The GNN article link is an actual project-related external destination.
- No project-specific images are present in the checked assets. If Nixen does not provide images, omit the screenshot region from detail pages instead of rendering an empty frame or fake preview.

### Experience

- Keep the reference's unboxed chronological list.
- Each entry contains role, organization, dates, a concise summary, and only the strongest documented bullets.
- Use the two real Nixen roles and their existing dates. Do not reuse the reference's role count or content.
- Ensure long organization names wrap cleanly at mobile widths.

### Contact form

- Single-column Contact section: modest heading, short Nixen-specific invitation, social/email row, then form.
- Desktop: Name and Email may share one row; Message spans full width; submit action below. Reflow fields to one column on narrow screens.
- Keep the reference's concise field presentation and provide programmatic labels for assistive technology. Use quiet, thin outlines and subtle surface contrast like the reference.
- The current application only prepares a `mailto:` draft. The button/helper copy must say that it opens an email draft; do not fake a sent state. No success toast is in the reference evidence because the form was not submitted.

### Footer

- Thin divider and compact `© 2026 Nixen Jenio` line.
- Keep the footer on the same surface and width as the main content.
- No tagline or second brand lockup.

### Empty-state routes

Keep all four Explore destinations in the menu. Use a plain route title and one factual sentence, with no placeholder cards or decorative illustration:

- **Blog:** “No posts published yet.”
- **Guestbook:** “No messages yet.” Do not show a submission form unless a real persistence path is available.
- **Side Projects:** “No side projects listed yet.” Do not reclassify client or academic work as personal side projects.
- **Uses:** “Nixen’s tools and setup are not listed yet.” Do not treat package dependencies as proof of personal workstation preferences.

Copy may be adjusted to Nixen's voice, but these states must remain factual and minimal.

## 6. Expressive motion system

Motion is required to have visible personality while preserving the reference's calm, compact geometry.

### Motion primitives

| Token | Proposed value | Purpose |
| --- | --- | --- |
| `motion-fast` | 140–180 ms | Focus, hover, icon/link feedback |
| `motion-standard` | 220–300 ms | Menu, theme, button state |
| `motion-reveal` | 520–720 ms | Headline, Bio blocks, project/experience entrance |
| `motion-stagger` | 55–90 ms | Sequential words, tags, and list entries |
| `motion-ease` | `cubic-bezier(0.22, 1, 0.36, 1)` | Confident ease-out without overshoot |

These are implementation recommendations, not measurements of the source site.

### Choreography

1. **Page opening:** the NIXEN wordmark resolves first; the name heading enters with a per-word clip/reveal, followed by role, skills, and paragraphs. The page geometry remains reserved to avoid layout shift.
2. **On scroll:** Projects and Experience rows arrive with a clear stagger and short vertical reveal. Keep each item in its original text layout; no card transforms or background decoration.
3. **Project details:** the actual screenshot can reveal through a clipped crop, then respond to hover/focus with a contained scale. If there is no genuine screenshot, do not simulate one.
4. **Navigation:** menu and command palette use quick, clear open/close motion with focus moved into the palette. The active scroll marker glides between sections.
5. **Contact:** link and button interactions have short feedback. Input focus remains immediate. Announce form status accessibly and only report successful delivery if a backend confirms it.
6. **Route changes:** use a short page transition that never delays link navigation or content access.

### Reduced motion and interaction safety

- Under `prefers-reduced-motion: reduce`, remove translate/scale/parallax and reveal delays; render all content in its final readable state.
- Preserve menu state, focus rings, scroll position, links, and form feedback without animation.
- No scroll hijacking, cursor-following visuals, forced autoplay, or motion-dependent content.
- Motion must not obscure text or cause layout shift. Touch users receive the same clear states without hover-only behavior.

## 7. Accessibility and implementation constraints

- Use semantic header, navigation, main, section, form, and footer landmarks; one H1 per route.
- Provide accessible labels for icon-only links and buttons. Keep keyboard operation for menus and command palette, including Escape and focus return.
- Show strong visible keyboard focus in both themes.
- Check contrast for muted body text, compact metadata, tags, and form outlines in dark and light themes.
- Honor reduced motion and preserve all content if animation is disabled.
- Prevent horizontal overflow and maintain usable touch targets at mobile widths.
- Keep current Next.js/React dependencies unless implementation demonstrates a concrete need. The inspected `package.json` does not include Motion for React, shadcn/ui, or Lucide React. Use CSS/WAAPI and the existing inline SVGs for the first implementation proposal; do not add packages automatically. If a more complex motion library proves necessary, review that dependency separately before adding it.
- Use existing Next local font registration. `layout.tsx` already registers the actual Cajueira Display Semibold font at weight 600; this document proposes where to apply it, not a font-file change.

## 8. Acceptance checklist for implementation after approval

- [ ] The home page uses Nixen identity and sourced copy, with no creator-specific content.
- [ ] Main content remains close to the reference's narrow centered measure at desktop, tablet, and mobile.
- [ ] Work/Explore menus, Search palette, résumé/social links, theme toggle, desktop rails, and mobile bottom navigation work by keyboard and pointer/touch.
- [ ] Home section order is Bio, Projects, Experience, Contact, Footer.
- [ ] Project list is text-led and unboxed; project detail pages use real data and real screenshots only.
- [ ] Blog, Guestbook, Side Projects, and Uses remain in navigation and use truthful empty states where content is missing.
- [ ] Contact retains the truthful email-draft behavior unless a real delivery service is explicitly implemented.
- [ ] NIXEN and major headings use the actual local Cajueira Display Semibold 600 face; Geist body remains unchanged.
- [ ] Expressive motion is visible, layout-preserving, keyboard-safe, and disabled appropriately for reduced motion.
- [ ] Dark and light themes match the neutral reference palette, with no old blue, gradient, certificate-card, hero-art, or oversized V2 treatments.
- [ ] Playwright captures confirm desktop, tablet, and mobile layout, no horizontal overflow, and functional menu/search/theme states.

**Review gate:** this master is a proposal for discussion. Do not apply it to the app until Nixen approves the reference specification and this design system.
