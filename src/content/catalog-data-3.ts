import type { CategoryDefinition } from "./catalog-types";

export const categories3: CategoryDefinition[] = [
  {
    name: "infrastructure",
    code: "INF",
    suffixes: {
      Advanced: ["Inference platform architecture","Optimize serving under cost and latency constraints","Scheduling, isolation, and multi-tenant reliability"],
      Foundation: ["CPU, GPU, memory, and network intuition","Capacity and quota basics","Where AI workloads actually run"],
      Practitioner: ["Batching, queues, and autoscaling","Deploy an inference workload","Measure utilization and bottlenecks"],
    },
    concepts: [
      { title: "Inference Architecture", summary: "serving topologies, batch versus realtime, accelerators, schedulers, edge/cloud placement, and scale", programmes: [0], months: [4], meta: "b0311202011190316111c021711100316101" },
      { title: "Inference Platforms", summary: "serving, batching, autoscaling, GPU scheduling, isolation, throughput, and capacity planning", programmes: [6], months: [6], meta: "10310202b111c03191116021011160317101" },
    ],
  },
  {
    name: "production engineering",
    code: "OPS",
    suffixes: {
      Advanced: ["Cost-quality-latency optimization","Incident response for nondeterministic systems","SLOs and reliability architecture"],
      Foundation: ["From demo to service: what changes?","Latency, cost, and reliability basics","Simple operational failure modes"],
      Practitioner: ["Caching, fallbacks, and model routing","Design for retries, quotas, and degraded modes","Instrument a production AI path"],
    },
    concepts: [
      { title: "AI Incident Response", summary: "detecting, triaging, mitigating, and learning from quality, safety, availability, and cost incidents", programmes: [6], months: [4], meta: "01111202b031c02190316111711161010031" },
      { title: "AI Observability", summary: "traces, prompts, tool calls, retrieval events, model usage, quality signals, and incident diagnosis", programmes: [6], months: [7], meta: "b111020210316021c0319111011171016031" },
      { title: "AI Performance Lab", summary: "measure and optimize latency, cost, caching, streaming, routing, and throughput on a working system", programmes: [2], months: [6], meta: "b111020210316021c0319111011171016031" },
      { title: "Deploy & Observe AI Features", summary: "release strategies, telemetry, traces, cost controls, quality monitoring, and rollback for AI features", programmes: [4], months: [6], meta: "b111020210316021c0319111011171016031" },
      { title: "Latency & Cost Engineering", summary: "token economics, batching, caching, streaming, request shaping, and cost-quality-latency trade-offs", programmes: [6], months: [1], meta: "01111202b031c02190316111711161010031" },
      { title: "Model Routing & Fallbacks", summary: "task-based routing, confidence, cascading, fallbacks, policy constraints, and multi-model resilience", programmes: [6], months: [3], meta: "1111b202003190216031c111611101017031" },
      { title: "Production AI Fundamentals", summary: "observability, latency, cost, reliability, fallbacks, SLOs, and incident-ready AI services", programmes: [1], months: [6], meta: "b111020210316021c0319111011171016031" },
    ],
  },
  {
    name: "AI product engineering",
    code: "PDT",
    suffixes: {
      Advanced: ["Build-vs-buy and platform economics","Governance, risk tiers, and reusable capabilities","Portfolio and platform decisions for AI products"],
      Foundation: ["Capability, constraint, and user-value mapping","Define success before picking a model","Find a problem worth adding AI to"],
      Practitioner: ["Design product fallbacks and human escape hatches","Run an experiment with measurable value","Shape an AI feature from discovery to telemetry"],
    },
    concepts: [
      { title: "AI Product Discovery", summary: "choosing valuable AI problems, capability mapping, user research, risk, success metrics, and non-AI alternatives", programmes: [4], months: [8], meta: "82021111c03110318111c02111118101c031" },
    ],
  },
  {
    name: "protocols",
    code: "PRT",
    suffixes: {
      Advanced: ["Evolve protocols without locking the platform","Interoperability at enterprise scale","Protocol architecture and trust boundaries"],
      Foundation: ["MCP, A2A, REST: different jobs","Read a protocol flow end to end","Why agent protocols exist"],
      Practitioner: ["Auth, capabilities, versioning, and contract tests","Choose protocol boundaries pragmatically","Implement one interoperable slice"],
    },
    concepts: [
      { title: "Agent Protocol Architecture", summary: "MCP, A2A, HTTP/REST, events, capability discovery, and choosing interoperability boundaries", programmes: [0], months: [2], meta: "920201106030911000306020011091006030" },
      { title: "Model Context Protocol (MCP)", summary: "client-server context/tool integration, capabilities, authorization, extensions, and production deployment trade-offs", programmes: [3], months: [1], meta: "620291100030611090300020911061000030" },
      { title: "Protocol Interoperability Lab", summary: "hands-on comparison of MCP, A2A, REST, and event-based integration using the same scenario", programmes: [2], months: [2], meta: "920201106030911000306020011091006030" },
    ],
  },
];
