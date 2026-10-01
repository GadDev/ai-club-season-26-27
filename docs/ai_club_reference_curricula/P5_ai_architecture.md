# P5 — AI Architecture

> **Design the boundaries before the framework chooses them for you.**

## 1. Programme identity

- **Educational philosophy:** Use AI systems to teach architecture: context, retrieval, graph knowledge, tool contracts, protocols, events, memory, gateways, and inference topologies.
- **Target audience:** Senior engineers, architects, platform engineers, and practitioners ready to move beyond feature-level implementation.
- **Primary themes:** context architecture, retrieval, graphs, tools, protocols, event-driven systems, memory, gateways, inference
- **What makes it different:** Every month is an architectural decision surface, making trade-offs and system boundaries the central skill.
- **Main strengths:** Best architecture depth; durable; excellent debate/clinic material; naturally cross-functional.
- **Potential weaknesses:** Steepest entry curve; needs strong facilitation to keep Foundation sessions concrete.
- **Expected difficulty profile:** Foundation provides diagrams and mental models; Practitioner designs; Advanced handles scale, trust, evolution.

**Why it deserves to exist independently:** Every month is an architectural decision surface, making trade-offs and system boundaries the central skill. That creates a different set of curriculum trade-offs, voting clusters, and capstone outcomes than the other reference seasons.

## 2. Season narrative

**October — Assemble context:** Context Architecture
↓
**November — Design retrieval:** Retrieval Architecture
↓
**December — Model knowledge:** Knowledge Graphs for AI Systems
↓
**January — Define capabilities:** Tool & Capability Contracts
↓
**February — Standardize boundaries:** Agent Protocol Architecture
↓
**March — Decouple with events:** Event-Driven AI Systems
↓
**April — Place memory:** Memory Architecture
↓
**May — Govern models:** Model Gateways
↓
**June — Place compute:** Inference Architecture

## 3–5. Month-by-month curriculum, coherence, and cross-track pathways

## OCTOBER — Assemble context

**Monthly coherence.** All three tracks examine **Context Architecture**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-ARC-037 — Context Architecture: Read the system as boxes and arrows**  
  **Theme:** architecture · **Format:** presentation · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible presentation on how system prompts, memory, retrieval, tools, history, and policy are assembled into model-visible state. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind context architecture, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-004, AI-ARC-071 · **Follow-up:** AI-ARC-061, AI-ARC-071

- **AI-ARC-039 — Context Architecture: State, boundaries, and contracts**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible hands-on lab on how system prompts, memory, retrieval, tools, history, and policy are assembled into model-visible state. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind context architecture, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-005, AI-ARC-070 · **Follow-up:** AI-ARC-070

- **AI-ARC-038 — Context Architecture: Recognize coupling and hidden dependencies**  
  **Theme:** architecture · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible workshop on how system prompts, memory, retrieval, tools, history, and policy are assembled into model-visible state. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind context architecture, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-006, AI-ARC-072 · **Follow-up:** AI-ARC-072

### Practitioner

- **AI-ARC-071 — Context Architecture: Design the reference architecture**  
  **Theme:** architecture · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical live coding applying how system prompts, memory, retrieval, tools, history, and policy are assembled into model-visible state in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic context architecture workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-037 · **Related:** AI-ARC-004 · **Follow-up:** AI-ARC-004, AI-ARC-095

- **AI-ARC-070 — Context Architecture: Compare competing patterns and trade-offs**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical hands-on lab applying how system prompts, memory, retrieval, tools, history, and policy are assembled into model-visible state in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic context architecture workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-039 · **Related:** AI-ARC-005 · **Follow-up:** AI-ARC-005

- **AI-ARC-072 — Context Architecture: Evolve the architecture without rewrites**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical architecture clinic applying how system prompts, memory, retrieval, tools, history, and policy are assembled into model-visible state in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic context architecture workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-038 · **Related:** AI-ARC-006 · **Follow-up:** AI-ARC-006

### Advanced

- **AI-ARC-004 — Context Architecture: Architecture clinic under hard constraints**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced architecture clinic treating how system prompts, memory, retrieval, tools, history, and policy are assembled into model-visible state as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving context architecture, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-071 · **Related:** AI-ARC-037 · **Follow-up:** AI-ARC-028

- **AI-ARC-005 — Context Architecture: Distributed systems trade-offs for AI**  
  **Theme:** architecture · **Format:** case study · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced case study treating how system prompts, memory, retrieval, tools, history, and policy are assembled into model-visible state as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving context architecture, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-070 · **Related:** AI-ARC-039 · **Follow-up:** —

- **AI-ARC-006 — Context Architecture: Failure domains, governance, and future evolution**  
  **Theme:** architecture · **Format:** research walkthrough · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced research walkthrough treating how system prompts, memory, retrieval, tools, history, and policy are assembled into model-visible state as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving context architecture, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-072 · **Related:** AI-ARC-038 · **Follow-up:** —

### Cross-track pathway

**AI-ARC-037 Context Architecture: Read the system as boxes and arrows** → **AI-ARC-071 Context Architecture: Design the reference architecture** → **AI-ARC-004 Context Architecture: Architecture clinic under hard constraints**

### Voting opportunities

- **Non-negotiable foundation:** AI-ARC-037 — Context Architecture: Read the system as boxes and arrows. It protects prerequisites for later months.
- **Voting cluster:** AI-ARC-038 — Context Architecture: Recognize coupling and hidden dependencies; AI-ARC-070 — Context Architecture: Compare competing patterns and trade-offs; AI-ARC-072 — Context Architecture: Evolve the architecture without rewrites; AI-ARC-005 — Context Architecture: Distributed systems trade-offs for AI.
- **Conditional unlock:** AI-ARC-006 — Context Architecture: Failure domains, governance, and future evolution becomes visible after AI-ARC-037 or another October prerequisite.

## NOVEMBER — Design retrieval

**Monthly coherence.** All three tracks examine **Retrieval Architecture**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-ARC-061 — Retrieval Architecture: Read the system as boxes and arrows**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible hands-on lab on indexes, search strategies, rerankers, freshness, permissions, and retrieval services as platform components. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind retrieval architecture, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-ARC-037 · **Related:** AI-ARC-028, AI-ARC-095 · **Follow-up:** AI-ARC-049, AI-ARC-095

- **AI-ARC-063 — Retrieval Architecture: State, boundaries, and contracts**  
  **Theme:** architecture · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on indexes, search strategies, rerankers, freshness, permissions, and retrieval services as platform components. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind retrieval architecture, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-029, AI-ARC-094 · **Follow-up:** AI-ARC-094

- **AI-ARC-062 — Retrieval Architecture: Recognize coupling and hidden dependencies**  
  **Theme:** architecture · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible presentation on indexes, search strategies, rerankers, freshness, permissions, and retrieval services as platform components. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind retrieval architecture, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-030, AI-ARC-096 · **Follow-up:** AI-ARC-096

### Practitioner

- **AI-ARC-095 — Retrieval Architecture: Design the reference architecture**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical hands-on lab applying indexes, search strategies, rerankers, freshness, permissions, and retrieval services as platform components in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic retrieval architecture workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-061, AI-ARC-071 · **Related:** AI-ARC-028 · **Follow-up:** AI-ARC-028, AI-ARC-083

- **AI-ARC-094 — Retrieval Architecture: Compare competing patterns and trade-offs**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical architecture clinic applying indexes, search strategies, rerankers, freshness, permissions, and retrieval services as platform components in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic retrieval architecture workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-063 · **Related:** AI-ARC-029 · **Follow-up:** AI-ARC-029

- **AI-ARC-096 — Retrieval Architecture: Evolve the architecture without rewrites**  
  **Theme:** architecture · **Format:** live coding · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical live coding applying indexes, search strategies, rerankers, freshness, permissions, and retrieval services as platform components in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic retrieval architecture workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-062 · **Related:** AI-ARC-030 · **Follow-up:** AI-ARC-030

### Advanced

- **AI-ARC-028 — Retrieval Architecture: Architecture clinic under hard constraints**  
  **Theme:** architecture · **Format:** case study · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced case study treating indexes, search strategies, rerankers, freshness, permissions, and retrieval services as platform components as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving retrieval architecture, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-004, AI-ARC-095 · **Related:** AI-ARC-061 · **Follow-up:** AI-ARC-016

- **AI-ARC-029 — Retrieval Architecture: Distributed systems trade-offs for AI**  
  **Theme:** architecture · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced research walkthrough treating indexes, search strategies, rerankers, freshness, permissions, and retrieval services as platform components as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving retrieval architecture, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-094 · **Related:** AI-ARC-063 · **Follow-up:** —

- **AI-ARC-030 — Retrieval Architecture: Failure domains, governance, and future evolution**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced architecture clinic treating indexes, search strategies, rerankers, freshness, permissions, and retrieval services as platform components as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving retrieval architecture, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-096 · **Related:** AI-ARC-062 · **Follow-up:** —

### Cross-track pathway

**AI-ARC-061 Retrieval Architecture: Read the system as boxes and arrows** → **AI-ARC-095 Retrieval Architecture: Design the reference architecture** → **AI-ARC-028 Retrieval Architecture: Architecture clinic under hard constraints**

### Voting opportunities

- **Non-negotiable foundation:** AI-ARC-061 — Retrieval Architecture: Read the system as boxes and arrows. It protects prerequisites for later months.
- **Voting cluster:** AI-ARC-062 — Retrieval Architecture: Recognize coupling and hidden dependencies; AI-ARC-094 — Retrieval Architecture: Compare competing patterns and trade-offs; AI-ARC-096 — Retrieval Architecture: Evolve the architecture without rewrites; AI-ARC-029 — Retrieval Architecture: Distributed systems trade-offs for AI.
- **Conditional unlock:** AI-ARC-030 — Retrieval Architecture: Failure domains, governance, and future evolution becomes visible after strong interest/participation in AI-ARC-071 — Context Architecture: Design the reference architecture.

## DECEMBER — Model knowledge

**Monthly coherence.** All three tracks examine **Knowledge Graphs for AI Systems**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-ARC-049 — Knowledge Graphs for AI Systems: Read the system as boxes and arrows**  
  **Theme:** architecture · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible workshop on graph-shaped knowledge, entity relationships, hybrid retrieval, provenance, and graph-assisted reasoning. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind knowledge graphs for ai systems, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-ARC-061 · **Related:** AI-ARC-016, AI-ARC-083 · **Follow-up:** AI-ARC-064, AI-ARC-083

- **AI-ARC-051 — Knowledge Graphs for AI Systems: State, boundaries, and contracts**  
  **Theme:** architecture · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible presentation on graph-shaped knowledge, entity relationships, hybrid retrieval, provenance, and graph-assisted reasoning. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind knowledge graphs for ai systems, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-017, AI-ARC-082 · **Follow-up:** AI-ARC-082

- **AI-ARC-050 — Knowledge Graphs for AI Systems: Recognize coupling and hidden dependencies**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible hands-on lab on graph-shaped knowledge, entity relationships, hybrid retrieval, provenance, and graph-assisted reasoning. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind knowledge graphs for ai systems, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-018, AI-ARC-084 · **Follow-up:** AI-ARC-084

### Practitioner

- **AI-ARC-083 — Knowledge Graphs for AI Systems: Design the reference architecture**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical architecture clinic applying graph-shaped knowledge, entity relationships, hybrid retrieval, provenance, and graph-assisted reasoning in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic knowledge graphs for ai systems workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-049, AI-ARC-095 · **Related:** AI-ARC-016 · **Follow-up:** AI-ARC-016, AI-ARC-098

- **AI-ARC-082 — Knowledge Graphs for AI Systems: Compare competing patterns and trade-offs**  
  **Theme:** architecture · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical live coding applying graph-shaped knowledge, entity relationships, hybrid retrieval, provenance, and graph-assisted reasoning in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic knowledge graphs for ai systems workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-051 · **Related:** AI-ARC-017 · **Follow-up:** AI-ARC-017

- **AI-ARC-084 — Knowledge Graphs for AI Systems: Evolve the architecture without rewrites**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical hands-on lab applying graph-shaped knowledge, entity relationships, hybrid retrieval, provenance, and graph-assisted reasoning in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic knowledge graphs for ai systems workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-050 · **Related:** AI-ARC-018 · **Follow-up:** AI-ARC-018

### Advanced

- **AI-ARC-016 — Knowledge Graphs for AI Systems: Architecture clinic under hard constraints**  
  **Theme:** architecture · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced research walkthrough treating graph-shaped knowledge, entity relationships, hybrid retrieval, provenance, and graph-assisted reasoning as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving knowledge graphs for ai systems, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-028, AI-ARC-083 · **Related:** AI-ARC-049 · **Follow-up:** AI-ARC-031

- **AI-ARC-017 — Knowledge Graphs for AI Systems: Distributed systems trade-offs for AI**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced architecture clinic treating graph-shaped knowledge, entity relationships, hybrid retrieval, provenance, and graph-assisted reasoning as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving knowledge graphs for ai systems, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-082 · **Related:** AI-ARC-051 · **Follow-up:** —

- **AI-ARC-018 — Knowledge Graphs for AI Systems: Failure domains, governance, and future evolution**  
  **Theme:** architecture · **Format:** case study · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced case study treating graph-shaped knowledge, entity relationships, hybrid retrieval, provenance, and graph-assisted reasoning as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving knowledge graphs for ai systems, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-084 · **Related:** AI-ARC-050 · **Follow-up:** —

### Cross-track pathway

**AI-ARC-049 Knowledge Graphs for AI Systems: Read the system as boxes and arrows** → **AI-ARC-083 Knowledge Graphs for AI Systems: Design the reference architecture** → **AI-ARC-016 Knowledge Graphs for AI Systems: Architecture clinic under hard constraints**

### Voting opportunities

- **Non-negotiable foundation:** AI-ARC-049 — Knowledge Graphs for AI Systems: Read the system as boxes and arrows. It protects prerequisites for later months.
- **Voting cluster:** AI-ARC-050 — Knowledge Graphs for AI Systems: Recognize coupling and hidden dependencies; AI-ARC-082 — Knowledge Graphs for AI Systems: Compare competing patterns and trade-offs; AI-ARC-084 — Knowledge Graphs for AI Systems: Evolve the architecture without rewrites; AI-ARC-017 — Knowledge Graphs for AI Systems: Distributed systems trade-offs for AI.
- **Conditional unlock:** AI-ARC-018 — Knowledge Graphs for AI Systems: Failure domains, governance, and future evolution becomes visible after strong interest/participation in AI-ARC-095 — Retrieval Architecture: Design the reference architecture.

## JANUARY — Define capabilities

**Monthly coherence.** All three tracks examine **Tool & Capability Contracts**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-ARC-064 — Tool & Capability Contracts: Read the system as boxes and arrows**  
  **Theme:** architecture · **Format:** presentation · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible presentation on typed tool surfaces, capability boundaries, side-effect contracts, and evolvable agent interfaces. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind tool & capability contracts, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-ARC-049 · **Related:** AI-ARC-031, AI-ARC-098 · **Follow-up:** AI-ARC-098, AI-PRT-012

- **AI-ARC-066 — Tool & Capability Contracts: State, boundaries, and contracts**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible hands-on lab on typed tool surfaces, capability boundaries, side-effect contracts, and evolvable agent interfaces. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind tool & capability contracts, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-032, AI-ARC-097 · **Follow-up:** AI-ARC-097

- **AI-ARC-065 — Tool & Capability Contracts: Recognize coupling and hidden dependencies**  
  **Theme:** architecture · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible workshop on typed tool surfaces, capability boundaries, side-effect contracts, and evolvable agent interfaces. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind tool & capability contracts, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-033, AI-ARC-099 · **Follow-up:** AI-ARC-099

### Practitioner

- **AI-ARC-098 — Tool & Capability Contracts: Design the reference architecture**  
  **Theme:** architecture · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical live coding applying typed tool surfaces, capability boundaries, side-effect contracts, and evolvable agent interfaces in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic tool & capability contracts workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-064, AI-ARC-083 · **Related:** AI-ARC-031 · **Follow-up:** AI-ARC-031, AI-PRT-021

- **AI-ARC-097 — Tool & Capability Contracts: Compare competing patterns and trade-offs**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical hands-on lab applying typed tool surfaces, capability boundaries, side-effect contracts, and evolvable agent interfaces in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic tool & capability contracts workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-066 · **Related:** AI-ARC-032 · **Follow-up:** AI-ARC-032

- **AI-ARC-099 — Tool & Capability Contracts: Evolve the architecture without rewrites**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical architecture clinic applying typed tool surfaces, capability boundaries, side-effect contracts, and evolvable agent interfaces in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic tool & capability contracts workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-065 · **Related:** AI-ARC-033 · **Follow-up:** AI-ARC-033

### Advanced

- **AI-ARC-031 — Tool & Capability Contracts: Architecture clinic under hard constraints**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced architecture clinic treating typed tool surfaces, capability boundaries, side-effect contracts, and evolvable agent interfaces as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving tool & capability contracts, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-016, AI-ARC-098 · **Related:** AI-ARC-064 · **Follow-up:** AI-PRT-003

- **AI-ARC-032 — Tool & Capability Contracts: Distributed systems trade-offs for AI**  
  **Theme:** architecture · **Format:** case study · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced case study treating typed tool surfaces, capability boundaries, side-effect contracts, and evolvable agent interfaces as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving tool & capability contracts, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-097 · **Related:** AI-ARC-066 · **Follow-up:** —

- **AI-ARC-033 — Tool & Capability Contracts: Failure domains, governance, and future evolution**  
  **Theme:** architecture · **Format:** research walkthrough · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced research walkthrough treating typed tool surfaces, capability boundaries, side-effect contracts, and evolvable agent interfaces as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving tool & capability contracts, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-099 · **Related:** AI-ARC-065 · **Follow-up:** —

### Cross-track pathway

**AI-ARC-064 Tool & Capability Contracts: Read the system as boxes and arrows** → **AI-ARC-098 Tool & Capability Contracts: Design the reference architecture** → **AI-ARC-031 Tool & Capability Contracts: Architecture clinic under hard constraints**

### Voting opportunities

- **Non-negotiable foundation:** AI-ARC-064 — Tool & Capability Contracts: Read the system as boxes and arrows. It protects prerequisites for later months.
- **Voting cluster:** AI-ARC-065 — Tool & Capability Contracts: Recognize coupling and hidden dependencies; AI-ARC-097 — Tool & Capability Contracts: Compare competing patterns and trade-offs; AI-ARC-099 — Tool & Capability Contracts: Evolve the architecture without rewrites; AI-ARC-032 — Tool & Capability Contracts: Distributed systems trade-offs for AI.
- **Conditional unlock:** AI-ARC-033 — Tool & Capability Contracts: Failure domains, governance, and future evolution becomes visible after strong interest/participation in AI-ARC-083 — Knowledge Graphs for AI Systems: Design the reference architecture.

## FEBRUARY — Standardize boundaries

**Monthly coherence.** All three tracks examine **Agent Protocol Architecture**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-PRT-012 — Agent Protocol Architecture: Why agent protocols exist**  
  **Theme:** protocols · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible hands-on lab on MCP, A2A, HTTP/REST, events, capability discovery, and choosing interoperability boundaries. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent protocol architecture, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-ARC-064 · **Related:** AI-PRT-003, AI-PRT-021 · **Follow-up:** AI-ARC-040, AI-PRT-021

- **AI-PRT-011 — Agent Protocol Architecture: Read a protocol flow end to end**  
  **Theme:** protocols · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible architecture clinic on MCP, A2A, HTTP/REST, events, capability discovery, and choosing interoperability boundaries. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent protocol architecture, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-PRT-002, AI-PRT-019 · **Follow-up:** AI-PRT-019

- **AI-PRT-010 — Agent Protocol Architecture: MCP, A2A, REST: different jobs**  
  **Theme:** protocols · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible presentation on MCP, A2A, HTTP/REST, events, capability discovery, and choosing interoperability boundaries. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent protocol architecture, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-PRT-001, AI-PRT-020 · **Follow-up:** AI-PRT-020

### Practitioner

- **AI-PRT-021 — Agent Protocol Architecture: Implement one interoperable slice**  
  **Theme:** protocols · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical hands-on lab applying MCP, A2A, HTTP/REST, events, capability discovery, and choosing interoperability boundaries in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent protocol architecture workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-098, AI-PRT-012 · **Related:** AI-PRT-003 · **Follow-up:** AI-ARC-074, AI-PRT-003

- **AI-PRT-019 — Agent Protocol Architecture: Auth, capabilities, versioning, and contract tests**  
  **Theme:** protocols · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical architecture clinic applying MCP, A2A, HTTP/REST, events, capability discovery, and choosing interoperability boundaries in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent protocol architecture workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-PRT-011 · **Related:** AI-PRT-002 · **Follow-up:** AI-PRT-002

- **AI-PRT-020 — Agent Protocol Architecture: Choose protocol boundaries pragmatically**  
  **Theme:** protocols · **Format:** presentation · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical presentation applying MCP, A2A, HTTP/REST, events, capability discovery, and choosing interoperability boundaries in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent protocol architecture workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-PRT-010 · **Related:** AI-PRT-001 · **Follow-up:** AI-PRT-001

### Advanced

- **AI-PRT-003 — Agent Protocol Architecture: Protocol architecture and trust boundaries**  
  **Theme:** protocols · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced hands-on lab treating MCP, A2A, HTTP/REST, events, capability discovery, and choosing interoperability boundaries as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent protocol architecture, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-031, AI-PRT-021 · **Related:** AI-PRT-012 · **Follow-up:** AI-ARC-007

- **AI-PRT-002 — Agent Protocol Architecture: Interoperability at enterprise scale**  
  **Theme:** protocols · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced architecture clinic treating MCP, A2A, HTTP/REST, events, capability discovery, and choosing interoperability boundaries as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent protocol architecture, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-PRT-019 · **Related:** AI-PRT-011 · **Follow-up:** —

- **AI-PRT-001 — Agent Protocol Architecture: Evolve protocols without locking the platform**  
  **Theme:** protocols · **Format:** presentation · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced presentation treating MCP, A2A, HTTP/REST, events, capability discovery, and choosing interoperability boundaries as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent protocol architecture, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-PRT-020 · **Related:** AI-PRT-010 · **Follow-up:** —

### Cross-track pathway

**AI-PRT-012 Agent Protocol Architecture: Why agent protocols exist** → **AI-PRT-021 Agent Protocol Architecture: Implement one interoperable slice** → **AI-PRT-003 Agent Protocol Architecture: Protocol architecture and trust boundaries**

### Voting opportunities

- **Non-negotiable foundation:** AI-PRT-012 — Agent Protocol Architecture: Why agent protocols exist. It protects prerequisites for later months.
- **Voting cluster:** AI-PRT-010 — Agent Protocol Architecture: MCP, A2A, REST: different jobs; AI-PRT-019 — Agent Protocol Architecture: Auth, capabilities, versioning, and contract tests; AI-PRT-020 — Agent Protocol Architecture: Choose protocol boundaries pragmatically; AI-PRT-002 — Agent Protocol Architecture: Interoperability at enterprise scale.
- **Conditional unlock:** AI-PRT-001 — Agent Protocol Architecture: Evolve protocols without locking the platform becomes visible after strong interest/participation in AI-ARC-098 — Tool & Capability Contracts: Design the reference architecture.

## MARCH — Decouple with events

**Monthly coherence.** All three tracks examine **Event-Driven AI Systems**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-ARC-040 — Event-Driven AI Systems: Read the system as boxes and arrows**  
  **Theme:** architecture · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible workshop on queues, events, async jobs, durable workflows, agent triggers, and decoupled AI services. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind event-driven ai systems, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-PRT-012 · **Related:** AI-ARC-007, AI-ARC-074 · **Follow-up:** AI-ARC-052, AI-ARC-074

- **AI-ARC-042 — Event-Driven AI Systems: State, boundaries, and contracts**  
  **Theme:** architecture · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible presentation on queues, events, async jobs, durable workflows, agent triggers, and decoupled AI services. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind event-driven ai systems, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-008, AI-ARC-073 · **Follow-up:** AI-ARC-073

- **AI-ARC-041 — Event-Driven AI Systems: Recognize coupling and hidden dependencies**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible hands-on lab on queues, events, async jobs, durable workflows, agent triggers, and decoupled AI services. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind event-driven ai systems, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-009, AI-ARC-075 · **Follow-up:** AI-ARC-075

### Practitioner

- **AI-ARC-074 — Event-Driven AI Systems: Design the reference architecture**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical architecture clinic applying queues, events, async jobs, durable workflows, agent triggers, and decoupled AI services in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic event-driven ai systems workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-040, AI-PRT-021 · **Related:** AI-ARC-007 · **Follow-up:** AI-ARC-007, AI-ARC-086

- **AI-ARC-073 — Event-Driven AI Systems: Compare competing patterns and trade-offs**  
  **Theme:** architecture · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical live coding applying queues, events, async jobs, durable workflows, agent triggers, and decoupled AI services in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic event-driven ai systems workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-042 · **Related:** AI-ARC-008 · **Follow-up:** AI-ARC-008

- **AI-ARC-075 — Event-Driven AI Systems: Evolve the architecture without rewrites**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical hands-on lab applying queues, events, async jobs, durable workflows, agent triggers, and decoupled AI services in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic event-driven ai systems workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-041 · **Related:** AI-ARC-009 · **Follow-up:** AI-ARC-009

### Advanced

- **AI-ARC-007 — Event-Driven AI Systems: Architecture clinic under hard constraints**  
  **Theme:** architecture · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced research walkthrough treating queues, events, async jobs, durable workflows, agent triggers, and decoupled AI services as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving event-driven ai systems, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-074, AI-PRT-003 · **Related:** AI-ARC-040 · **Follow-up:** AI-ARC-019

- **AI-ARC-008 — Event-Driven AI Systems: Distributed systems trade-offs for AI**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced architecture clinic treating queues, events, async jobs, durable workflows, agent triggers, and decoupled AI services as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving event-driven ai systems, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-073 · **Related:** AI-ARC-042 · **Follow-up:** —

- **AI-ARC-009 — Event-Driven AI Systems: Failure domains, governance, and future evolution**  
  **Theme:** architecture · **Format:** case study · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced case study treating queues, events, async jobs, durable workflows, agent triggers, and decoupled AI services as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving event-driven ai systems, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-075 · **Related:** AI-ARC-041 · **Follow-up:** —

### Cross-track pathway

**AI-ARC-040 Event-Driven AI Systems: Read the system as boxes and arrows** → **AI-ARC-074 Event-Driven AI Systems: Design the reference architecture** → **AI-ARC-007 Event-Driven AI Systems: Architecture clinic under hard constraints**

### Voting opportunities

- **Non-negotiable foundation:** AI-ARC-040 — Event-Driven AI Systems: Read the system as boxes and arrows. It protects prerequisites for later months.
- **Voting cluster:** AI-ARC-041 — Event-Driven AI Systems: Recognize coupling and hidden dependencies; AI-ARC-073 — Event-Driven AI Systems: Compare competing patterns and trade-offs; AI-ARC-075 — Event-Driven AI Systems: Evolve the architecture without rewrites; AI-ARC-008 — Event-Driven AI Systems: Distributed systems trade-offs for AI.
- **Conditional unlock:** AI-ARC-009 — Event-Driven AI Systems: Failure domains, governance, and future evolution becomes visible after strong interest/participation in AI-PRT-021 — Agent Protocol Architecture: Implement one interoperable slice.

## APRIL — Place memory

**Monthly coherence.** All three tracks examine **Memory Architecture**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-ARC-052 — Memory Architecture: Read the system as boxes and arrows**  
  **Theme:** architecture · **Format:** presentation · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible presentation on session state, user memory, episodic stores, summaries, retrieval, retention, and memory governance. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind memory architecture, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-ARC-040 · **Related:** AI-ARC-019, AI-ARC-086 · **Follow-up:** AI-ARC-055, AI-ARC-086

- **AI-ARC-054 — Memory Architecture: State, boundaries, and contracts**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible hands-on lab on session state, user memory, episodic stores, summaries, retrieval, retention, and memory governance. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind memory architecture, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-020, AI-ARC-085 · **Follow-up:** AI-ARC-085

- **AI-ARC-053 — Memory Architecture: Recognize coupling and hidden dependencies**  
  **Theme:** architecture · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible workshop on session state, user memory, episodic stores, summaries, retrieval, retention, and memory governance. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind memory architecture, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-021, AI-ARC-087 · **Follow-up:** AI-ARC-087

### Practitioner

- **AI-ARC-086 — Memory Architecture: Design the reference architecture**  
  **Theme:** architecture · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical live coding applying session state, user memory, episodic stores, summaries, retrieval, retention, and memory governance in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic memory architecture workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-052, AI-ARC-074 · **Related:** AI-ARC-019 · **Follow-up:** AI-ARC-019, AI-ARC-089

- **AI-ARC-085 — Memory Architecture: Compare competing patterns and trade-offs**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical hands-on lab applying session state, user memory, episodic stores, summaries, retrieval, retention, and memory governance in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic memory architecture workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-054 · **Related:** AI-ARC-020 · **Follow-up:** AI-ARC-020

- **AI-ARC-087 — Memory Architecture: Evolve the architecture without rewrites**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical architecture clinic applying session state, user memory, episodic stores, summaries, retrieval, retention, and memory governance in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic memory architecture workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-053 · **Related:** AI-ARC-021 · **Follow-up:** AI-ARC-021

### Advanced

- **AI-ARC-019 — Memory Architecture: Architecture clinic under hard constraints**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced architecture clinic treating session state, user memory, episodic stores, summaries, retrieval, retention, and memory governance as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving memory architecture, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-007, AI-ARC-086 · **Related:** AI-ARC-052 · **Follow-up:** AI-ARC-022

- **AI-ARC-020 — Memory Architecture: Distributed systems trade-offs for AI**  
  **Theme:** architecture · **Format:** case study · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced case study treating session state, user memory, episodic stores, summaries, retrieval, retention, and memory governance as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving memory architecture, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-085 · **Related:** AI-ARC-054 · **Follow-up:** —

- **AI-ARC-021 — Memory Architecture: Failure domains, governance, and future evolution**  
  **Theme:** architecture · **Format:** research walkthrough · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced research walkthrough treating session state, user memory, episodic stores, summaries, retrieval, retention, and memory governance as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving memory architecture, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-087 · **Related:** AI-ARC-053 · **Follow-up:** —

### Cross-track pathway

**AI-ARC-052 Memory Architecture: Read the system as boxes and arrows** → **AI-ARC-086 Memory Architecture: Design the reference architecture** → **AI-ARC-019 Memory Architecture: Architecture clinic under hard constraints**

### Voting opportunities

- **Non-negotiable foundation:** AI-ARC-052 — Memory Architecture: Read the system as boxes and arrows. It protects prerequisites for later months.
- **Voting cluster:** AI-ARC-053 — Memory Architecture: Recognize coupling and hidden dependencies; AI-ARC-085 — Memory Architecture: Compare competing patterns and trade-offs; AI-ARC-087 — Memory Architecture: Evolve the architecture without rewrites; AI-ARC-020 — Memory Architecture: Distributed systems trade-offs for AI.
- **Conditional unlock:** AI-ARC-021 — Memory Architecture: Failure domains, governance, and future evolution becomes visible after strong interest/participation in AI-ARC-074 — Event-Driven AI Systems: Design the reference architecture.

## MAY — Govern models

**Monthly coherence.** All three tracks examine **Model Gateways**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-ARC-055 — Model Gateways: Read the system as boxes and arrows**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible hands-on lab on provider abstraction, routing, policy, observability, caching, quotas, and multi-model operations. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind model gateways, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-ARC-052 · **Related:** AI-ARC-022, AI-ARC-089 · **Follow-up:** AI-ARC-089, AI-INF-009

- **AI-ARC-057 — Model Gateways: State, boundaries, and contracts**  
  **Theme:** architecture · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on provider abstraction, routing, policy, observability, caching, quotas, and multi-model operations. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind model gateways, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-023, AI-ARC-088 · **Follow-up:** AI-ARC-088

- **AI-ARC-056 — Model Gateways: Recognize coupling and hidden dependencies**  
  **Theme:** architecture · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible presentation on provider abstraction, routing, policy, observability, caching, quotas, and multi-model operations. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind model gateways, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-024, AI-ARC-090 · **Follow-up:** AI-ARC-090

### Practitioner

- **AI-ARC-089 — Model Gateways: Design the reference architecture**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical hands-on lab applying provider abstraction, routing, policy, observability, caching, quotas, and multi-model operations in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic model gateways workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-055, AI-ARC-086 · **Related:** AI-ARC-022 · **Follow-up:** AI-ARC-022, AI-INF-014

- **AI-ARC-088 — Model Gateways: Compare competing patterns and trade-offs**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical architecture clinic applying provider abstraction, routing, policy, observability, caching, quotas, and multi-model operations in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic model gateways workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-057 · **Related:** AI-ARC-023 · **Follow-up:** AI-ARC-023

- **AI-ARC-090 — Model Gateways: Evolve the architecture without rewrites**  
  **Theme:** architecture · **Format:** live coding · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical live coding applying provider abstraction, routing, policy, observability, caching, quotas, and multi-model operations in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic model gateways workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-056 · **Related:** AI-ARC-024 · **Follow-up:** AI-ARC-024

### Advanced

- **AI-ARC-022 — Model Gateways: Architecture clinic under hard constraints**  
  **Theme:** architecture · **Format:** case study · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced case study treating provider abstraction, routing, policy, observability, caching, quotas, and multi-model operations as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving model gateways, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-019, AI-ARC-089 · **Related:** AI-ARC-055 · **Follow-up:** AI-INF-001

- **AI-ARC-023 — Model Gateways: Distributed systems trade-offs for AI**  
  **Theme:** architecture · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced research walkthrough treating provider abstraction, routing, policy, observability, caching, quotas, and multi-model operations as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving model gateways, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-088 · **Related:** AI-ARC-057 · **Follow-up:** —

- **AI-ARC-024 — Model Gateways: Failure domains, governance, and future evolution**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced architecture clinic treating provider abstraction, routing, policy, observability, caching, quotas, and multi-model operations as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving model gateways, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-090 · **Related:** AI-ARC-056 · **Follow-up:** —

### Cross-track pathway

**AI-ARC-055 Model Gateways: Read the system as boxes and arrows** → **AI-ARC-089 Model Gateways: Design the reference architecture** → **AI-ARC-022 Model Gateways: Architecture clinic under hard constraints**

### Voting opportunities

- **Non-negotiable foundation:** AI-ARC-055 — Model Gateways: Read the system as boxes and arrows. It protects prerequisites for later months.
- **Voting cluster:** AI-ARC-056 — Model Gateways: Recognize coupling and hidden dependencies; AI-ARC-088 — Model Gateways: Compare competing patterns and trade-offs; AI-ARC-090 — Model Gateways: Evolve the architecture without rewrites; AI-ARC-023 — Model Gateways: Distributed systems trade-offs for AI.
- **Conditional unlock:** AI-ARC-024 — Model Gateways: Failure domains, governance, and future evolution becomes visible after strong interest/participation in AI-ARC-086 — Memory Architecture: Design the reference architecture.

## JUNE — Place compute

**Monthly coherence.** All three tracks examine **Inference Architecture**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-INF-009 — Inference Architecture: Where AI workloads actually run**  
  **Theme:** infrastructure · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible workshop on serving topologies, batch versus realtime, accelerators, schedulers, edge/cloud placement, and scale. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind inference architecture, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-ARC-055 · **Related:** AI-INF-001, AI-INF-014 · **Follow-up:** AI-INF-014

- **AI-INF-007 — Inference Architecture: CPU, GPU, memory, and network intuition**  
  **Theme:** infrastructure · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible presentation on serving topologies, batch versus realtime, accelerators, schedulers, edge/cloud placement, and scale. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind inference architecture, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-INF-003, AI-INF-013 · **Follow-up:** AI-INF-013

- **AI-INF-008 — Inference Architecture: Capacity and quota basics**  
  **Theme:** infrastructure · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible hands-on lab on serving topologies, batch versus realtime, accelerators, schedulers, edge/cloud placement, and scale. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind inference architecture, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-INF-002, AI-INF-015 · **Follow-up:** AI-INF-015

### Practitioner

- **AI-INF-014 — Inference Architecture: Deploy an inference workload**  
  **Theme:** infrastructure · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical architecture clinic applying serving topologies, batch versus realtime, accelerators, schedulers, edge/cloud placement, and scale in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic inference architecture workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-089, AI-INF-009 · **Related:** AI-INF-001 · **Follow-up:** AI-INF-001

- **AI-INF-013 — Inference Architecture: Batching, queues, and autoscaling**  
  **Theme:** infrastructure · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical live coding applying serving topologies, batch versus realtime, accelerators, schedulers, edge/cloud placement, and scale in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic inference architecture workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-INF-007 · **Related:** AI-INF-003 · **Follow-up:** AI-INF-003

- **AI-INF-015 — Inference Architecture: Measure utilization and bottlenecks**  
  **Theme:** infrastructure · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical hands-on lab applying serving topologies, batch versus realtime, accelerators, schedulers, edge/cloud placement, and scale in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic inference architecture workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-INF-008 · **Related:** AI-INF-002 · **Follow-up:** AI-INF-002

### Advanced

- **AI-INF-001 — Inference Architecture: Inference platform architecture**  
  **Theme:** infrastructure · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced research walkthrough treating serving topologies, batch versus realtime, accelerators, schedulers, edge/cloud placement, and scale as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving inference architecture, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-022, AI-INF-014 · **Related:** AI-INF-009 · **Follow-up:** —

- **AI-INF-003 — Inference Architecture: Scheduling, isolation, and multi-tenant reliability**  
  **Theme:** infrastructure · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced architecture clinic treating serving topologies, batch versus realtime, accelerators, schedulers, edge/cloud placement, and scale as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving inference architecture, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-INF-013 · **Related:** AI-INF-007 · **Follow-up:** —

- **AI-INF-002 — Inference Architecture: Optimize serving under cost and latency constraints**  
  **Theme:** infrastructure · **Format:** case study · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced case study treating serving topologies, batch versus realtime, accelerators, schedulers, edge/cloud placement, and scale as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving inference architecture, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-INF-015 · **Related:** AI-INF-008 · **Follow-up:** —

### Cross-track pathway

**AI-INF-009 Inference Architecture: Where AI workloads actually run** → **AI-INF-014 Inference Architecture: Deploy an inference workload** → **AI-INF-001 Inference Architecture: Inference platform architecture**

### Voting opportunities

- **Non-negotiable foundation:** AI-INF-009 — Inference Architecture: Where AI workloads actually run. It protects prerequisites for later months.
- **Voting cluster:** AI-INF-008 — Inference Architecture: Capacity and quota basics; AI-INF-013 — Inference Architecture: Batching, queues, and autoscaling; AI-INF-015 — Inference Architecture: Measure utilization and bottlenecks; AI-INF-003 — Inference Architecture: Scheduling, isolation, and multi-tenant reliability.
- **Conditional unlock:** AI-INF-002 — Inference Architecture: Optimize serving under cost and latency constraints becomes visible after strong interest/participation in AI-ARC-089 — Model Gateways: Design the reference architecture.

## 6. Longitudinal pathways

- **Foundation spine:** Oct [F] AI-ARC-037 Context Architecture → Dec [F] AI-ARC-049 Knowledge Graphs for AI Systems → Feb [F] AI-PRT-012 Agent Protocol Architecture → Apr [F] AI-ARC-052 Memory Architecture → Jun [F] AI-INF-009 Inference Architecture
- **Practitioner spine:** Oct [P] AI-ARC-071 Context Architecture → Dec [P] AI-ARC-083 Knowledge Graphs for AI Systems → Feb [P] AI-PRT-021 Agent Protocol Architecture → Apr [P] AI-ARC-086 Memory Architecture → Jun [P] AI-INF-014 Inference Architecture
- **Advanced spine:** Oct [A] AI-ARC-004 Context Architecture → Dec [A] AI-ARC-016 Knowledge Graphs for AI Systems → Feb [A] AI-PRT-003 Agent Protocol Architecture → Apr [A] AI-ARC-019 Memory Architecture → Jun [A] AI-INF-001 Inference Architecture

## 7. Branching paths

```text
AI-ARC-098 Tool & Capability Contracts
├── implementation branch → AI-PRT-019 Agent Protocol Architecture
├── architecture branch   → AI-ARC-008 Event-Driven AI Systems
└── frontier branch       → AI-ARC-021 Memory Architecture
```

Member interest can determine which branch receives a live workshop versus becoming optional reading/lab material. The prerequisite spine remains protected.

## 8. Season-level voting model

- **Editorially protected:** first Foundation topic each month, plus any prerequisite explicitly required by a later Core session.
- **Primary voting surface:** Elective Foundation topics, Practitioner trade-off labs, and Advanced architecture alternatives.
- **Unlockable:** Experimental Advanced sessions and frontier branches; reveal only after participation or interest thresholds are met.
- **Wild-card slot:** reserve at least one spring session for an emerging development that passes editorial relevance and evidence checks.

## 9. Simplified programme graph

```text
[Oct] AI-ARC-071 Context Architecture
      ↓
[Nov] AI-ARC-095 Retrieval Architecture
      ↓
[Jan] AI-ARC-098 Tool & Capability Contracts
      ↓
[Feb] AI-PRT-021 Agent Protocol Architecture
      ↓
[Apr] AI-ARC-086 Memory Architecture
      ↓
[Jun] AI-INF-014 Inference Architecture
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
- **Beginner accessibility:** 3/5
- **Technical depth:** 5/5
- **Hands-on intensity:** 4/5
- **Production relevance:** 5/5
- **Research orientation:** 3/5
