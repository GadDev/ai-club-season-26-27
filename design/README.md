# Signal Index implementation guide

This directory translates the chosen AI Club / SFEIR Luxembourg visual direction into code-ready rules. V1 is a public, read-only season timeline. Session details are public, while presenter identity is omitted from this first release.

## Start here

| File | Covers |
| --- | --- |
| [Foundations](FOUNDATIONS.md) | Color roles, spacing, borders, surfaces, editorial marks |
| [Typography](TYPOGRAPHY.md) | Font roles, type scale, casing, wrapping, loading |
| [Components](COMPONENTS.md) | Anatomy, variants, states, semantics, buttons and cards |
| [Iconography](ICONOGRAPHY.md) | Icon inventory, 24px grid, accessible usage and SVG sources |
| [Layouts](LAYOUTS.md) | Desktop, tablet, mobile composition and responsive behavior |
| [CSS tokens](tokens.css) | Initial values for implementation |
| [Visual references](references/README.md) | Moodboard, one-sheet UI specimen and page concepts |

The root [DESIGN_SYSTEM.md](../DESIGN_SYSTEM.md) states the product principles and accessibility baseline. The [season board](../SEASON_BOARD.md) is editorial draft content, not a set of booked events.

## Authority and implementation order

1. Real approved content and the status rules in [TECH_STACK.md](../TECH_STACK.md) determine what can be shown.
2. These written component and layout rules, together with `tokens.css`, define implementation behavior.
3. The images show art direction and hierarchy. Generated words, dates, counts, status colors, and controls in them are illustrative and may be inconsistent.

Build V1 in this order: static content validation → semantic month and track sections → season index → session cards and honest empty states → responsive layout → visual accents. Voting and materials have explicitly labelled preview pages following the September 29 design expansion. These previews contain no authentication, vote collection, player, or unapproved resource links.

## Design review checklist

- The nine-month view exposes all three parallel tracks and does not suggest every cell is occupied.
- A proposed month has no fabricated day or “next event” treatment. A scheduled session has a verified date and time.
- Every meaningful control has visible text or an accessible name, keyboard focus, and a 44px target.
- Track colors are always named. Status is always written. Texture never sits behind small text.
- At 360px and 200% zoom, titles wrap, controls remain reachable, and no content is clipped.
- The UI contains no public presenter identity, fake event, vote button, replay player, or private meeting link.
