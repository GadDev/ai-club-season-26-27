# Components — Signal Index

**Scope:** V1 public season timeline. These specifications are implementation guidance for semantic HTML and CSS. Text and data rules in [TECH_STACK.md](../TECH_STACK.md) take precedence over the generated visual references. All meaningful content remains selectable text.

## Component map

| Component | Phase | Variants / states | Semantic base |
| --- | --- | --- | --- |
| Site masthead | V1 | desktop, compact mobile | `header`, one `h1` |
| Navigation | V1 | current, hover, focus | `nav`, links |
| Button / action link | V1 | primary, secondary, text; hover, focus | `button` for action, `a` for navigation |
| Season index | V1 | full 9×3, grouped 3×3, month jump grid | labelled navigation + links |
| Month cell | V1 | populated, empty, current focus | link when populated; text when empty |
| Month chapter | V1 | occupied, empty | `section` with `h2` |
| Track band | V1 | three tracks | `h3` inside section |
| Session card | V1 | proposed, scheduled, completed, cancelled | `article` or list item |
| Status label | V1 | four written states | text, optional decorative icon |
| Next confirmed event | V1 | scheduled event or honest fallback | `aside` / section |
| Empty state | V1 | month or track | plain text |
| Divider / accent | V1 | line, arrow, paper cut | decorative only |
| Ballot choice | V2 only | selected, unselected, submitted | native radio control |
| Resource link / replay | V3 only | available, restricted, missing | labelled link / accessible player |

## Buttons and links

| Variant | Surface | Text and edge | Use |
| --- | --- | --- | --- |
| Primary | Navy | Paper text, 1px navy edge | One clear call to action in a section, e.g. “View session” |
| Secondary | Paper | Navy text, 2px navy edge | Parallel but less prominent navigation |
| Text link | Transparent | Navy or cobalt, underlined, optional right arrow | Inline and low-priority navigation |

- Minimum target: 44×44px; preferred button height 48px, 12px vertical and 20px horizontal padding. Corners remain square.
- Labels use IBM Plex Sans semibold at 16px. The decorative arrow is 20px and follows the words; do not create an unlabeled arrow-only link.
- Hover/focus does not depend on hue alone: underline, visible border, or outline changes. Focus uses a 3px outline with 2px separation (`cobalt` on paper, `citron` on navy).
- Pressed state may translate at most 1px or deepen the inset border; no bounce. Respect reduced motion.
- Do not display a dead primary button when a session is only proposed. A proposal card may link to its real detail anchor; otherwise it is static content.
- A disabled style is reserved for a genuinely unavailable action, accompanied by an explanation. V1 usually has no disabled buttons.

## Site masthead and navigation

The masthead has the text lockup `AI CLUB`, `SFEIR LUXEMBOURG`, `SEASON 26–27`, and a brief promise on a navy surface. Keep the compressed type in the masthead only. One cut-paper seam or cobalt printed accent is enough. Navigation contains `Season` and `About` only if those destinations exist. Mark the current page with `aria-current="page"`, a short vermilion underline, and a text label. On mobile, the layout stacks without hiding the season behind a menu.

## Season index and month cell

The index is a **way to jump to the real month sections**, not a second copy of every card. Desktop ≥80rem shows nine month columns and three track rows. Tablet 48–79.99rem shows three sets of three months. Mobile <48rem shows a three-column month jump grid, followed by all month chapters with stacked tracks.

Cell anatomy: month/year context, track name in its row or accessible name, count of approved public sessions or a clear empty mark. A populated cell links to its month/track anchor and gets an accessible label such as “November 2026, Engineering, two sessions.” A cell with no session is not a misleading link. Do not use a generic decorative glyph as the count or label. The currently visible month may have a subtle rule emphasis, but not a false “scheduled” badge.

The board's proposed lunch/workshop **pair** is not two scheduled events. When converted to content, each approved part gets its own card and independent status. Multiple cards can occupy the same cell; an empty cell remains honest.

## Month chapter and track band

A month chapter includes a full month/year heading, optional factual intro, and three track groups in the same order: Foundations, Engineering, Deep Dive. Every track is written in full. The band uses citron/navy, cobalt/white, or vermilion/navy respectively. The band can contain a short explanatory phrase on desktop; hide that optional phrase before squeezing the name. The group remains visible on mobile, even if empty. Do not use accordions by default; they would bury the season.

## Session card anatomy

1. **Context:** track and month through the containing chapter, plus format (`Talk`, `Workshop`, `Demo`, `Lab`, or `Discussion`).
2. **Written status:** Proposed for month, Scheduled, Completed, or Cancelled. Never color alone.
3. **Title:** authored, wraps naturally, full text exposed to assistive technology.
4. **Summary:** one or two readable sentences; no filler text if no approved copy exists.
5. **Date line:** only a verified scheduled/completed instant, formatted for Europe/Luxembourg. A proposal shows month only.
6. **Action:** link to a real detail anchor/page if it exists. Do not invent a registration link, presenter, replay, or venue.

Card surface: paper, 1px ink border, 16px mobile / 24px desktop padding, no heavy shadow. A small track-colored corner accent is optional and never sits behind title, summary, or controls. Use space and a short metadata rule to separate sections. Cards are not nested inside links when they also contain separate actions.

| Status | Required data | Visible wording | Treatment |
| --- | --- | --- | --- |
| Proposed | title, summary, track, target month | `Proposed for October 2026` | Neutral label with broken border; no day or time |
| Scheduled | title, summary, track, confirmed `startsAt` | `Scheduled` and verified date/time | Neutral solid label; normal card border |
| Completed | title, actual date | `Completed` | Neutral solid label and optional check mark; materials only if approved and available |
| Cancelled | title, status, optional reason | `Cancelled` | Neutral solid label and optional cross; keep title and explanation legible |

The visual UI sheet is an **art-direction specimen**. Its colorful card corners refer to tracks; status labels in the implementation follow this table. A generated scheduled example with no date is not a valid V1 content record.

## Next event and empty states

The “Next confirmed event” panel selects the closest future **scheduled** session using the current clock. It shows a real title, track, verified date/time, and a labelled link if one exists. If no future scheduled session exists, show **“No date confirmed yet.”** The panel never promotes a proposed month.

An empty track says **“No session planned yet.”** An entirely empty month still appears in the season navigation and month chapters. Empty state imagery is optional and decorative; no disabled card, fake count, or placeholder person.

## Future-only patterns

- **V2 ballot:** one native radio choice per eligible SFEIR account, a clear submission summary, and server enforcement. The V1 site contains no vote control or vote count.
- **V3 resources:** labelled links for approved slides, code, transcript, and replay. Player controls and access rules come only after real material and permissions exist. The V1 card has no fake play icon.

## Component acceptance

Check a long French title, two sessions in one cell, an empty month, a proposal without a date, a cancellation, no next confirmed event, keyboard-only navigation, 200% zoom, and a 360px viewport. Contrast and target sizes must hold in every state. Inspect the DOM order independently from the visual grid.
