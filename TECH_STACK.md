# Technical stack

**Decision status:** proposed V0/V1 foundation, 29 September 2026. No application code or deployment exists yet.

| Concern | V1 choice | Reason |
| --- | --- | --- |
| Interface | React + TypeScript | Familiar contribution path and typed interactive views. |
| Build | Vite | Fast local work and a static production build. |
| Styling | Tailwind CSS; a few shadcn/ui components where useful | Editorial layout and reusable accessible primitives. |
| Content | YAML in Git; optional Markdown for longer text | Portable, reviewable edits without a CMS. |
| Validation | Zod at build time | Reject bad dates, references, and status combinations before publication. |
| Hosting | GitHub Pages via GitHub Actions | Static delivery from the existing repository. |
| Backend, accounts, database | None in V1 | Public programme content needs no identity or server state. |

React + Vite suits likely contributors and modest interactivity. Astro is a reasonable alternative if content volume or client bundle size later warrants it. Choose compatible stable versions when scaffolding, then commit a lockfile and pin the CI runtime.

### Content model

The primary axes are **month × track**. A cell may have several sessions or none. Domain and format remain metadata. A stable session ID survives title edits.

```text
content/season.yaml
content/sessions/agent-evaluation.yaml
content/presenters/presenter-id.yaml
src/content/schema.ts
src/content/load.ts
src/features/season/
src/features/session/
scripts/validate-content.ts
```

```yaml
# Illustrative proposal, not an announced event
id: agent-evaluation
title: Evaluating AI Agents
season: 2026-2027
month: 2027-03
track: engineering
domain: operate-ai
tags: [agents, evals]
format: [workshop]
status: proposed
summary: Design an evaluation set and inspect agent failure modes.
presenterIds: []
editorialOrder: 2
```

Tracks: `foundations`, `engineering`, `deep-dive`. Domains: `understand-ai`, `build-with-ai`, `develop-with-ai`, `operate-ai`, `frontier`. Formats: `talk`, `workshop`, `demo`, `lab`, `discussion`. Public statuses: `proposed`, `scheduled`, `completed`, `cancelled`.

A proposal needs a month, with no invented day or presenter. Scheduled and completed sessions need a confirmed start instant with an explicit offset; display time in `Europe/Luxembourg`. Validate IDs, month range, presenter references, URLs, and status-specific requirements in CI. A cancelled session retains its record and a reason when appropriate.

For a project Pages URL, set Vite `base` to `/ai-club-season-26-27/`. A query link such as `?session=agent-evaluation` reloads without a history-router fallback. On small screens, render month sections with clear track labels; provide a readable list for assistive technology. CI should validate content, check TypeScript, build, and run a small set of meaningful behavior and accessibility checks.

The repository is public. Do not publish internal meeting links, client details, personal contact information, or unpublished materials. Deployment starts only after the application and Pages configuration exist.

Deferred: login, CMS, database, attendance, registration, notifications, quizzes, certificates, personalized recommendations, calendar sync, and an AI assistant.

### Implementation references

- [React: build an app from scratch](https://react.dev/learn/build-a-react-app-from-scratch)
- [Vite: deploy a static site](https://vite.dev/guide/static-deploy)
- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Tailwind CSS with Vite](https://tailwindcss.com/docs/installation/using-vite)
- [Zod basics](https://zod.dev/basics)
