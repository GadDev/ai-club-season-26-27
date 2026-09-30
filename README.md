# AI Club · Season 2026–2027

A home for the SFEIR Luxembourg AI Club programme from **October 2026 through June 2027**, with three parallel tracks: **Foundations (Beginner)**, **Engineering (Practitioner)**, and **Deep Dive (Advanced)**.

The release sequence is deliberately small:

1. **Timeline:** publicly display the whole season and session details, distinguishing proposed topics from confirmed events. No account or presenter profiles in V1.
2. **Voting:** let each eligible SFEIR account holder choose one proposed topic under clear rules.
3. **Materials:** provide approved presentations and replays, initially as links.

The repository contains a **working V1 timeline**: a responsive nine-month timeline, all 30 candidate topic pairs as 60 separate draft talk/workshop proposals, public session-detail and About pages, validated YAML content, and the Signal Index design. There are no verified scheduled events; the page says so explicitly. The GitHub Pages workflow builds, validates, and tests the programme before publication. The proposals are an editorial backlog, not a commitment to deliver 60 events.

Public programme: https://gaddev.github.io/ai-club-season-26-27/

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

- [Mission](docs/MISSION.md): purpose, tracks, and release sequence.
- [Constitution](docs/CONSTITUTION.md): product and editorial principles.
- [Technical stack](docs/TECH_STACK.md): V1 architecture and later system boundaries.
- [Art direction](docs/ART_DIRECTION.md): explored visual branches and the selected Signal Index direction.
- [Design system](docs/DESIGN_SYSTEM.md): the selected Signal Index direction; [implementation guide](design/README.md) for foundations, typography, components, icons and layouts; [CSS tokens](design/tokens.css).
- [Visual references](design/references/README.md): moodboard, one-sheet UI specimen, desktop and mobile pages, plus future voting and replay concepts.
- [Season board](docs/SEASON_BOARD.md): all 30 tentative pair placements across the three tracks, prior coverage, capacity notes, and a separate confirmed-event lane.

## Contributing and project policies

Contributions are welcome. Start with [CONTRIBUTING.md](CONTRIBUTING.md), follow the [Code of Conduct](CODE_OF_CONDUCT.md), and use the repository issue forms for bugs, features, and session proposals. Security issues must follow [SECURITY.md](SECURITY.md), not the public issue tracker. General support expectations are documented in [SUPPORT.md](SUPPORT.md).

This repository uses a split license:

- application source code is available under the [MIT License](LICENSE);
- original educational, editorial, and eligible design content is available under [CC BY 4.0](CONTENT_LICENSE.md);
- third-party assets, trademarks, fonts, screenshots, and reference material keep their original rights and are not automatically relicensed.

## Publishing

In repository Settings → Pages, select **GitHub Actions** as the source. Pushes to `main` run **Publish programme**; deployment follows a successful production build, content tests, and browser checks. The workflow can also be run manually.

Next: confirm the first session’s topic, date, Luxembourg-local time, and public location. Until then, all entries remain proposals.

## Page layouts

The shared poster masthead and footer connect the season, About (`?page=about`), and session details (`?session=<id>`). Voting (`?page=voting`) and materials (`?page=materials`) are clearly labelled visual previews: no votes, accounts, or resources are available. Query-based links support refresh and direct linking on GitHub Pages.
