# P4 — Production AI Engineering

> **Make AI boring enough to trust in production.**

## 1. Programme identity

- **Educational philosophy:** Start with measurement, then instrument, optimize, route, harden retrieval and agents, secure the platform, scale inference, and practice incident response.
- **Target audience:** Engineers, tech leads, SREs, platform engineers, and architects responsible for AI systems after the demo.
- **Primary themes:** evals, observability, cost, latency, routing, reliability, security, serving, incidents
- **What makes it different:** The season is organized around operational failure modes and production decisions rather than capabilities.
- **Main strengths:** Highest production relevance; strong SRE mindset; useful for enterprise teams; vendor-neutral.
- **Potential weaknesses:** Can feel infrastructure-heavy; less playful for beginners; fewer pure research sessions.
- **Expected difficulty profile:** Practitioner-to-advanced overall; Foundation track keeps operational concepts accessible.

**Why it deserves to exist independently:** The season is organized around operational failure modes and production decisions rather than capabilities. That creates a different set of curriculum trade-offs, voting clusters, and capstone outcomes than the other reference seasons.

## 2. Season narrative

**October — Define quality:** Evaluation-Driven AI Engineering
↓
**November — See the system:** AI Observability
↓
**December — Price the system:** Latency & Cost Engineering
↓
**January — Route intelligently:** Model Routing & Fallbacks
↓
**February — Harden retrieval:** Reliable RAG in Production
↓
**March — Harden agents:** Reliable Agents in Production
↓
**April — Secure the platform:** Production AI Security
↓
**May — Scale serving:** Inference Platforms
↓
**June — Survive incidents:** AI Incident Response

## 3–5. Month-by-month curriculum, coherence, and cross-track pathways

## OCTOBER — Define quality

**Monthly coherence.** All three tracks examine **Evaluation-Driven AI Engineering**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-EVL-021 — Evaluation-Driven AI Engineering: What does 'good' mean for AI?**  
  **Theme:** evaluation · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible challenge on datasets, graders, traces, regression checks, and quality gates for nondeterministic systems. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind evaluation-driven ai engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-AGT-031 · **Related:** AI-EVL-007, AI-EVL-031 · **Follow-up:** AI-EVL-031, AI-OPS-025, AI-SEC-024

- **AI-EVL-020 — Evaluation-Driven AI Engineering: Turn examples into test cases**  
  **Theme:** evaluation · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on datasets, graders, traces, regression checks, and quality gates for nondeterministic systems. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind evaluation-driven ai engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EVL-009, AI-EVL-033 · **Follow-up:** AI-EVL-033

- **AI-EVL-019 — Evaluation-Driven AI Engineering: Spot flaky, subjective, and misleading metrics**  
  **Theme:** evaluation · **Format:** challenge · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible hands-on lab on datasets, graders, traces, regression checks, and quality gates for nondeterministic systems. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind evaluation-driven ai engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EVL-008, AI-EVL-032 · **Follow-up:** AI-EVL-032

### Practitioner

- **AI-EVL-031 — Evaluation-Driven AI Engineering: Build an eval dataset and scorecard**  
  **Theme:** evaluation · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical challenge applying datasets, graders, traces, regression checks, and quality gates for nondeterministic systems in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic evaluation-driven ai engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-058, AI-EVL-021 · **Related:** AI-EVL-007 · **Follow-up:** AI-EVL-007, AI-OPS-048, AI-SEC-041

- **AI-EVL-033 — Evaluation-Driven AI Engineering: Trace grading, tool-use checks, and regressions**  
  **Theme:** evaluation · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical workshop applying datasets, graders, traces, regression checks, and quality gates for nondeterministic systems in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic evaluation-driven ai engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EVL-020 · **Related:** AI-EVL-009 · **Follow-up:** AI-EVL-009

- **AI-EVL-032 — Evaluation-Driven AI Engineering: Compare prompts, models, and workflows safely**  
  **Theme:** evaluation · **Format:** challenge · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical hands-on lab applying datasets, graders, traces, regression checks, and quality gates for nondeterministic systems in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic evaluation-driven ai engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EVL-019 · **Related:** AI-EVL-008 · **Follow-up:** AI-EVL-008

### Advanced

- **AI-EVL-007 — Evaluation-Driven AI Engineering: Eval-driven system design**  
  **Theme:** evaluation · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced challenge treating datasets, graders, traces, regression checks, and quality gates for nondeterministic systems as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving evaluation-driven ai engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-004, AI-EVL-031 · **Related:** AI-EVL-021 · **Follow-up:** AI-OPS-006, AI-SEC-006

- **AI-EVL-009 — Evaluation-Driven AI Engineering: Macro-evals for multi-step agents**  
  **Theme:** evaluation · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced workshop treating datasets, graders, traces, regression checks, and quality gates for nondeterministic systems as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving evaluation-driven ai engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EVL-033 · **Related:** AI-EVL-020 · **Follow-up:** —

- **AI-EVL-008 — Evaluation-Driven AI Engineering: Judge reliability, leakage, and benchmark gaming**  
  **Theme:** evaluation · **Format:** challenge · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced hands-on lab treating datasets, graders, traces, regression checks, and quality gates for nondeterministic systems as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving evaluation-driven ai engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EVL-032 · **Related:** AI-EVL-019 · **Follow-up:** —

### Cross-track pathway

**AI-EVL-021 Evaluation-Driven AI Engineering: What does 'good' mean for AI?** → **AI-EVL-031 Evaluation-Driven AI Engineering: Build an eval dataset and scorecard** → **AI-EVL-007 Evaluation-Driven AI Engineering: Eval-driven system design**

### Voting opportunities

- **Non-negotiable foundation:** AI-EVL-021 — Evaluation-Driven AI Engineering: What does 'good' mean for AI?. It protects prerequisites for later months.
- **Voting cluster:** AI-EVL-019 — Evaluation-Driven AI Engineering: Spot flaky, subjective, and misleading metrics; AI-EVL-033 — Evaluation-Driven AI Engineering: Trace grading, tool-use checks, and regressions; AI-EVL-032 — Evaluation-Driven AI Engineering: Compare prompts, models, and workflows safely; AI-EVL-009 — Evaluation-Driven AI Engineering: Macro-evals for multi-step agents.
- **Conditional unlock:** AI-EVL-008 — Evaluation-Driven AI Engineering: Judge reliability, leakage, and benchmark gaming becomes visible after AI-EVL-021 or another October prerequisite.

## NOVEMBER — See the system

**Monthly coherence.** All three tracks examine **AI Observability**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-OPS-025 — AI Observability: From demo to service: what changes?**  
  **Theme:** production engineering · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible hands-on lab on traces, prompts, tool calls, retrieval events, model usage, quality signals, and incident diagnosis. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai observability, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-EVL-021 · **Related:** AI-OPS-006, AI-OPS-048 · **Follow-up:** AI-OPS-034, AI-OPS-048

- **AI-OPS-026 — AI Observability: Latency, cost, and reliability basics**  
  **Theme:** production engineering · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on traces, prompts, tool calls, retrieval events, model usage, quality signals, and incident diagnosis. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai observability, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-OPS-004, AI-OPS-046 · **Follow-up:** AI-OPS-046

- **AI-OPS-027 — AI Observability: Simple operational failure modes**  
  **Theme:** production engineering · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible presentation on traces, prompts, tool calls, retrieval events, model usage, quality signals, and incident diagnosis. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai observability, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-OPS-005, AI-OPS-047 · **Follow-up:** AI-OPS-047

### Practitioner

- **AI-OPS-048 — AI Observability: Instrument a production AI path**  
  **Theme:** production engineering · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical hands-on lab applying traces, prompts, tool calls, retrieval events, model usage, quality signals, and incident diagnosis in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai observability workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EVL-031, AI-OPS-025 · **Related:** AI-OPS-006 · **Follow-up:** AI-OPS-006, AI-OPS-057

- **AI-OPS-046 — AI Observability: Caching, fallbacks, and model routing**  
  **Theme:** production engineering · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical architecture clinic applying traces, prompts, tool calls, retrieval events, model usage, quality signals, and incident diagnosis in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai observability workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-026 · **Related:** AI-OPS-004 · **Follow-up:** AI-OPS-004

- **AI-OPS-047 — AI Observability: Design for retries, quotas, and degraded modes**  
  **Theme:** production engineering · **Format:** live coding · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical live coding applying traces, prompts, tool calls, retrieval events, model usage, quality signals, and incident diagnosis in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai observability workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-027 · **Related:** AI-OPS-005 · **Follow-up:** AI-OPS-005

### Advanced

- **AI-OPS-006 — AI Observability: SLOs and reliability architecture**  
  **Theme:** production engineering · **Format:** case study · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced case study treating traces, prompts, tool calls, retrieval events, model usage, quality signals, and incident diagnosis as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai observability, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EVL-007, AI-OPS-048 · **Related:** AI-OPS-025 · **Follow-up:** AI-OPS-015

- **AI-OPS-004 — AI Observability: Cost-quality-latency optimization**  
  **Theme:** production engineering · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced research walkthrough treating traces, prompts, tool calls, retrieval events, model usage, quality signals, and incident diagnosis as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai observability, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-046 · **Related:** AI-OPS-026 · **Follow-up:** —

- **AI-OPS-005 — AI Observability: Incident response for nondeterministic systems**  
  **Theme:** production engineering · **Format:** architecture clinic · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced architecture clinic treating traces, prompts, tool calls, retrieval events, model usage, quality signals, and incident diagnosis as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai observability, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-047 · **Related:** AI-OPS-027 · **Follow-up:** —

### Cross-track pathway

**AI-OPS-025 AI Observability: From demo to service: what changes?** → **AI-OPS-048 AI Observability: Instrument a production AI path** → **AI-OPS-006 AI Observability: SLOs and reliability architecture**

### Voting opportunities

- **Non-negotiable foundation:** AI-OPS-025 — AI Observability: From demo to service: what changes?. It protects prerequisites for later months.
- **Voting cluster:** AI-OPS-027 — AI Observability: Simple operational failure modes; AI-OPS-046 — AI Observability: Caching, fallbacks, and model routing; AI-OPS-047 — AI Observability: Design for retries, quotas, and degraded modes; AI-OPS-004 — AI Observability: Cost-quality-latency optimization.
- **Conditional unlock:** AI-OPS-005 — AI Observability: Incident response for nondeterministic systems becomes visible after strong interest/participation in AI-EVL-031 — Evaluation-Driven AI Engineering: Build an eval dataset and scorecard.

## DECEMBER — Price the system

**Monthly coherence.** All three tracks examine **Latency & Cost Engineering**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-OPS-034 — Latency & Cost Engineering: From demo to service: what changes?**  
  **Theme:** production engineering · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible workshop on token economics, batching, caching, streaming, request shaping, and cost-quality-latency trade-offs. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind latency & cost engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-OPS-025 · **Related:** AI-OPS-015, AI-OPS-057 · **Follow-up:** AI-OPS-037, AI-OPS-057

- **AI-OPS-035 — Latency & Cost Engineering: Latency, cost, and reliability basics**  
  **Theme:** production engineering · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible presentation on token economics, batching, caching, streaming, request shaping, and cost-quality-latency trade-offs. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind latency & cost engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-OPS-013, AI-OPS-055 · **Follow-up:** AI-OPS-055

- **AI-OPS-036 — Latency & Cost Engineering: Simple operational failure modes**  
  **Theme:** production engineering · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible hands-on lab on token economics, batching, caching, streaming, request shaping, and cost-quality-latency trade-offs. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind latency & cost engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-OPS-014, AI-OPS-056 · **Follow-up:** AI-OPS-056

### Practitioner

- **AI-OPS-057 — Latency & Cost Engineering: Instrument a production AI path**  
  **Theme:** production engineering · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical architecture clinic applying token economics, batching, caching, streaming, request shaping, and cost-quality-latency trade-offs in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic latency & cost engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-034, AI-OPS-048 · **Related:** AI-OPS-015 · **Follow-up:** AI-OPS-015, AI-OPS-060

- **AI-OPS-055 — Latency & Cost Engineering: Caching, fallbacks, and model routing**  
  **Theme:** production engineering · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical live coding applying token economics, batching, caching, streaming, request shaping, and cost-quality-latency trade-offs in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic latency & cost engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-035 · **Related:** AI-OPS-013 · **Follow-up:** AI-OPS-013

- **AI-OPS-056 — Latency & Cost Engineering: Design for retries, quotas, and degraded modes**  
  **Theme:** production engineering · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical hands-on lab applying token economics, batching, caching, streaming, request shaping, and cost-quality-latency trade-offs in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic latency & cost engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-036 · **Related:** AI-OPS-014 · **Follow-up:** AI-OPS-014

### Advanced

- **AI-OPS-015 — Latency & Cost Engineering: SLOs and reliability architecture**  
  **Theme:** production engineering · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced research walkthrough treating token economics, batching, caching, streaming, request shaping, and cost-quality-latency trade-offs as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving latency & cost engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-006, AI-OPS-057 · **Related:** AI-OPS-034 · **Follow-up:** AI-OPS-018

- **AI-OPS-013 — Latency & Cost Engineering: Cost-quality-latency optimization**  
  **Theme:** production engineering · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced architecture clinic treating token economics, batching, caching, streaming, request shaping, and cost-quality-latency trade-offs as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving latency & cost engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-055 · **Related:** AI-OPS-035 · **Follow-up:** —

- **AI-OPS-014 — Latency & Cost Engineering: Incident response for nondeterministic systems**  
  **Theme:** production engineering · **Format:** case study · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced case study treating token economics, batching, caching, streaming, request shaping, and cost-quality-latency trade-offs as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving latency & cost engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-056 · **Related:** AI-OPS-036 · **Follow-up:** —

### Cross-track pathway

**AI-OPS-034 Latency & Cost Engineering: From demo to service: what changes?** → **AI-OPS-057 Latency & Cost Engineering: Instrument a production AI path** → **AI-OPS-015 Latency & Cost Engineering: SLOs and reliability architecture**

### Voting opportunities

- **Non-negotiable foundation:** AI-OPS-034 — Latency & Cost Engineering: From demo to service: what changes?. It protects prerequisites for later months.
- **Voting cluster:** AI-OPS-036 — Latency & Cost Engineering: Simple operational failure modes; AI-OPS-055 — Latency & Cost Engineering: Caching, fallbacks, and model routing; AI-OPS-056 — Latency & Cost Engineering: Design for retries, quotas, and degraded modes; AI-OPS-013 — Latency & Cost Engineering: Cost-quality-latency optimization.
- **Conditional unlock:** AI-OPS-014 — Latency & Cost Engineering: Incident response for nondeterministic systems becomes visible after strong interest/participation in AI-OPS-048 — AI Observability: Instrument a production AI path.

## JANUARY — Route intelligently

**Monthly coherence.** All three tracks examine **Model Routing & Fallbacks**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-OPS-037 — Model Routing & Fallbacks: From demo to service: what changes?**  
  **Theme:** production engineering · **Format:** presentation · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible presentation on task-based routing, confidence, cascading, fallbacks, policy constraints, and multi-model resilience. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind model routing & fallbacks, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-OPS-034 · **Related:** AI-OPS-018, AI-OPS-060 · **Follow-up:** AI-OPS-060, AI-RET-021

- **AI-OPS-038 — Model Routing & Fallbacks: Latency, cost, and reliability basics**  
  **Theme:** production engineering · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible hands-on lab on task-based routing, confidence, cascading, fallbacks, policy constraints, and multi-model resilience. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind model routing & fallbacks, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-OPS-016, AI-OPS-058 · **Follow-up:** AI-OPS-058

- **AI-OPS-039 — Model Routing & Fallbacks: Simple operational failure modes**  
  **Theme:** production engineering · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible workshop on task-based routing, confidence, cascading, fallbacks, policy constraints, and multi-model resilience. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind model routing & fallbacks, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-OPS-017, AI-OPS-059 · **Follow-up:** AI-OPS-059

### Practitioner

- **AI-OPS-060 — Model Routing & Fallbacks: Instrument a production AI path**  
  **Theme:** production engineering · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical live coding applying task-based routing, confidence, cascading, fallbacks, policy constraints, and multi-model resilience in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic model routing & fallbacks workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-037, AI-OPS-057 · **Related:** AI-OPS-018 · **Follow-up:** AI-OPS-018, AI-RET-031

- **AI-OPS-058 — Model Routing & Fallbacks: Caching, fallbacks, and model routing**  
  **Theme:** production engineering · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical hands-on lab applying task-based routing, confidence, cascading, fallbacks, policy constraints, and multi-model resilience in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic model routing & fallbacks workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-038 · **Related:** AI-OPS-016 · **Follow-up:** AI-OPS-016

- **AI-OPS-059 — Model Routing & Fallbacks: Design for retries, quotas, and degraded modes**  
  **Theme:** production engineering · **Format:** architecture clinic · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical architecture clinic applying task-based routing, confidence, cascading, fallbacks, policy constraints, and multi-model resilience in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic model routing & fallbacks workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-039 · **Related:** AI-OPS-017 · **Follow-up:** AI-OPS-017

### Advanced

- **AI-OPS-018 — Model Routing & Fallbacks: SLOs and reliability architecture**  
  **Theme:** production engineering · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced architecture clinic treating task-based routing, confidence, cascading, fallbacks, policy constraints, and multi-model resilience as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving model routing & fallbacks, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-015, AI-OPS-060 · **Related:** AI-OPS-037 · **Follow-up:** AI-RET-009

- **AI-OPS-016 — Model Routing & Fallbacks: Cost-quality-latency optimization**  
  **Theme:** production engineering · **Format:** case study · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced case study treating task-based routing, confidence, cascading, fallbacks, policy constraints, and multi-model resilience as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving model routing & fallbacks, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-058 · **Related:** AI-OPS-038 · **Follow-up:** —

- **AI-OPS-017 — Model Routing & Fallbacks: Incident response for nondeterministic systems**  
  **Theme:** production engineering · **Format:** research walkthrough · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced research walkthrough treating task-based routing, confidence, cascading, fallbacks, policy constraints, and multi-model resilience as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving model routing & fallbacks, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-059 · **Related:** AI-OPS-039 · **Follow-up:** —

### Cross-track pathway

**AI-OPS-037 Model Routing & Fallbacks: From demo to service: what changes?** → **AI-OPS-060 Model Routing & Fallbacks: Instrument a production AI path** → **AI-OPS-018 Model Routing & Fallbacks: SLOs and reliability architecture**

### Voting opportunities

- **Non-negotiable foundation:** AI-OPS-037 — Model Routing & Fallbacks: From demo to service: what changes?. It protects prerequisites for later months.
- **Voting cluster:** AI-OPS-039 — Model Routing & Fallbacks: Simple operational failure modes; AI-OPS-058 — Model Routing & Fallbacks: Caching, fallbacks, and model routing; AI-OPS-059 — Model Routing & Fallbacks: Design for retries, quotas, and degraded modes; AI-OPS-016 — Model Routing & Fallbacks: Cost-quality-latency optimization.
- **Conditional unlock:** AI-OPS-017 — Model Routing & Fallbacks: Incident response for nondeterministic systems becomes visible after strong interest/participation in AI-OPS-057 — Latency & Cost Engineering: Instrument a production AI path.

## FEBRUARY — Harden retrieval

**Monthly coherence.** All three tracks examine **Reliable RAG in Production**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-RET-021 — Reliable RAG in Production: Why retrieval changes the answer**  
  **Theme:** retrieval / RAG · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible hands-on lab on freshness, access control, chunk lifecycle, retrieval evaluation, reranking, and failure recovery. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind reliable rag in production, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-OPS-037 · **Related:** AI-RET-009, AI-RET-031 · **Follow-up:** AI-AGT-049, AI-RET-031

- **AI-RET-019 — Reliable RAG in Production: Chunks, embeddings, and similarity by hand**  
  **Theme:** retrieval / RAG · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on freshness, access control, chunk lifecycle, retrieval evaluation, reranking, and failure recovery. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind reliable rag in production, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RET-008, AI-RET-033 · **Follow-up:** AI-RET-033

- **AI-RET-020 — Reliable RAG in Production: Grounding, citations, and obvious failure modes**  
  **Theme:** retrieval / RAG · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible presentation on freshness, access control, chunk lifecycle, retrieval evaluation, reranking, and failure recovery. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind reliable rag in production, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RET-007, AI-RET-032 · **Follow-up:** AI-RET-032

### Practitioner

- **AI-RET-031 — Reliable RAG in Production: Build a retrieval pipeline end to end**  
  **Theme:** retrieval / RAG · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical hands-on lab applying freshness, access control, chunk lifecycle, retrieval evaluation, reranking, and failure recovery in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic reliable rag in production workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-060, AI-RET-021 · **Related:** AI-RET-009 · **Follow-up:** AI-AGT-076, AI-RET-009

- **AI-RET-033 — Reliable RAG in Production: Hybrid search, reranking, and query rewriting**  
  **Theme:** retrieval / RAG · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical architecture clinic applying freshness, access control, chunk lifecycle, retrieval evaluation, reranking, and failure recovery in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic reliable rag in production workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RET-019 · **Related:** AI-RET-008 · **Follow-up:** AI-RET-008

- **AI-RET-032 — Reliable RAG in Production: Evaluate retrieval before generation**  
  **Theme:** retrieval / RAG · **Format:** live coding · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical live coding applying freshness, access control, chunk lifecycle, retrieval evaluation, reranking, and failure recovery in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic reliable rag in production workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RET-020 · **Related:** AI-RET-007 · **Follow-up:** AI-RET-007

### Advanced

- **AI-RET-009 — Reliable RAG in Production: Retrieval architecture clinic**  
  **Theme:** retrieval / RAG · **Format:** case study · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced case study treating freshness, access control, chunk lifecycle, retrieval evaluation, reranking, and failure recovery as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving reliable rag in production, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-018, AI-RET-031 · **Related:** AI-RET-021 · **Follow-up:** AI-AGT-022

- **AI-RET-008 — Reliable RAG in Production: Freshness, permissions, and multi-index design**  
  **Theme:** retrieval / RAG · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced research walkthrough treating freshness, access control, chunk lifecycle, retrieval evaluation, reranking, and failure recovery as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving reliable rag in production, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RET-033 · **Related:** AI-RET-019 · **Follow-up:** —

- **AI-RET-007 — Reliable RAG in Production: Agentic retrieval and adaptive search**  
  **Theme:** retrieval / RAG · **Format:** architecture clinic · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced architecture clinic treating freshness, access control, chunk lifecycle, retrieval evaluation, reranking, and failure recovery as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving reliable rag in production, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RET-032 · **Related:** AI-RET-020 · **Follow-up:** —

### Cross-track pathway

**AI-RET-021 Reliable RAG in Production: Why retrieval changes the answer** → **AI-RET-031 Reliable RAG in Production: Build a retrieval pipeline end to end** → **AI-RET-009 Reliable RAG in Production: Retrieval architecture clinic**

### Voting opportunities

- **Non-negotiable foundation:** AI-RET-021 — Reliable RAG in Production: Why retrieval changes the answer. It protects prerequisites for later months.
- **Voting cluster:** AI-RET-020 — Reliable RAG in Production: Grounding, citations, and obvious failure modes; AI-RET-033 — Reliable RAG in Production: Hybrid search, reranking, and query rewriting; AI-RET-032 — Reliable RAG in Production: Evaluate retrieval before generation; AI-RET-008 — Reliable RAG in Production: Freshness, permissions, and multi-index design.
- **Conditional unlock:** AI-RET-007 — Reliable RAG in Production: Agentic retrieval and adaptive search becomes visible after strong interest/participation in AI-OPS-060 — Model Routing & Fallbacks: Instrument a production AI path.

## MARCH — Harden agents

**Monthly coherence.** All three tracks examine **Reliable Agents in Production**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-AGT-049 — Reliable Agents in Production: Agent, workflow, or chatbot?**  
  **Theme:** agents · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible workshop on timeouts, retries, checkpoints, idempotency, approval gates, and recovery from partial side effects. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind reliable agents in production, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-RET-021 · **Related:** AI-AGT-022, AI-AGT-076 · **Follow-up:** AI-AGT-076, AI-SEC-030

- **AI-AGT-050 — Reliable Agents in Production: Tools, state, loops, and stop conditions**  
  **Theme:** agents · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible presentation on timeouts, retries, checkpoints, idempotency, approval gates, and recovery from partial side effects. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind reliable agents in production, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-023, AI-AGT-078 · **Follow-up:** AI-AGT-078

- **AI-AGT-051 — Reliable Agents in Production: When autonomy makes things worse**  
  **Theme:** agents · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible hands-on lab on timeouts, retries, checkpoints, idempotency, approval gates, and recovery from partial side effects. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind reliable agents in production, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-024, AI-AGT-077 · **Follow-up:** AI-AGT-077

### Practitioner

- **AI-AGT-076 — Reliable Agents in Production: Build an agent with tools**  
  **Theme:** agents · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical architecture clinic applying timeouts, retries, checkpoints, idempotency, approval gates, and recovery from partial side effects in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic reliable agents in production workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-049, AI-RET-031 · **Related:** AI-AGT-022 · **Follow-up:** AI-AGT-022, AI-SEC-047

- **AI-AGT-078 — Reliable Agents in Production: State, memory, and recovery paths**  
  **Theme:** agents · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical live coding applying timeouts, retries, checkpoints, idempotency, approval gates, and recovery from partial side effects in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic reliable agents in production workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-050 · **Related:** AI-AGT-023 · **Follow-up:** AI-AGT-023

- **AI-AGT-077 — Reliable Agents in Production: Human approval and controllable autonomy**  
  **Theme:** agents · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical hands-on lab applying timeouts, retries, checkpoints, idempotency, approval gates, and recovery from partial side effects in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic reliable agents in production workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-051 · **Related:** AI-AGT-024 · **Follow-up:** AI-AGT-024

### Advanced

- **AI-AGT-022 — Reliable Agents in Production: Agent orchestration architecture clinic**  
  **Theme:** agents · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced research walkthrough treating timeouts, retries, checkpoints, idempotency, approval gates, and recovery from partial side effects as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving reliable agents in production, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-076, AI-RET-009 · **Related:** AI-AGT-049 · **Follow-up:** AI-SEC-012

- **AI-AGT-023 — Reliable Agents in Production: Long-horizon reliability and failure recovery**  
  **Theme:** agents · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced architecture clinic treating timeouts, retries, checkpoints, idempotency, approval gates, and recovery from partial side effects as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving reliable agents in production, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-078 · **Related:** AI-AGT-050 · **Follow-up:** —

- **AI-AGT-024 — Reliable Agents in Production: Multi-agent coordination and emergent failure**  
  **Theme:** agents · **Format:** case study · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced case study treating timeouts, retries, checkpoints, idempotency, approval gates, and recovery from partial side effects as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving reliable agents in production, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-077 · **Related:** AI-AGT-051 · **Follow-up:** —

### Cross-track pathway

**AI-AGT-049 Reliable Agents in Production: Agent, workflow, or chatbot?** → **AI-AGT-076 Reliable Agents in Production: Build an agent with tools** → **AI-AGT-022 Reliable Agents in Production: Agent orchestration architecture clinic**

### Voting opportunities

- **Non-negotiable foundation:** AI-AGT-049 — Reliable Agents in Production: Agent, workflow, or chatbot?. It protects prerequisites for later months.
- **Voting cluster:** AI-AGT-051 — Reliable Agents in Production: When autonomy makes things worse; AI-AGT-078 — Reliable Agents in Production: State, memory, and recovery paths; AI-AGT-077 — Reliable Agents in Production: Human approval and controllable autonomy; AI-AGT-023 — Reliable Agents in Production: Long-horizon reliability and failure recovery.
- **Conditional unlock:** AI-AGT-024 — Reliable Agents in Production: Multi-agent coordination and emergent failure becomes visible after strong interest/participation in AI-RET-031 — Reliable RAG in Production: Build a retrieval pipeline end to end.

## APRIL — Secure the platform

**Monthly coherence.** All three tracks examine **Production AI Security**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-SEC-030 — Production AI Security: Threat models for AI features**  
  **Theme:** security · **Format:** presentation · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible presentation on identity, secrets, tenancy, data governance, auditability, and secure tool/model boundaries. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind production ai security, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-AGT-049 · **Related:** AI-SEC-012, AI-SEC-047 · **Follow-up:** AI-INF-012, AI-SEC-047

- **AI-SEC-029 — Production AI Security: Prompt injection in plain language**  
  **Theme:** security · **Format:** red-team session · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible red-team session on identity, secrets, tenancy, data governance, auditability, and secure tool/model boundaries. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind production ai security, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-SEC-011, AI-SEC-048 · **Follow-up:** AI-SEC-048

- **AI-SEC-028 — Production AI Security: Permissions, data boundaries, and safe defaults**  
  **Theme:** security · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible architecture clinic on identity, secrets, tenancy, data governance, auditability, and secure tool/model boundaries. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind production ai security, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-SEC-010, AI-SEC-046 · **Follow-up:** AI-SEC-046

### Practitioner

- **AI-SEC-047 — Production AI Security: Red-team an AI workflow**  
  **Theme:** security · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical presentation applying identity, secrets, tenancy, data governance, auditability, and secure tool/model boundaries in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic production ai security workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-076, AI-SEC-030 · **Related:** AI-SEC-012 · **Follow-up:** AI-INF-017, AI-SEC-012

- **AI-SEC-048 — Production AI Security: Tool permissions, sandboxing, and approval gates**  
  **Theme:** security · **Format:** red-team session · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical red-team session applying identity, secrets, tenancy, data governance, auditability, and secure tool/model boundaries in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic production ai security workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-SEC-029 · **Related:** AI-SEC-011 · **Follow-up:** AI-SEC-011

- **AI-SEC-046 — Production AI Security: Design defenses for indirect prompt injection**  
  **Theme:** security · **Format:** architecture clinic · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical architecture clinic applying identity, secrets, tenancy, data governance, auditability, and secure tool/model boundaries in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic production ai security workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-SEC-028 · **Related:** AI-SEC-010 · **Follow-up:** AI-SEC-010

### Advanced

- **AI-SEC-012 — Production AI Security: Security architecture for autonomous agents**  
  **Theme:** security · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced presentation treating identity, secrets, tenancy, data governance, auditability, and secure tool/model boundaries as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving production ai security, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-022, AI-SEC-047 · **Related:** AI-SEC-030 · **Follow-up:** AI-INF-004

- **AI-SEC-011 — Production AI Security: Containment, blast radius, and credential boundaries**  
  **Theme:** security · **Format:** red-team session · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced red-team session treating identity, secrets, tenancy, data governance, auditability, and secure tool/model boundaries as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving production ai security, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-SEC-048 · **Related:** AI-SEC-029 · **Follow-up:** —

- **AI-SEC-010 — Production AI Security: Adversarial evaluation and abuse-case design**  
  **Theme:** security · **Format:** architecture clinic · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced architecture clinic treating identity, secrets, tenancy, data governance, auditability, and secure tool/model boundaries as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving production ai security, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-SEC-046 · **Related:** AI-SEC-028 · **Follow-up:** —

### Cross-track pathway

**AI-SEC-030 Production AI Security: Threat models for AI features** → **AI-SEC-047 Production AI Security: Red-team an AI workflow** → **AI-SEC-012 Production AI Security: Security architecture for autonomous agents**

### Voting opportunities

- **Non-negotiable foundation:** AI-SEC-030 — Production AI Security: Threat models for AI features. It protects prerequisites for later months.
- **Voting cluster:** AI-SEC-028 — Production AI Security: Permissions, data boundaries, and safe defaults; AI-SEC-048 — Production AI Security: Tool permissions, sandboxing, and approval gates; AI-SEC-046 — Production AI Security: Design defenses for indirect prompt injection; AI-SEC-011 — Production AI Security: Containment, blast radius, and credential boundaries.
- **Conditional unlock:** AI-SEC-010 — Production AI Security: Adversarial evaluation and abuse-case design becomes visible after strong interest/participation in AI-AGT-076 — Reliable Agents in Production: Build an agent with tools.

## MAY — Scale serving

**Monthly coherence.** All three tracks examine **Inference Platforms**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-INF-012 — Inference Platforms: Where AI workloads actually run**  
  **Theme:** infrastructure · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible hands-on lab on serving, batching, autoscaling, GPU scheduling, isolation, throughput, and capacity planning. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind inference platforms, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-SEC-030 · **Related:** AI-INF-004, AI-INF-017 · **Follow-up:** AI-INF-017, AI-OPS-022

- **AI-INF-010 — Inference Platforms: CPU, GPU, memory, and network intuition**  
  **Theme:** infrastructure · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on serving, batching, autoscaling, GPU scheduling, isolation, throughput, and capacity planning. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind inference platforms, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-INF-006, AI-INF-016 · **Follow-up:** AI-INF-016

- **AI-INF-011 — Inference Platforms: Capacity and quota basics**  
  **Theme:** infrastructure · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible presentation on serving, batching, autoscaling, GPU scheduling, isolation, throughput, and capacity planning. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind inference platforms, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-INF-005, AI-INF-018 · **Follow-up:** AI-INF-018

### Practitioner

- **AI-INF-017 — Inference Platforms: Deploy an inference workload**  
  **Theme:** infrastructure · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical hands-on lab applying serving, batching, autoscaling, GPU scheduling, isolation, throughput, and capacity planning in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic inference platforms workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-INF-012, AI-SEC-047 · **Related:** AI-INF-004 · **Follow-up:** AI-INF-004, AI-OPS-045

- **AI-INF-016 — Inference Platforms: Batching, queues, and autoscaling**  
  **Theme:** infrastructure · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical architecture clinic applying serving, batching, autoscaling, GPU scheduling, isolation, throughput, and capacity planning in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic inference platforms workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-INF-010 · **Related:** AI-INF-006 · **Follow-up:** AI-INF-006

- **AI-INF-018 — Inference Platforms: Measure utilization and bottlenecks**  
  **Theme:** infrastructure · **Format:** live coding · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical live coding applying serving, batching, autoscaling, GPU scheduling, isolation, throughput, and capacity planning in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic inference platforms workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-INF-011 · **Related:** AI-INF-005 · **Follow-up:** AI-INF-005

### Advanced

- **AI-INF-004 — Inference Platforms: Inference platform architecture**  
  **Theme:** infrastructure · **Format:** case study · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced case study treating serving, batching, autoscaling, GPU scheduling, isolation, throughput, and capacity planning as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving inference platforms, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-INF-017, AI-SEC-012 · **Related:** AI-INF-012 · **Follow-up:** AI-OPS-003

- **AI-INF-006 — Inference Platforms: Scheduling, isolation, and multi-tenant reliability**  
  **Theme:** infrastructure · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced research walkthrough treating serving, batching, autoscaling, GPU scheduling, isolation, throughput, and capacity planning as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving inference platforms, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-INF-016 · **Related:** AI-INF-010 · **Follow-up:** —

- **AI-INF-005 — Inference Platforms: Optimize serving under cost and latency constraints**  
  **Theme:** infrastructure · **Format:** architecture clinic · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced architecture clinic treating serving, batching, autoscaling, GPU scheduling, isolation, throughput, and capacity planning as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving inference platforms, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-INF-018 · **Related:** AI-INF-011 · **Follow-up:** —

### Cross-track pathway

**AI-INF-012 Inference Platforms: Where AI workloads actually run** → **AI-INF-017 Inference Platforms: Deploy an inference workload** → **AI-INF-004 Inference Platforms: Inference platform architecture**

### Voting opportunities

- **Non-negotiable foundation:** AI-INF-012 — Inference Platforms: Where AI workloads actually run. It protects prerequisites for later months.
- **Voting cluster:** AI-INF-011 — Inference Platforms: Capacity and quota basics; AI-INF-016 — Inference Platforms: Batching, queues, and autoscaling; AI-INF-018 — Inference Platforms: Measure utilization and bottlenecks; AI-INF-006 — Inference Platforms: Scheduling, isolation, and multi-tenant reliability.
- **Conditional unlock:** AI-INF-005 — Inference Platforms: Optimize serving under cost and latency constraints becomes visible after strong interest/participation in AI-SEC-047 — Production AI Security: Red-team an AI workflow.

## JUNE — Survive incidents

**Monthly coherence.** All three tracks examine **AI Incident Response**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-OPS-022 — AI Incident Response: From demo to service: what changes?**  
  **Theme:** production engineering · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible workshop on detecting, triaging, mitigating, and learning from quality, safety, availability, and cost incidents. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai incident response, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-INF-012 · **Related:** AI-OPS-003, AI-OPS-045 · **Follow-up:** AI-OPS-045

- **AI-OPS-023 — AI Incident Response: Latency, cost, and reliability basics**  
  **Theme:** production engineering · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible presentation on detecting, triaging, mitigating, and learning from quality, safety, availability, and cost incidents. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai incident response, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-OPS-001, AI-OPS-043 · **Follow-up:** AI-OPS-043

- **AI-OPS-024 — AI Incident Response: Simple operational failure modes**  
  **Theme:** production engineering · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible hands-on lab on detecting, triaging, mitigating, and learning from quality, safety, availability, and cost incidents. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai incident response, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-OPS-002, AI-OPS-044 · **Follow-up:** AI-OPS-044

### Practitioner

- **AI-OPS-045 — AI Incident Response: Instrument a production AI path**  
  **Theme:** production engineering · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical architecture clinic applying detecting, triaging, mitigating, and learning from quality, safety, availability, and cost incidents in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai incident response workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-INF-017, AI-OPS-022 · **Related:** AI-OPS-003 · **Follow-up:** AI-OPS-003

- **AI-OPS-043 — AI Incident Response: Caching, fallbacks, and model routing**  
  **Theme:** production engineering · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical live coding applying detecting, triaging, mitigating, and learning from quality, safety, availability, and cost incidents in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai incident response workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-023 · **Related:** AI-OPS-001 · **Follow-up:** AI-OPS-001

- **AI-OPS-044 — AI Incident Response: Design for retries, quotas, and degraded modes**  
  **Theme:** production engineering · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical hands-on lab applying detecting, triaging, mitigating, and learning from quality, safety, availability, and cost incidents in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai incident response workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-024 · **Related:** AI-OPS-002 · **Follow-up:** AI-OPS-002

### Advanced

- **AI-OPS-003 — AI Incident Response: SLOs and reliability architecture**  
  **Theme:** production engineering · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced research walkthrough treating detecting, triaging, mitigating, and learning from quality, safety, availability, and cost incidents as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai incident response, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-INF-004, AI-OPS-045 · **Related:** AI-OPS-022 · **Follow-up:** —

- **AI-OPS-001 — AI Incident Response: Cost-quality-latency optimization**  
  **Theme:** production engineering · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced architecture clinic treating detecting, triaging, mitigating, and learning from quality, safety, availability, and cost incidents as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai incident response, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-043 · **Related:** AI-OPS-023 · **Follow-up:** —

- **AI-OPS-002 — AI Incident Response: Incident response for nondeterministic systems**  
  **Theme:** production engineering · **Format:** case study · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced case study treating detecting, triaging, mitigating, and learning from quality, safety, availability, and cost incidents as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai incident response, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-044 · **Related:** AI-OPS-024 · **Follow-up:** —

### Cross-track pathway

**AI-OPS-022 AI Incident Response: From demo to service: what changes?** → **AI-OPS-045 AI Incident Response: Instrument a production AI path** → **AI-OPS-003 AI Incident Response: SLOs and reliability architecture**

### Voting opportunities

- **Non-negotiable foundation:** AI-OPS-022 — AI Incident Response: From demo to service: what changes?. It protects prerequisites for later months.
- **Voting cluster:** AI-OPS-024 — AI Incident Response: Simple operational failure modes; AI-OPS-043 — AI Incident Response: Caching, fallbacks, and model routing; AI-OPS-044 — AI Incident Response: Design for retries, quotas, and degraded modes; AI-OPS-001 — AI Incident Response: Cost-quality-latency optimization.
- **Conditional unlock:** AI-OPS-002 — AI Incident Response: Incident response for nondeterministic systems becomes visible after strong interest/participation in AI-INF-017 — Inference Platforms: Deploy an inference workload.

## 6. Longitudinal pathways

- **Foundation spine:** Oct [F] AI-EVL-021 Evaluation-Driven AI Engineering → Dec [F] AI-OPS-034 Latency & Cost Engineering → Feb [F] AI-RET-021 Reliable RAG in Production → Apr [F] AI-SEC-030 Production AI Security → Jun [F] AI-OPS-022 AI Incident Response
- **Practitioner spine:** Oct [P] AI-EVL-031 Evaluation-Driven AI Engineering → Dec [P] AI-OPS-057 Latency & Cost Engineering → Feb [P] AI-RET-031 Reliable RAG in Production → Apr [P] AI-SEC-047 Production AI Security → Jun [P] AI-OPS-045 AI Incident Response
- **Advanced spine:** Oct [A] AI-EVL-007 Evaluation-Driven AI Engineering → Dec [A] AI-OPS-015 Latency & Cost Engineering → Feb [A] AI-RET-009 Reliable RAG in Production → Apr [A] AI-SEC-012 Production AI Security → Jun [A] AI-OPS-003 AI Incident Response

## 7. Branching paths

```text
AI-OPS-060 Model Routing & Fallbacks
├── implementation branch → AI-RET-033 Reliable RAG in Production
├── architecture branch   → AI-AGT-023 Reliable Agents in Production
└── frontier branch       → AI-SEC-010 Production AI Security
```

Member interest can determine which branch receives a live workshop versus becoming optional reading/lab material. The prerequisite spine remains protected.

## 8. Season-level voting model

- **Editorially protected:** first Foundation topic each month, plus any prerequisite explicitly required by a later Core session.
- **Primary voting surface:** Elective Foundation topics, Practitioner trade-off labs, and Advanced architecture alternatives.
- **Unlockable:** Experimental Advanced sessions and frontier branches; reveal only after participation or interest thresholds are met.
- **Wild-card slot:** reserve at least one spring session for an emerging development that passes editorial relevance and evidence checks.

## 9. Simplified programme graph

```text
[Oct] AI-EVL-031 Evaluation-Driven AI Engineering
      ↓
[Nov] AI-OPS-048 AI Observability
      ↓
[Jan] AI-OPS-060 Model Routing & Fallbacks
      ↓
[Feb] AI-RET-031 Reliable RAG in Production
      ↓
[Apr] AI-SEC-047 Production AI Security
      ↓
[Jun] AI-OPS-045 AI Incident Response
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
- **Hands-on intensity:** 5/5
- **Production relevance:** 5/5
- **Research orientation:** 2/5
