export type ProgrammeMonth = {
  month: string;
  hook: string;
  topic: string;
};

export type CatalogProgramme = {
  code: string;
  name: string;
  tagline: string;
  description: string;
  narrative: ProgrammeMonth[];
};

export const catalogProgrammes: CatalogProgramme[] = [
  {
    code: "P1",
    name: "AI Engineering Foundations",
    tagline: "Understand the machinery before you automate the world.",
    description:
      "A concept-first season that builds durable mental models, then progressively turns them into retrieval, agents, evaluation, security, and production practice.",
    narrative: [
      { month: "October", hook: "See the machine", topic: "LLM Mental Models" },
      {
        month: "November",
        hook: "Control the interaction",
        topic: "Prompting as Interface Design",
      },
      {
        month: "December",
        hook: "Represent meaning",
        topic: "Embeddings & Semantic Search",
      },
      { month: "January", hook: "Ground the model", topic: "RAG Systems" },
      {
        month: "February",
        hook: "Give it actions",
        topic: "Agent Fundamentals",
      },
      {
        month: "March",
        hook: "Measure behavior",
        topic: "Evaluation-Driven AI Engineering",
      },
      {
        month: "April",
        hook: "Defend boundaries",
        topic: "AI Security Fundamentals",
      },
      {
        month: "May",
        hook: "Operate reliably",
        topic: "Production AI Fundamentals",
      },
      {
        month: "June",
        hook: "Integrate everything",
        topic: "Integrated AI System Capstone",
      },
    ],
  },
  {
    code: "P2",
    name: "The AI-Augmented Developer",
    tagline: "From autocomplete to engineered agentic software delivery.",
    description:
      "Treats AI coding as an engineering discipline: context, specs, tools, tests, loops, review, security, and team operating models.",
    narrative: [
      { month: "October", hook: "Pair", topic: "AI Pair Programming" },
      {
        month: "November",
        hook: "Feed context",
        topic: "Context Engineering for Code",
      },
      {
        month: "December",
        hook: "Specify",
        topic: "Specification-Driven Development",
      },
      { month: "January", hook: "Delegate", topic: "Coding Agents" },
      {
        month: "February",
        hook: "Verify",
        topic: "Agentic Testing & Debugging",
      },
      { month: "March", hook: "Loop", topic: "Loop Engineering" },
      { month: "April", hook: "Review", topic: "AI-Assisted Code Review" },
      { month: "May", hook: "Constrain", topic: "Secure Agentic SDLC" },
      {
        month: "June",
        hook: "Redesign the team",
        topic: "Engineering Organisations with Agents",
      },
    ],
  },
  {
    code: "P3",
    name: "Agentic Systems",
    tagline: "Design agents that can act—without pretending autonomy is magic.",
    description:
      "A systems curriculum for tool-using agents, starting with design patterns and tool contracts, then protocols, memory, orchestration, evaluation, security, and long-running work.",
    narrative: [
      {
        month: "October",
        hook: "Choose the pattern",
        topic: "Agent Design Patterns",
      },
      {
        month: "November",
        hook: "Give capabilities",
        topic: "Tool Design for Agents",
      },
      {
        month: "December",
        hook: "Connect ecosystems",
        topic: "Model Context Protocol (MCP)",
      },
      { month: "January", hook: "Remember selectively", topic: "Agent Memory" },
      {
        month: "February",
        hook: "Coordinate work",
        topic: "Agent Orchestration",
      },
      {
        month: "March",
        hook: "Split responsibility",
        topic: "Multi-Agent Systems",
      },
      { month: "April", hook: "Measure the loop", topic: "Agent Evaluation" },
      {
        month: "May",
        hook: "Contain the blast radius",
        topic: "Agent Security & Containment",
      },
      {
        month: "June",
        hook: "Run for the long haul",
        topic: "Long-Running Agents",
      },
    ],
  },
  {
    code: "P4",
    name: "Production AI Engineering",
    tagline: "Make AI boring enough to trust in production.",
    description:
      "Starts with measurement, then instruments, optimizes, routes, hardens retrieval and agents, secures the platform, scales inference, and practices incident response.",
    narrative: [
      {
        month: "October",
        hook: "Define quality",
        topic: "Evaluation-Driven AI Engineering",
      },
      { month: "November", hook: "See the system", topic: "AI Observability" },
      {
        month: "December",
        hook: "Price the system",
        topic: "Latency & Cost Engineering",
      },
      {
        month: "January",
        hook: "Route intelligently",
        topic: "Model Routing & Fallbacks",
      },
      {
        month: "February",
        hook: "Harden retrieval",
        topic: "Reliable RAG in Production",
      },
      {
        month: "March",
        hook: "Harden agents",
        topic: "Reliable Agents in Production",
      },
      {
        month: "April",
        hook: "Secure the platform",
        topic: "Production AI Security",
      },
      { month: "May", hook: "Scale serving", topic: "Inference Platforms" },
      {
        month: "June",
        hook: "Survive incidents",
        topic: "AI Incident Response",
      },
    ],
  },
  {
    code: "P5",
    name: "AI Architecture",
    tagline: "Design the boundaries before the framework chooses them for you.",
    description:
      "Uses AI systems to teach architecture: context, retrieval, graph knowledge, tool contracts, protocols, event-driven systems, memory, gateways, and inference topologies.",
    narrative: [
      {
        month: "October",
        hook: "Assemble context",
        topic: "Context Architecture",
      },
      {
        month: "November",
        hook: "Design retrieval",
        topic: "Retrieval Architecture",
      },
      {
        month: "December",
        hook: "Model knowledge",
        topic: "Knowledge Graphs for AI Systems",
      },
      {
        month: "January",
        hook: "Define capabilities",
        topic: "Tool & Capability Contracts",
      },
      {
        month: "February",
        hook: "Standardize boundaries",
        topic: "Agent Protocol Architecture",
      },
      {
        month: "March",
        hook: "Decouple with events",
        topic: "Event-Driven AI Systems",
      },
      { month: "April", hook: "Place memory", topic: "Memory Architecture" },
      { month: "May", hook: "Govern models", topic: "Model Gateways" },
      { month: "June", hook: "Place compute", topic: "Inference Architecture" },
    ],
  },
  {
    code: "P6",
    name: "Research to Engineering",
    tagline:
      "Read the paper, reproduce the claim, make the engineering decision.",
    description:
      "Builds scientific literacy for software engineers by moving from model mechanics to reasoning, inference, multimodality, specialized models, adaptation, synthetic data, and emerging architectures.",
    narrative: [
      {
        month: "October",
        hook: "Understand the base",
        topic: "Transformers from First Principles",
      },
      {
        month: "November",
        hook: "Interrogate reasoning",
        topic: "Reasoning Systems",
      },
      {
        month: "December",
        hook: "Spend compute wisely",
        topic: "Inference & Test-Time Compute",
      },
      { month: "January", hook: "Cross modalities", topic: "Multimodal AI" },
      {
        month: "February",
        hook: "Specialize the model",
        topic: "Small & Specialized Models",
      },
      {
        month: "March",
        hook: "Adapt behavior",
        topic: "Fine-Tuning & Adaptation",
      },
      { month: "April", hook: "Create data", topic: "Synthetic Data" },
      {
        month: "May",
        hook: "Challenge the architecture",
        topic: "Emerging Model Architectures",
      },
      {
        month: "June",
        hook: "Reproduce evidence",
        topic: "Research Reproduction Studio",
      },
    ],
  },
  {
    code: "P7",
    name: "AI Experimental Lab",
    tagline: "Build it, break it, measure it, explain what happened.",
    description:
      "A workshop-first season where members learn by designing controlled experiments, competitions, red-team exercises, and benchmarks.",
    narrative: [
      {
        month: "October",
        hook: "Hypothesize",
        topic: "Prompt & Context Battle",
      },
      { month: "November", hook: "Compare", topic: "Model Bake-Off" },
      { month: "December", hook: "Break retrieval", topic: "RAG Failure Lab" },
      {
        month: "January",
        hook: "Break agents",
        topic: "Agent Reliability Lab",
      },
      {
        month: "February",
        hook: "Force interoperability",
        topic: "Protocol Interoperability Lab",
      },
      {
        month: "March",
        hook: "Attack the metric",
        topic: "Evaluation Challenge",
      },
      { month: "April", hook: "Attack the system", topic: "AI Red-Team Lab" },
      {
        month: "May",
        hook: "Optimize the system",
        topic: "AI Performance Lab",
      },
      {
        month: "June",
        hook: "Explain the evidence",
        topic: "Build-Break-Explain Demo Day",
      },
    ],
  },
  {
    code: "P8",
    name: "Full-Stack AI Product Engineer",
    tagline: "Ship the whole product, not just the model call.",
    description:
      "Follows an AI product from problem discovery through backend, retrieval, agents, UX, evaluation, deployment, observability, and secure launch.",
    narrative: [
      {
        month: "October",
        hook: "Choose the problem",
        topic: "AI Product Discovery",
      },
      {
        month: "November",
        hook: "Create the model boundary",
        topic: "Model Interaction Layer",
      },
      {
        month: "December",
        hook: "Build the service",
        topic: "AI Backend Engineering",
      },
      {
        month: "January",
        hook: "Add knowledge",
        topic: "Retrieval as a Product Capability",
      },
      {
        month: "February",
        hook: "Add action",
        topic: "Agentic Product Workflows",
      },
      {
        month: "March",
        hook: "Design human control",
        topic: "AI UX & Human Control",
      },
      { month: "April", hook: "Prove value", topic: "Product Evals" },
      {
        month: "May",
        hook: "Operate safely",
        topic: "Deploy & Observe AI Features",
      },
      { month: "June", hook: "Launch responsibly", topic: "Secure AI Launch" },
    ],
  },
  {
    code: "P9",
    name: "Future of Software Engineering",
    tagline: "Engineer the systems that engineer the software.",
    description:
      "Explores how software development changes when agents become persistent collaborators: coding agents, context, specifications, loop engineering, graph engineering, autonomous development, and organisations.",
    narrative: [
      {
        month: "October",
        hook: "Reframe the tool",
        topic: "Coding Agents as a New Engineering Primitive",
      },
      {
        month: "November",
        hook: "Curate context",
        topic: "Context Engineering for Code",
      },
      {
        month: "December",
        hook: "Specify intent",
        topic: "Specification-Driven Development",
      },
      {
        month: "January",
        hook: "Engineer the loop",
        topic: "Loop Engineering",
      },
      {
        month: "February",
        hook: "Encode the workflow",
        topic: "Graph Engineering",
      },
      {
        month: "March",
        hook: "Increase autonomy",
        topic: "Autonomous Development Systems",
      },
      {
        month: "April",
        hook: "Redesign collaboration",
        topic: "Human-Agent Collaboration",
      },
      {
        month: "May",
        hook: "Redesign the organisation",
        topic: "Agentic Engineering Organisations",
      },
      {
        month: "June",
        hook: "Imagine the architecture",
        topic: "Future Software Architecture Patterns",
      },
    ],
  },
];
