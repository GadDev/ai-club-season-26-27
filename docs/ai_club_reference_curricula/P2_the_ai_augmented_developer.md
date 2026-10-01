# P2 — The AI-Augmented Developer

> **From autocomplete to engineered agentic software delivery.**

## 1. Programme identity

- **Educational philosophy:** Treat AI coding as an engineering discipline: context, specs, tools, tests, loops, review, security, and team operating models.
- **Target audience:** Software engineers who already use coding assistants and want repeatable, measurable, safer workflows.
- **Primary themes:** coding agents, context engineering, specifications, loop engineering, testing, code review, SDLC
- **What makes it different:** The unit of learning is the software-delivery workflow, not the model or chatbot.
- **Main strengths:** Extremely relevant to working developers; hands-on; easy to demo; strong bridge to SDLC change.
- **Potential weaknesses:** Less coverage of model internals, retrieval, and inference infrastructure.
- **Expected difficulty profile:** Accessible start, practitioner-heavy middle, advanced harness/organisation questions by spring.

**Why it deserves to exist independently:** The unit of learning is the software-delivery workflow, not the model or chatbot. That creates a different set of curriculum trade-offs, voting clusters, and capstone outcomes than the other reference seasons.

## 2. Season narrative

**October — Pair:** AI Pair Programming
↓
**November — Feed context:** Context Engineering for Code
↓
**December — Specify:** Specification-Driven Development
↓
**January — Delegate:** Coding Agents
↓
**February — Verify:** Agentic Testing & Debugging
↓
**March — Loop:** Loop Engineering
↓
**April — Review:** AI-Assisted Code Review
↓
**May — Constrain:** Secure Agentic SDLC
↓
**June — Redesign the team:** Engineering Organisations with Agents

## 3–5. Month-by-month curriculum, coherence, and cross-track pathways

## OCTOBER — Pair

**Monthly coherence.** All three tracks examine **AI Pair Programming**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-DEV-038 — AI Pair Programming: AI pair programming: useful mental models**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible live coding on effective collaboration with coding assistants while retaining engineering ownership, verification, and codebase understanding. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai pair programming, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-001, AI-DEV-073 · **Follow-up:** AI-CTX-009, AI-DEV-073

- **AI-DEV-037 — AI Pair Programming: A safe first workflow in a real repository**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible code review on effective collaboration with coding assistants while retaining engineering ownership, verification, and codebase understanding. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai pair programming, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-003, AI-DEV-074 · **Follow-up:** AI-DEV-074

- **AI-DEV-039 — AI Pair Programming: Common coding-agent failure modes**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible workshop on effective collaboration with coding assistants while retaining engineering ownership, verification, and codebase understanding. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai pair programming, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-002, AI-DEV-075 · **Follow-up:** AI-DEV-075

### Practitioner

- **AI-DEV-073 — AI Pair Programming: Build a repeatable agentic coding workflow**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical live coding applying effective collaboration with coding assistants while retaining engineering ownership, verification, and codebase understanding in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai pair programming workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-038 · **Related:** AI-DEV-001 · **Follow-up:** AI-CTX-015, AI-DEV-001

- **AI-DEV-074 — AI Pair Programming: Context files, tools, tests, and verification**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical code review applying effective collaboration with coding assistants while retaining engineering ownership, verification, and codebase understanding in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai pair programming workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-037 · **Related:** AI-DEV-003 · **Follow-up:** AI-DEV-003

- **AI-DEV-075 — AI Pair Programming: Review AI changes like a senior engineer**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical workshop applying effective collaboration with coding assistants while retaining engineering ownership, verification, and codebase understanding in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai pair programming workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-039 · **Related:** AI-DEV-002 · **Follow-up:** AI-DEV-002

### Advanced

- **AI-DEV-001 — AI Pair Programming: Harness design for long-running coding work**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced live coding treating effective collaboration with coding assistants while retaining engineering ownership, verification, and codebase understanding as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai pair programming, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-073 · **Related:** AI-DEV-038 · **Follow-up:** AI-CTX-002

- **AI-DEV-003 — AI Pair Programming: Parallel agents, sandboxes, and repair loops**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced code review treating effective collaboration with coding assistants while retaining engineering ownership, verification, and codebase understanding as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai pair programming, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-074 · **Related:** AI-DEV-037 · **Follow-up:** —

- **AI-DEV-002 — AI Pair Programming: Measure engineering impact beyond generated lines**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced workshop treating effective collaboration with coding assistants while retaining engineering ownership, verification, and codebase understanding as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai pair programming, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-075 · **Related:** AI-DEV-039 · **Follow-up:** —

### Cross-track pathway

**AI-DEV-038 AI Pair Programming: AI pair programming: useful mental models** → **AI-DEV-073 AI Pair Programming: Build a repeatable agentic coding workflow** → **AI-DEV-001 AI Pair Programming: Harness design for long-running coding work**

### Voting opportunities

- **Non-negotiable foundation:** AI-DEV-038 — AI Pair Programming: AI pair programming: useful mental models. It protects prerequisites for later months.
- **Voting cluster:** AI-DEV-039 — AI Pair Programming: Common coding-agent failure modes; AI-DEV-074 — AI Pair Programming: Context files, tools, tests, and verification; AI-DEV-075 — AI Pair Programming: Review AI changes like a senior engineer; AI-DEV-003 — AI Pair Programming: Parallel agents, sandboxes, and repair loops.
- **Conditional unlock:** AI-DEV-002 — AI Pair Programming: Measure engineering impact beyond generated lines becomes visible after AI-DEV-038 or another October prerequisite.

## NOVEMBER — Feed context

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
- **Conditional unlock:** AI-CTX-003 — Context Engineering for Code: Context policy as a system boundary becomes visible after strong interest/participation in AI-DEV-073 — AI Pair Programming: Build a repeatable agentic coding workflow.

## DECEMBER — Specify

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

## JANUARY — Delegate

**Monthly coherence.** All three tracks examine **Coding Agents**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-DEV-056 — Coding Agents: AI pair programming: useful mental models**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible live coding on agentic coding workflows that inspect repositories, edit files, run tools, test changes, and recover from failure. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind coding agents, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-DEV-071 · **Related:** AI-DEV-019, AI-DEV-091 · **Follow-up:** AI-DEV-047, AI-DEV-091

- **AI-DEV-055 — Coding Agents: A safe first workflow in a real repository**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible code review on agentic coding workflows that inspect repositories, edit files, run tools, test changes, and recover from failure. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind coding agents, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-021, AI-DEV-092 · **Follow-up:** AI-DEV-092

- **AI-DEV-057 — Coding Agents: Common coding-agent failure modes**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible workshop on agentic coding workflows that inspect repositories, edit files, run tools, test changes, and recover from failure. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind coding agents, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-020, AI-DEV-093 · **Follow-up:** AI-DEV-093

### Practitioner

- **AI-DEV-091 — Coding Agents: Build a repeatable agentic coding workflow**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical live coding applying agentic coding workflows that inspect repositories, edit files, run tools, test changes, and recover from failure in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic coding agents workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-056, AI-DEV-106 · **Related:** AI-DEV-019 · **Follow-up:** AI-DEV-019, AI-DEV-082

- **AI-DEV-092 — Coding Agents: Context files, tools, tests, and verification**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical code review applying agentic coding workflows that inspect repositories, edit files, run tools, test changes, and recover from failure in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic coding agents workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-055 · **Related:** AI-DEV-021 · **Follow-up:** AI-DEV-021

- **AI-DEV-093 — Coding Agents: Review AI changes like a senior engineer**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical workshop applying agentic coding workflows that inspect repositories, edit files, run tools, test changes, and recover from failure in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic coding agents workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-057 · **Related:** AI-DEV-020 · **Follow-up:** AI-DEV-020

### Advanced

- **AI-DEV-019 — Coding Agents: Harness design for long-running coding work**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced live coding treating agentic coding workflows that inspect repositories, edit files, run tools, test changes, and recover from failure as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving coding agents, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-034, AI-DEV-091 · **Related:** AI-DEV-056 · **Follow-up:** AI-DEV-010

- **AI-DEV-021 — Coding Agents: Parallel agents, sandboxes, and repair loops**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced code review treating agentic coding workflows that inspect repositories, edit files, run tools, test changes, and recover from failure as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving coding agents, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-092 · **Related:** AI-DEV-055 · **Follow-up:** —

- **AI-DEV-020 — Coding Agents: Measure engineering impact beyond generated lines**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced workshop treating agentic coding workflows that inspect repositories, edit files, run tools, test changes, and recover from failure as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving coding agents, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-093 · **Related:** AI-DEV-057 · **Follow-up:** —

### Cross-track pathway

**AI-DEV-056 Coding Agents: AI pair programming: useful mental models** → **AI-DEV-091 Coding Agents: Build a repeatable agentic coding workflow** → **AI-DEV-019 Coding Agents: Harness design for long-running coding work**

### Voting opportunities

- **Non-negotiable foundation:** AI-DEV-056 — Coding Agents: AI pair programming: useful mental models. It protects prerequisites for later months.
- **Voting cluster:** AI-DEV-057 — Coding Agents: Common coding-agent failure modes; AI-DEV-092 — Coding Agents: Context files, tools, tests, and verification; AI-DEV-093 — Coding Agents: Review AI changes like a senior engineer; AI-DEV-021 — Coding Agents: Parallel agents, sandboxes, and repair loops.
- **Conditional unlock:** AI-DEV-020 — Coding Agents: Measure engineering impact beyond generated lines becomes visible after strong interest/participation in AI-DEV-106 — Specification-Driven Development: Build a repeatable agentic coding workflow.

## FEBRUARY — Verify

**Monthly coherence.** All three tracks examine **Agentic Testing & Debugging**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-DEV-047 — Agentic Testing & Debugging: AI pair programming: useful mental models**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible code review on using agents to generate, run, diagnose, and repair tests without outsourcing judgment. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agentic testing & debugging, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-DEV-056 · **Related:** AI-DEV-010, AI-DEV-082 · **Follow-up:** AI-DEV-068, AI-DEV-082

- **AI-DEV-046 — Agentic Testing & Debugging: A safe first workflow in a real repository**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible workshop on using agents to generate, run, diagnose, and repair tests without outsourcing judgment. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agentic testing & debugging, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-012, AI-DEV-083 · **Follow-up:** AI-DEV-083

- **AI-DEV-048 — Agentic Testing & Debugging: Common coding-agent failure modes**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible live coding on using agents to generate, run, diagnose, and repair tests without outsourcing judgment. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind agentic testing & debugging, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-011, AI-DEV-084 · **Follow-up:** AI-DEV-084

### Practitioner

- **AI-DEV-082 — Agentic Testing & Debugging: Build a repeatable agentic coding workflow**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical code review applying using agents to generate, run, diagnose, and repair tests without outsourcing judgment in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agentic testing & debugging workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-047, AI-DEV-091 · **Related:** AI-DEV-010 · **Follow-up:** AI-DEV-010, AI-DEV-103

- **AI-DEV-083 — Agentic Testing & Debugging: Context files, tools, tests, and verification**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical workshop applying using agents to generate, run, diagnose, and repair tests without outsourcing judgment in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agentic testing & debugging workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-046 · **Related:** AI-DEV-012 · **Follow-up:** AI-DEV-012

- **AI-DEV-084 — Agentic Testing & Debugging: Review AI changes like a senior engineer**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical live coding applying using agents to generate, run, diagnose, and repair tests without outsourcing judgment in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic agentic testing & debugging workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-048 · **Related:** AI-DEV-011 · **Follow-up:** AI-DEV-011

### Advanced

- **AI-DEV-010 — Agentic Testing & Debugging: Harness design for long-running coding work**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced code review treating using agents to generate, run, diagnose, and repair tests without outsourcing judgment as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agentic testing & debugging, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-019, AI-DEV-082 · **Related:** AI-DEV-047 · **Follow-up:** AI-DEV-031

- **AI-DEV-012 — Agentic Testing & Debugging: Parallel agents, sandboxes, and repair loops**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced workshop treating using agents to generate, run, diagnose, and repair tests without outsourcing judgment as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agentic testing & debugging, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-083 · **Related:** AI-DEV-046 · **Follow-up:** —

- **AI-DEV-011 — Agentic Testing & Debugging: Measure engineering impact beyond generated lines**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced live coding treating using agents to generate, run, diagnose, and repair tests without outsourcing judgment as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving agentic testing & debugging, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-084 · **Related:** AI-DEV-048 · **Follow-up:** —

### Cross-track pathway

**AI-DEV-047 Agentic Testing & Debugging: AI pair programming: useful mental models** → **AI-DEV-082 Agentic Testing & Debugging: Build a repeatable agentic coding workflow** → **AI-DEV-010 Agentic Testing & Debugging: Harness design for long-running coding work**

### Voting opportunities

- **Non-negotiable foundation:** AI-DEV-047 — Agentic Testing & Debugging: AI pair programming: useful mental models. It protects prerequisites for later months.
- **Voting cluster:** AI-DEV-048 — Agentic Testing & Debugging: Common coding-agent failure modes; AI-DEV-083 — Agentic Testing & Debugging: Context files, tools, tests, and verification; AI-DEV-084 — Agentic Testing & Debugging: Review AI changes like a senior engineer; AI-DEV-012 — Agentic Testing & Debugging: Parallel agents, sandboxes, and repair loops.
- **Conditional unlock:** AI-DEV-011 — Agentic Testing & Debugging: Measure engineering impact beyond generated lines becomes visible after strong interest/participation in AI-DEV-091 — Coding Agents: Build a repeatable agentic coding workflow.

## MARCH — Loop

**Monthly coherence.** All three tracks examine **Loop Engineering**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-DEV-068 — Loop Engineering: AI pair programming: useful mental models**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible workshop on designing iterative goal-action-verification-feedback loops that guide agents toward completion. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind loop engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-DEV-047, AI-DEV-071 · **Related:** AI-DEV-031, AI-DEV-103 · **Follow-up:** AI-DEV-041, AI-DEV-062, AI-DEV-103

- **AI-DEV-067 — Loop Engineering: A safe first workflow in a real repository**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible live coding on designing iterative goal-action-verification-feedback loops that guide agents toward completion. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind loop engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-033, AI-DEV-104 · **Follow-up:** AI-DEV-104

- **AI-DEV-069 — Loop Engineering: Common coding-agent failure modes**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible code review on designing iterative goal-action-verification-feedback loops that guide agents toward completion. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind loop engineering, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-032, AI-DEV-105 · **Follow-up:** AI-DEV-105

### Practitioner

- **AI-DEV-103 — Loop Engineering: Build a repeatable agentic coding workflow**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical workshop applying designing iterative goal-action-verification-feedback loops that guide agents toward completion in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic loop engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-068, AI-DEV-082, AI-DEV-106 · **Related:** AI-DEV-031 · **Follow-up:** AI-DEV-031, AI-DEV-076, AI-DEV-097

- **AI-DEV-104 — Loop Engineering: Context files, tools, tests, and verification**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical live coding applying designing iterative goal-action-verification-feedback loops that guide agents toward completion in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic loop engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-067 · **Related:** AI-DEV-033 · **Follow-up:** AI-DEV-033

- **AI-DEV-105 — Loop Engineering: Review AI changes like a senior engineer**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical code review applying designing iterative goal-action-verification-feedback loops that guide agents toward completion in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic loop engineering workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-069 · **Related:** AI-DEV-032 · **Follow-up:** AI-DEV-032

### Advanced

- **AI-DEV-031 — Loop Engineering: Harness design for long-running coding work**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced workshop treating designing iterative goal-action-verification-feedback loops that guide agents toward completion as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving loop engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-010, AI-DEV-034, AI-DEV-103 · **Related:** AI-DEV-068 · **Follow-up:** AI-DEV-004, AI-DEV-025

- **AI-DEV-033 — Loop Engineering: Parallel agents, sandboxes, and repair loops**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced live coding treating designing iterative goal-action-verification-feedback loops that guide agents toward completion as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving loop engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-104 · **Related:** AI-DEV-067 · **Follow-up:** —

- **AI-DEV-032 — Loop Engineering: Measure engineering impact beyond generated lines**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced code review treating designing iterative goal-action-verification-feedback loops that guide agents toward completion as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving loop engineering, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-105 · **Related:** AI-DEV-069 · **Follow-up:** —

### Cross-track pathway

**AI-DEV-068 Loop Engineering: AI pair programming: useful mental models** → **AI-DEV-103 Loop Engineering: Build a repeatable agentic coding workflow** → **AI-DEV-031 Loop Engineering: Harness design for long-running coding work**

### Voting opportunities

- **Non-negotiable foundation:** AI-DEV-068 — Loop Engineering: AI pair programming: useful mental models. It protects prerequisites for later months.
- **Voting cluster:** AI-DEV-069 — Loop Engineering: Common coding-agent failure modes; AI-DEV-104 — Loop Engineering: Context files, tools, tests, and verification; AI-DEV-105 — Loop Engineering: Review AI changes like a senior engineer; AI-DEV-033 — Loop Engineering: Parallel agents, sandboxes, and repair loops.
- **Conditional unlock:** AI-DEV-032 — Loop Engineering: Measure engineering impact beyond generated lines becomes visible after strong interest/participation in AI-DEV-082 — Agentic Testing & Debugging: Build a repeatable agentic coding workflow.

## APRIL — Review

**Monthly coherence.** All three tracks examine **AI-Assisted Code Review**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-DEV-041 — AI-Assisted Code Review: AI pair programming: useful mental models**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible live coding on using models for review while preserving threat modeling, architecture judgment, and human accountability. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai-assisted code review, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-DEV-068 · **Related:** AI-DEV-004, AI-DEV-076 · **Follow-up:** AI-DEV-076, AI-SEC-036

- **AI-DEV-040 — AI-Assisted Code Review: A safe first workflow in a real repository**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible code review on using models for review while preserving threat modeling, architecture judgment, and human accountability. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai-assisted code review, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-006, AI-DEV-077 · **Follow-up:** AI-DEV-077

- **AI-DEV-042 — AI-Assisted Code Review: Common coding-agent failure modes**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible workshop on using models for review while preserving threat modeling, architecture judgment, and human accountability. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind ai-assisted code review, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-005, AI-DEV-078 · **Follow-up:** AI-DEV-078

### Practitioner

- **AI-DEV-076 — AI-Assisted Code Review: Build a repeatable agentic coding workflow**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical live coding applying using models for review while preserving threat modeling, architecture judgment, and human accountability in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai-assisted code review workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-041, AI-DEV-103 · **Related:** AI-DEV-004 · **Follow-up:** AI-DEV-004, AI-SEC-053

- **AI-DEV-077 — AI-Assisted Code Review: Context files, tools, tests, and verification**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical code review applying using models for review while preserving threat modeling, architecture judgment, and human accountability in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai-assisted code review workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-040 · **Related:** AI-DEV-006 · **Follow-up:** AI-DEV-006

- **AI-DEV-078 — AI-Assisted Code Review: Review AI changes like a senior engineer**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical workshop applying using models for review while preserving threat modeling, architecture judgment, and human accountability in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic ai-assisted code review workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-042 · **Related:** AI-DEV-005 · **Follow-up:** AI-DEV-005

### Advanced

- **AI-DEV-004 — AI-Assisted Code Review: Harness design for long-running coding work**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced live coding treating using models for review while preserving threat modeling, architecture judgment, and human accountability as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai-assisted code review, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-031, AI-DEV-076 · **Related:** AI-DEV-041 · **Follow-up:** AI-SEC-018

- **AI-DEV-006 — AI-Assisted Code Review: Parallel agents, sandboxes, and repair loops**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced code review treating using models for review while preserving threat modeling, architecture judgment, and human accountability as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai-assisted code review, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-077 · **Related:** AI-DEV-040 · **Follow-up:** —

- **AI-DEV-005 — AI-Assisted Code Review: Measure engineering impact beyond generated lines**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced workshop treating using models for review while preserving threat modeling, architecture judgment, and human accountability as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving ai-assisted code review, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-078 · **Related:** AI-DEV-042 · **Follow-up:** —

### Cross-track pathway

**AI-DEV-041 AI-Assisted Code Review: AI pair programming: useful mental models** → **AI-DEV-076 AI-Assisted Code Review: Build a repeatable agentic coding workflow** → **AI-DEV-004 AI-Assisted Code Review: Harness design for long-running coding work**

### Voting opportunities

- **Non-negotiable foundation:** AI-DEV-041 — AI-Assisted Code Review: AI pair programming: useful mental models. It protects prerequisites for later months.
- **Voting cluster:** AI-DEV-042 — AI-Assisted Code Review: Common coding-agent failure modes; AI-DEV-077 — AI-Assisted Code Review: Context files, tools, tests, and verification; AI-DEV-078 — AI-Assisted Code Review: Review AI changes like a senior engineer; AI-DEV-006 — AI-Assisted Code Review: Parallel agents, sandboxes, and repair loops.
- **Conditional unlock:** AI-DEV-005 — AI-Assisted Code Review: Measure engineering impact beyond generated lines becomes visible after strong interest/participation in AI-DEV-103 — Loop Engineering: Build a repeatable agentic coding workflow.

## MAY — Constrain

**Monthly coherence.** All three tracks examine **Secure Agentic SDLC**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-SEC-036 — Secure Agentic SDLC: Threat models for AI features**  
  **Theme:** security · **Format:** red-team session · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible red-team session on permissions, sandboxes, secrets, provenance, CI checks, and approval boundaries for coding agents. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind secure agentic sdlc, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-DEV-041 · **Related:** AI-SEC-018, AI-SEC-053 · **Follow-up:** AI-DEV-059, AI-SEC-053

- **AI-SEC-035 — Secure Agentic SDLC: Prompt injection in plain language**  
  **Theme:** security · **Format:** architecture clinic · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible architecture clinic on permissions, sandboxes, secrets, provenance, CI checks, and approval boundaries for coding agents. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind secure agentic sdlc, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-SEC-017, AI-SEC-054 · **Follow-up:** AI-SEC-054

- **AI-SEC-034 — Secure Agentic SDLC: Permissions, data boundaries, and safe defaults**  
  **Theme:** security · **Format:** presentation · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible presentation on permissions, sandboxes, secrets, provenance, CI checks, and approval boundaries for coding agents. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind secure agentic sdlc, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-SEC-016, AI-SEC-052 · **Follow-up:** AI-SEC-052

### Practitioner

- **AI-SEC-053 — Secure Agentic SDLC: Red-team an AI workflow**  
  **Theme:** security · **Format:** red-team session · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical red-team session applying permissions, sandboxes, secrets, provenance, CI checks, and approval boundaries for coding agents in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic secure agentic sdlc workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-076, AI-SEC-036 · **Related:** AI-SEC-018 · **Follow-up:** AI-DEV-094, AI-SEC-018

- **AI-SEC-054 — Secure Agentic SDLC: Tool permissions, sandboxing, and approval gates**  
  **Theme:** security · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical architecture clinic applying permissions, sandboxes, secrets, provenance, CI checks, and approval boundaries for coding agents in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic secure agentic sdlc workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-SEC-035 · **Related:** AI-SEC-017 · **Follow-up:** AI-SEC-017

- **AI-SEC-052 — Secure Agentic SDLC: Design defenses for indirect prompt injection**  
  **Theme:** security · **Format:** presentation · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical presentation applying permissions, sandboxes, secrets, provenance, CI checks, and approval boundaries for coding agents in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic secure agentic sdlc workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-SEC-034 · **Related:** AI-SEC-016 · **Follow-up:** AI-SEC-016

### Advanced

- **AI-SEC-018 — Secure Agentic SDLC: Security architecture for autonomous agents**  
  **Theme:** security · **Format:** red-team session · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced red-team session treating permissions, sandboxes, secrets, provenance, CI checks, and approval boundaries for coding agents as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving secure agentic sdlc, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-004, AI-SEC-053 · **Related:** AI-SEC-036 · **Follow-up:** AI-DEV-022

- **AI-SEC-017 — Secure Agentic SDLC: Containment, blast radius, and credential boundaries**  
  **Theme:** security · **Format:** architecture clinic · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced architecture clinic treating permissions, sandboxes, secrets, provenance, CI checks, and approval boundaries for coding agents as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving secure agentic sdlc, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-SEC-054 · **Related:** AI-SEC-035 · **Follow-up:** —

- **AI-SEC-016 — Secure Agentic SDLC: Adversarial evaluation and abuse-case design**  
  **Theme:** security · **Format:** presentation · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced presentation treating permissions, sandboxes, secrets, provenance, CI checks, and approval boundaries for coding agents as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving secure agentic sdlc, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-SEC-052 · **Related:** AI-SEC-034 · **Follow-up:** —

### Cross-track pathway

**AI-SEC-036 Secure Agentic SDLC: Threat models for AI features** → **AI-SEC-053 Secure Agentic SDLC: Red-team an AI workflow** → **AI-SEC-018 Secure Agentic SDLC: Security architecture for autonomous agents**

### Voting opportunities

- **Non-negotiable foundation:** AI-SEC-036 — Secure Agentic SDLC: Threat models for AI features. It protects prerequisites for later months.
- **Voting cluster:** AI-SEC-034 — Secure Agentic SDLC: Permissions, data boundaries, and safe defaults; AI-SEC-054 — Secure Agentic SDLC: Tool permissions, sandboxing, and approval gates; AI-SEC-052 — Secure Agentic SDLC: Design defenses for indirect prompt injection; AI-SEC-017 — Secure Agentic SDLC: Containment, blast radius, and credential boundaries.
- **Conditional unlock:** AI-SEC-016 — Secure Agentic SDLC: Adversarial evaluation and abuse-case design becomes visible after strong interest/participation in AI-DEV-076 — AI-Assisted Code Review: Build a repeatable agentic coding workflow.

## JUNE — Redesign the team

**Monthly coherence.** All three tracks examine **Engineering Organisations with Agents**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-DEV-059 — Engineering Organisations with Agents: AI pair programming: useful mental models**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible workshop on team workflows, role changes, metrics, governance, and operating models for agent-augmented software delivery. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind engineering organisations with agents, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-SEC-036 · **Related:** AI-DEV-022, AI-DEV-094 · **Follow-up:** AI-DEV-094

- **AI-DEV-058 — Engineering Organisations with Agents: A safe first workflow in a real repository**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible live coding on team workflows, role changes, metrics, governance, and operating models for agent-augmented software delivery. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind engineering organisations with agents, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-024, AI-DEV-095 · **Follow-up:** AI-DEV-095

- **AI-DEV-060 — Engineering Organisations with Agents: Common coding-agent failure modes**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible code review on team workflows, role changes, metrics, governance, and operating models for agent-augmented software delivery. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind engineering organisations with agents, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-DEV-023, AI-DEV-096 · **Follow-up:** AI-DEV-096

### Practitioner

- **AI-DEV-094 — Engineering Organisations with Agents: Build a repeatable agentic coding workflow**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical workshop applying team workflows, role changes, metrics, governance, and operating models for agent-augmented software delivery in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic engineering organisations with agents workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-059, AI-SEC-053 · **Related:** AI-DEV-022 · **Follow-up:** AI-DEV-022

- **AI-DEV-095 — Engineering Organisations with Agents: Context files, tools, tests, and verification**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical live coding applying team workflows, role changes, metrics, governance, and operating models for agent-augmented software delivery in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic engineering organisations with agents workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-058 · **Related:** AI-DEV-024 · **Follow-up:** AI-DEV-024

- **AI-DEV-096 — Engineering Organisations with Agents: Review AI changes like a senior engineer**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical code review applying team workflows, role changes, metrics, governance, and operating models for agent-augmented software delivery in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic engineering organisations with agents workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-DEV-060 · **Related:** AI-DEV-023 · **Follow-up:** AI-DEV-023

### Advanced

- **AI-DEV-022 — Engineering Organisations with Agents: Harness design for long-running coding work**  
  **Theme:** developer tooling · **Format:** workshop · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced workshop treating team workflows, role changes, metrics, governance, and operating models for agent-augmented software delivery as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving engineering organisations with agents, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-094, AI-SEC-018 · **Related:** AI-DEV-059 · **Follow-up:** —

- **AI-DEV-024 — Engineering Organisations with Agents: Parallel agents, sandboxes, and repair loops**  
  **Theme:** developer tooling · **Format:** live coding · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced live coding treating team workflows, role changes, metrics, governance, and operating models for agent-augmented software delivery as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving engineering organisations with agents, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-095 · **Related:** AI-DEV-058 · **Follow-up:** —

- **AI-DEV-023 — Engineering Organisations with Agents: Measure engineering impact beyond generated lines**  
  **Theme:** developer tooling · **Format:** code review · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced code review treating team workflows, role changes, metrics, governance, and operating models for agent-augmented software delivery as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving engineering organisations with agents, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-DEV-096 · **Related:** AI-DEV-060 · **Follow-up:** —

### Cross-track pathway

**AI-DEV-059 Engineering Organisations with Agents: AI pair programming: useful mental models** → **AI-DEV-094 Engineering Organisations with Agents: Build a repeatable agentic coding workflow** → **AI-DEV-022 Engineering Organisations with Agents: Harness design for long-running coding work**

### Voting opportunities

- **Non-negotiable foundation:** AI-DEV-059 — Engineering Organisations with Agents: AI pair programming: useful mental models. It protects prerequisites for later months.
- **Voting cluster:** AI-DEV-060 — Engineering Organisations with Agents: Common coding-agent failure modes; AI-DEV-095 — Engineering Organisations with Agents: Context files, tools, tests, and verification; AI-DEV-096 — Engineering Organisations with Agents: Review AI changes like a senior engineer; AI-DEV-024 — Engineering Organisations with Agents: Parallel agents, sandboxes, and repair loops.
- **Conditional unlock:** AI-DEV-023 — Engineering Organisations with Agents: Measure engineering impact beyond generated lines becomes visible after strong interest/participation in AI-SEC-053 — Secure Agentic SDLC: Red-team an AI workflow.

## 6. Longitudinal pathways

- **Foundation spine:** Oct [F] AI-DEV-038 AI Pair Programming → Dec [F] AI-DEV-071 Specification-Driven Development → Feb [F] AI-DEV-047 Agentic Testing & Debugging → Apr [F] AI-DEV-041 AI-Assisted Code Review → Jun [F] AI-DEV-059 Engineering Organisations with Agents
- **Practitioner spine:** Oct [P] AI-DEV-073 AI Pair Programming → Dec [P] AI-DEV-106 Specification-Driven Development → Feb [P] AI-DEV-082 Agentic Testing & Debugging → Apr [P] AI-DEV-076 AI-Assisted Code Review → Jun [P] AI-DEV-094 Engineering Organisations with Agents
- **Advanced spine:** Oct [A] AI-DEV-001 AI Pair Programming → Dec [A] AI-DEV-034 Specification-Driven Development → Feb [A] AI-DEV-010 Agentic Testing & Debugging → Apr [A] AI-DEV-004 AI-Assisted Code Review → Jun [A] AI-DEV-022 Engineering Organisations with Agents

## 7. Branching paths

```text
AI-DEV-091 Coding Agents
├── implementation branch → AI-DEV-083 Agentic Testing & Debugging
├── architecture branch   → AI-DEV-033 Loop Engineering
└── frontier branch       → AI-DEV-005 AI-Assisted Code Review
```

Member interest can determine which branch receives a live workshop versus becoming optional reading/lab material. The prerequisite spine remains protected.

## 8. Season-level voting model

- **Editorially protected:** first Foundation topic each month, plus any prerequisite explicitly required by a later Core session.
- **Primary voting surface:** Elective Foundation topics, Practitioner trade-off labs, and Advanced architecture alternatives.
- **Unlockable:** Experimental Advanced sessions and frontier branches; reveal only after participation or interest thresholds are met.
- **Wild-card slot:** reserve at least one spring session for an emerging development that passes editorial relevance and evidence checks.

## 9. Simplified programme graph

```text
[Oct] AI-DEV-073 AI Pair Programming
      ↓
[Nov] AI-CTX-015 Context Engineering for Code
      ↓
[Jan] AI-DEV-091 Coding Agents
      ↓
[Feb] AI-DEV-082 Agentic Testing & Debugging
      ↓
[Apr] AI-DEV-076 AI-Assisted Code Review
      ↓
[Jun] AI-DEV-094 Engineering Organisations with Agents
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
- **Technical depth:** 4/5
- **Hands-on intensity:** 5/5
- **Production relevance:** 4/5
- **Research orientation:** 2/5
