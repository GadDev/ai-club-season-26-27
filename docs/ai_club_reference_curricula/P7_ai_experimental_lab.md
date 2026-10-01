# P7 — AI Experimental Lab

> **Build it, break it, measure it, explain what happened.**

## 1. Programme identity

- **Educational philosophy:** A workshop-first season where members learn by designing controlled experiments, competitions, red-team exercises, and benchmarks.
- **Target audience:** Hands-on engineers who learn best by comparing systems and investigating failure.
- **Primary themes:** experiments, benchmarks, RAG, agents, protocols, evals, security, performance
- **What makes it different:** The primary artifact every month is evidence: measurements, traces, failure reports, or benchmark results.
- **Main strengths:** Highest hands-on intensity; memorable; community-friendly; excellent for voting and team challenges.
- **Potential weaknesses:** Can become shallow without strong debriefs; logistics and preparation load are high.
- **Expected difficulty profile:** Accessible experiments in Foundation, implementation in Practitioner, adversarial methodology in Advanced.

**Why it deserves to exist independently:** The primary artifact every month is evidence: measurements, traces, failure reports, or benchmark results. That creates a different set of curriculum trade-offs, voting clusters, and capstone outcomes than the other reference seasons.

## 2. Season narrative

**October — Hypothesize:** Prompt & Context Battle
↓
**November — Compare:** Model Bake-Off
↓
**December — Break retrieval:** RAG Failure Lab
↓
**January — Break agents:** Agent Reliability Lab
↓
**February — Force interoperability:** Protocol Interoperability Lab
↓
**March — Attack the metric:** Evaluation Challenge
↓
**April — Attack the system:** AI Red-Team Lab
↓
**May — Optimize the system:** AI Performance Lab
↓
**June — Explain the evidence:** Build-Break-Explain Demo Day

## 3–5. Month-by-month curriculum, coherence, and cross-track pathways

## OCTOBER — Hypothesize

**Monthly coherence.** All three tracks examine **Prompt & Context Battle**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-EXP-025 — Prompt & Context Battle: Form a falsifiable AI hypothesis**  
  **Theme:** experimentation · **Format:** experiment · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible experiment on controlled experiments comparing instruction, examples, context size, structure, and evaluation criteria. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind prompt & context battle, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EXP-010, AI-EXP-040 · **Follow-up:** AI-EXP-022, AI-EXP-040

- **AI-EXP-027 — Prompt & Context Battle: Run a tiny experiment and record the result**  
  **Theme:** experimentation · **Format:** challenge · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible challenge on controlled experiments comparing instruction, examples, context size, structure, and evaluation criteria. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind prompt & context battle, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EXP-012, AI-EXP-041 · **Follow-up:** AI-EXP-041

- **AI-EXP-026 — Prompt & Context Battle: Learn from surprising failures**  
  **Theme:** experimentation · **Format:** debate · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible debate on controlled experiments comparing instruction, examples, context size, structure, and evaluation criteria. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind prompt & context battle, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EXP-011, AI-EXP-042 · **Follow-up:** AI-EXP-042

### Practitioner

- **AI-EXP-040 — Prompt & Context Battle: Benchmark competing approaches**  
  **Theme:** experimentation · **Format:** experiment · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical experiment applying controlled experiments comparing instruction, examples, context size, structure, and evaluation criteria in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic prompt & context battle workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EXP-025 · **Related:** AI-EXP-010 · **Follow-up:** AI-EXP-010, AI-EXP-037

- **AI-EXP-041 — Prompt & Context Battle: Design a fair bake-off**  
  **Theme:** experimentation · **Format:** challenge · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical challenge applying controlled experiments comparing instruction, examples, context size, structure, and evaluation criteria in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic prompt & context battle workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EXP-027 · **Related:** AI-EXP-012 · **Follow-up:** AI-EXP-012

- **AI-EXP-042 — Prompt & Context Battle: Turn experimental evidence into a decision**  
  **Theme:** experimentation · **Format:** debate · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical debate applying controlled experiments comparing instruction, examples, context size, structure, and evaluation criteria in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic prompt & context battle workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EXP-026 · **Related:** AI-EXP-011 · **Follow-up:** AI-EXP-011

### Advanced

- **AI-EXP-010 — Prompt & Context Battle: Adversarial experiment design**  
  **Theme:** experimentation · **Format:** experiment · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced experiment treating controlled experiments comparing instruction, examples, context size, structure, and evaluation criteria as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving prompt & context battle, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EXP-040 · **Related:** AI-EXP-025 · **Follow-up:** AI-EXP-007

- **AI-EXP-012 — Prompt & Context Battle: Reproduce, stress, and invalidate claims**  
  **Theme:** experimentation · **Format:** challenge · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced challenge treating controlled experiments comparing instruction, examples, context size, structure, and evaluation criteria as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving prompt & context battle, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EXP-041 · **Related:** AI-EXP-027 · **Follow-up:** —

- **AI-EXP-011 — Prompt & Context Battle: Build a benchmark that resists gaming**  
  **Theme:** experimentation · **Format:** debate · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced debate treating controlled experiments comparing instruction, examples, context size, structure, and evaluation criteria as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving prompt & context battle, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EXP-042 · **Related:** AI-EXP-026 · **Follow-up:** —

### Cross-track pathway

**AI-EXP-025 Prompt & Context Battle: Form a falsifiable AI hypothesis** → **AI-EXP-040 Prompt & Context Battle: Benchmark competing approaches** → **AI-EXP-010 Prompt & Context Battle: Adversarial experiment design**

### Voting opportunities

- **Non-negotiable foundation:** AI-EXP-025 — Prompt & Context Battle: Form a falsifiable AI hypothesis. It protects prerequisites for later months.
- **Voting cluster:** AI-EXP-026 — Prompt & Context Battle: Learn from surprising failures; AI-EXP-041 — Prompt & Context Battle: Design a fair bake-off; AI-EXP-042 — Prompt & Context Battle: Turn experimental evidence into a decision; AI-EXP-012 — Prompt & Context Battle: Reproduce, stress, and invalidate claims.
- **Conditional unlock:** AI-EXP-011 — Prompt & Context Battle: Build a benchmark that resists gaming becomes visible after AI-EXP-025 or another October prerequisite.

## NOVEMBER — Compare

**Monthly coherence.** All three tracks examine **Model Bake-Off**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-EXP-022 — Model Bake-Off: Form a falsifiable AI hypothesis**  
  **Theme:** experimentation · **Format:** challenge · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible challenge on fair comparison of models on representative tasks using cost, latency, quality, and failure analysis. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind model bake-off, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-EXP-025 · **Related:** AI-EXP-007, AI-EXP-037 · **Follow-up:** AI-EXP-028, AI-EXP-037

- **AI-EXP-024 — Model Bake-Off: Run a tiny experiment and record the result**  
  **Theme:** experimentation · **Format:** debate · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible debate on fair comparison of models on representative tasks using cost, latency, quality, and failure analysis. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind model bake-off, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EXP-009, AI-EXP-038 · **Follow-up:** AI-EXP-038

- **AI-EXP-023 — Model Bake-Off: Learn from surprising failures**  
  **Theme:** experimentation · **Format:** experiment · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible experiment on fair comparison of models on representative tasks using cost, latency, quality, and failure analysis. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind model bake-off, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EXP-008, AI-EXP-039 · **Follow-up:** AI-EXP-039

### Practitioner

- **AI-EXP-037 — Model Bake-Off: Benchmark competing approaches**  
  **Theme:** experimentation · **Format:** challenge · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical challenge applying fair comparison of models on representative tasks using cost, latency, quality, and failure analysis in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic model bake-off workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EXP-022, AI-EXP-040 · **Related:** AI-EXP-007 · **Follow-up:** AI-EXP-007, AI-EXP-043

- **AI-EXP-038 — Model Bake-Off: Design a fair bake-off**  
  **Theme:** experimentation · **Format:** debate · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical debate applying fair comparison of models on representative tasks using cost, latency, quality, and failure analysis in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic model bake-off workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EXP-024 · **Related:** AI-EXP-009 · **Follow-up:** AI-EXP-009

- **AI-EXP-039 — Model Bake-Off: Turn experimental evidence into a decision**  
  **Theme:** experimentation · **Format:** experiment · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical experiment applying fair comparison of models on representative tasks using cost, latency, quality, and failure analysis in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic model bake-off workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EXP-023 · **Related:** AI-EXP-008 · **Follow-up:** AI-EXP-008

### Advanced

- **AI-EXP-007 — Model Bake-Off: Adversarial experiment design**  
  **Theme:** experimentation · **Format:** challenge · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced challenge treating fair comparison of models on representative tasks using cost, latency, quality, and failure analysis as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving model bake-off, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EXP-010, AI-EXP-037 · **Related:** AI-EXP-022 · **Follow-up:** AI-EXP-013

- **AI-EXP-009 — Model Bake-Off: Reproduce, stress, and invalidate claims**  
  **Theme:** experimentation · **Format:** debate · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced debate treating fair comparison of models on representative tasks using cost, latency, quality, and failure analysis as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving model bake-off, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EXP-038 · **Related:** AI-EXP-024 · **Follow-up:** —

- **AI-EXP-008 — Model Bake-Off: Build a benchmark that resists gaming**  
  **Theme:** experimentation · **Format:** experiment · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced experiment treating fair comparison of models on representative tasks using cost, latency, quality, and failure analysis as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving model bake-off, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EXP-039 · **Related:** AI-EXP-023 · **Follow-up:** —

### Cross-track pathway

**AI-EXP-022 Model Bake-Off: Form a falsifiable AI hypothesis** → **AI-EXP-037 Model Bake-Off: Benchmark competing approaches** → **AI-EXP-007 Model Bake-Off: Adversarial experiment design**

### Voting opportunities

- **Non-negotiable foundation:** AI-EXP-022 — Model Bake-Off: Form a falsifiable AI hypothesis. It protects prerequisites for later months.
- **Voting cluster:** AI-EXP-023 — Model Bake-Off: Learn from surprising failures; AI-EXP-038 — Model Bake-Off: Design a fair bake-off; AI-EXP-039 — Model Bake-Off: Turn experimental evidence into a decision; AI-EXP-009 — Model Bake-Off: Reproduce, stress, and invalidate claims.
- **Conditional unlock:** AI-EXP-008 — Model Bake-Off: Build a benchmark that resists gaming becomes visible after strong interest/participation in AI-EXP-040 — Prompt & Context Battle: Benchmark competing approaches.

## DECEMBER — Break retrieval

**Monthly coherence.** All three tracks examine **RAG Failure Lab**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-EXP-028 — RAG Failure Lab: Form a falsifiable AI hypothesis**  
  **Theme:** experimentation · **Format:** debate · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible debate on deliberately breaking retrieval pipelines to expose chunking, query, freshness, permissions, and grounding failures. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind rag failure lab, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-EXP-022 · **Related:** AI-EXP-013, AI-EXP-043 · **Follow-up:** AI-EXP-016, AI-EXP-043

- **AI-EXP-030 — RAG Failure Lab: Run a tiny experiment and record the result**  
  **Theme:** experimentation · **Format:** experiment · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible experiment on deliberately breaking retrieval pipelines to expose chunking, query, freshness, permissions, and grounding failures. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind rag failure lab, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EXP-015, AI-EXP-044 · **Follow-up:** AI-EXP-044

- **AI-EXP-029 — RAG Failure Lab: Learn from surprising failures**  
  **Theme:** experimentation · **Format:** challenge · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible challenge on deliberately breaking retrieval pipelines to expose chunking, query, freshness, permissions, and grounding failures. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind rag failure lab, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EXP-014, AI-EXP-045 · **Follow-up:** AI-EXP-045

### Practitioner

- **AI-EXP-043 — RAG Failure Lab: Benchmark competing approaches**  
  **Theme:** experimentation · **Format:** debate · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical debate applying deliberately breaking retrieval pipelines to expose chunking, query, freshness, permissions, and grounding failures in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic rag failure lab workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EXP-028, AI-EXP-037 · **Related:** AI-EXP-013 · **Follow-up:** AI-EXP-013, AI-EXP-031

- **AI-EXP-044 — RAG Failure Lab: Design a fair bake-off**  
  **Theme:** experimentation · **Format:** experiment · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical experiment applying deliberately breaking retrieval pipelines to expose chunking, query, freshness, permissions, and grounding failures in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic rag failure lab workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EXP-030 · **Related:** AI-EXP-015 · **Follow-up:** AI-EXP-015

- **AI-EXP-045 — RAG Failure Lab: Turn experimental evidence into a decision**  
  **Theme:** experimentation · **Format:** challenge · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical challenge applying deliberately breaking retrieval pipelines to expose chunking, query, freshness, permissions, and grounding failures in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic rag failure lab workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EXP-029 · **Related:** AI-EXP-014 · **Follow-up:** AI-EXP-014

### Advanced

- **AI-EXP-013 — RAG Failure Lab: Adversarial experiment design**  
  **Theme:** experimentation · **Format:** debate · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced debate treating deliberately breaking retrieval pipelines to expose chunking, query, freshness, permissions, and grounding failures as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving rag failure lab, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EXP-007, AI-EXP-043 · **Related:** AI-EXP-028 · **Follow-up:** AI-EXP-001

- **AI-EXP-015 — RAG Failure Lab: Reproduce, stress, and invalidate claims**  
  **Theme:** experimentation · **Format:** experiment · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced experiment treating deliberately breaking retrieval pipelines to expose chunking, query, freshness, permissions, and grounding failures as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving rag failure lab, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EXP-044 · **Related:** AI-EXP-030 · **Follow-up:** —

- **AI-EXP-014 — RAG Failure Lab: Build a benchmark that resists gaming**  
  **Theme:** experimentation · **Format:** challenge · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced challenge treating deliberately breaking retrieval pipelines to expose chunking, query, freshness, permissions, and grounding failures as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving rag failure lab, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EXP-045 · **Related:** AI-EXP-029 · **Follow-up:** —

### Cross-track pathway

**AI-EXP-028 RAG Failure Lab: Form a falsifiable AI hypothesis** → **AI-EXP-043 RAG Failure Lab: Benchmark competing approaches** → **AI-EXP-013 RAG Failure Lab: Adversarial experiment design**

### Voting opportunities

- **Non-negotiable foundation:** AI-EXP-028 — RAG Failure Lab: Form a falsifiable AI hypothesis. It protects prerequisites for later months.
- **Voting cluster:** AI-EXP-029 — RAG Failure Lab: Learn from surprising failures; AI-EXP-044 — RAG Failure Lab: Design a fair bake-off; AI-EXP-045 — RAG Failure Lab: Turn experimental evidence into a decision; AI-EXP-015 — RAG Failure Lab: Reproduce, stress, and invalidate claims.
- **Conditional unlock:** AI-EXP-014 — RAG Failure Lab: Build a benchmark that resists gaming becomes visible after strong interest/participation in AI-EXP-037 — Model Bake-Off: Benchmark competing approaches.

## JANUARY — Break agents

**Monthly coherence.** All three tracks examine **Agent Reliability Lab**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-EXP-016 — Agent Reliability Lab: Form a falsifiable AI hypothesis**  
  **Theme:** experimentation · **Format:** experiment · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible experiment on stress-testing tool use, loops, recovery, approvals, and long-running behavior under controlled failure. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent reliability lab, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-EXP-028 · **Related:** AI-EXP-001, AI-EXP-031 · **Follow-up:** AI-EXP-031, AI-PRT-018

- **AI-EXP-018 — Agent Reliability Lab: Run a tiny experiment and record the result**  
  **Theme:** experimentation · **Format:** challenge · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible challenge on stress-testing tool use, loops, recovery, approvals, and long-running behavior under controlled failure. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent reliability lab, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EXP-003, AI-EXP-032 · **Follow-up:** AI-EXP-032

- **AI-EXP-017 — Agent Reliability Lab: Learn from surprising failures**  
  **Theme:** experimentation · **Format:** debate · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible debate on stress-testing tool use, loops, recovery, approvals, and long-running behavior under controlled failure. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent reliability lab, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EXP-002, AI-EXP-033 · **Follow-up:** AI-EXP-033

### Practitioner

- **AI-EXP-031 — Agent Reliability Lab: Benchmark competing approaches**  
  **Theme:** experimentation · **Format:** experiment · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical experiment applying stress-testing tool use, loops, recovery, approvals, and long-running behavior under controlled failure in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent reliability lab workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EXP-016, AI-EXP-043 · **Related:** AI-EXP-001 · **Follow-up:** AI-EXP-001, AI-PRT-027

- **AI-EXP-032 — Agent Reliability Lab: Design a fair bake-off**  
  **Theme:** experimentation · **Format:** challenge · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical challenge applying stress-testing tool use, loops, recovery, approvals, and long-running behavior under controlled failure in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent reliability lab workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EXP-018 · **Related:** AI-EXP-003 · **Follow-up:** AI-EXP-003

- **AI-EXP-033 — Agent Reliability Lab: Turn experimental evidence into a decision**  
  **Theme:** experimentation · **Format:** debate · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical debate applying stress-testing tool use, loops, recovery, approvals, and long-running behavior under controlled failure in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent reliability lab workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EXP-017 · **Related:** AI-EXP-002 · **Follow-up:** AI-EXP-002

### Advanced

- **AI-EXP-001 — Agent Reliability Lab: Adversarial experiment design**  
  **Theme:** experimentation · **Format:** experiment · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced experiment treating stress-testing tool use, loops, recovery, approvals, and long-running behavior under controlled failure as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent reliability lab, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EXP-013, AI-EXP-031 · **Related:** AI-EXP-016 · **Follow-up:** AI-PRT-009

- **AI-EXP-003 — Agent Reliability Lab: Reproduce, stress, and invalidate claims**  
  **Theme:** experimentation · **Format:** challenge · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced challenge treating stress-testing tool use, loops, recovery, approvals, and long-running behavior under controlled failure as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent reliability lab, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EXP-032 · **Related:** AI-EXP-018 · **Follow-up:** —

- **AI-EXP-002 — Agent Reliability Lab: Build a benchmark that resists gaming**  
  **Theme:** experimentation · **Format:** debate · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced debate treating stress-testing tool use, loops, recovery, approvals, and long-running behavior under controlled failure as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent reliability lab, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EXP-033 · **Related:** AI-EXP-017 · **Follow-up:** —

### Cross-track pathway

**AI-EXP-016 Agent Reliability Lab: Form a falsifiable AI hypothesis** → **AI-EXP-031 Agent Reliability Lab: Benchmark competing approaches** → **AI-EXP-001 Agent Reliability Lab: Adversarial experiment design**

### Voting opportunities

- **Non-negotiable foundation:** AI-EXP-016 — Agent Reliability Lab: Form a falsifiable AI hypothesis. It protects prerequisites for later months.
- **Voting cluster:** AI-EXP-017 — Agent Reliability Lab: Learn from surprising failures; AI-EXP-032 — Agent Reliability Lab: Design a fair bake-off; AI-EXP-033 — Agent Reliability Lab: Turn experimental evidence into a decision; AI-EXP-003 — Agent Reliability Lab: Reproduce, stress, and invalidate claims.
- **Conditional unlock:** AI-EXP-002 — Agent Reliability Lab: Build a benchmark that resists gaming becomes visible after strong interest/participation in AI-EXP-043 — RAG Failure Lab: Benchmark competing approaches.

## FEBRUARY — Force interoperability

**Monthly coherence.** All three tracks examine **Protocol Interoperability Lab**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-PRT-018 — Protocol Interoperability Lab: Why agent protocols exist**  
  **Theme:** protocols · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible hands-on lab on hands-on comparison of MCP, A2A, REST, and event-based integration using the same scenario. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind protocol interoperability lab, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-EXP-016 · **Related:** AI-PRT-009, AI-PRT-027 · **Follow-up:** AI-EVL-018, AI-PRT-027

- **AI-PRT-017 — Protocol Interoperability Lab: Read a protocol flow end to end**  
  **Theme:** protocols · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible architecture clinic on hands-on comparison of MCP, A2A, REST, and event-based integration using the same scenario. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind protocol interoperability lab, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-PRT-008, AI-PRT-025 · **Follow-up:** AI-PRT-025

- **AI-PRT-016 — Protocol Interoperability Lab: MCP, A2A, REST: different jobs**  
  **Theme:** protocols · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible presentation on hands-on comparison of MCP, A2A, REST, and event-based integration using the same scenario. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind protocol interoperability lab, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-PRT-007, AI-PRT-026 · **Follow-up:** AI-PRT-026

### Practitioner

- **AI-PRT-027 — Protocol Interoperability Lab: Implement one interoperable slice**  
  **Theme:** protocols · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical hands-on lab applying hands-on comparison of MCP, A2A, REST, and event-based integration using the same scenario in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic protocol interoperability lab workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EXP-031, AI-PRT-018 · **Related:** AI-PRT-009 · **Follow-up:** AI-EVL-028, AI-PRT-009

- **AI-PRT-025 — Protocol Interoperability Lab: Auth, capabilities, versioning, and contract tests**  
  **Theme:** protocols · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical architecture clinic applying hands-on comparison of MCP, A2A, REST, and event-based integration using the same scenario in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic protocol interoperability lab workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-PRT-017 · **Related:** AI-PRT-008 · **Follow-up:** AI-PRT-008

- **AI-PRT-026 — Protocol Interoperability Lab: Choose protocol boundaries pragmatically**  
  **Theme:** protocols · **Format:** presentation · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical presentation applying hands-on comparison of MCP, A2A, REST, and event-based integration using the same scenario in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic protocol interoperability lab workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-PRT-016 · **Related:** AI-PRT-007 · **Follow-up:** AI-PRT-007

### Advanced

- **AI-PRT-009 — Protocol Interoperability Lab: Protocol architecture and trust boundaries**  
  **Theme:** protocols · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced hands-on lab treating hands-on comparison of MCP, A2A, REST, and event-based integration using the same scenario as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving protocol interoperability lab, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EXP-001, AI-PRT-027 · **Related:** AI-PRT-018 · **Follow-up:** AI-EVL-004

- **AI-PRT-008 — Protocol Interoperability Lab: Interoperability at enterprise scale**  
  **Theme:** protocols · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced architecture clinic treating hands-on comparison of MCP, A2A, REST, and event-based integration using the same scenario as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving protocol interoperability lab, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-PRT-025 · **Related:** AI-PRT-017 · **Follow-up:** —

- **AI-PRT-007 — Protocol Interoperability Lab: Evolve protocols without locking the platform**  
  **Theme:** protocols · **Format:** presentation · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced presentation treating hands-on comparison of MCP, A2A, REST, and event-based integration using the same scenario as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving protocol interoperability lab, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-PRT-026 · **Related:** AI-PRT-016 · **Follow-up:** —

### Cross-track pathway

**AI-PRT-018 Protocol Interoperability Lab: Why agent protocols exist** → **AI-PRT-027 Protocol Interoperability Lab: Implement one interoperable slice** → **AI-PRT-009 Protocol Interoperability Lab: Protocol architecture and trust boundaries**

### Voting opportunities

- **Non-negotiable foundation:** AI-PRT-018 — Protocol Interoperability Lab: Why agent protocols exist. It protects prerequisites for later months.
- **Voting cluster:** AI-PRT-016 — Protocol Interoperability Lab: MCP, A2A, REST: different jobs; AI-PRT-025 — Protocol Interoperability Lab: Auth, capabilities, versioning, and contract tests; AI-PRT-026 — Protocol Interoperability Lab: Choose protocol boundaries pragmatically; AI-PRT-008 — Protocol Interoperability Lab: Interoperability at enterprise scale.
- **Conditional unlock:** AI-PRT-007 — Protocol Interoperability Lab: Evolve protocols without locking the platform becomes visible after strong interest/participation in AI-EXP-031 — Agent Reliability Lab: Benchmark competing approaches.

## MARCH — Attack the metric

**Monthly coherence.** All three tracks examine **Evaluation Challenge**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-EVL-018 — Evaluation Challenge: What does 'good' mean for AI?**  
  **Theme:** evaluation · **Format:** challenge · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible challenge on teams design competing eval suites and discover how metrics, datasets, and graders can mislead. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind evaluation challenge, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-PRT-018 · **Related:** AI-EVL-004, AI-EVL-028 · **Follow-up:** AI-EVL-028, AI-SEC-021

- **AI-EVL-017 — Evaluation Challenge: Turn examples into test cases**  
  **Theme:** evaluation · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on teams design competing eval suites and discover how metrics, datasets, and graders can mislead. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind evaluation challenge, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EVL-006, AI-EVL-030 · **Follow-up:** AI-EVL-030

- **AI-EVL-016 — Evaluation Challenge: Spot flaky, subjective, and misleading metrics**  
  **Theme:** evaluation · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible hands-on lab on teams design competing eval suites and discover how metrics, datasets, and graders can mislead. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind evaluation challenge, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EVL-005, AI-EVL-029 · **Follow-up:** AI-EVL-029

### Practitioner

- **AI-EVL-028 — Evaluation Challenge: Build an eval dataset and scorecard**  
  **Theme:** evaluation · **Format:** challenge · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical challenge applying teams design competing eval suites and discover how metrics, datasets, and graders can mislead in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic evaluation challenge workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EVL-018, AI-PRT-027 · **Related:** AI-EVL-004 · **Follow-up:** AI-EVL-004, AI-SEC-038

- **AI-EVL-030 — Evaluation Challenge: Trace grading, tool-use checks, and regressions**  
  **Theme:** evaluation · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical workshop applying teams design competing eval suites and discover how metrics, datasets, and graders can mislead in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic evaluation challenge workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EVL-017 · **Related:** AI-EVL-006 · **Follow-up:** AI-EVL-006

- **AI-EVL-029 — Evaluation Challenge: Compare prompts, models, and workflows safely**  
  **Theme:** evaluation · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical hands-on lab applying teams design competing eval suites and discover how metrics, datasets, and graders can mislead in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic evaluation challenge workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EVL-016 · **Related:** AI-EVL-005 · **Follow-up:** AI-EVL-005

### Advanced

- **AI-EVL-004 — Evaluation Challenge: Eval-driven system design**  
  **Theme:** evaluation · **Format:** challenge · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced challenge treating teams design competing eval suites and discover how metrics, datasets, and graders can mislead as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving evaluation challenge, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EVL-028, AI-PRT-009 · **Related:** AI-EVL-018 · **Follow-up:** AI-SEC-003

- **AI-EVL-006 — Evaluation Challenge: Macro-evals for multi-step agents**  
  **Theme:** evaluation · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced workshop treating teams design competing eval suites and discover how metrics, datasets, and graders can mislead as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving evaluation challenge, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EVL-030 · **Related:** AI-EVL-017 · **Follow-up:** —

- **AI-EVL-005 — Evaluation Challenge: Judge reliability, leakage, and benchmark gaming**  
  **Theme:** evaluation · **Format:** hands-on lab · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced hands-on lab treating teams design competing eval suites and discover how metrics, datasets, and graders can mislead as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving evaluation challenge, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EVL-029 · **Related:** AI-EVL-016 · **Follow-up:** —

### Cross-track pathway

**AI-EVL-018 Evaluation Challenge: What does 'good' mean for AI?** → **AI-EVL-028 Evaluation Challenge: Build an eval dataset and scorecard** → **AI-EVL-004 Evaluation Challenge: Eval-driven system design**

### Voting opportunities

- **Non-negotiable foundation:** AI-EVL-018 — Evaluation Challenge: What does 'good' mean for AI?. It protects prerequisites for later months.
- **Voting cluster:** AI-EVL-016 — Evaluation Challenge: Spot flaky, subjective, and misleading metrics; AI-EVL-030 — Evaluation Challenge: Trace grading, tool-use checks, and regressions; AI-EVL-029 — Evaluation Challenge: Compare prompts, models, and workflows safely; AI-EVL-006 — Evaluation Challenge: Macro-evals for multi-step agents.
- **Conditional unlock:** AI-EVL-005 — Evaluation Challenge: Judge reliability, leakage, and benchmark gaming becomes visible after strong interest/participation in AI-PRT-027 — Protocol Interoperability Lab: Implement one interoperable slice.

## APRIL — Attack the system

**Monthly coherence.** All three tracks examine **AI Red-Team Lab**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-SEC-021 — AI Red-Team Lab: Threat models for AI features**  
  **Theme:** security · **Format:** presentation · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible presentation on adversarial testing of prompts, tools, retrieval, data boundaries, and approval flows. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai red-team lab, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-EVL-018 · **Related:** AI-SEC-003, AI-SEC-038 · **Follow-up:** AI-OPS-028, AI-SEC-038

- **AI-SEC-020 — AI Red-Team Lab: Prompt injection in plain language**  
  **Theme:** security · **Format:** red-team session · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible red-team session on adversarial testing of prompts, tools, retrieval, data boundaries, and approval flows. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai red-team lab, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-SEC-002, AI-SEC-039 · **Follow-up:** AI-SEC-039

- **AI-SEC-019 — AI Red-Team Lab: Permissions, data boundaries, and safe defaults**  
  **Theme:** security · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible architecture clinic on adversarial testing of prompts, tools, retrieval, data boundaries, and approval flows. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai red-team lab, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-SEC-001, AI-SEC-037 · **Follow-up:** AI-SEC-037

### Practitioner

- **AI-SEC-038 — AI Red-Team Lab: Red-team an AI workflow**  
  **Theme:** security · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical presentation applying adversarial testing of prompts, tools, retrieval, data boundaries, and approval flows in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai red-team lab workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EVL-028, AI-SEC-021 · **Related:** AI-SEC-003 · **Follow-up:** AI-OPS-051, AI-SEC-003

- **AI-SEC-039 — AI Red-Team Lab: Tool permissions, sandboxing, and approval gates**  
  **Theme:** security · **Format:** red-team session · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical red-team session applying adversarial testing of prompts, tools, retrieval, data boundaries, and approval flows in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai red-team lab workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-SEC-020 · **Related:** AI-SEC-002 · **Follow-up:** AI-SEC-002

- **AI-SEC-037 — AI Red-Team Lab: Design defenses for indirect prompt injection**  
  **Theme:** security · **Format:** architecture clinic · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical architecture clinic applying adversarial testing of prompts, tools, retrieval, data boundaries, and approval flows in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai red-team lab workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-SEC-019 · **Related:** AI-SEC-001 · **Follow-up:** AI-SEC-001

### Advanced

- **AI-SEC-003 — AI Red-Team Lab: Security architecture for autonomous agents**  
  **Theme:** security · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced presentation treating adversarial testing of prompts, tools, retrieval, data boundaries, and approval flows as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai red-team lab, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EVL-004, AI-SEC-038 · **Related:** AI-SEC-021 · **Follow-up:** AI-OPS-009

- **AI-SEC-002 — AI Red-Team Lab: Containment, blast radius, and credential boundaries**  
  **Theme:** security · **Format:** red-team session · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced red-team session treating adversarial testing of prompts, tools, retrieval, data boundaries, and approval flows as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai red-team lab, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-SEC-039 · **Related:** AI-SEC-020 · **Follow-up:** —

- **AI-SEC-001 — AI Red-Team Lab: Adversarial evaluation and abuse-case design**  
  **Theme:** security · **Format:** architecture clinic · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced architecture clinic treating adversarial testing of prompts, tools, retrieval, data boundaries, and approval flows as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai red-team lab, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-SEC-037 · **Related:** AI-SEC-019 · **Follow-up:** —

### Cross-track pathway

**AI-SEC-021 AI Red-Team Lab: Threat models for AI features** → **AI-SEC-038 AI Red-Team Lab: Red-team an AI workflow** → **AI-SEC-003 AI Red-Team Lab: Security architecture for autonomous agents**

### Voting opportunities

- **Non-negotiable foundation:** AI-SEC-021 — AI Red-Team Lab: Threat models for AI features. It protects prerequisites for later months.
- **Voting cluster:** AI-SEC-019 — AI Red-Team Lab: Permissions, data boundaries, and safe defaults; AI-SEC-039 — AI Red-Team Lab: Tool permissions, sandboxing, and approval gates; AI-SEC-037 — AI Red-Team Lab: Design defenses for indirect prompt injection; AI-SEC-002 — AI Red-Team Lab: Containment, blast radius, and credential boundaries.
- **Conditional unlock:** AI-SEC-001 — AI Red-Team Lab: Adversarial evaluation and abuse-case design becomes visible after strong interest/participation in AI-EVL-028 — Evaluation Challenge: Build an eval dataset and scorecard.

## MAY — Optimize the system

**Monthly coherence.** All three tracks examine **AI Performance Lab**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-OPS-028 — AI Performance Lab: From demo to service: what changes?**  
  **Theme:** production engineering · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible hands-on lab on measure and optimize latency, cost, caching, streaming, routing, and throughput on a working system. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai performance lab, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-SEC-021 · **Related:** AI-OPS-009, AI-OPS-051 · **Follow-up:** AI-EXP-019, AI-OPS-051

- **AI-OPS-029 — AI Performance Lab: Latency, cost, and reliability basics**  
  **Theme:** production engineering · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on measure and optimize latency, cost, caching, streaming, routing, and throughput on a working system. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai performance lab, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-OPS-007, AI-OPS-049 · **Follow-up:** AI-OPS-049

- **AI-OPS-030 — AI Performance Lab: Simple operational failure modes**  
  **Theme:** production engineering · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible presentation on measure and optimize latency, cost, caching, streaming, routing, and throughput on a working system. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai performance lab, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-OPS-008, AI-OPS-050 · **Follow-up:** AI-OPS-050

### Practitioner

- **AI-OPS-051 — AI Performance Lab: Instrument a production AI path**  
  **Theme:** production engineering · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical hands-on lab applying measure and optimize latency, cost, caching, streaming, routing, and throughput on a working system in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai performance lab workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-028, AI-SEC-038 · **Related:** AI-OPS-009 · **Follow-up:** AI-EXP-034, AI-OPS-009

- **AI-OPS-049 — AI Performance Lab: Caching, fallbacks, and model routing**  
  **Theme:** production engineering · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical architecture clinic applying measure and optimize latency, cost, caching, streaming, routing, and throughput on a working system in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai performance lab workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-029 · **Related:** AI-OPS-007 · **Follow-up:** AI-OPS-007

- **AI-OPS-050 — AI Performance Lab: Design for retries, quotas, and degraded modes**  
  **Theme:** production engineering · **Format:** live coding · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical live coding applying measure and optimize latency, cost, caching, streaming, routing, and throughput on a working system in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai performance lab workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-030 · **Related:** AI-OPS-008 · **Follow-up:** AI-OPS-008

### Advanced

- **AI-OPS-009 — AI Performance Lab: SLOs and reliability architecture**  
  **Theme:** production engineering · **Format:** case study · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced case study treating measure and optimize latency, cost, caching, streaming, routing, and throughput on a working system as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai performance lab, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-051, AI-SEC-003 · **Related:** AI-OPS-028 · **Follow-up:** AI-EXP-004

- **AI-OPS-007 — AI Performance Lab: Cost-quality-latency optimization**  
  **Theme:** production engineering · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced research walkthrough treating measure and optimize latency, cost, caching, streaming, routing, and throughput on a working system as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai performance lab, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-049 · **Related:** AI-OPS-029 · **Follow-up:** —

- **AI-OPS-008 — AI Performance Lab: Incident response for nondeterministic systems**  
  **Theme:** production engineering · **Format:** architecture clinic · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced architecture clinic treating measure and optimize latency, cost, caching, streaming, routing, and throughput on a working system as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai performance lab, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-050 · **Related:** AI-OPS-030 · **Follow-up:** —

### Cross-track pathway

**AI-OPS-028 AI Performance Lab: From demo to service: what changes?** → **AI-OPS-051 AI Performance Lab: Instrument a production AI path** → **AI-OPS-009 AI Performance Lab: SLOs and reliability architecture**

### Voting opportunities

- **Non-negotiable foundation:** AI-OPS-028 — AI Performance Lab: From demo to service: what changes?. It protects prerequisites for later months.
- **Voting cluster:** AI-OPS-030 — AI Performance Lab: Simple operational failure modes; AI-OPS-049 — AI Performance Lab: Caching, fallbacks, and model routing; AI-OPS-050 — AI Performance Lab: Design for retries, quotas, and degraded modes; AI-OPS-007 — AI Performance Lab: Cost-quality-latency optimization.
- **Conditional unlock:** AI-OPS-008 — AI Performance Lab: Incident response for nondeterministic systems becomes visible after strong interest/participation in AI-SEC-038 — AI Red-Team Lab: Red-team an AI workflow.

## JUNE — Explain the evidence

**Monthly coherence.** All three tracks examine **Build-Break-Explain Demo Day**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-EXP-019 — Build-Break-Explain Demo Day: Form a falsifiable AI hypothesis**  
  **Theme:** experimentation · **Format:** debate · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible debate on teams present one AI system, one failure they induced, one measurement they trust, and one lesson they would keep. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind build-break-explain demo day, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-OPS-028 · **Related:** AI-EXP-004, AI-EXP-034 · **Follow-up:** AI-EXP-034

- **AI-EXP-021 — Build-Break-Explain Demo Day: Run a tiny experiment and record the result**  
  **Theme:** experimentation · **Format:** experiment · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible experiment on teams present one AI system, one failure they induced, one measurement they trust, and one lesson they would keep. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind build-break-explain demo day, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EXP-006, AI-EXP-035 · **Follow-up:** AI-EXP-035

- **AI-EXP-020 — Build-Break-Explain Demo Day: Learn from surprising failures**  
  **Theme:** experimentation · **Format:** challenge · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible challenge on teams present one AI system, one failure they induced, one measurement they trust, and one lesson they would keep. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind build-break-explain demo day, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EXP-005, AI-EXP-036 · **Follow-up:** AI-EXP-036

### Practitioner

- **AI-EXP-034 — Build-Break-Explain Demo Day: Benchmark competing approaches**  
  **Theme:** experimentation · **Format:** debate · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical debate applying teams present one AI system, one failure they induced, one measurement they trust, and one lesson they would keep in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic build-break-explain demo day workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EXP-019, AI-OPS-051 · **Related:** AI-EXP-004 · **Follow-up:** AI-EXP-004

- **AI-EXP-035 — Build-Break-Explain Demo Day: Design a fair bake-off**  
  **Theme:** experimentation · **Format:** experiment · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical experiment applying teams present one AI system, one failure they induced, one measurement they trust, and one lesson they would keep in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic build-break-explain demo day workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EXP-021 · **Related:** AI-EXP-006 · **Follow-up:** AI-EXP-006

- **AI-EXP-036 — Build-Break-Explain Demo Day: Turn experimental evidence into a decision**  
  **Theme:** experimentation · **Format:** challenge · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical challenge applying teams present one AI system, one failure they induced, one measurement they trust, and one lesson they would keep in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic build-break-explain demo day workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EXP-020 · **Related:** AI-EXP-005 · **Follow-up:** AI-EXP-005

### Advanced

- **AI-EXP-004 — Build-Break-Explain Demo Day: Adversarial experiment design**  
  **Theme:** experimentation · **Format:** debate · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced debate treating teams present one AI system, one failure they induced, one measurement they trust, and one lesson they would keep as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving build-break-explain demo day, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EXP-034, AI-OPS-009 · **Related:** AI-EXP-019 · **Follow-up:** —

- **AI-EXP-006 — Build-Break-Explain Demo Day: Reproduce, stress, and invalidate claims**  
  **Theme:** experimentation · **Format:** experiment · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced experiment treating teams present one AI system, one failure they induced, one measurement they trust, and one lesson they would keep as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving build-break-explain demo day, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EXP-035 · **Related:** AI-EXP-021 · **Follow-up:** —

- **AI-EXP-005 — Build-Break-Explain Demo Day: Build a benchmark that resists gaming**  
  **Theme:** experimentation · **Format:** challenge · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced challenge treating teams present one AI system, one failure they induced, one measurement they trust, and one lesson they would keep as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving build-break-explain demo day, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EXP-036 · **Related:** AI-EXP-020 · **Follow-up:** —

### Cross-track pathway

**AI-EXP-019 Build-Break-Explain Demo Day: Form a falsifiable AI hypothesis** → **AI-EXP-034 Build-Break-Explain Demo Day: Benchmark competing approaches** → **AI-EXP-004 Build-Break-Explain Demo Day: Adversarial experiment design**

### Voting opportunities

- **Non-negotiable foundation:** AI-EXP-019 — Build-Break-Explain Demo Day: Form a falsifiable AI hypothesis. It protects prerequisites for later months.
- **Voting cluster:** AI-EXP-020 — Build-Break-Explain Demo Day: Learn from surprising failures; AI-EXP-035 — Build-Break-Explain Demo Day: Design a fair bake-off; AI-EXP-036 — Build-Break-Explain Demo Day: Turn experimental evidence into a decision; AI-EXP-006 — Build-Break-Explain Demo Day: Reproduce, stress, and invalidate claims.
- **Conditional unlock:** AI-EXP-005 — Build-Break-Explain Demo Day: Build a benchmark that resists gaming becomes visible after strong interest/participation in AI-OPS-051 — AI Performance Lab: Instrument a production AI path.

## 6. Longitudinal pathways

- **Foundation spine:** Oct [F] AI-EXP-025 Prompt & Context Battle → Dec [F] AI-EXP-028 RAG Failure Lab → Feb [F] AI-PRT-018 Protocol Interoperability Lab → Apr [F] AI-SEC-021 AI Red-Team Lab → Jun [F] AI-EXP-019 Build-Break-Explain Demo Day
- **Practitioner spine:** Oct [P] AI-EXP-040 Prompt & Context Battle → Dec [P] AI-EXP-043 RAG Failure Lab → Feb [P] AI-PRT-027 Protocol Interoperability Lab → Apr [P] AI-SEC-038 AI Red-Team Lab → Jun [P] AI-EXP-034 Build-Break-Explain Demo Day
- **Advanced spine:** Oct [A] AI-EXP-010 Prompt & Context Battle → Dec [A] AI-EXP-013 RAG Failure Lab → Feb [A] AI-PRT-009 Protocol Interoperability Lab → Apr [A] AI-SEC-003 AI Red-Team Lab → Jun [A] AI-EXP-004 Build-Break-Explain Demo Day

## 7. Branching paths

```text
AI-EXP-031 Agent Reliability Lab
├── implementation branch → AI-PRT-025 Protocol Interoperability Lab
├── architecture branch   → AI-EVL-006 Evaluation Challenge
└── frontier branch       → AI-SEC-001 AI Red-Team Lab
```

Member interest can determine which branch receives a live workshop versus becoming optional reading/lab material. The prerequisite spine remains protected.

## 8. Season-level voting model

- **Editorially protected:** first Foundation topic each month, plus any prerequisite explicitly required by a later Core session.
- **Primary voting surface:** Elective Foundation topics, Practitioner trade-off labs, and Advanced architecture alternatives.
- **Unlockable:** Experimental Advanced sessions and frontier branches; reveal only after participation or interest thresholds are met.
- **Wild-card slot:** reserve at least one spring session for an emerging development that passes editorial relevance and evidence checks.

## 9. Simplified programme graph

```text
[Oct] AI-EXP-040 Prompt & Context Battle
      ↓
[Nov] AI-EXP-037 Model Bake-Off
      ↓
[Jan] AI-EXP-031 Agent Reliability Lab
      ↓
[Feb] AI-PRT-027 Protocol Interoperability Lab
      ↓
[Apr] AI-SEC-038 AI Red-Team Lab
      ↓
[Jun] AI-EXP-034 Build-Break-Explain Demo Day
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
- **Production relevance:** 4/5
- **Research orientation:** 4/5
