# P1 — AI Engineering Foundations

> **Understand the machinery before you automate the world.**

## 1. Programme identity

- **Educational philosophy:** A concept-first season that builds durable mental models, then progressively turns them into retrieval, agents, evaluation, security, and production practice.
- **Target audience:** Engineers new to AI engineering plus experienced developers who want a coherent foundation rather than a vendor tutorial.
- **Primary themes:** LLM fundamentals, context, retrieval, agents, evaluation, security, production
- **What makes it different:** It protects conceptual prerequisites and deliberately postpones sophisticated autonomy until members can reason about model limits.
- **Main strengths:** Excellent beginner ramp; coherent dependencies; durable; balanced theory-to-practice.
- **Potential weaknesses:** Less immediately flashy for members already shipping agent systems; some advanced specialists may find Q4 slow.
- **Expected difficulty profile:** Foundation-heavy in Q4, balanced by January, advanced depth rises sharply from March onward.

**Why it deserves to exist independently:** It protects conceptual prerequisites and deliberately postpones sophisticated autonomy until members can reason about model limits. That creates a different set of curriculum trade-offs, voting clusters, and capstone outcomes than the other reference seasons.

## 2. Season narrative

**October — See the machine:** LLM Mental Models
↓
**November — Control the interaction:** Prompting as Interface Design
↓
**December — Represent meaning:** Embeddings & Semantic Search
↓
**January — Ground the model:** RAG Systems
↓
**February — Give it actions:** Agent Fundamentals
↓
**March — Measure behavior:** Evaluation-Driven AI Engineering
↓
**April — Defend boundaries:** AI Security Fundamentals
↓
**May — Operate reliably:** Production AI Fundamentals
↓
**June — Integrate everything:** Integrated AI System Capstone

## 3–5. Month-by-month curriculum, coherence, and cross-track pathways

## OCTOBER — See the machine

**Monthly coherence.** All three tracks examine **LLM Mental Models**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-FND-005 — LLM Mental Models: Mental model without the magic**  
  **Theme:** fundamentals · **Format:** presentation · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible presentation on tokens, probability, generation, context windows, and why fluent output is not the same as grounded knowledge. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind llm mental models, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-FND-001, AI-FND-007 · **Follow-up:** AI-CTX-012, AI-FND-007

- **AI-FND-006 — LLM Mental Models: Vocabulary, examples, and tiny experiments**  
  **Theme:** fundamentals · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible hands-on lab on tokens, probability, generation, context windows, and why fluent output is not the same as grounded knowledge. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind llm mental models, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-FND-002, AI-FND-009 · **Follow-up:** AI-FND-009

- **AI-FND-004 — LLM Mental Models: Failure modes you should recognize**  
  **Theme:** fundamentals · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible workshop on tokens, probability, generation, context windows, and why fluent output is not the same as grounded knowledge. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind llm mental models, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-FND-003, AI-FND-008 · **Follow-up:** AI-FND-008

### Practitioner

- **AI-FND-007 — LLM Mental Models: Build the smallest useful version**  
  **Theme:** fundamentals · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical live coding applying tokens, probability, generation, context windows, and why fluent output is not the same as grounded knowledge in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic llm mental models workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-FND-005 · **Related:** AI-FND-001 · **Follow-up:** AI-CTX-018, AI-FND-001

- **AI-FND-009 — LLM Mental Models: Trade-off lab with real inputs**  
  **Theme:** fundamentals · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical hands-on lab applying tokens, probability, generation, context windows, and why fluent output is not the same as grounded knowledge in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic llm mental models workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-FND-006 · **Related:** AI-FND-002 · **Follow-up:** AI-FND-002

- **AI-FND-008 — LLM Mental Models: Testing, debugging, and edge cases**  
  **Theme:** fundamentals · **Format:** architecture clinic · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical architecture clinic applying tokens, probability, generation, context windows, and why fluent output is not the same as grounded knowledge in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic llm mental models workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-FND-004 · **Related:** AI-FND-003 · **Follow-up:** AI-FND-003

### Advanced

- **AI-FND-001 — LLM Mental Models: Architecture and implementation clinic**  
  **Theme:** fundamentals · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced architecture clinic treating tokens, probability, generation, context windows, and why fluent output is not the same as grounded knowledge as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving llm mental models, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-FND-007 · **Related:** AI-FND-005 · **Follow-up:** AI-CTX-005

- **AI-FND-002 — LLM Mental Models: Reliability, limits, and scale**  
  **Theme:** fundamentals · **Format:** case study · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced case study treating tokens, probability, generation, context windows, and why fluent output is not the same as grounded knowledge as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving llm mental models, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-FND-009 · **Related:** AI-FND-006 · **Follow-up:** —

- **AI-FND-003 — LLM Mental Models: What changes when the assumptions break**  
  **Theme:** fundamentals · **Format:** research walkthrough · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced research walkthrough treating tokens, probability, generation, context windows, and why fluent output is not the same as grounded knowledge as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving llm mental models, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-FND-008 · **Related:** AI-FND-004 · **Follow-up:** —

### Cross-track pathway

**AI-FND-005 LLM Mental Models: Mental model without the magic** → **AI-FND-007 LLM Mental Models: Build the smallest useful version** → **AI-FND-001 LLM Mental Models: Architecture and implementation clinic**

### Voting opportunities

- **Non-negotiable foundation:** AI-FND-005 — LLM Mental Models: Mental model without the magic. It protects prerequisites for later months.
- **Voting cluster:** AI-FND-004 — LLM Mental Models: Failure modes you should recognize; AI-FND-009 — LLM Mental Models: Trade-off lab with real inputs; AI-FND-008 — LLM Mental Models: Testing, debugging, and edge cases; AI-FND-002 — LLM Mental Models: Reliability, limits, and scale.
- **Conditional unlock:** AI-FND-003 — LLM Mental Models: What changes when the assumptions break becomes visible after AI-FND-005 or another October prerequisite.

## NOVEMBER — Control the interaction

**Monthly coherence.** All three tracks examine **Prompting as Interface Design**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-CTX-012 — Prompting as Interface Design: What actually enters the context window?**  
  **Theme:** context engineering · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible hands-on lab on instructions, examples, structured outputs, contracts, and the boundary between prompt wording and system design. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind prompting as interface design, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-FND-005 · **Related:** AI-CTX-005, AI-CTX-018 · **Follow-up:** AI-CTX-018, AI-RET-015

- **AI-CTX-011 — Prompting as Interface Design: Instructions, examples, history, and tools**  
  **Theme:** context engineering · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on instructions, examples, structured outputs, contracts, and the boundary between prompt wording and system design. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind prompting as interface design, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-CTX-004, AI-CTX-017 · **Follow-up:** AI-CTX-017

- **AI-CTX-010 — Prompting as Interface Design: Context overload and context rot**  
  **Theme:** context engineering · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible presentation on instructions, examples, structured outputs, contracts, and the boundary between prompt wording and system design. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind prompting as interface design, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-CTX-006, AI-CTX-016 · **Follow-up:** AI-CTX-016

### Practitioner

- **AI-CTX-018 — Prompting as Interface Design: Design a context pipeline**  
  **Theme:** context engineering · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical hands-on lab applying instructions, examples, structured outputs, contracts, and the boundary between prompt wording and system design in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic prompting as interface design workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-CTX-012, AI-FND-007 · **Related:** AI-CTX-005 · **Follow-up:** AI-CTX-005, AI-RET-025

- **AI-CTX-017 — Prompting as Interface Design: Compaction, memory, and just-in-time retrieval**  
  **Theme:** context engineering · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical architecture clinic applying instructions, examples, structured outputs, contracts, and the boundary between prompt wording and system design in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic prompting as interface design workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-CTX-011 · **Related:** AI-CTX-004 · **Follow-up:** AI-CTX-004

- **AI-CTX-016 — Prompting as Interface Design: Audit a bloated agent context**  
  **Theme:** context engineering · **Format:** live coding · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical live coding applying instructions, examples, structured outputs, contracts, and the boundary between prompt wording and system design in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic prompting as interface design workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-CTX-010 · **Related:** AI-CTX-006 · **Follow-up:** AI-CTX-006

### Advanced

- **AI-CTX-005 — Prompting as Interface Design: Context architecture for long-running systems**  
  **Theme:** context engineering · **Format:** case study · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced case study treating instructions, examples, structured outputs, contracts, and the boundary between prompt wording and system design as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving prompting as interface design, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-CTX-018, AI-FND-001 · **Related:** AI-CTX-012 · **Follow-up:** AI-RET-003

- **AI-CTX-004 — Prompting as Interface Design: Attention budgets, routing, and subagents**  
  **Theme:** context engineering · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced research walkthrough treating instructions, examples, structured outputs, contracts, and the boundary between prompt wording and system design as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving prompting as interface design, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-CTX-017 · **Related:** AI-CTX-011 · **Follow-up:** —

- **AI-CTX-006 — Prompting as Interface Design: Context policy as a system boundary**  
  **Theme:** context engineering · **Format:** architecture clinic · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced architecture clinic treating instructions, examples, structured outputs, contracts, and the boundary between prompt wording and system design as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving prompting as interface design, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-CTX-016 · **Related:** AI-CTX-010 · **Follow-up:** —

### Cross-track pathway

**AI-CTX-012 Prompting as Interface Design: What actually enters the context window?** → **AI-CTX-018 Prompting as Interface Design: Design a context pipeline** → **AI-CTX-005 Prompting as Interface Design: Context architecture for long-running systems**

### Voting opportunities

- **Non-negotiable foundation:** AI-CTX-012 — Prompting as Interface Design: What actually enters the context window?. It protects prerequisites for later months.
- **Voting cluster:** AI-CTX-010 — Prompting as Interface Design: Context overload and context rot; AI-CTX-017 — Prompting as Interface Design: Compaction, memory, and just-in-time retrieval; AI-CTX-016 — Prompting as Interface Design: Audit a bloated agent context; AI-CTX-004 — Prompting as Interface Design: Attention budgets, routing, and subagents.
- **Conditional unlock:** AI-CTX-006 — Prompting as Interface Design: Context policy as a system boundary becomes visible after strong interest/participation in AI-FND-007 — LLM Mental Models: Build the smallest useful version.

## DECEMBER — Represent meaning

**Monthly coherence.** All three tracks examine **Embeddings & Semantic Search**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-RET-015 — Embeddings & Semantic Search: Why retrieval changes the answer**  
  **Theme:** retrieval / RAG · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible workshop on vector representations, similarity, chunk semantics, and when embeddings are useful or misleading. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind embeddings & semantic search, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-CTX-012 · **Related:** AI-RET-003, AI-RET-025 · **Follow-up:** AI-RET-018, AI-RET-025

- **AI-RET-013 — Embeddings & Semantic Search: Chunks, embeddings, and similarity by hand**  
  **Theme:** retrieval / RAG · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible presentation on vector representations, similarity, chunk semantics, and when embeddings are useful or misleading. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind embeddings & semantic search, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RET-002, AI-RET-027 · **Follow-up:** AI-RET-027

- **AI-RET-014 — Embeddings & Semantic Search: Grounding, citations, and obvious failure modes**  
  **Theme:** retrieval / RAG · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible hands-on lab on vector representations, similarity, chunk semantics, and when embeddings are useful or misleading. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind embeddings & semantic search, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RET-001, AI-RET-026 · **Follow-up:** AI-RET-026

### Practitioner

- **AI-RET-025 — Embeddings & Semantic Search: Build a retrieval pipeline end to end**  
  **Theme:** retrieval / RAG · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical architecture clinic applying vector representations, similarity, chunk semantics, and when embeddings are useful or misleading in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic embeddings & semantic search workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-CTX-018, AI-RET-015 · **Related:** AI-RET-003 · **Follow-up:** AI-RET-003, AI-RET-028

- **AI-RET-027 — Embeddings & Semantic Search: Hybrid search, reranking, and query rewriting**  
  **Theme:** retrieval / RAG · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical live coding applying vector representations, similarity, chunk semantics, and when embeddings are useful or misleading in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic embeddings & semantic search workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RET-013 · **Related:** AI-RET-002 · **Follow-up:** AI-RET-002

- **AI-RET-026 — Embeddings & Semantic Search: Evaluate retrieval before generation**  
  **Theme:** retrieval / RAG · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical hands-on lab applying vector representations, similarity, chunk semantics, and when embeddings are useful or misleading in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic embeddings & semantic search workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RET-014 · **Related:** AI-RET-001 · **Follow-up:** AI-RET-001

### Advanced

- **AI-RET-003 — Embeddings & Semantic Search: Retrieval architecture clinic**  
  **Theme:** retrieval / RAG · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced research walkthrough treating vector representations, similarity, chunk semantics, and when embeddings are useful or misleading as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving embeddings & semantic search, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-CTX-005, AI-RET-025 · **Related:** AI-RET-015 · **Follow-up:** AI-RET-006

- **AI-RET-002 — Embeddings & Semantic Search: Freshness, permissions, and multi-index design**  
  **Theme:** retrieval / RAG · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced architecture clinic treating vector representations, similarity, chunk semantics, and when embeddings are useful or misleading as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving embeddings & semantic search, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RET-027 · **Related:** AI-RET-013 · **Follow-up:** —

- **AI-RET-001 — Embeddings & Semantic Search: Agentic retrieval and adaptive search**  
  **Theme:** retrieval / RAG · **Format:** case study · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced case study treating vector representations, similarity, chunk semantics, and when embeddings are useful or misleading as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving embeddings & semantic search, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RET-026 · **Related:** AI-RET-014 · **Follow-up:** —

### Cross-track pathway

**AI-RET-015 Embeddings & Semantic Search: Why retrieval changes the answer** → **AI-RET-025 Embeddings & Semantic Search: Build a retrieval pipeline end to end** → **AI-RET-003 Embeddings & Semantic Search: Retrieval architecture clinic**

### Voting opportunities

- **Non-negotiable foundation:** AI-RET-015 — Embeddings & Semantic Search: Why retrieval changes the answer. It protects prerequisites for later months.
- **Voting cluster:** AI-RET-014 — Embeddings & Semantic Search: Grounding, citations, and obvious failure modes; AI-RET-027 — Embeddings & Semantic Search: Hybrid search, reranking, and query rewriting; AI-RET-026 — Embeddings & Semantic Search: Evaluate retrieval before generation; AI-RET-002 — Embeddings & Semantic Search: Freshness, permissions, and multi-index design.
- **Conditional unlock:** AI-RET-001 — Embeddings & Semantic Search: Agentic retrieval and adaptive search becomes visible after strong interest/participation in AI-CTX-018 — Prompting as Interface Design: Design a context pipeline.

## JANUARY — Ground the model

**Monthly coherence.** All three tracks examine **RAG Systems**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-RET-018 — RAG Systems: Why retrieval changes the answer**  
  **Theme:** retrieval / RAG · **Format:** presentation · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible presentation on retrieval-augmented generation from indexing through grounding, citations, evaluation, and freshness. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind rag systems, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-RET-015 · **Related:** AI-RET-006, AI-RET-028 · **Follow-up:** AI-AGT-031, AI-RET-028

- **AI-RET-016 — RAG Systems: Chunks, embeddings, and similarity by hand**  
  **Theme:** retrieval / RAG · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible hands-on lab on retrieval-augmented generation from indexing through grounding, citations, evaluation, and freshness. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind rag systems, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RET-005, AI-RET-030 · **Follow-up:** AI-RET-030

- **AI-RET-017 — RAG Systems: Grounding, citations, and obvious failure modes**  
  **Theme:** retrieval / RAG · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible workshop on retrieval-augmented generation from indexing through grounding, citations, evaluation, and freshness. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind rag systems, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RET-004, AI-RET-029 · **Follow-up:** AI-RET-029

### Practitioner

- **AI-RET-028 — RAG Systems: Build a retrieval pipeline end to end**  
  **Theme:** retrieval / RAG · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical live coding applying retrieval-augmented generation from indexing through grounding, citations, evaluation, and freshness in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic rag systems workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RET-018, AI-RET-025 · **Related:** AI-RET-006 · **Follow-up:** AI-AGT-058, AI-RET-006

- **AI-RET-030 — RAG Systems: Hybrid search, reranking, and query rewriting**  
  **Theme:** retrieval / RAG · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical hands-on lab applying retrieval-augmented generation from indexing through grounding, citations, evaluation, and freshness in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic rag systems workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RET-016 · **Related:** AI-RET-005 · **Follow-up:** AI-RET-005

- **AI-RET-029 — RAG Systems: Evaluate retrieval before generation**  
  **Theme:** retrieval / RAG · **Format:** architecture clinic · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical architecture clinic applying retrieval-augmented generation from indexing through grounding, citations, evaluation, and freshness in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic rag systems workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RET-017 · **Related:** AI-RET-004 · **Follow-up:** AI-RET-004

### Advanced

- **AI-RET-006 — RAG Systems: Retrieval architecture clinic**  
  **Theme:** retrieval / RAG · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced architecture clinic treating retrieval-augmented generation from indexing through grounding, citations, evaluation, and freshness as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving rag systems, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RET-003, AI-RET-028 · **Related:** AI-RET-018 · **Follow-up:** AI-AGT-004

- **AI-RET-005 — RAG Systems: Freshness, permissions, and multi-index design**  
  **Theme:** retrieval / RAG · **Format:** case study · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced case study treating retrieval-augmented generation from indexing through grounding, citations, evaluation, and freshness as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving rag systems, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RET-030 · **Related:** AI-RET-016 · **Follow-up:** —

- **AI-RET-004 — RAG Systems: Agentic retrieval and adaptive search**  
  **Theme:** retrieval / RAG · **Format:** research walkthrough · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced research walkthrough treating retrieval-augmented generation from indexing through grounding, citations, evaluation, and freshness as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving rag systems, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RET-029 · **Related:** AI-RET-017 · **Follow-up:** —

### Cross-track pathway

**AI-RET-018 RAG Systems: Why retrieval changes the answer** → **AI-RET-028 RAG Systems: Build a retrieval pipeline end to end** → **AI-RET-006 RAG Systems: Retrieval architecture clinic**

### Voting opportunities

- **Non-negotiable foundation:** AI-RET-018 — RAG Systems: Why retrieval changes the answer. It protects prerequisites for later months.
- **Voting cluster:** AI-RET-017 — RAG Systems: Grounding, citations, and obvious failure modes; AI-RET-030 — RAG Systems: Hybrid search, reranking, and query rewriting; AI-RET-029 — RAG Systems: Evaluate retrieval before generation; AI-RET-005 — RAG Systems: Freshness, permissions, and multi-index design.
- **Conditional unlock:** AI-RET-004 — RAG Systems: Agentic retrieval and adaptive search becomes visible after strong interest/participation in AI-RET-025 — Embeddings & Semantic Search: Build a retrieval pipeline end to end.

## FEBRUARY — Give it actions

**Monthly coherence.** All three tracks examine **Agent Fundamentals**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-AGT-031 — Agent Fundamentals: Agent, workflow, or chatbot?**  
  **Theme:** agents · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible hands-on lab on tool-using loops, state, stop conditions, autonomy, and the distinction between workflows and agents. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent fundamentals, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-RET-018 · **Related:** AI-AGT-004, AI-AGT-058 · **Follow-up:** AI-AGT-058, AI-EVL-021

- **AI-AGT-032 — Agent Fundamentals: Tools, state, loops, and stop conditions**  
  **Theme:** agents · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on tool-using loops, state, stop conditions, autonomy, and the distinction between workflows and agents. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent fundamentals, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-005, AI-AGT-060 · **Follow-up:** AI-AGT-060

- **AI-AGT-033 — Agent Fundamentals: When autonomy makes things worse**  
  **Theme:** agents · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible presentation on tool-using loops, state, stop conditions, autonomy, and the distinction between workflows and agents. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent fundamentals, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-006, AI-AGT-059 · **Follow-up:** AI-AGT-059

### Practitioner

- **AI-AGT-058 — Agent Fundamentals: Build an agent with tools**  
  **Theme:** agents · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical hands-on lab applying tool-using loops, state, stop conditions, autonomy, and the distinction between workflows and agents in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent fundamentals workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-031, AI-RET-028 · **Related:** AI-AGT-004 · **Follow-up:** AI-AGT-004, AI-EVL-031

- **AI-AGT-060 — Agent Fundamentals: State, memory, and recovery paths**  
  **Theme:** agents · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical architecture clinic applying tool-using loops, state, stop conditions, autonomy, and the distinction between workflows and agents in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent fundamentals workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-032 · **Related:** AI-AGT-005 · **Follow-up:** AI-AGT-005

- **AI-AGT-059 — Agent Fundamentals: Human approval and controllable autonomy**  
  **Theme:** agents · **Format:** live coding · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical live coding applying tool-using loops, state, stop conditions, autonomy, and the distinction between workflows and agents in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent fundamentals workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-033 · **Related:** AI-AGT-006 · **Follow-up:** AI-AGT-006

### Advanced

- **AI-AGT-004 — Agent Fundamentals: Agent orchestration architecture clinic**  
  **Theme:** agents · **Format:** case study · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced case study treating tool-using loops, state, stop conditions, autonomy, and the distinction between workflows and agents as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent fundamentals, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-058, AI-RET-006 · **Related:** AI-AGT-031 · **Follow-up:** AI-EVL-007

- **AI-AGT-005 — Agent Fundamentals: Long-horizon reliability and failure recovery**  
  **Theme:** agents · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced research walkthrough treating tool-using loops, state, stop conditions, autonomy, and the distinction between workflows and agents as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent fundamentals, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-060 · **Related:** AI-AGT-032 · **Follow-up:** —

- **AI-AGT-006 — Agent Fundamentals: Multi-agent coordination and emergent failure**  
  **Theme:** agents · **Format:** architecture clinic · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced architecture clinic treating tool-using loops, state, stop conditions, autonomy, and the distinction between workflows and agents as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent fundamentals, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-059 · **Related:** AI-AGT-033 · **Follow-up:** —

### Cross-track pathway

**AI-AGT-031 Agent Fundamentals: Agent, workflow, or chatbot?** → **AI-AGT-058 Agent Fundamentals: Build an agent with tools** → **AI-AGT-004 Agent Fundamentals: Agent orchestration architecture clinic**

### Voting opportunities

- **Non-negotiable foundation:** AI-AGT-031 — Agent Fundamentals: Agent, workflow, or chatbot?. It protects prerequisites for later months.
- **Voting cluster:** AI-AGT-033 — Agent Fundamentals: When autonomy makes things worse; AI-AGT-060 — Agent Fundamentals: State, memory, and recovery paths; AI-AGT-059 — Agent Fundamentals: Human approval and controllable autonomy; AI-AGT-005 — Agent Fundamentals: Long-horizon reliability and failure recovery.
- **Conditional unlock:** AI-AGT-006 — Agent Fundamentals: Multi-agent coordination and emergent failure becomes visible after strong interest/participation in AI-RET-028 — RAG Systems: Build a retrieval pipeline end to end.

## MARCH — Measure behavior

**Monthly coherence.** All three tracks examine **Evaluation-Driven AI Engineering**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-EVL-021 — Evaluation-Driven AI Engineering: What does 'good' mean for AI?**  
  **Theme:** evaluation · **Format:** challenge · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible challenge on datasets, graders, traces, regression checks, and quality gates for nondeterministic systems. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind evaluation-driven ai engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-AGT-031 · **Related:** AI-EVL-007, AI-EVL-031 · **Follow-up:** AI-EVL-031, AI-OPS-025, AI-SEC-024

- **AI-EVL-020 — Evaluation-Driven AI Engineering: Turn examples into test cases**  
  **Theme:** evaluation · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on datasets, graders, traces, regression checks, and quality gates for nondeterministic systems. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind evaluation-driven ai engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EVL-009, AI-EVL-033 · **Follow-up:** AI-EVL-033

- **AI-EVL-019 — Evaluation-Driven AI Engineering: Spot flaky, subjective, and misleading metrics**  
  **Theme:** evaluation · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible hands-on lab on datasets, graders, traces, regression checks, and quality gates for nondeterministic systems. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind evaluation-driven ai engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EVL-008, AI-EVL-032 · **Follow-up:** AI-EVL-032

### Practitioner

- **AI-EVL-031 — Evaluation-Driven AI Engineering: Build an eval dataset and scorecard**  
  **Theme:** evaluation · **Format:** challenge · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical challenge applying datasets, graders, traces, regression checks, and quality gates for nondeterministic systems in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic evaluation-driven ai engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-058, AI-EVL-021 · **Related:** AI-EVL-007 · **Follow-up:** AI-EVL-007, AI-OPS-048, AI-SEC-041

- **AI-EVL-033 — Evaluation-Driven AI Engineering: Trace grading, tool-use checks, and regressions**  
  **Theme:** evaluation · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical workshop applying datasets, graders, traces, regression checks, and quality gates for nondeterministic systems in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic evaluation-driven ai engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EVL-020 · **Related:** AI-EVL-009 · **Follow-up:** AI-EVL-009

- **AI-EVL-032 — Evaluation-Driven AI Engineering: Compare prompts, models, and workflows safely**  
  **Theme:** evaluation · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical hands-on lab applying datasets, graders, traces, regression checks, and quality gates for nondeterministic systems in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic evaluation-driven ai engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EVL-019 · **Related:** AI-EVL-008 · **Follow-up:** AI-EVL-008

### Advanced

- **AI-EVL-007 — Evaluation-Driven AI Engineering: Eval-driven system design**  
  **Theme:** evaluation · **Format:** challenge · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced challenge treating datasets, graders, traces, regression checks, and quality gates for nondeterministic systems as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving evaluation-driven ai engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-004, AI-EVL-031 · **Related:** AI-EVL-021 · **Follow-up:** AI-OPS-006, AI-SEC-006

- **AI-EVL-009 — Evaluation-Driven AI Engineering: Macro-evals for multi-step agents**  
  **Theme:** evaluation · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced workshop treating datasets, graders, traces, regression checks, and quality gates for nondeterministic systems as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving evaluation-driven ai engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EVL-033 · **Related:** AI-EVL-020 · **Follow-up:** —

- **AI-EVL-008 — Evaluation-Driven AI Engineering: Judge reliability, leakage, and benchmark gaming**  
  **Theme:** evaluation · **Format:** hands-on lab · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced hands-on lab treating datasets, graders, traces, regression checks, and quality gates for nondeterministic systems as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving evaluation-driven ai engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EVL-032 · **Related:** AI-EVL-019 · **Follow-up:** —

### Cross-track pathway

**AI-EVL-021 Evaluation-Driven AI Engineering: What does 'good' mean for AI?** → **AI-EVL-031 Evaluation-Driven AI Engineering: Build an eval dataset and scorecard** → **AI-EVL-007 Evaluation-Driven AI Engineering: Eval-driven system design**

### Voting opportunities

- **Non-negotiable foundation:** AI-EVL-021 — Evaluation-Driven AI Engineering: What does 'good' mean for AI?. It protects prerequisites for later months.
- **Voting cluster:** AI-EVL-019 — Evaluation-Driven AI Engineering: Spot flaky, subjective, and misleading metrics; AI-EVL-033 — Evaluation-Driven AI Engineering: Trace grading, tool-use checks, and regressions; AI-EVL-032 — Evaluation-Driven AI Engineering: Compare prompts, models, and workflows safely; AI-EVL-009 — Evaluation-Driven AI Engineering: Macro-evals for multi-step agents.
- **Conditional unlock:** AI-EVL-008 — Evaluation-Driven AI Engineering: Judge reliability, leakage, and benchmark gaming becomes visible after strong interest/participation in AI-AGT-058 — Agent Fundamentals: Build an agent with tools.

## APRIL — Defend boundaries

**Monthly coherence.** All three tracks examine **AI Security Fundamentals**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-SEC-024 — AI Security Fundamentals: Threat models for AI features**  
  **Theme:** security · **Format:** presentation · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible presentation on prompt injection, tool abuse, data boundaries, permissions, containment, and adversarial testing. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai security fundamentals, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-EVL-021 · **Related:** AI-SEC-006, AI-SEC-041 · **Follow-up:** AI-OPS-040, AI-SEC-041

- **AI-SEC-023 — AI Security Fundamentals: Prompt injection in plain language**  
  **Theme:** security · **Format:** red-team session · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible red-team session on prompt injection, tool abuse, data boundaries, permissions, containment, and adversarial testing. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai security fundamentals, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-SEC-005, AI-SEC-042 · **Follow-up:** AI-SEC-042

- **AI-SEC-022 — AI Security Fundamentals: Permissions, data boundaries, and safe defaults**  
  **Theme:** security · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible architecture clinic on prompt injection, tool abuse, data boundaries, permissions, containment, and adversarial testing. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai security fundamentals, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-SEC-004, AI-SEC-040 · **Follow-up:** AI-SEC-040

### Practitioner

- **AI-SEC-041 — AI Security Fundamentals: Red-team an AI workflow**  
  **Theme:** security · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical presentation applying prompt injection, tool abuse, data boundaries, permissions, containment, and adversarial testing in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai security fundamentals workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EVL-031, AI-SEC-024 · **Related:** AI-SEC-006 · **Follow-up:** AI-OPS-063, AI-SEC-006

- **AI-SEC-042 — AI Security Fundamentals: Tool permissions, sandboxing, and approval gates**  
  **Theme:** security · **Format:** red-team session · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical red-team session applying prompt injection, tool abuse, data boundaries, permissions, containment, and adversarial testing in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai security fundamentals workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-SEC-023 · **Related:** AI-SEC-005 · **Follow-up:** AI-SEC-005

- **AI-SEC-040 — AI Security Fundamentals: Design defenses for indirect prompt injection**  
  **Theme:** security · **Format:** architecture clinic · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical architecture clinic applying prompt injection, tool abuse, data boundaries, permissions, containment, and adversarial testing in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai security fundamentals workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-SEC-022 · **Related:** AI-SEC-004 · **Follow-up:** AI-SEC-004

### Advanced

- **AI-SEC-006 — AI Security Fundamentals: Security architecture for autonomous agents**  
  **Theme:** security · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced presentation treating prompt injection, tool abuse, data boundaries, permissions, containment, and adversarial testing as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai security fundamentals, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EVL-007, AI-SEC-041 · **Related:** AI-SEC-024 · **Follow-up:** AI-OPS-021

- **AI-SEC-005 — AI Security Fundamentals: Containment, blast radius, and credential boundaries**  
  **Theme:** security · **Format:** red-team session · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced red-team session treating prompt injection, tool abuse, data boundaries, permissions, containment, and adversarial testing as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai security fundamentals, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-SEC-042 · **Related:** AI-SEC-023 · **Follow-up:** —

- **AI-SEC-004 — AI Security Fundamentals: Adversarial evaluation and abuse-case design**  
  **Theme:** security · **Format:** architecture clinic · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced architecture clinic treating prompt injection, tool abuse, data boundaries, permissions, containment, and adversarial testing as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai security fundamentals, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-SEC-040 · **Related:** AI-SEC-022 · **Follow-up:** —

### Cross-track pathway

**AI-SEC-024 AI Security Fundamentals: Threat models for AI features** → **AI-SEC-041 AI Security Fundamentals: Red-team an AI workflow** → **AI-SEC-006 AI Security Fundamentals: Security architecture for autonomous agents**

### Voting opportunities

- **Non-negotiable foundation:** AI-SEC-024 — AI Security Fundamentals: Threat models for AI features. It protects prerequisites for later months.
- **Voting cluster:** AI-SEC-022 — AI Security Fundamentals: Permissions, data boundaries, and safe defaults; AI-SEC-042 — AI Security Fundamentals: Tool permissions, sandboxing, and approval gates; AI-SEC-040 — AI Security Fundamentals: Design defenses for indirect prompt injection; AI-SEC-005 — AI Security Fundamentals: Containment, blast radius, and credential boundaries.
- **Conditional unlock:** AI-SEC-004 — AI Security Fundamentals: Adversarial evaluation and abuse-case design becomes visible after strong interest/participation in AI-EVL-031 — Evaluation-Driven AI Engineering: Build an eval dataset and scorecard.

## MAY — Operate reliably

**Monthly coherence.** All three tracks examine **Production AI Fundamentals**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-OPS-040 — Production AI Fundamentals: From demo to service: what changes?**  
  **Theme:** production engineering · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible hands-on lab on observability, latency, cost, reliability, fallbacks, SLOs, and incident-ready AI services. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind production ai fundamentals, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-SEC-024 · **Related:** AI-OPS-021, AI-OPS-063 · **Follow-up:** AI-ARC-046, AI-OPS-063

- **AI-OPS-041 — Production AI Fundamentals: Latency, cost, and reliability basics**  
  **Theme:** production engineering · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on observability, latency, cost, reliability, fallbacks, SLOs, and incident-ready AI services. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind production ai fundamentals, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-OPS-019, AI-OPS-061 · **Follow-up:** AI-OPS-061

- **AI-OPS-042 — Production AI Fundamentals: Simple operational failure modes**  
  **Theme:** production engineering · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible presentation on observability, latency, cost, reliability, fallbacks, SLOs, and incident-ready AI services. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind production ai fundamentals, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-OPS-020, AI-OPS-062 · **Follow-up:** AI-OPS-062

### Practitioner

- **AI-OPS-063 — Production AI Fundamentals: Instrument a production AI path**  
  **Theme:** production engineering · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical hands-on lab applying observability, latency, cost, reliability, fallbacks, SLOs, and incident-ready AI services in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic production ai fundamentals workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-040, AI-SEC-041 · **Related:** AI-OPS-021 · **Follow-up:** AI-ARC-080, AI-OPS-021

- **AI-OPS-061 — Production AI Fundamentals: Caching, fallbacks, and model routing**  
  **Theme:** production engineering · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical architecture clinic applying observability, latency, cost, reliability, fallbacks, SLOs, and incident-ready AI services in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic production ai fundamentals workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-041 · **Related:** AI-OPS-019 · **Follow-up:** AI-OPS-019

- **AI-OPS-062 — Production AI Fundamentals: Design for retries, quotas, and degraded modes**  
  **Theme:** production engineering · **Format:** live coding · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical live coding applying observability, latency, cost, reliability, fallbacks, SLOs, and incident-ready AI services in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic production ai fundamentals workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-OPS-042 · **Related:** AI-OPS-020 · **Follow-up:** AI-OPS-020

### Advanced

- **AI-OPS-021 — Production AI Fundamentals: SLOs and reliability architecture**  
  **Theme:** production engineering · **Format:** case study · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced case study treating observability, latency, cost, reliability, fallbacks, SLOs, and incident-ready AI services as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving production ai fundamentals, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-063, AI-SEC-006 · **Related:** AI-OPS-040 · **Follow-up:** AI-ARC-013

- **AI-OPS-019 — Production AI Fundamentals: Cost-quality-latency optimization**  
  **Theme:** production engineering · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced research walkthrough treating observability, latency, cost, reliability, fallbacks, SLOs, and incident-ready AI services as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving production ai fundamentals, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-061 · **Related:** AI-OPS-041 · **Follow-up:** —

- **AI-OPS-020 — Production AI Fundamentals: Incident response for nondeterministic systems**  
  **Theme:** production engineering · **Format:** architecture clinic · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced architecture clinic treating observability, latency, cost, reliability, fallbacks, SLOs, and incident-ready AI services as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving production ai fundamentals, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-OPS-062 · **Related:** AI-OPS-042 · **Follow-up:** —

### Cross-track pathway

**AI-OPS-040 Production AI Fundamentals: From demo to service: what changes?** → **AI-OPS-063 Production AI Fundamentals: Instrument a production AI path** → **AI-OPS-021 Production AI Fundamentals: SLOs and reliability architecture**

### Voting opportunities

- **Non-negotiable foundation:** AI-OPS-040 — Production AI Fundamentals: From demo to service: what changes?. It protects prerequisites for later months.
- **Voting cluster:** AI-OPS-042 — Production AI Fundamentals: Simple operational failure modes; AI-OPS-061 — Production AI Fundamentals: Caching, fallbacks, and model routing; AI-OPS-062 — Production AI Fundamentals: Design for retries, quotas, and degraded modes; AI-OPS-019 — Production AI Fundamentals: Cost-quality-latency optimization.
- **Conditional unlock:** AI-OPS-020 — Production AI Fundamentals: Incident response for nondeterministic systems becomes visible after strong interest/participation in AI-SEC-041 — AI Security Fundamentals: Red-team an AI workflow.

## JUNE — Integrate everything

**Monthly coherence.** All three tracks examine **Integrated AI System Capstone**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-ARC-046 — Integrated AI System Capstone: Read the system as boxes and arrows**  
  **Theme:** architecture · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible workshop on combining model interaction, retrieval, tools, evaluation, security, and operations in one coherent system. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind integrated ai system capstone, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-OPS-040 · **Related:** AI-ARC-013, AI-ARC-080 · **Follow-up:** AI-ARC-080

- **AI-ARC-048 — Integrated AI System Capstone: State, boundaries, and contracts**  
  **Theme:** architecture · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible presentation on combining model interaction, retrieval, tools, evaluation, security, and operations in one coherent system. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind integrated ai system capstone, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-014, AI-ARC-079 · **Follow-up:** AI-ARC-079

- **AI-ARC-047 — Integrated AI System Capstone: Recognize coupling and hidden dependencies**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible hands-on lab on combining model interaction, retrieval, tools, evaluation, security, and operations in one coherent system. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind integrated ai system capstone, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-ARC-015, AI-ARC-081 · **Follow-up:** AI-ARC-081

### Practitioner

- **AI-ARC-080 — Integrated AI System Capstone: Design the reference architecture**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical architecture clinic applying combining model interaction, retrieval, tools, evaluation, security, and operations in one coherent system in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic integrated ai system capstone workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-046, AI-OPS-063 · **Related:** AI-ARC-013 · **Follow-up:** AI-ARC-013

- **AI-ARC-079 — Integrated AI System Capstone: Compare competing patterns and trade-offs**  
  **Theme:** architecture · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical live coding applying combining model interaction, retrieval, tools, evaluation, security, and operations in one coherent system in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic integrated ai system capstone workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-048 · **Related:** AI-ARC-014 · **Follow-up:** AI-ARC-014

- **AI-ARC-081 — Integrated AI System Capstone: Evolve the architecture without rewrites**  
  **Theme:** architecture · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical hands-on lab applying combining model interaction, retrieval, tools, evaluation, security, and operations in one coherent system in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic integrated ai system capstone workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-ARC-047 · **Related:** AI-ARC-015 · **Follow-up:** AI-ARC-015

### Advanced

- **AI-ARC-013 — Integrated AI System Capstone: Architecture clinic under hard constraints**  
  **Theme:** architecture · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced research walkthrough treating combining model interaction, retrieval, tools, evaluation, security, and operations in one coherent system as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving integrated ai system capstone, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-080, AI-OPS-021 · **Related:** AI-ARC-046 · **Follow-up:** —

- **AI-ARC-014 — Integrated AI System Capstone: Distributed systems trade-offs for AI**  
  **Theme:** architecture · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced architecture clinic treating combining model interaction, retrieval, tools, evaluation, security, and operations in one coherent system as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving integrated ai system capstone, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-079 · **Related:** AI-ARC-048 · **Follow-up:** —

- **AI-ARC-015 — Integrated AI System Capstone: Failure domains, governance, and future evolution**  
  **Theme:** architecture · **Format:** case study · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced case study treating combining model interaction, retrieval, tools, evaluation, security, and operations in one coherent system as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving integrated ai system capstone, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-ARC-081 · **Related:** AI-ARC-047 · **Follow-up:** —

### Cross-track pathway

**AI-ARC-046 Integrated AI System Capstone: Read the system as boxes and arrows** → **AI-ARC-080 Integrated AI System Capstone: Design the reference architecture** → **AI-ARC-013 Integrated AI System Capstone: Architecture clinic under hard constraints**

### Voting opportunities

- **Non-negotiable foundation:** AI-ARC-046 — Integrated AI System Capstone: Read the system as boxes and arrows. It protects prerequisites for later months.
- **Voting cluster:** AI-ARC-047 — Integrated AI System Capstone: Recognize coupling and hidden dependencies; AI-ARC-079 — Integrated AI System Capstone: Compare competing patterns and trade-offs; AI-ARC-081 — Integrated AI System Capstone: Evolve the architecture without rewrites; AI-ARC-014 — Integrated AI System Capstone: Distributed systems trade-offs for AI.
- **Conditional unlock:** AI-ARC-015 — Integrated AI System Capstone: Failure domains, governance, and future evolution becomes visible after strong interest/participation in AI-OPS-063 — Production AI Fundamentals: Instrument a production AI path.

## 6. Longitudinal pathways

- **Foundation spine:** Oct [F] AI-FND-005 LLM Mental Models → Dec [F] AI-RET-015 Embeddings & Semantic Search → Feb [F] AI-AGT-031 Agent Fundamentals → Apr [F] AI-SEC-024 AI Security Fundamentals → Jun [F] AI-ARC-046 Integrated AI System Capstone
- **Practitioner spine:** Oct [P] AI-FND-007 LLM Mental Models → Dec [P] AI-RET-025 Embeddings & Semantic Search → Feb [P] AI-AGT-058 Agent Fundamentals → Apr [P] AI-SEC-041 AI Security Fundamentals → Jun [P] AI-ARC-080 Integrated AI System Capstone
- **Advanced spine:** Oct [A] AI-FND-001 LLM Mental Models → Dec [A] AI-RET-003 Embeddings & Semantic Search → Feb [A] AI-AGT-004 Agent Fundamentals → Apr [A] AI-SEC-006 AI Security Fundamentals → Jun [A] AI-ARC-013 Integrated AI System Capstone

## 7. Branching paths

```text
AI-RET-028 RAG Systems
├── implementation branch → AI-AGT-060 Agent Fundamentals
├── architecture branch   → AI-EVL-009 Evaluation-Driven AI Engineering
└── frontier branch       → AI-SEC-004 AI Security Fundamentals
```

Member interest can determine which branch receives a live workshop versus becoming optional reading/lab material. The prerequisite spine remains protected.

## 8. Season-level voting model

- **Editorially protected:** first Foundation topic each month, plus any prerequisite explicitly required by a later Core session.
- **Primary voting surface:** Elective Foundation topics, Practitioner trade-off labs, and Advanced architecture alternatives.
- **Unlockable:** Experimental Advanced sessions and frontier branches; reveal only after participation or interest thresholds are met.
- **Wild-card slot:** reserve at least one spring session for an emerging development that passes editorial relevance and evidence checks.

## 9. Simplified programme graph

```text
[Oct] AI-FND-007 LLM Mental Models
      ↓
[Nov] AI-CTX-018 Prompting as Interface Design
      ↓
[Jan] AI-RET-028 RAG Systems
      ↓
[Feb] AI-AGT-058 Agent Fundamentals
      ↓
[Apr] AI-SEC-041 AI Security Fundamentals
      ↓
[Jun] AI-ARC-080 Integrated AI System Capstone
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
- **Hands-on intensity:** 4/5
- **Production relevance:** 4/5
- **Research orientation:** 3/5
