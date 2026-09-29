# Editing the programme

`season.yaml` describes the season. Each `sessions/*.yaml` file is one talk or workshop. The 60 records place all 30 topic pairs from `SEASON_BOARD.md` as **draft proposals**, with the banner controlled by `editorialStatus: draft`. Neither part of a pair inherits a booking from the other.

Run `npm run content:validate` after edits, or restart `npm run dev`. This checks the schema, status/date combinations, duplicate IDs, and Luxembourg-local month boundaries. The generated browser JSON is ignored by Git and rebuilt before development and production builds.

- `proposed`: use `targetMonth: "YYYY-MM"`; do not add a date.
- `scheduled` or `completed`: remove `targetMonth` and provide a verified ISO `startsAt` with offset, for example `2026-10-15T12:00:00+02:00` (illustrative syntax only).
- `cancelled`: retain exactly one of `startsAt` or `targetMonth`, with an optional reason.
- Add `location` when the public venue or online location is verified. Do not publish private meeting links.
- Keep IDs stable, public summaries readable, and formats separate from audience tracks.
- A pair has exactly one talk and one workshop with the same `pairId`, track, and target month while both are proposals. Keep their `editorialOrder` adjacent so they read as a pair in the timeline.
- Presenter fields, private links, and unknown properties are rejected by the strict schema.

All 30 pairs are visible as proposals; this is a programming backlog, not a promise to run 60 events. Prior-coverage notes remain in the editorial board. Changes merged into `main` are published by the GitHub Pages workflow after validation and browser checks.
