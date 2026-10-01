# P8 — Full-Stack AI Product Engineer

> **Ship the whole product, not just the model call.**

## 1. Programme identity

- **Educational philosophy:** Follow an AI product from problem discovery through backend, retrieval, agents, UX, evaluation, deployment, observability, and secure launch.
- **Target audience:** Full-stack and product engineers who want an end-to-end mental model of AI product delivery.
- **Primary themes:** product discovery, APIs, backend, retrieval, agents, AI UX, evals, deployment, security
- **What makes it different:** The season mirrors a real product lifecycle, making every topic easy to connect to a single evolving reference application.
- **Main strengths:** Most balanced product build; strong demos; great for cross-functional learning; practical.
- **Potential weaknesses:** Breadth limits deep specialization; capstone continuity requires coordination.
- **Expected difficulty profile:** Accessible throughout; advanced sessions explore platform and governance depth around the same product.

**Why it deserves to exist independently:** The season mirrors a real product lifecycle, making every topic easy to connect to a single evolving reference application. That creates a different set of curriculum trade-offs, voting clusters, and capstone outcomes than the other reference seasons.

## 2. Season narrative

**October — Choose the problem:** AI Product Discovery
↓
**November — Create the model boundary:** Model Interaction Layer
↓
**December — Build the service:** AI Backend Engineering
↓
**January — Add knowledge:** Retrieval as a Product Capability
↓
**February — Add action:** Agentic Product Workflows
↓
**March — Design human control:** AI UX & Human Control
↓
**April — Prove value:** Product Evals
↓
**May — Operate safely:** Deploy & Observe AI Features
↓
**June — Launch responsibly:** Secure AI Launch

## 3–5. Month-by-month curriculum, coherence, and cross-track pathways

## OCTOBER — Choose the problem

**Monthly coherence.** All three tracks examine **AI Product Discovery**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-PDT-006 — AI Product Discovery: Find a problem worth adding AI to**  
  **Theme:** AI product engineering · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible workshop on choosing valuable AI problems, capability mapping, user research, risk, success metrics, and non-AI alternatives. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai product discovery, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-PDT-003, AI-PDT-009 · **Follow-up:** AI-ARC-058, AI-PDT-009

- **AI-PDT-004 — AI Product Discovery: Capability, constraint, and user-value mapping**  
  **Theme:** AI product engineering · **Format:** case study · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible case study on choosing valuable AI problems, capability mapping, user research, risk, success metrics, and non-AI alternatives. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai product discovery, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-PDT-002, AI-PDT-007 · **Follow-up:** AI-PDT-007

- **AI-PDT-005 — AI Product Discovery: Define success before picking a model**  
  **Theme:** AI product engineering · **Format:** panel · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible panel on choosing valuable AI problems, capability mapping, user research, risk, success metrics, and non-AI alternatives. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai product discovery, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-PDT-001, AI-PDT-008 · **Follow-up:** AI-PDT-008

### Practitioner

- **AI-PDT-009 — AI Product Discovery: Shape an AI feature from discovery to telemetry**  
  **Theme:** AI product engineering · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical workshop applying choosing valuable AI problems, capability mapping, user research, risk, success metrics, and non-AI alternatives in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai product discovery workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-PDT-006 · **Related:** AI-PDT-003 · **Follow-up:** AI-ARC-092, AI-PDT-003

- **AI-PDT-007 — AI Product Discovery: Design product fallbacks and human escape hatches**  
  **Theme:** AI product engineering · **Format:** case study · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical case study applying choosing valuable AI problems, capability mapping, user research, risk, success metrics, and non-AI alternatives in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai product discovery workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-PDT-004 · **Related:** AI-PDT-002 · **Follow-up:** AI-PDT-002

- **AI-PDT-008 — AI Product Discovery: Run an experiment with measurable value**  
  **Theme:** AI product engineering · **Format:** panel · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical panel applying choosing valuable AI problems, capability mapping, user research, risk, success metrics, and non-AI alternatives in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai product discovery workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-PDT-005 · **Related:** AI-PDT-001 · **Follow-up:** AI-PDT-001

### Advanced

- **AI-PDT-003 — AI Product Discovery: Portfolio and platform decisions for AI products**  
  **Theme:** AI product engineering · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced workshop treating choosing valuable AI problems, capability mapping, user research, risk, success metrics, and non-AI alternatives as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai product discovery, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-PDT-009 · **Related:** AI-PDT-006 · **Follow-up:** AI-ARC-025

- **AI-PDT-002 — AI Product Discovery: Governance, risk tiers, and reusable capabilities**  
  **Theme:** AI product engineering · **Format:** case study · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced case study treating choosing valuable AI problems, capability mapping, user research, risk, success metrics, and non-AI alternatives as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai product discovery, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-PDT-007 · **Related:** AI-PDT-004 · **Follow-up:** —

- **AI-PDT-001 — AI Product Discovery: Build-vs-buy and platform economics**  
  **Theme:** AI product engineering · **Format:** panel · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced panel treating choosing valuable AI problems, capability mapping, user research, risk, success metrics, and non-AI alternatives as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai product discovery, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-PDT-008 · **Related:** AI-PDT-005 · **Follow-up:** —

### Cross-track pathway

**AI-PDT-006 AI Product Discovery: Find a problem worth adding AI to** → **AI-PDT-009 AI Product Discovery: Shape an AI feature from discovery to telemetry** → **AI-PDT-003 AI Product Discovery: Portfolio and platform decisions for AI products**

### Voting opportunities

- **Non-negotiable foundation:** AI-PDT-006 — AI Product Discovery: Find a problem worth adding AI to. It protects prerequisites for later months.
- **Voting cluster:** AI-PDT-005 — AI Product Discovery: Define success before picking a model; AI-PDT-007 — AI Product Discovery: Design product fallbacks and human escape hatches; AI-PDT-008 — AI Product Discovery: Run an experiment with measurable value; AI-PDT-002 — AI Product Discovery: Governance, risk tiers, and reusable capabilities.
- **Conditional unlock:** AI-PDT-001 — AI Product Discovery: Build-vs-buy and platform economics becomes visible after AI-PDT-006 or another October prerequisite.

## NOVEMBER — Create the model boundary

**Monthly coherence.** All three tracks examine **Model Interaction Layer**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-ARC-058 — Model Interaction Layer: Read the system as boxes and arrows**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible hands-on lab on API design around model calls, structured outputs, streaming, retries, provider boundaries, and testability. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind model interaction layer, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-PDT-006 · **Related:** AI-ARC-025, AI-ARC-092 · **Follow-up:** AI-ARC-034, AI-ARC-092

- **AI-ARC-060 — Model Interaction Layer: State, boundaries, and contracts**  
  **Theme:** architecture · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on API design around model calls, structured outputs, streaming, retries, provider boundaries, and testability. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind model interaction layer, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-026, AI-ARC-091 · **Follow-up:** AI-ARC-091

- **AI-ARC-059 — Model Interaction Layer: Recognize coupling and hidden dependencies**  
  **Theme:** architecture · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible presentation on API design around model calls, structured outputs, streaming, retries, provider boundaries, and testability. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind model interaction layer, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-027, AI-ARC-093 · **Follow-up:** AI-ARC-093

### Practitioner

- **AI-ARC-092 — Model Interaction Layer: Design the reference architecture**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical hands-on lab applying API design around model calls, structured outputs, streaming, retries, provider boundaries, and testability in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic model interaction layer workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-058, AI-PDT-009 · **Related:** AI-ARC-025 · **Follow-up:** AI-ARC-025, AI-ARC-068

- **AI-ARC-091 — Model Interaction Layer: Compare competing patterns and trade-offs**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical architecture clinic applying API design around model calls, structured outputs, streaming, retries, provider boundaries, and testability in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic model interaction layer workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-060 · **Related:** AI-ARC-026 · **Follow-up:** AI-ARC-026

- **AI-ARC-093 — Model Interaction Layer: Evolve the architecture without rewrites**  
  **Theme:** architecture · **Format:** live coding · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical live coding applying API design around model calls, structured outputs, streaming, retries, provider boundaries, and testability in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic model interaction layer workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-059 · **Related:** AI-ARC-027 · **Follow-up:** AI-ARC-027

### Advanced

- **AI-ARC-025 — Model Interaction Layer: Architecture clinic under hard constraints**  
  **Theme:** architecture · **Format:** case study · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced case study treating API design around model calls, structured outputs, streaming, retries, provider boundaries, and testability as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving model interaction layer, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-092, AI-PDT-003 · **Related:** AI-ARC-058 · **Follow-up:** AI-ARC-001

- **AI-ARC-026 — Model Interaction Layer: Distributed systems trade-offs for AI**  
  **Theme:** architecture · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced research walkthrough treating API design around model calls, structured outputs, streaming, retries, provider boundaries, and testability as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving model interaction layer, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-091 · **Related:** AI-ARC-060 · **Follow-up:** —

- **AI-ARC-027 — Model Interaction Layer: Failure domains, governance, and future evolution**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced architecture clinic treating API design around model calls, structured outputs, streaming, retries, provider boundaries, and testability as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving model interaction layer, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-093 · **Related:** AI-ARC-059 · **Follow-up:** —

### Cross-track pathway

**AI-ARC-058 Model Interaction Layer: Read the system as boxes and arrows** → **AI-ARC-092 Model Interaction Layer: Design the reference architecture** → **AI-ARC-025 Model Interaction Layer: Architecture clinic under hard constraints**

### Voting opportunities

- **Non-negotiable foundation:** AI-ARC-058 — Model Interaction Layer: Read the system as boxes and arrows. It protects prerequisites for later months.
- **Voting cluster:** AI-ARC-059 — Model Interaction Layer: Recognize coupling and hidden dependencies; AI-ARC-091 — Model Interaction Layer: Compare competing patterns and trade-offs; AI-ARC-093 — Model Interaction Layer: Evolve the architecture without rewrites; AI-ARC-026 — Model Interaction Layer: Distributed systems trade-offs for AI.
- **Conditional unlock:** AI-ARC-027 — Model Interaction Layer: Failure domains, governance, and future evolution becomes visible after strong interest/participation in AI-PDT-009 — AI Product Discovery: Shape an AI feature from discovery to telemetry.

## DECEMBER — Build the service

**Monthly coherence.** All three tracks examine **AI Backend Engineering**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-ARC-034 — AI Backend Engineering: Read the system as boxes and arrows**  
  **Theme:** architecture · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible workshop on async jobs, queues, persistence, tool execution, rate limits, secrets, and service boundaries around AI workloads. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai backend engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-ARC-058 · **Related:** AI-ARC-001, AI-ARC-068 · **Follow-up:** AI-ARC-068, AI-RET-024

- **AI-ARC-036 — AI Backend Engineering: State, boundaries, and contracts**  
  **Theme:** architecture · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible presentation on async jobs, queues, persistence, tool execution, rate limits, secrets, and service boundaries around AI workloads. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai backend engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-002, AI-ARC-067 · **Follow-up:** AI-ARC-067

- **AI-ARC-035 — AI Backend Engineering: Recognize coupling and hidden dependencies**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible hands-on lab on async jobs, queues, persistence, tool execution, rate limits, secrets, and service boundaries around AI workloads. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai backend engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-003, AI-ARC-069 · **Follow-up:** AI-ARC-069

### Practitioner

- **AI-ARC-068 — AI Backend Engineering: Design the reference architecture**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical architecture clinic applying async jobs, queues, persistence, tool execution, rate limits, secrets, and service boundaries around AI workloads in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai backend engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-034, AI-ARC-092 · **Related:** AI-ARC-001 · **Follow-up:** AI-ARC-001, AI-RET-034

- **AI-ARC-067 — AI Backend Engineering: Compare competing patterns and trade-offs**  
  **Theme:** architecture · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical live coding applying async jobs, queues, persistence, tool execution, rate limits, secrets, and service boundaries around AI workloads in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai backend engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-036 · **Related:** AI-ARC-002 · **Follow-up:** AI-ARC-002

- **AI-ARC-069 — AI Backend Engineering: Evolve the architecture without rewrites**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical hands-on lab applying async jobs, queues, persistence, tool execution, rate limits, secrets, and service boundaries around AI workloads in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai backend engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-035 · **Related:** AI-ARC-003 · **Follow-up:** AI-ARC-003

### Advanced

- **AI-ARC-001 — AI Backend Engineering: Architecture clinic under hard constraints**  
  **Theme:** architecture · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced research walkthrough treating async jobs, queues, persistence, tool execution, rate limits, secrets, and service boundaries around AI workloads as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai backend engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-025, AI-ARC-068 · **Related:** AI-ARC-034 · **Follow-up:** AI-RET-012

- **AI-ARC-002 — AI Backend Engineering: Distributed systems trade-offs for AI**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced architecture clinic treating async jobs, queues, persistence, tool execution, rate limits, secrets, and service boundaries around AI workloads as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai backend engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-067 · **Related:** AI-ARC-036 · **Follow-up:** —

- **AI-ARC-003 — AI Backend Engineering: Failure domains, governance, and future evolution**  
  **Theme:** architecture · **Format:** case study · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced case study treating async jobs, queues, persistence, tool execution, rate limits, secrets, and service boundaries around AI workloads as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai backend engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-069 · **Related:** AI-ARC-035 · **Follow-up:** —

### Cross-track pathway

**AI-ARC-034 AI Backend Engineering: Read the system as boxes and arrows** → **AI-ARC-068 AI Backend Engineering: Design the reference architecture** → **AI-ARC-001 AI Backend Engineering: Architecture clinic under hard constraints**

### Voting opportunities

- **Non-negotiable foundation:** AI-ARC-034 — AI Backend Engineering: Read the system as boxes and arrows. It protects prerequisites for later months.
- **Voting cluster:** AI-ARC-035 — AI Backend Engineering: Recognize coupling and hidden dependencies; AI-ARC-067 — AI Backend Engineering: Compare competing patterns and trade-offs; AI-ARC-069 — AI Backend Engineering: Evolve the architecture without rewrites; AI-ARC-002 — AI Backend Engineering: Distributed systems trade-offs for AI.
- **Conditional unlock:** AI-ARC-003 — AI Backend Engineering: Failure domains, governance, and future evolution becomes visible after strong interest/participation in AI-ARC-092 — Model Interaction Layer: Design the reference architecture.

## JANUARY — Add knowledge

**Monthly coherence.** All three tracks examine **Retrieval as a Product Capability**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-RET-024 — Retrieval as a Product Capability: Why retrieval changes the answer**  
  **Theme:** retrieval / RAG · **Format:** presentation · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible presentation on ingestion, search UX, permissions, freshness, feedback, and operational ownership of retrieval-backed features. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind retrieval as a product capability, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-ARC-034 · **Related:** AI-RET-012, AI-RET-034 · **Follow-up:** AI-AGT-040, AI-RET-034

- **AI-RET-022 — Retrieval as a Product Capability: Chunks, embeddings, and similarity by hand**  
  **Theme:** retrieval / RAG · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible hands-on lab on ingestion, search UX, permissions, freshness, feedback, and operational ownership of retrieval-backed features. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind retrieval as a product capability, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RET-011, AI-RET-036 · **Follow-up:** AI-RET-036

- **AI-RET-023 — Retrieval as a Product Capability: Grounding, citations, and obvious failure modes**  
  **Theme:** retrieval / RAG · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible workshop on ingestion, search UX, permissions, freshness, feedback, and operational ownership of retrieval-backed features. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind retrieval as a product capability, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RET-010, AI-RET-035 · **Follow-up:** AI-RET-035

### Practitioner

- **AI-RET-034 — Retrieval as a Product Capability: Build a retrieval pipeline end to end**  
  **Theme:** retrieval / RAG · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical live coding applying ingestion, search UX, permissions, freshness, feedback, and operational ownership of retrieval-backed features in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic retrieval as a product capability workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-068, AI-RET-024 · **Related:** AI-RET-012 · **Follow-up:** AI-AGT-067, AI-RET-012

- **AI-RET-036 — Retrieval as a Product Capability: Hybrid search, reranking, and query rewriting**  
  **Theme:** retrieval / RAG · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical hands-on lab applying ingestion, search UX, permissions, freshness, feedback, and operational ownership of retrieval-backed features in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic retrieval as a product capability workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RET-022 · **Related:** AI-RET-011 · **Follow-up:** AI-RET-011

- **AI-RET-035 — Retrieval as a Product Capability: Evaluate retrieval before generation**  
  **Theme:** retrieval / RAG · **Format:** architecture clinic · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical architecture clinic applying ingestion, search UX, permissions, freshness, feedback, and operational ownership of retrieval-backed features in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic retrieval as a product capability workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RET-023 · **Related:** AI-RET-010 · **Follow-up:** AI-RET-010

### Advanced

- **AI-RET-012 — Retrieval as a Product Capability: Retrieval architecture clinic**  
  **Theme:** retrieval / RAG · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced architecture clinic treating ingestion, search UX, permissions, freshness, feedback, and operational ownership of retrieval-backed features as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving retrieval as a product capability, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-001, AI-RET-034 · **Related:** AI-RET-024 · **Follow-up:** AI-AGT-013

- **AI-RET-011 — Retrieval as a Product Capability: Freshness, permissions, and multi-index design**  
  **Theme:** retrieval / RAG · **Format:** case study · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced case study treating ingestion, search UX, permissions, freshness, feedback, and operational ownership of retrieval-backed features as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving retrieval as a product capability, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RET-036 · **Related:** AI-RET-022 · **Follow-up:** —

- **AI-RET-010 — Retrieval as a Product Capability: Agentic retrieval and adaptive search**  
  **Theme:** retrieval / RAG · **Format:** research walkthrough · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced research walkthrough treating ingestion, search UX, permissions, freshness, feedback, and operational ownership of retrieval-backed features as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving retrieval as a product capability, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RET-035 · **Related:** AI-RET-023 · **Follow-up:** —

### Cross-track pathway

**AI-RET-024 Retrieval as a Product Capability: Why retrieval changes the answer** → **AI-RET-034 Retrieval as a Product Capability: Build a retrieval pipeline end to end** → **AI-RET-012 Retrieval as a Product Capability: Retrieval architecture clinic**

### Voting opportunities

- **Non-negotiable foundation:** AI-RET-024 — Retrieval as a Product Capability: Why retrieval changes the answer. It protects prerequisites for later months.
- **Voting cluster:** AI-RET-023 — Retrieval as a Product Capability: Grounding, citations, and obvious failure modes; AI-RET-036 — Retrieval as a Product Capability: Hybrid search, reranking, and query rewriting; AI-RET-035 — Retrieval as a Product Capability: Evaluate retrieval before generation; AI-RET-011 — Retrieval as a Product Capability: Freshness, permissions, and multi-index design.
- **Conditional unlock:** AI-RET-010 — Retrieval as a Product Capability: Agentic retrieval and adaptive search becomes visible after strong interest/participation in AI-ARC-068 — AI Backend Engineering: Design the reference architecture.

## FEBRUARY — Add action

**Monthly coherence.** All three tracks examine **Agentic Product Workflows**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-AGT-040 — Agentic Product Workflows: Agent, workflow, or chatbot?**  
  **Theme:** agents · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible hands-on lab on embedding tool-using agents into products with scoped autonomy, approvals, state, and recovery. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agentic product workflows, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-RET-024 · **Related:** AI-AGT-013, AI-AGT-067 · **Follow-up:** AI-AGT-067, AI-AUX-004

- **AI-AGT-041 — Agentic Product Workflows: Tools, state, loops, and stop conditions**  
  **Theme:** agents · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on embedding tool-using agents into products with scoped autonomy, approvals, state, and recovery. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agentic product workflows, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-014, AI-AGT-069 · **Follow-up:** AI-AGT-069

- **AI-AGT-042 — Agentic Product Workflows: When autonomy makes things worse**  
  **Theme:** agents · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible presentation on embedding tool-using agents into products with scoped autonomy, approvals, state, and recovery. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agentic product workflows, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-015, AI-AGT-068 · **Follow-up:** AI-AGT-068

### Practitioner

- **AI-AGT-067 — Agentic Product Workflows: Build an agent with tools**  
  **Theme:** agents · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical hands-on lab applying embedding tool-using agents into products with scoped autonomy, approvals, state, and recovery in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agentic product workflows workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-040, AI-RET-034 · **Related:** AI-AGT-013 · **Follow-up:** AI-AGT-013, AI-AUX-008

- **AI-AGT-069 — Agentic Product Workflows: State, memory, and recovery paths**  
  **Theme:** agents · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical architecture clinic applying embedding tool-using agents into products with scoped autonomy, approvals, state, and recovery in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agentic product workflows workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-041 · **Related:** AI-AGT-014 · **Follow-up:** AI-AGT-014

- **AI-AGT-068 — Agentic Product Workflows: Human approval and controllable autonomy**  
  **Theme:** agents · **Format:** live coding · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical live coding applying embedding tool-using agents into products with scoped autonomy, approvals, state, and recovery in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agentic product workflows workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-042 · **Related:** AI-AGT-015 · **Follow-up:** AI-AGT-015

### Advanced

- **AI-AGT-013 — Agentic Product Workflows: Agent orchestration architecture clinic**  
  **Theme:** agents · **Format:** case study · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced case study treating embedding tool-using agents into products with scoped autonomy, approvals, state, and recovery as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agentic product workflows, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-067, AI-RET-012 · **Related:** AI-AGT-040 · **Follow-up:** AI-AUX-001

- **AI-AGT-014 — Agentic Product Workflows: Long-horizon reliability and failure recovery**  
  **Theme:** agents · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced research walkthrough treating embedding tool-using agents into products with scoped autonomy, approvals, state, and recovery as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agentic product workflows, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-069 · **Related:** AI-AGT-041 · **Follow-up:** —

- **AI-AGT-015 — Agentic Product Workflows: Multi-agent coordination and emergent failure**  
  **Theme:** agents · **Format:** architecture clinic · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced architecture clinic treating embedding tool-using agents into products with scoped autonomy, approvals, state, and recovery as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agentic product workflows, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-068 · **Related:** AI-AGT-042 · **Follow-up:** —

### Cross-track pathway

**AI-AGT-040 Agentic Product Workflows: Agent, workflow, or chatbot?** → **AI-AGT-067 Agentic Product Workflows: Build an agent with tools** → **AI-AGT-013 Agentic Product Workflows: Agent orchestration architecture clinic**

### Voting opportunities

- **Non-negotiable foundation:** AI-AGT-040 — Agentic Product Workflows: Agent, workflow, or chatbot?. It protects prerequisites for later months.
- **Voting cluster:** AI-AGT-042 — Agentic Product Workflows: When autonomy makes things worse; AI-AGT-069 — Agentic Product Workflows: State, memory, and recovery paths; AI-AGT-068 — Agentic Product Workflows: Human approval and controllable autonomy; AI-AGT-014 — Agentic Product Workflows: Long-horizon reliability and failure recovery.
- **Conditional unlock:** AI-AGT-015 — Agentic Product Workflows: Multi-agent coordination and emergent failure becomes visible after strong interest/participation in AI-RET-034 — Retrieval as a Product Capability: Build a retrieval pipeline end to end.

## MARCH — Design human control

**Monthly coherence.** All three tracks examine **AI UX & Human Control**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-AUX-004 — AI UX & Human Control: AI UX patterns users can understand**  
  **Theme:** AI UX · **Format:** case study · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible case study on streaming, edits, confidence, sources, approval, undo, feedback, and designing controllable AI interactions. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai ux & human control, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-AGT-040 · **Related:** AI-AUX-001, AI-AUX-008 · **Follow-up:** AI-AUX-008, AI-EVL-024

- **AI-AUX-005 — AI UX & Human Control: Communicate uncertainty and sources**  
  **Theme:** AI UX · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on streaming, edits, confidence, sources, approval, undo, feedback, and designing controllable AI interactions. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai ux & human control, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AUX-003, AI-AUX-007 · **Follow-up:** AI-AUX-007

- **AI-AUX-006 — AI UX & Human Control: When a chat box is the wrong interface**  
  **Theme:** AI UX · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible hands-on lab on streaming, edits, confidence, sources, approval, undo, feedback, and designing controllable AI interactions. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai ux & human control, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AUX-002, AI-AUX-009 · **Follow-up:** AI-AUX-009

### Practitioner

- **AI-AUX-008 — AI UX & Human Control: Design streaming, edits, and human control**  
  **Theme:** AI UX · **Format:** case study · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical case study applying streaming, edits, confidence, sources, approval, undo, feedback, and designing controllable AI interactions in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai ux & human control workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-067, AI-AUX-004 · **Related:** AI-AUX-001 · **Follow-up:** AI-AUX-001, AI-EVL-034

- **AI-AUX-007 — AI UX & Human Control: Build feedback and recovery into the UI**  
  **Theme:** AI UX · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical workshop applying streaming, edits, confidence, sources, approval, undo, feedback, and designing controllable AI interactions in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai ux & human control workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AUX-005 · **Related:** AI-AUX-003 · **Follow-up:** AI-AUX-003

- **AI-AUX-009 — AI UX & Human Control: Prototype an AI interaction and usability-test it**  
  **Theme:** AI UX · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical hands-on lab applying streaming, edits, confidence, sources, approval, undo, feedback, and designing controllable AI interactions in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai ux & human control workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AUX-006 · **Related:** AI-AUX-002 · **Follow-up:** AI-AUX-002

### Advanced

- **AI-AUX-001 — AI UX & Human Control: AI interaction architecture**  
  **Theme:** AI UX · **Format:** case study · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced case study treating streaming, edits, confidence, sources, approval, undo, feedback, and designing controllable AI interactions as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai ux & human control, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-013, AI-AUX-008 · **Related:** AI-AUX-004 · **Follow-up:** AI-EVL-010

- **AI-AUX-003 — AI UX & Human Control: Trust calibration, controllability, and policy UX**  
  **Theme:** AI UX · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced workshop treating streaming, edits, confidence, sources, approval, undo, feedback, and designing controllable AI interactions as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai ux & human control, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AUX-007 · **Related:** AI-AUX-005 · **Follow-up:** —

- **AI-AUX-002 — AI UX & Human Control: Adaptive interfaces for agentic products**  
  **Theme:** AI UX · **Format:** hands-on lab · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced hands-on lab treating streaming, edits, confidence, sources, approval, undo, feedback, and designing controllable AI interactions as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai ux & human control, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AUX-009 · **Related:** AI-AUX-006 · **Follow-up:** —

### Cross-track pathway

**AI-AUX-004 AI UX & Human Control: AI UX patterns users can understand** → **AI-AUX-008 AI UX & Human Control: Design streaming, edits, and human control** → **AI-AUX-001 AI UX & Human Control: AI interaction architecture**

### Voting opportunities

- **Non-negotiable foundation:** AI-AUX-004 — AI UX & Human Control: AI UX patterns users can understand. It protects prerequisites for later months.
- **Voting cluster:** AI-AUX-006 — AI UX & Human Control: When a chat box is the wrong interface; AI-AUX-007 — AI UX & Human Control: Build feedback and recovery into the UI; AI-AUX-009 — AI UX & Human Control: Prototype an AI interaction and usability-test it; AI-AUX-003 — AI UX & Human Control: Trust calibration, controllability, and policy UX.
- **Conditional unlock:** AI-AUX-002 — AI UX & Human Control: Adaptive interfaces for agentic products becomes visible after strong interest/participation in AI-AGT-067 — Agentic Product Workflows: Build an agent with tools.

## APRIL — Prove value

**Monthly coherence.** All three tracks examine **Product Evals**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-EVL-024 — Product Evals: What does 'good' mean for AI?**  
  **Theme:** evaluation · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible workshop on connecting task success, user outcomes, quality metrics, online signals, and regression suites. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind product evals, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-AUX-004 · **Related:** AI-EVL-010, AI-EVL-034 · **Follow-up:** AI-EVL-034, AI-OPS-031

- **AI-EVL-023 — Product Evals: Turn examples into test cases**  
  **Theme:** evaluation · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible hands-on lab on connecting task success, user outcomes, quality metrics, online signals, and regression suites. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind product evals, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EVL-012, AI-EVL-036 · **Follow-up:** AI-EVL-036

- **AI-EVL-022 — Product Evals: Spot flaky, subjective, and misleading metrics**  
  **Theme:** evaluation · **Format:** challenge · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible challenge on connecting task success, user outcomes, quality metrics, online signals, and regression suites. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind product evals, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EVL-011, AI-EVL-035 · **Follow-up:** AI-EVL-035

### Practitioner

- **AI-EVL-034 — Product Evals: Build an eval dataset and scorecard**  
  **Theme:** evaluation · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical workshop applying connecting task success, user outcomes, quality metrics, online signals, and regression suites in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic product evals workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AUX-008, AI-EVL-024 · **Related:** AI-EVL-010 · **Follow-up:** AI-EVL-010, AI-OPS-054

- **AI-EVL-036 — Product Evals: Trace grading, tool-use checks, and regressions**  
  **Theme:** evaluation · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical hands-on lab applying connecting task success, user outcomes, quality metrics, online signals, and regression suites in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic product evals workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EVL-023 · **Related:** AI-EVL-012 · **Follow-up:** AI-EVL-012

- **AI-EVL-035 — Product Evals: Compare prompts, models, and workflows safely**  
  **Theme:** evaluation · **Format:** challenge · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical challenge applying connecting task success, user outcomes, quality metrics, online signals, and regression suites in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic product evals workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EVL-022 · **Related:** AI-EVL-011 · **Follow-up:** AI-EVL-011

### Advanced

- **AI-EVL-010 — Product Evals: Eval-driven system design**  
  **Theme:** evaluation · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced workshop treating connecting task success, user outcomes, quality metrics, online signals, and regression suites as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving product evals, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AUX-001, AI-EVL-034 · **Related:** AI-EVL-024 · **Follow-up:** AI-OPS-012

- **AI-EVL-012 — Product Evals: Macro-evals for multi-step agents**  
  **Theme:** evaluation · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced hands-on lab treating connecting task success, user outcomes, quality metrics, online signals, and regression suites as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving product evals, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EVL-036 · **Related:** AI-EVL-023 · **Follow-up:** —

- **AI-EVL-011 — Product Evals: Judge reliability, leakage, and benchmark gaming**  
  **Theme:** evaluation · **Format:** challenge · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced challenge treating connecting task success, user outcomes, quality metrics, online signals, and regression suites as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving product evals, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EVL-035 · **Related:** AI-EVL-022 · **Follow-up:** —

### Cross-track pathway

**AI-EVL-024 Product Evals: What does 'good' mean for AI?** → **AI-EVL-034 Product Evals: Build an eval dataset and scorecard** → **AI-EVL-010 Product Evals: Eval-driven system design**

### Voting opportunities

- **Non-negotiable foundation:** AI-EVL-024 — Product Evals: What does 'good' mean for AI?. It protects prerequisites for later months.
- **Voting cluster:** AI-EVL-022 — Product Evals: Spot flaky, subjective, and misleading metrics; AI-EVL-036 — Product Evals: Trace grading, tool-use checks, and regressions; AI-EVL-035 — Product Evals: Compare prompts, models, and workflows safely; AI-EVL-012 — Product Evals: Macro-evals for multi-step agents.
- **Conditional unlock:** AI-EVL-011 — Product Evals: Judge reliability, leakage, and benchmark gaming becomes visible after strong interest/participation in AI-AUX-008 — AI UX & Human Control: Design streaming, edits, and human control.

## MAY — Operate safely

**Monthly coherence.** All three tracks examine **Deploy & Observe AI Features**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-OPS-031 — Deploy & Observe AI Features: From demo to service: what changes?**  
  **Theme:** production engineering · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible hands-on lab on release strategies, telemetry, traces, cost controls, quality monitoring, and rollback for AI features. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind deploy & observe ai features, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-EVL-024 · **Related:** AI-OPS-012, AI-OPS-054 · **Follow-up:** AI-OPS-054, AI-SEC-033

- **AI-OPS-032 — Deploy & Observe AI Features: Latency, cost, and reliability basics**  
  **Theme:** production engineering · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on release strategies, telemetry, traces, cost controls, quality monitoring, and rollback for AI features. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind deploy & observe ai features, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-OPS-010, AI-OPS-052 · **Follow-up:** AI-OPS-052

- **AI-OPS-033 — Deploy & Observe AI Features: Simple operational failure modes**  
  **Theme:** production engineering · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible presentation on release strategies, telemetry, traces, cost controls, quality monitoring, and rollback for AI features. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind deploy & observe ai features, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-OPS-011, AI-OPS-053 · **Follow-up:** AI-OPS-053

### Practitioner

- **AI-OPS-054 — Deploy & Observe AI Features: Instrument a production AI path**  
  **Theme:** production engineering · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical hands-on lab applying release strategies, telemetry, traces, cost controls, quality monitoring, and rollback for AI features in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic deploy & observe ai features workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EVL-034, AI-OPS-031 · **Related:** AI-OPS-012 · **Follow-up:** AI-OPS-012, AI-SEC-050

- **AI-OPS-052 — Deploy & Observe AI Features: Caching, fallbacks, and model routing**  
  **Theme:** production engineering · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical architecture clinic applying release strategies, telemetry, traces, cost controls, quality monitoring, and rollback for AI features in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic deploy & observe ai features workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-032 · **Related:** AI-OPS-010 · **Follow-up:** AI-OPS-010

- **AI-OPS-053 — Deploy & Observe AI Features: Design for retries, quotas, and degraded modes**  
  **Theme:** production engineering · **Format:** live coding · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical live coding applying release strategies, telemetry, traces, cost controls, quality monitoring, and rollback for AI features in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic deploy & observe ai features workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-033 · **Related:** AI-OPS-011 · **Follow-up:** AI-OPS-011

### Advanced

- **AI-OPS-012 — Deploy & Observe AI Features: SLOs and reliability architecture**  
  **Theme:** production engineering · **Format:** case study · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced case study treating release strategies, telemetry, traces, cost controls, quality monitoring, and rollback for AI features as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving deploy & observe ai features, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EVL-010, AI-OPS-054 · **Related:** AI-OPS-031 · **Follow-up:** AI-SEC-015

- **AI-OPS-010 — Deploy & Observe AI Features: Cost-quality-latency optimization**  
  **Theme:** production engineering · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced research walkthrough treating release strategies, telemetry, traces, cost controls, quality monitoring, and rollback for AI features as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving deploy & observe ai features, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-052 · **Related:** AI-OPS-032 · **Follow-up:** —

- **AI-OPS-011 — Deploy & Observe AI Features: Incident response for nondeterministic systems**  
  **Theme:** production engineering · **Format:** architecture clinic · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced architecture clinic treating release strategies, telemetry, traces, cost controls, quality monitoring, and rollback for AI features as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving deploy & observe ai features, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-053 · **Related:** AI-OPS-033 · **Follow-up:** —

### Cross-track pathway

**AI-OPS-031 Deploy & Observe AI Features: From demo to service: what changes?** → **AI-OPS-054 Deploy & Observe AI Features: Instrument a production AI path** → **AI-OPS-012 Deploy & Observe AI Features: SLOs and reliability architecture**

### Voting opportunities

- **Non-negotiable foundation:** AI-OPS-031 — Deploy & Observe AI Features: From demo to service: what changes?. It protects prerequisites for later months.
- **Voting cluster:** AI-OPS-033 — Deploy & Observe AI Features: Simple operational failure modes; AI-OPS-052 — Deploy & Observe AI Features: Caching, fallbacks, and model routing; AI-OPS-053 — Deploy & Observe AI Features: Design for retries, quotas, and degraded modes; AI-OPS-010 — Deploy & Observe AI Features: Cost-quality-latency optimization.
- **Conditional unlock:** AI-OPS-011 — Deploy & Observe AI Features: Incident response for nondeterministic systems becomes visible after strong interest/participation in AI-EVL-034 — Product Evals: Build an eval dataset and scorecard.

## JUNE — Launch responsibly

**Monthly coherence.** All three tracks examine **Secure AI Launch**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-SEC-033 — Secure AI Launch: Threat models for AI features**  
  **Theme:** security · **Format:** architecture clinic · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible architecture clinic on launch checklists, permissions, data handling, red teaming, monitoring, incident plans, and governance. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind secure ai launch, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-OPS-031 · **Related:** AI-SEC-015, AI-SEC-050 · **Follow-up:** AI-SEC-050

- **AI-SEC-032 — Secure AI Launch: Prompt injection in plain language**  
  **Theme:** security · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible presentation on launch checklists, permissions, data handling, red teaming, monitoring, incident plans, and governance. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind secure ai launch, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-SEC-014, AI-SEC-051 · **Follow-up:** AI-SEC-051

- **AI-SEC-031 — Secure AI Launch: Permissions, data boundaries, and safe defaults**  
  **Theme:** security · **Format:** red-team session · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible red-team session on launch checklists, permissions, data handling, red teaming, monitoring, incident plans, and governance. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind secure ai launch, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-SEC-013, AI-SEC-049 · **Follow-up:** AI-SEC-049

### Practitioner

- **AI-SEC-050 — Secure AI Launch: Red-team an AI workflow**  
  **Theme:** security · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical architecture clinic applying launch checklists, permissions, data handling, red teaming, monitoring, incident plans, and governance in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic secure ai launch workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-054, AI-SEC-033 · **Related:** AI-SEC-015 · **Follow-up:** AI-SEC-015

- **AI-SEC-051 — Secure AI Launch: Tool permissions, sandboxing, and approval gates**  
  **Theme:** security · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical presentation applying launch checklists, permissions, data handling, red teaming, monitoring, incident plans, and governance in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic secure ai launch workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-SEC-032 · **Related:** AI-SEC-014 · **Follow-up:** AI-SEC-014

- **AI-SEC-049 — Secure AI Launch: Design defenses for indirect prompt injection**  
  **Theme:** security · **Format:** red-team session · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical red-team session applying launch checklists, permissions, data handling, red teaming, monitoring, incident plans, and governance in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic secure ai launch workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-SEC-031 · **Related:** AI-SEC-013 · **Follow-up:** AI-SEC-013

### Advanced

- **AI-SEC-015 — Secure AI Launch: Security architecture for autonomous agents**  
  **Theme:** security · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced architecture clinic treating launch checklists, permissions, data handling, red teaming, monitoring, incident plans, and governance as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving secure ai launch, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-012, AI-SEC-050 · **Related:** AI-SEC-033 · **Follow-up:** —

- **AI-SEC-014 — Secure AI Launch: Containment, blast radius, and credential boundaries**  
  **Theme:** security · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced presentation treating launch checklists, permissions, data handling, red teaming, monitoring, incident plans, and governance as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving secure ai launch, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-SEC-051 · **Related:** AI-SEC-032 · **Follow-up:** —

- **AI-SEC-013 — Secure AI Launch: Adversarial evaluation and abuse-case design**  
  **Theme:** security · **Format:** red-team session · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced red-team session treating launch checklists, permissions, data handling, red teaming, monitoring, incident plans, and governance as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving secure ai launch, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-SEC-049 · **Related:** AI-SEC-031 · **Follow-up:** —

### Cross-track pathway

**AI-SEC-033 Secure AI Launch: Threat models for AI features** → **AI-SEC-050 Secure AI Launch: Red-team an AI workflow** → **AI-SEC-015 Secure AI Launch: Security architecture for autonomous agents**

### Voting opportunities

- **Non-negotiable foundation:** AI-SEC-033 — Secure AI Launch: Threat models for AI features. It protects prerequisites for later months.
- **Voting cluster:** AI-SEC-031 — Secure AI Launch: Permissions, data boundaries, and safe defaults; AI-SEC-051 — Secure AI Launch: Tool permissions, sandboxing, and approval gates; AI-SEC-049 — Secure AI Launch: Design defenses for indirect prompt injection; AI-SEC-014 — Secure AI Launch: Containment, blast radius, and credential boundaries.
- **Conditional unlock:** AI-SEC-013 — Secure AI Launch: Adversarial evaluation and abuse-case design becomes visible after strong interest/participation in AI-OPS-054 — Deploy & Observe AI Features: Instrument a production AI path.

## 6. Longitudinal pathways

- **Foundation spine:** Oct [F] AI-PDT-006 AI Product Discovery → Dec [F] AI-ARC-034 AI Backend Engineering → Feb [F] AI-AGT-040 Agentic Product Workflows → Apr [F] AI-EVL-024 Product Evals → Jun [F] AI-SEC-033 Secure AI Launch
- **Practitioner spine:** Oct [P] AI-PDT-009 AI Product Discovery → Dec [P] AI-ARC-068 AI Backend Engineering → Feb [P] AI-AGT-067 Agentic Product Workflows → Apr [P] AI-EVL-034 Product Evals → Jun [P] AI-SEC-050 Secure AI Launch
- **Advanced spine:** Oct [A] AI-PDT-003 AI Product Discovery → Dec [A] AI-ARC-001 AI Backend Engineering → Feb [A] AI-AGT-013 Agentic Product Workflows → Apr [A] AI-EVL-010 Product Evals → Jun [A] AI-SEC-015 Secure AI Launch

## 7. Branching paths

```text
AI-RET-034 Retrieval as a Product Capability
├── implementation branch → AI-AGT-069 Agentic Product Workflows
├── architecture branch   → AI-AUX-003 AI UX & Human Control
└── frontier branch       → AI-EVL-011 Product Evals
```

Member interest can determine which branch receives a live workshop versus becoming optional reading/lab material. The prerequisite spine remains protected.

## 8. Season-level voting model

- **Editorially protected:** first Foundation topic each month, plus any prerequisite explicitly required by a later Core session.
- **Primary voting surface:** Elective Foundation topics, Practitioner trade-off labs, and Advanced architecture alternatives.
- **Unlockable:** Experimental Advanced sessions and frontier branches; reveal only after participation or interest thresholds are met.
- **Wild-card slot:** reserve at least one spring session for an emerging development that passes editorial relevance and evidence checks.

## 9. Simplified programme graph

```text
[Oct] AI-PDT-009 AI Product Discovery
      ↓
[Nov] AI-ARC-092 Model Interaction Layer
      ↓
[Jan] AI-RET-034 Retrieval as a Product Capability
      ↓
[Feb] AI-AGT-067 Agentic Product Workflows
      ↓
[Apr] AI-EVL-034 Product Evals
      ↓
[Jun] AI-SEC-050 Secure AI Launch
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
- **Beginner accessibility:** 5/5
- **Technical depth:** 4/5
- **Hands-on intensity:** 5/5
- **Production relevance:** 5/5
- **Research orientation:** 3/5
