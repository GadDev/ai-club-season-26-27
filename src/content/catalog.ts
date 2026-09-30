import { categories1 } from "./catalog-data-1";
import { categories2 } from "./catalog-data-2";
import { categories3 } from "./catalog-data-3";
import { categories4 } from "./catalog-data-4";
import type { CatalogTopic, CatalogTrack } from "./catalog-types";

export type { CatalogTopic, CatalogTrack } from "./catalog-types";

const FORMATS = ["architecture clinic","case study","challenge","code review","debate","experiment","hands-on lab","live coding","panel","presentation","red-team session","research walkthrough","workshop"] as const;
const CURRICULUM_STATUSES = ["Core","Elective","Experimental"] as const;
const VOTING_STATUSES = ["Conditional / unlockable","Freely votable","Locked / editorial","Recommended"] as const;
const DURABILITIES = ["Current","Durable","Experimental"] as const;
const PROGRAMMES = ["AI Architecture","AI Engineering Foundations","AI Experimental Lab","Agentic Systems","Full-Stack AI Product Engineer","Future of Software Engineering","Production AI Engineering","Research to Engineering","The AI-Augmented Developer"] as const;
const MONTHS = ["April","December","February","January","June","March","May","November","October"] as const;
const TRACK_ORDER = ["Advanced", "Foundation", "Practitioner"] as const;
const CATEGORIES = [...categories1, ...categories2, ...categories3, ...categories4];

function descriptionFor(track: CatalogTrack, format: string, summary: string) {
  if (track === "Advanced") {
    return `An advanced ${format} treating ${summary} as a systems problem. The session focuses on architecture, reliability, scale, trust boundaries, and the assumptions that fail under production or adversarial conditions.`;
  }
  if (track === "Foundation") {
    return `An accessible ${format} on ${summary}. The emphasis is a clear mental model, concrete examples, and the boundaries of the idea rather than framework-specific recipes.`;
  }
  return `A practical ${format} applying ${summary} in a working engineering scenario. Participants compare implementation choices, instrument the result, and examine failure modes rather than stopping at a happy-path demo.`;
}

const decode = (value: string, offset: number) => parseInt(value[offset], 16);

export const catalogTopics: CatalogTopic[] = CATEGORIES.flatMap((category) => {
  let sequence = 1;
  const topics: CatalogTopic[] = [];
  for (const track of TRACK_ORDER) {
    for (const concept of category.concepts) {
      for (let variant = 0; variant < 3; variant += 1) {
        const topicOffset = (TRACK_ORDER.indexOf(track) * 3 + variant) * 4;
        const format = FORMATS[decode(concept.meta, topicOffset)];
        topics.push({
          id: `AI-${category.code}-${String(sequence).padStart(3, "0")}`,
          title: `${concept.title}: ${category.suffixes[track][variant]}`,
          track,
          category: category.name,
          format,
          description: descriptionFor(track, format, concept.summary),
          curriculum_status: CURRICULUM_STATUSES[decode(concept.meta, topicOffset + 1)],
          voting_status: VOTING_STATUSES[decode(concept.meta, topicOffset + 2)],
          durability: DURABILITIES[decode(concept.meta, topicOffset + 3)],
          programmes: concept.programmes.map((index) => PROGRAMMES[index]),
          months: concept.months.map((index) => MONTHS[index]),
        });
        sequence += 1;
      }
    }
  }
  return topics;
});

export default catalogTopics;
