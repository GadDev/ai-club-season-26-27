# Contributing

Thanks for helping improve **AI Club · Season 2026–2027**. Contributions may be application code, programme content, design work, documentation, tests, or accessibility fixes.

## Before you start

1. Search existing issues and pull requests to avoid duplicate work.
2. For non-trivial changes, open an issue first so scope and intent are clear.
3. Keep one pull request focused on one outcome.
4. Read the relevant project guidance:
   - programme/content changes: [`content/README.md`](content/README.md)
   - product direction: [`docs/MISSION.md`](docs/MISSION.md) and [`docs/CONSTITUTION.md`](docs/CONSTITUTION.md)
   - visual work: [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) and [`design/README.md`](design/README.md)

## Local setup

The project targets the Node version declared in `.nvmrc`.

```sh
nvm use
npm ci
npm run dev
```

Before opening a pull request, run:

```sh
npm run build
npm test
npx playwright install chromium
npm run test:e2e
```

If your change does not affect browser behaviour, explain in the pull request why an end-to-end run is not relevant.

## Branches and commits

Use short, descriptive branch names such as:

- `feat/session-filtering`
- `fix/mobile-navigation`
- `content/context-engineering-session`
- `docs/contribution-guide`
- `chore/dependency-update`

Prefer small commits with imperative messages that explain the intent of the change.

## Programme and editorial changes

The public programme distinguishes proposals from confirmed events. Do not present tentative dates, speakers, venues, or topics as confirmed unless the source of truth has been verified.

When editing session content:

- preserve the content schema and validation rules;
- avoid duplicate or near-duplicate proposals;
- keep difficulty level and track intent explicit;
- write for engineers from beginner through advanced levels;
- keep claims factual and avoid marketing hype;
- include sources when a technical or historical claim needs verification.

Run `npm run content:validate` after editing YAML.

## Design changes

Treat the Signal Index design system as the visual source of truth. Changes should preserve responsive behaviour, keyboard navigation, readable contrast, and reduced-motion/accessibility expectations.

For visible UI changes, include before/after screenshots at relevant desktop and mobile widths in the pull request.

## Pull requests

A good pull request includes:

- a concise explanation of the problem and solution;
- the files or areas affected;
- validation performed;
- screenshots for visual changes;
- known limitations or follow-up work;
- links to related issues when applicable.

Reviewers may ask for a change to be split if it combines unrelated concerns.

## Conduct and security

Participation is governed by [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md). Please do not report security vulnerabilities in public issues; follow [`SECURITY.md`](SECURITY.md) instead.

## Licensing

By submitting a contribution, you agree that your contribution may be distributed under the repository's applicable licenses:

- software under the [MIT License](LICENSE);
- original educational/editorial content under [CC BY 4.0](CONTENT_LICENSE.md).

Only contribute material you have the right to license. Clearly identify third-party material and its source.
