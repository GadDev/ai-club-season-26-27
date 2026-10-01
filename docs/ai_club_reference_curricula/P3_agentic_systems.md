# P3 — Agentic Systems

> **Design agents that can act—without pretending autonomy is magic.**

## 1. Programme identity

- **Educational philosophy:** A systems curriculum for tool-using agents, starting with design patterns and tool contracts, then protocols, memory, orchestration, evaluation, security, and long-running work.
- **Target audience:** Engineers building or evaluating agents, automation platforms, tool integrations, and multi-step AI workflows.
- **Primary themes:** agents, tools, MCP, memory, orchestration, multi-agent systems, evals, security
- **What makes it different:** Agents are the primary object of study from October to June, allowing much deeper reliability and architecture coverage.
- **Main strengths:** Best agent depth; excellent cross-track progression; strong architecture/security/eval story.
- **Potential weaknesses:** Narrower than a general AI curriculum; assumes members are interested in agentic systems.
- **Expected difficulty profile:** Balanced; foundation sessions remain approachable while advanced sessions quickly reach distributed-systems complexity.

**Why it deserves to exist independently:** Agents are the primary object of study from October to June, allowing much deeper reliability and architecture coverage. That creates a different set of curriculum trade-offs, voting clusters, and capstone outcomes than the other reference seasons.

## 2. Season narrative

**October — Choose the pattern:** Agent Design Patterns
↓
**November — Give capabilities:** Tool Design for Agents
↓
**December — Connect ecosystems:** Model Context Protocol (MCP)
↓
**January — Remember selectively:** Agent Memory
↓
**February — Coordinate work:** Agent Orchestration
↓
**March — Split responsibility:** Multi-Agent Systems
↓
**April — Measure the loop:** Agent Evaluation
↓
**May — Contain the blast radius:** Agent Security & Containment
↓
**June — Run for the long haul:** Long-Running Agents

## 3–5. Month-by-month curriculum, coherence, and cross-track pathways

## OCTOBER — Choose the pattern

**Monthly coherence.** All three tracks examine **Agent Design Patterns**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-AGT-028 — Agent Design Patterns: Agent, workflow, or chatbot?**  
  **Theme:** agents · **Format:** presentation · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible presentation on single-agent patterns, planners, routers, handoffs, state machines, and when deterministic workflows win. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent design patterns, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-001, AI-AGT-055 · **Follow-up:** AI-AGT-052, AI-AGT-055

- **AI-AGT-029 — Agent Design Patterns: Tools, state, loops, and stop conditions**  
  **Theme:** agents · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible hands-on lab on single-agent patterns, planners, routers, handoffs, state machines, and when deterministic workflows win. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent design patterns, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-002, AI-AGT-057 · **Follow-up:** AI-AGT-057

- **AI-AGT-030 — Agent Design Patterns: When autonomy makes things worse**  
  **Theme:** agents · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible workshop on single-agent patterns, planners, routers, handoffs, state machines, and when deterministic workflows win. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent design patterns, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-003, AI-AGT-056 · **Follow-up:** AI-AGT-056

### Practitioner

- **AI-AGT-055 — Agent Design Patterns: Build an agent with tools**  
  **Theme:** agents · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical live coding applying single-agent patterns, planners, routers, handoffs, state machines, and when deterministic workflows win in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent design patterns workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-028 · **Related:** AI-AGT-001 · **Follow-up:** AI-AGT-001, AI-AGT-079

- **AI-AGT-057 — Agent Design Patterns: State, memory, and recovery paths**  
  **Theme:** agents · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical hands-on lab applying single-agent patterns, planners, routers, handoffs, state machines, and when deterministic workflows win in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent design patterns workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-029 · **Related:** AI-AGT-002 · **Follow-up:** AI-AGT-002

- **AI-AGT-056 — Agent Design Patterns: Human approval and controllable autonomy**  
  **Theme:** agents · **Format:** architecture clinic · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical architecture clinic applying single-agent patterns, planners, routers, handoffs, state machines, and when deterministic workflows win in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent design patterns workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-030 · **Related:** AI-AGT-003 · **Follow-up:** AI-AGT-003

### Advanced

- **AI-AGT-001 — Agent Design Patterns: Agent orchestration architecture clinic**  
  **Theme:** agents · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced architecture clinic treating single-agent patterns, planners, routers, handoffs, state machines, and when deterministic workflows win as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent design patterns, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-055 · **Related:** AI-AGT-028 · **Follow-up:** AI-AGT-025

- **AI-AGT-002 — Agent Design Patterns: Long-horizon reliability and failure recovery**  
  **Theme:** agents · **Format:** case study · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced case study treating single-agent patterns, planners, routers, handoffs, state machines, and when deterministic workflows win as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent design patterns, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-057 · **Related:** AI-AGT-029 · **Follow-up:** —

- **AI-AGT-003 — Agent Design Patterns: Multi-agent coordination and emergent failure**  
  **Theme:** agents · **Format:** research walkthrough · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced research walkthrough treating single-agent patterns, planners, routers, handoffs, state machines, and when deterministic workflows win as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent design patterns, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-056 · **Related:** AI-AGT-030 · **Follow-up:** —

### Cross-track pathway

**AI-AGT-028 Agent Design Patterns: Agent, workflow, or chatbot?** → **AI-AGT-055 Agent Design Patterns: Build an agent with tools** → **AI-AGT-001 Agent Design Patterns: Agent orchestration architecture clinic**

### Voting opportunities

- **Non-negotiable foundation:** AI-AGT-028 — Agent Design Patterns: Agent, workflow, or chatbot?. It protects prerequisites for later months.
- **Voting cluster:** AI-AGT-030 — Agent Design Patterns: When autonomy makes things worse; AI-AGT-057 — Agent Design Patterns: State, memory, and recovery paths; AI-AGT-056 — Agent Design Patterns: Human approval and controllable autonomy; AI-AGT-002 — Agent Design Patterns: Long-horizon reliability and failure recovery.
- **Conditional unlock:** AI-AGT-003 — Agent Design Patterns: Multi-agent coordination and emergent failure becomes visible after AI-AGT-028 or another October prerequisite.

## NOVEMBER — Give capabilities

**Monthly coherence.** All three tracks examine **Tool Design for Agents**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-AGT-052 — Tool Design for Agents: Agent, workflow, or chatbot?**  
  **Theme:** agents · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible hands-on lab on tool schemas, affordances, error contracts, idempotency, observability, and safe side effects. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind tool design for agents, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-AGT-028 · **Related:** AI-AGT-025, AI-AGT-079 · **Follow-up:** AI-AGT-079, AI-PRT-015

- **AI-AGT-053 — Tool Design for Agents: Tools, state, loops, and stop conditions**  
  **Theme:** agents · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on tool schemas, affordances, error contracts, idempotency, observability, and safe side effects. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind tool design for agents, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-026, AI-AGT-081 · **Follow-up:** AI-AGT-081

- **AI-AGT-054 — Tool Design for Agents: When autonomy makes things worse**  
  **Theme:** agents · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible presentation on tool schemas, affordances, error contracts, idempotency, observability, and safe side effects. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind tool design for agents, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-027, AI-AGT-080 · **Follow-up:** AI-AGT-080

### Practitioner

- **AI-AGT-079 — Tool Design for Agents: Build an agent with tools**  
  **Theme:** agents · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical hands-on lab applying tool schemas, affordances, error contracts, idempotency, observability, and safe side effects in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic tool design for agents workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-052, AI-AGT-055 · **Related:** AI-AGT-025 · **Follow-up:** AI-AGT-025, AI-PRT-024

- **AI-AGT-081 — Tool Design for Agents: State, memory, and recovery paths**  
  **Theme:** agents · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical architecture clinic applying tool schemas, affordances, error contracts, idempotency, observability, and safe side effects in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic tool design for agents workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-053 · **Related:** AI-AGT-026 · **Follow-up:** AI-AGT-026

- **AI-AGT-080 — Tool Design for Agents: Human approval and controllable autonomy**  
  **Theme:** agents · **Format:** live coding · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical live coding applying tool schemas, affordances, error contracts, idempotency, observability, and safe side effects in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic tool design for agents workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-054 · **Related:** AI-AGT-027 · **Follow-up:** AI-AGT-027

### Advanced

- **AI-AGT-025 — Tool Design for Agents: Agent orchestration architecture clinic**  
  **Theme:** agents · **Format:** case study · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced case study treating tool schemas, affordances, error contracts, idempotency, observability, and safe side effects as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving tool design for agents, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-001, AI-AGT-079 · **Related:** AI-AGT-052 · **Follow-up:** AI-PRT-006

- **AI-AGT-026 — Tool Design for Agents: Long-horizon reliability and failure recovery**  
  **Theme:** agents · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced research walkthrough treating tool schemas, affordances, error contracts, idempotency, observability, and safe side effects as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving tool design for agents, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-081 · **Related:** AI-AGT-053 · **Follow-up:** —

- **AI-AGT-027 — Tool Design for Agents: Multi-agent coordination and emergent failure**  
  **Theme:** agents · **Format:** architecture clinic · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced architecture clinic treating tool schemas, affordances, error contracts, idempotency, observability, and safe side effects as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving tool design for agents, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-080 · **Related:** AI-AGT-054 · **Follow-up:** —

### Cross-track pathway

**AI-AGT-052 Tool Design for Agents: Agent, workflow, or chatbot?** → **AI-AGT-079 Tool Design for Agents: Build an agent with tools** → **AI-AGT-025 Tool Design for Agents: Agent orchestration architecture clinic**

### Voting opportunities

- **Non-negotiable foundation:** AI-AGT-052 — Tool Design for Agents: Agent, workflow, or chatbot?. It protects prerequisites for later months.
- **Voting cluster:** AI-AGT-054 — Tool Design for Agents: When autonomy makes things worse; AI-AGT-081 — Tool Design for Agents: State, memory, and recovery paths; AI-AGT-080 — Tool Design for Agents: Human approval and controllable autonomy; AI-AGT-026 — Tool Design for Agents: Long-horizon reliability and failure recovery.
- **Conditional unlock:** AI-AGT-027 — Tool Design for Agents: Multi-agent coordination and emergent failure becomes visible after strong interest/participation in AI-AGT-055 — Agent Design Patterns: Build an agent with tools.

## DECEMBER — Connect ecosystems

**Monthly coherence.** All three tracks examine **Model Context Protocol (MCP)**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-PRT-015 — Model Context Protocol (MCP): Why agent protocols exist**  
  **Theme:** protocols · **Format:** architecture clinic · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible architecture clinic on client-server context/tool integration, capabilities, authorization, extensions, and production deployment trade-offs. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind model context protocol (mcp), recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-AGT-052 · **Related:** AI-PRT-006, AI-PRT-024 · **Follow-up:** AI-AGT-034, AI-PRT-024

- **AI-PRT-014 — Model Context Protocol (MCP): Read a protocol flow end to end**  
  **Theme:** protocols · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible presentation on client-server context/tool integration, capabilities, authorization, extensions, and production deployment trade-offs. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind model context protocol (mcp), recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-PRT-005, AI-PRT-022 · **Follow-up:** AI-PRT-022

- **AI-PRT-013 — Model Context Protocol (MCP): MCP, A2A, REST: different jobs**  
  **Theme:** protocols · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible hands-on lab on client-server context/tool integration, capabilities, authorization, extensions, and production deployment trade-offs. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind model context protocol (mcp), recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-PRT-004, AI-PRT-023 · **Follow-up:** AI-PRT-023

### Practitioner

- **AI-PRT-024 — Model Context Protocol (MCP): Implement one interoperable slice**  
  **Theme:** protocols · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical architecture clinic applying client-server context/tool integration, capabilities, authorization, extensions, and production deployment trade-offs in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic model context protocol (mcp) workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-079, AI-PRT-015 · **Related:** AI-PRT-006 · **Follow-up:** AI-AGT-061, AI-PRT-006

- **AI-PRT-022 — Model Context Protocol (MCP): Auth, capabilities, versioning, and contract tests**  
  **Theme:** protocols · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical presentation applying client-server context/tool integration, capabilities, authorization, extensions, and production deployment trade-offs in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic model context protocol (mcp) workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-PRT-014 · **Related:** AI-PRT-005 · **Follow-up:** AI-PRT-005

- **AI-PRT-023 — Model Context Protocol (MCP): Choose protocol boundaries pragmatically**  
  **Theme:** protocols · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical hands-on lab applying client-server context/tool integration, capabilities, authorization, extensions, and production deployment trade-offs in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic model context protocol (mcp) workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-PRT-013 · **Related:** AI-PRT-004 · **Follow-up:** AI-PRT-004

### Advanced

- **AI-PRT-006 — Model Context Protocol (MCP): Protocol architecture and trust boundaries**  
  **Theme:** protocols · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced architecture clinic treating client-server context/tool integration, capabilities, authorization, extensions, and production deployment trade-offs as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving model context protocol (mcp), including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-025, AI-PRT-024 · **Related:** AI-PRT-015 · **Follow-up:** AI-AGT-007

- **AI-PRT-005 — Model Context Protocol (MCP): Interoperability at enterprise scale**  
  **Theme:** protocols · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced presentation treating client-server context/tool integration, capabilities, authorization, extensions, and production deployment trade-offs as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving model context protocol (mcp), including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-PRT-022 · **Related:** AI-PRT-014 · **Follow-up:** —

- **AI-PRT-004 — Model Context Protocol (MCP): Evolve protocols without locking the platform**  
  **Theme:** protocols · **Format:** hands-on lab · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced hands-on lab treating client-server context/tool integration, capabilities, authorization, extensions, and production deployment trade-offs as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving model context protocol (mcp), including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-PRT-023 · **Related:** AI-PRT-013 · **Follow-up:** —

### Cross-track pathway

**AI-PRT-015 Model Context Protocol (MCP): Why agent protocols exist** → **AI-PRT-024 Model Context Protocol (MCP): Implement one interoperable slice** → **AI-PRT-006 Model Context Protocol (MCP): Protocol architecture and trust boundaries**

### Voting opportunities

- **Non-negotiable foundation:** AI-PRT-015 — Model Context Protocol (MCP): Why agent protocols exist. It protects prerequisites for later months.
- **Voting cluster:** AI-PRT-013 — Model Context Protocol (MCP): MCP, A2A, REST: different jobs; AI-PRT-022 — Model Context Protocol (MCP): Auth, capabilities, versioning, and contract tests; AI-PRT-023 — Model Context Protocol (MCP): Choose protocol boundaries pragmatically; AI-PRT-005 — Model Context Protocol (MCP): Interoperability at enterprise scale.
- **Conditional unlock:** AI-PRT-004 — Model Context Protocol (MCP): Evolve protocols without locking the platform becomes visible after strong interest/participation in AI-AGT-079 — Tool Design for Agents: Build an agent with tools.

## JANUARY — Remember selectively

**Monthly coherence.** All three tracks examine **Agent Memory**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-AGT-034 — Agent Memory: Agent, workflow, or chatbot?**  
  **Theme:** agents · **Format:** presentation · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible presentation on working memory, durable memory, summaries, retrieval, user state, and memory quality evaluation. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent memory, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-PRT-015 · **Related:** AI-AGT-007, AI-AGT-061 · **Follow-up:** AI-AGT-037, AI-AGT-061

- **AI-AGT-035 — Agent Memory: Tools, state, loops, and stop conditions**  
  **Theme:** agents · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible hands-on lab on working memory, durable memory, summaries, retrieval, user state, and memory quality evaluation. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent memory, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-008, AI-AGT-063 · **Follow-up:** AI-AGT-063

- **AI-AGT-036 — Agent Memory: When autonomy makes things worse**  
  **Theme:** agents · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible workshop on working memory, durable memory, summaries, retrieval, user state, and memory quality evaluation. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent memory, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-009, AI-AGT-062 · **Follow-up:** AI-AGT-062

### Practitioner

- **AI-AGT-061 — Agent Memory: Build an agent with tools**  
  **Theme:** agents · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical live coding applying working memory, durable memory, summaries, retrieval, user state, and memory quality evaluation in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent memory workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-034, AI-PRT-024 · **Related:** AI-AGT-007 · **Follow-up:** AI-AGT-007, AI-AGT-064

- **AI-AGT-063 — Agent Memory: State, memory, and recovery paths**  
  **Theme:** agents · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical hands-on lab applying working memory, durable memory, summaries, retrieval, user state, and memory quality evaluation in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent memory workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-035 · **Related:** AI-AGT-008 · **Follow-up:** AI-AGT-008

- **AI-AGT-062 — Agent Memory: Human approval and controllable autonomy**  
  **Theme:** agents · **Format:** architecture clinic · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical architecture clinic applying working memory, durable memory, summaries, retrieval, user state, and memory quality evaluation in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent memory workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-036 · **Related:** AI-AGT-009 · **Follow-up:** AI-AGT-009

### Advanced

- **AI-AGT-007 — Agent Memory: Agent orchestration architecture clinic**  
  **Theme:** agents · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced architecture clinic treating working memory, durable memory, summaries, retrieval, user state, and memory quality evaluation as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent memory, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-061, AI-PRT-006 · **Related:** AI-AGT-034 · **Follow-up:** AI-AGT-010

- **AI-AGT-008 — Agent Memory: Long-horizon reliability and failure recovery**  
  **Theme:** agents · **Format:** case study · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced case study treating working memory, durable memory, summaries, retrieval, user state, and memory quality evaluation as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent memory, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-063 · **Related:** AI-AGT-035 · **Follow-up:** —

- **AI-AGT-009 — Agent Memory: Multi-agent coordination and emergent failure**  
  **Theme:** agents · **Format:** research walkthrough · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced research walkthrough treating working memory, durable memory, summaries, retrieval, user state, and memory quality evaluation as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent memory, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-062 · **Related:** AI-AGT-036 · **Follow-up:** —

### Cross-track pathway

**AI-AGT-034 Agent Memory: Agent, workflow, or chatbot?** → **AI-AGT-061 Agent Memory: Build an agent with tools** → **AI-AGT-007 Agent Memory: Agent orchestration architecture clinic**

### Voting opportunities

- **Non-negotiable foundation:** AI-AGT-034 — Agent Memory: Agent, workflow, or chatbot?. It protects prerequisites for later months.
- **Voting cluster:** AI-AGT-036 — Agent Memory: When autonomy makes things worse; AI-AGT-063 — Agent Memory: State, memory, and recovery paths; AI-AGT-062 — Agent Memory: Human approval and controllable autonomy; AI-AGT-008 — Agent Memory: Long-horizon reliability and failure recovery.
- **Conditional unlock:** AI-AGT-009 — Agent Memory: Multi-agent coordination and emergent failure becomes visible after strong interest/participation in AI-PRT-024 — Model Context Protocol (MCP): Implement one interoperable slice.

## FEBRUARY — Coordinate work

**Monthly coherence.** All three tracks examine **Agent Orchestration**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-AGT-037 — Agent Orchestration: Agent, workflow, or chatbot?**  
  **Theme:** agents · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible hands-on lab on routing, handoffs, planning, delegation, retries, state, and coordination across multiple steps. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent orchestration, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-AGT-034 · **Related:** AI-AGT-010, AI-AGT-064 · **Follow-up:** AI-AGT-046, AI-AGT-064

- **AI-AGT-038 — Agent Orchestration: Tools, state, loops, and stop conditions**  
  **Theme:** agents · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible workshop on routing, handoffs, planning, delegation, retries, state, and coordination across multiple steps. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent orchestration, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-011, AI-AGT-066 · **Follow-up:** AI-AGT-066

- **AI-AGT-039 — Agent Orchestration: When autonomy makes things worse**  
  **Theme:** agents · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible presentation on routing, handoffs, planning, delegation, retries, state, and coordination across multiple steps. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent orchestration, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-012, AI-AGT-065 · **Follow-up:** AI-AGT-065

### Practitioner

- **AI-AGT-064 — Agent Orchestration: Build an agent with tools**  
  **Theme:** agents · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical hands-on lab applying routing, handoffs, planning, delegation, retries, state, and coordination across multiple steps in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent orchestration workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-037, AI-AGT-061 · **Related:** AI-AGT-010 · **Follow-up:** AI-AGT-010, AI-AGT-073

- **AI-AGT-066 — Agent Orchestration: State, memory, and recovery paths**  
  **Theme:** agents · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical architecture clinic applying routing, handoffs, planning, delegation, retries, state, and coordination across multiple steps in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent orchestration workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-038 · **Related:** AI-AGT-011 · **Follow-up:** AI-AGT-011

- **AI-AGT-065 — Agent Orchestration: Human approval and controllable autonomy**  
  **Theme:** agents · **Format:** live coding · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical live coding applying routing, handoffs, planning, delegation, retries, state, and coordination across multiple steps in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent orchestration workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-039 · **Related:** AI-AGT-012 · **Follow-up:** AI-AGT-012

### Advanced

- **AI-AGT-010 — Agent Orchestration: Agent orchestration architecture clinic**  
  **Theme:** agents · **Format:** case study · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced case study treating routing, handoffs, planning, delegation, retries, state, and coordination across multiple steps as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent orchestration, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-007, AI-AGT-064 · **Related:** AI-AGT-037 · **Follow-up:** AI-AGT-019

- **AI-AGT-011 — Agent Orchestration: Long-horizon reliability and failure recovery**  
  **Theme:** agents · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced research walkthrough treating routing, handoffs, planning, delegation, retries, state, and coordination across multiple steps as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent orchestration, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-066 · **Related:** AI-AGT-038 · **Follow-up:** —

- **AI-AGT-012 — Agent Orchestration: Multi-agent coordination and emergent failure**  
  **Theme:** agents · **Format:** architecture clinic · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced architecture clinic treating routing, handoffs, planning, delegation, retries, state, and coordination across multiple steps as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent orchestration, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-065 · **Related:** AI-AGT-039 · **Follow-up:** —

### Cross-track pathway

**AI-AGT-037 Agent Orchestration: Agent, workflow, or chatbot?** → **AI-AGT-064 Agent Orchestration: Build an agent with tools** → **AI-AGT-010 Agent Orchestration: Agent orchestration architecture clinic**

### Voting opportunities

- **Non-negotiable foundation:** AI-AGT-037 — Agent Orchestration: Agent, workflow, or chatbot?. It protects prerequisites for later months.
- **Voting cluster:** AI-AGT-039 — Agent Orchestration: When autonomy makes things worse; AI-AGT-066 — Agent Orchestration: State, memory, and recovery paths; AI-AGT-065 — Agent Orchestration: Human approval and controllable autonomy; AI-AGT-011 — Agent Orchestration: Long-horizon reliability and failure recovery.
- **Conditional unlock:** AI-AGT-012 — Agent Orchestration: Multi-agent coordination and emergent failure becomes visible after strong interest/participation in AI-AGT-061 — Agent Memory: Build an agent with tools.

## MARCH — Split responsibility

**Monthly coherence.** All three tracks examine **Multi-Agent Systems**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-AGT-046 — Multi-Agent Systems: Agent, workflow, or chatbot?**  
  **Theme:** agents · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible workshop on specialist agents, delegation, shared context, communication, contention, and coordination overhead. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind multi-agent systems, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-AGT-037 · **Related:** AI-AGT-019, AI-AGT-073 · **Follow-up:** AI-AGT-073, AI-EVL-015

- **AI-AGT-047 — Multi-Agent Systems: Tools, state, loops, and stop conditions**  
  **Theme:** agents · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible presentation on specialist agents, delegation, shared context, communication, contention, and coordination overhead. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind multi-agent systems, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-020, AI-AGT-075 · **Follow-up:** AI-AGT-075

- **AI-AGT-048 — Multi-Agent Systems: When autonomy makes things worse**  
  **Theme:** agents · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible hands-on lab on specialist agents, delegation, shared context, communication, contention, and coordination overhead. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind multi-agent systems, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-021, AI-AGT-074 · **Follow-up:** AI-AGT-074

### Practitioner

- **AI-AGT-073 — Multi-Agent Systems: Build an agent with tools**  
  **Theme:** agents · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical architecture clinic applying specialist agents, delegation, shared context, communication, contention, and coordination overhead in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic multi-agent systems workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-046, AI-AGT-064 · **Related:** AI-AGT-019 · **Follow-up:** AI-AGT-019, AI-EVL-025

- **AI-AGT-075 — Multi-Agent Systems: State, memory, and recovery paths**  
  **Theme:** agents · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical live coding applying specialist agents, delegation, shared context, communication, contention, and coordination overhead in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic multi-agent systems workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-047 · **Related:** AI-AGT-020 · **Follow-up:** AI-AGT-020

- **AI-AGT-074 — Multi-Agent Systems: Human approval and controllable autonomy**  
  **Theme:** agents · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical hands-on lab applying specialist agents, delegation, shared context, communication, contention, and coordination overhead in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic multi-agent systems workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-048 · **Related:** AI-AGT-021 · **Follow-up:** AI-AGT-021

### Advanced

- **AI-AGT-019 — Multi-Agent Systems: Agent orchestration architecture clinic**  
  **Theme:** agents · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced research walkthrough treating specialist agents, delegation, shared context, communication, contention, and coordination overhead as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving multi-agent systems, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-010, AI-AGT-073 · **Related:** AI-AGT-046 · **Follow-up:** AI-EVL-001

- **AI-AGT-020 — Multi-Agent Systems: Long-horizon reliability and failure recovery**  
  **Theme:** agents · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced architecture clinic treating specialist agents, delegation, shared context, communication, contention, and coordination overhead as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving multi-agent systems, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-075 · **Related:** AI-AGT-047 · **Follow-up:** —

- **AI-AGT-021 — Multi-Agent Systems: Multi-agent coordination and emergent failure**  
  **Theme:** agents · **Format:** case study · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced case study treating specialist agents, delegation, shared context, communication, contention, and coordination overhead as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving multi-agent systems, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-074 · **Related:** AI-AGT-048 · **Follow-up:** —

### Cross-track pathway

**AI-AGT-046 Multi-Agent Systems: Agent, workflow, or chatbot?** → **AI-AGT-073 Multi-Agent Systems: Build an agent with tools** → **AI-AGT-019 Multi-Agent Systems: Agent orchestration architecture clinic**

### Voting opportunities

- **Non-negotiable foundation:** AI-AGT-046 — Multi-Agent Systems: Agent, workflow, or chatbot?. It protects prerequisites for later months.
- **Voting cluster:** AI-AGT-048 — Multi-Agent Systems: When autonomy makes things worse; AI-AGT-075 — Multi-Agent Systems: State, memory, and recovery paths; AI-AGT-074 — Multi-Agent Systems: Human approval and controllable autonomy; AI-AGT-020 — Multi-Agent Systems: Long-horizon reliability and failure recovery.
- **Conditional unlock:** AI-AGT-021 — Multi-Agent Systems: Multi-agent coordination and emergent failure becomes visible after strong interest/participation in AI-AGT-064 — Agent Orchestration: Build an agent with tools.

## APRIL — Measure the loop

**Monthly coherence.** All three tracks examine **Agent Evaluation**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-EVL-015 — Agent Evaluation: What does 'good' mean for AI?**  
  **Theme:** evaluation · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible workshop on trace-level evaluation of tool selection, handoffs, policy adherence, completion, and long-horizon reliability. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent evaluation, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-AGT-046 · **Related:** AI-EVL-001, AI-EVL-025 · **Follow-up:** AI-EVL-025, AI-SEC-027

- **AI-EVL-014 — Agent Evaluation: Turn examples into test cases**  
  **Theme:** evaluation · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible hands-on lab on trace-level evaluation of tool selection, handoffs, policy adherence, completion, and long-horizon reliability. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent evaluation, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EVL-003, AI-EVL-027 · **Follow-up:** AI-EVL-027

- **AI-EVL-013 — Agent Evaluation: Spot flaky, subjective, and misleading metrics**  
  **Theme:** evaluation · **Format:** challenge · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible challenge on trace-level evaluation of tool selection, handoffs, policy adherence, completion, and long-horizon reliability. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent evaluation, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-EVL-002, AI-EVL-026 · **Follow-up:** AI-EVL-026

### Practitioner

- **AI-EVL-025 — Agent Evaluation: Build an eval dataset and scorecard**  
  **Theme:** evaluation · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical workshop applying trace-level evaluation of tool selection, handoffs, policy adherence, completion, and long-horizon reliability in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent evaluation workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-073, AI-EVL-015 · **Related:** AI-EVL-001 · **Follow-up:** AI-EVL-001, AI-SEC-044

- **AI-EVL-027 — Agent Evaluation: Trace grading, tool-use checks, and regressions**  
  **Theme:** evaluation · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical hands-on lab applying trace-level evaluation of tool selection, handoffs, policy adherence, completion, and long-horizon reliability in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent evaluation workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EVL-014 · **Related:** AI-EVL-003 · **Follow-up:** AI-EVL-003

- **AI-EVL-026 — Agent Evaluation: Compare prompts, models, and workflows safely**  
  **Theme:** evaluation · **Format:** challenge · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical challenge applying trace-level evaluation of tool selection, handoffs, policy adherence, completion, and long-horizon reliability in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent evaluation workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EVL-013 · **Related:** AI-EVL-002 · **Follow-up:** AI-EVL-002

### Advanced

- **AI-EVL-001 — Agent Evaluation: Eval-driven system design**  
  **Theme:** evaluation · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced workshop treating trace-level evaluation of tool selection, handoffs, policy adherence, completion, and long-horizon reliability as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent evaluation, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-019, AI-EVL-025 · **Related:** AI-EVL-015 · **Follow-up:** AI-SEC-009

- **AI-EVL-003 — Agent Evaluation: Macro-evals for multi-step agents**  
  **Theme:** evaluation · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced hands-on lab treating trace-level evaluation of tool selection, handoffs, policy adherence, completion, and long-horizon reliability as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent evaluation, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EVL-027 · **Related:** AI-EVL-014 · **Follow-up:** —

- **AI-EVL-002 — Agent Evaluation: Judge reliability, leakage, and benchmark gaming**  
  **Theme:** evaluation · **Format:** challenge · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced challenge treating trace-level evaluation of tool selection, handoffs, policy adherence, completion, and long-horizon reliability as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent evaluation, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EVL-026 · **Related:** AI-EVL-013 · **Follow-up:** —

### Cross-track pathway

**AI-EVL-015 Agent Evaluation: What does 'good' mean for AI?** → **AI-EVL-025 Agent Evaluation: Build an eval dataset and scorecard** → **AI-EVL-001 Agent Evaluation: Eval-driven system design**

### Voting opportunities

- **Non-negotiable foundation:** AI-EVL-015 — Agent Evaluation: What does 'good' mean for AI?. It protects prerequisites for later months.
- **Voting cluster:** AI-EVL-013 — Agent Evaluation: Spot flaky, subjective, and misleading metrics; AI-EVL-027 — Agent Evaluation: Trace grading, tool-use checks, and regressions; AI-EVL-026 — Agent Evaluation: Compare prompts, models, and workflows safely; AI-EVL-003 — Agent Evaluation: Macro-evals for multi-step agents.
- **Conditional unlock:** AI-EVL-002 — Agent Evaluation: Judge reliability, leakage, and benchmark gaming becomes visible after strong interest/participation in AI-AGT-073 — Multi-Agent Systems: Build an agent with tools.

## MAY — Contain the blast radius

**Monthly coherence.** All three tracks examine **Agent Security & Containment**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-SEC-027 — Agent Security & Containment: Threat models for AI features**  
  **Theme:** security · **Format:** red-team session · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible red-team session on least privilege, sandboxing, approval gates, prompt injection defenses, and blast-radius reduction. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent security & containment, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-EVL-015 · **Related:** AI-SEC-009, AI-SEC-044 · **Follow-up:** AI-AGT-043, AI-SEC-044

- **AI-SEC-026 — Agent Security & Containment: Prompt injection in plain language**  
  **Theme:** security · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible architecture clinic on least privilege, sandboxing, approval gates, prompt injection defenses, and blast-radius reduction. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent security & containment, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-SEC-008, AI-SEC-045 · **Follow-up:** AI-SEC-045

- **AI-SEC-025 — Agent Security & Containment: Permissions, data boundaries, and safe defaults**  
  **Theme:** security · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible presentation on least privilege, sandboxing, approval gates, prompt injection defenses, and blast-radius reduction. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agent security & containment, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-SEC-007, AI-SEC-043 · **Follow-up:** AI-SEC-043

### Practitioner

- **AI-SEC-044 — Agent Security & Containment: Red-team an AI workflow**  
  **Theme:** security · **Format:** red-team session · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical red-team session applying least privilege, sandboxing, approval gates, prompt injection defenses, and blast-radius reduction in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent security & containment workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-EVL-025, AI-SEC-027 · **Related:** AI-SEC-009 · **Follow-up:** AI-AGT-070, AI-SEC-009

- **AI-SEC-045 — Agent Security & Containment: Tool permissions, sandboxing, and approval gates**  
  **Theme:** security · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical architecture clinic applying least privilege, sandboxing, approval gates, prompt injection defenses, and blast-radius reduction in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent security & containment workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-SEC-026 · **Related:** AI-SEC-008 · **Follow-up:** AI-SEC-008

- **AI-SEC-043 — Agent Security & Containment: Design defenses for indirect prompt injection**  
  **Theme:** security · **Format:** presentation · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical presentation applying least privilege, sandboxing, approval gates, prompt injection defenses, and blast-radius reduction in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agent security & containment workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-SEC-025 · **Related:** AI-SEC-007 · **Follow-up:** AI-SEC-007

### Advanced

- **AI-SEC-009 — Agent Security & Containment: Security architecture for autonomous agents**  
  **Theme:** security · **Format:** red-team session · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced red-team session treating least privilege, sandboxing, approval gates, prompt injection defenses, and blast-radius reduction as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent security & containment, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-EVL-001, AI-SEC-044 · **Related:** AI-SEC-027 · **Follow-up:** AI-AGT-016

- **AI-SEC-008 — Agent Security & Containment: Containment, blast radius, and credential boundaries**  
  **Theme:** security · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced architecture clinic treating least privilege, sandboxing, approval gates, prompt injection defenses, and blast-radius reduction as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent security & containment, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-SEC-045 · **Related:** AI-SEC-026 · **Follow-up:** —

- **AI-SEC-007 — Agent Security & Containment: Adversarial evaluation and abuse-case design**  
  **Theme:** security · **Format:** presentation · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced presentation treating least privilege, sandboxing, approval gates, prompt injection defenses, and blast-radius reduction as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agent security & containment, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-SEC-043 · **Related:** AI-SEC-025 · **Follow-up:** —

### Cross-track pathway

**AI-SEC-027 Agent Security & Containment: Threat models for AI features** → **AI-SEC-044 Agent Security & Containment: Red-team an AI workflow** → **AI-SEC-009 Agent Security & Containment: Security architecture for autonomous agents**

### Voting opportunities

- **Non-negotiable foundation:** AI-SEC-027 — Agent Security & Containment: Threat models for AI features. It protects prerequisites for later months.
- **Voting cluster:** AI-SEC-025 — Agent Security & Containment: Permissions, data boundaries, and safe defaults; AI-SEC-045 — Agent Security & Containment: Tool permissions, sandboxing, and approval gates; AI-SEC-043 — Agent Security & Containment: Design defenses for indirect prompt injection; AI-SEC-008 — Agent Security & Containment: Containment, blast radius, and credential boundaries.
- **Conditional unlock:** AI-SEC-007 — Agent Security & Containment: Adversarial evaluation and abuse-case design becomes visible after strong interest/participation in AI-EVL-025 — Agent Evaluation: Build an eval dataset and scorecard.

## JUNE — Run for the long haul

**Monthly coherence.** All three tracks examine **Long-Running Agents**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-AGT-043 — Long-Running Agents: Agent, workflow, or chatbot?**  
  **Theme:** agents · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible workshop on checkpointing, resumability, compaction, task decomposition, monitoring, and recovery across long horizons. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind long-running agents, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-SEC-027 · **Related:** AI-AGT-016, AI-AGT-070 · **Follow-up:** AI-AGT-070

- **AI-AGT-044 — Long-Running Agents: Tools, state, loops, and stop conditions**  
  **Theme:** agents · **Format:** presentation · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible presentation on checkpointing, resumability, compaction, task decomposition, monitoring, and recovery across long horizons. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind long-running agents, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-017, AI-AGT-072 · **Follow-up:** AI-AGT-072

- **AI-AGT-045 — Long-Running Agents: When autonomy makes things worse**  
  **Theme:** agents · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible hands-on lab on checkpointing, resumability, compaction, task decomposition, monitoring, and recovery across long horizons. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind long-running agents, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-AGT-018, AI-AGT-071 · **Follow-up:** AI-AGT-071

### Practitioner

- **AI-AGT-070 — Long-Running Agents: Build an agent with tools**  
  **Theme:** agents · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical architecture clinic applying checkpointing, resumability, compaction, task decomposition, monitoring, and recovery across long horizons in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic long-running agents workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-043, AI-SEC-044 · **Related:** AI-AGT-016 · **Follow-up:** AI-AGT-016

- **AI-AGT-072 — Long-Running Agents: State, memory, and recovery paths**  
  **Theme:** agents · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical live coding applying checkpointing, resumability, compaction, task decomposition, monitoring, and recovery across long horizons in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic long-running agents workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-044 · **Related:** AI-AGT-017 · **Follow-up:** AI-AGT-017

- **AI-AGT-071 — Long-Running Agents: Human approval and controllable autonomy**  
  **Theme:** agents · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical hands-on lab applying checkpointing, resumability, compaction, task decomposition, monitoring, and recovery across long horizons in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic long-running agents workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-AGT-045 · **Related:** AI-AGT-018 · **Follow-up:** AI-AGT-018

### Advanced

- **AI-AGT-016 — Long-Running Agents: Agent orchestration architecture clinic**  
  **Theme:** agents · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced research walkthrough treating checkpointing, resumability, compaction, task decomposition, monitoring, and recovery across long horizons as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving long-running agents, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-070, AI-SEC-009 · **Related:** AI-AGT-043 · **Follow-up:** —

- **AI-AGT-017 — Long-Running Agents: Long-horizon reliability and failure recovery**  
  **Theme:** agents · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced architecture clinic treating checkpointing, resumability, compaction, task decomposition, monitoring, and recovery across long horizons as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving long-running agents, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-072 · **Related:** AI-AGT-044 · **Follow-up:** —

- **AI-AGT-018 — Long-Running Agents: Multi-agent coordination and emergent failure**  
  **Theme:** agents · **Format:** case study · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced case study treating checkpointing, resumability, compaction, task decomposition, monitoring, and recovery across long horizons as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving long-running agents, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-AGT-071 · **Related:** AI-AGT-045 · **Follow-up:** —

### Cross-track pathway

**AI-AGT-043 Long-Running Agents: Agent, workflow, or chatbot?** → **AI-AGT-070 Long-Running Agents: Build an agent with tools** → **AI-AGT-016 Long-Running Agents: Agent orchestration architecture clinic**

### Voting opportunities

- **Non-negotiable foundation:** AI-AGT-043 — Long-Running Agents: Agent, workflow, or chatbot?. It protects prerequisites for later months.
- **Voting cluster:** AI-AGT-045 — Long-Running Agents: When autonomy makes things worse; AI-AGT-072 — Long-Running Agents: State, memory, and recovery paths; AI-AGT-071 — Long-Running Agents: Human approval and controllable autonomy; AI-AGT-017 — Long-Running Agents: Long-horizon reliability and failure recovery.
- **Conditional unlock:** AI-AGT-018 — Long-Running Agents: Multi-agent coordination and emergent failure becomes visible after strong interest/participation in AI-SEC-044 — Agent Security & Containment: Red-team an AI workflow.

## 6. Longitudinal pathways

- **Foundation spine:** Oct [F] AI-AGT-028 Agent Design Patterns → Dec [F] AI-PRT-015 Model Context Protocol (MCP) → Feb [F] AI-AGT-037 Agent Orchestration → Apr [F] AI-EVL-015 Agent Evaluation → Jun [F] AI-AGT-043 Long-Running Agents
- **Practitioner spine:** Oct [P] AI-AGT-055 Agent Design Patterns → Dec [P] AI-PRT-024 Model Context Protocol (MCP) → Feb [P] AI-AGT-064 Agent Orchestration → Apr [P] AI-EVL-025 Agent Evaluation → Jun [P] AI-AGT-070 Long-Running Agents
- **Advanced spine:** Oct [A] AI-AGT-001 Agent Design Patterns → Dec [A] AI-PRT-006 Model Context Protocol (MCP) → Feb [A] AI-AGT-010 Agent Orchestration → Apr [A] AI-EVL-001 Agent Evaluation → Jun [A] AI-AGT-016 Long-Running Agents

## 7. Branching paths

```text
AI-AGT-061 Agent Memory
├── implementation branch → AI-AGT-066 Agent Orchestration
├── architecture branch   → AI-AGT-020 Multi-Agent Systems
└── frontier branch       → AI-EVL-002 Agent Evaluation
```

Member interest can determine which branch receives a live workshop versus becoming optional reading/lab material. The prerequisite spine remains protected.

## 8. Season-level voting model

- **Editorially protected:** first Foundation topic each month, plus any prerequisite explicitly required by a later Core session.
- **Primary voting surface:** Elective Foundation topics, Practitioner trade-off labs, and Advanced architecture alternatives.
- **Unlockable:** Experimental Advanced sessions and frontier branches; reveal only after participation or interest thresholds are met.
- **Wild-card slot:** reserve at least one spring session for an emerging development that passes editorial relevance and evidence checks.

## 9. Simplified programme graph

```text
[Oct] AI-AGT-055 Agent Design Patterns
      ↓
[Nov] AI-AGT-079 Tool Design for Agents
      ↓
[Jan] AI-AGT-061 Agent Memory
      ↓
[Feb] AI-AGT-064 Agent Orchestration
      ↓
[Apr] AI-EVL-025 Agent Evaluation
      ↓
[Jun] AI-AGT-070 Long-Running Agents
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
- **Production relevance:** 5/5
- **Research orientation:** 3/5
