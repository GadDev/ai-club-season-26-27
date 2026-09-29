# AI Club · Season 2026–2027

A home for the SFEIR Luxembourg AI Club programme from **October 2026 through June 2027**, with three parallel tracks: **Foundations (Beginner)**, **Engineering (Practitioner)**, and **Deep Dive (Advanced)**.

The release sequence is deliberately small:

1. **Timeline:** publicly display the whole season and session details, distinguishing proposed topics from confirmed events. No account or presenter profiles in V1.
2. **Voting:** let each eligible SFEIR account holder choose one proposed topic under clear rules.
3. **Materials:** provide approved presentations and replays, initially as links.

The repository contains a **working V1 development slice**: a responsive nine-month timeline, 16 separate draft talk/workshop proposals, validated YAML content, and the Signal Index design. There are no verified scheduled events; the page says so explicitly. Public deployment is not enabled.

## Run locally

Use Node 24.19.0 (`.nvmrc`), then:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite, under `/ai-club-season-26-27/`. After editing YAML, restart the dev command to regenerate content.

```sh
npm run build
npm test
npx playwright install chromium
npm run test:e2e
```

The build validates content and TypeScript before producing `dist/`. CI runs the build, date/status tests, and browser accessibility/navigation checks at mobile, tablet, and desktop widths. See [content editing](content/README.md).

## Product and design

- [Mission](MISSION.md): purpose, tracks, and release sequence.
- [Constitution](CONSTITUTION.md): product and editorial principles.
- [Technical stack](TECH_STACK.md): V1 architecture and later system boundaries.
- [Art direction](ART_DIRECTION.md): explored visual branches and the selected Signal Index direction.
- [Design system](DESIGN_SYSTEM.md): the selected Signal Index direction; [implementation guide](design/README.md) for foundations, typography, components, icons and layouts; [CSS tokens](design/tokens.css).
- [Visual references](design/references/README.md): moodboard, one-sheet UI specimen, desktop and mobile pages, plus future voting and replay concepts.
- [Season board](SEASON_BOARD.md): eight tentative month placements, 22 more candidate pairs, prior coverage, and a separate confirmed-event lane.

Next: review the draft programme, refine the implemented UI against the references, and enable GitHub Pages when the public content is ready.
