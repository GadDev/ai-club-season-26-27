# Layouts — Signal Index

The public season page has a season overview and chronological chapters. Session details and About have separate navigable views. The whole programme remains navigable even if no event has a confirmed date. The page references provide rhythm; the written rules below govern behavior.

## Page order

1. Skip link and compact navigation.
2. Masthead with `AI CLUB`, `SFEIR LUXEMBOURG`, `SEASON 26–27`, and a short promise.
3. “The season at a glance” index, covering October 2026 through June 2027 and all three tracks.
4. Dark featured band: next confirmed event or “No date confirmed yet.” beside three representative proposals (one on mobile). These are editorial highlights, not confirmed events.
5. Nine chronological month chapters. Each chapter contains Foundations, Engineering, and Deep Dive, including truthful empty states. Empty tracks use a compact heading, coloured top rule, and one-line message; full colour bands are reserved for populated tracks.
6. Footer with basic club context and links that actually exist.

The next-event panel is secondary to the season overview. Do not let a giant hero delay the index beyond the first meaningful scroll.

## Breakpoints

| Viewport | Index | Month chapters | Gutters |
| --- | --- | --- | --- |
| `<48rem` | Three-column month jump grid, three rows; each month is named with year available in label | Tracks stack within each month, full text visible | 16px |
| `48–79.99rem` | Three sets of three months; tracks remain clearly labelled in each set | One or two card columns based on space | 24px |
| `≥80rem` | Nine month columns × three track rows, compact counts/marks only | Up to three card columns if summaries retain a readable width | 48px |

At 200% browser zoom, the effective CSS viewport becomes narrower; allow the layout to reflow. The grid is not a wide table squashed to phone size. No horizontal page scrolling is required to reach a session.

## Desktop anatomy

The masthead can use a two-column editorial composition: wordmark and promise on one side, season numerals or a single cut-paper accent on the other. Below, the index uses a fixed track-label column plus nine flexible month columns. Only short month labels and counts appear inside cells. Full titles live in the chapters. The row band names the track on every line; do not rely on color alone. Empty cells contain an em dash or equivalent plain mark with an accessible empty label, not a link.

Each month chapter begins with a full month/year heading and flows into three track groups. Cards use normal document flow; use grid for placement without changing DOM order. The next event card may span columns but must never pull a proposed topic into a confirmed-event slot.

## Mobile anatomy

The masthead reduces in height while retaining the text lockup, compact season numerals, and a cropped paper/ink fragment. The month jump grid uses three equal columns with comfortable targets; each label remains legible in French and English. The month chapters then stack three track bands and their cards. All groups are expanded by default. The generated mobile image suggests chevrons, but a collapsed accordion is **not** the V1 rule.

Keep actions beneath readable summaries instead of floating them over imagery. A decorative texture strip can appear at the top of a section, but not behind metadata. The next event fallback remains visible as a compact notice after the overview and before the detailed chapters. Reserve the larger event panel for a confirmed booking.

## Data-driven edge cases

- A month can have zero, one, or many sessions in each track. Counts are derived from approved public records, not the brainstorm board.
- A pair of proposed lunch/workshop ideas does not become two scheduled events. Their records and confirmations are independent.
- Proposed cards sort by editorial order within a target month; scheduled cards use verified start times. Make the ordering rule explicit in the content loader.
- A scheduled event near a month boundary uses its Europe/Luxembourg date for placement; never duplicate a contradictory `targetMonth`.
- Preserve a cancelled card when the programme needs to communicate the change. Keep its original title and a clear status.
- If a chapter has no approved sessions, it still exists with a concise empty message.

## Visual references

[Desktop](references/season-desktop.webp) and [mobile](references/season-mobile.webp) convey proportions; their event names and counts are fabricated examples. The [UI sheet](references/signal-index-ui-sheet.webp) is a visual specimen and [moodboard](references/signal-index-moodboard.webp) defines character. None is a source of event data or exact CSS measurements.

## Hero texture

The implementation uses `src/assets/hero-print.svg`: scalable torn-paper shapes, sparse ink strokes, and seeded grain. It is decorative, has no pointer events, and carries no programme information. Keep it around the season mark and away from the reading area. Use no animation or full-page texture.

## Shared page shell and navigation

The masthead uses a full-width poster composition: large AI CLUB wordmark and drawn arrow, adjacent SFEIR Luxembourg/season lockup, a cut-paper print fragment, and large season numerals. The index runs edge-to-edge below it. The footer repeats the navy surface with a club statement, real navigation links, season dates, and back-to-top.

GitHub Pages views use query parameters so deep links and refreshes work without server rewrites: `?page=about`, `?session=<id>`, `?page=voting`, and `?page=materials`. A missing session shows a recovery link. Main-page month and card anchors remain valid.

Voting and materials are labelled design previews throughout. No account verification, ballot submission, completed-session status, player, or downloadable resource is fabricated. Session details use the actual YAML record; unpublished resources get an honest empty state.

Visual fidelity targets the reference's hierarchy, proportions, typography, surfaces, and print motifs. Generated sample content and fixed image dimensions are not pixel-level acceptance criteria for responsive pages.

## Exact hero artwork — supersedes the poster reconstruction

The user requires exact fidelity to `references/signal-index-concept.webp`. `SiteHeader` renders that source directly and clips it with CSS to its original header bounds: 1672 × 281 pixels. At 1672 CSS pixels wide, the hero must match the source crop pixel for pixel. At other widths, scale the whole artwork uniformly; do not retypeset, recolor, regenerate, or reposition any part. This intentionally uses image lettering, with equivalent alternative text. Navigation is a separate 44px-minimum-height row below the artwork, keeping readable links on mobile without altering the reference hero. The same artwork appears on every page.
