import type { CategoryDefinition } from "./catalog-types";

export const categories2: CategoryDefinition[] = [
  {
    name: "developer tooling",
    code: "DEV",
    suffixes: {
      Advanced: ["Harness design for long-running coding work","Measure engineering impact beyond generated lines","Parallel agents, sandboxes, and repair loops"],
      Foundation: ["A safe first workflow in a real repository","AI pair programming: useful mental models","Common coding-agent failure modes"],
      Practitioner: ["Build a repeatable agentic coding workflow","Context files, tools, tests, and verification","Review AI changes like a senior engineer"],
    },
    concepts: [
      { title: "AI Pair Programming", summary: "effective collaboration with coding assistants while retaining engineering ownership, verification, and codebase understanding", programmes: [8], months: [8], meta: "7030c202311030307020c11070303110c100" },
      { title: "AI-Assisted Code Review", summary: "using models for review while preserving threat modeling, architecture judgment, and human accountability", programmes: [8], months: [0], meta: "7030c202311030307020c11070303110c100" },
      { title: "Agentic Engineering Organisations", summary: "team topology, governance, platform teams, evaluation culture, knowledge flow, and workforce implications", programmes: [5], months: [6], meta: "30307202c110c030302071103030c1107100" },
      { title: "Agentic Testing & Debugging", summary: "using agents to generate, run, diagnose, and repair tests without outsourcing judgment", programmes: [8], months: [2], meta: "30307202c110c030302071103030c1107100" },
      { title: "Autonomous Development Systems", summary: "long-running software tasks, self-verification, environments, subagents, repair loops, and supervision", programmes: [5], months: [5], meta: "c032320271127032c0223112c03271123102" },
      { title: "Coding Agents as a New Engineering Primitive", summary: "coding agents as inspect-edit-run-verify systems rather than autocomplete tools", programmes: [5], months: [8], meta: "7030c202311030307020c11070303110c100" },
      { title: "Coding Agents", summary: "agentic coding workflows that inspect repositories, edit files, run tools, test changes, and recover from failure", programmes: [8], months: [3], meta: "7030c202311030307020c11070303110c100" },
      { title: "Engineering Organisations with Agents", summary: "team workflows, role changes, metrics, governance, and operating models for agent-augmented software delivery", programmes: [8], months: [4], meta: "c030320271107030c0203110c03071103100" },
      { title: "Graph Engineering", summary: "explicit workflow graphs that encode stages, state, branching, verification, and human/agent collaboration", programmes: [5], months: [2], meta: "30307202c110c030302071103030c1107100" },
      { title: "Human-Agent Collaboration", summary: "division of labor, approvals, escalation, judgment, context handoff, and maintaining human understanding", programmes: [5], months: [0], meta: "7031c202311130317021c11170313111c101" },
      { title: "Loop Engineering", summary: "designing iterative goal-action-verification-feedback loops that guide agents toward completion", programmes: [5,8], months: [3,5], meta: "c030320271107030c0203110c03071103100" },
      { title: "Specification-Driven Development", summary: "turning intent into executable specifications, acceptance criteria, constraints, and testable agent tasks", programmes: [5,8], months: [1], meta: "c031320271117031c0213111c03171113101" },
    ],
  },
  {
    name: "evaluation",
    code: "EVL",
    suffixes: {
      Advanced: ["Eval-driven system design","Judge reliability, leakage, and benchmark gaming","Macro-evals for multi-step agents"],
      Foundation: ["Spot flaky, subjective, and misleading metrics","Turn examples into test cases","What does 'good' mean for AI?"],
      Practitioner: ["Build an eval dataset and scorecard","Compare prompts, models, and workflows safely","Trace grading, tool-use checks, and regressions"],
    },
    concepts: [
      { title: "Agent Evaluation", summary: "trace-level evaluation of tool selection, handoffs, policy adherence, completion, and long-horizon reliability", programmes: [3], months: [0], meta: "c0312202611121116031c021c03121016111" },
      { title: "Evaluation Challenge", summary: "teams design competing eval suites and discover how metrics, datasets, and graders can mislead", programmes: [2], months: [5], meta: "20316202c1116111c031202120316101c111" },
      { title: "Evaluation-Driven AI Engineering", summary: "datasets, graders, traces, regression checks, and quality gates for nondeterministic systems", programmes: [1,6], months: [8,5], meta: "20316202c1116111c031202120316101c111" },
      { title: "Product Evals", summary: "connecting task success, user outcomes, quality metrics, online signals, and regression suites", programmes: [4], months: [0], meta: "c0312202611121116031c021c03121016111" },
    ],
  },
  {
    name: "experimentation",
    code: "EXP",
    suffixes: {
      Advanced: ["Adversarial experiment design","Build a benchmark that resists gaming","Reproduce, stress, and invalidate claims"],
      Foundation: ["Form a falsifiable AI hypothesis","Learn from surprising failures","Run a tiny experiment and record the result"],
      Practitioner: ["Benchmark competing approaches","Design a fair bake-off","Turn experimental evidence into a decision"],
    },
    concepts: [
      { title: "Agent Reliability Lab", summary: "stress-testing tool use, loops, recovery, approvals, and long-running behavior under controlled failure", programmes: [2], months: [3], meta: "503142022111502141112031503121114101" },
      { title: "Build-Break-Explain Demo Day", summary: "teams present one AI system, one failure they induced, one measurement they trust, and one lesson they would keep", programmes: [2], months: [4], meta: "403122025111402121115031403151112101" },
      { title: "Model Bake-Off", summary: "fair comparison of models on representative tasks using cost, latency, quality, and failure analysis", programmes: [2], months: [7], meta: "203052024110202051104030203041105100" },
      { title: "Prompt & Context Battle", summary: "controlled experiments comparing instruction, examples, context size, structure, and evaluation criteria", programmes: [2], months: [8], meta: "503042022110502041102030503021104100" },
      { title: "RAG Failure Lab", summary: "deliberately breaking retrieval pipelines to expose chunking, query, freshness, permissions, and grounding failures", programmes: [2], months: [1], meta: "403122025111402121115031403151112101" },
    ],
  },
  {
    name: "fundamentals",
    code: "FND",
    suffixes: {
      Advanced: ["Architecture and implementation clinic","Reliability, limits, and scale","What changes when the assumptions break"],
      Foundation: ["Failure modes you should recognize","Mental model without the magic","Vocabulary, examples, and tiny experiments"],
      Practitioner: ["Build the smallest useful version","Testing, debugging, and edge cases","Trade-off lab with real inputs"],
    },
    concepts: [
      { title: "LLM Mental Models", summary: "tokens, probability, generation, context windows, and why fluent output is not the same as grounded knowledge", programmes: [1], months: [8], meta: "00311111b202c11190216031703101016111" },
    ],
  },
];
