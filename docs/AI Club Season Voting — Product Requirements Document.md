# AI Club Season Voting
## Product Requirements Document

**Product:** AI Club Season 26–27  
**Feature:** Programme Voting  
**Version:** V1  
**Status:** Draft  
**Season:** October 2026 – June 2027

---

# 1. Executive Summary

The AI Club wants its members to meaningfully influence the programme for the 2026–2027 season.

The initial voting concept considered allowing members to vote independently for individual topics or sessions.

That approach creates a fundamental programme-design problem:

> The most popular individual topics do not necessarily form a coherent learning journey.

Instead, Programme Voting V1 will present members with approximately **8–9 complete season proposals**.

Each proposed programme will:

- cover October through June;
- include Foundation, Practitioner and Advanced sessions;
- contain multiple session formats;
- represent a distinct programme philosophy;
- follow an intentional learning progression;
- reserve some flexibility for emerging AI developments.

Members will explore the proposed programmes and answer one simple question:

> **Which AI Club season would you most like to attend?**

Each eligible member receives one effective vote and may change that vote until the voting period closes.

A lightweight internal **curriculum graph** will help organisers create coherent programme proposals, but the graph will not be exposed as a complex voting mechanism in V1.

---

# 2. Problem Statement

The AI Club needs a way for members to influence the season without turning programme design into a popularity contest between isolated topics.

A simple topic ballot may result in combinations such as:

```text
MCP
Advanced Multi-Agent Architecture
Intro to AI
GPU Optimisation
Prompt Engineering
Agent Security
```

These sessions may be individually attractive but collectively fragmented.

A more intentional programme could instead create a progression such as:

```text
AI Fundamentals
↓
Context Engineering
↓
Coding Agents
↓
Tool Use
↓
MCP
↓
Agent Architecture
↓
Evaluation
↓
Security
```

The product therefore needs to balance:

```text
member preference
+
curriculum coherence
+
track diversity
+
topic diversity
+
event feasibility
```

while remaining simple enough that members actually participate.

---

# 3. Product Vision

Programme Voting should feel less like filling in a survey and more like choosing the direction of the AI Club.

The product promise is:

> **We do the curriculum-design work. Members choose the journey they want.**

Members should leave the experience understanding:

- what each programme represents;
- how programmes differ;
- what kind of season they are voting for;
- how their vote affects the final direction;
- what remains flexible after voting.

---

# 4. Goals

## Primary goals

### G1 — Meaningful participation

Give AI Club members a clear and credible way to influence the season.

### G2 — Simple voting

A member should be able to understand the voting mechanism almost immediately.

### G3 — Coherent outcomes

Every programme offered on the ballot must already represent a valid, coherent season.

### G4 — Comparable choices

Members should be able to compare programmes without reading dozens of individual session descriptions.

### G5 — Trust

Voting rules, deadlines, organiser discretion and final results must be transparent.

### G6 — Low implementation cost

V1 should avoid recommendation engines, optimisation systems and complex ballot mechanics.

---

# 5. Non-Goals

Programme Voting V1 will **not** implement:

- individual topic voting;
- ranked-choice voting;
- voting credits;
- pairwise comparisons;
- live voting rankings;
- personalised recommendations;
- collaborative filtering;
- machine-learning recommendations;
- automatic programme generation;
- automatic curriculum optimisation;
- interactive topic constellations;
- public topic graphs;
- community comments;
- social features;
- presenter voting;
- session scheduling;
- calendar management;
- presenter availability management.

These may be considered later.

---

# 6. Target Users

## Primary user

### AI Club member

An eligible member of the AI Club who wants to influence the upcoming season.

The member may:

- have beginner knowledge in one area;
- have advanced knowledge in another;
- attend only selected sessions;
- have strong preferences about topics;
- have little interest in curriculum design.

The product should therefore **not require members to identify with a single learning track**.

---

## Secondary user

### AI Club organiser

Responsible for:

- building candidate programmes;
- validating programme coherence;
- managing the ballot;
- reviewing results;
- adjusting the winning programme for feasibility;
- publishing the final season.

---

# 7. Product Principles

## 7.1 Tracks describe sessions, not people

Foundation, Practitioner and Advanced indicate subject difficulty.

They are not user personas.

Members never have to declare:

```text
I am Foundation.
I am Practitioner.
I am Advanced.
```

---

## 7.2 Complexity belongs upstream

Curriculum relationships, prerequisites and programme balancing should happen during programme design.

The voting interface should remain simple.

---

## 7.3 All ballot options must be legitimate

The ballot should never contain intentionally weak programmes merely to make another option appear stronger.

Every proposed programme must be one the organisers would genuinely be willing to run.

---

## 7.4 Transparency over algorithmic sophistication

If a mechanism cannot be clearly explained to members, it should not be part of V1.

---

## 7.5 Votes determine direction, not immutable schedules

Members vote for a **season direction**.

The final dates and some sessions may change because of operational constraints or major AI developments.

---

# 8. Core Product Model

V1 uses four primary content concepts:

```text
THEME
  ↓
TOPIC
  ↓
SESSION CANDIDATE
  ↓
PROGRAMME
```

A separate relationship model connects topics:

```text
TOPIC ← relationship → TOPIC
```

The public voting experience primarily exposes:

```text
PROGRAMME
+
SESSION PREVIEWS
```

The underlying graph remains an organiser tool.

---

# 9. Curriculum Graph

## 9.1 Purpose

The curriculum graph helps organisers construct coherent programmes.

It supports questions such as:

- Which sessions naturally follow one another?
- Does an advanced session need a foundation first?
- Are two sessions effectively duplicates?
- Which topics deepen another topic?
- Does the season over-focus on one subject?
- Are there meaningful cross-track progressions?

---

# 10. Theme Model

A theme represents a broad domain.

Example:

```yaml
id: evaluations

title: Evaluations

description: >
  Techniques for measuring model and agent quality,
  reliability and failure modes.

status: active
```

Indicative themes:

```text
AI Foundations
Coding Agents
Context Engineering
Agent Protocols
Agent Architecture
Evaluations
RAG
Security
Multi-Agent Systems
AI Infrastructure
Model Engineering
Emerging Tools
AI Product Engineering
```

Target:

**approximately 10–15 broad themes.**

---

# 11. Topic Model

A topic represents a conceptual subject.

Example:

```yaml
id: agent-evaluation

title: Agent Evaluation

summary: >
  Measuring the reliability, quality and failure modes
  of AI agents.

themeIds:
  - evaluations
  - agent-architecture

maturity: established

status: active
```

Supported maturity:

```text
foundational
established
emerging
experimental
```

---

# 12. Topic Relationships

Topics may connect through typed edges.

Supported types:

```text
prerequisite
recommended-before
follow-up
deepens
related
alternative
complements
overlaps
```

Example:

```yaml
from: coding-agents

to: agent-evaluation

type: follow-up

strength: strong

reason: >
  Engineers benefit from learning how to evaluate
  the reliability of agents after learning how to build them.
```

Relationship strength:

```text
weak
medium
strong
```

`prerequisite` should be used sparingly.

Prefer softer relationships such as:

```text
recommended-before
follow-up
deepens
related
```

---

# 13. Session Candidate Model

A session candidate represents something the club could actually deliver.

Example:

```yaml
id: evaluating-ai-agents

title: Evaluating AI Agents

topicIds:
  - agent-evaluation

themeIds:
  - evaluations

track: practitioner

format:
  - workshop

summary: >
  Build an evaluation harness and inspect
  common agent failure modes.

learningOutcomes:
  - Understand basic evaluation strategies
  - Build a small evaluation dataset
  - Investigate agent failure modes

estimatedDurationMinutes: 90

preferredSeasonPosition:
  - middle
  - late

status: candidate
```

Supported tracks:

```text
foundation
practitioner
advanced
```

Supported formats:

```text
talk
workshop
debate
live-coding
architecture-session
lab
panel
experiment
challenge
```

---

# 14. Programme Model

A programme is a complete season direction.

Example:

```yaml
id: agent-engineer

title: The Agent Engineer

tagline: >
  From context engineering to reliable production agents.

description: >
  A practical season focused on building,
  evaluating and securing modern AI agents.

themeIds:
  - context-engineering
  - coding-agents
  - agent-protocols
  - agent-architecture
  - evaluations
  - security

status: voting

experimentalSlots: 1

months:
  - month: 2026-10
    sessionIds:
      - llm-foundamentals
      - context-engineering-intro

  - month: 2026-11
    sessionIds:
      - coding-agents

  - month: 2026-12
    sessionIds:
      - agent-tool-use

  - month: 2027-01
    sessionIds:
      - mcp-a2a

  - month: 2027-02
    sessionIds:
      - agent-architecture

  - month: 2027-03
    sessionIds:
      - evaluating-ai-agents

  - month: 2027-04
    sessionIds:
      - agent-security

  - month: 2027-05
    sessionIds:
      - production-agents

  - month: 2027-06
    sessionIds:
      - season-experiment
```

---

# 15. Programme Comparison Metadata

Each programme should expose comparable characteristics.

Example:

```yaml
trackBalance:
  foundation: 30
  practitioner: 45
  advanced: 25

focus:
  agents: high
  models: low
  infrastructure: medium
  security: medium

formats:
  talks: 4
  workshops: 5
  labs: 2
  debates: 1
```

These values exist primarily for presentation.

They do not need to drive automated scoring in V1.

---

# 16. Candidate Programme Requirements

Before a programme can appear on the ballot, organisers must review it against the following requirements.

## Complete season

It should cover approximately:

```text
October → June
```

---

## Track representation

It must contain meaningful sessions across:

```text
Foundation
Practitioner
Advanced
```

Equal distribution is not required.

---

## Learning progression

It should contain at least one clearly identifiable progression.

Example:

```text
Context Engineering
↓
Coding Agents
↓
Tool Use
↓
MCP
↓
Architecture
↓
Evaluation
```

---

## Theme diversity

A programme may have a strong identity but should not consist entirely of slight variations of one topic.

---

## Format diversity

A programme should combine several event formats where practical.

Example:

```text
talk
workshop
lab
architecture session
debate
live coding
```

---

## Experimental capacity

Each programme should preserve at least one flexible opportunity for:

- new model releases;
- emerging tooling;
- unexpected research;
- experimental topics;
- major AI developments.

---

# 17. Indicative Programme Set

The final names and composition remain to be defined.

A potential ballot could contain:

### 01 — The Agent Engineer

Build reliable AI agents from context to production.

### 02 — The AI Software Engineer

Use AI throughout software design, development and delivery.

### 03 — Models to Production

Understand models, inference, deployment and infrastructure.

### 04 — The AI Architect

Explore protocols, orchestration, RAG and system architecture.

### 05 — Trusted AI

Focus on evaluations, reliability, security and governance.

### 06 — AI From First Principles

Develop strong foundations before progressing toward applied systems.

### 07 — The Practical Explorer

A broad, hands-on tour through modern AI engineering.

### 08 — The Frontier

Explore emerging technologies, research and experimental systems.

### 09 — The Balanced Season

A deliberately mixed curriculum spanning foundations, agents, models, infrastructure and product engineering.

These are working directions rather than approved ballot options.

---

# 18. Voting Constitution

## 18.1 Eligibility

Only eligible AI Club members may submit a ballot.

Eligibility is verified through the approved authentication mechanism.

---

## 18.2 Equal voting weight

Every eligible member receives one equally weighted ballot.

No additional voting power is granted based on:

- seniority;
- expertise;
- management position;
- speaker status;
- organiser status.

---

## 18.3 Ballot

Each member chooses exactly:

> **1 proposed programme**

The ballot asks:

> **Which AI Club season would you most like to attend?**

---

## 18.4 Editable vote

Members may change their vote until the published closing time.

Only the latest effective selection counts.

---

## 18.5 Hidden live results

Exact programme results are not displayed while voting remains open.

Allowed information:

```text
184 members have participated.
Voting closes 9 October.
```

Not allowed:

```text
The Agent Engineer — 37%
AI Architect — 26%
```

---

## 18.6 Winner

The programme receiving the largest number of valid votes becomes:

> **The community-selected season direction.**

---

## 18.7 Organiser discretion

The programme is a direction, not an immutable event contract.

Organisers may modify individual sessions because of:

- presenter availability;
- dates;
- rooms;
- organisational constraints;
- duplicated sessions;
- major developments in AI;
- unexpected opportunities.

The final programme should remain recognisably aligned with the winning proposal.

---

## 18.8 Change budget

As a working product guideline:

```text
~80–85% programme direction preserved
~15–20% flexible capacity
```

This is not intended as a mathematical enforcement rule.

Its purpose is to protect member trust while preserving operational flexibility.

---

## 18.9 Tie handling

If two programmes receive exactly the same number of valid votes:

1. organisers review feasibility;
2. organisers review curriculum completeness;
3. organisers choose between the tied programmes;
4. the decision and rationale are published.

V1 does not require a runoff vote.

---

## 18.10 Privacy

Member identity is required to validate eligibility.

Individual ballot selections are private.

Only aggregate results should be published.

---

# 19. User Journey

## Step 1 — Entry

User arrives on the voting page.

Primary message:

# Choose our season.

Supporting copy:

> We've created several possible AI Club journeys for October through June. Each takes a different approach to topics, formats and depth.

Primary CTA:

> Explore the programmes

---

# 20. Programme Gallery

Members see the 8–9 proposed programmes.

Example card:

```text
01 / SEASON PROPOSAL

THE AGENT ENGINEER

From context engineering
to reliable production agents.

Agents · Context · Evaluation

9 months
3 tracks

Explore programme →
```

Cards should reveal enough difference for initial scanning without displaying the entire season.

---

# 21. Programme Detail

Selecting a programme opens its full proposal.

The page includes:

### Programme proposition

Name, tagline and short philosophy.

### Key themes

Example:

```text
Agents
Context Engineering
Evaluation
Security
```

### Season journey

Example:

```text
OCT
AI Foundations

NOV
Context Engineering

DEC
Coding Agents

JAN
Tool Use

FEB
MCP

MAR
Agent Architecture

APR
Evaluation

MAY
Security

JUN
Wildcard / Emerging Topic
```

### Tracks

Show representative Foundation, Practitioner and Advanced sessions.

### Formats

Show the intended mixture of:

```text
talks
workshops
labs
debates
live coding
```

### Highlights

Surface approximately three representative sessions.

### CTA

> Choose this programme

---

# 22. Programme Comparison

Members should be able to compare programme directions without repeatedly navigating between detail pages.

A lightweight comparison may show:

| Programme | Agents | Models | Infra | Security | Foundations |
|---|---|---|---|---|---|
| Agent Engineer | High | Low | Medium | High | Medium |
| AI Architect | High | Medium | High | Medium | Medium |
| Models to Production | Low | High | High | Medium | Medium |
| Balanced Season | Medium | Medium | Medium | Medium | Medium |

The comparison exists for orientation.

It must not turn into a scoring game.

---

# 23. Vote Confirmation

Before recording the selection:

```text
YOUR CHOICE

The Agent Engineer

From context engineering
to reliable production agents.

You may change your selection
until voting closes.

[Confirm my vote]
```

---

# 24. Vote Success

After successful submission:

# Your vote is in.

> You chose **The Agent Engineer**.

Show:

- confirmation state;
- closing date;
- current participation count;
- ability to change the vote.

CTA:

> Change my choice

---

# 25. Returning Voter

A returning authenticated member should immediately see:

```text
YOUR CURRENT VOTE

The Agent Engineer

You can change your choice
until 9 October at 18:00.

[Explore programmes]
[Change vote]
```

The system should never make the user wonder whether their vote was recorded.

---

# 26. Voting Closed State

After closing:

# Voting is closed.

If results are not yet published:

> Thank you for helping shape Season 26–27. The organisers are validating the results and programme feasibility.

If results are available:

> See the selected season →

---

# 27. Results Experience

The results page should lead with the winning direction.

Example:

# The community chose
## The Agent Engineer

```text
36% of valid ballots
```

Then show its learning journey.

Example:

```text
Context Engineering
↓
Coding Agents
↓
Tool Use
↓
MCP
↓
Agent Architecture
↓
Evaluation
↓
Security
```

Then show aggregate results for the remaining options.

Example:

```text
Agent Engineer       36%
Balanced Season      22%
AI Architect         17%
Trusted AI           11%
Models to Production  8%
...
```

Finally explain:

> Your votes selected the direction. The organisers will now confirm sessions, speakers and dates.

---

# 28. Functional Requirements

## FR1 — Programme listing

The system must display all active programmes eligible for the current ballot.

---

## FR2 — Programme detail

Members must be able to inspect an individual programme before voting.

---

## FR3 — Authentication

A member must authenticate before submitting or changing a vote.

Browsing programmes may remain public.

---

## FR4 — Eligibility validation

Eligibility must be validated server-side.

---

## FR5 — Vote submission

An eligible member may submit exactly one effective programme selection.

---

## FR6 — Vote update

An eligible member may replace their existing programme selection while voting remains open.

---

## FR7 — Vote locking

The server must reject new or modified votes after the ballot closing time.

---

## FR8 — Participation count

The interface may display aggregate participation.

---

## FR9 — Hidden results

Exact programme totals must not be exposed through the public API while the ballot remains open.

---

## FR10 — Results publication

Organisers must be able to publish final aggregate results after voting closes.

---

# 29. Vote Data Model

Conceptually:

```ts
type Vote = {
  id: string
  voterId: string
  programmeId: string
  createdAt: string
  updatedAt: string
}
```

The system guarantees:

```text
one effective vote
per eligible voter
per ballot
```

A more robust model may preserve historical changes separately for auditing.

---

# 30. Ballot Model

```ts
type Ballot = {
  id: string
  title: string

  opensAt: string
  closesAt: string

  programmeIds: string[]

  status:
    | "draft"
    | "scheduled"
    | "open"
    | "closed"
    | "results-published"
}
```

---

# 31. Programme Content Model

Conceptual TypeScript:

```ts
type Programme = {
  id: string
  title: string
  tagline: string
  description: string

  themeIds: string[]

  months: ProgrammeMonth[]

  trackBalance?: {
    foundation: number
    practitioner: number
    advanced: number
  }

  focus?: Record<string, "low" | "medium" | "high">

  experimentalSlots: number

  status:
    | "draft"
    | "voting"
    | "selected"
    | "archived"
}
```

---

# 32. Security Requirements

Votes are user-controlled state and must not depend on browser storage alone.

Server-side controls must include:

- authenticated identity;
- eligibility checking;
- server-controlled voting period;
- one effective vote per voter;
- input validation;
- rate limiting;
- CSRF protection where applicable;
- secure session handling;
- idempotent submission where practical;
- audit logging;
- transactional vote replacement.

GitHub Pages may continue serving the public frontend, but protected vote processing requires a backend service.

---

# 33. Abuse Prevention

V1 should protect against:

- duplicate votes;
- forged programme IDs;
- submissions after closing;
- unauthenticated voting;
- repeated automated requests;
- accidental double submission.

High-complexity fraud detection is unnecessary for the expected AI Club scale.

---

# 34. Accessibility Requirements

Voting must not depend solely on:

- colour;
- drag-and-drop;
- hover;
- animation;
- pointer input.

Requirements include:

- semantic programme cards;
- keyboard-accessible navigation;
- minimum comfortable touch targets;
- visible focus states;
- adequate contrast;
- descriptive track labels;
- screen-reader-friendly confirmation messages;
- reduced-motion support;
- accessible form errors.

---

# 35. Mobile Requirements

The entire voting journey must work comfortably on mobile.

Programme comparison should collapse from broad tables into stacked summaries.

Season timelines should become vertical:

```text
OCT
AI Foundations

↓

NOV
Context Engineering

↓

DEC
Coding Agents
```

Users must never need horizontal scrolling to understand a programme.

---

# 36. Performance Requirements

Programme content should remain predominantly static and cacheable.

Public programme content may be delivered through the existing static application/CDN.

Only protected voting actions require the backend.

Target behaviour:

- programme pages load without waiting for the voting API;
- voting state loads after authentication;
- submitting a vote gives immediate feedback;
- retries must not accidentally duplicate votes.

---

# 37. Analytics

Useful anonymous product events include:

```text
voting_page_viewed
programme_opened
programme_comparison_opened
authentication_started
vote_confirmation_opened
vote_submitted
vote_changed
results_viewed
```

Do not record individual programme preferences in general-purpose analytics if the secure ballot store already contains that information.

---

# 38. Product Metrics

## Participation rate

```text
eligible members who voted
÷
eligible members
```

---

## Programme exploration rate

Average number of programme detail pages viewed before voting.

---

## Ballot completion rate

```text
members starting voting
→
members submitting a ballot
```

---

## Vote-change rate

Useful for understanding whether people genuinely compare alternatives.

---

## Programme concentration

Check whether one programme overwhelmingly dominates or whether preferences are distributed.

This may help determine whether programme ranking is useful in a future version.

---

## Post-vote confidence

Optional lightweight feedback:

> How confident are you in your choice?

Not required for V1.

---

# 39. Success Criteria

V1 is successful if:

### UX

A member can understand the voting mechanism without instructions.

### Participation

A meaningful proportion of eligible members submit a ballot.

### Clarity

Members understand the differences between programmes.

### Trust

Members understand how the winning programme affects the season.

### Operations

Organisers can administer the vote without manual reconciliation.

### Product

The result produces a useful and actionable community preference signal.

---

# 40. Failure Signals

Reconsider the model if:

- most members open only one programme;
- programmes are perceived as nearly identical;
- members repeatedly ask to vote for individual topics instead;
- abstention is high because no programme feels representative;
- one programme consistently combines all popular topics and trivially dominates;
- programme descriptions are so large that members cannot compare them;
- organisers cannot honour the winning programme direction.

---

# 41. Key Risks

## Risk — Programme framing bias

A better name or description may win independently of content.

### Mitigation

Use identical programme templates and comparable information density.

---

## Risk — Too many programmes

Nine detailed seasons can still create cognitive overload.

### Mitigation

Strong summaries and optional comparison.

If testing reveals overload, reduce the ballot to approximately 5–7 programmes.

---

## Risk — Programmes overlap excessively

Members struggle to understand the difference.

### Mitigation

Every proposal requires a clear:

> “Choose this programme if…”

statement.

---

## Risk — Popular buzzwords dominate

Programme titles such as “Agent Engineer” may attract votes based on current hype.

### Mitigation

Emphasise outcomes and journeys rather than keywords alone.

---

## Risk — Winning programme becomes impossible to deliver

### Mitigation

Programme options must pass feasibility review before publication.

Never put an impossible programme on the ballot.

---

# 42. Pre-Ballot Programme Review Checklist

Before publication, each programme must answer:

### Identity

What is the programme fundamentally about?

### Audience

Why would someone choose it?

### Difference

How is it materially different from the other options?

### Progression

What learning journey does it create?

### Tracks

Are Foundation, Practitioner and Advanced represented meaningfully?

### Formats

Is there sufficient format diversity?

### Feasibility

Could the club realistically deliver it?

### Flexibility

Does it leave room for emerging developments?

---

# 43. Recommended Delivery Phases

## Phase 0 — Content modelling

Define:

- themes;
- topics;
- relationships;
- candidate sessions.

Output:

**curriculum graph + candidate catalogue**

---

## Phase 1 — Programme construction

Create approximately 8–9 coherent programmes.

Review them for:

- overlap;
- progression;
- diversity;
- feasibility;
- differentiation.

---

## Phase 2 — Read-only programme experience

Build:

- programme gallery;
- programme details;
- comparison;
- mobile experience.

No voting initially.

This allows UX validation using real programme content.

---

## Phase 3 — Voting

Add:

- authentication;
- eligibility;
- ballot state;
- vote API;
- confirmation;
- editable vote;
- voting window.

---

## Phase 4 — Results

Add:

- voting closed state;
- aggregate results;
- winning programme;
- explanation of next steps.

---

# 44. Future Evolution

## V2 — Programme ranking

Instead of selecting one programme:

```text
1. Agent Engineer
2. Balanced Season
3. AI Architect
```

Useful if V1 reveals significant split preferences.

---

## V2 — Topic signals

After selecting a programme:

> Which three sessions inside this programme excite you most?

This could provide secondary editorial information without replacing the simple primary vote.

---

## V2 — Guided programme comparison

Allow members to say:

```text
I care about:
☑ Hands-on workshops
☑ Agents
☑ Security
☐ Model training
```

Then highlight programmes that match.

Recommendations remain informational.

---

## V3 — Curriculum graph discovery

Expose topic connections visually.

Example:

```text
Context Engineering
↓
Coding Agents
↓
Tool Use
↓
MCP
↓
Architecture
```

---

## V3 — Community co-creation

Members first express preferences.

The system and organisers construct several coherent season proposals.

Members then choose among those final programmes.

---

# 45. Recommended V1 Scope

For the first meaningful version, ship only:

```text
8–9 coherent programmes

Programme gallery

Programme detail pages

Lightweight programme comparison

SFEIR authentication

One programme vote/member

Editable vote

Voting deadline

Participation count

Hidden live results

Final results page
```

Everything else is optional.

---

# 46. Product Decision

For Season 26–27:

> **Programme-level voting is the recommended primary voting mechanism.**

The curriculum graph should be created now because it improves programme quality and provides a foundation for future features.

However, it remains an internal organisational capability in V1.

This keeps the public experience deliberately simple:

```text
EXPLORE
   ↓
COMPARE
   ↓
CHOOSE
   ↓
CONFIRM
   ↓
SEE THE RESULT
```

while the complexity remains where it provides the most value:

```text
TOPICS
   ↓
CURRICULUM GRAPH
   ↓
COHERENT PROGRAMMES
   ↓
COMMUNITY CHOICE
```

---

# 47. North-Star Statement

The member should leave the voting experience thinking:

> **“I understood the possible directions for our AI Club, chose the season that interests me most, and my choice genuinely helped shape what we will learn together.”**