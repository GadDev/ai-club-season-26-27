# Iconography — Signal Index

The icons are **navigation aids**, not a competing illustration language. Use simple squared geometry, a consistent stroke, and the same directional vocabulary as the editorial arrows. Never infer status from an icon alone.

## Construction

- Source assets live in [`icons/`](icons/). They are monochrome SVGs using `currentColor` on a 24×24 viewBox.
- Default stroke width: 2px; square line caps and miter joins. Navigation icons are outlined; the season topic glyphs below deliberately use solid silhouettes.
- Render at 20px beside text and 24px in larger controls. Keep a 4px minimum gap from the label. The clickable area is at least 44×44px, even when the glyph is small.
- Use navy on paper, paper on navy, white on cobalt, navy on citron/vermilion. Do not place small vermilion icons on paper.
- Use a CSS transform for direction only when meaning stays correct; do not rotate a calendar, file, play, or information symbol.
- Avoid emoji, brand marks, AI brain/circuit icons, and a different icon style on each card.

## Inventory

| Asset | Meaning | V1 usage |
| --- | --- | --- |
| [`arrow-right.svg`](icons/arrow-right.svg) | Follow a labelled link | Button suffix, session detail link |
| [`arrow-down-right.svg`](icons/arrow-down-right.svg) | Jump into the season | Index eyebrow; decorative if adjacent label already names destination |
| [`chevron-down.svg`](icons/chevron-down.svg) | Expand or disclose | Reserved; avoid default accordion in V1 |
| [`calendar.svg`](icons/calendar.svg) | Confirmed date | Next event metadata, when an actual date exists |
| [`clock.svg`](icons/clock.svg) | Confirmed time | Scheduled event metadata |
| [`external-link.svg`](icons/external-link.svg) | Opens an external destination | Approved resource links when present |
| [`information.svg`](icons/information.svg) | Additional explanation | Explicit help or About link |
| [`check.svg`](icons/check.svg) | Completed | Optional suffix to written status |
| [`close.svg`](icons/close.svg) | Cancelled / dismiss | Optional suffix to written status; button only with a label |
| [`play.svg`](icons/play.svg) | Replay available | V3 only, never a fake V1 player |
| [`file.svg`](icons/file.svg) | Presentation or document | V3 only when a real resource exists |

## Season topic glyphs

The season grid uses the original concept’s geometric vocabulary, redrawn in `src/TopicSymbol.tsx`: circles, overlaps, layers, triangles, squares, horizons, clusters, diamonds, paired bars, steps, checkerboards, hexagons, triads, split squares, asterisks, hourglasses and grids. They are monochrome, use `currentColor` on a 48×48 viewBox, and render at 34px (26px when a cell contains multiple topics).

These are decorative topic associations, not status or track codes. Every glyph has an adjacent short topic label. `content/topics.yaml` assigns one label and symbol to each stable pair ID; the talk and workshop share this metadata. Multiple pairs show every label and glyph, plus a secondary topic count. Full session counts remain in accessible link names. An unpaired session falls back to its full title and a circle. Missing paired metadata fails content validation.

Do not crop icons from the bitmap reference or substitute emoji. Preserve crisp vector geometry and give each glyph the same optical footprint.

## Accessibility and implementation

- When adjacent visible text already supplies the meaning, set the SVG `aria-hidden="true"` and `focusable="false"`; the link/button owns the accessible name.
- An icon-only control is exceptional. If it is genuinely required, provide a visible tooltip or adjacent text and an `aria-label` that names the action, not the glyph.
- Do not place informative icons in CSS backgrounds. SVG can inherit the text color and respond to high-contrast preferences.
- Icons are not separate tab stops. Avoid SVG `<title>` that duplicates a button label.
- Use the provided paths directly or wrap them in a reusable Icon component with a closed `name` union. Do not mix them with a new icon package without aligning stroke, grid, and optical size.
