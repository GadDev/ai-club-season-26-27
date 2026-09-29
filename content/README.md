# Editing the programme

`season.yaml` describes the season. Each `sessions/*.yaml` file is one talk or workshop. The initial 16 records preserve the eight pairs in `SEASON_BOARD.md` as **draft proposals**, with the banner controlled by `editorialStatus: draft`. Neither part of a pair inherits a booking from the other.

Run `npm run content:validate` after edits, or restart `npm run dev`. This checks the schema, status/date combinations, duplicate IDs, and Luxembourg-local month boundaries. The generated browser JSON is ignored by Git and rebuilt before development and production builds.

- `proposed`: use `targetMonth: "YYYY-MM"`; do not add a date.
- `scheduled` or `completed`: remove `targetMonth` and provide a verified ISO `startsAt` with offset, for example `2026-10-15T12:00:00+02:00` (illustrative syntax only).
- `cancelled`: retain exactly one of `startsAt` or `targetMonth`, with an optional reason.
- Keep IDs stable, public summaries readable, and formats separate from audience tracks.
- Presenter fields, private links, and unknown properties are rejected by the strict schema.

The 22 unplaced pairs and prior-coverage notes remain in the editorial board. They are not automatically published by the application. Review draft copy and months before a public launch. No deployment workflow is enabled in this slice.
