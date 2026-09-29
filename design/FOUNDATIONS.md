# Foundations — Signal Index

The identity is a **bold editorial wrapper around a calm programme**. Use the dark masthead, compressed display type, hard grid, and a small number of cut-paper gestures. The content area stays flat, readable, and mostly warm paper.

## Palette and roles

| Role | Token | Hex | Use |
| --- | --- | --- | --- |
| Ink | `--color-ink` | `#14212E` | Default text, masthead, primary button |
| Paper | `--color-paper` | `#F7F2E7` | Page and card surfaces |
| White | `--color-white` | `#FFFFFF` | Text on navy or cobalt |
| Cobalt | `--color-cobalt` | `#2348D8` | Engineering track, links, focus on paper |
| Vermilion | `--color-vermilion` | `#F45135` | Deep Dive track, large display accent |
| Citron | `--color-citron` | `#E7EF65` | Foundations track, focus on dark surfaces |
| Muted | `--color-muted` | `#56616B` | Secondary copy on paper |
| Control edge | `--color-control-border` | `#78838A` | Essential borders on paper |
| Decorative rule | `--color-rule` | `#C7C9C4` | Nonessential separators only |

Use navy text on citron and vermilion; use white on cobalt. Track colors do not encode status. Proposed, Scheduled, Completed, and Cancelled are written in words on neutral labels. The generated UI sheet has track-colored examples; treat its color chips as art direction, not a canonical status mapping.

The usable text pairs are navy/paper, white/navy, white/cobalt, navy/citron, navy/vermilion, and muted/paper. Vermilion/paper is reserved for large display accents; white/vermilion is avoided for small text. Recheck actual rendered pairs, particularly over image texture.

## Grid, spacing and edges

- Base spacing unit: 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px.
- Content width: `min(100% - 2 × gutter, 80rem)`; reading copy up to `70ch`.
- Mobile gutter 16px, tablet 24px, wide desktop 48px.
- Component borders: 1px navy for structural cards, 2px navy for control emphasis. A decorative rule may use the lighter rule token only when it carries no state.
- Corners are square (`0px`). No pill chips, drop shadows, glass effects, or gradients as a system convention.
- Internal card padding: 16px mobile, 24px desktop. Space sibling cards by 12–16px.
- Use a 3px focus outline separated by 2px from the element. Cobalt on paper; citron on navy.

## Editorial accents

Use at most one major torn-paper seam per screen section. The cobalt print texture belongs in the masthead, a section break, or the outer corner of a card; keep text and controls on solid surfaces. A vermilion arrow can point toward a section but must never be the only direction cue. Do not crop a title for effect.

## States and responsive constraints

Hover may change underline, border weight, or surface in 120–180ms. No motion is needed to understand the season. Respect reduced motion. A disabled-looking card is not an empty state; use plain language such as “No session planned yet.” Do not lower text opacity to imply status.
