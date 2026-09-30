import type { CategoryDefinition } from "./catalog-types";

export const categories4: CategoryDefinition[] = [
  {
    name: "retrieval / RAG",
    code: "RET",
    suffixes: {
      Advanced: ["Agentic retrieval and adaptive search","Freshness, permissions, and multi-index design","Retrieval architecture clinic"],
      Foundation: ["Chunks, embeddings, and similarity by hand","Grounding, citations, and obvious failure modes","Why retrieval changes the answer"],
      Practitioner: ["Build a retrieval pipeline end to end","Evaluate retrieval before generation","Hybrid search, reranking, and query rewriting"],
    },
    concepts: [
      { title: "Embeddings & Semantic Search", summary: "vector representations, similarity, chunk semantics, and when embeddings are useful or misleading", programmes: [1], months: [1], meta: "12020111b03190316111c021003161017111" },
      { title: "RAG Systems", summary: "retrieval-augmented generation from indexing through grounding, citations, evaluation, and freshness", programmes: [1], months: [3], meta: "b202111100316031c1119021703101016111" },
      { title: "Reliable RAG in Production", summary: "freshness, access control, chunk lifecycle, retrieval evaluation, reranking, and failure recovery", programmes: [6], months: [2], meta: "0202b1111031c03191116021603171010111" },
      { title: "Retrieval as a Product Capability", summary: "ingestion, search UX, permissions, freshness, feedback, and operational ownership of retrieval-backed features", programmes: [4], months: [3], meta: "b202111100316031c1119021703101016111" },
    ],
  },
  {
    name: "research",
    code: "RSH",
    suffixes: {
      Advanced: ["Deep research walkthrough","Open questions and competing hypotheses","Scaling laws, ablations, and hidden assumptions"],
      Foundation: ["Read the diagram, not the hype","The intuition before the equations","What the result does and does not prove"],
      Practitioner: ["Implement a simplified paper idea","Reproduce one experiment carefully","Translate a paper into an engineering decision"],
    },
    concepts: [
      { title: "Emerging Model Architectures", summary: "alternatives and extensions to mainstream transformer designs, with emphasis on evidence rather than novelty", programmes: [7], months: [6], meta: "6032b202411240326022b11260324112b102" },
      { title: "Fine-Tuning & Adaptation", summary: "supervised fine-tuning, preference optimization, adapters, data quality, evaluation, and when adaptation is justified", programmes: [7], months: [5], meta: "40316202b111b031402161114031b1116101" },
      { title: "Inference & Test-Time Compute", summary: "sampling, search, verification, compute allocation, and quality-latency-cost trade-offs at inference time", programmes: [7], months: [1], meta: "40306202b110b030402061104030b1106100" },
      { title: "Multimodal AI", summary: "text, image, audio, video, cross-modal representations, grounding, and multimodal product implications", programmes: [7], months: [3], meta: "b031420261116031b0214111b03161114101" },
      { title: "Reasoning Systems", summary: "deliberation, decomposition, verification, search, tool use, and evidence around reasoning-time techniques", programmes: [7], months: [7], meta: "6030b202411040306020b11060304110b100" },
      { title: "Research Reproduction Studio", summary: "reading papers critically, reproducing a tractable result, documenting deviations, and converting evidence into engineering insight", programmes: [7], months: [4], meta: "40316202b111b031402161114031b1116101" },
      { title: "Small & Specialized Models", summary: "compact models, domain specialization, distillation, edge deployment, and when smaller models beat general-purpose models", programmes: [7], months: [2], meta: "6031b202411140316021b11160314111b101" },
      { title: "Synthetic Data", summary: "data generation, filtering, diversity, contamination, self-improvement loops, and synthetic-data evaluation", programmes: [7], months: [0], meta: "b030420261106030b0204110b03061104100" },
      { title: "Transformers from First Principles", summary: "attention, tokenization, representations, training objectives, and the engineering intuition behind transformer models", programmes: [7], months: [8], meta: "b031420261116031b0214111b03161114101" },
    ],
  },
  {
    name: "security",
    code: "SEC",
    suffixes: {
      Advanced: ["Adversarial evaluation and abuse-case design","Containment, blast radius, and credential boundaries","Security architecture for autonomous agents"],
      Foundation: ["Permissions, data boundaries, and safe defaults","Prompt injection in plain language","Threat models for AI features"],
      Practitioner: ["Design defenses for indirect prompt injection","Red-team an AI workflow","Tool permissions, sandboxing, and approval gates"],
    },
    concepts: [
      { title: "AI Red-Team Lab", summary: "adversarial testing of prompts, tools, retrieval, data boundaries, and approval flows", programmes: [2], months: [0], meta: "0202a11190310111a031902101019031a111" },
      { title: "AI Security Fundamentals", summary: "prompt injection, tool abuse, data boundaries, permissions, containment, and adversarial testing", programmes: [1], months: [0], meta: "0202a11190310111a031902101019031a111" },
      { title: "Agent Security & Containment", summary: "least privilege, sandboxing, approval gates, prompt injection defenses, and blast-radius reduction", programmes: [3], months: [6], meta: "92020111a03191110031a0219101a0310111" },
      { title: "Production AI Security", summary: "identity, secrets, tenancy, data governance, auditability, and secure tool/model boundaries", programmes: [6], months: [0], meta: "0202a11190310111a031902101019031a111" },
      { title: "Secure AI Launch", summary: "launch checklists, permissions, data handling, red teaming, monitoring, incident plans, and governance", programmes: [4], months: [4], meta: "a20291110031a11190310021a10100319111" },
      { title: "Secure Agentic SDLC", summary: "permissions, sandboxes, secrets, provenance, CI checks, and approval boundaries for coding agents", programmes: [8], months: [6], meta: "92020111a03191110031a0219101a0310111" },
    ],
  },
];
