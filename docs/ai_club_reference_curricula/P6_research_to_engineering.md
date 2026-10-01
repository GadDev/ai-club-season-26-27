# P6 — Research to Engineering

> **Read the paper, reproduce the claim, make the engineering decision.**

## 1. Programme identity

- **Educational philosophy:** Build scientific literacy for software engineers by moving from model mechanics to reasoning, inference, multimodality, specialized models, adaptation, synthetic data, emerging architectures, and reproduction.
- **Target audience:** Curious engineers who want to understand why modern AI behaves as it does and how research changes engineering practice.
- **Primary themes:** transformers, reasoning, inference, multimodality, small models, fine-tuning, synthetic data, new architectures
- **What makes it different:** Evidence quality, reproduction, and research interpretation are first-class engineering skills.
- **Main strengths:** Best research exposure; durable scientific habits; strong antidote to hype.
- **Potential weaknesses:** Requires careful curation and prep; less directly tied to weekly product delivery.
- **Expected difficulty profile:** Foundation sessions avoid heavy math where possible; Advanced track reaches papers, ablations, and systems research.

**Why it deserves to exist independently:** Evidence quality, reproduction, and research interpretation are first-class engineering skills. That creates a different set of curriculum trade-offs, voting clusters, and capstone outcomes than the other reference seasons.

## 2. Season narrative

**October — Understand the base:** Transformers from First Principles
↓
**November — Interrogate reasoning:** Reasoning Systems
↓
**December — Spend compute wisely:** Inference & Test-Time Compute
↓
**January — Cross modalities:** Multimodal AI
↓
**February — Specialize the model:** Small & Specialized Models
↓
**March — Adapt behavior:** Fine-Tuning & Adaptation
↓
**April — Create data:** Synthetic Data
↓
**May — Challenge the architecture:** Emerging Model Architectures
↓
**June — Reproduce evidence:** Research Reproduction Studio

## 3–5. Month-by-month curriculum, coherence, and cross-track pathways

## OCTOBER — Understand the base

**Monthly coherence.** All three tracks examine **Transformers from First Principles**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-RSH-053 — Transformers from First Principles: The intuition before the equations**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible research walkthrough on attention, tokenization, representations, training objectives, and the engineering intuition behind transformer models. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind transformers from first principles, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-025, AI-RSH-079 · **Follow-up:** AI-RSH-041, AI-RSH-079

- **AI-RSH-052 — Transformers from First Principles: Read the diagram, not the hype**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible hands-on lab on attention, tokenization, representations, training objectives, and the engineering intuition behind transformer models. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind transformers from first principles, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-027, AI-RSH-080 · **Follow-up:** AI-RSH-080

- **AI-RSH-054 — Transformers from First Principles: What the result does and does not prove**  
  **Theme:** research · **Format:** debate · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible debate on attention, tokenization, representations, training objectives, and the engineering intuition behind transformer models. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind transformers from first principles, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-026, AI-RSH-081 · **Follow-up:** AI-RSH-081

### Practitioner

- **AI-RSH-079 — Transformers from First Principles: Implement a simplified paper idea**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical research walkthrough applying attention, tokenization, representations, training objectives, and the engineering intuition behind transformer models in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic transformers from first principles workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-053 · **Related:** AI-RSH-025 · **Follow-up:** AI-RSH-025, AI-RSH-067

- **AI-RSH-080 — Transformers from First Principles: Reproduce one experiment carefully**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical hands-on lab applying attention, tokenization, representations, training objectives, and the engineering intuition behind transformer models in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic transformers from first principles workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-052 · **Related:** AI-RSH-027 · **Follow-up:** AI-RSH-027

- **AI-RSH-081 — Transformers from First Principles: Translate a paper into an engineering decision**  
  **Theme:** research · **Format:** debate · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical debate applying attention, tokenization, representations, training objectives, and the engineering intuition behind transformer models in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic transformers from first principles workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-054 · **Related:** AI-RSH-026 · **Follow-up:** AI-RSH-026

### Advanced

- **AI-RSH-025 — Transformers from First Principles: Deep research walkthrough**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced research walkthrough treating attention, tokenization, representations, training objectives, and the engineering intuition behind transformer models as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving transformers from first principles, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-079 · **Related:** AI-RSH-053 · **Follow-up:** AI-RSH-013

- **AI-RSH-027 — Transformers from First Principles: Scaling laws, ablations, and hidden assumptions**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced hands-on lab treating attention, tokenization, representations, training objectives, and the engineering intuition behind transformer models as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving transformers from first principles, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-080 · **Related:** AI-RSH-052 · **Follow-up:** —

- **AI-RSH-026 — Transformers from First Principles: Open questions and competing hypotheses**  
  **Theme:** research · **Format:** debate · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced debate treating attention, tokenization, representations, training objectives, and the engineering intuition behind transformer models as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving transformers from first principles, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-081 · **Related:** AI-RSH-054 · **Follow-up:** —

### Cross-track pathway

**AI-RSH-053 Transformers from First Principles: The intuition before the equations** → **AI-RSH-079 Transformers from First Principles: Implement a simplified paper idea** → **AI-RSH-025 Transformers from First Principles: Deep research walkthrough**

### Voting opportunities

- **Non-negotiable foundation:** AI-RSH-053 — Transformers from First Principles: The intuition before the equations. It protects prerequisites for later months.
- **Voting cluster:** AI-RSH-054 — Transformers from First Principles: What the result does and does not prove; AI-RSH-080 — Transformers from First Principles: Reproduce one experiment carefully; AI-RSH-081 — Transformers from First Principles: Translate a paper into an engineering decision; AI-RSH-027 — Transformers from First Principles: Scaling laws, ablations, and hidden assumptions.
- **Conditional unlock:** AI-RSH-026 — Transformers from First Principles: Open questions and competing hypotheses becomes visible after AI-RSH-053 or another October prerequisite.

## NOVEMBER — Interrogate reasoning

**Monthly coherence.** All three tracks examine **Reasoning Systems**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-RSH-041 — Reasoning Systems: The intuition before the equations**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible hands-on lab on deliberation, decomposition, verification, search, tool use, and evidence around reasoning-time techniques. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind reasoning systems, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-RSH-053 · **Related:** AI-RSH-013, AI-RSH-067 · **Follow-up:** AI-RSH-035, AI-RSH-067

- **AI-RSH-040 — Reasoning Systems: Read the diagram, not the hype**  
  **Theme:** research · **Format:** debate · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible debate on deliberation, decomposition, verification, search, tool use, and evidence around reasoning-time techniques. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind reasoning systems, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-015, AI-RSH-068 · **Follow-up:** AI-RSH-068

- **AI-RSH-042 — Reasoning Systems: What the result does and does not prove**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible research walkthrough on deliberation, decomposition, verification, search, tool use, and evidence around reasoning-time techniques. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind reasoning systems, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-014, AI-RSH-069 · **Follow-up:** AI-RSH-069

### Practitioner

- **AI-RSH-067 — Reasoning Systems: Implement a simplified paper idea**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical hands-on lab applying deliberation, decomposition, verification, search, tool use, and evidence around reasoning-time techniques in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic reasoning systems workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-041, AI-RSH-079 · **Related:** AI-RSH-013 · **Follow-up:** AI-RSH-013, AI-RSH-061

- **AI-RSH-068 — Reasoning Systems: Reproduce one experiment carefully**  
  **Theme:** research · **Format:** debate · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical debate applying deliberation, decomposition, verification, search, tool use, and evidence around reasoning-time techniques in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic reasoning systems workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-040 · **Related:** AI-RSH-015 · **Follow-up:** AI-RSH-015

- **AI-RSH-069 — Reasoning Systems: Translate a paper into an engineering decision**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical research walkthrough applying deliberation, decomposition, verification, search, tool use, and evidence around reasoning-time techniques in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic reasoning systems workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-042 · **Related:** AI-RSH-014 · **Follow-up:** AI-RSH-014

### Advanced

- **AI-RSH-013 — Reasoning Systems: Deep research walkthrough**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced hands-on lab treating deliberation, decomposition, verification, search, tool use, and evidence around reasoning-time techniques as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving reasoning systems, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-025, AI-RSH-067 · **Related:** AI-RSH-041 · **Follow-up:** AI-RSH-007

- **AI-RSH-015 — Reasoning Systems: Scaling laws, ablations, and hidden assumptions**  
  **Theme:** research · **Format:** debate · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced debate treating deliberation, decomposition, verification, search, tool use, and evidence around reasoning-time techniques as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving reasoning systems, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-068 · **Related:** AI-RSH-040 · **Follow-up:** —

- **AI-RSH-014 — Reasoning Systems: Open questions and competing hypotheses**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced research walkthrough treating deliberation, decomposition, verification, search, tool use, and evidence around reasoning-time techniques as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving reasoning systems, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-069 · **Related:** AI-RSH-042 · **Follow-up:** —

### Cross-track pathway

**AI-RSH-041 Reasoning Systems: The intuition before the equations** → **AI-RSH-067 Reasoning Systems: Implement a simplified paper idea** → **AI-RSH-013 Reasoning Systems: Deep research walkthrough**

### Voting opportunities

- **Non-negotiable foundation:** AI-RSH-041 — Reasoning Systems: The intuition before the equations. It protects prerequisites for later months.
- **Voting cluster:** AI-RSH-042 — Reasoning Systems: What the result does and does not prove; AI-RSH-068 — Reasoning Systems: Reproduce one experiment carefully; AI-RSH-069 — Reasoning Systems: Translate a paper into an engineering decision; AI-RSH-015 — Reasoning Systems: Scaling laws, ablations, and hidden assumptions.
- **Conditional unlock:** AI-RSH-014 — Reasoning Systems: Open questions and competing hypotheses becomes visible after strong interest/participation in AI-RSH-079 — Transformers from First Principles: Implement a simplified paper idea.

## DECEMBER — Spend compute wisely

**Monthly coherence.** All three tracks examine **Inference & Test-Time Compute**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-RSH-035 — Inference & Test-Time Compute: The intuition before the equations**  
  **Theme:** research · **Format:** debate · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible debate on sampling, search, verification, compute allocation, and quality-latency-cost trade-offs at inference time. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind inference & test-time compute, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-RSH-041 · **Related:** AI-RSH-007, AI-RSH-061 · **Follow-up:** AI-RSH-038, AI-RSH-061

- **AI-RSH-034 — Inference & Test-Time Compute: Read the diagram, not the hype**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible research walkthrough on sampling, search, verification, compute allocation, and quality-latency-cost trade-offs at inference time. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind inference & test-time compute, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-009, AI-RSH-062 · **Follow-up:** AI-RSH-062

- **AI-RSH-036 — Inference & Test-Time Compute: What the result does and does not prove**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible hands-on lab on sampling, search, verification, compute allocation, and quality-latency-cost trade-offs at inference time. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind inference & test-time compute, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-008, AI-RSH-063 · **Follow-up:** AI-RSH-063

### Practitioner

- **AI-RSH-061 — Inference & Test-Time Compute: Implement a simplified paper idea**  
  **Theme:** research · **Format:** debate · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical debate applying sampling, search, verification, compute allocation, and quality-latency-cost trade-offs at inference time in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic inference & test-time compute workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-035, AI-RSH-067 · **Related:** AI-RSH-007 · **Follow-up:** AI-RSH-007, AI-RSH-064

- **AI-RSH-062 — Inference & Test-Time Compute: Reproduce one experiment carefully**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical research walkthrough applying sampling, search, verification, compute allocation, and quality-latency-cost trade-offs at inference time in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic inference & test-time compute workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-034 · **Related:** AI-RSH-009 · **Follow-up:** AI-RSH-009

- **AI-RSH-063 — Inference & Test-Time Compute: Translate a paper into an engineering decision**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical hands-on lab applying sampling, search, verification, compute allocation, and quality-latency-cost trade-offs at inference time in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic inference & test-time compute workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-036 · **Related:** AI-RSH-008 · **Follow-up:** AI-RSH-008

### Advanced

- **AI-RSH-007 — Inference & Test-Time Compute: Deep research walkthrough**  
  **Theme:** research · **Format:** debate · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced debate treating sampling, search, verification, compute allocation, and quality-latency-cost trade-offs at inference time as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving inference & test-time compute, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-013, AI-RSH-061 · **Related:** AI-RSH-035 · **Follow-up:** AI-RSH-010

- **AI-RSH-009 — Inference & Test-Time Compute: Scaling laws, ablations, and hidden assumptions**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced research walkthrough treating sampling, search, verification, compute allocation, and quality-latency-cost trade-offs at inference time as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving inference & test-time compute, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-062 · **Related:** AI-RSH-034 · **Follow-up:** —

- **AI-RSH-008 — Inference & Test-Time Compute: Open questions and competing hypotheses**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced hands-on lab treating sampling, search, verification, compute allocation, and quality-latency-cost trade-offs at inference time as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving inference & test-time compute, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-063 · **Related:** AI-RSH-036 · **Follow-up:** —

### Cross-track pathway

**AI-RSH-035 Inference & Test-Time Compute: The intuition before the equations** → **AI-RSH-061 Inference & Test-Time Compute: Implement a simplified paper idea** → **AI-RSH-007 Inference & Test-Time Compute: Deep research walkthrough**

### Voting opportunities

- **Non-negotiable foundation:** AI-RSH-035 — Inference & Test-Time Compute: The intuition before the equations. It protects prerequisites for later months.
- **Voting cluster:** AI-RSH-036 — Inference & Test-Time Compute: What the result does and does not prove; AI-RSH-062 — Inference & Test-Time Compute: Reproduce one experiment carefully; AI-RSH-063 — Inference & Test-Time Compute: Translate a paper into an engineering decision; AI-RSH-009 — Inference & Test-Time Compute: Scaling laws, ablations, and hidden assumptions.
- **Conditional unlock:** AI-RSH-008 — Inference & Test-Time Compute: Open questions and competing hypotheses becomes visible after strong interest/participation in AI-RSH-067 — Reasoning Systems: Implement a simplified paper idea.

## JANUARY — Cross modalities

**Monthly coherence.** All three tracks examine **Multimodal AI**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-RSH-038 — Multimodal AI: The intuition before the equations**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible research walkthrough on text, image, audio, video, cross-modal representations, grounding, and multimodal product implications. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind multimodal ai, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-RSH-035 · **Related:** AI-RSH-010, AI-RSH-064 · **Follow-up:** AI-RSH-047, AI-RSH-064

- **AI-RSH-037 — Multimodal AI: Read the diagram, not the hype**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible hands-on lab on text, image, audio, video, cross-modal representations, grounding, and multimodal product implications. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind multimodal ai, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-012, AI-RSH-065 · **Follow-up:** AI-RSH-065

- **AI-RSH-039 — Multimodal AI: What the result does and does not prove**  
  **Theme:** research · **Format:** debate · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible debate on text, image, audio, video, cross-modal representations, grounding, and multimodal product implications. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind multimodal ai, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-011, AI-RSH-066 · **Follow-up:** AI-RSH-066

### Practitioner

- **AI-RSH-064 — Multimodal AI: Implement a simplified paper idea**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical research walkthrough applying text, image, audio, video, cross-modal representations, grounding, and multimodal product implications in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic multimodal ai workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-038, AI-RSH-061 · **Related:** AI-RSH-010 · **Follow-up:** AI-RSH-010, AI-RSH-073

- **AI-RSH-065 — Multimodal AI: Reproduce one experiment carefully**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical hands-on lab applying text, image, audio, video, cross-modal representations, grounding, and multimodal product implications in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic multimodal ai workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-037 · **Related:** AI-RSH-012 · **Follow-up:** AI-RSH-012

- **AI-RSH-066 — Multimodal AI: Translate a paper into an engineering decision**  
  **Theme:** research · **Format:** debate · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical debate applying text, image, audio, video, cross-modal representations, grounding, and multimodal product implications in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic multimodal ai workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-039 · **Related:** AI-RSH-011 · **Follow-up:** AI-RSH-011

### Advanced

- **AI-RSH-010 — Multimodal AI: Deep research walkthrough**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced research walkthrough treating text, image, audio, video, cross-modal representations, grounding, and multimodal product implications as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving multimodal ai, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-007, AI-RSH-064 · **Related:** AI-RSH-038 · **Follow-up:** AI-RSH-019

- **AI-RSH-012 — Multimodal AI: Scaling laws, ablations, and hidden assumptions**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced hands-on lab treating text, image, audio, video, cross-modal representations, grounding, and multimodal product implications as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving multimodal ai, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-065 · **Related:** AI-RSH-037 · **Follow-up:** —

- **AI-RSH-011 — Multimodal AI: Open questions and competing hypotheses**  
  **Theme:** research · **Format:** debate · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced debate treating text, image, audio, video, cross-modal representations, grounding, and multimodal product implications as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving multimodal ai, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-066 · **Related:** AI-RSH-039 · **Follow-up:** —

### Cross-track pathway

**AI-RSH-038 Multimodal AI: The intuition before the equations** → **AI-RSH-064 Multimodal AI: Implement a simplified paper idea** → **AI-RSH-010 Multimodal AI: Deep research walkthrough**

### Voting opportunities

- **Non-negotiable foundation:** AI-RSH-038 — Multimodal AI: The intuition before the equations. It protects prerequisites for later months.
- **Voting cluster:** AI-RSH-039 — Multimodal AI: What the result does and does not prove; AI-RSH-065 — Multimodal AI: Reproduce one experiment carefully; AI-RSH-066 — Multimodal AI: Translate a paper into an engineering decision; AI-RSH-012 — Multimodal AI: Scaling laws, ablations, and hidden assumptions.
- **Conditional unlock:** AI-RSH-011 — Multimodal AI: Open questions and competing hypotheses becomes visible after strong interest/participation in AI-RSH-061 — Inference & Test-Time Compute: Implement a simplified paper idea.

## FEBRUARY — Specialize the model

**Monthly coherence.** All three tracks examine **Small & Specialized Models**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-RSH-047 — Small & Specialized Models: The intuition before the equations**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible hands-on lab on compact models, domain specialization, distillation, edge deployment, and when smaller models beat general-purpose models. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind small & specialized models, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-RSH-038 · **Related:** AI-RSH-019, AI-RSH-073 · **Follow-up:** AI-RSH-032, AI-RSH-073

- **AI-RSH-046 — Small & Specialized Models: Read the diagram, not the hype**  
  **Theme:** research · **Format:** debate · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible debate on compact models, domain specialization, distillation, edge deployment, and when smaller models beat general-purpose models. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind small & specialized models, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-021, AI-RSH-074 · **Follow-up:** AI-RSH-074

- **AI-RSH-048 — Small & Specialized Models: What the result does and does not prove**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible research walkthrough on compact models, domain specialization, distillation, edge deployment, and when smaller models beat general-purpose models. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind small & specialized models, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-020, AI-RSH-075 · **Follow-up:** AI-RSH-075

### Practitioner

- **AI-RSH-073 — Small & Specialized Models: Implement a simplified paper idea**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical hands-on lab applying compact models, domain specialization, distillation, edge deployment, and when smaller models beat general-purpose models in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic small & specialized models workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-047, AI-RSH-064 · **Related:** AI-RSH-019 · **Follow-up:** AI-RSH-019, AI-RSH-058

- **AI-RSH-074 — Small & Specialized Models: Reproduce one experiment carefully**  
  **Theme:** research · **Format:** debate · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical debate applying compact models, domain specialization, distillation, edge deployment, and when smaller models beat general-purpose models in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic small & specialized models workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-046 · **Related:** AI-RSH-021 · **Follow-up:** AI-RSH-021

- **AI-RSH-075 — Small & Specialized Models: Translate a paper into an engineering decision**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical research walkthrough applying compact models, domain specialization, distillation, edge deployment, and when smaller models beat general-purpose models in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic small & specialized models workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-048 · **Related:** AI-RSH-020 · **Follow-up:** AI-RSH-020

### Advanced

- **AI-RSH-019 — Small & Specialized Models: Deep research walkthrough**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced hands-on lab treating compact models, domain specialization, distillation, edge deployment, and when smaller models beat general-purpose models as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving small & specialized models, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-010, AI-RSH-073 · **Related:** AI-RSH-047 · **Follow-up:** AI-RSH-004

- **AI-RSH-021 — Small & Specialized Models: Scaling laws, ablations, and hidden assumptions**  
  **Theme:** research · **Format:** debate · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced debate treating compact models, domain specialization, distillation, edge deployment, and when smaller models beat general-purpose models as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving small & specialized models, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-074 · **Related:** AI-RSH-046 · **Follow-up:** —

- **AI-RSH-020 — Small & Specialized Models: Open questions and competing hypotheses**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced research walkthrough treating compact models, domain specialization, distillation, edge deployment, and when smaller models beat general-purpose models as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving small & specialized models, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-075 · **Related:** AI-RSH-048 · **Follow-up:** —

### Cross-track pathway

**AI-RSH-047 Small & Specialized Models: The intuition before the equations** → **AI-RSH-073 Small & Specialized Models: Implement a simplified paper idea** → **AI-RSH-019 Small & Specialized Models: Deep research walkthrough**

### Voting opportunities

- **Non-negotiable foundation:** AI-RSH-047 — Small & Specialized Models: The intuition before the equations. It protects prerequisites for later months.
- **Voting cluster:** AI-RSH-048 — Small & Specialized Models: What the result does and does not prove; AI-RSH-074 — Small & Specialized Models: Reproduce one experiment carefully; AI-RSH-075 — Small & Specialized Models: Translate a paper into an engineering decision; AI-RSH-021 — Small & Specialized Models: Scaling laws, ablations, and hidden assumptions.
- **Conditional unlock:** AI-RSH-020 — Small & Specialized Models: Open questions and competing hypotheses becomes visible after strong interest/participation in AI-RSH-064 — Multimodal AI: Implement a simplified paper idea.

## MARCH — Adapt behavior

**Monthly coherence.** All three tracks examine **Fine-Tuning & Adaptation**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-RSH-032 — Fine-Tuning & Adaptation: The intuition before the equations**  
  **Theme:** research · **Format:** debate · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible debate on supervised fine-tuning, preference optimization, adapters, data quality, evaluation, and when adaptation is justified. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind fine-tuning & adaptation, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-RSH-047 · **Related:** AI-RSH-004, AI-RSH-058 · **Follow-up:** AI-RSH-050, AI-RSH-058

- **AI-RSH-031 — Fine-Tuning & Adaptation: Read the diagram, not the hype**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible research walkthrough on supervised fine-tuning, preference optimization, adapters, data quality, evaluation, and when adaptation is justified. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind fine-tuning & adaptation, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-006, AI-RSH-059 · **Follow-up:** AI-RSH-059

- **AI-RSH-033 — Fine-Tuning & Adaptation: What the result does and does not prove**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible hands-on lab on supervised fine-tuning, preference optimization, adapters, data quality, evaluation, and when adaptation is justified. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind fine-tuning & adaptation, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-005, AI-RSH-060 · **Follow-up:** AI-RSH-060

### Practitioner

- **AI-RSH-058 — Fine-Tuning & Adaptation: Implement a simplified paper idea**  
  **Theme:** research · **Format:** debate · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical debate applying supervised fine-tuning, preference optimization, adapters, data quality, evaluation, and when adaptation is justified in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic fine-tuning & adaptation workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-032, AI-RSH-073 · **Related:** AI-RSH-004 · **Follow-up:** AI-RSH-004, AI-RSH-076

- **AI-RSH-059 — Fine-Tuning & Adaptation: Reproduce one experiment carefully**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical research walkthrough applying supervised fine-tuning, preference optimization, adapters, data quality, evaluation, and when adaptation is justified in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic fine-tuning & adaptation workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-031 · **Related:** AI-RSH-006 · **Follow-up:** AI-RSH-006

- **AI-RSH-060 — Fine-Tuning & Adaptation: Translate a paper into an engineering decision**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical hands-on lab applying supervised fine-tuning, preference optimization, adapters, data quality, evaluation, and when adaptation is justified in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic fine-tuning & adaptation workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-033 · **Related:** AI-RSH-005 · **Follow-up:** AI-RSH-005

### Advanced

- **AI-RSH-004 — Fine-Tuning & Adaptation: Deep research walkthrough**  
  **Theme:** research · **Format:** debate · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced debate treating supervised fine-tuning, preference optimization, adapters, data quality, evaluation, and when adaptation is justified as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving fine-tuning & adaptation, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-019, AI-RSH-058 · **Related:** AI-RSH-032 · **Follow-up:** AI-RSH-022

- **AI-RSH-006 — Fine-Tuning & Adaptation: Scaling laws, ablations, and hidden assumptions**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced research walkthrough treating supervised fine-tuning, preference optimization, adapters, data quality, evaluation, and when adaptation is justified as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving fine-tuning & adaptation, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-059 · **Related:** AI-RSH-031 · **Follow-up:** —

- **AI-RSH-005 — Fine-Tuning & Adaptation: Open questions and competing hypotheses**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced hands-on lab treating supervised fine-tuning, preference optimization, adapters, data quality, evaluation, and when adaptation is justified as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving fine-tuning & adaptation, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-060 · **Related:** AI-RSH-033 · **Follow-up:** —

### Cross-track pathway

**AI-RSH-032 Fine-Tuning & Adaptation: The intuition before the equations** → **AI-RSH-058 Fine-Tuning & Adaptation: Implement a simplified paper idea** → **AI-RSH-004 Fine-Tuning & Adaptation: Deep research walkthrough**

### Voting opportunities

- **Non-negotiable foundation:** AI-RSH-032 — Fine-Tuning & Adaptation: The intuition before the equations. It protects prerequisites for later months.
- **Voting cluster:** AI-RSH-033 — Fine-Tuning & Adaptation: What the result does and does not prove; AI-RSH-059 — Fine-Tuning & Adaptation: Reproduce one experiment carefully; AI-RSH-060 — Fine-Tuning & Adaptation: Translate a paper into an engineering decision; AI-RSH-006 — Fine-Tuning & Adaptation: Scaling laws, ablations, and hidden assumptions.
- **Conditional unlock:** AI-RSH-005 — Fine-Tuning & Adaptation: Open questions and competing hypotheses becomes visible after strong interest/participation in AI-RSH-073 — Small & Specialized Models: Implement a simplified paper idea.

## APRIL — Create data

**Monthly coherence.** All three tracks examine **Synthetic Data**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-RSH-050 — Synthetic Data: The intuition before the equations**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Current  
  An accessible research walkthrough on data generation, filtering, diversity, contamination, self-improvement loops, and synthetic-data evaluation. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind synthetic data, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-RSH-032 · **Related:** AI-RSH-022, AI-RSH-076 · **Follow-up:** AI-RSH-029, AI-RSH-076

- **AI-RSH-049 — Synthetic Data: Read the diagram, not the hype**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An accessible hands-on lab on data generation, filtering, diversity, contamination, self-improvement loops, and synthetic-data evaluation. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind synthetic data, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-024, AI-RSH-077 · **Follow-up:** AI-RSH-077

- **AI-RSH-051 — Synthetic Data: What the result does and does not prove**  
  **Theme:** research · **Format:** debate · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An accessible debate on data generation, filtering, diversity, contamination, self-improvement loops, and synthetic-data evaluation. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind synthetic data, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-023, AI-RSH-078 · **Follow-up:** AI-RSH-078

### Practitioner

- **AI-RSH-076 — Synthetic Data: Implement a simplified paper idea**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  A practical research walkthrough applying data generation, filtering, diversity, contamination, self-improvement loops, and synthetic-data evaluation in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic synthetic data workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-050, AI-RSH-058 · **Related:** AI-RSH-022 · **Follow-up:** AI-RSH-022, AI-RSH-055

- **AI-RSH-077 — Synthetic Data: Reproduce one experiment carefully**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  A practical hands-on lab applying data generation, filtering, diversity, contamination, self-improvement loops, and synthetic-data evaluation in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic synthetic data workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-049 · **Related:** AI-RSH-024 · **Follow-up:** AI-RSH-024

- **AI-RSH-078 — Synthetic Data: Translate a paper into an engineering decision**  
  **Theme:** research · **Format:** debate · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Current  
  A practical debate applying data generation, filtering, diversity, contamination, self-improvement loops, and synthetic-data evaluation in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic synthetic data workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-051 · **Related:** AI-RSH-023 · **Follow-up:** AI-RSH-023

### Advanced

- **AI-RSH-022 — Synthetic Data: Deep research walkthrough**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Current  
  An advanced research walkthrough treating data generation, filtering, diversity, contamination, self-improvement loops, and synthetic-data evaluation as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving synthetic data, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-004, AI-RSH-076 · **Related:** AI-RSH-050 · **Follow-up:** AI-RSH-001

- **AI-RSH-024 — Synthetic Data: Scaling laws, ablations, and hidden assumptions**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Current  
  An advanced hands-on lab treating data generation, filtering, diversity, contamination, self-improvement loops, and synthetic-data evaluation as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving synthetic data, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-077 · **Related:** AI-RSH-049 · **Follow-up:** —

- **AI-RSH-023 — Synthetic Data: Open questions and competing hypotheses**  
  **Theme:** research · **Format:** debate · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced debate treating data generation, filtering, diversity, contamination, self-improvement loops, and synthetic-data evaluation as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving synthetic data, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-078 · **Related:** AI-RSH-051 · **Follow-up:** —

### Cross-track pathway

**AI-RSH-050 Synthetic Data: The intuition before the equations** → **AI-RSH-076 Synthetic Data: Implement a simplified paper idea** → **AI-RSH-022 Synthetic Data: Deep research walkthrough**

### Voting opportunities

- **Non-negotiable foundation:** AI-RSH-050 — Synthetic Data: The intuition before the equations. It protects prerequisites for later months.
- **Voting cluster:** AI-RSH-051 — Synthetic Data: What the result does and does not prove; AI-RSH-077 — Synthetic Data: Reproduce one experiment carefully; AI-RSH-078 — Synthetic Data: Translate a paper into an engineering decision; AI-RSH-024 — Synthetic Data: Scaling laws, ablations, and hidden assumptions.
- **Conditional unlock:** AI-RSH-023 — Synthetic Data: Open questions and competing hypotheses becomes visible after strong interest/participation in AI-RSH-058 — Fine-Tuning & Adaptation: Implement a simplified paper idea.

## MAY — Challenge the architecture

**Monthly coherence.** All three tracks examine **Emerging Model Architectures**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-RSH-029 — Emerging Model Architectures: The intuition before the equations**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Experimental  
  An accessible hands-on lab on alternatives and extensions to mainstream transformer designs, with emphasis on evidence rather than novelty. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind emerging model architectures, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-RSH-050 · **Related:** AI-RSH-001, AI-RSH-055 · **Follow-up:** AI-RSH-044, AI-RSH-055

- **AI-RSH-028 — Emerging Model Architectures: Read the diagram, not the hype**  
  **Theme:** research · **Format:** debate · **Status:** Core · **Voting:** Recommended · **Durability:** Experimental  
  An accessible debate on alternatives and extensions to mainstream transformer designs, with emphasis on evidence rather than novelty. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind emerging model architectures, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-003, AI-RSH-056 · **Follow-up:** AI-RSH-056

- **AI-RSH-030 — Emerging Model Architectures: What the result does and does not prove**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Experimental  
  An accessible research walkthrough on alternatives and extensions to mainstream transformer designs, with emphasis on evidence rather than novelty. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind emerging model architectures, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-002, AI-RSH-057 · **Follow-up:** AI-RSH-057

### Practitioner

- **AI-RSH-055 — Emerging Model Architectures: Implement a simplified paper idea**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Experimental  
  A practical hands-on lab applying alternatives and extensions to mainstream transformer designs, with emphasis on evidence rather than novelty in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic emerging model architectures workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-029, AI-RSH-076 · **Related:** AI-RSH-001 · **Follow-up:** AI-RSH-001, AI-RSH-070

- **AI-RSH-056 — Emerging Model Architectures: Reproduce one experiment carefully**  
  **Theme:** research · **Format:** debate · **Status:** Elective · **Voting:** Freely votable · **Durability:** Experimental  
  A practical debate applying alternatives and extensions to mainstream transformer designs, with emphasis on evidence rather than novelty in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic emerging model architectures workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-028 · **Related:** AI-RSH-003 · **Follow-up:** AI-RSH-003

- **AI-RSH-057 — Emerging Model Architectures: Translate a paper into an engineering decision**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  A practical research walkthrough applying alternatives and extensions to mainstream transformer designs, with emphasis on evidence rather than novelty in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic emerging model architectures workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-030 · **Related:** AI-RSH-002 · **Follow-up:** AI-RSH-002

### Advanced

- **AI-RSH-001 — Emerging Model Architectures: Deep research walkthrough**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Core · **Voting:** Recommended · **Durability:** Experimental  
  An advanced hands-on lab treating alternatives and extensions to mainstream transformer designs, with emphasis on evidence rather than novelty as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving emerging model architectures, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-022, AI-RSH-055 · **Related:** AI-RSH-029 · **Follow-up:** AI-RSH-016

- **AI-RSH-003 — Emerging Model Architectures: Scaling laws, ablations, and hidden assumptions**  
  **Theme:** research · **Format:** debate · **Status:** Elective · **Voting:** Freely votable · **Durability:** Experimental  
  An advanced debate treating alternatives and extensions to mainstream transformer designs, with emphasis on evidence rather than novelty as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving emerging model architectures, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-056 · **Related:** AI-RSH-028 · **Follow-up:** —

- **AI-RSH-002 — Emerging Model Architectures: Open questions and competing hypotheses**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced research walkthrough treating alternatives and extensions to mainstream transformer designs, with emphasis on evidence rather than novelty as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving emerging model architectures, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-057 · **Related:** AI-RSH-030 · **Follow-up:** —

### Cross-track pathway

**AI-RSH-029 Emerging Model Architectures: The intuition before the equations** → **AI-RSH-055 Emerging Model Architectures: Implement a simplified paper idea** → **AI-RSH-001 Emerging Model Architectures: Deep research walkthrough**

### Voting opportunities

- **Non-negotiable foundation:** AI-RSH-029 — Emerging Model Architectures: The intuition before the equations. It protects prerequisites for later months.
- **Voting cluster:** AI-RSH-030 — Emerging Model Architectures: What the result does and does not prove; AI-RSH-056 — Emerging Model Architectures: Reproduce one experiment carefully; AI-RSH-057 — Emerging Model Architectures: Translate a paper into an engineering decision; AI-RSH-003 — Emerging Model Architectures: Scaling laws, ablations, and hidden assumptions.
- **Conditional unlock:** AI-RSH-002 — Emerging Model Architectures: Open questions and competing hypotheses becomes visible after strong interest/participation in AI-RSH-076 — Synthetic Data: Implement a simplified paper idea.

## JUNE — Reproduce evidence

**Monthly coherence.** All three tracks examine **Research Reproduction Studio**, but at increasing depth: Foundation builds the mental model, Practitioner implements or tests it, and Advanced treats it as an architecture/reliability problem. This prevents the month from becoming three unrelated mini-conferences.

### Foundation

- **AI-RSH-044 — Research Reproduction Studio: The intuition before the equations**  
  **Theme:** research · **Format:** debate · **Status:** Core · **Voting:** Locked / editorial · **Durability:** Durable  
  An accessible debate on reading papers critically, reproducing a tractable result, documenting deviations, and converting evidence into engineering insight. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind research reproduction studio, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** AI-RSH-029 · **Related:** AI-RSH-016, AI-RSH-070 · **Follow-up:** AI-RSH-070

- **AI-RSH-043 — Research Reproduction Studio: Read the diagram, not the hype**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An accessible research walkthrough on reading papers critically, reproducing a tractable result, documenting deviations, and converting evidence into engineering insight. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind research reproduction studio, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-018, AI-RSH-071 · **Follow-up:** AI-RSH-071

- **AI-RSH-045 — Research Reproduction Studio: What the result does and does not prove**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An accessible hands-on lab on reading papers critically, reproducing a tractable result, documenting deviations, and converting evidence into engineering insight. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.  
  **Outcome:** Explain the core ideas behind research reproduction studio, recognize its common failure modes, and decide when the technique is appropriate.  
  **Prerequisites:** None · **Related:** AI-RSH-017, AI-RSH-072 · **Follow-up:** AI-RSH-072

### Practitioner

- **AI-RSH-070 — Research Reproduction Studio: Implement a simplified paper idea**  
  **Theme:** research · **Format:** debate · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  A practical debate applying reading papers critically, reproducing a tractable result, documenting deviations, and converting evidence into engineering insight in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic research reproduction studio workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-044, AI-RSH-055 · **Related:** AI-RSH-016 · **Follow-up:** AI-RSH-016

- **AI-RSH-071 — Research Reproduction Studio: Reproduce one experiment carefully**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  A practical research walkthrough applying reading papers critically, reproducing a tractable result, documenting deviations, and converting evidence into engineering insight in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic research reproduction studio workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-043 · **Related:** AI-RSH-018 · **Follow-up:** AI-RSH-018

- **AI-RSH-072 — Research Reproduction Studio: Translate a paper into an engineering decision**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Elective · **Voting:** Conditional / unlockable · **Durability:** Durable  
  A practical hands-on lab applying reading papers critically, reproducing a tractable result, documenting deviations, and converting evidence into engineering insight in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.  
  **Outcome:** Implement or critique a realistic research reproduction studio workflow, make explicit trade-offs, and verify it with tests or measurements.  
  **Prerequisites:** AI-RSH-045 · **Related:** AI-RSH-017 · **Follow-up:** AI-RSH-017

### Advanced

- **AI-RSH-016 — Research Reproduction Studio: Deep research walkthrough**  
  **Theme:** research · **Format:** debate · **Status:** Core · **Voting:** Recommended · **Durability:** Durable  
  An advanced debate treating reading papers critically, reproducing a tractable result, documenting deviations, and converting evidence into engineering insight as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving research reproduction studio, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-001, AI-RSH-070 · **Related:** AI-RSH-044 · **Follow-up:** —

- **AI-RSH-018 — Research Reproduction Studio: Scaling laws, ablations, and hidden assumptions**  
  **Theme:** research · **Format:** research walkthrough · **Status:** Elective · **Voting:** Freely votable · **Durability:** Durable  
  An advanced research walkthrough treating reading papers critically, reproducing a tractable result, documenting deviations, and converting evidence into engineering insight as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving research reproduction studio, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-071 · **Related:** AI-RSH-043 · **Follow-up:** —

- **AI-RSH-017 — Research Reproduction Studio: Open questions and competing hypotheses**  
  **Theme:** research · **Format:** hands-on lab · **Status:** Experimental · **Voting:** Conditional / unlockable · **Durability:** Experimental  
  An advanced hands-on lab treating reading papers critically, reproducing a tractable result, documenting deviations, and converting evidence into engineering insight as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.  
  **Outcome:** Design and defend an architecture involving research reproduction studio, including reliability, security, scale, and evaluation considerations.  
  **Prerequisites:** AI-RSH-072 · **Related:** AI-RSH-045 · **Follow-up:** —

### Cross-track pathway

**AI-RSH-044 Research Reproduction Studio: The intuition before the equations** → **AI-RSH-070 Research Reproduction Studio: Implement a simplified paper idea** → **AI-RSH-016 Research Reproduction Studio: Deep research walkthrough**

### Voting opportunities

- **Non-negotiable foundation:** AI-RSH-044 — Research Reproduction Studio: The intuition before the equations. It protects prerequisites for later months.
- **Voting cluster:** AI-RSH-045 — Research Reproduction Studio: What the result does and does not prove; AI-RSH-071 — Research Reproduction Studio: Reproduce one experiment carefully; AI-RSH-072 — Research Reproduction Studio: Translate a paper into an engineering decision; AI-RSH-018 — Research Reproduction Studio: Scaling laws, ablations, and hidden assumptions.
- **Conditional unlock:** AI-RSH-017 — Research Reproduction Studio: Open questions and competing hypotheses becomes visible after strong interest/participation in AI-RSH-055 — Emerging Model Architectures: Implement a simplified paper idea.

## 6. Longitudinal pathways

- **Foundation spine:** Oct [F] AI-RSH-053 Transformers from First Principles → Dec [F] AI-RSH-035 Inference & Test-Time Compute → Feb [F] AI-RSH-047 Small & Specialized Models → Apr [F] AI-RSH-050 Synthetic Data → Jun [F] AI-RSH-044 Research Reproduction Studio
- **Practitioner spine:** Oct [P] AI-RSH-079 Transformers from First Principles → Dec [P] AI-RSH-061 Inference & Test-Time Compute → Feb [P] AI-RSH-073 Small & Specialized Models → Apr [P] AI-RSH-076 Synthetic Data → Jun [P] AI-RSH-070 Research Reproduction Studio
- **Advanced spine:** Oct [A] AI-RSH-025 Transformers from First Principles → Dec [A] AI-RSH-007 Inference & Test-Time Compute → Feb [A] AI-RSH-019 Small & Specialized Models → Apr [A] AI-RSH-022 Synthetic Data → Jun [A] AI-RSH-016 Research Reproduction Studio

## 7. Branching paths

```text
AI-RSH-064 Multimodal AI
├── implementation branch → AI-RSH-074 Small & Specialized Models
├── architecture branch   → AI-RSH-006 Fine-Tuning & Adaptation
└── frontier branch       → AI-RSH-023 Synthetic Data
```

Member interest can determine which branch receives a live workshop versus becoming optional reading/lab material. The prerequisite spine remains protected.

## 8. Season-level voting model

- **Editorially protected:** first Foundation topic each month, plus any prerequisite explicitly required by a later Core session.
- **Primary voting surface:** Elective Foundation topics, Practitioner trade-off labs, and Advanced architecture alternatives.
- **Unlockable:** Experimental Advanced sessions and frontier branches; reveal only after participation or interest thresholds are met.
- **Wild-card slot:** reserve at least one spring session for an emerging development that passes editorial relevance and evidence checks.

## 9. Simplified programme graph

```text
[Oct] AI-RSH-079 Transformers from First Principles
      ↓
[Nov] AI-RSH-067 Reasoning Systems
      ↓
[Jan] AI-RSH-064 Multimodal AI
      ↓
[Feb] AI-RSH-073 Small & Specialized Models
      ↓
[Apr] AI-RSH-076 Synthetic Data
      ↓
[Jun] AI-RSH-070 Research Reproduction Studio
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
- **Hands-on intensity:** 4/5
- **Production relevance:** 3/5
- **Research orientation:** 5/5
