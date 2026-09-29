# Design system — The Signal Index

**Status:** selected V1 direction, 29 September 2026. [Art direction](ART_DIRECTION.md) describes the choice; [design/tokens.css](design/tokens.css) contains the initial design tokens. The [implementation guide](design/README.md) specifies foundations, typography, components, icons, and responsive layouts. [Reference images](design/references/README.md) show visual hierarchy, not actual programme content.

## Design principles

1. **Season first.** The whole October 2026–June 2027 programme is visible before an individual session is opened.
2. **Three parallel tracks.** Foundations, Engineering, and Deep Dive remain clearly labelled throughout the page. Their colours do not imply a required progression.
3. **Bold shell, calm content.** Oversized display type and cut-paper accents create identity; session information uses quiet, readable surfaces.
4. **Honest certainty.** Proposal month, confirmed date, completed session, and cancellation each use explicit words.
5. **Mobile is composed separately.** The desktop 9 × 3 index becomes a month jump grid on a phone. Track sections stack below it.
6. **Phases stay distinct.** Voting and replays appear only when the underlying capability exists.

## Identity and palette

AI CLUB is the primary display name. SFEIR LUXEMBOURG is a smaller text endorsement. The mockups do not include an official SFEIR logo; final logo use needs an approved asset.

| Role | Token | Hex | Allowed use |
| --- | --- | --- | --- |
| Navy ink | --color-ink | #14212E | Headings, text, dark panels |
| Warm paper | --color-paper | #F7F2E7 | Page and card background |
| White | --color-white | #FFFFFF | Text on navy or cobalt |
| Cobalt | --color-cobalt | #2348D8 | Engineering band, links, primary focus |
| Vermilion | --color-vermilion | #F45135 | Deep Dive band, large accents |
| Citron | --color-citron | #E7EF65 | Foundations band, small signal accents |
| Muted text | --color-muted | #56616B | Secondary copy on paper |
| Control edge | --color-control-border | #78838A | Boundaries that users must perceive |
| Decorative rule | --color-rule | #C7C9C4 | Nonessential separators only |

**Text pairings:** navy on paper (14.62:1), white on navy (16.32:1), white on cobalt (7.02:1), navy on citron (13.16:1), navy on vermilion (4.72:1), and muted text on paper (5.67:1). Vermilion on paper is only 3.10:1: use it for large display type or decoration, never small text. White on vermilion is 3.46:1: use navy text there. Essential control borders on paper have at least 3:1 contrast; decorative rules do not convey state. Check rendered colour pairs against [WCAG 2.2 guidance](https://www.w3.org/WAI/WCAG22/quickref/).

Track colours are paired with the names FOUNDATIONS, ENGINEERING, and DEEP DIVE. A status is never conveyed by colour or texture alone.

## Type

| Role | Chosen family | Use |
| --- | --- | --- |
| Display | League Gothic, then a condensed sans fallback | AI CLUB, season numerals, month headings, large calls to action |
| Reading | IBM Plex Sans, then system-ui | Summaries, controls, explanations |
| Metadata | IBM Plex Mono, then ui-monospace | Dates, formats, status labels, track counts |

Self-host only required font weights when the UI is built; keep fallbacks. [League Gothic](https://www.theleagueofmoveabletype.com/league-gothic) and [IBM Plex](https://github.com/IBM/plex/) are open-source fonts.

[Typography specifications](design/TYPOGRAPHY.md) define scale, casing, wrapping, and font-loading checks. The generated visual sheet is a specimen, not a font file.

- Hero: clamp(3.5rem, 8vw, 8rem), line height close to 0.9, used once.
- Month heading: clamp(2.25rem, 5vw, 4rem).
- Session title: clamp(1.25rem, 2vw, 1.75rem), with natural wrapping.
- Body: 1rem / 1.5–1.6 line height.
- Metadata: at least 0.875rem; no paragraphs in all caps or mono.

Avoid text embedded in imagery. French-length titles must wrap without being clipped.

## Structure and spacing

Use a maximum content width of 80rem. Gutters: 1rem on mobile, 1.5rem on tablet, 3rem on wide screens. Use the 4/8/12/16/24/32/48/64/96 px spacing scale. Card surfaces are flat paper with a visible border; strong shadows are unnecessary. A diagonal cut or arrow can punctuate a section, never obscure a label.

### V1 desktop season page

1. Compact navigation: SEASON and ABOUT only if About exists.
2. Bold masthead: AI CLUB, SFEIR LUXEMBOURG, SEASON 26–27, one-line promise.
3. Whole-season index: nine months as columns, three tracks as rows. Cells contain a count or presence mark and link to a month/track section. Empty cells remain empty.
4. Next confirmed event: a smaller strip derived from verified dates, with a clear fallback when none exists.
5. Month chapters: full session titles, short summaries, format, track, explicit status, and confirmed date where available. No presenter identity in V1.

The [desktop reference](design/references/season-desktop.webp) demonstrates hierarchy. Its counts and titles are illustrative. Do not hard-code them.

### V1 mobile season page

At widths below 48rem, use a three-column month jump grid (October through June) followed by month chapters. Within a chapter, Foundations, Engineering, and Deep Dive stack vertically. The [mobile reference](design/references/season-mobile.webp) demonstrates the composition. All content remains available without horizontal page scrolling; avoid automatic collapsed sections that hide the programme.

At 48–79.99rem, group the index into three sets of three months. At 80rem and above, show the complete nine-month matrix.

## Components and states

The [component specification](design/COMPONENTS.md) defines anatomy, variants, semantic elements, buttons, status treatment, and edge cases. The [icon catalog](design/ICONOGRAPHY.md) includes SVG sources. The [layout specification](design/LAYOUTS.md) defines each breakpoint. The table below is a compact summary.

| Component | Required information | Treatment |
| --- | --- | --- |
| Month cell | Month/year, session count or empty state | Compact mark plus text/accessible label; link to chapter when populated |
| Track heading | Full track name | Citron + navy for Foundations; cobalt + white for Engineering; vermilion + navy for Deep Dive |
| Proposed card | Title, summary, track, target month | Written “Proposed for [month]”, dotted or broken outline, no day |
| Scheduled card | Title, summary, track, confirmed start | Written “Scheduled”, date/time in Europe/Luxembourg |
| Completed card | Title, actual date, available resources | Written “Completed”; materials shown only when present |
| Cancelled card | Title, status, optional reason | Written “Cancelled”; title remains legible |
| Next event | Closest future confirmed event | Small highlight; if none, “No date confirmed yet” |
| Empty track | None planned | Plain text, no fake disabled card |

The bold reference images sometimes imply that every cell has content. The implementation must render real data, including empty months and multiple sessions in one cell.

## Interaction and accessibility

- The page uses semantic headings, list or table relationships, links, and buttons. Interactive marks get accessible names such as “November 2026, Engineering, two sessions.”
- Keep logical keyboard order from the season index into chronological month chapters. Provide visible 3px focus outline with separation; cobalt on paper meets text contrast.
- Aim for 44 × 44 CSS px touch targets. Links in prose are underlined.
- Motion is limited to 120–180ms colour or underline changes, with reduced-motion preference respected. Avoid animated travel along the timeline.
- At 200% zoom and 360px width, no essential text is cropped or hidden behind decorative shapes.
- Do not rely on texture, opacity, icon shape, or hue alone for status. A session title must remain readable even when long.
- The reference images are generated visual concepts. Recreate the design in HTML/CSS with real, selectable text and accessible controls.

## Later phases

**V2 ballot:** use the same session card vocabulary with one radio-style choice per eligible SFEIR account and a clear summary before submission. No popularity bars, likes, or vote totals in the attendee view. The [voting concept](design/references/voting-concept.webp) is a future layout, not an implemented flow. Actual identity, rules, and backend enforcement are defined in the product and technical documents.

**V3 materials:** use a completed-session page with a clear replay area, transcript access, and labelled presentation/repository links. No autoplay, fake player, or public thumbnail that reveals restricted content. The [materials concept](design/references/session-replay-concept.webp) is a future layout; publication and access policies must be settled first.

## Visual acceptance

Test the layout with the real programme before implementation is accepted: nine months, three tracks, a long title, an unconfirmed proposal, a cancellation, multiple sessions in one track, an empty neighbour, and a next-event transition after its start time. The visual system succeeds when the season is both exciting at first glance and easy to read in detail.
