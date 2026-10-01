# P9 — Future of Software Engineering

> **Engineer the systems that engineer the software.**

## 1. Programme identity

- **Educational philosophy:** Explore how software development changes when agents become persistent collaborators: coding agents, context, specs, loops, graphs, autonomy, human roles, organisations, and new architecture patterns.
- **Target audience:** Engineers and technical leaders interested in the next generation of software-development workflows.
- **Primary themes:** coding agents, context, specifications, loop engineering, graph engineering, autonomous development, organisations
- **What makes it different:** It studies software engineering itself as the domain being transformed.
- **Main strengths:** Forward-looking; high developer relevance; strong discussion material; naturally bridges practice and strategy.
- **Potential weaknesses:** Some ideas are still emerging; needs explicit separation between durable principles and fashionable terminology.
- **Expected difficulty profile:** Foundation stays concrete; Practitioner explores workflows; Advanced examines autonomy, governance, and organisational design.

**Why it deserves to exist independently:** It studies software engineering itself as the domain being transformed. That creates a different set of curriculum trade-offs, voting clusters, and capstone outcomes than the other reference seasons.

## 2. Season narrative

**October — Reframe the tool:** Coding Agents as a New Engineering Primitive
↓
**November — Curate context:** Context Engineering for Code
↓
**December — Specify intent:** Specification-Driven Development
↓
**January — Engineer the loop:** Loop Engineering
↓
**February — Encode the workflow:** Graph Engineering
↓
**March — Increase autonomy:** Autonomous Development Systems
↓
**April — Redesign collaboration:** Human-Agent Collaboration
↓
**May — Redesign the organisation:** Agentic Engineering Organisations
↓
**June — Imagine the architecture:** Future Software Architecture Patterns

## 3–5. Month-by-month curriculum, coherence, and cross-track pathways

## OCTOBER — Reframe the tool

**Monthly coherence.** All three tracks examine **Coding Agents as a New Engineering Primitive**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-DEV-053 — Coding Agents as a New Engineering Primitive: AI pair programming: useful mental models**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible live coding on coding agents as inspect-edit-run-verify systems rather than autocomplete tools. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind coding agents as a new engineering primitive, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-016, AI-DEV-088 · **Follow-up:** AI-CTX-009, AI-DEV-088

- **AI-DEV-052 — Coding Agents as a New Engineering Primitive: A safe first workflow in a real repository**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible code review on coding agents as inspect-edit-run-verify systems rather than autocomplete tools. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind coding agents as a new engineering primitive, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-018, AI-DEV-089 · **Follow-up:** AI-DEV-089

- **AI-DEV-054 — Coding Agents as a New Engineering Primitive: Common coding-agent failure modes**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible workshop on coding agents as inspect-edit-run-verify systems rather than autocomplete tools. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind coding agents as a new engineering primitive, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-017, AI-DEV-090 · **Follow-up:** AI-DEV-090

### Practitioner

- **AI-DEV-088 — Coding Agents as a New Engineering Primitive: Build a repeatable agentic coding workflow**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical live coding applying coding agents as inspect-edit-run-verify systems rather than autocomplete tools in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic coding agents as a new engineering primitive workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-053 · **Related:** AI-DEV-016 · **Follow-up:** AI-CTX-015, AI-DEV-016

- **AI-DEV-089 — Coding Agents as a New Engineering Primitive: Context files, tools, tests, and verification**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical code review applying coding agents as inspect-edit-run-verify systems rather than autocomplete tools in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic coding agents as a new engineering primitive workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-052 · **Related:** AI-DEV-018 · **Follow-up:** AI-DEV-018

- **AI-DEV-090 — Coding Agents as a New Engineering Primitive: Review AI changes like a senior engineer**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical workshop applying coding agents as inspect-edit-run-verify systems rather than autocomplete tools in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic coding agents as a new engineering primitive workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-054 · **Related:** AI-DEV-017 · **Follow-up:** AI-DEV-017

### Advanced

- **AI-DEV-016 — Coding Agents as a New Engineering Primitive: Harness design for long-running coding work**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced live coding treating coding agents as inspect-edit-run-verify systems rather than autocomplete tools as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving coding agents as a new engineering primitive, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-088 · **Related:** AI-DEV-053 · **Follow-up:** AI-CTX-002

- **AI-DEV-018 — Coding Agents as a New Engineering Primitive: Parallel agents, sandboxes, and repair loops**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced code review treating coding agents as inspect-edit-run-verify systems rather than autocomplete tools as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving coding agents as a new engineering primitive, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-089 · **Related:** AI-DEV-052 · **Follow-up:** —

- **AI-DEV-017 — Coding Agents as a New Engineering Primitive: Measure engineering impact beyond generated lines**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced workshop treating coding agents as inspect-edit-run-verify systems rather than autocomplete tools as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving coding agents as a new engineering primitive, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-090 · **Related:** AI-DEV-054 · **Follow-up:** —

### Cross-track pathway

**AI-DEV-053 Coding Agents as a New Engineering Primitive: AI pair programming: useful mental models** → **AI-DEV-088 Coding Agents as a New Engineering Primitive: Build a repeatable agentic coding workflow** → **AI-DEV-016 Coding Agents as a New Engineering Primitive: Harness design for long-running coding work**

### Voting opportunities

- **Non-negotiable foundation:** AI-DEV-053 — Coding Agents as a New Engineering Primitive: AI pair programming: useful mental models. It protects prerequisites for later months.
- **Voting cluster:** AI-DEV-054 — Coding Agents as a New Engineering Primitive: Common coding-agent failure modes; AI-DEV-089 — Coding Agents as a New Engineering Primitive: Context files, tools, tests, and verification; AI-DEV-090 — Coding Agents as a New Engineering Primitive: Review AI changes like a senior engineer; AI-DEV-018 — Coding Agents as a New Engineering Primitive: Parallel agents, sandboxes, and repair loops.
- **Conditional unlock:** AI-DEV-017 — Coding Agents as a New Engineering Primitive: Measure engineering impact beyond generated lines becomes visible after AI-DEV-053 or another October prerequisite.

## NOVEMBER — Curate context

**Monthly coherence.** All three tracks examine **Context Engineering for Code**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-CTX-009 — Context Engineering for Code: What actually enters the context window?**  
  **Theme:** context engineering · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible hands-on lab on repository context, instruction files, just-in-time retrieval, tool output, memory, and keeping coding agents focused. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind context engineering for code, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-DEV-038, AI-DEV-053 · **Related:** AI-CTX-002, AI-CTX-015 · **Follow-up:** AI-CTX-015, AI-DEV-071

- **AI-CTX-008 — Context Engineering for Code: Instructions, examples, history, and tools**  
  **Theme:** context engineering · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on repository context, instruction files, just-in-time retrieval, tool output, memory, and keeping coding agents focused. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind context engineering for code, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-CTX-001, AI-CTX-014 · **Follow-up:** AI-CTX-014

- **AI-CTX-007 — Context Engineering for Code: Context overload and context rot**  
  **Theme:** context engineering · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible presentation on repository context, instruction files, just-in-time retrieval, tool output, memory, and keeping coding agents focused. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind context engineering for code, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-CTX-003, AI-CTX-013 · **Follow-up:** AI-CTX-013

### Practitioner

- **AI-CTX-015 — Context Engineering for Code: Design a context pipeline**  
  **Theme:** context engineering · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical hands-on lab applying repository context, instruction files, just-in-time retrieval, tool output, memory, and keeping coding agents focused in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic context engineering for code workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-CTX-009, AI-DEV-073, AI-DEV-088 · **Related:** AI-CTX-002 · **Follow-up:** AI-CTX-002, AI-DEV-106

- **AI-CTX-014 — Context Engineering for Code: Compaction, memory, and just-in-time retrieval**  
  **Theme:** context engineering · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical architecture clinic applying repository context, instruction files, just-in-time retrieval, tool output, memory, and keeping coding agents focused in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic context engineering for code workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-CTX-008 · **Related:** AI-CTX-001 · **Follow-up:** AI-CTX-001

- **AI-CTX-013 — Context Engineering for Code: Audit a bloated agent context**  
  **Theme:** context engineering · **Format:** live coding · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical live coding applying repository context, instruction files, just-in-time retrieval, tool output, memory, and keeping coding agents focused in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic context engineering for code workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-CTX-007 · **Related:** AI-CTX-003 · **Follow-up:** AI-CTX-003

### Advanced

- **AI-CTX-002 — Context Engineering for Code: Context architecture for long-running systems**  
  **Theme:** context engineering · **Format:** case study · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced case study treating repository context, instruction files, just-in-time retrieval, tool output, memory, and keeping coding agents focused as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving context engineering for code, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-CTX-015, AI-DEV-001, AI-DEV-016 · **Related:** AI-CTX-009 · **Follow-up:** AI-DEV-034

- **AI-CTX-001 — Context Engineering for Code: Attention budgets, routing, and subagents**  
  **Theme:** context engineering · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced research walkthrough treating repository context, instruction files, just-in-time retrieval, tool output, memory, and keeping coding agents focused as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving context engineering for code, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-CTX-014 · **Related:** AI-CTX-008 · **Follow-up:** —

- **AI-CTX-003 — Context Engineering for Code: Context policy as a system boundary**  
  **Theme:** context engineering · **Format:** architecture clinic · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced architecture clinic treating repository context, instruction files, just-in-time retrieval, tool output, memory, and keeping coding agents focused as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving context engineering for code, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-CTX-013 · **Related:** AI-CTX-007 · **Follow-up:** —

### Cross-track pathway

**AI-CTX-009 Context Engineering for Code: What actually enters the context window?** → **AI-CTX-015 Context Engineering for Code: Design a context pipeline** → **AI-CTX-002 Context Engineering for Code: Context architecture for long-running systems**

### Voting opportunities

- **Non-negotiable foundation:** AI-CTX-009 — Context Engineering for Code: What actually enters the context window?. It protects prerequisites for later months.
- **Voting cluster:** AI-CTX-007 — Context Engineering for Code: Context overload and context rot; AI-CTX-014 — Context Engineering for Code: Compaction, memory, and just-in-time retrieval; AI-CTX-013 — Context Engineering for Code: Audit a bloated agent context; AI-CTX-001 — Context Engineering for Code: Attention budgets, routing, and subagents.
- **Conditional unlock:** AI-CTX-003 — Context Engineering for Code: Context policy as a system boundary becomes visible after strong interest/participation in AI-DEV-088 — Coding Agents as a New Engineering Primitive: Build a repeatable agentic coding workflow.

## DECEMBER — Specify intent

**Monthly coherence.** All three tracks examine **Specification-Driven Development**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-DEV-071 — Specification-Driven Development: AI pair programming: useful mental models**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible workshop on turning intent into executable specifications, acceptance criteria, constraints, and testable agent tasks. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind specification-driven development, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-CTX-009 · **Related:** AI-DEV-034, AI-DEV-106 · **Follow-up:** AI-DEV-056, AI-DEV-068, AI-DEV-106

- **AI-DEV-070 — Specification-Driven Development: A safe first workflow in a real repository**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible live coding on turning intent into executable specifications, acceptance criteria, constraints, and testable agent tasks. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind specification-driven development, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-036, AI-DEV-107 · **Follow-up:** AI-DEV-107

- **AI-DEV-072 — Specification-Driven Development: Common coding-agent failure modes**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible code review on turning intent into executable specifications, acceptance criteria, constraints, and testable agent tasks. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind specification-driven development, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-035, AI-DEV-108 · **Follow-up:** AI-DEV-108

### Practitioner

- **AI-DEV-106 — Specification-Driven Development: Build a repeatable agentic coding workflow**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical workshop applying turning intent into executable specifications, acceptance criteria, constraints, and testable agent tasks in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic specification-driven development workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-CTX-015, AI-DEV-071 · **Related:** AI-DEV-034 · **Follow-up:** AI-DEV-034, AI-DEV-091, AI-DEV-103

- **AI-DEV-107 — Specification-Driven Development: Context files, tools, tests, and verification**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical live coding applying turning intent into executable specifications, acceptance criteria, constraints, and testable agent tasks in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic specification-driven development workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-070 · **Related:** AI-DEV-036 · **Follow-up:** AI-DEV-036

- **AI-DEV-108 — Specification-Driven Development: Review AI changes like a senior engineer**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical code review applying turning intent into executable specifications, acceptance criteria, constraints, and testable agent tasks in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic specification-driven development workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-072 · **Related:** AI-DEV-035 · **Follow-up:** AI-DEV-035

### Advanced

- **AI-DEV-034 — Specification-Driven Development: Harness design for long-running coding work**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced workshop treating turning intent into executable specifications, acceptance criteria, constraints, and testable agent tasks as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving specification-driven development, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-CTX-002, AI-DEV-106 · **Related:** AI-DEV-071 · **Follow-up:** AI-DEV-019, AI-DEV-031

- **AI-DEV-036 — Specification-Driven Development: Parallel agents, sandboxes, and repair loops**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced live coding treating turning intent into executable specifications, acceptance criteria, constraints, and testable agent tasks as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving specification-driven development, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-107 · **Related:** AI-DEV-070 · **Follow-up:** —

- **AI-DEV-035 — Specification-Driven Development: Measure engineering impact beyond generated lines**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced code review treating turning intent into executable specifications, acceptance criteria, constraints, and testable agent tasks as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving specification-driven development, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-108 · **Related:** AI-DEV-072 · **Follow-up:** —

### Cross-track pathway

**AI-DEV-071 Specification-Driven Development: AI pair programming: useful mental models** → **AI-DEV-106 Specification-Driven Development: Build a repeatable agentic coding workflow** → **AI-DEV-034 Specification-Driven Development: Harness design for long-running coding work**

### Voting opportunities

- **Non-negotiable foundation:** AI-DEV-071 — Specification-Driven Development: AI pair programming: useful mental models. It protects prerequisites for later months.
- **Voting cluster:** AI-DEV-072 — Specification-Driven Development: Common coding-agent failure modes; AI-DEV-107 — Specification-Driven Development: Context files, tools, tests, and verification; AI-DEV-108 — Specification-Driven Development: Review AI changes like a senior engineer; AI-DEV-036 — Specification-Driven Development: Parallel agents, sandboxes, and repair loops.
- **Conditional unlock:** AI-DEV-035 — Specification-Driven Development: Measure engineering impact beyond generated lines becomes visible after strong interest/participation in AI-CTX-015 — Context Engineering for Code: Design a context pipeline.

## JANUARY — Engineer the loop

**Monthly coherence.** All three tracks examine **Loop Engineering**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-DEV-068 — Loop Engineering: AI pair programming: useful mental models**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible workshop on designing iterative goal-action-verification-feedback loops that guide agents toward completion. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind loop engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-DEV-047, AI-DEV-071 · **Related:** AI-DEV-031, AI-DEV-103 · **Follow-up:** AI-DEV-041, AI-DEV-062, AI-DEV-103

- **AI-DEV-067 — Loop Engineering: A safe first workflow in a real repository**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible live coding on designing iterative goal-action-verification-feedback loops that guide agents toward completion. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind loop engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-033, AI-DEV-104 · **Follow-up:** AI-DEV-104

- **AI-DEV-069 — Loop Engineering: Common coding-agent failure modes**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible code review on designing iterative goal-action-verification-feedback loops that guide agents toward completion. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind loop engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-032, AI-DEV-105 · **Follow-up:** AI-DEV-105

### Practitioner

- **AI-DEV-103 — Loop Engineering: Build a repeatable agentic coding workflow**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical workshop applying designing iterative goal-action-verification-feedback loops that guide agents toward completion in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic loop engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-068, AI-DEV-082, AI-DEV-106 · **Related:** AI-DEV-031 · **Follow-up:** AI-DEV-031, AI-DEV-076, AI-DEV-097

- **AI-DEV-104 — Loop Engineering: Context files, tools, tests, and verification**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical live coding applying designing iterative goal-action-verification-feedback loops that guide agents toward completion in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic loop engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-067 · **Related:** AI-DEV-033 · **Follow-up:** AI-DEV-033

- **AI-DEV-105 — Loop Engineering: Review AI changes like a senior engineer**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical code review applying designing iterative goal-action-verification-feedback loops that guide agents toward completion in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic loop engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-069 · **Related:** AI-DEV-032 · **Follow-up:** AI-DEV-032

### Advanced

- **AI-DEV-031 — Loop Engineering: Harness design for long-running coding work**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced workshop treating designing iterative goal-action-verification-feedback loops that guide agents toward completion as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving loop engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-010, AI-DEV-034, AI-DEV-103 · **Related:** AI-DEV-068 · **Follow-up:** AI-DEV-004, AI-DEV-025

- **AI-DEV-033 — Loop Engineering: Parallel agents, sandboxes, and repair loops**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced live coding treating designing iterative goal-action-verification-feedback loops that guide agents toward completion as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving loop engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-104 · **Related:** AI-DEV-067 · **Follow-up:** —

- **AI-DEV-032 — Loop Engineering: Measure engineering impact beyond generated lines**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced code review treating designing iterative goal-action-verification-feedback loops that guide agents toward completion as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving loop engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-105 · **Related:** AI-DEV-069 · **Follow-up:** —

### Cross-track pathway

**AI-DEV-068 Loop Engineering: AI pair programming: useful mental models** → **AI-DEV-103 Loop Engineering: Build a repeatable agentic coding workflow** → **AI-DEV-031 Loop Engineering: Harness design for long-running coding work**

### Voting opportunities

- **Non-negotiable foundation:** AI-DEV-068 — Loop Engineering: AI pair programming: useful mental models. It protects prerequisites for later months.
- **Voting cluster:** AI-DEV-069 — Loop Engineering: Common coding-agent failure modes; AI-DEV-104 — Loop Engineering: Context files, tools, tests, and verification; AI-DEV-105 — Loop Engineering: Review AI changes like a senior engineer; AI-DEV-033 — Loop Engineering: Parallel agents, sandboxes, and repair loops.
- **Conditional unlock:** AI-DEV-032 — Loop Engineering: Measure engineering impact beyond generated lines becomes visible after strong interest/participation in AI-DEV-106 — Specification-Driven Development: Build a repeatable agentic coding workflow.

## FEBRUARY — Encode the workflow

**Monthly coherence.** All three tracks examine **Graph Engineering**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-DEV-062 — Graph Engineering: AI pair programming: useful mental models**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible code review on explicit workflow graphs that encode stages, state, branching, verification, and human/agent collaboration. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind graph engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-DEV-068 · **Related:** AI-DEV-025, AI-DEV-097 · **Follow-up:** AI-DEV-050, AI-DEV-097

- **AI-DEV-061 — Graph Engineering: A safe first workflow in a real repository**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible workshop on explicit workflow graphs that encode stages, state, branching, verification, and human/agent collaboration. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind graph engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-027, AI-DEV-098 · **Follow-up:** AI-DEV-098

- **AI-DEV-063 — Graph Engineering: Common coding-agent failure modes**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible live coding on explicit workflow graphs that encode stages, state, branching, verification, and human/agent collaboration. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind graph engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-026, AI-DEV-099 · **Follow-up:** AI-DEV-099

### Practitioner

- **AI-DEV-097 — Graph Engineering: Build a repeatable agentic coding workflow**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical code review applying explicit workflow graphs that encode stages, state, branching, verification, and human/agent collaboration in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic graph engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-062, AI-DEV-103 · **Related:** AI-DEV-025 · **Follow-up:** AI-DEV-025, AI-DEV-085

- **AI-DEV-098 — Graph Engineering: Context files, tools, tests, and verification**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical workshop applying explicit workflow graphs that encode stages, state, branching, verification, and human/agent collaboration in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic graph engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-061 · **Related:** AI-DEV-027 · **Follow-up:** AI-DEV-027

- **AI-DEV-099 — Graph Engineering: Review AI changes like a senior engineer**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical live coding applying explicit workflow graphs that encode stages, state, branching, verification, and human/agent collaboration in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic graph engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-063 · **Related:** AI-DEV-026 · **Follow-up:** AI-DEV-026

### Advanced

- **AI-DEV-025 — Graph Engineering: Harness design for long-running coding work**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced code review treating explicit workflow graphs that encode stages, state, branching, verification, and human/agent collaboration as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving graph engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-031, AI-DEV-097 · **Related:** AI-DEV-062 · **Follow-up:** AI-DEV-013

- **AI-DEV-027 — Graph Engineering: Parallel agents, sandboxes, and repair loops**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced workshop treating explicit workflow graphs that encode stages, state, branching, verification, and human/agent collaboration as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving graph engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-098 · **Related:** AI-DEV-061 · **Follow-up:** —

- **AI-DEV-026 — Graph Engineering: Measure engineering impact beyond generated lines**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced live coding treating explicit workflow graphs that encode stages, state, branching, verification, and human/agent collaboration as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving graph engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-099 · **Related:** AI-DEV-063 · **Follow-up:** —

### Cross-track pathway

**AI-DEV-062 Graph Engineering: AI pair programming: useful mental models** → **AI-DEV-097 Graph Engineering: Build a repeatable agentic coding workflow** → **AI-DEV-025 Graph Engineering: Harness design for long-running coding work**

### Voting opportunities

- **Non-negotiable foundation:** AI-DEV-062 — Graph Engineering: AI pair programming: useful mental models. It protects prerequisites for later months.
- **Voting cluster:** AI-DEV-063 — Graph Engineering: Common coding-agent failure modes; AI-DEV-098 — Graph Engineering: Context files, tools, tests, and verification; AI-DEV-099 — Graph Engineering: Review AI changes like a senior engineer; AI-DEV-027 — Graph Engineering: Parallel agents, sandboxes, and repair loops.
- **Conditional unlock:** AI-DEV-026 — Graph Engineering: Measure engineering impact beyond generated lines becomes visible after strong interest/participation in AI-DEV-103 — Loop Engineering: Build a repeatable agentic coding workflow.

## MARCH — Increase autonomy

**Monthly coherence.** All three tracks examine **Autonomous Development Systems**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-DEV-050 — Autonomous Development Systems: AI pair programming: useful mental models**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Experimental  
  An accessible workshop on long-running software tasks, self-verification, environments, subagents, repair loops, and supervision. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind autonomous development systems, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-DEV-062 · **Related:** AI-DEV-013, AI-DEV-085 · **Follow-up:** AI-DEV-065, AI-DEV-085

- **AI-DEV-049 — Autonomous Development Systems: A safe first workflow in a real repository**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Experimental  
  An accessible live coding on long-running software tasks, self-verification, environments, subagents, repair loops, and supervision. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind autonomous development systems, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-015, AI-DEV-086 · **Follow-up:** AI-DEV-086

- **AI-DEV-051 — Autonomous Development Systems: Common coding-agent failure modes**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Freely votable · **Durability:** Experimental  
  An accessible code review on long-running software tasks, self-verification, environments, subagents, repair loops, and supervision. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind autonomous development systems, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-014, AI-DEV-087 · **Follow-up:** AI-DEV-087

### Practitioner

- **AI-DEV-085 — Autonomous Development Systems: Build a repeatable agentic coding workflow**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Experimental  
  A practical workshop applying long-running software tasks, self-verification, environments, subagents, repair loops, and supervision in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic autonomous development systems workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-050, AI-DEV-097 · **Related:** AI-DEV-013 · **Follow-up:** AI-DEV-013, AI-DEV-100

- **AI-DEV-086 — Autonomous Development Systems: Context files, tools, tests, and verification**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Experimental  
  A practical live coding applying long-running software tasks, self-verification, environments, subagents, repair loops, and supervision in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic autonomous development systems workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-049 · **Related:** AI-DEV-015 · **Follow-up:** AI-DEV-015

- **AI-DEV-087 — Autonomous Development Systems: Review AI changes like a senior engineer**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  A practical code review applying long-running software tasks, self-verification, environments, subagents, repair loops, and supervision in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic autonomous development systems workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-051 · **Related:** AI-DEV-014 · **Follow-up:** AI-DEV-014

### Advanced

- **AI-DEV-013 — Autonomous Development Systems: Harness design for long-running coding work**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Experimental  
  An advanced workshop treating long-running software tasks, self-verification, environments, subagents, repair loops, and supervision as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving autonomous development systems, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-025, AI-DEV-085 · **Related:** AI-DEV-050 · **Follow-up:** AI-DEV-028

- **AI-DEV-015 — Autonomous Development Systems: Parallel agents, sandboxes, and repair loops**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Experimental  
  An advanced live coding treating long-running software tasks, self-verification, environments, subagents, repair loops, and supervision as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving autonomous development systems, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-086 · **Related:** AI-DEV-049 · **Follow-up:** —

- **AI-DEV-014 — Autonomous Development Systems: Measure engineering impact beyond generated lines**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced code review treating long-running software tasks, self-verification, environments, subagents, repair loops, and supervision as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving autonomous development systems, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-087 · **Related:** AI-DEV-051 · **Follow-up:** —

### Cross-track pathway

**AI-DEV-050 Autonomous Development Systems: AI pair programming: useful mental models** → **AI-DEV-085 Autonomous Development Systems: Build a repeatable agentic coding workflow** → **AI-DEV-013 Autonomous Development Systems: Harness design for long-running coding work**

### Voting opportunities

- **Non-negotiable foundation:** AI-DEV-050 — Autonomous Development Systems: AI pair programming: useful mental models. It protects prerequisites for later months.
- **Voting cluster:** AI-DEV-051 — Autonomous Development Systems: Common coding-agent failure modes; AI-DEV-086 — Autonomous Development Systems: Context files, tools, tests, and verification; AI-DEV-087 — Autonomous Development Systems: Review AI changes like a senior engineer; AI-DEV-015 — Autonomous Development Systems: Parallel agents, sandboxes, and repair loops.
- **Conditional unlock:** AI-DEV-014 — Autonomous Development Systems: Measure engineering impact beyond generated lines becomes visible after strong interest/participation in AI-DEV-097 — Graph Engineering: Build a repeatable agentic coding workflow.

## APRIL — Redesign collaboration

**Monthly coherence.** All three tracks examine **Human-Agent Collaboration**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-DEV-065 — Human-Agent Collaboration: AI pair programming: useful mental models**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible live coding on division of labor, approvals, escalation, judgment, context handoff, and maintaining human understanding. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind human-agent collaboration, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-DEV-050 · **Related:** AI-DEV-028, AI-DEV-100 · **Follow-up:** AI-DEV-044, AI-DEV-100

- **AI-DEV-064 — Human-Agent Collaboration: A safe first workflow in a real repository**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible code review on division of labor, approvals, escalation, judgment, context handoff, and maintaining human understanding. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind human-agent collaboration, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-030, AI-DEV-101 · **Follow-up:** AI-DEV-101

- **AI-DEV-066 — Human-Agent Collaboration: Common coding-agent failure modes**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible workshop on division of labor, approvals, escalation, judgment, context handoff, and maintaining human understanding. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind human-agent collaboration, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-029, AI-DEV-102 · **Follow-up:** AI-DEV-102

### Practitioner

- **AI-DEV-100 — Human-Agent Collaboration: Build a repeatable agentic coding workflow**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical live coding applying division of labor, approvals, escalation, judgment, context handoff, and maintaining human understanding in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic human-agent collaboration workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-065, AI-DEV-085 · **Related:** AI-DEV-028 · **Follow-up:** AI-DEV-028, AI-DEV-079

- **AI-DEV-101 — Human-Agent Collaboration: Context files, tools, tests, and verification**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical code review applying division of labor, approvals, escalation, judgment, context handoff, and maintaining human understanding in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic human-agent collaboration workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-064 · **Related:** AI-DEV-030 · **Follow-up:** AI-DEV-030

- **AI-DEV-102 — Human-Agent Collaboration: Review AI changes like a senior engineer**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical workshop applying division of labor, approvals, escalation, judgment, context handoff, and maintaining human understanding in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic human-agent collaboration workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-066 · **Related:** AI-DEV-029 · **Follow-up:** AI-DEV-029

### Advanced

- **AI-DEV-028 — Human-Agent Collaboration: Harness design for long-running coding work**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced live coding treating division of labor, approvals, escalation, judgment, context handoff, and maintaining human understanding as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving human-agent collaboration, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-013, AI-DEV-100 · **Related:** AI-DEV-065 · **Follow-up:** AI-DEV-007

- **AI-DEV-030 — Human-Agent Collaboration: Parallel agents, sandboxes, and repair loops**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced code review treating division of labor, approvals, escalation, judgment, context handoff, and maintaining human understanding as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving human-agent collaboration, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-101 · **Related:** AI-DEV-064 · **Follow-up:** —

- **AI-DEV-029 — Human-Agent Collaboration: Measure engineering impact beyond generated lines**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced workshop treating division of labor, approvals, escalation, judgment, context handoff, and maintaining human understanding as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving human-agent collaboration, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-102 · **Related:** AI-DEV-066 · **Follow-up:** —

### Cross-track pathway

**AI-DEV-065 Human-Agent Collaboration: AI pair programming: useful mental models** → **AI-DEV-100 Human-Agent Collaboration: Build a repeatable agentic coding workflow** → **AI-DEV-028 Human-Agent Collaboration: Harness design for long-running coding work**

### Voting opportunities

- **Non-negotiable foundation:** AI-DEV-065 — Human-Agent Collaboration: AI pair programming: useful mental models. It protects prerequisites for later months.
- **Voting cluster:** AI-DEV-066 — Human-Agent Collaboration: Common coding-agent failure modes; AI-DEV-101 — Human-Agent Collaboration: Context files, tools, tests, and verification; AI-DEV-102 — Human-Agent Collaboration: Review AI changes like a senior engineer; AI-DEV-030 — Human-Agent Collaboration: Parallel agents, sandboxes, and repair loops.
- **Conditional unlock:** AI-DEV-029 — Human-Agent Collaboration: Measure engineering impact beyond generated lines becomes visible after strong interest/participation in AI-DEV-085 — Autonomous Development Systems: Build a repeatable agentic coding workflow.

## MAY — Redesign the organisation

**Monthly coherence.** All three tracks examine **Agentic Engineering Organisations**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-DEV-044 — Agentic Engineering Organisations: AI pair programming: useful mental models**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible code review on team topology, governance, platform teams, evaluation culture, knowledge flow, and workforce implications. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agentic engineering organisations, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-DEV-065 · **Related:** AI-DEV-007, AI-DEV-079 · **Follow-up:** AI-ARC-043, AI-DEV-079

- **AI-DEV-043 — Agentic Engineering Organisations: A safe first workflow in a real repository**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible workshop on team topology, governance, platform teams, evaluation culture, knowledge flow, and workforce implications. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agentic engineering organisations, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-009, AI-DEV-080 · **Follow-up:** AI-DEV-080

- **AI-DEV-045 — Agentic Engineering Organisations: Common coding-agent failure modes**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible live coding on team topology, governance, platform teams, evaluation culture, knowledge flow, and workforce implications. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agentic engineering organisations, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-008, AI-DEV-081 · **Follow-up:** AI-DEV-081

### Practitioner

- **AI-DEV-079 — Agentic Engineering Organisations: Build a repeatable agentic coding workflow**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical code review applying team topology, governance, platform teams, evaluation culture, knowledge flow, and workforce implications in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agentic engineering organisations workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-044, AI-DEV-100 · **Related:** AI-DEV-007 · **Follow-up:** AI-ARC-077, AI-DEV-007

- **AI-DEV-080 — Agentic Engineering Organisations: Context files, tools, tests, and verification**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical workshop applying team topology, governance, platform teams, evaluation culture, knowledge flow, and workforce implications in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agentic engineering organisations workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-043 · **Related:** AI-DEV-009 · **Follow-up:** AI-DEV-009

- **AI-DEV-081 — Agentic Engineering Organisations: Review AI changes like a senior engineer**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical live coding applying team topology, governance, platform teams, evaluation culture, knowledge flow, and workforce implications in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agentic engineering organisations workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-045 · **Related:** AI-DEV-008 · **Follow-up:** AI-DEV-008

### Advanced

- **AI-DEV-007 — Agentic Engineering Organisations: Harness design for long-running coding work**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced code review treating team topology, governance, platform teams, evaluation culture, knowledge flow, and workforce implications as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agentic engineering organisations, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-028, AI-DEV-079 · **Related:** AI-DEV-044 · **Follow-up:** AI-ARC-010

- **AI-DEV-009 — Agentic Engineering Organisations: Parallel agents, sandboxes, and repair loops**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced workshop treating team topology, governance, platform teams, evaluation culture, knowledge flow, and workforce implications as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agentic engineering organisations, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-080 · **Related:** AI-DEV-043 · **Follow-up:** —

- **AI-DEV-008 — Agentic Engineering Organisations: Measure engineering impact beyond generated lines**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced live coding treating team topology, governance, platform teams, evaluation culture, knowledge flow, and workforce implications as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agentic engineering organisations, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-081 · **Related:** AI-DEV-045 · **Follow-up:** —

### Cross-track pathway

**AI-DEV-044 Agentic Engineering Organisations: AI pair programming: useful mental models** → **AI-DEV-079 Agentic Engineering Organisations: Build a repeatable agentic coding workflow** → **AI-DEV-007 Agentic Engineering Organisations: Harness design for long-running coding work**

### Voting opportunities

- **Non-negotiable foundation:** AI-DEV-044 — Agentic Engineering Organisations: AI pair programming: useful mental models. It protects prerequisites for later months.
- **Voting cluster:** AI-DEV-045 — Agentic Engineering Organisations: Common coding-agent failure modes; AI-DEV-080 — Agentic Engineering Organisations: Context files, tools, tests, and verification; AI-DEV-081 — Agentic Engineering Organisations: Review AI changes like a senior engineer; AI-DEV-009 — Agentic Engineering Organisations: Parallel agents, sandboxes, and repair loops.
- **Conditional unlock:** AI-DEV-008 — Agentic Engineering Organisations: Measure engineering impact beyond generated lines becomes visible after strong interest/participation in AI-DEV-100 — Human-Agent Collaboration: Build a repeatable agentic coding workflow.

## JUNE — Imagine the architecture

**Monthly coherence.** All three tracks examine **Future Software Architecture Patterns**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-ARC-043 — Future Software Architecture Patterns: Read the system as boxes and arrows**  
  **Theme:** architecture · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Experimental  
  An accessible workshop on software designed around agents, durable workflows, tool protocols, evaluators, human gates, and continuous adaptation. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind future software architecture patterns, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-DEV-044 · **Related:** AI-ARC-010, AI-ARC-077 · **Follow-up:** AI-ARC-077

- **AI-ARC-045 — Future Software Architecture Patterns: State, boundaries, and contracts**  
  **Theme:** architecture · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Experimental  
  An accessible presentation on software designed around agents, durable workflows, tool protocols, evaluators, human gates, and continuous adaptation. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind future software architecture patterns, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-011, AI-ARC-076 · **Follow-up:** AI-ARC-076

- **AI-ARC-044 — Future Software Architecture Patterns: Recognize coupling and hidden dependencies**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Experimental  
  An accessible hands-on lab on software designed around agents, durable workflows, tool protocols, evaluators, human gates, and continuous adaptation. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind future software architecture patterns, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-012, AI-ARC-078 · **Follow-up:** AI-ARC-078

### Practitioner

- **AI-ARC-077 — Future Software Architecture Patterns: Design the reference architecture**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Experimental  
  A practical architecture clinic applying software designed around agents, durable workflows, tool protocols, evaluators, human gates, and continuous adaptation in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic future software architecture patterns workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-043, AI-DEV-079 · **Related:** AI-ARC-010 · **Follow-up:** AI-ARC-010

- **AI-ARC-076 — Future Software Architecture Patterns: Compare competing patterns and trade-offs**  
  **Theme:** architecture · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Experimental  
  A practical live coding applying software designed around agents, durable workflows, tool protocols, evaluators, human gates, and continuous adaptation in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic future software architecture patterns workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-045 · **Related:** AI-ARC-011 · **Follow-up:** AI-ARC-011

- **AI-ARC-078 — Future Software Architecture Patterns: Evolve the architecture without rewrites**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  A practical hands-on lab applying software designed around agents, durable workflows, tool protocols, evaluators, human gates, and continuous adaptation in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic future software architecture patterns workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-044 · **Related:** AI-ARC-012 · **Follow-up:** AI-ARC-012

### Advanced

- **AI-ARC-010 — Future Software Architecture Patterns: Architecture clinic under hard constraints**  
  **Theme:** architecture · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Experimental  
  An advanced research walkthrough treating software designed around agents, durable workflows, tool protocols, evaluators, human gates, and continuous adaptation as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving future software architecture patterns, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-077, AI-DEV-007 · **Related:** AI-ARC-043 · **Follow-up:** —

- **AI-ARC-011 — Future Software Architecture Patterns: Distributed systems trade-offs for AI**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Experimental  
  An advanced architecture clinic treating software designed around agents, durable workflows, tool protocols, evaluators, human gates, and continuous adaptation as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving future software architecture patterns, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-076 · **Related:** AI-ARC-045 · **Follow-up:** —

- **AI-ARC-012 — Future Software Architecture Patterns: Failure domains, governance, and future evolution**  
  **Theme:** architecture · **Format:** case study · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced case study treating software designed around agents, durable workflows, tool protocols, evaluators, human gates, and continuous adaptation as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving future software architecture patterns, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-078 · **Related:** AI-ARC-044 · **Follow-up:** —

### Cross-track pathway

**AI-ARC-043 Future Software Architecture Patterns: Read the system as boxes and arrows** → **AI-ARC-077 Future Software Architecture Patterns: Design the reference architecture** → **AI-ARC-010 Future Software Architecture Patterns: Architecture clinic under hard constraints**

### Voting opportunities

- **Non-negotiable foundation:** AI-ARC-043 — Future Software Architecture Patterns: Read the system as boxes and arrows. It protects prerequisites for later months.
- **Voting cluster:** AI-ARC-044 — Future Software Architecture Patterns: Recognize coupling and hidden dependencies; AI-ARC-076 — Future Software Architecture Patterns: Compare competing patterns and trade-offs; AI-ARC-078 — Future Software Architecture Patterns: Evolve the architecture without rewrites; AI-ARC-011 — Future Software Architecture Patterns: Distributed systems trade-offs for AI.
- **Conditional unlock:** AI-ARC-012 — Future Software Architecture Patterns: Failure domains, governance, and future evolution becomes visible after strong interest/participation in AI-DEV-079 — Agentic Engineering Organisations: Build a repeatable agentic coding workflow.

## 6. Longitudinal pathways

- **Foundation spine:** Oct [F] AI-DEV-053 Coding Agents as a New Engineering Primitive → Dec [F] AI-DEV-071 Specification-Driven Development → Feb [F] AI-DEV-062 Graph Engineering → Apr [F] AI-DEV-065 Human-Agent Collaboration → Jun [F] AI-ARC-043 Future Software Architecture Patterns
- **Practitioner spine:** Oct [P] AI-DEV-088 Coding Agents as a New Engineering Primitive → Dec [P] AI-DEV-106 Specification-Driven Development → Feb [P] AI-DEV-097 Graph Engineering → Apr [P] AI-DEV-100 Human-Agent Collaboration → Jun [P] AI-ARC-077 Future Software Architecture Patterns
- **Advanced spine:** Oct [A] AI-DEV-016 Coding Agents as a New Engineering Primitive → Dec [A] AI-DEV-034 Specification-Driven Development → Feb [A] AI-DEV-025 Graph Engineering → Apr [A] AI-DEV-028 Human-Agent Collaboration → Jun [A] AI-ARC-010 Future Software Architecture Patterns

## 7. Branching paths

```text
AI-DEV-103 Loop Engineering
├── implementation branch → AI-DEV-098 Graph Engineering
├── architecture branch   → AI-DEV-015 Autonomous Development Systems
└── frontier branch       → AI-DEV-029 Human-Agent Collaboration
```

Member interest can determine which branch receives a live workshop versus becoming optional reading/lab material. The prerequisite spine remains protected.

## 8. Season-level voting model

- **Editorially protected:** first Foundation topic each month, plus any prerequisite explicitly required by a later Core session.
- **Primary voting surface:** Elective Foundation topics, Practitioner trade-off labs, and Advanced architecture alternatives.
- **Unlockable:** Experimental Advanced sessions and frontier branches; reveal only after participation or interest thresholds are met.
- **Wild-card slot:** reserve at least one spring session for an emerging development that passes editorial relevance and evidence checks.

## 9. Simplified programme graph

```text
[Oct] AI-DEV-088 Coding Agents as a New Engineering Primitive
      ↓
[Nov] AI-CTX-015 Context Engineering for Code
      ↓
[Jan] AI-DEV-103 Loop Engineering
      ↓
[Feb] AI-DEV-097 Graph Engineering
      ↓
[Apr] AI-DEV-100 Human-Agent Collaboration
      ↓
[Jun] AI-ARC-077 Future Software Architecture Patterns
```

## 10. Monthly balance validation

| Month | Foundation | Practitioner | Advanced | Total candidates |
|---|---:|---:|---:|---:|
| October | 3 | 3 | 3 | 9 |
| November | 3 | 3 | 3 | 9 |
| December | 3 | 3 | 3 | 9 |
| January | 3 | 3 | 3 | 9 |
| February | 3 | 3 | 3 | 9 |
| March | 3 | 3 | 3 | 9 |
| April | 3 | 3 | 3 | 9 |
| May | 3 | 3 | 3 | 9 |
| June | 3 | 3 | 3 | 9 |

## 11. Programme summary

- **Foundation candidates:** 27
- **Practitioner candidates:** 27
- **Advanced candidates:** 27
- **Total candidate placements:** 81
- **Core:** 44.4% · **Elective:** 44.4% · **Experimental:** 11.1%
- **Beginner accessibility:** 4/5
- **Technical depth:** 5/5
- **Hands-on intensity:** 5/5
- **Production relevance:** 4/5
- **Research orientation:** 4/5
