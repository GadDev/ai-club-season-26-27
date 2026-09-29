# Design system — Season Index

**Status:** V1 design specification, 29 September 2026. [Art direction](ART_DIRECTION.md) explains the exploration and selection. [design/tokens.css](design/tokens.css) is the code-ready token source. The UI has not been implemented.

## Principles

1. **A year first.** The whole October–June programme must be discoverable before the first card is opened.
2. **Three visible lanes.** Foundations, Engineering, and Deep Dive remain recognizable throughout the page without suggesting a required progression.
3. **Editorial hierarchy over decoration.** Typography and spacing carry the story; lines and colour help navigation.
4. **Truthful status.** A target month, confirmed date, completed session, and cancellation must look and read differently.
5. **Accessible at every density.** The design must survive empty cells, four sessions in one track, narrow screens, keyboard use, and long titles.

## Colour

These are AI Club design tokens, not claimed SFEIR brand colours. The palette is light-only for V1; an inverted theme needs a separately tested palette.

| Role | Token | Value | Use |
| --- | --- | --- | --- |
| Canvas | `--color-canvas` | `#F6F4EE` | Page background |
| Paper | `--color-paper` | `#FFFFFC` | Cards and raised content |
| Ink | `--color-ink` | `#18252D` | Headings and primary text |
| Muted ink | `--color-muted` | `#4D5A63` | Secondary text |
| Rule | `--color-rule` | `#B8C3C7` | Decorative section separators only |
| Control border | `--color-control-border` | `#728087` | Inputs and essential boundaries |
| Foundations | `--color-foundations` | `#215F58` | Track label and small rule |
| Engineering | `--color-engineering` | `#244C7B` | Track label, links |
| Deep Dive | `--color-deep-dive` | `#653C73` | Track label and small rule |
| Signal / focus | `--color-signal` | `#A6462E` | Next-event accent, focus outline |

Contrast checks on the specified backgrounds: ink on canvas **14.23:1**, muted ink on canvas **6.45:1**, the three track colours on paper **7.37:1 / 8.75:1 / 8.57:1**, signal on paper **5.93:1**, and control border on paper **4.07:1**. These computed pairs clear the usual 4.5:1 text and 3:1 non-text thresholds; actual rendered components still need visual and automated checks. The pale rule has only **1.80:1** on paper and must never be the sole boundary of a control or the only status cue. See [WCAG contrast guidance](https://www.w3.org/WAI/WCAG22/quickref/).

Track colour is always paired with the written track name. A link has an underline in running text. Status uses text and border treatment, never hue alone.

## Typography

| Role | Family | Scale | Notes |
| --- | --- | --- | --- |
| Season display | Newsreader, Georgia fallback | `clamp(2.75rem, 5vw, 4.75rem)` | Limited to the masthead |
| Month / section heading | Newsreader, Georgia fallback | `clamp(1.75rem, 3vw, 2.75rem)` | Clear chapter rhythm |
| Body and cards | IBM Plex Sans, system-ui fallback | `1rem` body, `1.25rem` card title | Body line-height 1.5–1.6 |
| Metadata | IBM Plex Mono, ui-monospace fallback | `0.875rem` | Dates, track numbers, format labels; avoid long prose |

Use the fonts as a proposal for visual identity. When implemented, self-host only the necessary WOFF2 weights and keep system fallbacks. Newsreader and IBM Plex are available under open font licences from their creators ([Newsreader](https://github.com/productiontype/Newsreader), [IBM Plex](https://github.com/IBM/plex)).

Use sentence case for session titles and summaries. Uppercase may mark short metadata labels, with modest letter spacing; never set full descriptions in all caps. Let titles wrap, including in French. Aim for about `70ch` in long text blocks.

## Grid and spacing

- Content width: up to `80rem`, centered.
- Page gutters: `1rem` on small screens, `1.5rem` on medium, `3rem` on wide screens.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96 px, used through the `--space-*` tokens.
- Cards: paper background, 1 px essential border where clickable, 4 px radius, no default shadow. Hover may shift the border/underline, without changing layout.
- Alignment: dates and metadata align to a consistent left edge; summaries use a comfortable reading measure. Avoid equal-height cards that create large blank areas.

### Responsive composition

| Width | Season index | Month chapter |
| --- | --- | --- |
| Wide, at least 80rem | Nine month columns with three track rows; cells show count/presence | Three track columns with readable cards |
| Medium, 48–79.99rem | Three blocks of three months | Three columns if space permits; otherwise stacked |
| Small, below 48rem | Compact month jump grid; no page-level horizontal scroll | Month heading followed by the three tracks in order |

The index is a table of contents, not the sole source of information. If implemented as a visual matrix, use semantic row/column headers or an equivalent labelled structure. A mobile alternative must avoid duplicate announcements to assistive technology. All month anchors and cards work with keyboard and browser history.

## Components

### 1. Masthead

Small `AI CLUB / SFEIR LUXEMBOURG` line, large `Season 2026–2027` title, and a plain statement of purpose. Keep the SFEIR mark subordinate to the programme title and use an approved official asset. No rotating slogan or full-screen hero art.

### 2. Season index

Shows October–June and the three named tracks. A cell may show a count and a link to that month's track. Example accessible name: **“March 2027, Engineering, four sessions.”** Zero is shown as an honest empty state. Do not draw a line between cells that implies a prerequisite or a planned event.

### 3. Next confirmed event

A narrow callout with date, time in `Europe/Luxembourg`, title, track, and a month anchor. If no confirmed future date exists, show **“No date confirmed yet”** with a link to the proposed programme. It is recalculated from the current time when the static page loads; the fallback must remain understandable without JavaScript.

### 4. Month chapter

Month name and year, optional one-sentence editorial theme only if curated, then the three track areas. A track can have multiple cards. If empty, show **“No session planned in this track”** in muted text without a fake card.

### 5. Session card

Information order: status/date → track → title → summary → format → confirmed presenter, if known. A title is never truncated as the only readable label. The whole card need not be clickable in V1; link only to an actual destination. Future links to resources or voting controls can be added without changing the core content hierarchy.

| Status | Written label | Visual treatment |
| --- | --- | --- |
| Proposed | “Proposed for March” | Dotted border and target month; no calendar day |
| Scheduled | “12 March 2027 · 12:30” plus “Scheduled” | Solid border; date emphasized |
| Completed | “Completed” plus actual date | Quieter surface; resources shown only when available |
| Cancelled | “Cancelled” and date if known | Explicit label and optional reason; title remains legible |

The samples specify treatment, not real AI Club events.

### 6. Future ballot and resources

V2 adds a single, clearly labelled choice control per eligible proposal and a selected state. It must explain the voting window and outcome rules. V3 adds labelled presentation/replay links, duration or file type, and access wording. Neither control appears as a disabled teaser in V1.

## Interaction and accessibility

- All actionable targets aim for at least **44 × 44 CSS px** including padding.
- Focus is always visible: a 3 px signal outline with 2 px separation. Do not remove native focus without replacement.
- Keyboard order follows the reading order: index → next event → month chapters.
- Use semantic headings, links, lists, and buttons. Never make a decorative dot the only interactive target.
- Motion is limited to 120–180 ms colour/underline changes. Respect `prefers-reduced-motion` and avoid animated timeline travel. See [MDN's reduced-motion guidance](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion).
- Dates include day, month, year, and timezone where time is shown. Do not encode certainty in opacity alone.
- Test at 360 px width, 200% zoom, keyboard only, and with a screen reader before V1 publication.

## Content and imagery rules

Titles should name the subject or engineering question. Summaries should say what attendees will understand or try in one or two sentences. Formats are short literal labels: Talk, Workshop, Demo, Lab, Discussion. Avoid jargon as decoration, hype words, and gamified progress language.

The timeline does not require illustrations. Later session imagery should express a concrete concept and remain optional to comprehension. Do not embed text or status in images.

## Design acceptance test

Before implementation is accepted, populate the layout with the real season inventory and inspect:

- nine months in one index;
- three tracks visible in every month;
- a long title, a missing presenter, a target month without a date, and a cancellation;
- several sessions in one track and an empty neighboring track;
- the next-event change when an event time passes;
- no fake vote or replay affordance in V1.

The visual system succeeds when a visitor can scan the whole season and still read individual sessions without deciphering a chart.
