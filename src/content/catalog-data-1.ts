import type { CategoryDefinition } from "./catalog-types";

export const categories1: CategoryDefinition[] = [
  {
    name: "agents",
    code: "AGT",
    suffixes: {
      Advanced: ["Agent orchestration architecture clinic","Long-horizon reliability and failure recovery","Multi-agent coordination and emergent failure"],
      Foundation: ["Agent, workflow, or chatbot?","Tools, state, loops, and stop conditions","When autonomy makes things worse"],
      Practitioner: ["Build an agent with tools","Human approval and controllable autonomy","State, memory, and recovery paths"],
    },
    concepts: [
      { title: "Agent Design Patterns", summary: "single-agent patterns, planners, routers, handoffs, state machines, and when deterministic workflows win", programmes: [3], months: [8], meta: "00311111b20290216031c111703101016111" },
      { title: "Agent Fundamentals", summary: "tool-using loops, state, stop conditions, autonomy, and the distinction between workflows and agents", programmes: [1], months: [2], meta: "1031b11102026021c0319111603171010111" },
      { title: "Agent Memory", summary: "working memory, durable memory, summaries, retrieval, user state, and memory quality evaluation", programmes: [3], months: [3], meta: "00311111b20290216031c111703101016111" },
      { title: "Agent Orchestration", summary: "routing, handoffs, planning, delegation, retries, state, and coordination across multiple steps", programmes: [3], months: [2], meta: "1031b11102026021c0319111603171010111" },
      { title: "Agentic Product Workflows", summary: "embedding tool-using agents into products with scoped autonomy, approvals, state, and recovery", programmes: [4], months: [2], meta: "1031b11102026021c0319111603171010111" },
      { title: "Long-Running Agents", summary: "checkpointing, resumability, compaction, task decomposition, monitoring, and recovery across long horizons", programmes: [3], months: [4], meta: "b03001101202c02090306110003061007110" },
      { title: "Multi-Agent Systems", summary: "specialist agents, delegation, shared context, communication, contention, and coordination overhead", programmes: [3], months: [5], meta: "b03001101202c02090306110003061007110" },
      { title: "Reliable Agents in Production", summary: "timeouts, retries, checkpoints, idempotency, approval gates, and recovery from partial side effects", programmes: [6], months: [5], meta: "b03101111202c02190316111003161017111" },
      { title: "Tool Design for Agents", summary: "tool schemas, affordances, error contracts, idempotency, observability, and safe side effects", programmes: [3], months: [7], meta: "1031b11102026021c0319111603171010111" },
    ],
  },
  {
    name: "architecture",
    code: "ARC",
    suffixes: {
      Advanced: ["Architecture clinic under hard constraints","Distributed systems trade-offs for AI","Failure domains, governance, and future evolution"],
      Foundation: ["Read the system as boxes and arrows","Recognize coupling and hidden dependencies","State, boundaries, and contracts"],
      Practitioner: ["Compare competing patterns and trade-offs","Design the reference architecture","Evolve the architecture without rewrites"],
    },
    concepts: [
      { title: "AI Backend Engineering", summary: "async jobs, queues, persistence, tool execution, rate limits, secrets, and service boundaries around AI workloads", programmes: [4], months: [1], meta: "b03101111202c02161119031711100316101" },
      { title: "Context Architecture", summary: "how system prompts, memory, retrieval, tools, history, and policy are assembled into model-visible state", programmes: [0], months: [8], meta: "00311111b2029021c1116031611170310101" },
      { title: "Event-Driven AI Systems", summary: "queues, events, async jobs, durable workflows, agent triggers, and decoupled AI services", programmes: [0], months: [5], meta: "b03101111202c02161119031711100316101" },
      { title: "Future Software Architecture Patterns", summary: "software designed around agents, durable workflows, tool protocols, evaluators, human gates, and continuous adaptation", programmes: [5], months: [4], meta: "b03201121202c02261129032711200326102" },
      { title: "Integrated AI System Capstone", summary: "combining model interaction, retrieval, tools, evaluation, security, and operations in one coherent system", programmes: [1], months: [4], meta: "b03101111202c02161119031711100316101" },
      { title: "Knowledge Graphs for AI Systems", summary: "graph-shaped knowledge, entity relationships, hybrid retrieval, provenance, and graph-assisted reasoning", programmes: [0], months: [1], meta: "b03101111202c02161119031711100316101" },
      { title: "Memory Architecture", summary: "session state, user memory, episodic stores, summaries, retrieval, retention, and memory governance", programmes: [0], months: [0], meta: "00311111b2029021c1116031611170310101" },
      { title: "Model Gateways", summary: "provider abstraction, routing, policy, observability, caching, quotas, and multi-model operations", programmes: [0], months: [6], meta: "1031b111020260219111c031011160317101" },
      { title: "Model Interaction Layer", summary: "API design around model calls, structured outputs, streaming, retries, provider boundaries, and testability", programmes: [4], months: [7], meta: "1031b111020260219111c031011160317101" },
      { title: "Retrieval Architecture", summary: "indexes, search strategies, rerankers, freshness, permissions, and retrieval services as platform components", programmes: [0], months: [7], meta: "1031b111020260219111c031011160317101" },
      { title: "Tool & Capability Contracts", summary: "typed tool surfaces, capability boundaries, side-effect contracts, and evolvable agent interfaces", programmes: [0], months: [3], meta: "00311111b2029021c1116031611170310101" },
    ],
  },
  {
    name: "AI UX",
    code: "AUX",
    suffixes: {
      Advanced: ["AI interaction architecture","Adaptive interfaces for agentic products","Trust calibration, controllability, and policy UX"],
      Foundation: ["AI UX patterns users can understand","Communicate uncertainty and sources","When a chat box is the wrong interface"],
      Practitioner: ["Build feedback and recovery into the UI","Design streaming, edits, and human control","Prototype an AI interaction and usability-test it"],
    },
    concepts: [
      { title: "AI UX & Human Control", summary: "streaming, edits, confidence, sources, approval, undo, feedback, and designing controllable AI interactions", programmes: [4], months: [5], meta: "10316202c1111021c0316111c11110316101" },
    ],
  },
  {
    name: "context engineering",
    code: "CTX",
    suffixes: {
      Advanced: ["Attention budgets, routing, and subagents","Context architecture for long-running systems","Context policy as a system boundary"],
      Foundation: ["Context overload and context rot","Instructions, examples, history, and tools","What actually enters the context window?"],
      Practitioner: ["Audit a bloated agent context","Compaction, memory, and just-in-time retrieval","Design a context pipeline"],
    },
    concepts: [
      { title: "Context Engineering for Code", summary: "repository context, instruction files, just-in-time retrieval, tool output, memory, and keeping coding agents focused", programmes: [5,8], months: [7], meta: "b111103102029111c0316021710101116031" },
      { title: "Prompting as Interface Design", summary: "instructions, examples, structured outputs, contracts, and the boundary between prompt wording and system design", programmes: [1], months: [7], meta: "b111103102029111c0316021710101116031" },
    ],
  },
];
