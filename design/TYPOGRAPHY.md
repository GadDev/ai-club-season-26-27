# Typography — Signal Index

The typographic contrast does most of the art-direction work. One oversized condensed headline announces the club; normal-width reading text explains the programme; mono is a short metadata voice.

| Role | Family | Weight | Typical use | Constraint |
| --- | --- | --- | --- | --- |
| Display | League Gothic | 400 | `AI CLUB`, `26–27`, month headings, short track headings | Short phrases only; never body copy |
| Reading | IBM Plex Sans | 400 / 600 | Session titles, summaries, buttons, navigation | Preserve natural case and wrapping |
| Metadata | IBM Plex Mono | 400 / 500 | Date, format, status, count, eyebrow labels | At least 14px; no long paragraphs |

Use the fallbacks in [tokens.css](tokens.css). During implementation, self-host only the required weights and validate their licenses, accented French characters, the en dash, numerals, and punctuation. A font loading failure must leave the page readable and free of overlap. Do not turn generated image lettering into a font asset.

## Type scale

| Token / role | Mobile | Wide screen | Line height | Notes |
| --- | --- | --- | --- | --- |
| Hero display | 56px | up to 128px | 0.88–0.95 | Only once per page; avoid clipping ascenders/descenders |
| Season numeral | 64px | up to 144px | 0.9 | Decorative, repeated in accessible text nearby |
| Month heading | 36px | up to 64px | 1.0 | Full month and year in chapter |
| Track heading | 28px | up to 40px | 1.0 | Full written track label |
| Session title | 20px | up to 28px | 1.15–1.25 | IBM Plex Sans semibold; long titles wrap |
| Body | 16px | 16–18px | 1.5–1.6 | Summaries and explanatory text |
| Metadata | 14px | 14–16px | 1.35–1.5 | No cramped uppercase paragraphs |
| Button | 16px | 16px | 1.25 | IBM Plex Sans semibold, short label |

The existing CSS uses `clamp()` for hero, month, and card title. Tune against real content at 360px, 768px, 1280px, and 200% zoom. Do not force `white-space: nowrap` on a title, month label, or button. Keep the reading measure at 55–70 characters where practical.

## Hierarchy and casing

- One page `h1`: AI Club / Season 2026–27. Month chapters are `h2`; tracks are `h3`; session titles are `h4` only when that nesting is appropriate in the actual DOM.
- The visible masthead may split those words across decorative lines, while the semantic heading remains coherent.
- Uppercase condensed display is for AI CLUB, month and track labels. Body and session titles use sentence or title case as authored.
- Metadata may use uppercase for short labels such as `PROPOSED FOR OCTOBER`; status text is still explicit.
- Use tabular numerals for aligned dates and counts when the font supports them. Avoid letterspacing body copy; modest tracking is allowed for small uppercase metadata.
- Underline text links. A decorative arrow or shape never substitutes for the link label.

## Copy specimens

`AI CLUB` / `SFEIR LUXEMBOURG` / `SEASON 26–27` form the text lockup. Example content in the visual sheet is illustrative; the public page uses approved session titles and summaries from the season content files. V1 does not print presenter names.
